import {Component, OnInit} from '@angular/core';
import {Game} from '../classes/game';
import {GameService} from '../game.service';

@Component({
    selector: 'app-rps-scoreboard',
    templateUrl: './rps-scoreboard.component.html',
    styleUrls: ['./rps-scoreboard.component.css']
})
export class RpsScoreboardComponent implements OnInit {
    game: Game;

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.game = this.gameService.getGame();
    }

}
