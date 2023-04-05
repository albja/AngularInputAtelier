import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() dataEmitFromButton: EventEmitter<string> = new EventEmitter<string>();

  @Input() backgroundColor: string = "red"

  constructor() { }


  ngOnInit() { }
  sendDatatoApp(colorOfButton: string): void {
    this.dataEmitFromButton.emit(`le bouton ${colorOfButton} a été cliqué`);
  }
}
