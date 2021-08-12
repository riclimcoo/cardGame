import Card from './Card.js';
import Trick from './Tricks.js';

let selected = [];

let deck = document.getElementById("deck");
let trickBox = document.querySelector("#trickBox");

function renderCard(card){
    let element = document.createElement("img");
    element.src = card.imagePath;
    element.className = "card";
    element.dataset.cardId = card.cardId;
    element.addEventListener("click", e=>{
        toggleSelect(e.target);
        trickBox.textContent=getTrickofSelected();
        });
    deck.appendChild(element);
}

function toggleSelect(element){
    let cardId = element.dataset.cardId;
    if (selected.includes(cardId))  deselectCard(element);
    else selectCard(element);
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

function getTrickofSelected(){
    try{
        let cardArr = selected.map(x => new Card(x));
        return `${new Trick(cardArr)}`;
    }
    catch(err){
        return "Invalid trick";
    }
}

let deckArr= Card.generateDeck();
deckArr.forEach(renderCard);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function toggleElement(arr, val){
    arr=[];
    if (arr.includes(val)) arr.re
}