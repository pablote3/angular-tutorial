import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
      <div [ngSwitch]="page">
        
        <p *ngSwitchCase="1">Viewing content of first page</p>
        <app-hello *ngSwitchCase="2">Viewing content of second page</app-hello>
        <p *ngSwitchCase="3">Viewing content of third page</p>
        <p *ngSwitchDefault> No page selected</p>
      </div>
      <div>
        <button appHighlight="" (click)="page = 1">Page 1</button>
        <button (click)="page = 2">Page 2</button>
        <button (click)="page = 3">Page 3</button>
      </div>
  `
})
export class NgswitchComponent {

  page = null;

}
