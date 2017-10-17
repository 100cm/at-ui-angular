import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicInputComponent } from './demo-basic-input.component';

describe('DemoBasicInputComponent', () => {
  let component: DemoBasicInputComponent;
  let fixture: ComponentFixture<DemoBasicInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
