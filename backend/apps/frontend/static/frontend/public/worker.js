/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 97794:
/*!**********************************************!*\
  !*** ./frontend/components/algorithm/Day.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 59920);\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar holidays = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getHolidays)();\nvar weekday = 80;\nvar thursday = 70;\nvar friday = 90;\nvar saturday = 110;\nvar sunday = 100;\nvar holiday = 140;\nvar Day = /*#__PURE__*/_createClass(function Day(year, month, day) {\n  _classCallCheck(this, Day);\n  _defineProperty(this, \"year\", void 0);\n  _defineProperty(this, \"month\", void 0);\n  _defineProperty(this, \"number\", void 0);\n  _defineProperty(this, \"week\", void 0);\n  _defineProperty(this, \"weekday\", void 0);\n  _defineProperty(this, \"itIsHoliday\", void 0);\n  _defineProperty(this, \"strainPoints\", void 0);\n  _defineProperty(this, \"category\", void 0);\n  this.weekday = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWeekday)(year, month, day);\n  this.itIsHoliday = holidays[year][month].includes(day) ? true : false;\n  if (this.itIsHoliday) {\n    this.strainPoints = holiday;\n    this.category = 'holiday';\n  } else if (this.weekday < 3) {\n    this.strainPoints = weekday;\n    this.category = 'weekday';\n  } else if (this.weekday === 3) {\n    this.strainPoints = thursday;\n    this.category = 'thursday';\n  } else if (this.weekday === 4) {\n    this.strainPoints = friday;\n    this.category = 'weekend';\n  } else if (this.weekday === 5) {\n    this.strainPoints = saturday;\n    this.category = 'weekend';\n  } else if (this.weekday === 6) {\n    this.strainPoints = sunday;\n    this.category = 'weekend';\n  }\n  this.year = year;\n  this.month = month;\n  this.number = day;\n  this.week = Math.ceil(Math.ceil(this.number + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWeekday)(year, month, 1)) / 7);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Day);\n\n//# sourceURL=webpack://med-duties-app/./frontend/components/algorithm/Day.js?");

/***/ }),

/***/ 77333:
/*!*************************************************!*\
  !*** ./frontend/components/algorithm/Doctor.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"modifiers\": () => (/* binding */ modifiers)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 59920);\n/* harmony import */ var _EvaluationChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvaluationChart */ 33281);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\n\nvar MAX_NUMBER_OF_DUTIES_PER_MONTH = function MAX_NUMBER_OF_DUTIES_PER_MONTH(month, year) {\n  return Math.floor(new Date(year, month, 0).getDate() / 2);\n};\nvar MODIFIER_DUTY_IMPOSSIBLE = 10000;\nvar MODIFIER_TWO_DAYS_APART = 30;\nvar MODIFIER_THREE_DAYS_APART = 20;\nvar MODIFIER_FOUR_DAYS_APART = 10;\nvar MODIFIER_FRI_SUN = -60;\nvar MODIFIER_THU_SAT = 30;\nvar MODIFIER_MORE_THAN_TWO_WEEKENDS = 100;\nvar MODIFIER_LESS_THAN_TWO_WEEKENDS = 50;\nvar MODIFIER_DONT_STEAL_SUNDAYS = 100;\nvar MODIFIER_THURSDAY_IS_ORDINARY = 10;\nvar MODIFIER_SATURDAY_IF_ONE_WEEKEND = -30;\nvar MODIFIER_NEW_WEEKEND = 200;\nvar MODIFIER_EACH_WEEKEND = 40;\nvar MODIFIER_DUTY_LEFT = -10;\nvar modifiers = {\n  DUTY_IMPOSSIBLE: MODIFIER_DUTY_IMPOSSIBLE,\n  TWO_DAYS_APART: MODIFIER_TWO_DAYS_APART,\n  THREE_DAYS_APART: MODIFIER_THREE_DAYS_APART,\n  FOUR_DAYS_APART: MODIFIER_FOUR_DAYS_APART,\n  FRI_SUN: MODIFIER_FRI_SUN,\n  THU_SAT: MODIFIER_THU_SAT,\n  MORE_THAN_TWO_WEEKENDS: MODIFIER_MORE_THAN_TWO_WEEKENDS,\n  LESS_THAN_TWO_WEEKENDS: MODIFIER_LESS_THAN_TWO_WEEKENDS,\n  DONT_STEAL_SUNDAYS: MODIFIER_DONT_STEAL_SUNDAYS,\n  THURSDAY_IS_ORDINARY: MODIFIER_THURSDAY_IS_ORDINARY,\n  SATURDAY_IF_ONE_WEEKEND: MODIFIER_SATURDAY_IF_ONE_WEEKEND,\n  NEW_WEEKEND: MODIFIER_NEW_WEEKEND\n};\nvar _maxNumberOfDutiesInit = /*#__PURE__*/new WeakMap();\nvar _exceptionsInit = /*#__PURE__*/new WeakMap();\nvar _preferredDaysInit = /*#__PURE__*/new WeakMap();\nvar _preferredWeekdaysInit = /*#__PURE__*/new WeakMap();\nvar _preferredPositionsInit = /*#__PURE__*/new WeakMap();\nvar _year = /*#__PURE__*/new WeakMap();\nvar _month = /*#__PURE__*/new WeakMap();\nvar _updateMaxNumberOfDuties = /*#__PURE__*/new WeakSet();\nvar Doctor = /*#__PURE__*/function () {\n  function Doctor(name, unit, year, month) {\n    var pk = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n    _classCallCheck(this, Doctor);\n    _classPrivateMethodInitSpec(this, _updateMaxNumberOfDuties);\n    _defineProperty(this, \"pk\", void 0);\n    _defineProperty(this, \"settingsPk\", void 0);\n    _defineProperty(this, \"name\", void 0);\n    _defineProperty(this, \"unit\", void 0);\n    _defineProperty(this, \"duties\", void 0);\n    _defineProperty(this, \"strain\", void 0);\n    _defineProperty(this, \"maxNumberOfDuties\", void 0);\n    _defineProperty(this, \"exceptions\", void 0);\n    _defineProperty(this, \"preferredDays\", void 0);\n    _defineProperty(this, \"preferredWeekdays\", void 0);\n    _defineProperty(this, \"preferredPositions\", void 0);\n    _defineProperty(this, \"locked\", void 0);\n    _defineProperty(this, \"prevMonthDuties\", void 0);\n    _defineProperty(this, \"nextMonthDuties\", void 0);\n    _classPrivateFieldInitSpec(this, _maxNumberOfDutiesInit, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _exceptionsInit, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _preferredDaysInit, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _preferredWeekdaysInit, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _preferredPositionsInit, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _year, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _month, {\n      writable: true,\n      value: void 0\n    });\n    // Public properties.\n    this.pk = pk;\n    this.settingsPk = null;\n    this.name = name;\n    this.unit = unit;\n    this.duties = [];\n    this.strain = 0;\n    this.maxNumberOfDuties = MAX_NUMBER_OF_DUTIES_PER_MONTH(month, year);\n    this.exceptions = [];\n    this.preferredDays = [];\n    this.preferredWeekdays = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(7);\n    this.preferredPositions = unit.dutyPositions;\n    this.locked = false;\n    this.prevMonthDuties = [];\n    this.nextMonthDuties = [];\n\n    // Private properties.\n    // Initial properties - set be user, not affected by changes\n    // made by schedule class algorithm during execution.\n    _classPrivateFieldSet(this, _maxNumberOfDutiesInit, MAX_NUMBER_OF_DUTIES_PER_MONTH);\n    _classPrivateFieldSet(this, _exceptionsInit, []);\n    _classPrivateFieldSet(this, _preferredDaysInit, []);\n    _classPrivateFieldSet(this, _preferredWeekdaysInit, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(7));\n    _classPrivateFieldSet(this, _preferredPositionsInit, unit.dutyPositions);\n    _classPrivateFieldSet(this, _year, year);\n    _classPrivateFieldSet(this, _month, month);\n\n    // Methods.\n    this.setPk = this.setPk.bind(this);\n    this.getPk = this.getPk.bind(this);\n    this.setSettingsPk = this.setSettingsPk.bind(this);\n    this.getSettingsPk = this.getSettingsPk.bind(this);\n    this.getName = this.getName.bind(this);\n    this.addPrevMonthDuty = this.addPrevMonthDuty.bind(this);\n    this.addNextMonthDuty = this.addNextMonthDuty.bind(this);\n    this.evaluateDuties = this.evaluateDuties.bind(this);\n    this.setDuty = this.setDuty.bind(this);\n    this.removeDuty = this.removeDuty.bind(this);\n    this.getDuties = this.getDuties.bind(this);\n    this.getNumberOfDuties = this.getNumberOfDuties.bind(this);\n    this.getWeekendsOnDuty = this.getWeekendsOnDuty.bind(this);\n    this.getNumberOfDutiesOnWeekends = this.getNumberOfDutiesOnWeekends.bind(this);\n    this.setMaxNumberOfDuties = this.setMaxNumberOfDuties.bind(this);\n    this.getMaxNumberOfDuties = this.getMaxNumberOfDuties.bind(this);\n    this.getNumberOfDutiesLeft = this.getNumberOfDutiesLeft.bind(this);\n    this.setStrain = this.setStrain.bind(this);\n    this.getStrain = this.getStrain.bind(this);\n    this.clearDuties = this.clearDuties.bind(this);\n    this.clearStrain = this.clearStrain.bind(this);\n    this.setExceptions = this.setExceptions.bind(this);\n    this.getExceptions = this.getExceptions.bind(this);\n    this.setPreferredDays = this.setPreferredDays.bind(this);\n    this.getPreferredDays = this.getPreferredDays.bind(this);\n    this.setPreferredWeekdays = this.setPreferredWeekdays.bind(this);\n    this.getPreferredWeekdays = this.getPreferredWeekdays.bind(this);\n    this.setPreferredPositions = this.setPreferredPositions.bind(this);\n    this.getPreferredPositions = this.getPreferredPositions.bind(this);\n    this.lockPreferences = this.lockPreferences.bind(this);\n    this.isLocked = this.isLocked.bind(this);\n    this.restoreInit = this.restoreInit.bind(this);\n    this.restoreMaxDuties = this.restoreMaxDuties.bind(this);\n    this.restoreExceptions = this.restoreExceptions.bind(this);\n    this.restorePreferredDays = this.restorePreferredDays.bind(this);\n    this.restorePreferredPositions = this.restorePreferredPositions.bind(this);\n    this.restorePreferredWeekdays = this.restorePreferredWeekdays.bind(this);\n    this.getStatistics = this.getStatistics.bind(this);\n    this._getPreviousMonthModfiers = this._getPreviousMonthModfiers.bind(this);\n    this._getNextMonthModfiers = this._getNextMonthModfiers.bind(this);\n  }\n  _createClass(Doctor, [{\n    key: \"setPk\",\n    value: function setPk(pk) {\n      this.pk = pk;\n    }\n  }, {\n    key: \"getPk\",\n    value: function getPk() {\n      return this.pk;\n    }\n  }, {\n    key: \"setSettingsPk\",\n    value: function setSettingsPk(pk) {\n      this.settingsPk = pk;\n    }\n  }, {\n    key: \"getSettingsPk\",\n    value: function getSettingsPk() {\n      return this.settingsPk;\n    }\n  }, {\n    key: \"getName\",\n    value: function getName() {\n      return this.name;\n    }\n  }, {\n    key: \"addPrevMonthDuty\",\n    value: function addPrevMonthDuty(duty) {\n      this.prevMonthDuties.push(duty);\n    }\n  }, {\n    key: \"addNextMonthDuty\",\n    value: function addNextMonthDuty(duty) {\n      this.nextMonthDuties.push(duty);\n    }\n  }, {\n    key: \"evaluateDuties\",\n    value: function evaluateDuties(duties, position) {\n      var _this = this;\n      var maxDutiesFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getMaxNumberOfDuties();\n      var maxDuties = this.getMaxNumberOfDuties();\n      var numberOfDuties = this.getNumberOfDuties(duties);\n      var dutiesLeft = maxDuties - numberOfDuties;\n      if (dutiesLeft <= 0) {\n        return null;\n      }\n      var days = _toConsumableArray(duties.keys());\n      var evaluationChart = new _EvaluationChart__WEBPACK_IMPORTED_MODULE_1__[\"default\"](days, this);\n      this._getPreviousMonthModfiers(evaluationChart);\n      this._getNextMonthModfiers(evaluationChart);\n      var whoIsOnDuty = function whoIsOnDuty(dayNumber) {\n        var day = days.find(function (d) {\n          return d.number === dayNumber;\n        });\n        var result = {};\n        if (day) {\n          Object.entries(duties.get(day)).forEach(function (_ref) {\n            var _ref2 = _slicedToArray(_ref, 2),\n              position = _ref2[0],\n              duty = _ref2[1];\n            result[position] = duty.getDoctor();\n          });\n        } else {\n          Object.entries(duties.get(days[0])).forEach(function (_ref3) {\n            var _ref4 = _slicedToArray(_ref3, 2),\n              position = _ref4[0],\n              duty = _ref4[1];\n            result[position] = null;\n          });\n        }\n        return result;\n      };\n\n      // Conditions that will not change during looping.\n      var iDontTakeDutiesOnWeekends = !(5 in this.preferredWeekdays || 6 in this.preferredWeekdays);\n      var weekendsIHaveDutiesOn = this.getWeekendsOnDuty(duties);\n      var iDontHaveDutyOnThisWeekend = function iDontHaveDutyOnThisWeekend(day) {\n        return new Set([].concat(_toConsumableArray(weekendsIHaveDutiesOn), [day.week])).size > weekendsIHaveDutiesOn.length;\n      };\n      var dutiesLeftModifier = numberOfDuties ? (dutiesLeft - maxDutiesFactor) * MODIFIER_DUTY_LEFT : 20 * MODIFIER_DUTY_LEFT;\n      var _iterator = _createForOfIteratorHelper(days),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var day = _step.value;\n          var today = day.number;\n          var itIsFriday = day.weekday === 4;\n          var itIsThursday = day.weekday === 3;\n          var itIsSunday = day.weekday === 6;\n          var itIsWeekend = [4, 5, 6].includes(day.weekday);\n          var dutyImpossible = evaluationChart.getDayStrain(today) >= 10000;\n          var iMadeExceptionForToday = this.getExceptions().includes(today);\n          var iDontTakeDutiesOnThisWeekday = !this.getPreferredWeekdays().includes(day.weekday);\n          var iDontTakeDutiesOnThisPosition = !this.getPreferredPositions().includes(position);\n          var dutyOnThisPositionTaken = Boolean(duties.get(day)[position].getDoctor()) === true;\n          var iAmOnDutyOnAnyPosition = Object.values(whoIsOnDuty(today)).some(function (entry) {\n            if (entry) {\n              return entry.pk === _this.pk;\n            }\n            return false;\n          });\n          var iAmNotOnDutyTwoDaysAgo = !Object.values(whoIsOnDuty(today - 2)).some(function (entry) {\n            if (entry) {\n              return entry.pk === _this.pk;\n            }\n            return false;\n          });\n          if (dutyImpossible) {\n            continue;\n          }\n          if (iMadeExceptionForToday) {\n            evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);\n          }\n          if (iDontTakeDutiesOnThisWeekday) {\n            evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);\n          }\n          if (iDontTakeDutiesOnThisPosition) {\n            evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);\n          }\n          if (dutyOnThisPositionTaken) {\n            evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);\n          }\n          if (iAmOnDutyOnAnyPosition) {\n            // Mark decreasing impact on following and preceding days.\n            // Prevent double duties.\n            evaluationChart.modifyPoints(today - 4, MODIFIER_FOUR_DAYS_APART);\n            evaluationChart.modifyPoints(today - 3, MODIFIER_THREE_DAYS_APART);\n            evaluationChart.modifyPoints(today - 2, MODIFIER_TWO_DAYS_APART);\n            evaluationChart.modifyPoints(today - 1, MODIFIER_DUTY_IMPOSSIBLE);\n            evaluationChart.modifyPoints(today, MODIFIER_DUTY_IMPOSSIBLE);\n            evaluationChart.modifyPoints(today + 1, MODIFIER_DUTY_IMPOSSIBLE);\n            evaluationChart.modifyPoints(today + 2, MODIFIER_TWO_DAYS_APART);\n            evaluationChart.modifyPoints(today + 3, MODIFIER_THREE_DAYS_APART);\n            evaluationChart.modifyPoints(today + 4, MODIFIER_FOUR_DAYS_APART);\n            if (itIsFriday) {\n              // Sunday is more attractive.\n              evaluationChart.modifyPoints(today + 2, MODIFIER_FRI_SUN);\n            }\n            if (itIsThursday) {\n              // Don't take duty on saturday, it will ruin your weekend!\n              evaluationChart.modifyPoints(today + 2, MODIFIER_THU_SAT);\n            }\n            continue;\n          }\n          if (itIsThursday && iDontTakeDutiesOnWeekends) {\n            // Day off after thursday wouldn't make any difference.\n            evaluationChart.modifyPoints(today, MODIFIER_THURSDAY_IS_ORDINARY);\n          }\n          if (itIsSunday && iAmNotOnDutyTwoDaysAgo) {\n            evaluationChart.modifyPoints(today, MODIFIER_DONT_STEAL_SUNDAYS);\n          }\n          if (itIsWeekend && iDontHaveDutyOnThisWeekend(day)) {\n            var modifier = (weekendsIHaveDutiesOn.length + 1) * MODIFIER_NEW_WEEKEND;\n            evaluationChart.modifyPoints(today, modifier);\n          }\n\n          // Apply modifier for duties left.\n          evaluationChart.modifyPoints(today, dutiesLeftModifier);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      return evaluationChart;\n    }\n  }, {\n    key: \"_getPreviousMonthModfiers\",\n    value: function _getPreviousMonthModfiers(evaluationChart) {\n      var _this2 = this;\n      // Applies impact from closing duties of previous month.\n      // Same modifiers as in evaluate duties method are used.\n      var prevDuties = this.prevMonthDuties;\n      var prevMonth = _classPrivateFieldGet(this, _month) === 1 ? 12 : _classPrivateFieldGet(this, _month) - 1;\n      var prevYear = _classPrivateFieldGet(this, _month) === 1 ? _classPrivateFieldGet(this, _year) - 1 : _classPrivateFieldGet(this, _year);\n      var prevMonthLen = new Date(prevYear, prevMonth, 0).getDate();\n      var myPrevDutyDates = _toConsumableArray(new Set(prevDuties.filter(function (d) {\n        if (d.doctor) {\n          return d.doctor.pk === _this2.pk;\n        }\n        return false;\n      }).map(function (d) {\n        return d.day.number;\n      })));\n      if (!myPrevDutyDates.length) {\n        return;\n      }\n      myPrevDutyDates.sort();\n      var modifier = {\n        3: MODIFIER_DUTY_IMPOSSIBLE,\n        2: MODIFIER_TWO_DAYS_APART,\n        1: MODIFIER_THREE_DAYS_APART,\n        0: MODIFIER_FOUR_DAYS_APART\n      };\n      var _iterator2 = _createForOfIteratorHelper(myPrevDutyDates),\n        _step2;\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var date = _step2.value;\n          if (prevMonthLen - date < 4) {\n            var daysAffected = 4 - (prevMonthLen - date);\n            var _iterator3 = _createForOfIteratorHelper((0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(1, daysAffected + 1)),\n              _step3;\n            try {\n              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n                var i = _step3.value;\n                evaluationChart.modifyPoints(i, modifier[daysAffected - i]);\n              }\n            } catch (err) {\n              _iterator3.e(err);\n            } finally {\n              _iterator3.f();\n            }\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: \"_getNextMonthModfiers\",\n    value: function _getNextMonthModfiers(evaluationChart) {\n      var _this3 = this;\n      // Applies impact from opening duties of next month.\n      // Same modifiers as in evaluate duties method are used.\n      var nextDuties = this.nextMonthDuties;\n      var thisMonthLength = new Date(_classPrivateFieldGet(this, _year), _classPrivateFieldGet(this, _month), 0).getDate();\n      var myNextDutyDates = _toConsumableArray(new Set(nextDuties.filter(function (d) {\n        if (d.doctor) {\n          return d.doctor.pk === _this3.pk;\n        }\n        return false;\n      }).map(function (d) {\n        return d.day.number;\n      })));\n      if (!myNextDutyDates.length) {\n        return;\n      }\n      myNextDutyDates.sort();\n      var modifier = {\n        3: MODIFIER_DUTY_IMPOSSIBLE,\n        2: MODIFIER_TWO_DAYS_APART,\n        1: MODIFIER_THREE_DAYS_APART,\n        0: MODIFIER_FOUR_DAYS_APART\n      };\n      var _iterator4 = _createForOfIteratorHelper(myNextDutyDates),\n        _step4;\n      try {\n        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n          var date = _step4.value;\n          if (date < 5) {\n            var daysAffected = 5 - date;\n            var _iterator5 = _createForOfIteratorHelper((0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(daysAffected)),\n              _step5;\n            try {\n              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n                var i = _step5.value;\n                evaluationChart.modifyPoints(thisMonthLength - i, modifier[daysAffected - i - 1]);\n              }\n            } catch (err) {\n              _iterator5.e(err);\n            } finally {\n              _iterator5.f();\n            }\n          }\n        }\n      } catch (err) {\n        _iterator4.e(err);\n      } finally {\n        _iterator4.f();\n      }\n    }\n  }, {\n    key: \"setDuty\",\n    value: function setDuty(duty) {\n      this.duties.push(duty);\n    }\n  }, {\n    key: \"removeDuty\",\n    value: function removeDuty(duty) {\n      var dutyToRemove = this.duties.find(function (d) {\n        var sameDay = d.getDay().number === duty.getDay().number;\n        var samePos = d.getPosition() === duty.getPosition();\n        return sameDay && samePos;\n      });\n      this.duties = this.duties.filter(function (d) {\n        return d !== dutyToRemove;\n      });\n    }\n  }, {\n    key: \"getDuties\",\n    value: function getDuties() {\n      return this.duties;\n    }\n  }, {\n    key: \"getNumberOfDuties\",\n    value: function getNumberOfDuties() {\n      var _this4 = this;\n      var duties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      if (!duties) {\n        return this.duties.length;\n      }\n      var myDuties = _toConsumableArray(duties.values()).map(function (elem) {\n        return Object.values(elem);\n      }).flat().filter(function (duty) {\n        var doctor = duty.getDoctor();\n        if (doctor) {\n          return doctor.pk === _this4.pk;\n        }\n        return false;\n      }).map(function (duty) {\n        return duty.day.number;\n      });\n      var thisDutyDates = this.duties.map(function (d) {\n        return d.day.number;\n      });\n      myDuties = myDuties.filter(function (date) {\n        return !thisDutyDates.includes(date);\n      });\n      return myDuties.length + thisDutyDates.length;\n    }\n  }, {\n    key: \"getWeekendsOnDuty\",\n    value: function getWeekendsOnDuty() {\n      var _this5 = this;\n      var duties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var weekendsOnDuty = new Set();\n      var myDuties = [];\n      if (!duties) {\n        myDuties = this.duties;\n      } else {\n        myDuties = _toConsumableArray(duties.values()).map(function (elem) {\n          return Object.values(elem);\n        }).flat().filter(function (duty) {\n          var doctor = duty.getDoctor();\n          if (doctor) {\n            return doctor.pk === _this5.pk;\n          }\n          return false;\n        });\n      }\n      myDuties.forEach(function (duty) {\n        if (duty.day.category === 'weekend') {\n          weekendsOnDuty.add(duty.day.week);\n        }\n      });\n      return Array.from(weekendsOnDuty);\n    }\n  }, {\n    key: \"getNumberOfDutiesOnWeekends\",\n    value: function getNumberOfDutiesOnWeekends() {\n      return this.duties.filter(function (duty) {\n        return duty.day.category === 'weekend';\n      }).length;\n    }\n  }, {\n    key: \"setMaxNumberOfDuties\",\n    value: function setMaxNumberOfDuties(number) {\n      var saveInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      if (saveInit) {\n        _classPrivateFieldSet(this, _maxNumberOfDutiesInit, number);\n      }\n      this.maxNumberOfDuties = number;\n      _classPrivateMethodGet(this, _updateMaxNumberOfDuties, _updateMaxNumberOfDuties2).call(this, saveInit);\n    }\n  }, {\n    key: \"getMaxNumberOfDuties\",\n    value: function getMaxNumberOfDuties() {\n      return this.maxNumberOfDuties;\n    }\n  }, {\n    key: \"getNumberOfDutiesLeft\",\n    value: function getNumberOfDutiesLeft() {\n      var _this6 = this;\n      var duties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      if (!duties) {\n        return this.maxNumberOfDuties - this.duties.length;\n      }\n      var myDuties = _toConsumableArray(duties.values()).map(function (elem) {\n        return Object.values(elem);\n      }).flat().filter(function (duty) {\n        var doctor = duty.getDoctor();\n        if (doctor) {\n          return doctor.pk === _this6.pk;\n        }\n        return false;\n      }).map(function (duty) {\n        return duty.day.number;\n      });\n      var thisDutyDates = this.duties.map(function (d) {\n        return d.day.number;\n      });\n      myDuties = myDuties.filter(function (date) {\n        return !thisDutyDates.includes(date);\n      });\n      return this.maxNumberOfDuties - myDuties.length - thisDutyDates.length;\n    }\n  }, {\n    key: \"setStrain\",\n    value: function setStrain(strain) {\n      this.strain += strain;\n    }\n  }, {\n    key: \"getStrain\",\n    value: function getStrain() {\n      return this.strain;\n    }\n  }, {\n    key: \"clearDuties\",\n    value: function clearDuties() {\n      var clearUserSetToo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      if (clearUserSetToo) {\n        this.duties = [];\n      } else {\n        this.duties = this.duties.filter(function (duty) {\n          return duty.isSetByUser() === true;\n        });\n      }\n    }\n  }, {\n    key: \"clearStrain\",\n    value: function clearStrain() {\n      var clearUserSetToo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      if (clearUserSetToo) {\n        this.strain = 0;\n      } else {\n        this.strain = this.duties.filter(function (duty) {\n          return duty.isSetByUser() === true;\n        }).reduce(function (prevVal, currDuty) {\n          return prevVal + currDuty.getStrain();\n        }, 0);\n      }\n    }\n  }, {\n    key: \"setExceptions\",\n    value: function setExceptions(exceptionList) {\n      var saveInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      exceptionList.sort();\n      if (saveInit) {\n        _classPrivateFieldSet(this, _exceptionsInit, exceptionList);\n      }\n      this.exceptions = exceptionList;\n    }\n  }, {\n    key: \"getExceptions\",\n    value: function getExceptions() {\n      return this.exceptions;\n    }\n  }, {\n    key: \"setPreferredDays\",\n    value: function setPreferredDays(daysList) {\n      var saveInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      daysList.sort();\n      if (saveInit) {\n        _classPrivateFieldSet(this, _preferredDaysInit, daysList);\n      }\n      this.preferredDays = daysList;\n      _classPrivateMethodGet(this, _updateMaxNumberOfDuties, _updateMaxNumberOfDuties2).call(this, saveInit);\n    }\n  }, {\n    key: \"getPreferredDays\",\n    value: function getPreferredDays() {\n      return this.preferredDays;\n    }\n  }, {\n    key: \"setPreferredWeekdays\",\n    value: function setPreferredWeekdays(weekdaysList) {\n      var saveInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      weekdaysList.sort();\n      if (saveInit) {\n        _classPrivateFieldSet(this, _preferredWeekdaysInit, weekdaysList);\n      }\n      this.preferredWeekdays = weekdaysList;\n      _classPrivateMethodGet(this, _updateMaxNumberOfDuties, _updateMaxNumberOfDuties2).call(this, saveInit);\n    }\n  }, {\n    key: \"getPreferredWeekdays\",\n    value: function getPreferredWeekdays() {\n      return this.preferredWeekdays;\n    }\n  }, {\n    key: \"setPreferredPositions\",\n    value: function setPreferredPositions(positionList) {\n      var saveInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      positionList.sort();\n      if (saveInit) {\n        _classPrivateFieldSet(this, _preferredPositionsInit, positionList);\n      }\n      this.preferredPositions = positionList;\n    }\n  }, {\n    key: \"getPreferredPositions\",\n    value: function getPreferredPositions() {\n      return this.preferredPositions;\n    }\n  }, {\n    key: \"lockPreferences\",\n    value: function lockPreferences() {\n      this.locked = true;\n    }\n  }, {\n    key: \"isLocked\",\n    value: function isLocked() {\n      return this.locked;\n    }\n  }, {\n    key: \"restoreInit\",\n    value: function restoreInit() {\n      this.restoreMaxDuties();\n      this.restoreExceptions();\n      this.restorePreferredDays();\n      this.restorePreferredPositions();\n      this.restorePreferredWeekdays();\n    }\n  }, {\n    key: \"restoreMaxDuties\",\n    value: function restoreMaxDuties() {\n      this.maxNumberOfDuties = _classPrivateFieldGet(this, _maxNumberOfDutiesInit);\n    }\n  }, {\n    key: \"restoreExceptions\",\n    value: function restoreExceptions() {\n      this.exceptions = _toConsumableArray(_classPrivateFieldGet(this, _exceptionsInit));\n    }\n  }, {\n    key: \"restorePreferredDays\",\n    value: function restorePreferredDays() {\n      this.preferredDays = _toConsumableArray(_classPrivateFieldGet(this, _preferredDaysInit));\n    }\n  }, {\n    key: \"restorePreferredPositions\",\n    value: function restorePreferredPositions() {\n      this.preferredPositions = _toConsumableArray(_classPrivateFieldGet(this, _preferredPositionsInit));\n    }\n  }, {\n    key: \"restorePreferredWeekdays\",\n    value: function restorePreferredWeekdays() {\n      this.preferredWeekdays = _toConsumableArray(_classPrivateFieldGet(this, _preferredWeekdaysInit));\n    }\n  }, {\n    key: \"getStatistics\",\n    value: function getStatistics() {\n      var _this7 = this;\n      var byDate = function byDate(dutyA, dutyB) {\n        return dutyA.getDay().number - dutyB.getDay().number;\n      };\n      var myDuties = this.duties.sort(byDate);\n      var myDutysDates = this.duties.map(function (duty) {\n        return duty.getDay().number;\n      });\n      var statistics = {\n        name: this.name,\n        duties: myDuties.length,\n        strain: 0,\n        weekends: new Set(),\n        weekendDays: 0,\n        holidays: 0,\n        0: 0,\n        1: 0,\n        2: 0,\n        3: 0,\n        4: 0,\n        5: 0,\n        6: 0\n      };\n      myDuties.forEach(function (duty) {\n        var day = duty.getDay();\n        var today = day.number;\n\n        // Compute strain.\n        statistics.strain += day.strainPoints;\n        var modifier = {\n          2: MODIFIER_TWO_DAYS_APART,\n          3: MODIFIER_THREE_DAYS_APART,\n          4: MODIFIER_FOUR_DAYS_APART\n        };\n        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(2, 5).forEach(function (number) {\n          if (myDutysDates.includes(today + number)) {\n            statistics.strain += modifier[number];\n          }\n        });\n        var iDontTakeDutiesOnWeekends = !(5 in _this7.preferredWeekdays || 6 in _this7.preferredWeekdays);\n        if (iDontTakeDutiesOnWeekends && day.weekday === 3) {\n          statistics.strain += MODIFIER_THURSDAY_IS_ORDINARY;\n        }\n\n        // Count weekdays.\n        statistics[day.weekday]++;\n\n        // Count weekends and weekend days\n        var itIsWeekend = [4, 5, 6].includes(day.weekday);\n        if (itIsWeekend) {\n          statistics.weekends.add(day.week);\n          statistics.weekendDays++;\n        }\n\n        // Count holidays.\n        var itIsHoliday = day.category === 'holiday';\n        if (itIsHoliday) {\n          statistics.holidays++;\n        }\n      });\n\n      // Count weekends\n      statistics.weekends = statistics.weekends.size;\n\n      // Add strain for each weekend.\n      statistics.strain += statistics.weekends * MODIFIER_EACH_WEEKEND;\n      return statistics;\n    }\n  }]);\n  return Doctor;\n}();\nfunction _updateMaxNumberOfDuties2(saveInit) {\n  var _this8 = this;\n  /* It may be a problem when setting duties, if a doctor has a high \n  max number of duties and there are not as many weekdays in month \n  which he accepts.\n  This function is ran whenever max number of duties \n  or preferred weekdays are set to ensure that max number of duties \n  is not higher then number of available days. */\n  if (this.preferredWeekdays.length > 3) {\n    return;\n  }\n  var preferredWeekdaysInMonth = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNumberOfWeekdaysInMonth)(_classPrivateFieldGet(this, _year), _classPrivateFieldGet(this, _month), this.preferredWeekdays);\n  var preferredDaysOnUnpreferredWeekdays = this.preferredDays.reduce(function (sum, prefDay) {\n    var weekday = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWeekday)(_classPrivateFieldGet(_this8, _year), _classPrivateFieldGet(_this8, _month), prefDay);\n    if (!_this8.preferredWeekdays.includes(weekday)) {\n      return sum + 1;\n    }\n  }, 0);\n  var acceptedDaysInMonth = preferredWeekdaysInMonth + preferredDaysOnUnpreferredWeekdays;\n  if (this.maxNumberOfDuties > acceptedDaysInMonth) {\n    this.setMaxNumberOfDuties(acceptedDaysInMonth, saveInit);\n  } else if (this.maxNumberOfDuties < this.preferredDays.length || !this.preferredWeekdays.length) {\n    this.setMaxNumberOfDuties(this.preferredDays.length, saveInit);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Doctor);\n\n//# sourceURL=webpack://med-duties-app/./frontend/components/algorithm/Doctor.js?");

/***/ }),

