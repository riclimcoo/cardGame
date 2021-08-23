"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    key: "VALUES",
    get: function get() {
      return [3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", 2];
    }
  }, {
    key: "SUITS",
    get: function get() {
      return ["Clubs", "Spades", "Hearts", "Diamonds"];
    }
  }, {
    key: "longVALUES",
    get: function get() {
      ["Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace", "Two"];
    }
  }, {
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

exports["default"] = Card;
;