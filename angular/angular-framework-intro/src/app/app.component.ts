import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Wes';
  message = '';
  elements: number[] = [];

  changeName() {
    this.name = 'Anna';
  }

  addElements() {
    this.elements.push(this.elements.length + 1);
  }

  getColor(element: number) {
    return element % 2 == 0 ? 'green' : 'red';
  }

  onUserClicked(userName: string) {
    alert(userName);
  }
}
