/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");

new _controller__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/js/constants/attribute.js":
/*!***************************************!*\
  !*** ./src/js/constants/attribute.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ID": () => (/* binding */ ID),
/* harmony export */   "CLASS": () => (/* binding */ CLASS)
/* harmony export */ });
var ID = {
  APP: 'app',
  PURCHASE_FORM: 'purchase-form',
  PURCHASE_INPUT: 'purchase-input',
  LOTTO_LIST_DESCRIPTION_QUANTITY: 'lotto-list-description-quantity',
  TOGGLE: 'toggle',
  TOGGLE_INPUT: 'toggle-input',
  LOTTO_LISTS: 'lotto-lists',
  LOTTO_LIST_SECTION: 'lotto-list-section',
  PICKED_NUMBERS_FORM: 'picked-numbers-form',
  RESULT_MODAL_BACKGROUND: 'result-modal-background',
  RESULT_MODAL_GRID_CONTAINER: 'result-modal-grid-container',
  RESULT_MODAL_CLOSE: 'result-modal-close',
  RESULT_MODAL_RESET: 'result-modal-reset',
  RESULT_MODAL_PROFIT_RATIO: 'result-modal-profit-ratio',
  PURCHASE_SUBMIT: 'purchase-submit'
};
var CLASS = {
  DISPLAY: 'display',
  LOTTO_LIST: 'lotto-list',
  LOTTO_LIST_TICKET: 'lotto-list__ticket',
  LOTTO_LIST_NUMBERS: 'lotto-list__numbers',
  PICKED_NUMBER_INPUT: 'picked-number__input',
  RESULT_MODAL_GRID_ITEM: 'result-modal__grid-item',
  UNFOLD: 'unfold',
  OPEN: 'open',
  SCROLL_BLOCK: 'scroll-block'
};

/***/ }),

/***/ "./src/js/constants/lotto.js":
/*!***********************************!*\
  !*** ./src/js/constants/lotto.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOTTO_RULE": () => (/* binding */ LOTTO_RULE),
/* harmony export */   "LOTTO_PRICE": () => (/* binding */ LOTTO_PRICE),
/* harmony export */   "MAX_PURCHASABLE_CASH": () => (/* binding */ MAX_PURCHASABLE_CASH),
/* harmony export */   "WINNING_PRIZE": () => (/* binding */ WINNING_PRIZE)
/* harmony export */ });
var LOTTO_RULE = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBERS_COUNT: 6
};
var LOTTO_PRICE = 1000;
var MAX_PURCHASABLE_CASH = 100000;
var WINNING_PRIZE = {
  '3개': 5000,
  '4개': 50000,
  '5개': 1500000,
  '5개+보너스볼': 30000000,
  '6개': 2000000000
};

/***/ }),

/***/ "./src/js/constants/message.js":
/*!*************************************!*\
  !*** ./src/js/constants/message.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALERT_MESSAGE": () => (/* binding */ ALERT_MESSAGE)
/* harmony export */ });
/* harmony import */ var _lotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lotto */ "./src/js/constants/lotto.js");

var ALERT_MESSAGE = {
  NOT_DIVISIBLE: "".concat(_lotto__WEBPACK_IMPORTED_MODULE_0__.LOTTO_PRICE.toLocaleString(), "\uC73C\uB85C \uB098\uB204\uC5B4\uB5A8\uC5B4\uC9C0\uB294 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."),
  DUPLICATED_NUMBER: '당첨 번호가 서로 중복되지 않게 입력해주세요.',
  OVER_MAX_CASH: "\uCD5C\uB300 ".concat(_lotto__WEBPACK_IMPORTED_MODULE_0__.MAX_PURCHASABLE_CASH.toLocaleString(), "\uC6D0\uAE4C\uC9C0 \uAD6C\uB9E4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")
};

/***/ }),

/***/ "./src/js/constants/regexp.js":
/*!************************************!*\
  !*** ./src/js/constants/regexp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REGEXP": () => (/* binding */ REGEXP)
/* harmony export */ });
var REGEXP = {
  NUMBER: /^[0-9]/,
  NOT_NUMBER_IN_NUMBER_INPUT: /[e.\-+]{,1}/,
  NOT_NUMBER: /[a-zA-z|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/,
  KOREAN: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
};

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/js/model.js");
/* harmony import */ var _view_LottoListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/LottoListView.js */ "./src/js/view/LottoListView.js");
/* harmony import */ var _view_PurchaseFormView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/PurchaseFormView.js */ "./src/js/view/PurchaseFormView.js");
/* harmony import */ var _view_WinningNumberView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/WinningNumberView */ "./src/js/view/WinningNumberView.js");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/validation */ "./src/js/utils/validation.js");
/* harmony import */ var _constants_lotto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/lotto.js */ "./src/js/constants/lotto.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }








var _model = /*#__PURE__*/new WeakMap();

var _purchaseFormView = /*#__PURE__*/new WeakMap();

var _lottoListView = /*#__PURE__*/new WeakMap();

