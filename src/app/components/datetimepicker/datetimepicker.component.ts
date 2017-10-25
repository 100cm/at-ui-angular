import {Component, forwardRef, Input, OnInit} from '@angular/core';
import * as moment from 'moment'
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'atDatetimePicker',
  templateUrl: './datetimepicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimepickerComponent),
      multi: true
    }
  ],
  styleUrls: ['./datetimepicker.component.css']
})
export class DatetimepickerComponent implements OnInit {

  constructor() {
  }


  private _atValue = null

  get atValue() {
    return this._atValue || new Date();
  }

  set atValue(value) {
    this._atValue = value;
  }

  atYear = moment(this.atValue).year()

  atMonth = moment(this.atValue).month()

  selectedDate = moment(this.atValue).date();
  selectedYear = moment(this.atValue).year();
  selectedMonth = moment(this.atValue).month();

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  @Input() format

  writeValue(value: any): void {
    this.updateDate(value);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }


  ngOnInit() {
  }

  preYear() {
    this.atYear = this.atYear - 1;
  }

  nextYear() {
    this.atYear = this.atYear + 1;
  }

  preMonth() {
    if (this.atMonth - 1 < 0) {
      this.atMonth = 11;
      this.preYear();
    } else {
      this.atMonth = this.atMonth - 1;
    }
  }

  nextMonth() {
    if (this.atMonth + 1 > 11) {
      this.atMonth = 0;
      this.nextYear();
    } else {
      this.atMonth = this.atMonth + 1;
    }
  }

  clickDate(date) {
    this.updateDate(date)
    let change_date = this.atValue
    if (this.format) {
      change_date = change_date.format(this.format)
    }
    this.onChange(change_date)
  }

  updateDate(value) {
    if (this.atValue === value) {
      return;
    }
    this.atValue = value;
    this.selectedMonth = moment(this.atValue).month();
    this.selectedYear = moment(this.atValue).year();
    this.selectedDate = moment(this.atValue).date();
    this.atYear = moment(this.atValue).year();
    this.atMonth = moment(this.atValue).month();

  }

}
