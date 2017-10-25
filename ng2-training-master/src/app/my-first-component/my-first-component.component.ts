import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css'],
  template: `
    <div>
      <p>my component is alright</p>
    </div>
  `
})
export class MyFirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
