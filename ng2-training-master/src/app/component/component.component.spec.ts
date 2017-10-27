import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComponent } from './component.component';
import {By} from "@angular/platform-browser";

describe('ComponentComponent', () => {
  let component: ComponentComponent;
  let fixture: ComponentFixture<ComponentComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('always true', () => {
    expect(true).toBe(true);
  });

  it('element should contain', () => {
    let p = fixture.debugElement.query(By.css("p")).nativeElement
    expect(p.textContent).toContain('component works!');
  });
})
