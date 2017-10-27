import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {WeatherService} from "../weather.service";
import {parseJson} from "@angular-devkit/core";

@Component({
  selector: 'app-current-conditions',
  template: ` 
    <div>
      <ul>
        {{ getDisplayName() | json}}
      </ul>
    </div>
      `
})
export class CurrentConditionsComponent implements OnInit {

  public weather : string;
  constructor(WeatherService: WeatherService) {
      WeatherService.getString().subscribe(res => {
        this.weather = res;
      });
  }

  getDisplayName() {
    debugger;
    return this.weather;
  }

  ngOnInit() {
  }

}
