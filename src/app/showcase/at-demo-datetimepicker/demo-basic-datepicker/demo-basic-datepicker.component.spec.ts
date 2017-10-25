import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicDatepickerComponent } from './demo-basic-datepicker.component';

describe('DemoBasicDatepickerComponent', () => {
  let component: DemoBasicDatepickerComponent;
  let fixture: ComponentFixture<DemoBasicDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