var _winningNumberView = /*#__PURE__*/new WeakMap();

var _bindEventHandlers = /*#__PURE__*/new WeakSet();

var _handleSubmitCash = /*#__PURE__*/new WeakSet();

var _handleCheckResult = /*#__PURE__*/new WeakSet();

var _handleRestart = /*#__PURE__*/new WeakSet();

var Controller = /*#__PURE__*/_createClass(function Controller() {
  _classCallCheck(this, Controller);

  _classPrivateMethodInitSpec(this, _handleRestart);

  _classPrivateMethodInitSpec(this, _handleCheckResult);

  _classPrivateMethodInitSpec(this, _handleSubmitCash);

  _classPrivateMethodInitSpec(this, _bindEventHandlers);

  _classPrivateFieldInitSpec(this, _model, {
    writable: true,
    value: new _model_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
  });

  _classPrivateFieldInitSpec(this, _purchaseFormView, {
    writable: true,
    value: new _view_PurchaseFormView_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
  });

  _classPrivateFieldInitSpec(this, _lottoListView, {
    writable: true,
    value: new _view_LottoListView_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
  });

  _classPrivateFieldInitSpec(this, _winningNumberView, {
    writable: true,
    value: new _view_WinningNumberView__WEBPACK_IMPORTED_MODULE_3__["default"]()
  });

  _classPrivateMethodGet(this, _bindEventHandlers, _bindEventHandlers2).call(this);
});

function _bindEventHandlers2() {
  var _this = this;

  _classPrivateFieldGet(this, _purchaseFormView).bindSubmitCash(function (cash) {
    return _classPrivateMethodGet(_this, _handleSubmitCash, _handleSubmitCash2).call(_this, cash);
  });

  _classPrivateFieldGet(this, _winningNumberView).bindCheckResult(function (winningNumbers) {
    return _classPrivateMethodGet(_this, _handleCheckResult, _handleCheckResult2).call(_this, winningNumbers);
  });

  _classPrivateFieldGet(this, _winningNumberView).bindRestart(function () {
    return _classPrivateMethodGet(_this, _handleRestart, _handleRestart2).call(_this);
  });
}

function _handleSubmitCash2(cash) {
  try {
    (0,_utils_validation__WEBPACK_IMPORTED_MODULE_4__.validateCashInput)(cash);

    _classPrivateFieldGet(this, _model).setCash(cash);

    _classPrivateFieldGet(this, _model).buyLotto(cash);

    _classPrivateFieldGet(this, _purchaseFormView).disableSubmit();

    _classPrivateFieldGet(this, _lottoListView).showLottoListSection(_classPrivateFieldGet(this, _model).getLottoList());

    _classPrivateFieldGet(this, _winningNumberView).displayPickedNumbersForm();

    _classPrivateFieldGet(this, _winningNumberView).moveFocusOnWinningNumberInput();
  } catch (_ref) {
    var message = _ref.message;
    alert(message);
  }
}

function _handleCheckResult2(pickedNumbers) {
  try {
    (0,_utils_validation__WEBPACK_IMPORTED_MODULE_4__.validatePickedNumbers)(pickedNumbers);

    _classPrivateFieldGet(this, _model).setWinningLottoQuantity(pickedNumbers);

    _classPrivateFieldGet(this, _winningNumberView).showLottoResult(_classPrivateFieldGet(this, _model).getWinningLottoQuantity(), _classPrivateFieldGet(this, _model).calculateProfitRatio());

    _classPrivateFieldGet(this, _winningNumberView).bindClickModalOutside();
  } catch (_ref2) {
    var message = _ref2.message;
    alert(message);
  }
}

function _handleRestart2() {
  _classPrivateFieldGet(this, _winningNumberView).displayNoneResultModal();

  _classPrivateFieldGet(this, _winningNumberView).displayNonePickedNumbersForm();

  _classPrivateFieldGet(this, _lottoListView).displayNoneLottoListSection();

  _classPrivateFieldGet(this, _purchaseFormView).clearInput();

  _classPrivateFieldGet(this, _winningNumberView).clearInputs();

  _classPrivateFieldGet(this, _purchaseFormView).enableSubmit();
}



/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var _constants_lotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/lotto */ "./src/js/constants/lotto.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _cash = /*#__PURE__*/new WeakMap();

var _lottoList = /*#__PURE__*/new WeakMap();

var _winningLottoQuantity = /*#__PURE__*/new WeakMap();

