import Card from './Card';

export default class Trick{
    static singleCard = 0;
    static pair = 1;
    static trio = 2;
    static quadro = 3;
    static flush = 4;
    static straight = 5;
    static fullHouse = 6;
    static quadroHouse = 7;
    static royalFlush = 8;
    static names = ["Single Card", "Pair", "Trio", "Quadro",
        "Flush", "Straight", "Full House", "Quadro Full House", "Royal Flush"];

    constructor(cardArr){
        this.cardArr = cardArr;
        this.type = this.#getType();
        this.score = this.#calcScore();
    }

    beats(challenger){
        return (this.cardArr.length == challenger.cardArr.length && this.score > challenger.score);
    }

    toString(){
        return `${Trick.names[this.type]}: ${this.cardArr.map(c=>Card.stringify(c))}`;
    }

    // private methods

    #getType(){
        switch(this.cardArr.length){
            case 1:
                return Trick.singleCard;
            case 2:
                if (this.#isSameVal) return Trick.pair;
                break;
            case 3:
                if (this.#isSameVal) return Trick.trio;
                break;
            case 4:
                if (this.#isSameVal) return Trick.quadro;
                break;
            case 5:
                return this.#get5CardType();
            default:
                throw ("invalid hand");            
        }
    }

    #get5CardType(){
        if (this.#isFlush 
            && this.#isStraight)    return Trick.royalFlush;
        if (this.#isFlush)          return Trick.flush;
        if (this.#isStraight)       return Trick.straight;
        if (this.#isFullHouse)      return Trick.fullHouse;
        if (this.#isQuadHouse)      return Trick.quadroHouse;
        else                        throw "invalid hand";
    }

    get #isFullHouse(){
        let vals = this.#sortedVals;
        let hasTrio = (vals[0]==vals[1] && vals[1]==vals[2]) || (vals[2]==vals[3]&&vals[3]==vals[4]);
        let hasTwoPairs = (vals[0]==vals[1]) && (vals[3]==vals[4]);
        return hasTrio && hasTwoPairs;
    }

    get #isQuadHouse(){
        let vals = this.#sortedVals;
        let middle3AreSame = (vals[1]==vals[2] && vals[2]==vals[3]);
        let outerCardSame = (vals[0] == vals[2])||(vals[4]==vals[2]);
        return middle3AreSame && outerCardSame;
    }

    get #isStraight(){
        return isAscending(this.#sortedVals);
    }

    get #isFlush() {
        return allEqual(this.cardArr.map(c=> Card.suit(c)));
    }

    get #sortedVals(){
        return this.cardArr.map(c=>Card.val(c)).sort();
    }

    #calcScore(){
        let typeScore = this.type*1000;
        switch(this.type){
            case Trick.singleCard:
            case Trick.pair:
            case Trick.trio:
            case Trick.quadro:
            case Trick.straight:
            case Trick.royalFlush:
                return typeScore + this.#weakestCard;
            case Trick.fullHouse:
            case Trick.quadroHouse:
                return typeScore + this.#majorityVal;
            case Trick.flush:
                return typeScore + Card.suit(this.cardArr[0])*100 + this.#weakestCard;
            default:
                throw "invalid hand";
        }
    }

    get #weakestCard(){
        return Math.min(...this.cardArr);
    }

    get #majorityVal(){
        return this.#sortedVals[2];
    }

    get #isSameVal(){
        return allEqual(this.#sortedVals);
    }
}

function allEqual(arr, start=0, end=arr.length){
    for(let i = start; i<end; i++){
        if (arr[i] != arr[start]) return false;
    }
    return true;
}

function isAscending(arr){
    for (let i=0; i<arr.length-1; i++){
        if (arr[i]+1!==arr[i+1]) return false;
    }
    return true;
}
