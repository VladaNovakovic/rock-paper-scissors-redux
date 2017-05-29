import {Component, OnInit} from '@angular/core';
import {Game} from './classes/game';
import {GameService} from './game.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    game: Game;

    constructor(private gameService: GameService) {
        this.game = gameService.newGame();
    }

    startLoop = () => {
        this.gameService.nextRound();
    }

    startNewGame = () => {
        this.game = this.gameService.newGame();
    }

    ngOnInit() {
        console.log('Hello Game');
    }
}
