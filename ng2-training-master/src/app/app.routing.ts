import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgifComponent } from './ngif/ngif.component';
import {HelloComponent} from "./hello/hello.component";
import {HttpComponent} from "./http/http.component";
import {LoginComponent} from "./router/login/login.component";
import {AuthGuard} from "./router/auth-guard-service";

const appRoutes: Routes = [
  {
    path: 'if', component: NgifComponent, canActivate: [AuthGuard]
  },
  {
    path: 'hello/:name', component: HelloComponent, canActivate: [AuthGuard]
  },
  {
    path: 'http', component: HttpComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
