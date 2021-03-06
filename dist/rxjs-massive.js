require("source-map-support").install();
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.connectSync = connectSync;
	exports.connect = connect;
	exports.connectMassive = connectMassive;
	var rx = global.Rx || __webpack_require__(1);
	var rxo = rx.Observable;
	var massive = __webpack_require__(2);
	
	function cb(f, target) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  return rxo.defer(function (_) {
	    return rxo.fromNodeCallback(f, target).apply(undefined, args);
	  });
	}
	
	function cbi(f, target) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    args[_key2 - 2] = arguments[_key2];
	  }
	
	  return rxo.defer(function (_) {
	    return rxo.fromNodeCallback(f, target).apply(undefined, args);
	  });
	}
	
	function upsertDoc(_this, table, searchFor, val) {
	  return _this.searchDoc(table, searchFor).flatMap(function (x) {
	    return x === null || x.length === 0 ? _this.saveDoc(table, val) : rxo.just(x);
	  });
	}
	
	/*
	searchDoc({
	  keys : ["title", "description"],
	  term : "Kauai"
	}
	*/
	
	function rxify(db) {
	  var api = {
	    db: db,
	    run: function run() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return cbi.apply(undefined, [db.run, db].concat(args));
	    },
	    save: function save() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      return cbi.apply(undefined, [db.save, db].concat(args));
	    },
	    saveDoc: function saveDoc() {
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      return cbi.apply(undefined, [db.saveDoc, db].concat(args));
	    },
	    insert: function insert(table) {
	      for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	        args[_key6 - 1] = arguments[_key6];
	      }
	
	      return cb.apply(undefined, [db[table].insert, db[table]].concat(args));
	    },
	    destroy: function destroy(table) {
	      for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	        args[_key7 - 1] = arguments[_key7];
	      }
	
	      return cb.apply(undefined, [db[table].destroy, db[table]].concat(args));
	    },
	    searchDoc: function searchDoc(table) {
	      for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
	        args[_key8 - 1] = arguments[_key8];
	      }
	
	      return cb.apply(undefined, [db[table].searchDoc, db[table]].concat(args));
	    },
	    find: function find(table) {
	      for (var _len9 = arguments.length, args = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
	        args[_key9 - 1] = arguments[_key9];
	      }
	
	      return cb.apply(undefined, [db[table].find, db[table]].concat(args));
	    },
	    findDoc: function findDoc(table) {
	      for (var _len10 = arguments.length, args = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
	        args[_key10 - 1] = arguments[_key10];
	      }
	
	      return cb.apply(undefined, [db[table].findDoc, db[table]].concat(args));
	    },
	    where: function where(table) {
	      for (var _len11 = arguments.length, args = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
	        args[_key11 - 1] = arguments[_key11];
	      }
	
	      return cb.apply(undefined, [db[table].where, db[table]].concat(args));
	    },
	    findOne: function findOne(table) {
	      for (var _len12 = arguments.length, args = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
	        args[_key12 - 1] = arguments[_key12];
	      }
	
	      return cb.apply(undefined, [db[table].findOne, db[table]].concat(args));
	    },
	    update: function update(table) {
	      for (var _len13 = arguments.length, args = Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
	        args[_key13 - 1] = arguments[_key13];
	      }
	
	      return cb.apply(undefined, [db[table].update, db[table]].concat(args));
	    },
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
	
	    fromTable: function fromTable(table) {
	      return {
	        db: db,
	        save: function save() {
	          for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
	            args[_key14] = arguments[_key14];
	          }
	
	          return cb.apply(undefined, [db[table].save, db[table]].concat(args));
	        },
	        saveDoc: function saveDoc() {
	          for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
	            args[_key15] = arguments[_key15];
	          }
	
	          return cb.apply(undefined, [db[table].saveDoc, db[table]].concat(args));
	        },
	        insert: function insert() {
	          for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
	            args[_key16] = arguments[_key16];
	          }
	
	          return cb.apply(undefined, [db[table].insert, db[table]].concat(args));
	        },
	        destroy: function destroy() {
	          for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
	            args[_key17] = arguments[_key17];
	          }
	
	          return cb.apply(undefined, [db[table].destroy, db[table]].concat(args));
	        },
	        searchDoc: function searchDoc() {
	          for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
	            args[_key18] = arguments[_key18];
	          }
	
	          return cb.apply(undefined, [db[table].searchDoc, db[table]].concat(args));
	        },
	        update: function update() {
	          for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
	            args[_key19] = arguments[_key19];
	          }
	
	          return cb.apply(undefined, [db[table].update, db[table]].concat(args));
	        },
	        find: function find() {
	          for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
	            args[_key20] = arguments[_key20];
	          }
	
	          return cb.apply(undefined, [db[table].find, db[table]].concat(args));
	        },
	        findDoc: function findDoc() {
	          for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
	            args[_key21] = arguments[_key21];
	          }
	
	          return cb.apply(undefined, [db[table].findDoc, db[table]].concat(args));
	        },
	        where: function where() {
	          for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
	            args[_key22] = arguments[_key22];
	          }
	
	          return cb.apply(undefined, [db[table].where, db[table]].concat(args));
	        },
	        findOne: function findOne() {
	          for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
	            args[_key23] = arguments[_key23];
	          }
	
	          return cb.apply(undefined, [db[table].findOne, db[table]].concat(args));
	        }
	      };
	    }
	  };
	  return api;
	}
	
	function connectSync(opt) {
	  var db = massive.connectSync(opt);
	  //console.log(db);
	  return new rxify(db);
	}
	
	function connect(opt) {
	  var connect = rxo.fromNodeCallback(massive.connect, massive);
	  return connect(opt).map(rxify);
	}
	
	function connectMassive(db) {
	  if (!db) throw new Error('db parameter not set');
	  return new rxify(db);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("rx");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("massive");

/***/ }
/******/ ])));
//# sourceMappingURL=rxjs-massive.js.map