var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);

    _classPrivateFieldInitSpec(this, _cash, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _lottoList, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _winningLottoQuantity, {
      writable: true,
      value: {
        '3개': 0,
        '4개': 0,
        '5개': 0,
        '5개+보너스볼': 0,
        '6개': 0
      }
    });
  }

  _createClass(Model, [{
    key: "getCash",
    value: function getCash() {
      return _classPrivateFieldGet(this, _cash);
    }
  }, {
    key: "setCash",
    value: function setCash(cash) {
      _classPrivateFieldSet(this, _cash, cash);
    }
  }, {
    key: "getLottoList",
    value: function getLottoList() {
      return _classPrivateFieldGet(this, _lottoList);
    }
  }, {
    key: "getWinningLottoQuantity",
    value: function getWinningLottoQuantity() {
      return _classPrivateFieldGet(this, _winningLottoQuantity);
    }
  }, {
    key: "buyLotto",
    value: function buyLotto(cash) {
      _classPrivateFieldSet(this, _lottoList, []);

      for (var i = 0; i < cash / _constants_lotto__WEBPACK_IMPORTED_MODULE_0__.LOTTO_PRICE; i++) {
        _classPrivateFieldGet(this, _lottoList).push(this.makeLottoNumbers());
      }
    }
  }, {
    key: "makeLottoNumbers",
    value: function makeLottoNumbers() {
      return shuffle(makeAllLottoNumbers(_constants_lotto__WEBPACK_IMPORTED_MODULE_0__.LOTTO_RULE.MIN_NUMBER, _constants_lotto__WEBPACK_IMPORTED_MODULE_0__.LOTTO_RULE.MAX_NUMBER)).slice(0, _constants_lotto__WEBPACK_IMPORTED_MODULE_0__.LOTTO_RULE.NUMBERS_COUNT);
    }
  }, {
    key: "setWinningLottoQuantity",
    value: function setWinningLottoQuantity(pickedNumbers) {
      var _this = this;

      Object.keys(_classPrivateFieldGet(this, _winningLottoQuantity)).map(function (key) {
        return _classPrivateFieldGet(_this, _winningLottoQuantity)[key] = 0;
      });

      _classPrivateFieldGet(this, _lottoList).map(function (lotto) {
        _classPrivateFieldGet(_this, _winningLottoQuantity)[countSameNumber(lotto, pickedNumbers)] += 1;
      });
    }
  }, {
    key: "calculateProfitRatio",
    value: function calculateProfitRatio() {
      var totalProfit = 0;

      for (var key in _constants_lotto__WEBPACK_IMPORTED_MODULE_0__.WINNING_PRIZE) {
        totalProfit += _constants_lotto__WEBPACK_IMPORTED_MODULE_0__.WINNING_PRIZE[key] * _classPrivateFieldGet(this, _winningLottoQuantity)[key];
      }

      return totalProfit / _classPrivateFieldGet(this, _cash) * 100;
    }
  }]);

  return Model;
}();



function makeAllLottoNumbers(min, max) {
  return _toConsumableArray(Array(max + 1).keys()).slice(min);
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }

  return array;
}

function countSameNumber(lotto, pickedNumbers) {
  var winningNumbers = pickedNumbers.slice(0, _constants_lotto__WEBPACK_IMPORTED_MODULE_0__.LOTTO_RULE.NUMBERS_COUNT);
  var bonusNumber = pickedNumbers.slice(-1)[0];
  var winningCount = winningNumbers.filter(function (element) {
    return lotto.includes(element);
  }).length;

  if (winningCount === 5 && lotto.includes(bonusNumber)) {
    return '5개+보너스볼';
  }

  return "".concat(winningCount, "\uAC1C");
}

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "replaceHTML": () => (/* binding */ replaceHTML),
/* harmony export */   "addClassName": () => (/* binding */ addClassName),
/* harmony export */   "removeClassName": () => (/* binding */ removeClassName)
/* harmony export */ });
var $ = function $(selector) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return target.getElementById(selector);
};
var $$ = function $$(selector) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return target.querySelectorAll(".".concat(selector));
};
var replaceHTML = function replaceHTML(element, template) {
  element.replaceChildren();
  element.insertAdjacentHTML('beforeend', template);
};
var addClassName = function addClassName($element, className) {
  $element.classList.add(className);
};
var removeClassName = function removeClassName($element, className) {
  $element.classList.remove(className);
};

/***/ }),

/***/ "./src/js/utils/validation.js":
/*!************************************!*\
  !*** ./src/js/utils/validation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateCashInput": () => (/* binding */ validateCashInput),
/* harmony export */   "validatePickedNumbers": () => (/* binding */ validatePickedNumbers)
/* harmony export */ });
/* harmony import */ var _constants_lotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/lotto */ "./src/js/constants/lotto.js");
/* harmony import */ var _constants_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/message */ "./src/js/constants/message.js");


var validateCashInput = function validateCashInput(cash) {
  if (cash > _constants_lotto__WEBPACK_IMPORTED_MODULE_0__.MAX_PURCHASABLE_CASH) {
    throw new Error(_constants_message__WEBPACK_IMPORTED_MODULE_1__.ALERT_MESSAGE.OVER_MAX_CASH);
  }

  if (cash % _constants_lotto__WEBPACK_IMPORTED_MODULE_0__.LOTTO_PRICE !== 0) {
    throw new Error(_constants_message__WEBPACK_IMPORTED_MODULE_1__.ALERT_MESSAGE.NOT_DIVISIBLE);
  }
};
var validatePickedNumbers = function validatePickedNumbers(pickedNumbers) {
  if (pickedNumbers.length !== new Set(pickedNumbers).size) {
    throw new Error(_constants_message__WEBPACK_IMPORTED_MODULE_1__.ALERT_MESSAGE.DUPLICATED_NUMBER);
  }
};

