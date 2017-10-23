import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoContentPopoverComponent } from './demo-content-popover.component';

describe('DemoContentPopoverComponent', () => {
  let component: DemoContentPopoverComponent;
  let fixture: ComponentFixture<DemoContentPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoContentPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoContentPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
