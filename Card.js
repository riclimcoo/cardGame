export default class Card {
    constructor(cardId) {
        this.cardId = cardId;
    }
    static SUITS = ["Clubs", "Spades", "Hearts", "Diamonds"];
    static VALUES = [3,4,5,6,7,8,9,10,"J","Q","K","A",2];

    get suit(){
        return Math.floor(this.cardId/13);
    };

    get val(){
        return this.cardId % 13;
    };

    get imagePath(){
        let suit = Card.SUITS[this.suit];
        let val = Card.VALUES[this.val];
        return "Cards/card"+suit+val+".png";
    }

    static generateDeck(){
        let arr = [];
        for (let i = 0; i<52; i++) arr.push(new Card(i));
        return arr;
    }

    toString(){
        return `${Card.VALUES[this.val]} of ${Card.SUITS[this.suit]}`;
    }

    get succVal(){
        return (this.val() + 1)%13;
    }
};
