"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmed_duties_app"] = self["webpackChunkmed_duties_app"] || []).push([["med_duties_frontend_src_components_ColumnLayout_js-med_duties_frontend_src_components_algorit-e57d5c"],{

/***/ 64795:
/*!************************************************************!*\
  !*** ./med_duties/frontend/src/components/ColumnLayout.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ColumnLayout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ 10682);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ 34051);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ 31555);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ 56839);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction ColumnLayout(props) {\n  var alwaysShowLeftCol = Boolean(props.alwaysShowLeftCol);\n  var mobile = window.matchMedia(\"(max-width: 768px)\").matches;\n  var showLeftCol = props.showLeftCol;\n  var setShowLeftCol = props.setShowLeftCol;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    showLeft = _useState2[0],\n    setShowLeft = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setShowLeft(Boolean(showLeftCol));\n  }, [showLeftCol]);\n  var hideLeftCol = function hideLeftCol() {\n    setShowLeftCol('');\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    fluid: true,\n    className: \"px-0 mx-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"g-0\",\n    style: {\n      width: \"100vw\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    md: 3,\n    className: \"border-end\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    primary: props.logoPrimary,\n    secondary: props.logoSecondary\n  }), mobile && alwaysShowLeftCol && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-toggle link\",\n    onClick: function onClick() {\n      return setShowLeft(!showLeft);\n    }\n  }, showLeft ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"bi bi-gear-fill\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"bi bi-gear\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"left-col \" + (!mobile || showLeft ? \"\" : \"d-none\")\n  }, mobile && !alwaysShowLeftCol && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"bi bi-x-lg link close-sign\",\n    onClick: hideLeftCol\n  })), props.leftCol)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    md: 9,\n    className: \"right-col \" + (!mobile || !showLeft ? \"\" : \"d-none\")\n  }, props.rightCol)));\n}\n\n//# sourceURL=webpack://med-duties-app/./med_duties/frontend/src/components/ColumnLayout.js?");

/***/ }),

/***/ 52239:
/*!***************************************************************!*\
  !*** ./med_duties/frontend/src/components/algorithm/utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DefaultDict\": () => (/* binding */ DefaultDict),\n/* harmony export */   \"ValueError\": () => (/* binding */ ValueError),\n/* harmony export */   \"areEqual\": () => (/* binding */ areEqual),\n/* harmony export */   \"getDiff\": () => (/* binding */ getDiff),\n/* harmony export */   \"getHolidays\": () => (/* binding */ getHolidays),\n/* harmony export */   \"getKeyByValue\": () => (/* binding */ getKeyByValue),\n/* harmony export */   \"getNumberOfWeekdaysInMonth\": () => (/* binding */ getNumberOfWeekdaysInMonth),\n/* harmony export */   \"getWeekday\": () => (/* binding */ getWeekday),\n/* harmony export */   \"range\": () => (/* binding */ range),\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle),\n/* harmony export */   \"union\": () => (/* binding */ union)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction range(start) {\n  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  var rangeStart = start;\n  var rangeEnd = end;\n  var arr = [];\n  if (rangeEnd === null) {\n    for (var i = 0; i < rangeStart; i += step) {\n      arr.push(i);\n    }\n  } else if (step > 0) {\n    for (var _i = rangeStart; _i < rangeEnd; _i += step) {\n      arr.push(_i);\n    }\n  } else if (step < 0) {\n    for (var _i2 = rangeStart; _i2 > rangeEnd; _i2 += step) {\n      arr.push(_i2);\n    }\n  }\n  return arr;\n}\nvar DefaultDict = /*#__PURE__*/_createClass(function DefaultDict(defaultInit) {\n  _classCallCheck(this, DefaultDict);\n  return new Proxy({}, {\n    get: function get(target, name) {\n      return name in target ? target[name] : target[name] = typeof defaultInit === 'function' ? new defaultInit().valueOf() : defaultInit;\n    }\n  });\n});\nfunction getHolidays() {\n  var holidays = {};\n  var years = range(2022, 2033);\n  years.forEach(function (year) {\n    holidays[year] = new DefaultDict(Array);\n    holidays[year][1].push(1, 6);\n    holidays[year][5].push(1, 3);\n    holidays[year][8].push(15);\n    holidays[year][11].push(1, 11);\n    holidays[year][12].push(24, 25, 26, 31);\n  });\n\n  // Easter\n  holidays[2022][4].push(16, 17, 18);\n  holidays[2023][4].push(.8, 9, 10);\n  holidays[2024][3].push(30, 31);\n  holidays[2024][4].push(1);\n  holidays[2025][4].push(19, 20, 21);\n  holidays[2026][4].push(4, 5, 6);\n  holidays[2027][3].push(27, 28, 29);\n  holidays[2028][4].push(15, 16, 17);\n  holidays[2029][3].push(31);\n  holidays[2029][4].push(1, 2);\n  holidays[2030][4].push(20, 21, 22);\n  holidays[2031][4].push(12, 13, 14);\n  holidays[2032][3].push(27, 28, 29);\n\n  // Feast of Corpus Christi (Boze Cialo) + following weekend\n  holidays[2022][6].push(16, 17, 18, 19);\n  holidays[2023][6].push(8, 9, 10, 11);\n  holidays[2024][5].push(30, 31);\n  holidays[2024][6].push(1, 6);\n  holidays[2025][6].push(19, 20, 21, 22);\n  holidays[2026][6].push(4, 5, 6, 7);\n  holidays[2027][5].push(27, 28, 29, 30);\n  holidays[2028][6].push(15, 16, 17, 18);\n  holidays[2029][5].push(31);\n  holidays[2029][6].push(1, 2, 3);\n  holidays[2030][6].push(20, 21, 22, 23);\n  holidays[2031][6].push(12, 13, 14, 15);\n  holidays[2032][5].push(27, 28, 29, 30);\n\n  // \"Long weekend\" in May\n  holidays[2022][4].push(30);\n  holidays[2022][5].push(2);\n  holidays[2023][4].push(29, 30);\n  holidays[2023][5].push(2);\n  holidays[2024][5].push(2, 4, 5);\n  holidays[2025][5].push(2, 4);\n  holidays[2026][5].push(2);\n  holidays[2027][5].push(2);\n  holidays[2028][4].push(29, 30);\n  holidays[2028][5].push(2);\n  holidays[2029][5].push(2);\n  holidays[2030][5].push(2, 4, 5);\n  holidays[2031][5].push(2, 4);\n  holidays[2032][5].push(2);\n\n  /* Other possible long weekends (1.1, 1.6, 11.1, 11.11)\n  Christmas is excluded as there is too much nerves\n  about 24th, 25th, 26th already. */\n  holidays[2022][1].push(7);\n  holidays[2022][10].push(31);\n  holidays[2025][11].push(10);\n  holidays[2026][1].push(2, 5);\n  holidays[2027][11].push(12);\n  holidays[2028][1].push(7);\n  holidays[2029][11].push(2);\n  holidays[2031][11].push(10);\n  holidays[2032][1].push(2, 5);\n  holidays[2032][11].push(12);\n  return holidays;\n}\nfunction getWeekday(year, month, day) {\n  var date = new Date(year, month - 1, day);\n  var weekday = date.getDay();\n\n  // Convert weekday to european notation.\n  if (weekday === 0) {\n    weekday = 6;\n  } else {\n    weekday--;\n  }\n  return weekday;\n}\nfunction getNumberOfWeekdaysInMonth(year, month, weekdays) {\n  // Get dict of first weekdays, where weekday number is key\n  // and day number is value.\n  var firstWeekWeekdays = {};\n  range(7).forEach(function (day, index) {\n    firstWeekWeekdays[getWeekday(year, month, day + 1)] = index + 1;\n  });\n  var monthLength = new Date(year, month, 0).getDate();\n\n  // Count occurances of all given weekdays.\n  var total = 0;\n  weekdays.forEach(function (weekday) {\n    var firstOccurance = firstWeekWeekdays[weekday];\n    total += Math.floor((monthLength - firstOccurance) / 7) + 1;\n  });\n  return total;\n}\nvar ValueError = /*#__PURE__*/function (_Error) {\n  _inherits(ValueError, _Error);\n  var _super = _createSuper(ValueError);\n  function ValueError() {\n    var _this;\n    _classCallCheck(this, ValueError);\n    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n      params[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(params));\n    if (Error.captureStackTrace) {\n      Error.captureStackTrace(_assertThisInitialized(_this), ValueError);\n    }\n    _this.name = \"ValueError\";\n    return _this;\n  }\n  return _createClass(ValueError);\n}( /*#__PURE__*/_wrapNativeSuper(Error));\nfunction shuffle(array) {\n  for (var i = array.length - 1; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1));\n    var _ref = [array[j], array[i]];\n    array[i] = _ref[0];\n    array[j] = _ref[1];\n  }\n}\nfunction areEqual(iterable1, iterable2) {\n  var array1 = Array.of.apply(Array, _toConsumableArray(iterable1));\n  var array2 = Array.of.apply(Array, _toConsumableArray(iterable2));\n  var forward = array1.every(function (item) {\n    var count1 = array1.filter(function (i) {\n      return i === item;\n    }).length;\n    var count2 = array2.filter(function (i) {\n      return i === item;\n    }).length;\n    return array2.includes(item) && count1 === count2;\n  });\n  var backward = array2.every(function (item) {\n    var count1 = array1.filter(function (i) {\n      return i === item;\n    }).length;\n    var count2 = array2.filter(function (i) {\n      return i === item;\n    }).length;\n    return array1.includes(item) && count1 === count2;\n  });\n  if (forward && backward) {\n    return true;\n  }\n  return false;\n}\nfunction getDiff(iterable1, iterable2) {\n  /* Suitable only for comparing array (set) \n  with its subarray (subset) */\n  var array1 = Array.of.apply(Array, _toConsumableArray(iterable1));\n  var array2 = Array.of.apply(Array, _toConsumableArray(iterable2));\n  var larger;\n  var smaller;\n  if (array1.length > array2.length) {\n    larger = array1;\n    smaller = array2;\n  } else if (array2.length > array1.length) {\n    larger = array2;\n    smaller = array1;\n  } else {\n    return [];\n  }\n  var diff = larger.filter(function (item) {\n    return !smaller.includes(item);\n  });\n  return diff;\n}\nfunction union(set1, set2) {\n  var _union = new Set(set1);\n  var _iterator = _createForOfIteratorHelper(set2),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      _union.add(elem);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return _union;\n}\nfunction getKeyByValue(map, value) {\n  var _iterator2 = _createForOfIteratorHelper(map.entries()),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var _step2$value = _slicedToArray(_step2.value, 2),\n        k = _step2$value[0],\n        v = _step2$value[1];\n      if (v === value) {\n        return k;\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n  return null;\n}\n\n//# sourceURL=webpack://med-duties-app/./med_duties/frontend/src/components/algorithm/utils.js?");

/***/ })

}]);