/***/ 18417:
/*!***********************************************!*\
  !*** ./frontend/components/algorithm/Duty.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nvar Duty = /*#__PURE__*/function () {\n  function Duty(day, doctor, position, strainPoints, pk, setByUser) {\n    _classCallCheck(this, Duty);\n    _defineProperty(this, \"day\", void 0);\n    _defineProperty(this, \"doctor\", void 0);\n    _defineProperty(this, \"position\", void 0);\n    _defineProperty(this, \"strainPoints\", void 0);\n    _defineProperty(this, \"pk\", void 0);\n    this.day = day;\n    this.doctor = doctor;\n    this.position = position;\n    this.strainPoints = strainPoints;\n    this.pk = pk;\n    this.setByUser = setByUser;\n    this.getPk = this.getPk.bind(this);\n    this.userSet = this.userSet.bind(this);\n    this.isSetByUser = this.isSetByUser.bind(this);\n    this.setDoctor = this.setDoctor.bind(this);\n    this.copy = this.copy.bind(this);\n    this.getDoctor = this.getDoctor.bind(this);\n    this.getPosition = this.getPosition.bind(this);\n    this.getStrain = this.getStrain.bind(this);\n    this.getDay = this.getDay.bind(this);\n    this.getMonth = this.getMonth.bind(this);\n    this.getYear = this.getYear.bind(this);\n  }\n  _createClass(Duty, [{\n    key: \"getPk\",\n    value: function getPk() {\n      return this.pk;\n    }\n  }, {\n    key: \"userSet\",\n    value: function userSet(mode) {\n      this.setByUser = mode;\n    }\n  }, {\n    key: \"isSetByUser\",\n    value: function isSetByUser() {\n      return this.setByUser;\n    }\n  }, {\n    key: \"setDoctor\",\n    value: function setDoctor(newDoctor) {\n      this.doctor = newDoctor;\n    }\n  }, {\n    key: \"copy\",\n    value: function copy(data) {\n      this.doctor = data.doctor;\n      this.strainPoints = data.strainPoints;\n      this.setByUser = data.setByUser;\n    }\n  }, {\n    key: \"getDoctor\",\n    value: function getDoctor() {\n      return this.doctor;\n    }\n  }, {\n    key: \"getPosition\",\n    value: function getPosition() {\n      return this.position;\n    }\n  }, {\n    key: \"getStrain\",\n    value: function getStrain() {\n      return this.strainPoints;\n    }\n  }, {\n    key: \"getDay\",\n    value: function getDay() {\n      return this.day;\n    }\n  }, {\n    key: \"getMonth\",\n    value: function getMonth() {\n      return this.day.month;\n    }\n  }, {\n    key: \"getYear\",\n    value: function getYear() {\n      return this.day.year;\n    }\n  }]);\n  return Duty;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Duty);\n\n//# sourceURL=webpack://med-duties-app/./frontend/components/algorithm/Duty.js?");

/***/ }),

