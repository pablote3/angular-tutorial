import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <app-zipcode-entry></app-zipcode-entry>
    <app-current-conditions></app-current-conditions>
  `
})
export class AppComponent {
  title = 'app';
}
