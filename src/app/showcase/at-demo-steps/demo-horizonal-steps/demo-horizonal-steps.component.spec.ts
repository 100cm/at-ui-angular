import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHorizonalStepsComponent } from './demo-horizonal-steps.component';

describe('DemoHorizonalStepsComponent', () => {
  let component: DemoHorizonalStepsComponent;
  let fixture: ComponentFixture<DemoHorizonalStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHorizonalStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHorizonalStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
