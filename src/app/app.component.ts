import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Input/Output';
  receiveColor?: string;
  constructor() { }

  ngOnInit(): void {

  }
  dataReceiveFromButton(event: string): void {
    this.receiveColor = event;

  }
}