/***/ 33281:
/*!**********************************************************!*\
  !*** ./frontend/components/algorithm/EvaluationChart.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 59920);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar EvaluationChart = /*#__PURE__*/function () {\n  function EvaluationChart(days, doctor) {\n    var _this = this;\n    _classCallCheck(this, EvaluationChart);\n    this.doctor = doctor;\n    this.classification = {};\n    days.forEach(function (day) {\n      _this.classification[day.number] = {\n        day: day,\n        strainPoints: day.strainPoints\n      };\n    });\n    this.modifyPoints = this.modifyPoints.bind(this);\n    this.getDayStrain = this.getDayStrain.bind(this);\n    this.getBest = this.getBest.bind(this);\n  }\n  _createClass(EvaluationChart, [{\n    key: \"modifyPoints\",\n    value: function modifyPoints(dayNumber, points) {\n      if (dayNumber in this.classification) {\n        this.classification[dayNumber].strainPoints += points;\n      }\n    }\n  }, {\n    key: \"getDayStrain\",\n    value: function getDayStrain(dayNumber) {\n      if (!(dayNumber in this.classification)) {\n        throw Error(\"Klasyfikacja nie zawiera dnia: \".concat(dayNumber, \"!\"));\n      }\n      return this.classification[dayNumber].strainPoints;\n    }\n  }, {\n    key: \"getBest\",\n    value: function getBest() {\n      var bestDay = Object.values(this.classification).sort(function (a, b) {\n        return a.strainPoints - b.strainPoints;\n      })[0];\n      var bestStrain = bestDay.strainPoints;\n      if (bestStrain >= 10000) {\n        return [null, null];\n      }\n\n      // Find all days with strain equal to best one, \n      // shuffle them and return one.\n      var bestDays = Object.values(this.classification).filter(function (day) {\n        return day.strainPoints === bestStrain;\n      });\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.shuffle)(bestDays);\n      return [bestDays[0].day, bestDays[0].strainPoints];\n    }\n  }]);\n  return EvaluationChart;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EvaluationChart);\n\n//# sourceURL=webpack://med-duties-app/./frontend/components/algorithm/EvaluationChart.js?");

/***/ }),

/***/ 50868:
/*!********************************************************!*\
  !*** ./frontend/components/algorithm/MonthlyDuties.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 59920);\n/* harmony import */ var js_combinatorics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-combinatorics */ 19684);\n/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Day */ 97794);\n/* harmony import */ var _Duty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Duty */ 18417);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\n\n\n\nvar WEEKDAY_NAMES = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];\nvar _log = /*#__PURE__*/new WeakMap();\nvar MonthlyDuties = /*#__PURE__*/function () {\n  function MonthlyDuties(year, month, unit) {\n    var pk = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n    _classCallCheck(this, MonthlyDuties);\n    _defineProperty(this, \"pk\", void 0);\n    _defineProperty(this, \"days\", void 0);\n    _defineProperty(this, \"month\", void 0);\n    _defineProperty(this, \"year\", void 0);\n    _defineProperty(this, \"doctors\", void 0);\n    _defineProperty(this, \"preferences\", void 0);\n    _defineProperty(this, \"dutyPositions\", void 0);\n    _defineProperty(this, \"duties\", void 0);\n    _defineProperty(this, \"prevMonthDuties\", void 0);\n    _defineProperty(this, \"nextMonthDuties\", void 0);\n    _classPrivateFieldInitSpec(this, _log, {\n      writable: true,\n      value: void 0\n    });\n    this.pk = pk;\n    var numberOfDays = new Date(year, month, 0).getDate();\n    this.days = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(1, numberOfDays + 1).map(function (day) {\n      return new _Day__WEBPACK_IMPORTED_MODULE_2__[\"default\"](year, month, day);\n    });\n    this.month = month;\n    this.year = year;\n    this.doctors = unit.doctors;\n    this.preferences = {};\n    this.dutyPositions = unit.dutyPositions;\n    this.duties = new Map();\n    var _iterator = _createForOfIteratorHelper(this.days),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var day = _step.value;\n        var dailyDuties = {};\n        var _iterator2 = _createForOfIteratorHelper(this.dutyPositions),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var position = _step2.value;\n            var duty = new _Duty__WEBPACK_IMPORTED_MODULE_3__[\"default\"](day, null, position, day.strainPoints, null, false);\n            dailyDuties[position] = duty;\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n        this.duties.set(day, dailyDuties);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n    this.prevMonthDuties = [];\n    this.nextMonthDuties = [];\n    _classPrivateFieldSet(this, _log, []);\n    this.setPk = this.setPk.bind(this);\n    this.getPk = this.getPk.bind(this);\n    this.addDoctors = this.addDoctors.bind(this);\n    this.removeDoctor = this.removeDoctor.bind(this);\n    this.addPrevMonthDuties = this.addPrevMonthDuties.bind(this);\n    this.getPrevMonthDuties = this.getPrevMonthDuties.bind(this);\n    this.addNextMonthDuties = this.addNextMonthDuties.bind(this);\n    this.getNextMonthDuties = this.getNextMonthDuties.bind(this);\n    this.setDuties = this.setDuties.bind(this);\n    this.setDuty = this.setDuty.bind(this);\n    this.performChecks = this.performChecks.bind(this);\n    this.clearDuties = this.clearDuties.bind(this);\n    this.getDays = this.getDays.bind(this);\n    this.getMonth = this.getMonth.bind(this);\n    this.getYear = this.getYear.bind(this);\n    this.getDay = this.getDay.bind(this);\n    this.getDuty = this.getDuty.bind(this);\n    this.getDuties = this.getDuties.bind(this);\n    this.whoIsOnDuty = this.whoIsOnDuty.bind(this);\n    this.updatePreferences = this.updatePreferences.bind(this);\n    this.getPreferences = this.getPreferences.bind(this);\n    this._removeDoctorDuties = this._removeDoctorDuties.bind(this);\n    this._assignAndPostCheck = this._assignAndPostCheck.bind(this);\n    this._isThereEnoughDoctors = this._isThereEnoughDoctors.bind(this);\n    this._checkPreferredDays = this._checkPreferredDays.bind(this);\n    this._checkByDay = this._checkByDay.bind(this);\n    this._checkDayPair = this._checkDayPair.bind(this);\n    this._checkDay = this._checkDay.bind(this);\n    this._assignPreferredDuties = this._assignPreferredDuties.bind(this);\n    this._assignDuties = this._assignDuties.bind(this);\n    this._checkForMissingDuties = this._checkForMissingDuties.bind(this);\n    this._checkForForbiddenDuties = this._checkForForbiddenDuties.bind(this);\n    this._log = this._log.bind(this);\n    this._clearLog = this._clearLog.bind(this);\n    this.getStatistics = this.getStatistics.bind(this);\n    this._getNextDay = this._getNextDay.bind(this);\n    this._dutiesAreSet = this._dutiesAreSet.bind(this);\n    this._assign = this._assign.bind(this);\n    this._options = this._options.bind(this);\n    this._getNextDay = this._getNextDay.bind(this);\n    this._getActualPreferences = this._getActualPreferences.bind(this);\n  }\n  _createClass(MonthlyDuties, [{\n    key: \"setPk\",\n    value: function setPk(pk) {\n      this.pk = pk;\n    }\n  }, {\n    key: \"getPk\",\n    value: function getPk() {\n      return this.pk;\n    }\n  }, {\n    key: \"addDoctors\",\n    value: function addDoctors(doctorList) {\n      this.doctors = this.doctors.concat(doctorList);\n    }\n  }, {\n    key: \"addDuties\",\n    value: function addDuties(dutyList) {\n      var _this = this;\n      dutyList.forEach(function (newDuty) {\n        // Make sure day instance is equal to one stored in MD instance.\n        var date = newDuty.getDay().number;\n        var position = newDuty.getPosition();\n        var day = _this.getDay(date);\n        newDuty.day = day;\n\n        // Remove old duty from its doctor if there is one.\n        var oldDuty = _this.duties.get(day)[position];\n        var oldDoctor = oldDuty.getDoctor();\n        if (oldDoctor) {\n          oldDoctor.removeDuty(oldDuty);\n          oldDoctor.setStrain(-oldDuty.getStrain());\n        }\n\n        // Set new duty.\n        _this.duties.get(day)[position] = newDuty;\n\n        // Set new duty for doctor if there is one.\n        var newDoctor = newDuty.getDoctor();\n        if (newDoctor) {\n          newDoctor.setDuty(newDuty);\n          newDoctor.setStrain(newDuty.getStrain());\n        }\n      });\n    }\n  }, {\n    key: \"removeDoctor\",\n    value: function removeDoctor(pk) {\n      var doctor = this.doctors.find(function (doc) {\n        return doc.pk === pk;\n      });\n      doctor.clearDuties();\n      doctor.clearStrain();\n      this._removeDoctorDuties(doctor, true);\n      this.doctors = this.doctors.filter(function (doctor) {\n        return !(doctor.pk === pk);\n      });\n    }\n  }, {\n    key: \"_removeDoctorDuties\",\n    value: function _removeDoctorDuties(doctor) {\n      var clearUserSetToo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var _iterator3 = _createForOfIteratorHelper(this.days),\n        _step3;\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var day = _step3.value;\n          for (var _i = 0, _Object$values = Object.values(this.duties.get(day)); _i < _Object$values.length; _i++) {\n            var duty = _Object$values[_i];\n            if ((!duty.isSetByUser() || clearUserSetToo) && duty.getDoctor() === doctor) {\n              duty.setDoctor(null);\n              duty.userSet(false);\n            }\n          }\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n    }\n  }, {\n    key: \"changeDoctor\",\n    value: function changeDoctor(duty, newDoctor) {\n      var _this2 = this;\n      var userSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      // Check for double and multi-positioned duties.\n      if (newDoctor) {\n        var date = duty.getDay().number;\n        [date - 1, date, date + 1].forEach(function (dayNumber) {\n          if (dayNumber < 1 || dayNumber > _this2.days.length) {\n            return;\n          }\n          var day = _this2.getDay(dayNumber);\n          _this2.dutyPositions.forEach(function (position) {\n            var otherDuty = _this2.duties.get(day)[position];\n            var doc = otherDuty.getDoctor();\n            if (doc === newDoctor) {\n              _this2.changeDoctor(otherDuty, null);\n            }\n          });\n        });\n      }\n      // Change doctor and save in duty and doctor instances.\n      var oldDoctor = duty.getDoctor();\n      duty.setDoctor(newDoctor);\n      duty.userSet(userSet);\n      oldDoctor && oldDoctor.removeDuty(duty);\n      newDoctor && newDoctor.setDuty(duty);\n    }\n  }, {\n    key: \"addPrevMonthDuties\",\n    value: function addPrevMonthDuties(dutyList) {\n      var _iterator4 = _createForOfIteratorHelper(dutyList),\n        _step4;\n      try {\n        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n          var duty = _step4.value;\n          this.prevMonthDuties.push(duty);\n          var doctor = duty.getDoctor();\n          if (doctor !== null) {\n            doctor.addPrevMonthDuty(duty);\n          }\n        }\n      } catch (err) {\n        _iterator4.e(err);\n      } finally {\n        _iterator4.f();\n      }\n    }\n  }, {\n    key: \"getPrevMonthDuties\",\n    value: function getPrevMonthDuties() {\n      return this.prevMonthDuties;\n    }\n  }, {\n    key: \"addNextMonthDuties\",\n    value: function addNextMonthDuties(dutyList) {\n      var _iterator5 = _createForOfIteratorHelper(dutyList),\n        _step5;\n      try {\n        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n          var duty = _step5.value;\n          this.nextMonthDuties.push(duty);\n          var doctor = duty.getDoctor();\n          if (doctor !== null) {\n            doctor.addNextMonthDuty(duty);\n          }\n        }\n      } catch (err) {\n        _iterator5.e(err);\n      } finally {\n        _iterator5.f();\n      }\n    }\n  }, {\n    key: \"getNextMonthDuties\",\n    value: function getNextMonthDuties() {\n      return this.nextMonthDuties;\n    }\n  }, {\n    key: \"updatePreferences\",\n    value: function updatePreferences() {\n      var _this3 = this;\n      var includeDuties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var preferences = {};\n\n      // Create template - each doctor prefers all days on all positions.\n      this.days.forEach(function (day) {\n        var preferencePerPosition = {};\n        _this3.dutyPositions.forEach(function (position) {\n          preferencePerPosition[position] = _this3.doctors;\n        });\n        preferences[day.number] = preferencePerPosition;\n      });\n\n      // Delete non-existent preferences.\n      this.doctors.forEach(function (doctor) {\n        var exceptions = doctor.getExceptions();\n        var prefPositions = doctor.getPreferredPositions();\n        var prefWeekdays = doctor.getPreferredWeekdays();\n        var prefDays = doctor.getPreferredDays();\n        var dutyDates = doctor.getDuties().map(function (d) {\n          return d.day.number;\n        });\n        var _iterator6 = _createForOfIteratorHelper(_this3.days),\n          _step6;\n        try {\n          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n            var day = _step6.value;\n            var date = day.number;\n            var dutyOnAdjacentDay = dutyDates.includes(date + 1) || dutyDates.includes(date - 1);\n            var adjacentPrefDay = prefDays.includes(date + 1) || prefDays.includes(date - 1);\n            var _iterator7 = _createForOfIteratorHelper(_this3.dutyPositions),\n              _step7;\n            try {\n              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {\n                var position = _step7.value;\n                if (adjacentPrefDay) {\n                  preferences[date][position] = preferences[date][position].filter(function (d) {\n                    return d !== doctor;\n                  });\n                  continue;\n                }\n                if (dutyOnAdjacentDay && includeDuties) {\n                  preferences[date][position] = preferences[date][position].filter(function (d) {\n                    return d !== doctor;\n                  });\n                  continue;\n                }\n                if (!prefPositions.includes(position)) {\n                  preferences[date][position] = preferences[date][position].filter(function (d) {\n                    return d !== doctor;\n                  });\n                  continue;\n                }\n                if (!prefWeekdays.includes(day.weekday) && !prefDays.includes(day.number)) {\n                  preferences[date][position] = preferences[date][position].filter(function (d) {\n                    return d !== doctor;\n                  });\n                  continue;\n                }\n                if (exceptions.includes(day.number)) {\n                  preferences[date][position] = preferences[date][position].filter(function (d) {\n                    return d !== doctor;\n                  });\n                  continue;\n                }\n              }\n            } catch (err) {\n              _iterator7.e(err);\n            } finally {\n              _iterator7.f();\n            }\n          }\n        } catch (err) {\n          _iterator6.e(err);\n        } finally {\n          _iterator6.f();\n        }\n      });\n\n      // Also save all doctors who can take duty on any position of each day.\n      var _iterator8 = _createForOfIteratorHelper(this.days),\n        _step8;\n      try {\n        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {\n          var day = _step8.value;\n          preferences[day.number]['all'] = _toConsumableArray(new Set(Object.values(preferences[day.number]).reduce(function (prevVal, currval) {\n            return prevVal.concat(currval);\n          }, [])));\n        }\n\n        // Save and return.\n      } catch (err) {\n        _iterator8.e(err);\n      } finally {\n        _iterator8.f();\n      }\n      this.preferences = preferences;\n      return preferences;\n    }\n  }, {\n    key: \"getPreferences\",\n    value: function getPreferences() {\n      return this.preferences;\n    }\n  }, {\n    key: \"performChecks\",\n    value: function performChecks() {\n      // Make sure it is a fresh start.\n      this._clearLog();\n      var results = [];\n\n      // Check if there are enough doctors.\n      var enoughDoctors = this._isThereEnoughDoctors();\n      results.push(enoughDoctors);\n\n      // Check if preferred days don't overlap.\n      // and if doctor doesn't have more preferences than max duties.\n      var preferredDaysOk = this._checkPreferredDays();\n      results.push(preferredDaysOk);\n      if (enoughDoctors) {\n        // Check if every day, every position and every pair \n        // of subsequent days has enough doctors for all duties to be set.\n        var allDaysAreOk = this._checkByDay();\n        results.push(allDaysAreOk);\n      }\n      if (!results.every(function (outcome) {\n        return outcome;\n      })) {\n        return [false, _classPrivateFieldGet(this, _log)];\n      }\n      return [true, ['Nie wykryto błędów. Dyżury zostaną ułożone.']];\n    }\n  }, {\n    key: \"_isThereEnoughDoctors\",\n    value: function _isThereEnoughDoctors() {\n      // Check if there is a fixed minimum of doctors\n      // for 1 to 3 positions.\n      var dutyPositions = this.dutyPositions.length;\n      var minDoctors = dutyPositions * 2;\n      var actualDoctors = this.doctors.length;\n      if (actualDoctors < minDoctors) {\n        this._log(\"Zbyt ma\\u0142o lekarzy na liczb\\u0119 pozycji dy\\u017Curowych: \" + \"\".concat(dutyPositions, \". Minimalna liczba lekarzy wynosi \").concat(minDoctors, \", \") + \"a dodano \".concat(actualDoctors, \" lekarzy.\"));\n        return false;\n      }\n      return true;\n    }\n  }, {\n    key: \"_checkPreferredDays\",\n    value: function _checkPreferredDays() {\n      var _this4 = this;\n      var preferredPositions = new _utils__WEBPACK_IMPORTED_MODULE_0__.DefaultDict(Array);\n      var errors = new Set();\n\n      // Create a dict of positions taken (i.e. set by user) on each day\n      // for positions compatibility testing\n      var takenPositions = {};\n      this.days.forEach(function (day) {\n        var positionsToAdd = [];\n        _this4.dutyPositions.forEach(function (position) {\n          var duty = _this4.duties.get(day)[position];\n          if (duty.getDoctor() !== null && duty.isSetByUser()) {\n            positionsToAdd.push(duty.getPosition());\n          }\n        });\n        takenPositions[day.number] = positionsToAdd;\n      });\n      var _iterator9 = _createForOfIteratorHelper(this.doctors),\n        _step9;\n      try {\n        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {\n          var doctor = _step9.value;\n          var exceptions = doctor.getExceptions();\n          var preferredDays = doctor.getPreferredDays();\n          var doctorsPreferredPositions = doctor.getPreferredPositions();\n          var maxNumberOfDuties = doctor.getMaxNumberOfDuties();\n          var _iterator10 = _createForOfIteratorHelper(preferredDays),\n            _step10;\n          try {\n            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {\n              var day = _step10.value;\n              if (exceptions.includes(day)) {\n                errors.add(\"\".concat(doctor.name, \" jednocze\\u015Bnie wyklucza i \") + \"preferuje dy\\u017Cur \".concat(day, \"/\").concat(this.month, \"/\").concat(this.year, \".\"));\n              }\n            }\n\n            // Check if doctor has more preferences then his duty number limit.\n          } catch (err) {\n            _iterator10.e(err);\n          } finally {\n            _iterator10.f();\n          }\n          if (preferredDays.length > maxNumberOfDuties) {\n            errors.add(\"\".concat(doctor.name, \" ma wi\\u0119cej preferowanych dni \") + 'niż jego maksymalna liczbę dyżurów.');\n          }\n\n          // Check if doctor can be assigned duty on his preferred days\n          // on any of his prefered positions.\n          var _iterator11 = _createForOfIteratorHelper(preferredDays),\n            _step11;\n          try {\n            var _loop = function _loop() {\n              var dayNumber = _step11.value;\n              var preferredPositionsExcludingTaken = doctorsPreferredPositions.filter(function (position) {\n                return !takenPositions[dayNumber].includes(position);\n              });\n              var allPositionsTaken = preferredPositions[dayNumber].length === _this4.dutyPositions.length - takenPositions[dayNumber].length;\n              var uniquePositionsIncludingDoctors = new Set(preferredPositions[dayNumber].flat().concat(preferredPositionsExcludingTaken));\n              var doctorsPositionWillFit = uniquePositionsIncludingDoctors.size >= preferredPositions[dayNumber].length + 1;\n              if (allPositionsTaken || !doctorsPositionWillFit) {\n                errors.add(\"\".concat(dayNumber, \"/\").concat(_this4.month, \"/\").concat(_this4.year, \" \") + 'jest preferowany przez więcej lekarzy niż liczba obsady.');\n              } else {\n                // If any of positions fit, add them\n                // to check further doctors against them.\n                preferredPositions[dayNumber].push(preferredPositionsExcludingTaken);\n              }\n\n              // Check if doctor's preferences are not on consecutive days.\n              if (preferredDays.includes(dayNumber + 1)) {\n                errors.add(\"\".concat(doctor.name, \" prosi o dy\\u017Cur w nast\\u0119puj\\u0105cych \") + \"po sobie dniach \".concat(dayNumber, \" i \").concat(dayNumber + 1) + \"/\".concat(_this4.month, \"/\").concat(_this4.year));\n              }\n            };\n            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {\n              _loop();\n            }\n          } catch (err) {\n            _iterator11.e(err);\n          } finally {\n            _iterator11.f();\n          }\n        }\n      } catch (err) {\n        _iterator9.e(err);\n      } finally {\n        _iterator9.f();\n      }\n      if (errors.size > 0) {\n        _toConsumableArray(errors).forEach(function (error) {\n          return _this4._log(error);\n        });\n        return false;\n      }\n      return true;\n    }\n  }, {\n    key: \"_checkByDay\",\n    value: function _checkByDay() {\n      var _this5 = this;\n      this.updatePreferences(true);\n      var errors = [];\n      for (var date = 1; date < this.days.length; date++) {\n        var pairErrors = this._checkDayPair(date);\n        errors = errors.concat(pairErrors);\n        var dayErrors = this._checkDay(date);\n        errors = errors.concat(dayErrors);\n      }\n      if (errors.length) {\n        // Log errors.\n        errors.forEach(function (error) {\n          return _this5._log(error);\n        });\n        return false;\n      }\n      return true;\n    }\n  }, {\n    key: \"_checkDayPair\",\n    value: function _checkDayPair(date) {\n      var _this6 = this;\n      var preferences = this.preferences;\n\n      // Create errors object.\n      var errors = new Map();\n\n      // Create position combinations of all lengths.\n      for (var len = this.dutyPositions.length; len > 0; len--) {\n        var posCombinations = _toConsumableArray(new js_combinatorics__WEBPACK_IMPORTED_MODULE_1__.Combination(this.dutyPositions, len));\n\n        // For each combination, check number of doctors available\n        // for current and next day and their sum.\n        var _iterator12 = _createForOfIteratorHelper(posCombinations),\n          _step12;\n        try {\n          var _loop2 = function _loop2() {\n            var combination = _step12.value;\n            var todayDocs = new Set();\n            var tomorrowDocs = new Set();\n            var _iterator13 = _createForOfIteratorHelper(combination),\n              _step13;\n            try {\n              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {\n                var position = _step13.value;\n                preferences[date][position].forEach(function (d) {\n                  return todayDocs.add(d);\n                });\n                preferences[date + 1][position].forEach(function (d) {\n                  return tomorrowDocs.add(d);\n                });\n              }\n            } catch (err) {\n              _iterator13.e(err);\n            } finally {\n              _iterator13.f();\n            }\n            var allDocs = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.union)(todayDocs, tomorrowDocs);\n\n            // If doctors' count is less then twice the number\n            // of checked positions, that implies a missing duty.\n            if (allDocs.size < len * 2) {\n              // Check if current combination is already\n              // included inside longer combination\n              // and save error if it isn't.\n              var isIncluded = _toConsumableArray(errors.keys()).some(function (key) {\n                return combination.every(function (pos) {\n                  return key.includes(pos);\n                });\n              });\n              if (!isIncluded) {\n                var err = \"\".concat(date, \"/\").concat(_this6.month, \"/\").concat(_this6.year, \" \") + \"oraz \".concat(date + 1, \"/\").concat(_this6.month, \"/\").concat(_this6.year, \" \") + \"na \".concat(combination.length > 1 ? 'pozycjach' : 'pozycji', \" \") + \"\".concat(combination.join(', '), \" dy\\u017Cury \") + \"mo\\u017Ce przyj\\u0105\\u0107 \\u0142\\u0105cznie \".concat(allDocs.size, \" \") + \"\".concat(allDocs.size > 1 ? 'lekarzy' : 'lekarz', \" \") + \"(\".concat(date, \"/\").concat(_this6.month, \"/\").concat(_this6.year, \": \") + \"\".concat(_toConsumableArray(todayDocs).map(function (doc) {\n                  return doc.name;\n                }).join(', '), \" \") + \"oraz \".concat(date + 1, \"/\").concat(_this6.month, \"/\").concat(_this6.year, \": \") + \"\".concat(_toConsumableArray(tomorrowDocs).map(function (doc) {\n                  return doc.name;\n                }).join(', '), \"). \") + \"To \\u0142\\u0105cznie o \".concat(len * 2 - allDocs.size, \" \") + \"zbyt ma\\u0142o, aby obsadzi\\u0107 dy\\u017Cury \" + \"nie tworz\\u0105c dublet\\xF3w.\";\n                errors.set(combination, err);\n              }\n            }\n          };\n          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {\n            _loop2();\n          }\n        } catch (err) {\n          _iterator12.e(err);\n        } finally {\n          _iterator12.f();\n        }\n      }\n      return _toConsumableArray(errors.values());\n    }\n  }, {\n    key: \"_checkDay\",\n    value: function _checkDay(date) {\n      var preferences = this.preferences;\n\n      // Create error list.\n      var errors = [];\n\n      // Check each position.\n      var missingPos = [];\n      var _iterator14 = _createForOfIteratorHelper(this.dutyPositions),\n        _step14;\n      try {\n        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {\n          var position = _step14.value;\n          if (!preferences[date][position].length) {\n            missingPos.push(position);\n          }\n        }\n      } catch (err) {\n        _iterator14.e(err);\n      } finally {\n        _iterator14.f();\n      }\n      if (missingPos.length) {\n        errors.push(\"\".concat(date, \"/\").concat(this.month, \"/\").concat(this.year, \" \") + \"na \".concat(missingPos.length > 1 ? 'każdej z pozycji:' : 'pozycji', \" \") + \"\".concat(missingPos.join(', '), \" brakuje lekarza, kt\\xF3ry m\\xF3g\\u0142by obj\\u0105\\u0107 \") + \"dy\\u017Cur.\");\n      }\n\n      // Check all positions.\n      var missingCount = this.dutyPositions.length - preferences[date]['all'].length;\n      if (missingCount > 0) {\n        errors.push(\"\".concat(date, \"/\").concat(this.month, \"/\").concat(this.year, \" dy\\u017Cur \") + \"\".concat(preferences[date]['all'].length > 1 ? 'mogą' : 'może', \" \") + \"obj\\u0105c jedynie \".concat(preferences[date]['all'].map(function (d) {\n          return d.name;\n        }).join(', '), \". \") + \"To o \".concat(missingCount, \" \").concat(missingCount === 1 ? 'lekarza' : 'lekarzy', \" \") + \"zbyt ma\\u0142o by obsadzi\\u0107 dy\\u017Cur.\");\n      }\n      return errors;\n    }\n  }, {\n    key: \"setDuties\",\n    value: function setDuties() {\n      // Make sure it is a fresh start.\n      this.clearDuties();\n      this._clearLog();\n\n      // Perform checks.\n      var _this$performChecks = this.performChecks(),\n        _this$performChecks2 = _slicedToArray(_this$performChecks, 2),\n        canBeSet = _this$performChecks2[0],\n        log = _this$performChecks2[1];\n      if (!canBeSet) {\n        return [false, false, log];\n      }\n\n      // Run assignment.\n      var setAllDuties = this._assignAndPostCheck();\n      if (setAllDuties) {\n        return [true, true, ['Dyżury zostały ułożone.']];\n      }\n      return [true, false, ['Nie udało się ułożyć wszystkich dyżurów.']];\n    }\n  }, {\n    key: \"_assignAndPostCheck\",\n    value: function _assignAndPostCheck() {\n      this._assignPreferredDuties();\n      try {\n        this._assignDuties();\n        this._checkForMissingDuties();\n        this._checkForForbiddenDuties();\n        return true;\n      } catch (error) {\n        console.log(error.message);\n        return false;\n      }\n    }\n  }, {\n    key: \"_assignPreferredDuties\",\n    value: function _assignPreferredDuties() {\n      var _this7 = this;\n      // Pre-assign, omits doctors' evaluation.\n      var duties = new _utils__WEBPACK_IMPORTED_MODULE_0__.DefaultDict(Map);\n\n      // Create a dict of positions taken on each day\n      // for preferred positions corrections\n      var takenPositions = {};\n      var _iterator15 = _createForOfIteratorHelper(this.days),\n        _step15;\n      try {\n        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {\n          var day = _step15.value;\n          takenPositions[day.number] = Object.entries(this.whoIsOnDuty(day.number)).filter(function (entry) {\n            return entry[1] !== null;\n          }).map(function (entry) {\n            return parseInt(entry[0]);\n          });\n        }\n      } catch (err) {\n        _iterator15.e(err);\n      } finally {\n        _iterator15.f();\n      }\n      ;\n      var _iterator16 = _createForOfIteratorHelper(this.doctors),\n        _step16;\n      try {\n        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {\n          var doctor = _step16.value;\n          var preferences = doctor.getPreferredDays();\n          var _iterator17 = _createForOfIteratorHelper(preferences),\n            _step17;\n          try {\n            var _loop4 = function _loop4() {\n              var date = _step17.value;\n              var preferredPositions = doctor.getPreferredPositions();\n              var allowedPositions = preferredPositions.filter(function (position) {\n                return !takenPositions[date].includes(position);\n              });\n              duties[date].set(doctor, allowedPositions);\n            };\n            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {\n              _loop4();\n            }\n          } catch (err) {\n            _iterator17.e(err);\n          } finally {\n            _iterator17.f();\n          }\n        }\n      } catch (err) {\n        _iterator16.e(err);\n      } finally {\n        _iterator16.f();\n      }\n      var _loop3 = function _loop3(dayNumber) {\n        var options = _toConsumableArray(duties[dayNumber].values());\n        var acceptedOptions = _toConsumableArray(_construct(js_combinatorics__WEBPACK_IMPORTED_MODULE_1__.CartesianProduct, _toConsumableArray(options)));\n        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.shuffle)(acceptedOptions);\n        var chosenOption = acceptedOptions[0];\n        var doctors = _toConsumableArray(duties[dayNumber].keys());\n        doctors.forEach(function (doc, index) {\n          var pos = chosenOption[index];\n          var dayObj = _this7.getDay(dayNumber);\n          var duty = new _Duty__WEBPACK_IMPORTED_MODULE_3__[\"default\"](dayObj, doc, pos, dayObj.strainPoints, null, false);\n          _this7.setDuty(duty, dayObj.strainPoints);\n        });\n      };\n      for (var dayNumber in duties) {\n        _loop3(dayNumber);\n      }\n    }\n  }, {\n    key: \"_assignDuties\",\n    value: function _assignDuties() {\n      var _this8 = this;\n      var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;\n      // Get doctors, who can take each duty on each day.\n      this.updatePreferences(true);\n\n      // Initialize frontier.\n      var initState = null;\n      var initAction = {\n        day: null,\n        strain: 0\n      };\n      var initNode = new Node(initState, null, initAction);\n      var frontier = new StackFrontier();\n      frontier.addToFront(initNode);\n      var best = null;\n      var steps = 0;\n\n      // Keep looping until all duties are filled.\n      var _loop5 = function _loop5() {\n        console.log(\"Steps: \".concat(steps, \". Frontier: \").concat(frontier.frontier.length, \". Depth: \").concat(depth));\n\n        // If frontier is empty, there is no solution.\n        if (frontier.empty()) {\n          throw Error(\"Duties cannot be set.\");\n        }\n\n        // Remove a node from frontier.\n        var node = frontier.remove();\n\n        // Get full state from node's state.\n        var _this8$_getStateData = _this8._getStateData(node),\n          _this8$_getStateData2 = _slicedToArray(_this8$_getStateData, 2),\n          state = _this8$_getStateData2[0],\n          meta = _this8$_getStateData2[1];\n\n        // If node contains all duties, set them.\n        if (_this8._dutiesAreSet(state)) {\n          _this8._assign(state);\n          return \"break\";\n        }\n\n        // If node is best we got, save it.\n        if (_this8._isBetter(meta, best)) {\n          best = {\n            state: state,\n            meta: meta\n          };\n        }\n\n        // Expand current node and add new options to frontier.\n        var options = _this8._options(state, depth);\n\n        // Streak search\n        options.reverse();\n        options.forEach(function (_ref, index) {\n          var _ref2 = _slicedToArray(_ref, 2),\n            action = _ref2[0],\n            state = _ref2[1];\n          if (action !== null && state !== null) {\n            var child = new Node(state, node, action);\n            if (index === 0) {\n              frontier.addToFront(child);\n            } else {\n              frontier.addToBack(child);\n            }\n          }\n        });\n\n        /** \n        // Normal search\n        options.forEach(([action, state], index) => {\n            if (action !== null && state !== null) {\n                const child = new Node(state, node, action);\n                frontier.addToFront(child);\n            }\n        });\n        */\n\n        steps++;\n        if (steps > 2 * _this8.days.length && depth * _this8.dutyPositions.length < _this8.doctors.length) {\n          _this8._assignDuties(depth + 1);\n          return \"break\";\n        } else if (steps > 5000) {\n          // Assign best combination achieved and set it.\n          _this8._assign(best.state);\n          return \"break\";\n        }\n      };\n      while (true) {\n        var _ret = _loop5();\n        if (_ret === \"break\") break;\n      }\n    }\n  }, {\n    key: \"_getStateData\",\n    value: function _getStateData(n) {\n      // Create state template.\n      var state = new Map();\n      var _iterator18 = _createForOfIteratorHelper(this.days),\n        _step18;\n      try {\n        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {\n          var day = _step18.value;\n          var dailyDuties = {};\n          var _iterator20 = _createForOfIteratorHelper(this.dutyPositions),\n            _step20;\n          try {\n            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {\n              var _position = _step20.value;\n              dailyDuties[_position] = new _Duty__WEBPACK_IMPORTED_MODULE_3__[\"default\"](day, null, _position, day.strainPoints, null, false);\n            }\n          } catch (err) {\n            _iterator20.e(err);\n          } finally {\n            _iterator20.f();\n          }\n          state.set(day, dailyDuties);\n        }\n\n        // Go down nodes path and set duties they contain.\n      } catch (err) {\n        _iterator18.e(err);\n      } finally {\n        _iterator18.f();\n      }\n      var node = n;\n      var strain = 0;\n      var daysSet = 0;\n      while (node.action.day) {\n        var duties = state.get(node.action.day);\n        var _iterator19 = _createForOfIteratorHelper(this.dutyPositions),\n          _step19;\n        try {\n          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {\n            var position = _step19.value;\n            duties[position].setDoctor(node.state[position - 1]);\n          }\n        } catch (err) {\n          _iterator19.e(err);\n        } finally {\n          _iterator19.f();\n        }\n        strain += node.action.strain;\n        node = node.parent;\n        daysSet++;\n      }\n      return [state, {\n        strain: strain,\n        daysSet: daysSet\n      }];\n    }\n  }, {\n    key: \"_dutiesAreSet\",\n    value: function _dutiesAreSet(state) {\n      var _iterator21 = _createForOfIteratorHelper(this.days),\n        _step21;\n      try {\n        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {\n          var day = _step21.value;\n          var dailyDuties = state.get(day);\n          var _iterator22 = _createForOfIteratorHelper(this.dutyPositions),\n            _step22;\n          try {\n            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {\n              var position = _step22.value;\n              var duty = dailyDuties[position];\n              if (duty.getDoctor() === null) {\n                return false;\n              }\n            }\n          } catch (err) {\n            _iterator22.e(err);\n          } finally {\n            _iterator22.f();\n          }\n        }\n      } catch (err) {\n        _iterator21.e(err);\n      } finally {\n        _iterator21.f();\n      }\n      return true;\n    }\n  }, {\n    key: \"_assign\",\n    value: function _assign(state) {\n      this.clearDuties(true);\n      var _iterator23 = _createForOfIteratorHelper(this.days),\n        _step23;\n      try {\n        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {\n          var day = _step23.value;\n          var _iterator24 = _createForOfIteratorHelper(this.dutyPositions),\n            _step24;\n          try {\n            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {\n              var position = _step24.value;\n              var data = state.get(day)[position];\n              if (data.getDoctor() !== null) {\n                var duty = this.duties.get(day)[position];\n                duty.isSetByUser() && data.userSet(true);\n                this.setDuty(data);\n              }\n            }\n          } catch (err) {\n            _iterator24.e(err);\n          } finally {\n            _iterator24.f();\n          }\n        }\n      } catch (err) {\n        _iterator23.e(err);\n      } finally {\n        _iterator23.f();\n      }\n    }\n  }, {\n    key: \"_isBetter\",\n    value: function _isBetter(meta, best) {\n      if (!best) {\n        return true;\n      }\n      var daysSet = meta.daysSet;\n      var strain = meta.strain;\n      var bestDaysSet = best.meta.daysSet;\n      var bestStrain = best.meta.strain;\n      if (daysSet > bestDaysSet) {\n        return true;\n      } else if (daysSet === bestDaysSet && strain < bestStrain) {\n        return true;\n      }\n    }\n  }, {\n    key: \"_options\",\n    value: function _options(prevState, depth) {\n      var _this9 = this;\n      var duties = prevState;\n      var preferences = this._getActualPreferences(duties);\n      var date = this._getNextDay(preferences);\n      var day = this.getDay(date);\n      var doctors = preferences[date]['all'];\n\n      // Check if there are enough doctors to form options for all positions.\n      if (doctors.length < this.dutyPositions.length) {\n        return [[null, null]];\n      }\n\n      // Get each doctor's strain for current day.\n      var avgDuties = this.doctors.length / (this.dutyPositions.length * this.days.length);\n      var avgMaxDuties = this.doctors.reduce(function (prevVal, doc) {\n        return prevVal + doc.getMaxNumberOfDuties();\n      }, 0) / this.doctors.length;\n      var strains = new Map();\n      var _iterator25 = _createForOfIteratorHelper(doctors),\n        _step25;\n      try {\n        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {\n          var doctor = _step25.value;\n          var doctorStrains = {};\n          var _iterator27 = _createForOfIteratorHelper(this.dutyPositions),\n            _step27;\n          try {\n            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {\n              var position = _step27.value;\n              var maxDutiesFactor = Math.ceil(avgDuties * (doctor.getMaxNumberOfDuties() / avgMaxDuties));\n              maxDutiesFactor < avgDuties && (maxDutiesFactor = avgDuties);\n              var evaluationChart = doctor.evaluateDuties(duties, position, maxDutiesFactor);\n              if (!evaluationChart) {\n                doctorStrains[position] = 10000; // No duties left.\n                continue;\n              }\n              doctorStrains[position] = evaluationChart.getDayStrain(date);\n            }\n          } catch (err) {\n            _iterator27.e(err);\n          } finally {\n            _iterator27.f();\n          }\n          strains.set(doctor, doctorStrains);\n        }\n\n        // Prepare a list of lists of doctors per each position\n        // to be used for getting combinations.\n      } catch (err) {\n        _iterator25.e(err);\n      } finally {\n        _iterator25.f();\n      }\n      var todaysPreferences = [];\n      var todaysDuties = this.duties.get(day);\n      var _iterator26 = _createForOfIteratorHelper(this.dutyPositions),\n        _step26;\n      try {\n        var _loop6 = function _loop6() {\n          var position = _step26.value;\n          var doctor = todaysDuties[position].getDoctor();\n          if (!doctor) {\n            var prefs = preferences[date][position].filter(function (doc) {\n              return strains.get(doc)[position] < 10000;\n            });\n            prefs.sort(function (docA, docB) {\n              var strainA = strains.get(docA)[position];\n              var strainB = strains.get(docB)[position];\n              return strainA - strainB;\n            });\n            todaysPreferences.push(prefs.slice(0, _this9.dutyPositions.length * depth));\n          } else {\n            // If duty is set on any position, put only this doctor\n            // on this position's list.\n            todaysPreferences.push([doctor]);\n            // Make sure doctor's strain values are stored\n            // (doctor can be manually set outside his preferences).\n            var docPosition = position;\n            var docStrains = {};\n            var _iterator28 = _createForOfIteratorHelper(_this9.dutyPositions),\n              _step28;\n            try {\n              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {\n                var pos = _step28.value;\n                if (pos === docPosition) {\n                  docStrains[pos] = todaysDuties[position].getStrain();\n                } else {\n                  docStrains[pos] = 10000;\n                }\n              }\n            } catch (err) {\n              _iterator28.e(err);\n            } finally {\n              _iterator28.f();\n            }\n            strains.set(doctor, docStrains);\n          }\n        };\n        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {\n          _loop6();\n        }\n\n        // Get unique doctor's combinations\n        // (they respect preferred positions).\n      } catch (err) {\n        _iterator26.e(err);\n      } finally {\n        _iterator26.f();\n      }\n      var result = _toConsumableArray(_construct(js_combinatorics__WEBPACK_IMPORTED_MODULE_1__.CartesianProduct, todaysPreferences)).filter(function (elem) {\n        return new Set(elem).size === elem.length;\n      });\n\n      // Add action to each combination.\n      result = result.map(function (option) {\n        var strain = 0;\n        option.forEach(function (doctor, i) {\n          var position = i + 1;\n          strain += strains.get(doctor)[position];\n        });\n        var action = {\n          day: day,\n          strain: strain\n        };\n        return [action, option];\n      });\n\n      // Make sure each combination allows for next day to be set.\n      if (date < this.days.length && !preferences[date + 1].isSet) {\n        var nextDayDocs = preferences[date + 1]['all'].filter(function (d) {\n          return d.getNumberOfDutiesLeft() > 0;\n        });\n        result = result.filter(function (_ref3) {\n          var _ref4 = _slicedToArray(_ref3, 2),\n            action = _ref4[0],\n            option = _ref4[1];\n          var difference = nextDayDocs.filter(function (d) {\n            return !option.includes(d);\n          });\n          if (difference.length >= _this9.dutyPositions.length) {\n            return true;\n          }\n          return false;\n        });\n      }\n      // Make sure each combination allows for previous day to be set.\n      if (date > 1 && !preferences[date - 1].isSet) {\n        var prevDayDocs = preferences[date - 1]['all'].filter(function (d) {\n          return d.getNumberOfDutiesLeft() > 0;\n        });\n        result = result.filter(function (_ref5) {\n          var _ref6 = _slicedToArray(_ref5, 2),\n            action = _ref6[0],\n            option = _ref6[1];\n          var difference = prevDayDocs.filter(function (d) {\n            return !option.includes(d);\n          });\n          if (difference.length >= _this9.dutyPositions.length) {\n            return true;\n          }\n          return false;\n        });\n      }\n\n      // Sort combinations by strain, /*max duties and \n      // - on weekends - by number of weekend duties \n      // after the option is chosen, preferring the latter.*/\n      // Best combinations need to be last.\n      // Shuffle them first to avoid setting patterns.\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.shuffle)(result);\n      result.sort(function (_ref7, _ref8) {\n        var _ref9 = _slicedToArray(_ref7, 2),\n          actionA = _ref9[0],\n          stateA = _ref9[1];\n        var _ref10 = _slicedToArray(_ref8, 2),\n          actionB = _ref10[0],\n          stateB = _ref10[1];\n        return actionB.strain - actionA.strain;\n      });\n      return result;\n    }\n  }, {\n    key: \"_getNextDay\",\n    value: function _getNextDay(prefs) {\n      var _this10 = this;\n      /* Sorts preferences to get day with \n      least average doctors per position.*/\n\n      var preferences = _objectSpread({}, prefs);\n\n      // Throw error if all duties are set.\n      if (Object.values(preferences).every(function (p) {\n        return p.isSet === true;\n      })) {\n        throw Error('Duties are set - there is no next day!');\n      }\n\n      // Remove days with set duties.\n      var dates = Object.keys(preferences).map(function (d) {\n        return parseInt(d);\n      });\n      var _iterator29 = _createForOfIteratorHelper(dates),\n        _step29;\n      try {\n        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {\n          var _date = _step29.value;\n          if (preferences[_date].isSet) {\n            delete preferences[_date];\n          }\n        }\n\n        // Sort preferences (days) by avg number of doctors for each position.\n      } catch (err) {\n        _iterator29.e(err);\n      } finally {\n        _iterator29.f();\n      }\n      var getAvg = function getAvg(positions) {\n        var avg = Object.entries(positions).filter(function (_ref11) {\n          var _ref12 = _slicedToArray(_ref11, 2),\n            k = _ref12[0],\n            v = _ref12[1];\n          return _this10.dutyPositions.includes(parseInt(k));\n        }).map(function (_ref13) {\n          var _ref14 = _slicedToArray(_ref13, 2),\n            k = _ref14[0],\n            v = _ref14[1];\n          return v;\n        }).reduce(function (prevVal, currVal) {\n          return prevVal + currVal.length;\n        }, 0) / _this10.dutyPositions.length;\n        return avg;\n      };\n      for (var _i2 = 0, _Object$keys = Object.keys(preferences); _i2 < _Object$keys.length; _i2++) {\n        var date = _Object$keys[_i2];\n        preferences[date].avg = getAvg(preferences[date]);\n      }\n      var ordered = Object.entries(preferences).sort(function (_ref15, _ref16) {\n        var _ref17 = _slicedToArray(_ref15, 2),\n          dayA = _ref17[0],\n          dataA = _ref17[1];\n        var _ref18 = _slicedToArray(_ref16, 2),\n          dayB = _ref18[0],\n          dataB = _ref18[1];\n        return dataA.avg - dataB.avg;\n      }).map(function (_ref19) {\n        var _ref20 = _slicedToArray(_ref19, 2),\n          day = _ref20[0],\n          options = _ref20[1];\n        return parseInt(day);\n      });\n      return ordered[0];\n    }\n  }, {\n    key: \"_getActualPreferences\",\n    value: function _getActualPreferences(state) {\n      var _this11 = this;\n      /* Returns preferences object with marked set days\n      and filtered out doctors from adjacent set duties. */\n\n      // Copy preferences so that this.preferences is not affected.\n      var preferences = {};\n      Object.entries(this.preferences).forEach(function (_ref21) {\n        var _ref22 = _slicedToArray(_ref21, 2),\n          day = _ref22[0],\n          data = _ref22[1];\n        preferences[day] = _objectSpread({}, data);\n      });\n\n      // Mark set duties' doctors from adjacent days possibilities.\n      // Mark set days.\n      var _loop7 = function _loop7(date) {\n        // Get current day\n        var day = _this11.getDay(date);\n\n        // Get current day's set duties' doctors.\n        var doctorsSet = Object.values(state.get(day)).map(function (d) {\n          return d.getDoctor();\n        }).filter(function (doc) {\n          return doc !== null;\n        });\n\n        // Check if duties are set and mark day as set/unset.\n        if (doctorsSet.length === _this11.dutyPositions.length) {\n          preferences[date].isSet = true;\n        } else {\n          preferences[date].isSet = false;\n        }\n\n        // Remove current day's doctors from previous day's options.\n        if (date > 1) {\n          var prevDocs = preferences[date - 1];\n          var _iterator30 = _createForOfIteratorHelper(Object.keys(prevDocs).filter(function (k) {\n              return k !== 'isSet';\n            })),\n            _step30;\n          try {\n            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {\n              var position = _step30.value;\n              prevDocs[position] = prevDocs[position].filter(function (d) {\n                return !doctorsSet.includes(d);\n              });\n            }\n          } catch (err) {\n            _iterator30.e(err);\n          } finally {\n            _iterator30.f();\n          }\n        }\n\n        // Remove current day's doctors from next day's options.\n        if (date < _this11.days.length) {\n          var nextDocs = preferences[date + 1];\n          var _iterator31 = _createForOfIteratorHelper(Object.keys(nextDocs).filter(function (k) {\n              return k !== 'isSet';\n            })),\n            _step31;\n          try {\n            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {\n              var _position2 = _step31.value;\n              nextDocs[_position2] = nextDocs[_position2].filter(function (d) {\n                return !doctorsSet.includes(d);\n              });\n            }\n          } catch (err) {\n            _iterator31.e(err);\n          } finally {\n            _iterator31.f();\n          }\n        }\n      };\n      for (var date = 1; date <= this.days.length; date++) {\n        _loop7(date);\n      }\n      return preferences;\n    }\n  }, {\n    key: \"setDuty\",\n    value: function setDuty(dutyData) {\n      var doctor = dutyData.getDoctor();\n      var position = dutyData.getPosition();\n      var day = this.getDay(dutyData.getDay().number);\n      var duty = this.duties.get(day)[position];\n      if (duty.getDoctor() === dutyData.getDoctor()) {\n        return;\n      }\n      duty.copy(dutyData);\n      doctor.setDuty(duty);\n      doctor.setStrain(dutyData.getStrain());\n    }\n  }, {\n    key: \"_checkForMissingDuties\",\n    value: function _checkForMissingDuties() {\n      var errors = new Set();\n      var _iterator32 = _createForOfIteratorHelper(this.days),\n        _step32;\n      try {\n        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {\n          var day = _step32.value;\n          var dailyDuties = this.duties.get(day);\n          var _iterator33 = _createForOfIteratorHelper(this.dutyPositions),\n            _step33;\n          try {\n            for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {\n              var position = _step33.value;\n              var duty = dailyDuties[position];\n              if (duty.getDoctor() === null) {\n                errors.add(\"Nie ustalono dy\\u017Curu \".concat(day.number, \"/\") + \"\".concat(day.month, \"/\").concat(day.year, \" na pozycji \").concat(position, \".\"));\n              }\n            }\n          } catch (err) {\n            _iterator33.e(err);\n          } finally {\n            _iterator33.f();\n          }\n        }\n      } catch (err) {\n        _iterator32.e(err);\n      } finally {\n        _iterator32.f();\n      }\n      if (errors.size > 0) {\n        var joinedErrors = _toConsumableArray(errors).join('//');\n        throw Error(joinedErrors);\n      }\n    }\n  }, {\n    key: \"_checkForForbiddenDuties\",\n    value: function _checkForForbiddenDuties() {\n      var _this12 = this;\n      // 'Forbidden' duties are on same or consecutive days\n      // or on day or weekday excluded by doctor.\n      var errors = new Set();\n      var _iterator34 = _createForOfIteratorHelper(this.doctors),\n        _step34;\n      try {\n        var _loop8 = function _loop8() {\n          var doctor = _step34.value;\n          var duties = doctor.getDuties();\n          if (duties.length === 0) {\n            return \"continue\";\n          }\n          var byDate = function byDate(dutyA, dutyB) {\n            return dutyA.getDay().number - dutyB.getDay().number;\n          };\n          duties.sort(byDate);\n          var dates = duties.map(function (duty) {\n            return duty.getDay().number;\n          });\n          var exceptions = doctor.getExceptions();\n          var preferredWeekdays = doctor.getPreferredWeekdays();\n          var preferredDays = doctor.getPreferredDays();\n          var preferredPositions = doctor.getPreferredPositions();\n          dates.forEach(function (day, i, dates) {\n            var twoDutiesOnSameDay = day === dates[i + 1];\n            var dutiesOnConsecutiveDays = dates.includes(day + 1);\n            var iHaveDutyOnExcludedDay = exceptions.includes(day);\n            var iHaveDutyOnExcludedWeekday = !preferredWeekdays.includes(duties[i].getDay().weekday) && !preferredDays.includes(day);\n            var iHaveDutyOnExcludedPosition = !preferredPositions.includes(duties[i].getPosition());\n            var dutyisSetByUser = duties[i].isSetByUser();\n            if (twoDutiesOnSameDay) {\n              errors.add(\"\".concat(doctor.name, \" ma zaplanowanych wiele dy\\u017Cur\\xF3w \") + \"\".concat(dates[i], \"/\").concat(_this12.month, \"/\").concat(_this12.year));\n            }\n            if (dutiesOnConsecutiveDays) {\n              errors.add(\"\".concat(doctor.name, \" ma zaplanowane dy\\u017Cury w \") + \"nast\\u0119puj\\u0105ce po sobie dni \".concat(dates[i], \" i \").concat(dates[i] + 1) + \"/\".concat(_this12.month, \"/\").concat(_this12.year, \".\"));\n            }\n            if (iHaveDutyOnExcludedDay && !dutyisSetByUser) {\n              errors.add(\"\".concat(doctor.name, \" ma zaplanowany dy\\u017Cur w zastrze\\u017Cony \") + \"dzie\\u0144 \".concat(dates[i], \"/\").concat(_this12.month, \"/\").concat(_this12.year, \".\"));\n            }\n            if (iHaveDutyOnExcludedWeekday && !dutyisSetByUser) {\n              errors.add(\"\".concat(doctor.name, \" ma zaplanowany dy\\u017Cur w \") + \"dzie\\u0144 tygodnia: \".concat(WEEKDAY_NAMES[duties[i].getDay().weekday], \", \") + \"kt\\xF3ry nie znajduje si\\u0119 na li\\u015Bcie dni tygodnia, w kt\\xF3re \" + \"mo\\u017Ce bra\\u0107 dy\\u017Cury.\");\n            }\n            if (iHaveDutyOnExcludedPosition && !dutyisSetByUser) {\n              errors.add(\"\".concat(doctor.name, \" ma zaplanowany dy\\u017Cur \").concat(dates[i]) + \"/\".concat(_this12.month, \"/\").concat(_this12.year, \" na pozycji \").concat(duties[i].getPosition(), \", \") + \"kt\\xF3ra nie znajduje si\\u0119 na li\\u015Bcie pozycji, na kt\\xF3rych \" + \"bierze dy\\u017Cury.\");\n            }\n          });\n        };\n        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {\n          var _ret2 = _loop8();\n          if (_ret2 === \"continue\") continue;\n        }\n      } catch (err) {\n        _iterator34.e(err);\n      } finally {\n        _iterator34.f();\n      }\n      if (errors.size > 0) {\n        var joinedErrors = _toConsumableArray(errors).join('//');\n        throw Error(joinedErrors);\n      }\n    }\n  }, {\n    key: \"clearDuties\",\n    value: function clearDuties() {\n      var clearUserSetToo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var _iterator35 = _createForOfIteratorHelper(this.doctors),\n        _step35;\n      try {\n        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {\n          var doctor = _step35.value;\n          doctor.clearDuties(clearUserSetToo);\n          doctor.clearStrain(clearUserSetToo);\n          this._removeDoctorDuties(doctor, clearUserSetToo);\n        }\n      } catch (err) {\n        _iterator35.e(err);\n      } finally {\n        _iterator35.f();\n      }\n    }\n  }, {\n    key: \"_log\",\n    value: function (_log2) {\n      function _log(_x) {\n        return _log2.apply(this, arguments);\n      }\n      _log.toString = function () {\n        return _log2.toString();\n      };\n      return _log;\n    }(function (message) {\n      _classPrivateFieldGet(this, _log).push(message);\n    })\n  }, {\n    key: \"_clearLog\",\n    value: function _clearLog() {\n      _classPrivateFieldSet(this, _log, []);\n    }\n  }, {\n    key: \"getDays\",\n    value: function getDays() {\n      return this.days;\n    }\n  }, {\n    key: \"getYear\",\n    value: function getYear() {\n      return this.year;\n    }\n  }, {\n    key: \"getMonth\",\n    value: function getMonth() {\n      return this.month;\n    }\n  }, {\n    key: \"getDuties\",\n    value: function getDuties() {\n      return this.duties;\n    }\n  }, {\n    key: \"getDuty\",\n    value: function getDuty(dayNumber, position) {\n      var day = this.getDay(dayNumber);\n      return this.duties.get(day)[position];\n    }\n  }, {\n    key: \"getDay\",\n    value: function getDay(dayNumber) {\n      return this.days[dayNumber - 1];\n    }\n  }, {\n    key: \"whoIsOnDuty\",\n    value: function whoIsOnDuty(dayNumber) {\n      var day = this.getDay(dayNumber);\n      var duties = {};\n      var _iterator36 = _createForOfIteratorHelper(this.dutyPositions),\n        _step36;\n      try {\n        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {\n          var position = _step36.value;\n          if (day) {\n            duties[position] = this.duties.get(day)[position].getDoctor();\n          } else {\n            duties[position] = null;\n          }\n        }\n      } catch (err) {\n        _iterator36.e(err);\n      } finally {\n        _iterator36.f();\n      }\n      return duties;\n    }\n  }, {\n    key: \"getStatistics\",\n    value: function getStatistics() {\n      var statistics = [];\n      this.doctors.forEach(function (doctor) {\n        statistics.push(doctor.getStatistics());\n      });\n      var total = statistics.reduce(function (prev, item) {\n        Object.entries(item).forEach(function (entry) {\n          var name = entry[0];\n          var value = entry[1];\n          if (name !== 'name') {\n            prev[name] += value;\n          }\n        });\n        return prev;\n      }, {\n        name: 'Razem',\n        duties: 0,\n        strain: 0,\n        weekends: 0,\n        weekendDays: 0,\n        holidays: 0,\n        0: 0,\n        1: 0,\n        2: 0,\n        3: 0,\n        4: 0,\n        5: 0,\n        6: 0\n      });\n      statistics.push(total);\n      return statistics;\n    }\n  }]);\n  return MonthlyDuties;\n}();\nvar Node = /*#__PURE__*/_createClass(function Node(state, parent, action) {\n  _classCallCheck(this, Node);\n  _defineProperty(this, \"state\", void 0);\n  _defineProperty(this, \"parent\", void 0);\n  _defineProperty(this, \"action\", void 0);\n  this.state = state;\n  this.parent = parent;\n  this.action = action;\n});\nvar StackFrontier = /*#__PURE__*/function () {\n  function StackFrontier() {\n    _classCallCheck(this, StackFrontier);\n    _defineProperty(this, \"frontier\", void 0);\n    this.frontier = [];\n    this.addToFront = this.addToFront.bind(this);\n    this.addToBack = this.addToBack.bind(this);\n    this.containsState = this.containsState.bind(this);\n    this.epmty = this.empty.bind(this);\n    this.remove = this.remove.bind(this);\n  }\n  _createClass(StackFrontier, [{\n    key: \"addToFront\",\n    value: function addToFront(node) {\n      this.frontier.push(node);\n    }\n  }, {\n    key: \"addToBack\",\n    value: function addToBack(node) {\n      this.frontier.unshift(node);\n    }\n  }, {\n    key: \"containsState\",\n    value: function containsState(state) {\n      return this.frontier.some(function (elem) {\n        return elem === state;\n      });\n    }\n  }, {\n    key: \"empty\",\n    value: function empty() {\n      return this.frontier.length === 0;\n    }\n  }, {\n    key: \"remove\",\n    value: function remove() {\n      if (this.empty()) {\n        throw Error(\"Empty frontier\");\n      } else {\n        var node = this.frontier.pop();\n        return node;\n      }\n    }\n  }]);\n  return StackFrontier;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthlyDuties);\n\n//# sourceURL=webpack://med-duties-app/./frontend/components/algorithm/MonthlyDuties.js?");

/***/ }),

