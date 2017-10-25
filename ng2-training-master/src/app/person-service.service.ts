import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Person} from "./person.interface";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PersonServiceService {
  constructor(private http : HttpClient) { }

  getList() : Observable<Person[]> {
    return this.http.get("http://localhost:8080/persons.json")
  }
}

