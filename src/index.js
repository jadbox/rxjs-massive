const rx = global.Rx || require('rx');
const rxo = rx.Observable;
const massive = require("massive");

function rxify(db) {
  return {
    run: rxo.fromNodeCallback(db.run, db),
    saveDoc: rxo.fromNodeCallback(db.saveDoc, db),
    destroy: (table, ...args) => rxo.fromNodeCallback(db[table].destroy, db[table])(...args),
    searchDoc: (table, ...args) => rxo.fromNodeCallback(db[table].searchDoc, db[table])(...args),
    find: (table, ...args) => rxo.fromNodeCallback(db[table].find, db[table])(...args),
    findDoc: (table, ...args) => rxo.fromNodeCallback(db[table].findDoc, db[table])(...args),
    where: (table, ...args) => rxo.fromNodeCallback(db[table].where, db[table])(...args),
    findOne: (table, ...args) => rxo.fromNodeCallback(db[table].findOne, db[table])(...args),
    save: (table, ...args) => rxo.fromNodeCallback(db[table].save, db[table])(...args),
    setTable: table => ({
      destroy: rxo.fromNodeCallback(db[table].destroy, db[table]),
      searchDoc: rxo.fromNodeCallback(db[table].searchDoc, db[table]),
      find: rxo.fromNodeCallback(db[table].find, db[table]),
      findDoc: rxo.fromNodeCallback(db[table].findDoc, db[table]),
      where: rxo.fromNodeCallback(db[table].where, db[table])(...args),
      findOne: rxo.fromNodeCallback(db[table].findOne, db[table]),
      save: rxo.fromNodeCallback(db[table].save, db[table])
    })
  }
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