/***/ 44800:
/*!***********************************************!*\
  !*** ./frontend/components/algorithm/Unit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 59920);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Unit = /*#__PURE__*/function () {\n  function Unit(pk, name, dutyPositions) {\n    _classCallCheck(this, Unit);\n    this.pk = pk;\n    this.name = name;\n    this.doctors = [];\n    this.dutyPositions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(1, dutyPositions + 1);\n    this.addDoctors = this.addDoctors.bind(this);\n    this.removeDoctor = this.removeDoctor.bind(this);\n  }\n  _createClass(Unit, [{\n    key: \"addDoctors\",\n    value: function addDoctors(doctorsList) {\n      this.doctors = this.doctors.concat(doctorsList);\n    }\n  }, {\n    key: \"removeDoctor\",\n    value: function removeDoctor(pk) {\n      this.doctors = this.doctors.filter(function (doctor) {\n        return !(doctor.pk === pk);\n      });\n    }\n  }]);\n  return Unit;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unit);\n\n//# sourceURL=webpack://med-duties-app/./frontend/components/algorithm/Unit.js?");

/***/ }),

/***/ 59920:
/*!************************************************!*\
  !*** ./frontend/components/algorithm/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DefaultDict\": () => (/* binding */ DefaultDict),\n/* harmony export */   \"ValueError\": () => (/* binding */ ValueError),\n/* harmony export */   \"areEqual\": () => (/* binding */ areEqual),\n/* harmony export */   \"getDiff\": () => (/* binding */ getDiff),\n/* harmony export */   \"getHolidays\": () => (/* binding */ getHolidays),\n/* harmony export */   \"getKeyByValue\": () => (/* binding */ getKeyByValue),\n/* harmony export */   \"getNumberOfWeekdaysInMonth\": () => (/* binding */ getNumberOfWeekdaysInMonth),\n/* harmony export */   \"getWeekday\": () => (/* binding */ getWeekday),\n/* harmony export */   \"range\": () => (/* binding */ range),\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle),\n/* harmony export */   \"union\": () => (/* binding */ union)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction range(start) {\n  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  var rangeStart = start;\n  var rangeEnd = end;\n  var arr = [];\n  if (rangeEnd === null) {\n    for (var i = 0; i < rangeStart; i += step) {\n      arr.push(i);\n    }\n  } else if (step > 0) {\n    for (var _i = rangeStart; _i < rangeEnd; _i += step) {\n      arr.push(_i);\n    }\n  } else if (step < 0) {\n    for (var _i2 = rangeStart; _i2 > rangeEnd; _i2 += step) {\n      arr.push(_i2);\n    }\n  }\n  return arr;\n}\nvar DefaultDict = /*#__PURE__*/_createClass(function DefaultDict(defaultInit) {\n  _classCallCheck(this, DefaultDict);\n  return new Proxy({}, {\n    get: function get(target, name) {\n      return name in target ? target[name] : target[name] = typeof defaultInit === 'function' ? new defaultInit().valueOf() : defaultInit;\n    }\n  });\n});\nfunction getHolidays() {\n  var holidays = {};\n  var years = range(2022, 2033);\n  years.forEach(function (year) {\n    holidays[year] = new DefaultDict(Array);\n    holidays[year][1].push(1, 6);\n    holidays[year][5].push(1, 3);\n    holidays[year][8].push(15);\n    holidays[year][11].push(1, 11);\n    holidays[year][12].push(24, 25, 26, 31);\n  });\n\n  // Easter\n  holidays[2022][4].push(16, 17, 18);\n  holidays[2023][4].push(.8, 9, 10);\n  holidays[2024][3].push(30, 31);\n  holidays[2024][4].push(1);\n  holidays[2025][4].push(19, 20, 21);\n  holidays[2026][4].push(4, 5, 6);\n  holidays[2027][3].push(27, 28, 29);\n  holidays[2028][4].push(15, 16, 17);\n  holidays[2029][3].push(31);\n  holidays[2029][4].push(1, 2);\n  holidays[2030][4].push(20, 21, 22);\n  holidays[2031][4].push(12, 13, 14);\n  holidays[2032][3].push(27, 28, 29);\n\n  // Feast of Corpus Christi (Boze Cialo) + following weekend\n  holidays[2022][6].push(16, 17, 18, 19);\n  holidays[2023][6].push(8, 9, 10, 11);\n  holidays[2024][5].push(30, 31);\n  holidays[2024][6].push(1, 6);\n  holidays[2025][6].push(19, 20, 21, 22);\n  holidays[2026][6].push(4, 5, 6, 7);\n  holidays[2027][5].push(27, 28, 29, 30);\n  holidays[2028][6].push(15, 16, 17, 18);\n  holidays[2029][5].push(31);\n  holidays[2029][6].push(1, 2, 3);\n  holidays[2030][6].push(20, 21, 22, 23);\n  holidays[2031][6].push(12, 13, 14, 15);\n  holidays[2032][5].push(27, 28, 29, 30);\n\n  // \"Long weekend\" in May\n  holidays[2022][4].push(30);\n  holidays[2022][5].push(2);\n  holidays[2023][4].push(29, 30);\n  holidays[2023][5].push(2);\n  holidays[2024][5].push(2, 4, 5);\n  holidays[2025][5].push(2, 4);\n  holidays[2026][5].push(2);\n  holidays[2027][5].push(2);\n  holidays[2028][4].push(29, 30);\n  holidays[2028][5].push(2);\n  holidays[2029][5].push(2);\n  holidays[2030][5].push(2, 4, 5);\n  holidays[2031][5].push(2, 4);\n  holidays[2032][5].push(2);\n\n  /* Other possible long weekends (1.1, 1.6, 11.1, 11.11)\n  Christmas is excluded as there is too much nerves\n  about 24th, 25th, 26th already. */\n  holidays[2022][1].push(7);\n  holidays[2022][10].push(31);\n  holidays[2025][11].push(10);\n  holidays[2026][1].push(2, 5);\n  holidays[2027][11].push(12);\n  holidays[2028][1].push(7);\n  holidays[2029][11].push(2);\n  holidays[2031][11].push(10);\n  holidays[2032][1].push(2, 5);\n  holidays[2032][11].push(12);\n  return holidays;\n}\nfunction getWeekday(year, month, day) {\n  var date = new Date(year, month - 1, day);\n  var weekday = date.getDay();\n\n  // Convert weekday to european notation.\n  if (weekday === 0) {\n    weekday = 6;\n  } else {\n    weekday--;\n  }\n  return weekday;\n}\nfunction getNumberOfWeekdaysInMonth(year, month, weekdays) {\n  // Get dict of first weekdays, where weekday number is key\n  // and day number is value.\n  var firstWeekWeekdays = {};\n  range(7).forEach(function (day, index) {\n    firstWeekWeekdays[getWeekday(year, month, day + 1)] = index + 1;\n  });\n  var monthLength = new Date(year, month, 0).getDate();\n\n  // Count occurances of all given weekdays.\n  var total = 0;\n  weekdays.forEach(function (weekday) {\n    var firstOccurance = firstWeekWeekdays[weekday];\n    total += Math.floor((monthLength - firstOccurance) / 7) + 1;\n  });\n  return total;\n}\nvar ValueError = /*#__PURE__*/function (_Error) {\n  _inherits(ValueError, _Error);\n  var _super = _createSuper(ValueError);\n  function ValueError() {\n    var _this;\n    _classCallCheck(this, ValueError);\n    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n      params[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(params));\n    if (Error.captureStackTrace) {\n      Error.captureStackTrace(_assertThisInitialized(_this), ValueError);\n    }\n    _this.name = \"ValueError\";\n    return _this;\n  }\n  return _createClass(ValueError);\n}( /*#__PURE__*/_wrapNativeSuper(Error));\nfunction shuffle(array) {\n  for (var i = array.length - 1; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1));\n    var _ref = [array[j], array[i]];\n    array[i] = _ref[0];\n    array[j] = _ref[1];\n  }\n}\nfunction areEqual(iterable1, iterable2) {\n  var array1 = Array.of.apply(Array, _toConsumableArray(iterable1));\n  var array2 = Array.of.apply(Array, _toConsumableArray(iterable2));\n  var forward = array1.every(function (item) {\n    var count1 = array1.filter(function (i) {\n      return i === item;\n    }).length;\n    var count2 = array2.filter(function (i) {\n      return i === item;\n    }).length;\n    return array2.includes(item) && count1 === count2;\n  });\n  var backward = array2.every(function (item) {\n    var count1 = array1.filter(function (i) {\n      return i === item;\n    }).length;\n    var count2 = array2.filter(function (i) {\n      return i === item;\n    }).length;\n    return array1.includes(item) && count1 === count2;\n  });\n  if (forward && backward) {\n    return true;\n  }\n  return false;\n}\nfunction getDiff(iterable1, iterable2) {\n  /* Suitable only for comparing array (set) \n  with its subarray (subset) */\n  var array1 = Array.of.apply(Array, _toConsumableArray(iterable1));\n  var array2 = Array.of.apply(Array, _toConsumableArray(iterable2));\n  var larger;\n  var smaller;\n  if (array1.length > array2.length) {\n    larger = array1;\n    smaller = array2;\n  } else if (array2.length > array1.length) {\n    larger = array2;\n    smaller = array1;\n  } else {\n    return [];\n  }\n  var diff = larger.filter(function (item) {\n    return !smaller.includes(item);\n  });\n  return diff;\n}\nfunction union(set1, set2) {\n  var _union = new Set(set1);\n  var _iterator = _createForOfIteratorHelper(set2),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      _union.add(elem);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return _union;\n}\nfunction getKeyByValue(map, value) {\n  var _iterator2 = _createForOfIteratorHelper(map.entries()),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var _step2$value = _slicedToArray(_step2.value, 2),\n        k = _step2$value[0],\n        v = _step2$value[1];\n      if (v === value) {\n        return k;\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n  return null;\n}\n\n//# sourceURL=webpack://med-duties-app/./frontend/components/algorithm/utils.js?");

