import Card from "./Card.js";
import Trick from "./Tricks.js";

const state = {
    currentPlayer: 0,
    noOfPlayers: 2,
    players: [],
    top: undefined
}

export default {
    get state(){return state},
    startGame(noOfPlayers=2){
        state.noOfPlayers = noOfPlayers;

        // Populate player hands
        const handSize = 52/noOfPlayers;
        const deck = Card.generateDeck();
        for (let i=0; i<noOfPlayers; i++){
            state.players[i] = deck.slice(handSize*i,handSize*(i+1));
            if (state.players[i].includes(0)) state.currentPlayer=i; //player with 3clubs goes first
        }
        console.log(state.players);
        let arr=[];
    },

    canPlay(trick){
        if(state.top) return trick.beats(state.top);
        else return trick.cardArr.includes(0); // First play must include 3 of clubs.
    },

    play(trick){
        if(!this.canPlay(trick)) throw "you cannot play that trick";
        state.top = trick;
        state.players[state.currentPlayer] = state.players[state.currentPlayer].filter(val=>!trick.cardArr.includes(val));
        this.nextPlayer();
    },

    nextPlayer(){
        state.currentPlayer = (state.currentPlayer+1)%state.noOfPlayers;
    }
}