import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimepickerComponent } from './datetimepicker.component';

describe('DatetimepickerComponent', () => {
  let component: DatetimepickerComponent;
  let fixture: ComponentFixture<DatetimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
