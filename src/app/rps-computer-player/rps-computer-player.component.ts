import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {Player} from '../classes/player';
import {GameService} from '../game.service';

@Component({
    selector: 'app-rps-computer-player',
    templateUrl: './rps-computer-player.component.html',
    styleUrls: ['./rps-computer-player.component.css']
})
export class RpsComputerPlayerComponent implements OnInit, OnChanges {
    handArray: Array<string>;
    @Input() isLoopRunning: boolean;
    @Input() computerPlayer: Player;
    @Output() selected: EventEmitter<any> = new EventEmitter();
    currentValue = '';
    dificulty = [1000, 500, 250];
    interval = null;

    constructor(private gameService: GameService) { }

    setRandomValue = () => {
        this.currentValue = this.handArray[Math.floor(Math.random() * 3)];
    }

    startLoop = (dificulty = 1) => {
        this.interval = setInterval(this.setRandomValue, this.dificulty[dificulty]);
    }

    stopLoop = () => {
        clearInterval(this.interval);
        this.computerPlayer.select(this.currentValue);
        this.selected.emit(null);
    }

    ngOnChanges(simpleChanges) {
        if (simpleChanges.isLoopRunning) {
            if (!simpleChanges.isLoopRunning.currentValue && simpleChanges.isLoopRunning.previousValue) {
                this.stopLoop();
            } else if (simpleChanges.isLoopRunning.currentValue && !simpleChanges.isLoopRunning.previousValue) {
                this.startLoop();
            }
        }
    }

    ngOnInit() {
        this.handArray = this.gameService.getHandsArray();

        if (this.isLoopRunning) {
            this.startLoop();
        }
    }
}
