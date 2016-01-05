const rx = global.Rx || require('rx');
const rxo = rx.Observable;
const massive = require("massive");

function cb(f, target) {
  return rxo.fromNodeCallback(f, target);
}

function upsertDoc(_this, table, searchFor, val) {
  return _this.searchDoc(table, searchFor).flatMap( x => 
      x===null || 
      (x.length===0) ? 
        _this.saveDoc(table, val) : rxo.just(x));
}

/*
searchDoc({
  keys : ["title", "description"],
  term : "Kauai"
}
*/

function rxify(db) {
  const api = {
    run: rxo.fromNodeCallback(db.run, db),
    save: rxo.fromNodeCallback(db.save, db),
    saveDoc: rxo.fromNodeCallback(db.saveDoc, db),
    destroy: (table, ...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].destroy, db[table])(...args)),
    searchDoc: (table, ...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].searchDoc, db[table])(...args)),
    find: (table, ...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].find, db[table])(...args)),
    findDoc: (table, ...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].findDoc, db[table])(...args)),
    where: (table, ...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].where, db[table])(...args)),
    findOne: (table, ...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].findOne, db[table])(...args)),
    upsertDoc: (table, searchFor, default_val) => upsertDoc(api, table, searchFor, default_val),
    fromTable: table => ({
      save: (...args) => rxo.fromNodeCallback(db.save, db)(table, ...args),
      saveDoc: (...args) => rxo.fromNodeCallback(db.saveDoc, db)(table, ...args),
      destroy: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].destroy, db[table])(...args)),
      searchDoc: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].searchDoc, db[table])(...args)),
      find: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].find, db[table])(...args)),
      findDoc: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].findDoc, db[table])(...args)),
      where: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].where, db[table])(...args)),
      findOne: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].findOne, db[table])(...args)),
      upsertDoc: (searchFor, default_val) => upsertDoc(api, table, searchFor, default_val)
    })
  };
  return api;
}

export function connectSync(opt) {
  const db = massive.connectSync(opt);
  return new rxify(db);
}

export function connect(opt) {
  const connect = rxo.fromNodeCallback(massive.connect, massive)
  return connect(opt).map(rxify);
}

export function connectMassive(db) {
  if(!db) throw new Error('db parameter not set');
  return new rxify(db);
}
