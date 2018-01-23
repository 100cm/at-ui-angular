import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoStepsComponent } from './at-demo-steps.component';

describe('AtDemoStepsComponent', () => {
  let component: AtDemoStepsComponent;
  let fixture: ComponentFixture<AtDemoStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
