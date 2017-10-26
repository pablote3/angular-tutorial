import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-hello></app-hello>
      <app-my-first-component></app-my-first-component>
      <app-model></app-model>
      
      <!--
      Person Service
      <app-ngfor></app-ngfor>
      -->
      
      asynch
      <app-ngfor-asynch></app-ngfor-asynch>
      <!-- app-hiding></app-hiding -->
    
      <app-ngswitch></app-ngswitch>
      <app-ng-class></app-ng-class>
  `
})

export class AppComponent {

}
