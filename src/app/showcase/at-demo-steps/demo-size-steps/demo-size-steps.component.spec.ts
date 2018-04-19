import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSizeStepsComponent } from './demo-size-steps.component';

describe('DemoSizeStepsComponent', () => {
  let component: DemoSizeStepsComponent;
  let fixture: ComponentFixture<DemoSizeStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSizeStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSizeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
