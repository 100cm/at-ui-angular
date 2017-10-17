import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStepNumberInputComponent } from './demo-step-number-input.component';

describe('DemoStepNumberInputComponent', () => {
  let component: DemoStepNumberInputComponent;
  let fixture: ComponentFixture<DemoStepNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStepNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStepNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
