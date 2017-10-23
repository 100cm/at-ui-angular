import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicPopoverComponent } from './demo-basic-popover.component';

describe('DemoBasicPopoverComponent', () => {
  let component: DemoBasicPopoverComponent;
  let fixture: ComponentFixture<DemoBasicPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
