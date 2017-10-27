import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WeatherService {

  constructor(private http : HttpClient) { }

  getString() : Observable<string> {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?zip=95822,us&units=imperial&APPID=5a4b2d457ecbef9eb2a71e480b947604");
//    return this.http.get("http://interstate21.com/demos/angular/weather.php");
  }

}
