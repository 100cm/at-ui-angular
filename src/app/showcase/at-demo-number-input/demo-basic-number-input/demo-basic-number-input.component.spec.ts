import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicNumberInputComponent } from './demo-basic-number-input.component';

describe('DemoBasicNumberInputComponent', () => {
  let component: DemoBasicNumberInputComponent;
  let fixture: ComponentFixture<DemoBasicNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
