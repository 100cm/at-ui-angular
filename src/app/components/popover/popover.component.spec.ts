import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtPopoverModule } from './at-popover.module';

import { PopoverComponent } from './popover.component';

describe('PopoverComponent', () => {
  let component: PopoverTestComponent;
  let fixture: ComponentFixture<PopoverTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTestComponent ],
      imports: [ AtPopoverModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  template: ``
})
export class PopoverTestComponent {
  constructor() {}
}
