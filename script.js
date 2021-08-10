import Card from './Card.js';


let selected = [];

function allEqual(arr, start=0, end=arr.length){
    for(let i = start; i<end; i++){
        if (arr[i] != arr[start]) return false;
    }
    return true;
}

let deck = document.getElementById("deck");

function insertCard(card){
    let element = document.createElement("img");
    element.src = card.imagePath;
    element.className = "card";
    element.id = card.cardId;
    element.addEventListener("click", ()=>{
        element.classList.toggle("selected");});
        selected.push(card.cardId);
    deck.appendChild(element);
}


let deckArr= Card.generateDeck();
deckArr.forEach(insertCard);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function isAscending(arr){
    arr.sort();
    for (let i = 0; i<arr.length; i++){
        if (arr[i+1] !== arr[i]+1) return false;
    }
    return true;
}