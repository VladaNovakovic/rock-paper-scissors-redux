import {Injectable} from '@angular/core';
import {Game} from './classes/game';

@Injectable()
export class GameService {
    game: Game;

    constructor() {
        this.game = new Game('player 1', 'player 2');
    }

    newGame(): Game {
        console.log('game service - new game');
        this.game = new Game('player 1', 'player 2');

        return this.game;
    }

    getGame(): Game {
        return this.game;
    }

    stopGame(): void {
        console.log('game service - stop game');
    }

    saveGame(): void {
        console.log('game service - save game');
    }

    getHandsArray(): Array<string> {
        return this.game.selection;
    }

    startRound(): void {
        console.log('game service - start round');
    }

    nextRound(): void {
        console.log('game service - next round');
        this.game.startRound();
    }

    newRoundPvP(): void {
        console.log('game service - new round - player vs player');
    }

    newRoundPvC(): void {
        console.log('game service - new round - player vs computer');
    }

    endRound(): void {
        console.log('game service - end round');
        this.game.endRound();
    }

    getPlayerOne(): void {
        console.log('game service - get player one');
    }

    getPlayerTwo(): void {
        console.log('game service - get player two');
    }

    setPlayerOneSelection(playerOneSelection: string): void {
        this.game.playerOne.select(playerOneSelection);
    }
}
