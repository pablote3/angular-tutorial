import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforAsynchComponent } from './ngfor-asynch.component';

describe('NgforAsynchComponent', () => {
  let component: NgforAsynchComponent;
  let fixture: ComponentFixture<NgforAsynchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforAsynchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforAsynchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