/***/ }),

/***/ 91248:
/*!****************************!*\
  !*** ./frontend/worker.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_algorithm_Day__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/algorithm/Day */ 97794);\n/* harmony import */ var _components_algorithm_Doctor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/algorithm/Doctor */ 77333);\n/* harmony import */ var _components_algorithm_Duty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/algorithm/Duty */ 18417);\n/* harmony import */ var _components_algorithm_MonthlyDuties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/algorithm/MonthlyDuties */ 50868);\n/* harmony import */ var _components_algorithm_Unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/algorithm/Unit */ 44800);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar monthlyDuties;\nvar unit;\nvar doctors;\nvar inactiveDoctors;\nvar month;\nvar year;\nfunction initialize(data) {\n  var scheduleData = data.monthlyDuties;\n  var unitData = data.unit;\n  var doctorsData = data.doctors;\n  var prevDutiesData = data.prevDutiesData;\n  var nextDutiesData = data.nextDutiesData;\n  var _scheduleData$monthan = scheduleData.monthandyear.split('/');\n  var _scheduleData$monthan2 = _slicedToArray(_scheduleData$monthan, 2);\n  month = _scheduleData$monthan2[0];\n  year = _scheduleData$monthan2[1];\n  // Create Unit instance.\n  unit = new _components_algorithm_Unit__WEBPACK_IMPORTED_MODULE_4__[\"default\"](unitData.pk, unitData.name, unitData.duty_positions);\n\n  // Create doctors instances.\n  doctors = [];\n  inactiveDoctors = [];\n  doctorsData.forEach(function (doctor) {\n    var doctorData = scheduleData.doctor_data.find(function (data) {\n      return data.doctor === doctor.pk;\n    });\n    var d = new _components_algorithm_Doctor__WEBPACK_IMPORTED_MODULE_1__[\"default\"](doctor.name, unit, year, month, doctor.pk);\n    if (doctorData) {\n      if (doctorData.strain) {\n        d.setStrain(doctorData.strain);\n      }\n      if (doctorData.max_number_of_duties) {\n        d.setMaxNumberOfDuties(doctorData.max_number_of_duties, true);\n      }\n      if (doctorData.exceptions) {\n        var exceptions = doctorData.exceptions.split(' ').map(function (exc) {\n          return parseInt(exc);\n        });\n        d.setExceptions(exceptions, true);\n      }\n      if (doctorData.preferred_days) {\n        var days = doctorData.preferred_days.split(' ').map(function (day) {\n          return parseInt(day);\n        });\n        d.setPreferredDays(days, true);\n      }\n      if (doctorData.preferred_positions) {\n        var positions = doctorData.preferred_positions.split(' ').map(function (pos) {\n          return parseInt(pos);\n        });\n        d.setPreferredPositions(positions, true);\n      }\n      if (doctorData.preferred_weekdays) {\n        var weekdays = doctorData.preferred_weekdays.split(' ').map(function (weekday) {\n          return parseInt(weekday);\n        });\n        d.setPreferredWeekdays(weekdays, true);\n      }\n      if (doctorData.locked) {\n        d.lockPreferences();\n      }\n      d.setSettingsPk(doctorData.pk);\n      doctors.push(d);\n    } else {\n      inactiveDoctors.push(d);\n    }\n  });\n\n  // Add doctors to unit.\n  unit.addDoctors(doctors);\n\n  // Create schedule instance.\n  monthlyDuties = new _components_algorithm_MonthlyDuties__WEBPACK_IMPORTED_MODULE_3__[\"default\"](year, month, unit, scheduleData.pk);\n\n  // Add duties to schedule \n  // (which will add them to doctors instances as well).\n  var duties = scheduleData.duties.map(function (duty) {\n    var doctor = duty.doctor ? doctors.find(function (doctor) {\n      return doctor.pk === duty.doctor;\n    }) : null;\n    var day = monthlyDuties.getDays().find(function (day) {\n      return day.number === duty.day;\n    });\n    return new _components_algorithm_Duty__WEBPACK_IMPORTED_MODULE_2__[\"default\"](day, doctor, duty.position, duty.strain_points, duty.pk, duty.set_by_user);\n  });\n  monthlyDuties.addDuties(duties);\n\n  // Add prev month's duties to schedule.\n  var prevYear = month === 1 ? year - 1 : month;\n  var prevMonth = month === 1 ? 12 : month - 1;\n  var prevMonthDuties = prevDutiesData.filter(function (duty) {\n    var monthLength = new Date(prevYear, prevMonth, 0).getDate();\n    return parseInt(duty.day) > monthLength - 7;\n  }).map(function (duty) {\n    var doctor = doctors.find(function (d) {\n      return d.pk === duty.doctor;\n    });\n    if (!doctor) {\n      doctor = inactiveDoctors.find(function (d) {\n        return d.pk === duty.doctor;\n      });\n    }\n    if (!doctor) {\n      doctor = null;\n    }\n    var prevYear = month === 1 ? year - 1 : year;\n    var prevMonth = month === 1 ? 12 : month - 1;\n    var day = new _components_algorithm_Day__WEBPACK_IMPORTED_MODULE_0__[\"default\"](prevYear, prevMonth, duty.day);\n    return new _components_algorithm_Duty__WEBPACK_IMPORTED_MODULE_2__[\"default\"](day, doctor, duty.position, duty.strain_points, duty.pk, duty.set_by_user);\n  });\n  monthlyDuties.addPrevMonthDuties(prevMonthDuties);\n\n  // Add next month's duties to schedule.\n  var nextYear = month === 12 ? year + 1 : year;\n  var nextMonth = month === 12 ? 1 : month + 1;\n  var nextMonthDuties = nextDutiesData.filter(function (duty) {\n    return parseInt(duty.day) < 8;\n  }).map(function (duty) {\n    var doctor = doctors.find(function (d) {\n      return d.pk === duty.doctor;\n    });\n    if (!doctor) {\n      doctor = inactiveDoctors.find(function (d) {\n        return d.pk === duty.doctor;\n      });\n    }\n    if (!doctor) {\n      doctor = null;\n    }\n    var day = new _components_algorithm_Day__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nextYear, nextMonth, duty.day);\n    return new _components_algorithm_Duty__WEBPACK_IMPORTED_MODULE_2__[\"default\"](day, doctor, duty.position, duty.strain_points, duty.pk, duty.set_by_user);\n  });\n  monthlyDuties.addNextMonthDuties(nextMonthDuties);\n\n  // Create first preferences object.\n  monthlyDuties.updatePreferences();\n}\nvar setDuties = function setDuties() {\n  var _monthlyDuties$setDut = monthlyDuties.setDuties(),\n    _monthlyDuties$setDut2 = _slicedToArray(_monthlyDuties$setDut, 3),\n    success = _monthlyDuties$setDut2[0],\n    allSet = _monthlyDuties$setDut2[1],\n    logData = _monthlyDuties$setDut2[2];\n  var duties = [];\n  if (success) {\n    duties = serializeDuties(monthlyDuties.getDuties());\n  }\n  return {\n    success: success,\n    allSet: allSet,\n    logData: logData,\n    duties: duties\n  };\n};\nvar serializeDuties = function serializeDuties(data) {\n  var duties = [];\n  var _iterator = _createForOfIteratorHelper(data.values()),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var dailyDuties = _step.value;\n      for (var _i2 = 0, _Object$values = Object.values(dailyDuties); _i2 < _Object$values.length; _i2++) {\n        var duty = _Object$values[_i2];\n        if (duty.doctor) {\n          duties.push({\n            day: duty.day.number,\n            doctor: duty.doctor.getPk(),\n            position: duty.position,\n            strainPoints: duty.strainPoints,\n            setByUser: duty.setByUser\n          });\n        }\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return duties;\n};\nonmessage = function onmessage(event) {\n  var data = event.data;\n  initialize(data);\n  var result = setDuties();\n  postMessage(result);\n};\n\n//# sourceURL=webpack://med-duties-app/./frontend/worker.js?");

/***/ }),

/***/ 76124:
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/shim */ 81934);\n\n__webpack_require__(/*! regenerator-runtime/runtime */ 95654);\n\n__webpack_require__(/*! core-js/fn/regexp/escape */ 7694);\n\nif (__webpack_require__.g._babelPolyfill) {\n  throw new Error(\"only one instance of babel-polyfill is allowed\");\n}\n__webpack_require__.g._babelPolyfill = true;\n\nvar DEFINE_PROPERTY = \"defineProperty\";\nfunction define(O, key, value) {\n  O[key] || Object[DEFINE_PROPERTY](O, key, {\n    writable: true,\n    configurable: true,\n    value: value\n  });\n}\n\ndefine(String.prototype, \"padLeft\", \"\".padStart);\ndefine(String.prototype, \"padRight\", \"\".padEnd);\n\n\"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill\".split(\",\").forEach(function (key) {\n  [][key] && define(Array, key, Function.call.bind([][key]));\n});\n\n//# sourceURL=webpack://med-duties-app/./node_modules/babel-polyfill/lib/index.js?");

/***/ }),

/***/ 95654:
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * https://raw.github.com/facebook/regenerator/master/LICENSE file. An\n * additional grant of patent rights can be found in the PATENTS file in\n * the same directory.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = \"object\" === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    if (typeof global.process === \"object\" && global.process.domain) {\n      invoke = global.process.domain.bind(invoke);\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // Among the various tricks for obtaining a reference to the global\n  // object, this seems to be the most reliable technique that does not\n  // use indirect eval (which violates Content Security Policy).\n  typeof __webpack_require__.g === \"object\" ? __webpack_require__.g :\n  typeof window === \"object\" ? window :\n  typeof self === \"object\" ? self : this\n);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ 7694:
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/regexp/escape.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/core.regexp.escape */ 61761);\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ 25645).RegExp.escape;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/fn/regexp/escape.js?");

/***/ }),

/***/ 24963:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ 83365:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var cof = __webpack_require__(/*! ./_cof */ 92032);\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ 17722:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ 86314)('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ 87728)(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ 76793:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar at = __webpack_require__(/*! ./_string-at */ 24496)(true);\n\n // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_advance-string-index.js?");

/***/ }),

/***/ 83328:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ 27007:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ 55286);\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ 5216:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 92337);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ 46852:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 92337);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ 9490:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var forOf = __webpack_require__(/*! ./_for-of */ 3531);\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_array-from-iterable.js?");

/***/ }),

/***/ 79315:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 92337);\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ 10050:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ 741);\nvar IObject = __webpack_require__(/*! ./_iobject */ 49797);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar asc = __webpack_require__(/*! ./_array-species-create */ 16886);\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ 37628:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar IObject = __webpack_require__(/*! ./_iobject */ 49797);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ 42736:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar isArray = __webpack_require__(/*! ./_is-array */ 4302);\nvar SPECIES = __webpack_require__(/*! ./_wks */ 86314)('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ 16886:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ 42736);\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ 34398:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar invoke = __webpack_require__(/*! ./_invoke */ 97242);\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ 41488:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ 92032);\nvar TAG = __webpack_require__(/*! ./_wks */ 86314)('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ 92032:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ 9824:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar dP = (__webpack_require__(/*! ./_object-dp */ 99275).f);\nvar create = __webpack_require__(/*! ./_object-create */ 42503);\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ 24408);\nvar ctx = __webpack_require__(/*! ./_ctx */ 741);\nvar anInstance = __webpack_require__(/*! ./_an-instance */ 83328);\nvar forOf = __webpack_require__(/*! ./_for-of */ 3531);\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ 42923);\nvar step = __webpack_require__(/*! ./_iter-step */ 15436);\nvar setSpecies = __webpack_require__(/*! ./_set-species */ 2974);\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 67057);\nvar fastKey = (__webpack_require__(/*! ./_meta */ 84728).fastKey);\nvar validate = __webpack_require__(/*! ./_validate-collection */ 1616);\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ 86132:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-to-json.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ 41488);\nvar from = __webpack_require__(/*! ./_array-from-iterable */ 9490);\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + \"#toJSON isn't generic\");\n    return from(this);\n  };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_collection-to-json.js?");

/***/ }),

/***/ 23657:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ 24408);\nvar getWeak = (__webpack_require__(/*! ./_meta */ 84728).getWeak);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar anInstance = __webpack_require__(/*! ./_an-instance */ 83328);\nvar forOf = __webpack_require__(/*! ./_for-of */ 3531);\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ 10050);\nvar $has = __webpack_require__(/*! ./_has */ 79181);\nvar validate = __webpack_require__(/*! ./_validate-collection */ 1616);\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function () {\n  this.a = [];\n};\nvar findUncaughtFrozen = function (store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.a.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;      // collection type\n      that._i = id++;      // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function (key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);\n    else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ 45795:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar redefine = __webpack_require__(/*! ./_redefine */ 77234);\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ 24408);\nvar meta = __webpack_require__(/*! ./_meta */ 84728);\nvar forOf = __webpack_require__(/*! ./_for-of */ 3531);\nvar anInstance = __webpack_require__(/*! ./_an-instance */ 83328);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ 7462);\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 22943);\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 40266);\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function (KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY,\n      KEY == 'delete' ? function (a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'has' ? function has(a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'get' ? function get(a) {\n        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }\n        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }\n    );\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ 25645:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

eval("var core = module.exports = { version: '2.6.12' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ 92811:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ 99275);\nvar createDesc = __webpack_require__(/*! ./_property-desc */ 90681);\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ 741:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ 53537:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ 870:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ 91355:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ 67057:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ 74253)(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ 62457:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar document = (__webpack_require__(/*! ./_global */ 3816).document);\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ 74430:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ 5541:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ 47184);\nvar gOPS = __webpack_require__(/*! ./_object-gops */ 64548);\nvar pIE = __webpack_require__(/*! ./_object-pie */ 14682);\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ 42985:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ 3816);\nvar core = __webpack_require__(/*! ./_core */ 25645);\nvar hide = __webpack_require__(/*! ./_hide */ 87728);\nvar redefine = __webpack_require__(/*! ./_redefine */ 77234);\nvar ctx = __webpack_require__(/*! ./_ctx */ 741);\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ 8852:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MATCH = __webpack_require__(/*! ./_wks */ 86314)('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ 74253:
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ 28082:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.exec */ 18269);\nvar redefine = __webpack_require__(/*! ./_redefine */ 77234);\nvar hide = __webpack_require__(/*! ./_hide */ 87728);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\nvar wks = __webpack_require__(/*! ./_wks */ 86314);\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ 21165);\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ 53218:
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ 13325:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar isArray = __webpack_require__(/*! ./_is-array */ 4302);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar ctx = __webpack_require__(/*! ./_ctx */ 741);\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ 86314)('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ 3531:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ctx = __webpack_require__(/*! ./_ctx */ 741);\nvar call = __webpack_require__(/*! ./_iter-call */ 28851);\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 86555);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 69002);\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ 40018:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./_shared */ 3825)('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ 3816:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ 79181:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ 87728:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ 99275);\nvar createDesc = __webpack_require__(/*! ./_property-desc */ 90681);\nmodule.exports = __webpack_require__(/*! ./_descriptors */ 67057) ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ 40639:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var document = (__webpack_require__(/*! ./_global */ 3816).document);\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ 1734:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ 67057) && !__webpack_require__(/*! ./_fails */ 74253)(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 62457)('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ 40266:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ 27375).set);\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ 97242:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ 49797:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ 92032);\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ 86555:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ 87234);\nvar ITERATOR = __webpack_require__(/*! ./_wks */ 86314)('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ 4302:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ 92032);\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ 18367:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ 55286:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ 55364:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar cof = __webpack_require__(/*! ./_cof */ 92032);\nvar MATCH = __webpack_require__(/*! ./_wks */ 86314)('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ 28851:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ 49988:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ 42503);\nvar descriptor = __webpack_require__(/*! ./_property-desc */ 90681);\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 22943);\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ 87728)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 86314)('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ 42923:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ 4461);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar redefine = __webpack_require__(/*! ./_redefine */ 77234);\nvar hide = __webpack_require__(/*! ./_hide */ 87728);\nvar Iterators = __webpack_require__(/*! ./_iterators */ 87234);\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ 49988);\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 22943);\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\nvar ITERATOR = __webpack_require__(/*! ./_wks */ 86314)('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ 7462:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ 86314)('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ 15436:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ 87234:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ 4461:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ 13086:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ 34934:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ 61801);\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ 46206:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ 68757:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-scale.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nmodule.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {\n  if (\n    arguments.length === 0\n      // eslint-disable-next-line no-self-compare\n      || x != x\n      // eslint-disable-next-line no-self-compare\n      || inLow != inLow\n      // eslint-disable-next-line no-self-compare\n      || inHigh != inHigh\n      // eslint-disable-next-line no-self-compare\n      || outLow != outLow\n      // eslint-disable-next-line no-self-compare\n      || outHigh != outHigh\n  ) return NaN;\n  if (x === Infinity || x === -Infinity) return x;\n  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_math-scale.js?");

/***/ }),

