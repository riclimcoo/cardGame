import Card from './Card.js';
import Trick from './Tricks.js';

let selected = [];

let deck = document.getElementById("deck");
let trickBox = document.querySelector("#trickBox");
let scoreBox = document.querySelector('#scoreBox');
const selectedList = document.querySelector("#selectedList");

function renderCard(card){
    let element = document.createElement("div");
    // element.src = card.imagePath;
    element.className = "card";
    element.classList.add(`card${Card.SUITS[card.suit]}${Card.VALUES[card.val]}`);
    element.dataset.cardId = card.cardId;
    // element.innerText = `${card}`;
    element.addEventListener("click", e=>{
        toggleSelect(e.target);
    });
    deck.append(element);
}

function toggleSelect(element){
    let cardId = element.dataset.cardId;
    if (selected.includes(cardId))  deselectCard(element);
    else selectCard(element);
    trickBox.textContent=`${getTrick()}`;
    scoreBox.textContent = `Score: ${getTrick()?.score}`;
    selectedList.textContent = `Selected: ${selected}`;
}

function selectCard(element){
    let cardId = element.dataset.cardId;
    selected.push(cardId);
    element.classList.add("selected");
}

function deselectCard(element){
    let cardId = element.dataset.cardId;
    selected = selected.filter(x => x!=cardId);
    element.classList.remove("selected");
}

function getTrick(){
    try{
        let cardArr = selected.map(x => new Card(x));
        return new Trick(cardArr);
    }
    catch(err){
        return null;
    }
}

let deckArr= Card.generateDeck();
deckArr.forEach(renderCard);
