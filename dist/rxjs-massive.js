require("source-map-support").install();
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.connectSync = connectSync;\nexports.connect = connect;\nexports.connectMassive = connectMassive;\nvar rx = global.Rx || __webpack_require__(1);\nvar rxo = rx.Observable;\nvar massive = __webpack_require__(2);\n\nfunction rxify(db) {\n  return {\n    run: rxo.fromNodeCallback(db.run, db),\n    saveDoc: rxo.fromNodeCallback(db.saveDoc, db),\n    destroy: function destroy(table) {\n      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      return rxo.fromNodeCallback(db[table].destroy, db[table]).apply(undefined, args);\n    },\n    searchDoc: function searchDoc(table) {\n      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n        args[_key2 - 1] = arguments[_key2];\n      }\n\n      return rxo.fromNodeCallback(db[table].searchDoc, db[table]).apply(undefined, args);\n    },\n    find: function find(table) {\n      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {\n        args[_key3 - 1] = arguments[_key3];\n      }\n\n      return rxo.fromNodeCallback(db[table].find, db[table]).apply(undefined, args);\n    },\n    findDoc: function findDoc(table) {\n      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {\n        args[_key4 - 1] = arguments[_key4];\n      }\n\n      return rxo.fromNodeCallback(db[table].findDoc, db[table]).apply(undefined, args);\n    },\n    where: function where(table) {\n      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {\n        args[_key5 - 1] = arguments[_key5];\n      }\n\n      return rxo.fromNodeCallback(db[table].where, db[table]).apply(undefined, args);\n    },\n    findOne: function findOne(table) {\n      for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {\n        args[_key6 - 1] = arguments[_key6];\n      }\n\n      return rxo.fromNodeCallback(db[table].findOne, db[table]).apply(undefined, args);\n    },\n    save: function save(table) {\n      for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {\n        args[_key7 - 1] = arguments[_key7];\n      }\n\n      return rxo.fromNodeCallback(db[table].save, db[table]).apply(undefined, args);\n    }\n  };\n}\n\nfunction connectSync(opt) {\n  var db = massive.connectSync(opt); //db:'reportal',\n  return new rxify(db);\n}\n\nfunction connect(opt) {\n  var connect = rxo.fromNodeCallback(massive.connect, massive);\n  var db = connect(opt).map(rxify); //db:'reportal',\n  return db;\n}\n\nfunction connectMassive(db) {\n  if (db) return new rxify(db);else throw new Error('db parameter not set');\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQWtCZ0IsV0FBVyxHQUFYLFdBQVc7UUFLWCxPQUFPLEdBQVAsT0FBTztRQU1QLGNBQWMsR0FBZCxjQUFjO0FBN0I5QixJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxJQUFJLG1CQUFPLENBQUMsQ0FBSSxDQUFDLENBQUM7QUFDdEMsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztBQUMxQixJQUFNLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQVMsQ0FBQyxDQUFDOztBQUVuQyxTQUFTLEtBQUssQ0FBQyxFQUFFLEVBQUU7QUFDakIsU0FBTztBQUNMLE9BQUcsRUFBRSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFDckMsV0FBTyxFQUFFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztBQUM3QyxXQUFPLEVBQUUsaUJBQUMsS0FBSzt3Q0FBSyxJQUFJO0FBQUosWUFBSTs7O2FBQUssR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLGtCQUFJLElBQUksQ0FBQztLQUFBO0FBQ3hGLGFBQVMsRUFBRSxtQkFBQyxLQUFLO3lDQUFLLElBQUk7QUFBSixZQUFJOzs7YUFBSyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsa0JBQUksSUFBSSxDQUFDO0tBQUE7QUFDNUYsUUFBSSxFQUFFLGNBQUMsS0FBSzt5Q0FBSyxJQUFJO0FBQUosWUFBSTs7O2FBQUssR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLGtCQUFJLElBQUksQ0FBQztLQUFBO0FBQ2xGLFdBQU8sRUFBRSxpQkFBQyxLQUFLO3lDQUFLLElBQUk7QUFBSixZQUFJOzs7YUFBSyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsa0JBQUksSUFBSSxDQUFDO0tBQUE7QUFDeEYsU0FBSyxFQUFFLGVBQUMsS0FBSzt5Q0FBSyxJQUFJO0FBQUosWUFBSTs7O2FBQUssR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLGtCQUFJLElBQUksQ0FBQztLQUFBO0FBQ3BGLFdBQU8sRUFBRSxpQkFBQyxLQUFLO3lDQUFLLElBQUk7QUFBSixZQUFJOzs7YUFBSyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsa0JBQUksSUFBSSxDQUFDO0tBQUE7QUFDeEYsUUFBSSxFQUFFLGNBQUMsS0FBSzt5Q0FBSyxJQUFJO0FBQUosWUFBSTs7O2FBQUssR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLGtCQUFJLElBQUksQ0FBQztLQUFBO0dBQ25GO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQy9CLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQ25DLFNBQU8sSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDdEI7O0FBRU0sU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQzNCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUM5RCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUNsQyxTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVNLFNBQVMsY0FBYyxDQUFDLEVBQUUsRUFBRTtBQUNqQyxNQUFHLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcnggPSBnbG9iYWwuUnggfHwgcmVxdWlyZSgncngnKTtcbmNvbnN0IHJ4byA9IHJ4Lk9ic2VydmFibGU7XG5jb25zdCBtYXNzaXZlID0gcmVxdWlyZShcIm1hc3NpdmVcIik7XG5cbmZ1bmN0aW9uIHJ4aWZ5KGRiKSB7XG4gIHJldHVybiB7XG4gICAgcnVuOiByeG8uZnJvbU5vZGVDYWxsYmFjayhkYi5ydW4sIGRiKSxcbiAgICBzYXZlRG9jOiByeG8uZnJvbU5vZGVDYWxsYmFjayhkYi5zYXZlRG9jLCBkYiksXG4gICAgZGVzdHJveTogKHRhYmxlLCAuLi5hcmdzKSA9PiByeG8uZnJvbU5vZGVDYWxsYmFjayhkYlt0YWJsZV0uZGVzdHJveSwgZGJbdGFibGVdKSguLi5hcmdzKSxcbiAgICBzZWFyY2hEb2M6ICh0YWJsZSwgLi4uYXJncykgPT4gcnhvLmZyb21Ob2RlQ2FsbGJhY2soZGJbdGFibGVdLnNlYXJjaERvYywgZGJbdGFibGVdKSguLi5hcmdzKSxcbiAgICBmaW5kOiAodGFibGUsIC4uLmFyZ3MpID0+IHJ4by5mcm9tTm9kZUNhbGxiYWNrKGRiW3RhYmxlXS5maW5kLCBkYlt0YWJsZV0pKC4uLmFyZ3MpLFxuICAgIGZpbmREb2M6ICh0YWJsZSwgLi4uYXJncykgPT4gcnhvLmZyb21Ob2RlQ2FsbGJhY2soZGJbdGFibGVdLmZpbmREb2MsIGRiW3RhYmxlXSkoLi4uYXJncyksXG4gICAgd2hlcmU6ICh0YWJsZSwgLi4uYXJncykgPT4gcnhvLmZyb21Ob2RlQ2FsbGJhY2soZGJbdGFibGVdLndoZXJlLCBkYlt0YWJsZV0pKC4uLmFyZ3MpLFxuICAgIGZpbmRPbmU6ICh0YWJsZSwgLi4uYXJncykgPT4gcnhvLmZyb21Ob2RlQ2FsbGJhY2soZGJbdGFibGVdLmZpbmRPbmUsIGRiW3RhYmxlXSkoLi4uYXJncyksXG4gICAgc2F2ZTogKHRhYmxlLCAuLi5hcmdzKSA9PiByeG8uZnJvbU5vZGVDYWxsYmFjayhkYlt0YWJsZV0uc2F2ZSwgZGJbdGFibGVdKSguLi5hcmdzKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25uZWN0U3luYyhvcHQpIHtcbiAgY29uc3QgZGIgPSBtYXNzaXZlLmNvbm5lY3RTeW5jKG9wdCk7IC8vZGI6J3JlcG9ydGFsJywgXG4gIHJldHVybiBuZXcgcnhpZnkoZGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdChvcHQpIHtcbiAgY29uc3QgY29ubmVjdCA9IHJ4by5mcm9tTm9kZUNhbGxiYWNrKG1hc3NpdmUuY29ubmVjdCwgbWFzc2l2ZSlcbiAgY29uc3QgZGIgPSBjb25uZWN0KG9wdCkubWFwKHJ4aWZ5KTsgLy9kYjoncmVwb3J0YWwnLCBcbiAgcmV0dXJuIGRiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdE1hc3NpdmUoZGIpIHtcbiAgaWYoZGIpIHJldHVybiBuZXcgcnhpZnkoZGIpO1xuICBlbHNlIHRocm93IG5ldyBFcnJvcignZGIgcGFyYW1ldGVyIG5vdCBzZXQnKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"rx\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeFwiPzYxMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyeFwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = require(\"massive\");\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXNzaXZlXCI/NDExNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFzc2l2ZVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibWFzc2l2ZVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ])));