/***/ 61801:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ 84728:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var META = __webpack_require__(/*! ./_uid */ 93953)('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar has = __webpack_require__(/*! ./_has */ 79181);\nvar setDesc = (__webpack_require__(/*! ./_object-dp */ 99275).f);\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ 74253)(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ 50133:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Map = __webpack_require__(/*! ./es6.map */ 88416);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar shared = __webpack_require__(/*! ./_shared */ 3825)('metadata');\nvar store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ 30147))());\n\nvar getOrCreateMetadataMap = function (target, targetKey, create) {\n  var targetMetadata = store.get(target);\n  if (!targetMetadata) {\n    if (!create) return undefined;\n    store.set(target, targetMetadata = new Map());\n  }\n  var keyMetadata = targetMetadata.get(targetKey);\n  if (!keyMetadata) {\n    if (!create) return undefined;\n    targetMetadata.set(targetKey, keyMetadata = new Map());\n  } return keyMetadata;\n};\nvar ordinaryHasOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);\n};\nvar ordinaryGetOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);\n};\nvar ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {\n  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);\n};\nvar ordinaryOwnMetadataKeys = function (target, targetKey) {\n  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);\n  var keys = [];\n  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });\n  return keys;\n};\nvar toMetaKey = function (it) {\n  return it === undefined || typeof it == 'symbol' ? it : String(it);\n};\nvar exp = function (O) {\n  $export($export.S, 'Reflect', O);\n};\n\nmodule.exports = {\n  store: store,\n  map: getOrCreateMetadataMap,\n  has: ordinaryHasOwnMetadata,\n  get: ordinaryGetOwnMetadata,\n  set: ordinaryDefineOwnMetadata,\n  keys: ordinaryOwnMetadataKeys,\n  key: toMetaKey,\n  exp: exp\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_metadata.js?");

/***/ }),

/***/ 14351:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ 3816);\nvar macrotask = (__webpack_require__(/*! ./_task */ 74193).set);\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ 92032)(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ 43499:
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ 35345:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 67057);\nvar getKeys = __webpack_require__(/*! ./_object-keys */ 47184);\nvar gOPS = __webpack_require__(/*! ./_object-gops */ 64548);\nvar pIE = __webpack_require__(/*! ./_object-pie */ 14682);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar IObject = __webpack_require__(/*! ./_iobject */ 49797);\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ 74253)(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ 42503:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar dPs = __webpack_require__(/*! ./_object-dps */ 35588);\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 74430);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ 69335)('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ 62457)('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  (__webpack_require__(/*! ./_html */ 40639).appendChild)(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ 99275:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 1734);\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ 67057) ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ 35588:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = __webpack_require__(/*! ./_object-dp */ 99275);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar getKeys = __webpack_require__(/*! ./_object-keys */ 47184);\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ 67057) ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ 91670:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// Forced replacement prototype accessors methods\nmodule.exports = __webpack_require__(/*! ./_library */ 4461) || !__webpack_require__(/*! ./_fails */ 74253)(function () {\n  var K = Math.random();\n  // In FF throws only define methods\n  // eslint-disable-next-line no-undef, no-useless-call\n  __defineSetter__.call(null, K, function () { /* empty */ });\n  delete __webpack_require__(/*! ./_global */ 3816)[K];\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-forced-pam.js?");

/***/ }),

/***/ 18693:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ 14682);\nvar createDesc = __webpack_require__(/*! ./_property-desc */ 90681);\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\nvar has = __webpack_require__(/*! ./_has */ 79181);\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 1734);\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ 67057) ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ 39327:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar gOPN = (__webpack_require__(/*! ./_object-gopn */ 20616).f);\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ 20616:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ 60189);\nvar hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ 74430).concat)('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ 64548:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ 468:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ 79181);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ 69335)('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ 60189:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ./_has */ 79181);\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 79315)(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ 69335)('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ 47184:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ 60189);\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 74430);\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ 14682:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ 33160:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar core = __webpack_require__(/*! ./_core */ 25645);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ 51131:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 67057);\nvar getKeys = __webpack_require__(/*! ./_object-keys */ 47184);\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar isEnum = (__webpack_require__(/*! ./_object-pie */ 14682).f);\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || isEnum.call(O, key)) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ 57643:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ 20616);\nvar gOPS = __webpack_require__(/*! ./_object-gops */ 64548);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar Reflect = (__webpack_require__(/*! ./_global */ 3816).Reflect);\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ 47743:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $parseFloat = (__webpack_require__(/*! ./_global */ 3816).parseFloat);\nvar $trim = (__webpack_require__(/*! ./_string-trim */ 29599).trim);\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ 84644) + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ 55960:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $parseInt = (__webpack_require__(/*! ./_global */ 3816).parseInt);\nvar $trim = (__webpack_require__(/*! ./_string-trim */ 29599).trim);\nvar ws = __webpack_require__(/*! ./_string-ws */ 84644);\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ 10188:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ 50094:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ 43499);\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ 90681:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ 24408:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var redefine = __webpack_require__(/*! ./_redefine */ 77234);\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ 77234:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ 3816);\nvar hide = __webpack_require__(/*! ./_hide */ 87728);\nvar has = __webpack_require__(/*! ./_has */ 79181);\nvar SRC = __webpack_require__(/*! ./_uid */ 93953)('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ 40018);\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n(__webpack_require__(/*! ./_core */ 25645).inspectSource) = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ 27787:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ 41488);\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ 21165:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ 53218);\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ 74398:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_replacer.js ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = function (regExp, replace) {\n  var replacer = replace === Object(replace) ? function (part) {\n    return replace[part];\n  } : replace;\n  return function (it) {\n    return String(it).replace(regExp, replacer);\n  };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_replacer.js?");

/***/ }),

/***/ 27195:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ 31024:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-from.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar ctx = __webpack_require__(/*! ./_ctx */ 741);\nvar forOf = __webpack_require__(/*! ./_for-of */ 3531);\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {\n    var mapFn = arguments[1];\n    var mapping, A, n, cb;\n    aFunction(this);\n    mapping = mapFn !== undefined;\n    if (mapping) aFunction(mapFn);\n    if (source == undefined) return new this();\n    A = [];\n    if (mapping) {\n      n = 0;\n      cb = ctx(mapFn, arguments[2], 2);\n      forOf(source, false, function (nextItem) {\n        A.push(cb(nextItem, n++));\n      });\n    } else {\n      forOf(source, false, A.push, A);\n    }\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_set-collection-from.js?");

/***/ }),

/***/ 94881:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-of.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { of: function of() {\n    var length = arguments.length;\n    var A = new Array(length);\n    while (length--) A[length] = arguments[length];\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_set-collection-of.js?");

/***/ }),

/***/ 27375:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ 741)(Function.call, (__webpack_require__(/*! ./_object-gopd */ 18693).f)(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ 2974:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar dP = __webpack_require__(/*! ./_object-dp */ 99275);\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 67057);\nvar SPECIES = __webpack_require__(/*! ./_wks */ 86314)('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ 22943:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var def = (__webpack_require__(/*! ./_object-dp */ 99275).f);\nvar has = __webpack_require__(/*! ./_has */ 79181);\nvar TAG = __webpack_require__(/*! ./_wks */ 86314)('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ 69335:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ./_shared */ 3825)('keys');\nvar uid = __webpack_require__(/*! ./_uid */ 93953);\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ 3825:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var core = __webpack_require__(/*! ./_core */ 25645);\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ 4461) ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ 58364:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar SPECIES = __webpack_require__(/*! ./_wks */ 86314)('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ 77717:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ 24496:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ 42094:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ 55364);\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ 29395:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ 75442:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar repeat = __webpack_require__(/*! ./_string-repeat */ 68595);\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ 68595:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ 29599:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar spaces = __webpack_require__(/*! ./_string-ws */ 84644);\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ 84644:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ 74193:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ctx = __webpack_require__(/*! ./_ctx */ 741);\nvar invoke = __webpack_require__(/*! ./_invoke */ 97242);\nvar html = __webpack_require__(/*! ./_html */ 40639);\nvar cel = __webpack_require__(/*! ./_dom-create */ 62457);\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ 92032)(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ 92337:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ 94843:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ 81467:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ 22110:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ 49797);\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ 10875:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ 20508:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ 21689:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ 78440:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nif (__webpack_require__(/*! ./_descriptors */ 67057)) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ 4461);\n  var global = __webpack_require__(/*! ./_global */ 3816);\n  var fails = __webpack_require__(/*! ./_fails */ 74253);\n  var $export = __webpack_require__(/*! ./_export */ 42985);\n  var $typed = __webpack_require__(/*! ./_typed */ 89383);\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ 91125);\n  var ctx = __webpack_require__(/*! ./_ctx */ 741);\n  var anInstance = __webpack_require__(/*! ./_an-instance */ 83328);\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ 90681);\n  var hide = __webpack_require__(/*! ./_hide */ 87728);\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ 24408);\n  var toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\n  var toLength = __webpack_require__(/*! ./_to-length */ 10875);\n  var toIndex = __webpack_require__(/*! ./_to-index */ 94843);\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 92337);\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\n  var has = __webpack_require__(/*! ./_has */ 79181);\n  var classof = __webpack_require__(/*! ./_classof */ 41488);\n  var isObject = __webpack_require__(/*! ./_is-object */ 55286);\n  var toObject = __webpack_require__(/*! ./_to-object */ 20508);\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 86555);\n  var create = __webpack_require__(/*! ./_object-create */ 42503);\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\n  var gOPN = (__webpack_require__(/*! ./_object-gopn */ 20616).f);\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 69002);\n  var uid = __webpack_require__(/*! ./_uid */ 93953);\n  var wks = __webpack_require__(/*! ./_wks */ 86314);\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ 10050);\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ 79315);\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 58364);\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ 56997);\n  var Iterators = __webpack_require__(/*! ./_iterators */ 87234);\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ 7462);\n  var setSpecies = __webpack_require__(/*! ./_set-species */ 2974);\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ 46852);\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ 5216);\n  var $DP = __webpack_require__(/*! ./_object-dp */ 99275);\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ 18693);\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function (it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function (it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function (C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    } return new C(length);\n  };\n\n  var speciesFromList = function (O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function (C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) result[index] = list[index++];\n    return result;\n  };\n\n  var addGetter = function (it, key, internal) {\n    dP(it, key, { get: function () { return this._d[internal]; } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      } O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of(/* ...items */) {\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) result[index] = arguments[index++];\n    return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn,\n        arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) { // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      } return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(\n        O.buffer,\n        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,\n        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)\n      );\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) this[offset + index] = src[index++];\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function (target, key) {\n    return isObject(target)\n      && target[TYPED_ARRAY]\n      && typeof key != 'symbol'\n      && key in target\n      && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true))\n      ? propertyDesc(2, target[key])\n      : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true))\n      && isObject(desc)\n      && has(desc, 'value')\n      && !has(desc, 'get')\n      && !has(desc, 'set')\n      // TODO: add validation descriptor w/o calling accessors\n      && !desc.configurable\n      && (!has(desc, 'writable') || desc.writable)\n      && (!has(desc, 'enumerable') || desc.enumerable)\n    ) {\n      target[key] = desc.value;\n      return target;\n    } return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () { arrayToString.call({}); })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function () { /* noop */ },\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function () { return this[TYPED_ARRAY]; }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function (that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function (that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function (that, index) {\n      dP(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) addElement(that, index++);\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined\n            ? new Base(data, toOffset($offset, BYTES), $length)\n            : $offset !== undefined\n              ? new Base(data, toOffset($offset, BYTES))\n              : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator\n      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function () { return NAME; }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ 91125:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 67057);\nvar LIBRARY = __webpack_require__(/*! ./_library */ 4461);\nvar $typed = __webpack_require__(/*! ./_typed */ 89383);\nvar hide = __webpack_require__(/*! ./_hide */ 87728);\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ 24408);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar anInstance = __webpack_require__(/*! ./_an-instance */ 83328);\nvar toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar toIndex = __webpack_require__(/*! ./_to-index */ 94843);\nvar gOPN = (__webpack_require__(/*! ./_object-gopn */ 20616).f);\nvar dP = (__webpack_require__(/*! ./_object-dp */ 99275).f);\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ 46852);\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 22943);\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  } return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ 89383:
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ 3816);\nvar hide = __webpack_require__(/*! ./_hide */ 87728);\nvar uid = __webpack_require__(/*! ./_uid */ 93953);\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = (\n  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'\n).split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ 93953:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ 30575:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ 3816);\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ 1616:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./_is-object */ 55286);\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ 36074:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ 3816);\nvar core = __webpack_require__(/*! ./_core */ 25645);\nvar LIBRARY = __webpack_require__(/*! ./_library */ 4461);\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ 28787);\nvar defineProperty = (__webpack_require__(/*! ./_object-dp */ 99275).f);\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ 28787:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("exports.f = __webpack_require__(/*! ./_wks */ 86314);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ 86314:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var store = __webpack_require__(/*! ./_shared */ 3825)('wks');\nvar uid = __webpack_require__(/*! ./_uid */ 93953);\nvar Symbol = (__webpack_require__(/*! ./_global */ 3816).Symbol);\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ 69002:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ./_classof */ 41488);\nvar ITERATOR = __webpack_require__(/*! ./_wks */ 86314)('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ 87234);\nmodule.exports = (__webpack_require__(/*! ./_core */ 25645).getIteratorMethod) = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ 61761:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/core.regexp.escape.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/benjamingr/RexExp.escape\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $re = __webpack_require__(/*! ./_replacer */ 74398)(/[\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n\n$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/core.regexp.escape.js?");

/***/ }),

/***/ 32000:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ 5216) });\n\n__webpack_require__(/*! ./_add-to-unscopables */ 17722)('copyWithin');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ 15745:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $every = __webpack_require__(/*! ./_array-methods */ 10050)(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 77717)([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ 48977:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ 46852) });\n\n__webpack_require__(/*! ./_add-to-unscopables */ 17722)('fill');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ 98837:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $filter = __webpack_require__(/*! ./_array-methods */ 10050)(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 77717)([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ 94899:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $find = __webpack_require__(/*! ./_array-methods */ 10050)(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ 17722)(KEY);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ 52310:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $find = __webpack_require__(/*! ./_array-methods */ 10050)(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ 17722)(KEY);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ 24336:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $forEach = __webpack_require__(/*! ./_array-methods */ 10050)(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ 77717)([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ 30522:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ 741);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar call = __webpack_require__(/*! ./_iter-call */ 28851);\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 86555);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar createProperty = __webpack_require__(/*! ./_create-property */ 92811);\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 69002);\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ 7462)(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ 23369:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ 79315)(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ 77717)($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ 20774:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ 4302) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ 56997:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 17722);\nvar step = __webpack_require__(/*! ./_iter-step */ 15436);\nvar Iterators = __webpack_require__(/*! ./_iterators */ 87234);\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ 42923)(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ 87842:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ 49797) != Object || !__webpack_require__(/*! ./_strict-method */ 77717)(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ 99564:
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ 77717)($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;\n    return -1;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ 19371:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $map = __webpack_require__(/*! ./_array-methods */ 10050)(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 77717)([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ 58295:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar createProperty = __webpack_require__(/*! ./_create-property */ 92811);\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 74253)(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of(/* ...args */) {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) createProperty(result, index, arguments[index++]);\n    result.length = aLen;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ 3750:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ 37628);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 77717)([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ 33057:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ 37628);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 77717)([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ 50110:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar html = __webpack_require__(/*! ./_html */ 40639);\nvar cof = __webpack_require__(/*! ./_cof */ 92032);\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 92337);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ 74253)(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) cloned[i] = klass == 'String'\n      ? this.charAt(start + i)\n      : this[start + i];\n    return cloned;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ 26773:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $some = __webpack_require__(/*! ./_array-methods */ 10050)(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 77717)([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ 20075:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ 77717)($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ 31842:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_set-species */ 2974)('Array');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ 81822:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ 91031:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ 53537);\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ 19977:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ 74253)(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ 41560:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ 86314)('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ 87728)(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ 870));\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ 46331:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ 77234)(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ 39730:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ 34398) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ 48377:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ 86314)('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ 99275).f)(FunctionProto, HAS_INSTANCE, { value: function (O) {\n  if (typeof this != 'function' || !isObject(O)) return false;\n  if (!isObject(this.prototype)) return O instanceof this;\n  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;\n  return false;\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ 6059:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var dP = (__webpack_require__(/*! ./_object-dp */ 99275).f);\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ 67057) && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ 88416:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ 9824);\nvar validate = __webpack_require__(/*! ./_validate-collection */ 1616);\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ 45795)(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ 76503:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar log1p = __webpack_require__(/*! ./_math-log1p */ 46206);\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  && Math.floor($acosh(Number.MAX_VALUE)) == 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  && $acosh(Infinity) == Infinity\n), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? Math.log(x) + Math.LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ 66786:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ 50932:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ 57526:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar sign = __webpack_require__(/*! ./_math-sign */ 61801);\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ 21591:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ 9073:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ 80347:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ 13086);\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ 30579:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ 34934) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ 4669:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ 67710:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 74253)(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ 45789:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ 33514:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ 46206) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ 99978:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ 58472:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ 61801) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ 86946:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ 13086);\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 74253)(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1\n      ? (expm1(x) - expm1(-x)) / 2\n      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ 35068:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ 13086);\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ 413:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ 11246:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar has = __webpack_require__(/*! ./_has */ 79181);\nvar cof = __webpack_require__(/*! ./_cof */ 92032);\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 40266);\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar gOPN = (__webpack_require__(/*! ./_object-gopn */ 20616).f);\nvar gOPD = (__webpack_require__(/*! ./_object-gopd */ 18693).f);\nvar dP = (__webpack_require__(/*! ./_object-dp */ 99275).f);\nvar $trim = (__webpack_require__(/*! ./_string-trim */ 29599).trim);\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ 42503)(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ 67057) ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ 77234)(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ 75972:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ 53403:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar _isFinite = (__webpack_require__(/*! ./_global */ 3816).isFinite);\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ 92516:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ 18367) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ 49371:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ 86479:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar isInteger = __webpack_require__(/*! ./_is-integer */ 18367);\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ 91736:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ 51889:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ 65177:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ 47743);\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ 81246:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ 55960);\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ 30726:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ 83365);\nvar repeat = __webpack_require__(/*! ./_string-repeat */ 68595);\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function (n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function (n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\nvar numToString = function () {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  } return s;\n};\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (\n  0.00008.toFixed(3) !== '0.000' ||\n  0.9.toFixed(0) !== '1' ||\n  1.255.toFixed(2) !== '1.25' ||\n  1000000000000000128.0.toFixed(0) !== '1000000000000000128'\n) || !__webpack_require__(/*! ./_fails */ 74253)(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    } return m;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ 1901:
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $fails = __webpack_require__(/*! ./_fails */ 74253);\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ 83365);\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ 75115:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 35345) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ 68132:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 42503) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ 37470:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 67057), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ 35588) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ 48388:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 67057), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ 99275).f) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ 89375:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar meta = (__webpack_require__(/*! ./_meta */ 84728).onFreeze);\n\n__webpack_require__(/*! ./_object-sap */ 33160)('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ 94882:
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ 18693).f);\n\n__webpack_require__(/*! ./_object-sap */ 33160)('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ 79622:
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ 33160)('getOwnPropertyNames', function () {\n  return (__webpack_require__(/*! ./_object-gopn-ext */ 39327).f);\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ 41520:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\n\n__webpack_require__(/*! ./_object-sap */ 33160)('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ 49892:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\n\n__webpack_require__(/*! ./_object-sap */ 33160)('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ 64157:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\n\n__webpack_require__(/*! ./_object-sap */ 33160)('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ 35095:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\n\n__webpack_require__(/*! ./_object-sap */ 33160)('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ 99176:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ 27195) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ 27476:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar $keys = __webpack_require__(/*! ./_object-keys */ 47184);\n\n__webpack_require__(/*! ./_object-sap */ 33160)('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ 84672:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar meta = (__webpack_require__(/*! ./_meta */ 84728).onFreeze);\n\n__webpack_require__(/*! ./_object-sap */ 33160)('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ 43533:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar meta = (__webpack_require__(/*! ./_meta */ 84728).onFreeze);\n\n__webpack_require__(/*! ./_object-sap */ 33160)('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ 68838:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ 27375).set) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ 96253:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ 41488);\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ 86314)('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ 77234)(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ 64299:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ 47743);\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ 71084:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ 55960);\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ 40851:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ 4461);\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar ctx = __webpack_require__(/*! ./_ctx */ 741);\nvar classof = __webpack_require__(/*! ./_classof */ 41488);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar anInstance = __webpack_require__(/*! ./_an-instance */ 83328);\nvar forOf = __webpack_require__(/*! ./_for-of */ 3531);\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 58364);\nvar task = (__webpack_require__(/*! ./_task */ 74193).set);\nvar microtask = __webpack_require__(/*! ./_microtask */ 14351)();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ 43499);\nvar perform = __webpack_require__(/*! ./_perform */ 10188);\nvar userAgent = __webpack_require__(/*! ./_user-agent */ 30575);\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ 50094);\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ 86314)('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ 24408)($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ 22943)($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ 2974)(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ 25645)[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ 7462)(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ 21572:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar rApply = ((__webpack_require__(/*! ./_global */ 3816).Reflect) || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ 74253)(function () {\n  rApply(function () { /* empty */ });\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ 82139:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar create = __webpack_require__(/*! ./_object-create */ 42503);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar bind = __webpack_require__(/*! ./_bind */ 34398);\nvar rConstruct = ((__webpack_require__(/*! ./_global */ 3816).Reflect) || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () { /* empty */ });\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ 10685:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ 99275);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 74253)(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ 85535:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar gOPD = (__webpack_require__(/*! ./_object-gopd */ 18693).f);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ 17347:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar Enumerate = function (iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0;                  // next index\n  var keys = this._k = [];      // keys\n  var key;\n  for (key in iterated) keys.push(key);\n};\n__webpack_require__(/*! ./_iter-create */ 49988)(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ 96633:
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ 18693);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ 68989:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar getProto = __webpack_require__(/*! ./_object-gpo */ 468);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ 83049:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ 18693);\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\nvar has = __webpack_require__(/*! ./_has */ 79181);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')\n    ? desc.value\n    : desc.get !== undefined\n      ? desc.get.call(receiver)\n      : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ 78270:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ 64510:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ 73984:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ 57643) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ 75769:
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ 96014:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar setProto = __webpack_require__(/*! ./_set-proto */ 27375);\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ 50055:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ 99275);\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ 18693);\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\nvar has = __webpack_require__(/*! ./_has */ 79181);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar createDesc = __webpack_require__(/*! ./_property-desc */ 90681);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ 83946:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ./_global */ 3816);\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 40266);\nvar dP = (__webpack_require__(/*! ./_object-dp */ 99275).f);\nvar gOPN = (__webpack_require__(/*! ./_object-gopn */ 20616).f);\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ 55364);\nvar $flags = __webpack_require__(/*! ./_flags */ 53218);\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ 67057) && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ 74253)(function () {\n  re2[__webpack_require__(/*! ./_wks */ 86314)('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p\n      : inheritIfRequired(CORRECT_NEW\n        ? new Base(piRE && !fiU ? p.source : p, f)\n        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)\n      , tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function (key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function () { return Base[key]; },\n      set: function (it) { Base[key] = it; }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ 77234)(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ 2974)('RegExp');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ 18269:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ 21165);\n__webpack_require__(/*! ./_export */ 42985)({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ 76774:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ 67057) && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ 99275).f)(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ 53218)\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ 21466:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ 76793);\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ 27787);\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ 28082)('match', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[MATCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative($match, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      if (!rx.global) return regExpExec(rx, S);\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ 59357:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ 76793);\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ 27787);\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ 28082)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = defined(this);\n      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return fn !== undefined\n        ? fn.call(searchValue, O, replaceValue)\n        : $replace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      var res = maybeCallNative($replace, regexp, this, replaceValue);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n        results.push(result);\n        if (!global) break;\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n    // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return $replace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ 76142:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar sameValue = __webpack_require__(/*! ./_same-value */ 27195);\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ 27787);\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ 28082)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[SEARCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative($search, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ 51876:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ 55364);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 58364);\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ 76793);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ 27787);\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ 21165);\nvar fails = __webpack_require__(/*! ./_fails */ 74253);\nvar $min = Math.min;\nvar $push = [].push;\nvar $SPLIT = 'split';\nvar LENGTH = 'length';\nvar LAST_INDEX = 'lastIndex';\nvar MAX_UINT32 = 0xffffffff;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ 28082)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return $split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy[LAST_INDEX];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);\n    };\n  } else {\n    internalSplit = $split;\n  }\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = defined(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ 66108:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ 76774);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar $flags = __webpack_require__(/*! ./_flags */ 53218);\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 67057);\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ 77234)(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ 74253)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ 98184:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ 9824);\nvar validate = __webpack_require__(/*! ./_validate-collection */ 1616);\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ 45795)(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ 40856:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n__webpack_require__(/*! ./_string-html */ 29395)('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ 80703:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n__webpack_require__(/*! ./_string-html */ 29395)('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ 91539:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n__webpack_require__(/*! ./_string-html */ 29395)('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ 5292:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n__webpack_require__(/*! ./_string-html */ 29395)('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ 29539:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $at = __webpack_require__(/*! ./_string-at */ 24496)(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ 96620:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar context = __webpack_require__(/*! ./_string-context */ 42094);\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 8852)(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith\n      ? $endsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ 45177:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n__webpack_require__(/*! ./_string-html */ 29395)('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ 73694:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n__webpack_require__(/*! ./_string-html */ 29395)('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ 37648:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n__webpack_require__(/*! ./_string-html */ 29395)('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ 50191:
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 92337);\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ 62850:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar context = __webpack_require__(/*! ./_string-context */ 42094);\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 8852)(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ 27795:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n__webpack_require__(/*! ./_string-html */ 29395)('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ 39115:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ 24496)(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ 42923)(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ 4531:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ 29395)('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ 98306:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ 10823:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ 68595)\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ 23605:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n__webpack_require__(/*! ./_string-html */ 29395)('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ 17732:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar context = __webpack_require__(/*! ./_string-context */ 42094);\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 8852)(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith\n      ? $startsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ 6780:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n__webpack_require__(/*! ./_string-html */ 29395)('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ 69937:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n__webpack_require__(/*! ./_string-html */ 29395)('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ 10511:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n__webpack_require__(/*! ./_string-html */ 29395)('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ 64564:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ 29599)('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ 95767:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar has = __webpack_require__(/*! ./_has */ 79181);\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 67057);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar redefine = __webpack_require__(/*! ./_redefine */ 77234);\nvar META = (__webpack_require__(/*! ./_meta */ 84728).KEY);\nvar $fails = __webpack_require__(/*! ./_fails */ 74253);\nvar shared = __webpack_require__(/*! ./_shared */ 3825);\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 22943);\nvar uid = __webpack_require__(/*! ./_uid */ 93953);\nvar wks = __webpack_require__(/*! ./_wks */ 86314);\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ 28787);\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ 36074);\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ 5541);\nvar isArray = __webpack_require__(/*! ./_is-array */ 4302);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\nvar createDesc = __webpack_require__(/*! ./_property-desc */ 90681);\nvar _create = __webpack_require__(/*! ./_object-create */ 42503);\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 39327);\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ 18693);\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ 64548);\nvar $DP = __webpack_require__(/*! ./_object-dp */ 99275);\nvar $keys = __webpack_require__(/*! ./_object-keys */ 47184);\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  (__webpack_require__(/*! ./_object-gopn */ 20616).f) = gOPNExt.f = $getOwnPropertyNames;\n  (__webpack_require__(/*! ./_object-pie */ 14682).f) = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 4461)) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 87728)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ 30142:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $typed = __webpack_require__(/*! ./_typed */ 89383);\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ 91125);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 92337);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar ArrayBuffer = (__webpack_require__(/*! ./_global */ 3816).ArrayBuffer);\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 58364);\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ 74253)(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    } return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ 2974)(ARRAY_BUFFER);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ 1786:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\n$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ 89383).ABV), {\n  DataView: (__webpack_require__(/*! ./_typed-buffer */ 91125).DataView)\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ 70162:
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ 78440)('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ 33834:
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ 78440)('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ 74821:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ 78440)('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ 81303:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ 78440)('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ 75368:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ 78440)('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ 79103:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ 78440)('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ 83318:
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ 78440)('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ 46964:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ 78440)('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ 62152:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_typed-array */ 78440)('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ 30147:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar each = __webpack_require__(/*! ./_array-methods */ 10050)(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ 77234);\nvar meta = __webpack_require__(/*! ./_meta */ 84728);\nvar assign = __webpack_require__(/*! ./_object-assign */ 35345);\nvar weak = __webpack_require__(/*! ./_collection-weak */ 23657);\nvar isObject = __webpack_require__(/*! ./_is-object */ 55286);\nvar validate = __webpack_require__(/*! ./_validate-collection */ 1616);\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ 1616);\nvar IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar InternalMap;\n\nvar wrapper = function (get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ 45795)(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (NATIVE_WEAK_MAP && IS_IE11) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n      // store all the rest on native weakmap\n      } return method.call(this, a, b);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ 59192:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar weak = __webpack_require__(/*! ./_collection-weak */ 23657);\nvar validate = __webpack_require__(/*! ./_validate-collection */ 1616);\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ 45795)(WEAK_SET, function (get) {\n  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ 1268:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ 13325);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ 16886);\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ 17722)('flatMap');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ 94692:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ 13325);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar toInteger = __webpack_require__(/*! ./_to-integer */ 81467);\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ 16886);\n\n$export($export.P, 'Array', {\n  flatten: function flatten(/* depthArg = 1 */) {\n    var depthArg = arguments[0];\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ 17722)('flatten');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.array.flatten.js?");

/***/ }),

/***/ 62773:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $includes = __webpack_require__(/*! ./_array-includes */ 79315)(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ 17722)('includes');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ 18267:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/es7.asap.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar microtask = __webpack_require__(/*! ./_microtask */ 14351)();\nvar process = (__webpack_require__(/*! ./_global */ 3816).process);\nvar isNode = __webpack_require__(/*! ./_cof */ 92032)(process) == 'process';\n\n$export($export.G, {\n  asap: function asap(fn) {\n    var domain = isNode && process.domain;\n    microtask(domain ? domain.bind(fn) : fn);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.asap.js?");

/***/ }),

/***/ 22559:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.error.is-error.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/ljharb/proposal-is-error\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar cof = __webpack_require__(/*! ./_cof */ 92032);\n\n$export($export.S, 'Error', {\n  isError: function isError(it) {\n    return cof(it) === 'Error';\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.error.is-error.js?");

/***/ }),

/***/ 95575:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.global.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ 3816) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.global.js?");

/***/ }),

/***/ 60525:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.from.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n__webpack_require__(/*! ./_set-collection-from */ 31024)('Map');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.map.from.js?");

/***/ }),

/***/ 98211:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.of.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n__webpack_require__(/*! ./_set-collection-of */ 94881)('Map');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.map.of.js?");

/***/ }),

/***/ 97698:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.to-json.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ 86132)('Map') });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.map.to-json.js?");

