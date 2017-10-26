import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

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

  constructor(private route : ActivatedRoute) {
    this.name = 'Angular';
    this.firstName = 'John';
    route.paramMap.
      subscribe((params: ParamMap) => this.name = params.get('name'))

  }

  getName() {
    return this.firstName + ' ' + this.name
  }




}
