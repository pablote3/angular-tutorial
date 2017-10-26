import { Component, OnInit } from '@angular/core';
import {PersonServiceService} from "../person-service.service";
import {Observable} from "rxjs/Observable";
import {Person} from "../person.interface";

@Component({
  selector: 'app-ngfor-asynch',
  template: ` 
      <ul>
        <li *ngFor="let person of persons | async; index as i; even as even "
            [style.color]="even ? 'red' : 'black'"
        >
          {{  i + " " + even + " " + getDisplayName(person)  + " " + (person.birthDate | date: 'MM/dd/y') + " " + (person.address | accountNumber) }}
        </li>
      </ul>
      `
})
export class NgforAsynchComponent {

  persons : Observable<Person[]>;

  constructor(PersonServiceService: PersonServiceService) {
    this.persons = PersonServiceService.getList();
  }

  getDisplayName(person) {
    return person.name + " - Employer: " + person.company;
  }
}

export class AppComponent {
  show = true;
}