/***/ }),

/***/ 98865:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.clamp.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', {\n  clamp: function clamp(x, lower, upper) {\n    return Math.min(upper, Math.max(lower, x));\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.clamp.js?");

/***/ }),

/***/ 60368:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.deg-per-rad.js?");

/***/ }),

/***/ 26427:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.degrees.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar RAD_PER_DEG = 180 / Math.PI;\n\n$export($export.S, 'Math', {\n  degrees: function degrees(radians) {\n    return radians * RAD_PER_DEG;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.degrees.js?");

/***/ }),

/***/ 30286:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.fscale.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar scale = __webpack_require__(/*! ./_math-scale */ 68757);\nvar fround = __webpack_require__(/*! ./_math-fround */ 34934);\n\n$export($export.S, 'Math', {\n  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {\n    return fround(scale(x, inLow, inHigh, outLow, outHigh));\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.fscale.js?");

/***/ }),

/***/ 52816:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.iaddh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', {\n  iaddh: function iaddh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.iaddh.js?");

/***/ }),

/***/ 22082:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.imulh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', {\n  imulh: function imulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >> 16;\n    var v1 = $v >> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.imulh.js?");

/***/ }),

/***/ 35986:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.isubh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', {\n  isubh: function isubh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.isubh.js?");

/***/ }),

/***/ 76308:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.rad-per-deg.js?");

/***/ }),

/***/ 89221:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.radians.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar DEG_PER_RAD = Math.PI / 180;\n\n$export($export.S, 'Math', {\n  radians: function radians(degrees) {\n    return degrees * DEG_PER_RAD;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.radians.js?");

/***/ }),

/***/ 83570:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.scale.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ 68757) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.scale.js?");

/***/ }),

/***/ 3776:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.signbit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// http://jfbastien.github.io/papers/Math.signbit.html\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', { signbit: function signbit(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.signbit.js?");

/***/ }),

/***/ 37787:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.umulh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'Math', {\n  umulh: function umulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >>> 16;\n    var v1 = $v >>> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.math.umulh.js?");

/***/ }),

/***/ 48646:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ 99275);\n\n// B.2.2.2 Object.prototype.__defineGetter__(P, getter)\n__webpack_require__(/*! ./_descriptors */ 67057) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 91670), 'Object', {\n  __defineGetter__: function __defineGetter__(P, getter) {\n    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.object.define-getter.js?");

/***/ }),

/***/ 22658:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ 99275);\n\n// B.2.2.3 Object.prototype.__defineSetter__(P, setter)\n__webpack_require__(/*! ./_descriptors */ 67057) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 91670), 'Object', {\n  __defineSetter__: function __defineSetter__(P, setter) {\n    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.object.define-setter.js?");

/***/ }),

/***/ 83276:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $entries = __webpack_require__(/*! ./_object-to-array */ 51131)(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ 98351:
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ 57643);\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ 22110);\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ 18693);\nvar createProperty = __webpack_require__(/*! ./_create-property */ 92811);\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ 16917:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ 18693).f);\n\n// B.2.2.4 Object.prototype.__lookupGetter__(P)\n__webpack_require__(/*! ./_descriptors */ 67057) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 91670), 'Object', {\n  __lookupGetter__: function __lookupGetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.get;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.object.lookup-getter.js?");

/***/ }),

/***/ 30372:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar toObject = __webpack_require__(/*! ./_to-object */ 20508);\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ 21689);\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ 18693).f);\n\n// B.2.2.5 Object.prototype.__lookupSetter__(P)\n__webpack_require__(/*! ./_descriptors */ 67057) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 91670), 'Object', {\n  __lookupSetter__: function __lookupSetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.set;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.object.lookup-setter.js?");

/***/ }),

/***/ 96409:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $values = __webpack_require__(/*! ./_object-to-array */ 51131)(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ 86534:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.observable.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/zenparsing/es-observable\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar core = __webpack_require__(/*! ./_core */ 25645);\nvar microtask = __webpack_require__(/*! ./_microtask */ 14351)();\nvar OBSERVABLE = __webpack_require__(/*! ./_wks */ 86314)('observable');\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar anInstance = __webpack_require__(/*! ./_an-instance */ 83328);\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ 24408);\nvar hide = __webpack_require__(/*! ./_hide */ 87728);\nvar forOf = __webpack_require__(/*! ./_for-of */ 3531);\nvar RETURN = forOf.RETURN;\n\nvar getMethod = function (fn) {\n  return fn == null ? undefined : aFunction(fn);\n};\n\nvar cleanupSubscription = function (subscription) {\n  var cleanup = subscription._c;\n  if (cleanup) {\n    subscription._c = undefined;\n    cleanup();\n  }\n};\n\nvar subscriptionClosed = function (subscription) {\n  return subscription._o === undefined;\n};\n\nvar closeSubscription = function (subscription) {\n  if (!subscriptionClosed(subscription)) {\n    subscription._o = undefined;\n    cleanupSubscription(subscription);\n  }\n};\n\nvar Subscription = function (observer, subscriber) {\n  anObject(observer);\n  this._c = undefined;\n  this._o = observer;\n  observer = new SubscriptionObserver(this);\n  try {\n    var cleanup = subscriber(observer);\n    var subscription = cleanup;\n    if (cleanup != null) {\n      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };\n      else aFunction(cleanup);\n      this._c = cleanup;\n    }\n  } catch (e) {\n    observer.error(e);\n    return;\n  } if (subscriptionClosed(this)) cleanupSubscription(this);\n};\n\nSubscription.prototype = redefineAll({}, {\n  unsubscribe: function unsubscribe() { closeSubscription(this); }\n});\n\nvar SubscriptionObserver = function (subscription) {\n  this._s = subscription;\n};\n\nSubscriptionObserver.prototype = redefineAll({}, {\n  next: function next(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      try {\n        var m = getMethod(observer.next);\n        if (m) return m.call(observer, value);\n      } catch (e) {\n        try {\n          closeSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }\n    }\n  },\n  error: function error(value) {\n    var subscription = this._s;\n    if (subscriptionClosed(subscription)) throw value;\n    var observer = subscription._o;\n    subscription._o = undefined;\n    try {\n      var m = getMethod(observer.error);\n      if (!m) throw value;\n      value = m.call(observer, value);\n    } catch (e) {\n      try {\n        cleanupSubscription(subscription);\n      } finally {\n        throw e;\n      }\n    } cleanupSubscription(subscription);\n    return value;\n  },\n  complete: function complete(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      subscription._o = undefined;\n      try {\n        var m = getMethod(observer.complete);\n        value = m ? m.call(observer, value) : undefined;\n      } catch (e) {\n        try {\n          cleanupSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      } cleanupSubscription(subscription);\n      return value;\n    }\n  }\n});\n\nvar $Observable = function Observable(subscriber) {\n  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);\n};\n\nredefineAll($Observable.prototype, {\n  subscribe: function subscribe(observer) {\n    return new Subscription(observer, this._f);\n  },\n  forEach: function forEach(fn) {\n    var that = this;\n    return new (core.Promise || global.Promise)(function (resolve, reject) {\n      aFunction(fn);\n      var subscription = that.subscribe({\n        next: function (value) {\n          try {\n            return fn(value);\n          } catch (e) {\n            reject(e);\n            subscription.unsubscribe();\n          }\n        },\n        error: reject,\n        complete: resolve\n      });\n    });\n  }\n});\n\nredefineAll($Observable, {\n  from: function from(x) {\n    var C = typeof this === 'function' ? this : $Observable;\n    var method = getMethod(anObject(x)[OBSERVABLE]);\n    if (method) {\n      var observable = anObject(method.call(x));\n      return observable.constructor === C ? observable : new C(function (observer) {\n        return observable.subscribe(observer);\n      });\n    }\n    return new C(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          try {\n            if (forOf(x, false, function (it) {\n              observer.next(it);\n              if (done) return RETURN;\n            }) === RETURN) return;\n          } catch (e) {\n            if (done) throw e;\n            observer.error(e);\n            return;\n          } observer.complete();\n        }\n      });\n      return function () { done = true; };\n    });\n  },\n  of: function of() {\n    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];\n    return new (typeof this === 'function' ? this : $Observable)(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          for (var j = 0; j < items.length; ++j) {\n            observer.next(items[j]);\n            if (done) return;\n          } observer.complete();\n        }\n      });\n      return function () { done = true; };\n    });\n  }\n});\n\nhide($Observable.prototype, OBSERVABLE, function () { return this; });\n\n$export($export.G, { Observable: $Observable });\n\n__webpack_require__(/*! ./_set-species */ 2974)('Observable');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.observable.js?");

/***/ }),

/***/ 9865:
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar core = __webpack_require__(/*! ./_core */ 25645);\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 58364);\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ 50094);\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ 31898:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ 43499);\nvar perform = __webpack_require__(/*! ./_perform */ 10188);\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.promise.try.js?");

/***/ }),

/***/ 53364:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ 50133);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar toMetaKey = metadata.key;\nvar ordinaryDefineOwnMetadata = metadata.set;\n\nmetadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {\n  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.reflect.define-metadata.js?");

/***/ }),

/***/ 51432:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ 50133);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar toMetaKey = metadata.key;\nvar getOrCreateMetadataMap = metadata.map;\nvar store = metadata.store;\n\nmetadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {\n  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);\n  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);\n  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;\n  if (metadataMap.size) return true;\n  var targetMetadata = store.get(target);\n  targetMetadata['delete'](targetKey);\n  return !!targetMetadata.size || store['delete'](target);\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.reflect.delete-metadata.js?");

/***/ }),

/***/ 84416:
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var Set = __webpack_require__(/*! ./es6.set */ 98184);\nvar from = __webpack_require__(/*! ./_array-from-iterable */ 9490);\nvar metadata = __webpack_require__(/*! ./_metadata */ 50133);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nvar ordinaryMetadataKeys = function (O, P) {\n  var oKeys = ordinaryOwnMetadataKeys(O, P);\n  var parent = getPrototypeOf(O);\n  if (parent === null) return oKeys;\n  var pKeys = ordinaryMetadataKeys(parent, P);\n  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;\n};\n\nmetadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {\n  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js?");

/***/ }),

/***/ 26562:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ 50133);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\nvar ordinaryHasOwnMetadata = metadata.has;\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nvar ordinaryGetMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;\n};\n\nmetadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.reflect.get-metadata.js?");

/***/ }),

/***/ 32213:
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ 50133);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {\n  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js?");

/***/ }),

/***/ 98681:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ 50133);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.reflect.get-own-metadata.js?");

/***/ }),

/***/ 63471:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ 50133);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 468);\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nvar ordinaryHasMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return true;\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;\n};\n\nmetadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.reflect.has-metadata.js?");

/***/ }),

/***/ 4329:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var metadata = __webpack_require__(/*! ./_metadata */ 50133);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.reflect.has-own-metadata.js?");

/***/ }),

/***/ 25159:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $metadata = __webpack_require__(/*! ./_metadata */ 50133);\nvar anObject = __webpack_require__(/*! ./_an-object */ 27007);\nvar aFunction = __webpack_require__(/*! ./_a-function */ 24963);\nvar toMetaKey = $metadata.key;\nvar ordinaryDefineOwnMetadata = $metadata.set;\n\n$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {\n  return function decorator(target, targetKey) {\n    ordinaryDefineOwnMetadata(\n      metadataKey, metadataValue,\n      (targetKey !== undefined ? anObject : aFunction)(target),\n      toMetaKey(targetKey)\n    );\n  };\n} });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.reflect.metadata.js?");

/***/ }),

/***/ 99467:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.from.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from\n__webpack_require__(/*! ./_set-collection-from */ 31024)('Set');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.set.from.js?");

/***/ }),

/***/ 50579:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.of.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of\n__webpack_require__(/*! ./_set-collection-of */ 94881)('Set');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.set.of.js?");

/***/ }),

/***/ 48739:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.to-json.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ 86132)('Set') });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.set.to-json.js?");

/***/ }),

/***/ 17220:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.at.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/mathiasbynens/String.prototype.at\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $at = __webpack_require__(/*! ./_string-at */ 24496)(true);\nvar $fails = __webpack_require__(/*! ./_fails */ 74253);\n\nvar FORCED = $fails(function () {\n  return '𠮷'.at(0) !== '𠮷';\n});\n\n$export($export.P + $export.F * FORCED, 'String', {\n  at: function at(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.string.at.js?");

/***/ }),

/***/ 74208:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.match-all.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://tc39.github.io/String.prototype.matchAll/\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar defined = __webpack_require__(/*! ./_defined */ 91355);\nvar toLength = __webpack_require__(/*! ./_to-length */ 10875);\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ 55364);\nvar getFlags = __webpack_require__(/*! ./_flags */ 53218);\nvar RegExpProto = RegExp.prototype;\n\nvar $RegExpStringIterator = function (regexp, string) {\n  this._r = regexp;\n  this._s = string;\n};\n\n__webpack_require__(/*! ./_iter-create */ 49988)($RegExpStringIterator, 'RegExp String', function next() {\n  var match = this._r.exec(this._s);\n  return { value: match, done: match === null };\n});\n\n$export($export.P, 'String', {\n  matchAll: function matchAll(regexp) {\n    defined(this);\n    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');\n    var S = String(this);\n    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);\n    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);\n    rx.lastIndex = toLength(regexp.lastIndex);\n    return new $RegExpStringIterator(rx, S);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.string.match-all.js?");

/***/ }),

/***/ 92770:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $pad = __webpack_require__(/*! ./_string-pad */ 75442);\nvar userAgent = __webpack_require__(/*! ./_user-agent */ 30575);\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ 41784:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar $pad = __webpack_require__(/*! ./_string-pad */ 75442);\nvar userAgent = __webpack_require__(/*! ./_user-agent */ 30575);\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ 65869:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ 29599)('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ 94325:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ 29599)('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ 79665:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_wks-define */ 36074)('asyncIterator');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ 59593:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./_wks-define */ 36074)('observable');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.symbol.observable.js?");

/***/ }),

/***/ 88967:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.system.global.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ 42985);\n\n$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ 3816) });\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.system.global.js?");

/***/ }),

/***/ 44188:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from\n__webpack_require__(/*! ./_set-collection-from */ 31024)('WeakMap');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.weak-map.from.js?");

/***/ }),

/***/ 44208:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of\n__webpack_require__(/*! ./_set-collection-of */ 94881)('WeakMap');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.weak-map.of.js?");

/***/ }),

/***/ 73495:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from\n__webpack_require__(/*! ./_set-collection-from */ 31024)('WeakSet');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.weak-set.from.js?");

/***/ }),

/***/ 39550:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of\n__webpack_require__(/*! ./_set-collection-of */ 94881)('WeakSet');\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/es7.weak-set.of.js?");

/***/ }),

