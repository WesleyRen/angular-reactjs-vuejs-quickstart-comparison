import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hobby',
  template: `
    <li [id]="'hobby ' + hobbyInput"
        (click)="onHobbyClicked()">{{ indexInput + 1 }} : {{ hobbyInput }}</li>
  `
})

export class HobbyComponent {
  @Input() hobbyInput: string;
  @Input() indexInput: number;
  @Output() hobbyClicked = new EventEmitter<number>();

  onHobbyClicked() {
    this.hobbyClicked.emit(this.indexInput);
  }
}
