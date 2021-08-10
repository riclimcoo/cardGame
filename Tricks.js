export default class Trick{
    invalid = -1;
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
        if (hand.length < 0 || hand.length > 5) return invalidHand;
        if (hand.length == 1) return singleCard;
        handValues = hand.map(getVal);
        if (allEqual(handValues)){
            switch(hand.length){
            case 2:
                return this.pair;
            case 3:
                return this.trio;
            default:
                return this.quadro;
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
}