/***/ }),

/***/ "./src/js/view/LottoListView.js":
/*!**************************************!*\
  !*** ./src/js/view/LottoListView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LottoListView)
/* harmony export */ });
/* harmony import */ var _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/attribute.js */ "./src/js/constants/attribute.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _configureDOM = /*#__PURE__*/new WeakSet();

var _bindToggleClick = /*#__PURE__*/new WeakSet();

var _showLottoList = /*#__PURE__*/new WeakSet();

var LottoListView = /*#__PURE__*/function () {
  function LottoListView() {
    _classCallCheck(this, LottoListView);

    _classPrivateMethodInitSpec(this, _showLottoList);

    _classPrivateMethodInitSpec(this, _bindToggleClick);

    _classPrivateMethodInitSpec(this, _configureDOM);

    _classPrivateMethodGet(this, _configureDOM, _configureDOM2).call(this);

    _classPrivateMethodGet(this, _bindToggleClick, _bindToggleClick2).call(this);
  }

  _createClass(LottoListView, [{
    key: "showLottoListSection",
    value: function showLottoListSection(lottoList) {
      this.displayLottoListSection();
      this.$lottoListDescriptionQuantity.textContent = lottoList.length;

      _classPrivateMethodGet(this, _showLottoList, _showLottoList2).call(this, lottoList);
    }
  }, {
    key: "displayLottoListSection",
    value: function displayLottoListSection() {
      (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.addClassName)(this.$lottoListSection, _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.DISPLAY);
    }
  }, {
    key: "displayNoneLottoListSection",
    value: function displayNoneLottoListSection() {
      (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.removeClassName)(this.$lottoListSection, _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.DISPLAY);
    }
  }]);

  return LottoListView;
}();

function _configureDOM2() {
  this.$lottoListSection = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.LOTTO_LIST_SECTION);
  this.$lottoLists = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.LOTTO_LISTS);
  this.$lottoListDescriptionQuantity = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.LOTTO_LIST_DESCRIPTION_QUANTITY);
  this.$toggle = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.TOGGLE);
  this.$toggleInput = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.TOGGLE_INPUT);
}

function _bindToggleClick2() {
  var _this = this;

  this.$toggle.addEventListener('click', function () {
    var isChecked = _this.$toggleInput.checked;
    _this.$toggleInput.checked = !isChecked;

    _this.$lottoLists.classList.toggle(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.UNFOLD);
  });
}

function _showLottoList2(lottoList) {
  (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__.replaceHTML)(this.$lottoLists, lottoListTemplate(lottoList));
}



function lottoListTemplate(lottoList) {
  return lottoList.map(function (lotto) {
    return "\n      <li class=\"".concat(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.LOTTO_LIST, "\">\n        <span class=\"").concat(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.LOTTO_LIST_TICKET, "\">\uD83C\uDF9F\uFE0F</span>\n        <span class=\"").concat(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.LOTTO_LIST_NUMBERS, "\">").concat(_toConsumableArray(lotto.values()).join(', '), "</span>\n      </li>");
  }).join('');
}

/***/ }),

/***/ "./src/js/view/PurchaseFormView.js":
/*!*****************************************!*\
  !*** ./src/js/view/PurchaseFormView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseFormView)
/* harmony export */ });
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom.js */ "./src/js/utils/dom.js");
/* harmony import */ var _constants_attribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/attribute.js */ "./src/js/constants/attribute.js");
/* harmony import */ var _constants_regexp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/regexp.js */ "./src/js/constants/regexp.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _configureDOM = /*#__PURE__*/new WeakSet();

var PurchaseFormView = /*#__PURE__*/function () {
  function PurchaseFormView() {
    _classCallCheck(this, PurchaseFormView);

    _classPrivateMethodInitSpec(this, _configureDOM);

    _classPrivateMethodGet(this, _configureDOM, _configureDOM2).call(this);

    this.bindAddCommaInNumber();
  }

  _createClass(PurchaseFormView, [{
    key: "clearInput",
    value: function clearInput() {
      this.$purchaseForm.reset();
    }
  }, {
    key: "bindSubmitCash",
    value: function bindSubmitCash(handler) {
      this.$purchaseForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handler(removeCommaInNumber(event.target.elements.cash.value));
      });
    }
  }, {
    key: "bindAddCommaInNumber",
    value: function bindAddCommaInNumber() {
      var valueAfterKeyDown;
      this.$purchaseInput.addEventListener('keydown', function (e) {
        if (_constants_regexp_js__WEBPACK_IMPORTED_MODULE_2__.REGEXP.NOT_NUMBER.test(e.key) && e.key.length === 1) {
          e.preventDefault();
          return;
        }

        if (_constants_regexp_js__WEBPACK_IMPORTED_MODULE_2__.REGEXP.KOREAN.test(e.key)) {
          valueAfterKeyDown = e.target.value;
          return;
        }
      });
      this.$purchaseInput.addEventListener('input', function (e) {
        var value = e.target.value;

        if (_constants_regexp_js__WEBPACK_IMPORTED_MODULE_2__.REGEXP.KOREAN.test(value)) {
          e.target.value = valueAfterKeyDown;
          return;
        }

        if (value === '') {
          return;
        }

        e.target.value = removeCommaInNumber(value).toLocaleString();
      });
    }
  }, {
    key: "disableSubmit",
    value: function disableSubmit() {
      this.$purchaseInput.disabled = true;
      this.$purchaseSubmit.disabled = true;
    }
  }, {
    key: "enableSubmit",
    value: function enableSubmit() {
      this.$purchaseInput.disabled = false;
      this.$purchaseSubmit.disabled = false;
    }
  }]);

  return PurchaseFormView;
}();

