import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {GameService} from './game.service';

import {AppComponent} from './app.component';
import {RpsScoreboardComponent} from './rps-scoreboard/rps-scoreboard.component';
import {RpsUsercontrolsComponent} from './rps-usercontrols/rps-usercontrols.component';
import {RpsComputerPlayerComponent} from './rps-computer-player/rps-computer-player.component';

@NgModule({
    declarations: [
        AppComponent,
        RpsScoreboardComponent,
        RpsUsercontrolsComponent,
        RpsComputerPlayerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
