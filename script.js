const SUITS = ["Clubs", "Spades", "Hearts", "Diamonds"];
const VALUES = [3,4,5,6,7,8,9,10,"J","Q","K","A",2];
const tricks = {
    invalid : -1,
    singleCard: 0,
    pair: 1,
    trio: 2,
    quadro: 3,
    flush: 4,
    straight: 5,
    fullHouse: 6,
    quadroHouse: 7,
    royalFlush: 8,
    names: ["Single Card", "Pair", "Trio", "Quadro",
    "Flush", "Straight", "Full House", "Quadro Full House", "Royal Flush"]
}
let selected = [];

function allEqual(arr, start=0, end=arr.length){
    for(let i = start; i<end; i++){
        if (arr[i] != arr[start]) return false;
    }
    return true;
}

let deck = document.getElementById("deck");

function getType(hand){
    if (hand.length < 0 || hand.length > 5) return invalidHand;
    if (hand.length == 1) return singleCard;
    handValues = hand.map(getVal);
    if (allEqual(handValues)){
        switch(hand.length){
        case 2:
            return tricks.pair;
        case 3:
            return tricks.trio;
        case 4:
            return tricks.quadro;
        default:
            return tricks.invalid;
        }
    }
    if (hand.length != 5) return tricks.invalid;
    handValue.sort();
    isQuadroHouse = allEqual(handValue,0,4) || allEqual(handValue,1,5);
    if (isQuadroHouse) return tricks.quadroHouse;
    isFull = (allEqual(handValue,0,3) && allEqual(handValue,3,5)) ||
    (allEqual(handValue,0,2) && allEqual(handValue(2,5)));
    if (isFull) return tricks.fullHouse;
    isStraight = isAscending(handValues);
    isFlush = allEqual(hand.map(getSuit));
    if (isFlush && isStraight) return tricks.royalFlush;
    else if(isFlush) return tricks.flush;
    else if(isStraight) return tricks.straight;
    else return tricks.invalid;
}

function getSuit(cardId){
    return Math.floor(cardId/13);
}

function getVal(cardId){
    return cardId % 13;
}

function cardToText(cardId){
    let suit = SUITS[getSuit(cardId)];
    let val = VALUES[getVal(cardId)];
    return "Cards/card"+suit+val+".png";
}

function insertCard(cardId){
    let element = document.createElement("img");
    element.src = cardToText(cardId);
    element.className = "card";
    element.id = cardId;
    element.addEventListener("click", ()=>{
        element.classList.toggle("selected");});
        selected.push(cardId);
    deck.appendChild(element);
}


let deckArr= [];
for (let i = 0; i<52; i++) deckArr.push(i);
// shuffleArray(deckArr);
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