function _configureDOM2() {
  this.$purchaseForm = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_1__.ID.PURCHASE_FORM);
  this.$purchaseInput = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_1__.ID.PURCHASE_INPUT);
  this.$purchaseSubmit = (0,_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_1__.ID.PURCHASE_SUBMIT);
}



function removeCommaInNumber(value) {
  return Number(value.replace(/,/g, ''));
}

/***/ }),

/***/ "./src/js/view/WinningNumberView.js":
/*!******************************************!*\
  !*** ./src/js/view/WinningNumberView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WinningNumberView)
/* harmony export */ });
/* harmony import */ var _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/attribute.js */ "./src/js/constants/attribute.js");
/* harmony import */ var _constants_lotto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/lotto.js */ "./src/js/constants/lotto.js");
/* harmony import */ var _constants_regexp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/regexp.js */ "./src/js/constants/regexp.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }






var _configureDOM = /*#__PURE__*/new WeakSet();

var _moveFocusHandler = /*#__PURE__*/new WeakSet();

var WinningNumberView = /*#__PURE__*/function () {
  function WinningNumberView() {
    _classCallCheck(this, WinningNumberView);

    _classPrivateMethodInitSpec(this, _moveFocusHandler);

    _classPrivateMethodInitSpec(this, _configureDOM);

    _classPrivateMethodGet(this, _configureDOM, _configureDOM2).call(this);

    this.bindCloseModal();
    this.bindMoveFocus();
  }

  _createClass(WinningNumberView, [{
    key: "bindCheckResult",
    value: function bindCheckResult(handler) {
      this.$pickedNumbersForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handler(_toConsumableArray(event.target.elements.pickedNumber).map(function (input) {
          return input.valueAsNumber;
        }));
      });
    }
  }, {
    key: "bindCloseModal",
    value: function bindCloseModal() {
      var _this = this;

      this.$resultModalClose.addEventListener('click', function () {
        _this.$resultModalBackground.classList.remove(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.OPEN);
      });
    }
  }, {
    key: "bindRestart",
    value: function bindRestart(handler) {
      var _this2 = this;

      this.$resultModalReset.addEventListener('click', function () {
        _this2.$pickedNumbersForm.classList.add(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.PICKED_NUMBERS_FORM_DISPLAY_NONE);

        handler();
      });
    }
  }, {
    key: "bindClickModalOutside",
    value: function bindClickModalOutside() {
      this.$resultModalBackground.addEventListener('click', this.displayNoneResultModal.bind(this));
    }
  }, {
    key: "bindMoveFocus",
    value: function bindMoveFocus() {
      var _this3 = this;

      this.$pickedNumberInputs.forEach(function ($input, index) {
        $input.addEventListener('input', function () {
          _classPrivateMethodGet(_this3, _moveFocusHandler, _moveFocusHandler2).call(_this3, $input);
        });
        $input.addEventListener('keydown', function (e) {
          if (_constants_regexp_js__WEBPACK_IMPORTED_MODULE_2__.REGEXP.NOT_NUMBER_IN_NUMBER_INPUT.test(e.key)) {
            e.preventDefault();
            return;
          }

          if (e.target.value.length === 2 && _constants_regexp_js__WEBPACK_IMPORTED_MODULE_2__.REGEXP.NUMBER.test(e.key)) {
            e.preventDefault();
          }
        });
        $input.addEventListener('keyup', function (e) {
          if (e.key === 'Backspace' && $input.value.length === 0) {
            var _Array$from$slice$rev;

            (_Array$from$slice$rev = Array.from(_this3.$pickedNumberInputs).slice(0, index).reverse().find(function ($input) {
              return $input.value !== '';
            })) === null || _Array$from$slice$rev === void 0 ? void 0 : _Array$from$slice$rev.focus();
          }
        });
      });
    }
  }, {
    key: "moveFocusOnWinningNumberInput",
    value: function moveFocusOnWinningNumberInput() {
      this.$pickedNumberInputs[0].focus();
    }
  }, {
    key: "displayPickedNumbersForm",
    value: function displayPickedNumbersForm() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.addClassName)(this.$pickedNumbersForm, _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.DISPLAY);
    }
  }, {
    key: "displayNonePickedNumbersForm",
    value: function displayNonePickedNumbersForm() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.removeClassName)(this.$pickedNumbersForm, _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.DISPLAY);
    }
  }, {
    key: "displayResultModal",
    value: function displayResultModal() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.addClassName)(this.$resultModalBackground, _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.OPEN);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.addClassName)(this.$body, _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.SCROLL_BLOCK);
    }
  }, {
    key: "displayNoneResultModal",
    value: function displayNoneResultModal() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.removeClassName)(this.$resultModalBackground, _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.OPEN);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.removeClassName)(this.$body, _constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.SCROLL_BLOCK);
    }
  }, {
    key: "clearInputs",
    value: function clearInputs() {
      this.$pickedNumbersForm.reset();
    }
  }, {
    key: "showLottoResult",
    value: function showLottoResult(winningLottoQuantity, profitRatio) {
      this.displayResultModal();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.replaceHTML)(this.$resultModalGridContainer, resultGridTemplate(winningLottoQuantity));
      this.$resultModalProfitRatio.textContent = profitRatio.toLocaleString();
    }
  }]);

  return WinningNumberView;
}();

