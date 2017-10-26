
import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import {Observable} from "rxjs";
import {LoginService} from "./login/login.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private service: LoginService){
  }

  canActivate() : Observable<boolean> {
    console.log('AuthGuard#canActivate called');
    return Observable.of(this.service.isUserLoggedIn());
  }

}
