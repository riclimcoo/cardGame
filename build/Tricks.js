"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _getType = /*#__PURE__*/new WeakSet();

var _get5CardType = /*#__PURE__*/new WeakSet();

var _isFullHouse = /*#__PURE__*/new WeakMap();

var _isQuadHouse = /*#__PURE__*/new WeakMap();

var _isStraight = /*#__PURE__*/new WeakMap();

var _isFlush = /*#__PURE__*/new WeakMap();

var _sortedVals = /*#__PURE__*/new WeakMap();

var _calcScore = /*#__PURE__*/new WeakSet();

var _weakestCard = /*#__PURE__*/new WeakMap();

var _majorityVal = /*#__PURE__*/new WeakMap();

var _isSameVal = /*#__PURE__*/new WeakMap();

var Trick = /*#__PURE__*/function () {
  function Trick(cardArr) {
    _classCallCheck(this, Trick);

    _isSameVal.set(this, {
      get: _get_isSameVal,
      set: void 0
    });

    _majorityVal.set(this, {
      get: _get_majorityVal,
      set: void 0
    });

    _weakestCard.set(this, {
      get: _get_weakestCard,
      set: void 0
    });

    _calcScore.add(this);

    _sortedVals.set(this, {
      get: _get_sortedVals,
      set: void 0
    });

    _isFlush.set(this, {
      get: _get_isFlush,
      set: void 0
    });

    _isStraight.set(this, {
      get: _get_isStraight,
      set: void 0
    });

    _isQuadHouse.set(this, {
      get: _get_isQuadHouse,
      set: void 0
    });

    _isFullHouse.set(this, {
      get: _get_isFullHouse,
      set: void 0
    });

    _get5CardType.add(this);

    _getType.add(this);

    this.cardArr = cardArr;
    this.type = _classPrivateMethodGet(this, _getType, _getType2).call(this);
    this.score = _classPrivateMethodGet(this, _calcScore, _calcScore2).call(this);
  }

  _createClass(Trick, [{
    key: "beats",
    value: function beats(challenger) {
      return this.cardArr.length == challenger.cardArr.length && this.score > challenger.score;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(Trick.names[this.type], ": ").concat(this.cardArr);
    }
  }]);

  return Trick;
}();

exports["default"] = Trick;

function _getType2() {
  switch (this.cardArr.length) {
    case 1:
      return Trick.singleCard;

    case 2:
      if (_classPrivateFieldGet(this, _isSameVal)) return Trick.pair;
      break;

    case 3:
      if (_classPrivateFieldGet(this, _isSameVal)) return Trick.trio;
      break;

    case 4:
      if (_classPrivateFieldGet(this, _isSameVal)) return Trick.quadro;
      break;

    case 5:
      return _classPrivateMethodGet(this, _get5CardType, _get5CardType2).call(this);

    default:
      throw "invalid hand";
  }
}

function _get5CardType2() {
  if (_classPrivateFieldGet(this, _isFlush) && _classPrivateFieldGet(this, _isStraight)) return Trick.royalFlush;
  if (_classPrivateFieldGet(this, _isFlush)) return Trick.flush;
  if (_classPrivateFieldGet(this, _isStraight)) return Trick.straight;
  if (_classPrivateFieldGet(this, _isFullHouse)) return Trick.fullHouse;
  if (_classPrivateFieldGet(this, _isQuadHouse)) return Trick.quadroHouse;else throw "invalid hand";
}

function _get_isFullHouse() {
  var vals = _classPrivateFieldGet(this, _sortedVals);

  var hasTrio = vals[0] == vals[1] && vals[1] == vals[2] || vals[2] == vals[3] && vals[3] == vals[4];
  var hasTwoPairs = vals[0] == vals[1] && vals[3] == vals[4];
  return hasTrio && hasTwoPairs;
}

function _get_isQuadHouse() {
  var vals = _classPrivateFieldGet(this, _sortedVals);

  var middle3AreSame = vals[1] == vals[2] && vals[2] == vals[3];
  var outerCardSame = vals[0] == vals[2] || vals[4] == vals[2];
  return middle3AreSame && outerCardSame;
}

function _get_isStraight() {
  return isAscending(_classPrivateFieldGet(this, _sortedVals));
}

function _get_isFlush() {
  return allEqual(this.cardArr.map(function (card) {
    return card.suit;
  }));
}

function _get_sortedVals() {
  return this.cardArr.map(function (c) {
    return c.val;
  }).sort();
}

function _calcScore2() {
  var typeScore = this.type * 1000;

  switch (this.type) {
    case Trick.singleCard:
    case Trick.pair:
    case Trick.trio:
    case Trick.quadro:
    case Trick.straight:
    case Trick.royalFlush:
      return typeScore + _classPrivateFieldGet(this, _weakestCard).cardId;

    case Trick.fullHouse:
    case Trick.quadroHouse:
      return typeScore + _classPrivateFieldGet(this, _majorityVal);

    case Trick.flush:
      return typeScore + this.cardArr[0].suit * 100 + _classPrivateFieldGet(this, _weakestCard).cardId;

    default:
      throw "invalid hand";
  }
}

function _get_weakestCard() {
  return this.cardArr.reduce(function (prev, curr) {
    return prev.cardId < curr.cardId ? prev : curr;
  });
}

function _get_majorityVal() {
  return _classPrivateFieldGet(this, _sortedVals)[2];
}

function _get_isSameVal() {
  return allEqual(_classPrivateFieldGet(this, _sortedVals));
}

_defineProperty(Trick, "singleCard", 0);

_defineProperty(Trick, "pair", 1);

_defineProperty(Trick, "trio", 2);

_defineProperty(Trick, "quadro", 3);

_defineProperty(Trick, "flush", 4);

_defineProperty(Trick, "straight", 5);

_defineProperty(Trick, "fullHouse", 6);

_defineProperty(Trick, "quadroHouse", 7);

_defineProperty(Trick, "royalFlush", 8);

_defineProperty(Trick, "names", ["Single Card", "Pair", "Trio", "Quadro", "Flush", "Straight", "Full House", "Quadro Full House", "Royal Flush"]);

function allEqual(arr) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length;

  for (var i = start; i < end; i++) {
    if (arr[i] != arr[start]) return false;
  }

  return true;
}

function isAscending(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) return false;
  }

  return true;
}