function _configureDOM2() {
  this.$pickedNumbersForm = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.PICKED_NUMBERS_FORM);
  this.$resultModalBackground = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.RESULT_MODAL_BACKGROUND);
  this.$resultModalGridContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.RESULT_MODAL_GRID_CONTAINER);
  this.$resultModalClose = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.RESULT_MODAL_CLOSE);
  this.$resultModalReset = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.RESULT_MODAL_RESET);
  this.$resultModalProfitRatio = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.ID.RESULT_MODAL_PROFIT_RATIO);
  this.$pickedNumberInputs = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.$$)(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.PICKED_NUMBER_INPUT);
  this.$body = document.querySelector('body');
}

function _moveFocusHandler2($element) {
  if ($element.value.length === 2) {
    var _Array$from$find;

    (_Array$from$find = Array.from(this.$pickedNumberInputs).find(function ($input) {
      return $input.value === '';
    })) === null || _Array$from$find === void 0 ? void 0 : _Array$from$find.focus();
  }
}



function resultGridTemplate(winningLottoQuantity) {
  return "<div class=\"".concat(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.RESULT_MODAL_GRID_ITEM, "\">\uC77C\uCE58 \uAC1C\uC218</div>\n    <div class=\"").concat(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.RESULT_MODAL_GRID_ITEM, "\">\uB2F9\uCCA8\uAE08</div>\n    <div class=\"").concat(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.RESULT_MODAL_GRID_ITEM, "\">\uB2F9\uCCA8 \uAC2F\uC218</div>") + Object.keys(_constants_lotto_js__WEBPACK_IMPORTED_MODULE_1__.WINNING_PRIZE).map(function (key) {
    return "\n        <div class=\"".concat(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.RESULT_MODAL_GRID_ITEM, "\">").concat(key, "</div>\n        <div class=\"").concat(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.RESULT_MODAL_GRID_ITEM, "\">").concat(_constants_lotto_js__WEBPACK_IMPORTED_MODULE_1__.WINNING_PRIZE[key].toLocaleString(), "</div>\n        <div class=\"").concat(_constants_attribute_js__WEBPACK_IMPORTED_MODULE_0__.CLASS.RESULT_MODAL_GRID_ITEM, "\">").concat(winningLottoQuantity[key], "\uAC1C</div>\n      ");
  }).join('');
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-primary: #00bcd4;\n  --color-lighten: #80deea;\n  --color-placeholder: #8b8b8b;\n  --color-border: #b4b4b4;\n  --color-white: white;\n  --color-dimmed: rgba(0, 0, 0, 0.5);\n  --color-unchecked-round: #ededed;\n  --color-unchecked-slide: rgba(33, 33, 33, 0.08);\n  --color-body: #f9f9f9;\n  --color-main-border: rgba(0, 0, 0, 0.12);\n  --color-grid-border: #dcdcdc;\n  --color-disabled: #ccc;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\np,\nlabel {\n  line-height: 24px;\n}\n\nhtml {\n  width: 100%;\n  min-height: 100vh;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-body);\n  min-height: 100vh;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput:focus {\n  border-color: blue;\n}\n\ninput:disabled {\n  background-color: var(--color-disabled);\n}\n\nbutton:disabled {\n  background-color: var(--color-disabled);\n}\n\n.scroll-block {\n  overflow: hidden !important;\n}\n\n.display {\n  display: block !important;\n}\n\nmain {\n  background-color: var(--color-white);\n  border: 1px solid var(--color-main-border);\n  border-radius: 4px;\n  min-height: 727px;\n  position: relative;\n}\n\ninput {\n  border: 1px solid var(--color-border);\n  outline: 0;\n  border-radius: 4px;\n}\n\ninput::placeholder {\n  color: var(--color-placeholder);\n}\n\nbutton {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 414px;\n  padding: 0 16px;\n}\n\nh1 {\n  margin-top: 52px;\n  margin-bottom: 16px;\n  line-height: 36px;\n}\n\n.purchase__form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 28px;\n  width: 100%;\n}\n\n.purchase__description {\n  font-size: 15px;\n}\n\n.purchase__input-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.purchase__input {\n  width: 310px;\n  height: 36px;\n  margin-right: 16px;\n  padding-left: 8px;\n}\n\n.purchase__submit {\n  width: 56px;\n  height: 36px;\n}\n\n.lotto-list__section {\n  width: 100%;\n  margin-bottom: 14px;\n  display: none;\n}\n\n.lotto-list__header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.lotto-list__description {\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.lotto-list__toggle-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.toggle {\n  position: absolute;\n  display: inline-block;\n  bottom: -29px;\n  right: 34px;\n}\n\n.toggle .lotto-list__toggle-input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--color-unchecked-slide);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 20px;\n  width: 20px;\n  left: 0px;\n  bottom: -3px;\n  background-color: var(--color-unchecked-round);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.68);\n}\n\n.slider.round {\n  border-radius: 34px;\n  width: 34px;\n  height: 14px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.lotto-list__toggle-input:checked + .slider:before {\n  -webkit-transform: translateX(14px);\n  -ms-transform: translateX(14px);\n  transform: translateX(14px);\n  background-color: var(--color-primary);\n}\n\n.lotto-list__toggle-input:checked + .slider {\n  background-color: var(--color-lighten);\n}\n\n.lotto-lists {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 40px;\n}\n\n.lotto-lists.unfold {\n  flex-direction: column;\n}\n\n.lotto-list {\n  display: flex;\n  align-items: center;\n}\n\n.lotto-list__ticket {\n  display: inline-block;\n  font-size: 34px;\n  margin-right: 8px;\n}\n\n.lotto-list__ticket:last-child {\n  margin-right: 0;\n}\n\n.lotto-list__numbers {\n  display: none;\n}\n\n.lotto-lists.unfold .lotto-list__numbers {\n  display: inline;\n}\n\n.picked-numbers-form {\n  width: 100%;\n  font-size: 15px;\n  display: none;\n}\n\n.picked-numbers__description {\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n\n.picked-numbers__container {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n\n.picked-number__description {\n  display: block;\n  margin-bottom: 8px;\n}\n\n.picked-number__input {\n  width: 35px;\n  height: 35px;\n  margin-left: 8px;\n  text-align: center;\n}\n\n.picked-number__input:first-of-type {\n  margin-left: 0;\n}\n\n.bonus-number__box {\n  text-align: right;\n}\n\n.picked-numbers__check-button {\n  width: 100%;\n  height: 36px;\n}\n\n.result-modal__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-dimmed);\n}\n\n.result-modal__background.open {\n  display: flex;\n}\n\n.result-modal__section {\n  position: relative;\n  width: 350px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 16px 49px;\n  background-color: var(--color-white);\n  border-radius: 4px;\n}\n\n.result-modal__heading2 {\n  font-size: 20px;\n  margin-bottom: 32px;\n}\n\n.result-modal__grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.result-modal__grid-item {\n  line-height: 24px;\n  height: 40px;\n  text-align: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--color-grid-border);\n}\n\n.result-modal__grid-item:nth-child(1),\n.result-modal__grid-item:nth-child(2),\n.result-modal__grid-item:nth-child(3) {\n  font-weight: 600;\n  border-top: 1px solid var(--color-grid-border);\n}\n\n.result-modal__profit-ratio-description {\n  font-weight: 600;\n  margin-bottom: 32px;\n}\n\n.result-modal__close {\n  background-color: var(--color-white);\n  color: black;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.result-modal__reset {\n  width: 152px;\n  height: 36px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,wBAAwB;EACxB,4BAA4B;EAC5B,uBAAuB;EACvB,oBAAoB;EACpB,kCAAkC;EAClC,gCAAgC;EAChC,+CAA+C;EAC/C,qBAAqB;EACrB,wCAAwC;EACxC,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,0CAA0C;EAC1C,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;EACrC,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,sCAAsC;EACtC,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,8CAA8C;EAC9C,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,YAAY;EACZ,8CAA8C;EAC9C,wBAAwB;EACxB,gBAAgB;EAChB,+CAA+C;AACjD;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;EAC3B,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,iDAAiD;AACnD;;AAEA;;;EAGE,gBAAgB;EAChB,8CAA8C;AAChD;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;AACd","sourcesContent":[":root {\n  --color-primary: #00bcd4;\n  --color-lighten: #80deea;\n  --color-placeholder: #8b8b8b;\n  --color-border: #b4b4b4;\n  --color-white: white;\n  --color-dimmed: rgba(0, 0, 0, 0.5);\n  --color-unchecked-round: #ededed;\n  --color-unchecked-slide: rgba(33, 33, 33, 0.08);\n  --color-body: #f9f9f9;\n  --color-main-border: rgba(0, 0, 0, 0.12);\n  --color-grid-border: #dcdcdc;\n  --color-disabled: #ccc;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\np,\nlabel {\n  line-height: 24px;\n}\n\nhtml {\n  width: 100%;\n  min-height: 100vh;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-body);\n  min-height: 100vh;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput:focus {\n  border-color: blue;\n}\n\ninput:disabled {\n  background-color: var(--color-disabled);\n}\n\nbutton:disabled {\n  background-color: var(--color-disabled);\n}\n\n.scroll-block {\n  overflow: hidden !important;\n}\n\n.display {\n  display: block !important;\n}\n\nmain {\n  background-color: var(--color-white);\n  border: 1px solid var(--color-main-border);\n  border-radius: 4px;\n  min-height: 727px;\n  position: relative;\n}\n\ninput {\n  border: 1px solid var(--color-border);\n  outline: 0;\n  border-radius: 4px;\n}\n\ninput::placeholder {\n  color: var(--color-placeholder);\n}\n\nbutton {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 414px;\n  padding: 0 16px;\n}\n\nh1 {\n  margin-top: 52px;\n  margin-bottom: 16px;\n  line-height: 36px;\n}\n\n.purchase__form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 28px;\n  width: 100%;\n}\n\n.purchase__description {\n  font-size: 15px;\n}\n\n.purchase__input-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.purchase__input {\n  width: 310px;\n  height: 36px;\n  margin-right: 16px;\n  padding-left: 8px;\n}\n\n.purchase__submit {\n  width: 56px;\n  height: 36px;\n}\n\n.lotto-list__section {\n  width: 100%;\n  margin-bottom: 14px;\n  display: none;\n}\n\n.lotto-list__header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.lotto-list__description {\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.lotto-list__toggle-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.toggle {\n  position: absolute;\n  display: inline-block;\n  bottom: -29px;\n  right: 34px;\n}\n\n.toggle .lotto-list__toggle-input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--color-unchecked-slide);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 20px;\n  width: 20px;\n  left: 0px;\n  bottom: -3px;\n  background-color: var(--color-unchecked-round);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.68);\n}\n\n.slider.round {\n  border-radius: 34px;\n  width: 34px;\n  height: 14px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.lotto-list__toggle-input:checked + .slider:before {\n  -webkit-transform: translateX(14px);\n  -ms-transform: translateX(14px);\n  transform: translateX(14px);\n  background-color: var(--color-primary);\n}\n\n.lotto-list__toggle-input:checked + .slider {\n  background-color: var(--color-lighten);\n}\n\n.lotto-lists {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 40px;\n}\n\n.lotto-lists.unfold {\n  flex-direction: column;\n}\n\n.lotto-list {\n  display: flex;\n  align-items: center;\n}\n\n.lotto-list__ticket {\n  display: inline-block;\n  font-size: 34px;\n  margin-right: 8px;\n}\n\n.lotto-list__ticket:last-child {\n  margin-right: 0;\n}\n\n.lotto-list__numbers {\n  display: none;\n}\n\n.lotto-lists.unfold .lotto-list__numbers {\n  display: inline;\n}\n\n.picked-numbers-form {\n  width: 100%;\n  font-size: 15px;\n  display: none;\n}\n\n.picked-numbers__description {\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n\n.picked-numbers__container {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n\n.picked-number__description {\n  display: block;\n  margin-bottom: 8px;\n}\n\n.picked-number__input {\n  width: 35px;\n  height: 35px;\n  margin-left: 8px;\n  text-align: center;\n}\n\n.picked-number__input:first-of-type {\n  margin-left: 0;\n}\n\n.bonus-number__box {\n  text-align: right;\n}\n\n.picked-numbers__check-button {\n  width: 100%;\n  height: 36px;\n}\n\n.result-modal__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-dimmed);\n}\n\n.result-modal__background.open {\n  display: flex;\n}\n\n.result-modal__section {\n  position: relative;\n  width: 350px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 16px 49px;\n  background-color: var(--color-white);\n  border-radius: 4px;\n}\n\n.result-modal__heading2 {\n  font-size: 20px;\n  margin-bottom: 32px;\n}\n\n.result-modal__grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.result-modal__grid-item {\n  line-height: 24px;\n  height: 40px;\n  text-align: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--color-grid-border);\n}\n\n.result-modal__grid-item:nth-child(1),\n.result-modal__grid-item:nth-child(2),\n.result-modal__grid-item:nth-child(3) {\n  font-weight: 600;\n  border-top: 1px solid var(--color-grid-border);\n}\n\n.result-modal__profit-ratio-description {\n  font-weight: 600;\n  margin-bottom: 32px;\n}\n\n.result-modal__close {\n  background-color: var(--color-white);\n  color: black;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.result-modal__reset {\n  width: 152px;\n  height: 36px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map