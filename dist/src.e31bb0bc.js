// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = /*#__PURE__*/function () {
  function Card(cardId) {
    _classCallCheck(this, Card);

    this.cardId = Number(cardId);
  }

  _createClass(Card, [{
    key: "val",
    get: function get() {
      return Math.floor(this.cardId / 4);
    }
  }, {
    key: "suit",
    get: function get() {
      return this.cardId % 4;
    }
  }, {
    key: "imagePath",
    get: function get() {
      var suit = Card.SUITS[this.suit];
      var val = Card.VALUES[this.val];
      return "./Cards/card" + suit + val + ".png";
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(Card.longVALUES[this.val], " of ").concat(Card.SUITS[this.suit]);
    }
  }, {
    key: "succVal",
    get: function get() {
      return (this.val() + 1) % 13;
    }
  }], [{
    key: "generateDeck",
    value: function generateDeck() {
      var arr = [];

      for (var i = 0; i < 52; i++) {
        arr.push(new Card(i));
      }

      return arr;
    }
  }]);

  return Card;
}();

exports.default = Card;

_defineProperty(Card, "VALUES", [3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2]);

_defineProperty(Card, "SUITS", ["Clubs", "Spades", "Hearts", "Diamonds"]);

_defineProperty(Card, "longVALUES", ["Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace", "Two"]);

;
},{}],"Tricks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

exports.default = Trick;

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
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _Card = _interopRequireDefault(require("./Card.js"));

var _Tricks = _interopRequireDefault(require("./Tricks.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selected = [];
var deck = document.getElementById("deck");
var trickBox = document.querySelector("#trickBox");
var scoreBox = document.querySelector('#scoreBox');
var selectedList = document.querySelector("#selectedList");

function renderCard(card) {
  var element = document.createElement("div"); // element.src = card.imagePath;

  element.className = "card";
  element.classList.add("card".concat(_Card.default.SUITS[card.suit]).concat(_Card.default.VALUES[card.val]));
  element.dataset.cardId = card.cardId; // element.innerText = `${card}`;

  element.addEventListener("click", function (e) {
    toggleSelect(e.target);
  });
  deck.append(element);
}

function toggleSelect(element) {
  var _getTrick;

  var cardId = element.dataset.cardId;
  if (selected.includes(cardId)) deselectCard(element);else selectCard(element);
  trickBox.textContent = "".concat(getTrick());
  scoreBox.textContent = "Score: ".concat((_getTrick = getTrick()) === null || _getTrick === void 0 ? void 0 : _getTrick.score);
  selectedList.textContent = "Selected: ".concat(selected);
}

function selectCard(element) {
  var cardId = element.dataset.cardId;
  selected.push(cardId);
  element.classList.add("selected");
}

function deselectCard(element) {
  var cardId = element.dataset.cardId;
  selected = selected.filter(function (x) {
    return x != cardId;
  });
  element.classList.remove("selected");
}

function getTrick() {
  try {
    var cardArr = selected.map(function (x) {
      return new _Card.default(x);
    });
    return new _Tricks.default(cardArr);
  } catch (err) {
    return null;
  }
}

var deckArr = _Card.default.generateDeck();

deckArr.forEach(renderCard);
},{"./Card.js":"Card.js","./Tricks.js":"Tricks.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37417" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map