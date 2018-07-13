import { Component } from '@angular/core';
import * as Webstomp from 'webstomp-client';
import { Client} from 'webstomp-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webstomp';

  constructor() {
    const url = 'ws://ponyracer.ninja-squad.com/ws';
    const websocket: WebSocket = new WebSocket(url);
    const stompClient: Client = Webstomp.over(websocket);
    stompClient.connect({ login: null, passcode: null }, () => {
        stompClient.subscribe('player/2179', message => {
        const bodyAsJson = JSON.parse(message.body);
        this.title = bodyAsJson;
      });
    });
  }
}
