import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../classes/player';
import {GameService} from '../game.service';

@Component({
    selector: 'app-rps-usercontrols',
    templateUrl: './rps-usercontrols.component.html',
    styleUrls: ['./rps-usercontrols.component.css']
})
export class RpsUsercontrolsComponent implements OnInit{
    handArray: Array<string>;
    @Input() player: Player;

    public select(selection) {
        this.player.select(selection);
        this.gameService.endRound();
    }

    constructor(private gameService: GameService) { }

    ngOnInit() {
        this.handArray = this.gameService.getHandsArray();
    }
}
