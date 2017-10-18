import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoPopoverComponent } from './at-demo-popover.component';

describe('AtDemoPopoverComponent', () => {
  let component: AtDemoPopoverComponent;
  let fixture: ComponentFixture<AtDemoPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
