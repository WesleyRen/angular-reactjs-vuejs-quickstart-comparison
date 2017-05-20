import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hobby',
  template: `
    <li [id]="'hobby ' + hobby"
        (click)="onHobbyClicked()">{{ index + 1 }} : {{ hobby }}</li>
  `
})

export class HobbyComponent {
  @Input() hobby: string;
  @Input() index: number;
  @Output() hobbyClicked = new EventEmitter<number>();

  onHobbyClicked() {
    this.hobbyClicked.emit(this.index);
  }
}
