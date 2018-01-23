import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicStepsComponent } from './demo-basic-steps.component';

describe('DemoBasicStepsComponent', () => {
  let component: DemoBasicStepsComponent;
  let fixture: ComponentFixture<DemoBasicStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
