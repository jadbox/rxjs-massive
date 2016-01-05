const rx = global.Rx || require('rx');
const rxo = rx.Observable;
const massive = require("massive");

function cb(f, ...args) {
  return rxo.defer(_ => rxo.fromNodeCallback(f)(...args));
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
    db: db,
    run: (...args) => cb(::db.run, ...args),
    save: (...args) => cb(::db.save, ...args),
    saveDoc: (...args) => cb(::db.saveDoc, ...args),
    insert: (table, ...args) => cb(::db[table].insert, ...args),
    destroy: (table, ...args) => cb(::db[table].destroy, ...args),
    searchDoc: (table, ...args) => cb(::db[table].searchDoc, ...args),
    find: (table, ...args) => cb(::db[table].find, ...args),
    findDoc: (table, ...args) => cb(::db[table].findDoc, ...args),
    where: (table, ...args) => cb(::db[table].where, ...args),
    findOne: (table, ...args) => cb(::db[table].findOne, ...args),
    update: (table, ...args) => cb(::db[table].update, ...args),
    
    fromTable: (schema, table) => ({
        db: db,
        save: (...args) => cb(::db[schema][table].save, ...args),
        insert: (...args) => cb(::db[schema][table].insert, ...args),
        saveDoc: (...args) => cb(::db[schema][table].saveDoc, ...args),
        destroy: (...args) => cb(::db[schema][table].destroy, ...args),
        searchDoc: (...args) => cb(::db[schema][table].searchDoc, ...args),
        update: (...args) => cb(::db[schema][table].update, ...args),
        find: (...args) => cb(::db[schema][table].find, ...args),
        findDoc: (...args) => cb(::db[schema][table].findDoc, ...args),
        where: (...args) => cb(::db[schema][table].where, ...args),
        findOne: (...args) => cb(::db[schema][table].findOne, ...args)
      })
  };
  return api;
}

export function connectSync(opt) {
  const db = massive.connectSync(opt);
  //console.log(db);
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
