const Card = {
    VALUES: [3,4,5,6,7,8,9,10,"J","Q","K","A",2],
    SUITS: ["Clubs", "Spades", "Hearts", "Diamonds"],
    longVALUES: ["Three", "Four", "Five", "Six", "Seven", 
        "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace", "Two"],

    val(id){
        return Math.floor(id/4);
    },

    suit(id){
        return id % 4;
    },

    imagePath(id){
        let suit = Card.SUITS[Card.suit(id)];
        let val = Card.VALUES[Card.val(id)];
        return "./Cards/card"+suit+val+".png";
    },

    generateDeck(){
        let arr = [];
        for (let i = 0; i<52; i++) arr.push(i);
        return arr;
    },

    stringify(id){
        return `${Card.longVALUES[Card.val(id)]} of ${Card.SUITS[Card.suit(id)]}`;
    }
};

export {Card as default};