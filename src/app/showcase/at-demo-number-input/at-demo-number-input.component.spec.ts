import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoNumberInputComponent } from './at-demo-number-input.component';

describe('AtDemoNumberInputComponent', () => {
  let component: AtDemoNumberInputComponent;
  let fixture: ComponentFixture<AtDemoNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
