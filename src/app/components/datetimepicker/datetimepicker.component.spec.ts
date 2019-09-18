import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AtDatetimepickerModule } from './at-datetimepicker.module';
import { DatetimepickerComponent } from './datetimepicker.component';

describe('DatetimepickerComponent', () => {
  let component: DatetimepickerTestComponent;
  let fixture: ComponentFixture<DatetimepickerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimepickerTestComponent ],
      imports: [ FormsModule, AtDatetimepickerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimepickerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  template: ``
})
class DatetimepickerTestComponent {

  constructor() {
  }
}
