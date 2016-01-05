const rx = global.Rx || require('rx');
const rxo = rx.Observable;
const massive = require("massive");

function cb(f, target) {
  return rxo.fromNodeCallback(f, target);
}

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
    fromTable: table => ({
      save: (...args) => rxo.fromNodeCallback(db.save, db)(table, ...args),
      saveDoc: (...args) => rxo.fromNodeCallback(db.saveDoc, db)(table, ...args),
      destroy: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].destroy, db[table])(...args)),
      searchDoc: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].searchDoc, db[table])(...args)),
      find: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].find, db[table])(...args)),
      findDoc: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].findDoc, db[table])(...args)),
      where: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].where, db[table])(...args)),
      findOne: (...args) => rxo.defer(_ => rxo.fromNodeCallback(db[table].findOne, db[table])(...args)),
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
