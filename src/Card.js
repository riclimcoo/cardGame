export default class Card {
    constructor(cardId) {
        this.cardId = Number(cardId);
    }
    static VALUES = [3,4,5,6,7,8,9,10,"J","Q","K","A",2]; 
    static SUITS = ["Clubs", "Spades", "Hearts", "Diamonds"];
    static longVALUES = ["Three", "Four", "Five", "Six", "Seven", 
        "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace", "Two"];

    get val(){
        return Math.floor(this.cardId/4);
    };

    get suit(){
        return this.cardId % 4;
    };

    get imagePath(){
        let suit = Card.SUITS[this.suit];
        let val = Card.VALUES[this.val];
        return "./Cards/card"+suit+val+".png";
    }

    static generateDeck(){
        let arr = [];
        for (let i = 0; i<52; i++) arr.push(new Card(i));
        return arr;
    }

    toString(){
        return `${Card.longVALUES[this.val]} of ${Card.SUITS[this.suit]}`;
    }

    get succVal(){
        return (this.val() + 1)%13;
    }
};
