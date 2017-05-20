import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies: string[] = ['fishing', 'cooking', 'napping'];
  newHobby: string = '';
  messageWhenDelete = '';
  hobbyWasDeleted: boolean = false;

  addHobby() {
    if (this.newHobby != '') {
      this.hobbies.push(this.newHobby);
      this.hobbyWasDeleted = false;
    }
  }

  removeHobby(index: number) {
    let hobby = this.hobbies[index];
    this.hobbies.splice(index, 1);
    this.hobbyWasDeleted = true;
    this.messageWhenDelete = "'" + hobby + "' was deleted";
  }

  getColor() {
    if (this.hobbies.length < 3) return 'yellow';
    else if (this.hobbies.length === 3) return 'green';
    else return 'orange';
  }
}
