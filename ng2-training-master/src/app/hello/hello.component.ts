import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <h2>Hello {{getName()}}</h2>
    </div>
  `
})
export class HelloComponent {

  name : string;
  firstName: string;

  constructor() {
    this.name = 'Angular';
    this.firstName = 'John'
  }

  getName() {
    return this.firstName + ' ' + this.name
  }

}
