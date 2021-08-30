import c from "./controller";
import Trick from "./Tricks";

test("controller", ()=>{
    c.startGame(4);
    let firstPlayer = c.state.currentPlayer;
    expect(c.state.noOfPlayers).toBe(4);
    expect(c.state.players.length).toBe(c.state.noOfPlayers);
    expect(c.state.players[c.state.currentPlayer].includes(0)).toBeTruthy();
    expect(c.canPlay(new Trick([0]))).toBeTruthy();
    expect(c.canPlay(new Trick([1]))).toBeFalsy();
    expect(c.canPlay(new Trick([0,1]))).toBeTruthy();
    c.play(new Trick([0,1]));
    expect(c.state.currentPlayer).not.toBe(firstPlayer);
    console.log(c.state.players[0]);
    expect(c.state.players[firstPlayer].length).toBe(11);

});

