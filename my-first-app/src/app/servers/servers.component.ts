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
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2']
  numberOfTunas = []
  showTuna = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  toggleTuna(){
    this.showTuna = !this.showTuna;
    this.numberOfTunas.push(this.numberOfTunas.length + 1)
    console.log(this.numberOfTunas);
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
}