/***/ 91181:
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ 56997);\nvar getKeys = __webpack_require__(/*! ./_object-keys */ 47184);\nvar redefine = __webpack_require__(/*! ./_redefine */ 77234);\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar hide = __webpack_require__(/*! ./_hide */ 87728);\nvar Iterators = __webpack_require__(/*! ./_iterators */ 87234);\nvar wks = __webpack_require__(/*! ./_wks */ 86314);\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ 84633:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $export = __webpack_require__(/*! ./_export */ 42985);\nvar $task = __webpack_require__(/*! ./_task */ 74193);\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ 32564:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ 3816);\nvar $export = __webpack_require__(/*! ./_export */ 42985);\nvar userAgent = __webpack_require__(/*! ./_user-agent */ 30575);\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar wrap = function (set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ 81934:
/*!**************************************!*\
  !*** ./node_modules/core-js/shim.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./modules/es6.symbol */ 95767);\n__webpack_require__(/*! ./modules/es6.object.create */ 68132);\n__webpack_require__(/*! ./modules/es6.object.define-property */ 48388);\n__webpack_require__(/*! ./modules/es6.object.define-properties */ 37470);\n__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ 94882);\n__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ 41520);\n__webpack_require__(/*! ./modules/es6.object.keys */ 27476);\n__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ 79622);\n__webpack_require__(/*! ./modules/es6.object.freeze */ 89375);\n__webpack_require__(/*! ./modules/es6.object.seal */ 43533);\n__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ 84672);\n__webpack_require__(/*! ./modules/es6.object.is-frozen */ 64157);\n__webpack_require__(/*! ./modules/es6.object.is-sealed */ 35095);\n__webpack_require__(/*! ./modules/es6.object.is-extensible */ 49892);\n__webpack_require__(/*! ./modules/es6.object.assign */ 75115);\n__webpack_require__(/*! ./modules/es6.object.is */ 99176);\n__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ 68838);\n__webpack_require__(/*! ./modules/es6.object.to-string */ 96253);\n__webpack_require__(/*! ./modules/es6.function.bind */ 39730);\n__webpack_require__(/*! ./modules/es6.function.name */ 6059);\n__webpack_require__(/*! ./modules/es6.function.has-instance */ 48377);\n__webpack_require__(/*! ./modules/es6.parse-int */ 71084);\n__webpack_require__(/*! ./modules/es6.parse-float */ 64299);\n__webpack_require__(/*! ./modules/es6.number.constructor */ 11246);\n__webpack_require__(/*! ./modules/es6.number.to-fixed */ 30726);\n__webpack_require__(/*! ./modules/es6.number.to-precision */ 1901);\n__webpack_require__(/*! ./modules/es6.number.epsilon */ 75972);\n__webpack_require__(/*! ./modules/es6.number.is-finite */ 53403);\n__webpack_require__(/*! ./modules/es6.number.is-integer */ 92516);\n__webpack_require__(/*! ./modules/es6.number.is-nan */ 49371);\n__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ 86479);\n__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ 91736);\n__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ 51889);\n__webpack_require__(/*! ./modules/es6.number.parse-float */ 65177);\n__webpack_require__(/*! ./modules/es6.number.parse-int */ 81246);\n__webpack_require__(/*! ./modules/es6.math.acosh */ 76503);\n__webpack_require__(/*! ./modules/es6.math.asinh */ 66786);\n__webpack_require__(/*! ./modules/es6.math.atanh */ 50932);\n__webpack_require__(/*! ./modules/es6.math.cbrt */ 57526);\n__webpack_require__(/*! ./modules/es6.math.clz32 */ 21591);\n__webpack_require__(/*! ./modules/es6.math.cosh */ 9073);\n__webpack_require__(/*! ./modules/es6.math.expm1 */ 80347);\n__webpack_require__(/*! ./modules/es6.math.fround */ 30579);\n__webpack_require__(/*! ./modules/es6.math.hypot */ 4669);\n__webpack_require__(/*! ./modules/es6.math.imul */ 67710);\n__webpack_require__(/*! ./modules/es6.math.log10 */ 45789);\n__webpack_require__(/*! ./modules/es6.math.log1p */ 33514);\n__webpack_require__(/*! ./modules/es6.math.log2 */ 99978);\n__webpack_require__(/*! ./modules/es6.math.sign */ 58472);\n__webpack_require__(/*! ./modules/es6.math.sinh */ 86946);\n__webpack_require__(/*! ./modules/es6.math.tanh */ 35068);\n__webpack_require__(/*! ./modules/es6.math.trunc */ 413);\n__webpack_require__(/*! ./modules/es6.string.from-code-point */ 50191);\n__webpack_require__(/*! ./modules/es6.string.raw */ 98306);\n__webpack_require__(/*! ./modules/es6.string.trim */ 64564);\n__webpack_require__(/*! ./modules/es6.string.iterator */ 39115);\n__webpack_require__(/*! ./modules/es6.string.code-point-at */ 29539);\n__webpack_require__(/*! ./modules/es6.string.ends-with */ 96620);\n__webpack_require__(/*! ./modules/es6.string.includes */ 62850);\n__webpack_require__(/*! ./modules/es6.string.repeat */ 10823);\n__webpack_require__(/*! ./modules/es6.string.starts-with */ 17732);\n__webpack_require__(/*! ./modules/es6.string.anchor */ 40856);\n__webpack_require__(/*! ./modules/es6.string.big */ 80703);\n__webpack_require__(/*! ./modules/es6.string.blink */ 91539);\n__webpack_require__(/*! ./modules/es6.string.bold */ 5292);\n__webpack_require__(/*! ./modules/es6.string.fixed */ 45177);\n__webpack_require__(/*! ./modules/es6.string.fontcolor */ 73694);\n__webpack_require__(/*! ./modules/es6.string.fontsize */ 37648);\n__webpack_require__(/*! ./modules/es6.string.italics */ 27795);\n__webpack_require__(/*! ./modules/es6.string.link */ 4531);\n__webpack_require__(/*! ./modules/es6.string.small */ 23605);\n__webpack_require__(/*! ./modules/es6.string.strike */ 6780);\n__webpack_require__(/*! ./modules/es6.string.sub */ 69937);\n__webpack_require__(/*! ./modules/es6.string.sup */ 10511);\n__webpack_require__(/*! ./modules/es6.date.now */ 81822);\n__webpack_require__(/*! ./modules/es6.date.to-json */ 19977);\n__webpack_require__(/*! ./modules/es6.date.to-iso-string */ 91031);\n__webpack_require__(/*! ./modules/es6.date.to-string */ 46331);\n__webpack_require__(/*! ./modules/es6.date.to-primitive */ 41560);\n__webpack_require__(/*! ./modules/es6.array.is-array */ 20774);\n__webpack_require__(/*! ./modules/es6.array.from */ 30522);\n__webpack_require__(/*! ./modules/es6.array.of */ 58295);\n__webpack_require__(/*! ./modules/es6.array.join */ 87842);\n__webpack_require__(/*! ./modules/es6.array.slice */ 50110);\n__webpack_require__(/*! ./modules/es6.array.sort */ 20075);\n__webpack_require__(/*! ./modules/es6.array.for-each */ 24336);\n__webpack_require__(/*! ./modules/es6.array.map */ 19371);\n__webpack_require__(/*! ./modules/es6.array.filter */ 98837);\n__webpack_require__(/*! ./modules/es6.array.some */ 26773);\n__webpack_require__(/*! ./modules/es6.array.every */ 15745);\n__webpack_require__(/*! ./modules/es6.array.reduce */ 33057);\n__webpack_require__(/*! ./modules/es6.array.reduce-right */ 3750);\n__webpack_require__(/*! ./modules/es6.array.index-of */ 23369);\n__webpack_require__(/*! ./modules/es6.array.last-index-of */ 99564);\n__webpack_require__(/*! ./modules/es6.array.copy-within */ 32000);\n__webpack_require__(/*! ./modules/es6.array.fill */ 48977);\n__webpack_require__(/*! ./modules/es6.array.find */ 52310);\n__webpack_require__(/*! ./modules/es6.array.find-index */ 94899);\n__webpack_require__(/*! ./modules/es6.array.species */ 31842);\n__webpack_require__(/*! ./modules/es6.array.iterator */ 56997);\n__webpack_require__(/*! ./modules/es6.regexp.constructor */ 83946);\n__webpack_require__(/*! ./modules/es6.regexp.exec */ 18269);\n__webpack_require__(/*! ./modules/es6.regexp.to-string */ 66108);\n__webpack_require__(/*! ./modules/es6.regexp.flags */ 76774);\n__webpack_require__(/*! ./modules/es6.regexp.match */ 21466);\n__webpack_require__(/*! ./modules/es6.regexp.replace */ 59357);\n__webpack_require__(/*! ./modules/es6.regexp.search */ 76142);\n__webpack_require__(/*! ./modules/es6.regexp.split */ 51876);\n__webpack_require__(/*! ./modules/es6.promise */ 40851);\n__webpack_require__(/*! ./modules/es6.map */ 88416);\n__webpack_require__(/*! ./modules/es6.set */ 98184);\n__webpack_require__(/*! ./modules/es6.weak-map */ 30147);\n__webpack_require__(/*! ./modules/es6.weak-set */ 59192);\n__webpack_require__(/*! ./modules/es6.typed.array-buffer */ 30142);\n__webpack_require__(/*! ./modules/es6.typed.data-view */ 1786);\n__webpack_require__(/*! ./modules/es6.typed.int8-array */ 75368);\n__webpack_require__(/*! ./modules/es6.typed.uint8-array */ 46964);\n__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ 62152);\n__webpack_require__(/*! ./modules/es6.typed.int16-array */ 74821);\n__webpack_require__(/*! ./modules/es6.typed.uint16-array */ 79103);\n__webpack_require__(/*! ./modules/es6.typed.int32-array */ 81303);\n__webpack_require__(/*! ./modules/es6.typed.uint32-array */ 83318);\n__webpack_require__(/*! ./modules/es6.typed.float32-array */ 70162);\n__webpack_require__(/*! ./modules/es6.typed.float64-array */ 33834);\n__webpack_require__(/*! ./modules/es6.reflect.apply */ 21572);\n__webpack_require__(/*! ./modules/es6.reflect.construct */ 82139);\n__webpack_require__(/*! ./modules/es6.reflect.define-property */ 10685);\n__webpack_require__(/*! ./modules/es6.reflect.delete-property */ 85535);\n__webpack_require__(/*! ./modules/es6.reflect.enumerate */ 17347);\n__webpack_require__(/*! ./modules/es6.reflect.get */ 83049);\n__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ 96633);\n__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ 68989);\n__webpack_require__(/*! ./modules/es6.reflect.has */ 78270);\n__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ 64510);\n__webpack_require__(/*! ./modules/es6.reflect.own-keys */ 73984);\n__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ 75769);\n__webpack_require__(/*! ./modules/es6.reflect.set */ 50055);\n__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ 96014);\n__webpack_require__(/*! ./modules/es7.array.includes */ 62773);\n__webpack_require__(/*! ./modules/es7.array.flat-map */ 1268);\n__webpack_require__(/*! ./modules/es7.array.flatten */ 94692);\n__webpack_require__(/*! ./modules/es7.string.at */ 17220);\n__webpack_require__(/*! ./modules/es7.string.pad-start */ 41784);\n__webpack_require__(/*! ./modules/es7.string.pad-end */ 92770);\n__webpack_require__(/*! ./modules/es7.string.trim-left */ 65869);\n__webpack_require__(/*! ./modules/es7.string.trim-right */ 94325);\n__webpack_require__(/*! ./modules/es7.string.match-all */ 74208);\n__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ 79665);\n__webpack_require__(/*! ./modules/es7.symbol.observable */ 59593);\n__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ 98351);\n__webpack_require__(/*! ./modules/es7.object.values */ 96409);\n__webpack_require__(/*! ./modules/es7.object.entries */ 83276);\n__webpack_require__(/*! ./modules/es7.object.define-getter */ 48646);\n__webpack_require__(/*! ./modules/es7.object.define-setter */ 22658);\n__webpack_require__(/*! ./modules/es7.object.lookup-getter */ 16917);\n__webpack_require__(/*! ./modules/es7.object.lookup-setter */ 30372);\n__webpack_require__(/*! ./modules/es7.map.to-json */ 97698);\n__webpack_require__(/*! ./modules/es7.set.to-json */ 48739);\n__webpack_require__(/*! ./modules/es7.map.of */ 98211);\n__webpack_require__(/*! ./modules/es7.set.of */ 50579);\n__webpack_require__(/*! ./modules/es7.weak-map.of */ 44208);\n__webpack_require__(/*! ./modules/es7.weak-set.of */ 39550);\n__webpack_require__(/*! ./modules/es7.map.from */ 60525);\n__webpack_require__(/*! ./modules/es7.set.from */ 99467);\n__webpack_require__(/*! ./modules/es7.weak-map.from */ 44188);\n__webpack_require__(/*! ./modules/es7.weak-set.from */ 73495);\n__webpack_require__(/*! ./modules/es7.global */ 95575);\n__webpack_require__(/*! ./modules/es7.system.global */ 88967);\n__webpack_require__(/*! ./modules/es7.error.is-error */ 22559);\n__webpack_require__(/*! ./modules/es7.math.clamp */ 98865);\n__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ 60368);\n__webpack_require__(/*! ./modules/es7.math.degrees */ 26427);\n__webpack_require__(/*! ./modules/es7.math.fscale */ 30286);\n__webpack_require__(/*! ./modules/es7.math.iaddh */ 52816);\n__webpack_require__(/*! ./modules/es7.math.isubh */ 35986);\n__webpack_require__(/*! ./modules/es7.math.imulh */ 22082);\n__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ 76308);\n__webpack_require__(/*! ./modules/es7.math.radians */ 89221);\n__webpack_require__(/*! ./modules/es7.math.scale */ 83570);\n__webpack_require__(/*! ./modules/es7.math.umulh */ 37787);\n__webpack_require__(/*! ./modules/es7.math.signbit */ 3776);\n__webpack_require__(/*! ./modules/es7.promise.finally */ 9865);\n__webpack_require__(/*! ./modules/es7.promise.try */ 31898);\n__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ 53364);\n__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ 51432);\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ 26562);\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ 84416);\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ 98681);\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ 32213);\n__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ 63471);\n__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ 4329);\n__webpack_require__(/*! ./modules/es7.reflect.metadata */ 25159);\n__webpack_require__(/*! ./modules/es7.asap */ 18267);\n__webpack_require__(/*! ./modules/es7.observable */ 86534);\n__webpack_require__(/*! ./modules/web.timers */ 32564);\n__webpack_require__(/*! ./modules/web.immediate */ 84633);\n__webpack_require__(/*! ./modules/web.dom.iterable */ 91181);\nmodule.exports = __webpack_require__(/*! ./modules/_core */ 25645);\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/core-js/shim.js?");

/***/ }),

/***/ 19684:
/*!********************************************************!*\
  !*** ./node_modules/js-combinatorics/combinatorics.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseN\": () => (/* binding */ BaseN),\n/* harmony export */   \"CartesianProduct\": () => (/* binding */ CartesianProduct),\n/* harmony export */   \"Combination\": () => (/* binding */ Combination),\n/* harmony export */   \"Permutation\": () => (/* binding */ Permutation),\n/* harmony export */   \"PowerSet\": () => (/* binding */ PowerSet),\n/* harmony export */   \"combinadic\": () => (/* binding */ combinadic),\n/* harmony export */   \"combination\": () => (/* binding */ combination),\n/* harmony export */   \"factoradic\": () => (/* binding */ factoradic),\n/* harmony export */   \"factorial\": () => (/* binding */ factorial),\n/* harmony export */   \"permutation\": () => (/* binding */ permutation),\n/* harmony export */   \"randomInteger\": () => (/* binding */ randomInteger),\n/* harmony export */   \"version\": () => (/* binding */ version)\n/* harmony export */ });\n/**\n * combinatorics.js\n *\n *  Licensed under the MIT license.\n *  http://www.opensource.org/licenses/mit-license.php\n *\n *  @author: Dan Kogai <dankogai+github@gmail.com>\n *\n *  References:\n *  @link: http://www.ruby-doc.org/core-2.0/Array.html#method-i-combination\n *  @link: http://www.ruby-doc.org/core-2.0/Array.html#method-i-permutation\n *  @link: http://en.wikipedia.org/wiki/Factorial_number_system\n *  @link: https://en.wikipedia.org/wiki/Combinatorial_number_system\n */\nconst version = '2.1.1';\n/**\n * calculates `P(n, k)`.\n *\n * @link https://en.wikipedia.org/wiki/Permutation\n */\nfunction permutation(n, k) {\n    if (n < 0)\n        throw new RangeError(`${n} is out of range`);\n    if (k < 0)\n        throw new RangeError(`${k} is out of range`);\n    if (0 == k)\n        return 1n;\n    if (n < k)\n        return 0n;\n    let [bn, bk, bp] = [BigInt(n), BigInt(k), 1n];\n    while (bk--)\n        bp *= bn--;\n    return bp;\n}\n/**\n * calculates `C(n, k)`.\n *\n * @link https://en.wikipedia.org/wiki/Combination\n */\nfunction combination(n, k) {\n    if (0 == k)\n        return 1n;\n    if (n == k)\n        return 1n;\n    if (n < k)\n        return 0n;\n    return permutation(n, k) / permutation(k, k);\n}\n/**\n * calculates `n!` === `P(n, n)`.\n *\n * @link https://en.wikipedia.org/wiki/Factorial\n */\nfunction factorial(n) {\n    return permutation(n, n);\n}\n/**\n * returns the factoradic representation of `n`, least significant order.\n *\n * @link https://en.wikipedia.org/wiki/Factorial_number_system\n * @param {number} l the number of digits\n */\nfunction factoradic(n, l = 0) {\n    if (n < 0)\n        throw new RangeError(`${n} is out of range`);\n    let [bn, bf] = [BigInt(n), 1n];\n    if (!l) {\n        for (l = 1; bf < bn; bf *= BigInt(++l))\n            ;\n        if (bn < bf)\n            bf /= BigInt(l--);\n    }\n    else {\n        bf = BigInt(factorial(l));\n    }\n    let digits = [0];\n    for (; l; bf /= BigInt(l--)) {\n        digits[l] = Number(bn / bf);\n        bn %= bf;\n    }\n    return digits;\n}\n/**\n * `combinadic(n, k)` returns a function\n * that takes `m` as an argument and\n * returns the combinadics representation of `m` for `n C k`.\n *\n * @link https://en.wikipedia.org/wiki/Combinatorial_number_system\n */\nfunction combinadic(n, k) {\n    const count = combination(n, k);\n    const [bn, bk] = [BigInt(n), BigInt(k)];\n    return (m) => {\n        if (m < 0 || count <= m)\n            throw new RangeError(`${m} is out of range`);\n        let digits = [];\n        let [ba, bb] = [bn, bk];\n        let x = BigInt(count) - 1n - BigInt(m);\n        for (let i = 0; i < k; i++) {\n            ba--;\n            while (x < combination(ba, bb))\n                ba--;\n            digits.push(Number(bn - 1n - ba));\n            x -= combination(ba, bb);\n            bb--;\n        }\n        return digits;\n    };\n}\n/**\n *\n */\nconst _crypto = typeof crypto !== 'undefined' ? crypto : {};\nconst _randomBytes = typeof _crypto['randomBytes'] === 'function'\n    ? (len) => Uint8Array.from(_crypto['randomBytes'](len))\n    : typeof _crypto['getRandomValues'] === 'function'\n        ? (len) => _crypto['getRandomValues'](new Uint8Array(len))\n        : (len) => Uint8Array.from(Array(len), () => Math.random() * 256);\n/**\n * returns random integer `n` where `min` <= `n` < `max`:\n *\n * if the argument is `BigInt` the result is also `BigInt`.\n *\n * @param {anyint} min\n * @param {anyint} max\n */\nfunction randomInteger(min = 0, max = Math.pow(2, 53)) {\n    let ctor = min.constructor;\n    if (arguments.length === 0) {\n        return Math.floor(Math.random() * ctor(max));\n    }\n    if (arguments.length == 1) {\n        [min, max] = [ctor(0), min];\n    }\n    if (typeof min == 'number') { // number\n        [min, max] = [Math.ceil(Number(min)), Math.ceil(Number(max))];\n        return Math.floor(Math.random() * (max - min)) + min;\n    }\n    const mag = ctor(max) - ctor(min);\n    const len = mag.toString(16).length;\n    const u8s = _randomBytes(len);\n    const rnd = u8s.reduce((a, v) => ((a << ctor(8)) + ctor(v)), ctor(0));\n    return ((ctor(rnd) * mag) >> ctor(len * 8)) + ctor(min);\n}\n;\n/**\n * Base Class of `js-combinatorics`\n */\nclass _CBase {\n    /**\n     * does `new`\n     * @param args\n     */\n    static of(...args) {\n        return new (Function.prototype.bind.apply(this, [null].concat(args)));\n    }\n    /**\n     * Same as `of` but takes a single array `arg`\n     *\n     * cf. https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible\n     */\n    static from(arg) {\n        return new (Function.prototype.bind.apply(this, [null].concat(arg)));\n    }\n    /**\n     * Common iterator\n     */\n    [Symbol.iterator]() {\n        return function* (it, len) {\n            for (let i = 0n; i < len; i++)\n                yield it.at(i);\n        }(this, this.length);\n    }\n    /**\n     * returns `[...this]`.\n     */\n    toArray() {\n        return [...this];\n    }\n    /**\n     * @deprecated\n     * tells wether you need `BigInt` to access all elements.\n     */\n    get isBig() {\n        return Number.MAX_SAFE_INTEGER < this.length;\n    }\n    /**\n     * @deprecated\n     * tells wether it is safe to work on this instance.\n     *\n     * * always `true` unless your platform does not support `BigInt`.\n     * * if not, `true` iff `.isBig` is `false`.\n     */\n    get isSafe() {\n        return typeof BigInt !== 'undefined' || !this.isBig;\n    }\n    /**\n    * check n for nth\n    */\n    _check(n) {\n        if (n < 0) {\n            if (this.length < -n)\n                throw new RangeError(`${n} is out of range`);\n            return BigInt(this.length) + BigInt(n);\n        }\n        if (this.length <= n)\n            throw new RangeError(`${n} is out of range`);\n        return n;\n    }\n    /**\n     * get the `n`th element of the iterator.\n     * negative `n` goes backwards\n     * like `Array.prototype.at()`\n     * @link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at\n     */\n    at(n) { return undefined; }\n    /**\n     * an alias of `at`\n     */\n    nth(n) { return this.at(n); }\n    /**\n     * pick random element\n     */\n    sample() {\n        return this.at(randomInteger(this.length));\n    }\n    /**\n     * an infinite steam of random elements\n     */\n    samples() {\n        return function* (it) {\n            while (true)\n                yield it.sample();\n        }(this);\n    }\n}\n/**\n * Permutation\n */\nclass Permutation extends _CBase {\n    constructor(seed, size = 0) {\n        super();\n        this.seed = [...seed];\n        this.size = 0 < size ? size : this.seed.length;\n        this.length = permutation(this.seed.length, this.size);\n        Object.freeze(this);\n    }\n    at(n) {\n        n = this._check(n);\n        if (n === undefined)\n            return undefined;\n        const offset = this.seed.length - this.size;\n        const skip = factorial(offset);\n        let digits = factoradic(BigInt(n) * BigInt(skip), this.seed.length);\n        let source = this.seed.slice();\n        let result = [];\n        for (let i = this.seed.length - 1; offset <= i; i--) {\n            result.push(source.splice(digits[i], 1)[0]);\n        }\n        return result;\n    }\n}\n/**\n * Combination\n */\nclass Combination extends _CBase {\n    constructor(seed, size = 0) {\n        super();\n        this.seed = [...seed];\n        this.size = 0 < size ? size : this.seed.length;\n        this.size = size;\n        this.length = combination(this.seed.length, this.size);\n        this.comb = combinadic(this.seed.length, this.size);\n        Object.freeze(this);\n    }\n    /**\n     * returns an iterator which is more efficient\n     * than the default iterator that uses .nth\n     *\n     * @link https://en.wikipedia.org/wiki/Combinatorial_number_system#Applications\n     */\n    bitwiseIterator() {\n        // [Symbol.iterator]() {\n        // console.log('overriding _CBase');\n        const inc = (x) => {\n            if (x <= 0n)\n                return 0n;\n            const u = x & -x;\n            const v = u + x;\n            return v + (((v ^ x) / u) >> 2n);\n        };\n        let x = (1n << BigInt(this.size)) - 1n; // 0b11...1\n        return function* (it, len) {\n            for (let i = 0n; i < BigInt(len); i++, x = inc(x)) {\n                let result = [];\n                for (let y = x, j = 0; 0n < y; y >>= 1n, j++) {\n                    if (y & 1n)\n                        result.push(it.seed[j]);\n                }\n                // console.log(`x = ${x}`);\n                yield result;\n            }\n        }(this, this.length);\n    }\n    at(n) {\n        n = this._check(n);\n        if (n === undefined)\n            return undefined;\n        let result = [];\n        for (let i of this.comb(n)) {\n            result.push(this.seed[i]);\n        }\n        return result;\n    }\n}\n/**\n * Base N\n */\nclass BaseN extends _CBase {\n    constructor(seed, size = 1) {\n        if (size < 1)\n            throw new RangeError(`${size} is out of range`);\n        super();\n        this.seed = [...seed];\n        this.size = size;\n        let base = this.seed.length;\n        this.base = base;\n        this.length = BigInt(base) ** BigInt(size);\n        Object.freeze(this);\n    }\n    at(n) {\n        n = this._check(n);\n        if (n === undefined)\n            return undefined;\n        let bn = BigInt(n);\n        const bb = BigInt(this.base);\n        let result = [];\n        for (let i = 0; i < this.size; i++) {\n            let bd = bn % bb;\n            result.push(this.seed[Number(bd)]);\n            bn -= bd;\n            bn /= bb;\n        }\n        return result;\n    }\n}\n/**\n * Power Set\n */\nclass PowerSet extends _CBase {\n    constructor(seed) {\n        super();\n        this.seed = [...seed];\n        const length = 1n << BigInt(this.seed.length);\n        this.length = length;\n        Object.freeze(this);\n    }\n    at(n) {\n        n = this._check(n);\n        if (n === undefined)\n            return undefined;\n        let bn = BigInt(n);\n        let result = [];\n        for (let bi = 0n; bn; bn >>= 1n, bi++)\n            if (bn & 1n)\n                result.push(this.seed[Number(bi)]);\n        return result;\n    }\n}\n/**\n * Cartesian Product\n */\nclass CartesianProduct extends _CBase {\n    constructor(...args) {\n        super();\n        this.seed = args.map(v => [...v]);\n        this.size = this.seed.length;\n        const length = this.seed.reduce((a, v) => a * BigInt(v.length), 1n);\n        this.length = length;\n        Object.freeze(this);\n    }\n    at(n) {\n        n = this._check(n);\n        if (n === undefined)\n            return undefined;\n        let bn = BigInt(n);\n        let result = [];\n        for (let i = 0; i < this.size; i++) {\n            const base = this.seed[i].length;\n            const bb = BigInt(base);\n            const bd = bn % bb;\n            result.push(this.seed[i][Number(bd)]);\n            bn -= bd;\n            bn /= bb;\n        }\n        return result;\n    }\n}\n\n\n//# sourceURL=webpack://med-duties-app/./node_modules/js-combinatorics/combinatorics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__(76124);
/******/ 	var __webpack_exports__ = __webpack_require__(91248);
/******/ 	
/******/ })()
;