import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPositionPopoverComponent } from './demo-position-popover.component';

describe('DemoPositionPopoverComponent', () => {
  let component: DemoPositionPopoverComponent;
  let fixture: ComponentFixture<DemoPositionPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPositionPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPositionPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
