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
	  return rxo.fromNodeCallback(f, target);
	}
	
	function _upsertDoc(_this, table, searchFor, val) {
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
	    run: rxo.fromNodeCallback(db.run, db),
	    save: rxo.fromNodeCallback(db.save, db),
	    saveDoc: rxo.fromNodeCallback(db.saveDoc, db),
	    destroy: function destroy(table) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      return rxo.defer(function (_) {
	        return rxo.fromNodeCallback(db[table].destroy, db[table]).apply(undefined, args);
	      });
	    },
	    searchDoc: function searchDoc(table) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }
	
	      return rxo.defer(function (_) {
	        return rxo.fromNodeCallback(db[table].searchDoc, db[table]).apply(undefined, args);
	      });
	    },
	    find: function find(table) {
	      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        args[_key3 - 1] = arguments[_key3];
	      }
	
	      return rxo.defer(function (_) {
	        return rxo.fromNodeCallback(db[table].find, db[table]).apply(undefined, args);
	      });
	    },
	    findDoc: function findDoc(table) {
	      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	        args[_key4 - 1] = arguments[_key4];
	      }
	
	      return rxo.defer(function (_) {
	        return rxo.fromNodeCallback(db[table].findDoc, db[table]).apply(undefined, args);
	      });
	    },
	    where: function where(table) {
	      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	        args[_key5 - 1] = arguments[_key5];
	      }
	
	      return rxo.defer(function (_) {
	        return rxo.fromNodeCallback(db[table].where, db[table]).apply(undefined, args);
	      });
	    },
	    findOne: function findOne(table) {
	      for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	        args[_key6 - 1] = arguments[_key6];
	      }
	
	      return rxo.defer(function (_) {
	        return rxo.fromNodeCallback(db[table].findOne, db[table]).apply(undefined, args);
	      });
	    },
	    upsertDoc: function upsertDoc(table, searchFor, default_val) {
	      return _upsertDoc(api, table, searchFor, default_val);
	    },
	    fromTable: function fromTable(table) {
	      return {
	        save: function save() {
	          for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	            args[_key7] = arguments[_key7];
	          }
	
	          return rxo.fromNodeCallback(db.save, db).apply(undefined, [table].concat(args));
	        },
	        saveDoc: function saveDoc() {
	          for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	            args[_key8] = arguments[_key8];
	          }
	
	          return rxo.fromNodeCallback(db.saveDoc, db).apply(undefined, [table].concat(args));
	        },
	        destroy: function destroy() {
	          for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	            args[_key9] = arguments[_key9];
	          }
	
	          return rxo.defer(function (_) {
	            return rxo.fromNodeCallback(db[table].destroy, db[table]).apply(undefined, args);
	          });
	        },
	        searchDoc: function searchDoc() {
	          for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	            args[_key10] = arguments[_key10];
	          }
	
	          return rxo.defer(function (_) {
	            return rxo.fromNodeCallback(db[table].searchDoc, db[table]).apply(undefined, args);
	          });
	        },
	        find: function find() {
	          for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
	            args[_key11] = arguments[_key11];
	          }
	
	          return rxo.defer(function (_) {
	            return rxo.fromNodeCallback(db[table].find, db[table]).apply(undefined, args);
	          });
	        },
	        findDoc: function findDoc() {
	          for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
	            args[_key12] = arguments[_key12];
	          }
	
	          return rxo.defer(function (_) {
	            return rxo.fromNodeCallback(db[table].findDoc, db[table]).apply(undefined, args);
	          });
	        },
	        where: function where() {
	          for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
	            args[_key13] = arguments[_key13];
	          }
	
	          return rxo.defer(function (_) {
	            return rxo.fromNodeCallback(db[table].where, db[table]).apply(undefined, args);
	          });
	        },
	        findOne: function findOne() {
	          for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
	            args[_key14] = arguments[_key14];
	          }
	
	          return rxo.defer(function (_) {
	            return rxo.fromNodeCallback(db[table].findOne, db[table]).apply(undefined, args);
	          });
	        },
	        upsertDoc: function upsertDoc(searchFor, default_val) {
	          return _upsertDoc(api, table, searchFor, default_val);
	        }
	      };
	    }
	  };
	  return api;
	}
	
	function connectSync(opt) {
	  var db = massive.connectSync(opt);
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