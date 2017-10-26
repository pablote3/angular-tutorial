import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BindingsComponent } from './bindings/bindings.component';
import * as comm from './communication';
import {HidingComponent} from "./hiding/hiding.component";
import {HttpComponent} from "./http/http.component";
import {ModelComponent} from "./model/model.component";
import {NgifComponent} from "./ngif/ngif.component";
import {NgswitchComponent} from "./ngswitch/ngswitch.component";
import { FormsComponent } from './forms/forms.component';
import { routing } from './app.routing';
import { RouterComponent } from './router/router.component';
import { JasmineTestComponent } from './jasmine-test/jasmine-test.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';
import {AuthGuard} from "./router/auth-guard-service";
import {LoginService} from "./router/login/login.service";
import {LoginComponent} from "./router/login/login.component";
import {ObservableExampleComponent} from "./observable-example/observable-example.component";
import {NgforComponent} from "./ngfor/ngfor.component";
import { ListPostsComponent } from './observable-example/list-posts/list-posts.component';
import {PostsService} from "./observable-example/list-posts/posts.service";
import { NgClassComponent } from './ng-class/ng-class.component';
import {HttpClientModule} from "@angular/common/http";
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { LoaderComponent } from './popup-window/loader/loader.component';
import { HeaderComponent } from './header/header.component';
import {LoaderViewChildComponent} from "./popup-window/loader/loader-viewchild.component";
import {HttpObservableComponent} from "./mock-stub-test/http.observable.component";
import {EvenUppercasePipe} from "./pipe-solution/even-uppercase.pipe";
import {SpinnerComponent} from "./spinner/spinner.component";
import {TwoWayDataBindingExampleComponent} from "./two-way-data-binding-example/two-way-data-binding-example.component";
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { HighlightDirective } from './highlight.directive';
import { AccountNumberPipe } from './account-number.pipe';
import { PersonServiceService } from './person-service.service';
import { NgforAsynchComponent } from './ngfor-asynch/ngfor-asynch.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, BindingsComponent,
    comm.CommunicationComponent, comm.CommunicationComponent2, comm.HelloWorld, comm.HelloWorld2,
    HidingComponent, HttpComponent, ModelComponent, EvenUppercasePipe, HttpObservableComponent,
    NgifComponent, NgswitchComponent, FormsComponent, RouterComponent, JasmineTestComponent, TwoWayDataBindingExampleComponent,
    PromiseExampleComponent, ObservableExampleComponent, LoginComponent, NgforComponent, ListPostsComponent,
    NgClassComponent, PopupWindowComponent, LoaderComponent, HeaderComponent, SpinnerComponent,
    LoaderViewChildComponent,
    MyFirstComponentComponent,
    HighlightDirective,
    AccountNumberPipe,
    NgforAsynchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, LoginService, PostsService, PersonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
