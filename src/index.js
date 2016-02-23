const rx = global.Rx || require('rx');
const rxo = rx.Observable;
const massive = require("massive");

function cb(f, target, ...args) {
  return rxo.defer(_ => rxo.fromNodeCallback(f, target)(...args));
}

function cbi(f, target, ...args) {
  return rxo.defer(_ => rxo.fromNodeCallback(f, target)(...args));
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
    run: (...args) => cbi(db.run, db, ...args),
    save: (...args) => cbi(db.save, db, ...args),
    saveDoc: (...args) => cbi(db.saveDoc, db, ...args),
    insert: (table, ...args) => cb(db[table].insert, db[table], ...args),
    destroy: (table, ...args) => cb(db[table].destroy, db[table], ...args),
    searchDoc: (table, ...args) => cb(db[table].searchDoc, db[table], ...args),
    find: (table, ...args) => cb(db[table].find, db[table], ...args),
    findDoc: (table, ...args) => cb(db[table].findDoc, db[table], ...args),
    where: (table, ...args) => cb(db[table].where, db[table], ...args),
    findOne: (table, ...args) => cb(db[table].findOne, db[table], ...args),
    update: (table, ...args) => cb(db[table].update, db[table], ...args),
    /*
    // Not supported
    fromSchemaTable: (schema, table) => ({
        db: db,
        save: (...args) => cbi(db[schema][table].save, db[schema][table], ...args),
        insert: (...args) => cb(db[schema][table].insert, db[schema][table], ...args),
        saveDoc: (...args) => cbi(db[schema][table].saveDoc, db[schema][table], ...args),
        destroy: (...args) => cb(db[schema][table].destroy, db[schema][table], ...args),
        searchDoc: (...args) => cb(db[schema][table].searchDoc, db[schema][table], ...args),
        update: (...args) => cb(db[schema][table].update, db[schema][table], ...args),
        find: (...args) => cb(db[schema][table].find, db[schema][table], ...args),
        findDoc: (...args) => cb(db[schema][table].findDoc, db[schema][table], ...args),
        where: (...args) => cb(db[schema][table].where, db[schema][table], ...args),
        findOne: (...args) => cb(db[schema][table].findOne, db[schema][table], ...args)
      }),
    */

    fromTable: (table) => ({
        db: db,
        save: (...args) => cb(db[table].save, db[table], ...args),
        saveDoc: (...args) => cb(db[table].saveDoc, db[table], ...args),
        insert: (...args) => cb(db[table].insert, db[table], ...args),
        destroy: (...args) => cb(db[table].destroy, db[table], ...args),
        searchDoc: (...args) => cb(db[table].searchDoc, db[table], ...args),
        update: (...args) => cb(db[table].update, db[table], ...args),
        find: (...args) => cb(db[table].find, db[table], ...args),
        findDoc: (...args) => cb(db[table].findDoc, db[table], ...args),
        where: (...args) => cb(db[table].where, db[table], ...args),
        findOne: (...args) => cb(db[table].findOne, db[table], ...args)
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
