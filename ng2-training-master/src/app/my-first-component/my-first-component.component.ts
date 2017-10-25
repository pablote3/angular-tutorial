import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css'],
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <p>my component is alright</p>
    </div>
  `
})
export class MyFirstComponentComponent implements OnInit {
  name : string;
  constructor() {
    this.name = 'Pablote';
  }

  ngOnInit() {
  }

}
