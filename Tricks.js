export default class Trick{
    invalidHand = -1;
    singleCard = 0;
    pair = 1;
    trio = 2;
    quadro = 3;
    flush = 4;
    straight = 5;
    fullHouse = 6;
    quadroHouse = 7;
    royalFlush = 8;
    names = ["Single Card", "Pair", "Trio", "Quadro",
        "Flush", "Straight", "Full House", "Quadro Full House", "Royal Flush"];

    getType(hand){
        switch(hand.length){
            case 1:
                return Trick.singleCard;
            case 2:
                if (allEqual(hand)) return Trick.pair;
            case 3:
                if (allEqual(hand)) return Trick.trio;
            case 4:
                if (allEqual(hand)) return Trick.quadro;
            case 5:
                return this.get5CardType(hand);
            default:
                return this.invalidHand;            
        }
    }

    get5CardType(hand){
        let isFlush = this.isFlush(hand);
        let isStraight = this.isStraight(hand);
        if (isFlush && isStraight) return this.royalFlush;
        if (isFlush) return this.flush;
        if (isStraight) return this.straight;
        if (this.isFullHouse(hand)) return this.fullHouse;
        if (this.isQuadHouse(hand)) return this.quadroHouse;
        return this.invalidHand;
    }

    isFullHouse(hand){
        let vals = hand.map(card => card.values);
        vals.sort();
        let hasTrio = (vals[0]==vals[1]==vals[2]) || (vals[2]==vals[3]==vals[4]);
        let hasTwoPairs = (vals[0]==vals[1]) && (vals[3]==vals[4]);
        return hasTrio && hasTwoPairs;
    }

    isQuadHouse(hand){
        let vals = hand.map(card => card.values);
        vals.sort();
        middle3AreSame = (vals[1]==vals[2]==vals[3]);
        outerCardSame = (vals[0] == vals[2])||(vals[4]==vals[2]);
        return middle3AreSame && outerCardSame;
    }

    isStraight(hand){
        let vals = hand.map(card => card.values);
        vals.sort();
        for (let i=0; i<vals.length-1; i++){
            if (vals[i]!==vals[i+1]+1) return false;
        }
        return true;
    }

    isFlush(hand) {
        allEqual(hand.map(card => card.suit));
    }
}

function allEqual(arr, start=0, end=arr.length){
    for(let i = start; i<end; i++){
        if (arr[i] != arr[start]) return false;
    }
    return true;
}