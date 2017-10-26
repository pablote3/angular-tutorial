import { Component } from '@angular/core';
import {PersonServiceService} from "../person-service.service";

@Component({
  selector: 'app-ngfor',
  template: ` 
      <ul>
        <li *ngFor="let person of persons; index as i; even as even "
            [style.color]="even ? 'red' : 'black'"
        >
          {{  i + " " + even + " " + getDisplayName(person)  + " " + (person.birthDate | date: 'MM/dd/y') + " " + (person.address | accountNumber) }}
        </li>
      </ul>
      `
})
export class NgforComponent {
  public persons = [];

  constructor(PersonServiceService: PersonServiceService) {
    PersonServiceService.getList().subscribe(data => this.persons = data);
  }

  getDisplayName(person) {
//    console.log("personName = " + person.name);
    return person.name + " - Employer: " + person.company;
  }
}

export class AppComponent {
  show = true;
}
