import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]'
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Two way binding'
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  resetUserName(){
    this.userName = '';
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
