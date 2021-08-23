"use strict";

var _Card = _interopRequireDefault(require("./Card.js"));

var _Tricks = _interopRequireDefault(require("./Tricks.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const textureAtlas = require('textureAtlas.json');
var selected = [];
var deck = document.getElementById("deck");
var trickBox = document.querySelector("#trickBox");
var scoreBox = document.querySelector('#scoreBox');
var selectedList = document.querySelector("#selectedList");

function renderCard(card) {
  var element = document.createElement("div"); // element.src = card.imagePath;

  element.className = "card";
  element.classList.add("card".concat(_Card["default"].SUITS[card.suit]).concat(_Card["default"].VALUES[card.val]));
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
      return new _Card["default"](x);
    });
    return new _Tricks["default"](cardArr);
  } catch (err) {
    return null;
  }
}

var deckArr = _Card["default"].generateDeck();

deckArr.forEach(renderCard);