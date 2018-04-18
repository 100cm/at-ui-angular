import {Component, ElementRef, forwardRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment'
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'atDatetimePicker',
  template: `
    <atInput [ngModel]="atValue | atFormat: format" #timeinput (onFocus)="choosePicker()"
             (click)="choosePicker()"></atInput>
    <div *ngIf="show" class="over-flow-wrapper" [ngStyle]="{'top':cssTop}">
      <div class="at-datepicker">
        <div class="at-datepicker--panel">
          <div class="at-datepicker--panel--header">
            <div style="position: relative">
              <a *ngIf="atType == 'full'" (click)="preYear()" class="pre-year-btn">
              </a>
              <a *ngIf="atType == 'full'" (click)="preMonth()" class="pre-month-btn">
              </a>

              <a *ngIf="atType == 'year'" (click)="preCentury()" class="pre-year-btn">
              </a>


              <span class="current-select-label">
            <a (click)="setCal('month')" class="month-select">{{atMonth + 1}}月</a>
            <a (click)="setCal('year')" class="year-select">{{atYear}}年</a>
          </span>

              <a *ngIf="atType == 'full'" (click)="nextMonth()" class="next-month-btn">
              </a>
              <a (click)="nextYear()" class="next-year-btn">
              </a>

              <a *ngIf="atType == 'year'" (click)="nextCenury()" class="next-year-btn">
              </a>

            </div>
          </div>
          <div class="at-datepicker--panel--body">
            <atCalendar [ngStyle]="{display: mode =='date' ? 'block' : 'none' }" (_clickDate)="clickDate($event)" (_clickYear)="clickYear($event)"
                        (_clickMonth)="clickMonth($event)"
                        [format]="format"
                        [disableDate]="disableDate"
                        [atType]="atType"
                        [atYear]="atYear" [atMonth]="atMonth"
                        [showValue]="showValue"
                        [atValue]="atValue"></atCalendar>

            <atTime
              [ngStyle]="{display: mode =='time' ? 'block' : 'none' }"
              (selectHour)="selectHour($event)"
              (selectMinute)="selectMinutes($event)"
              (selectSecond)="selectSecond($event)"
              [selected_hour]="selected_hour"
              [selected_minutes]="selected_minutes"
              [selected_second]="selected_second"></atTime>

          </div>
        </div>
        <div class="at-datepicker--button">
          <a (click)="setMode('time')">选择时间</a>
          <a (click)="setMode('date')">选择日期</a>
        </div>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimepickerComponent),
      multi: true
    }
  ],

})
export class DatetimepickerComponent implements OnInit {

  constructor(private el: ElementRef) {
  }


  private _atType = 'full'

  show = false

  private cssTop

  mode = 'date'

  get atType(): string {
    return this._atType;
  }

  @Input()
  set atType(value: string) {
    this._atType = value;
  }

  private _atValue = null

  get atValue() {
    return this._atValue
  }

  _show_value

  set showValue(value) {
    if (value) {
      this._show_value = value
    }
  }

  get showValue() {
    return this._show_value
  }

  set atValue(value) {
    if (value) {
      this._atValue = value;
      this._show_value = value
    }
  }

  atYear = moment(this.atValue || this.showValue).year()

  atMonth = moment(this.atValue || this.showValue).month()

  selectedDate = moment(this.atValue).date();
  selectedYear = moment(this.atValue).year();
  selectedMonth = moment(this.atValue).month();


  private _selected_second
  private _selected_minutes
  private _selected_hour


  get selected_second(): number {
    return moment(this.atValue).second();
  }

  set selected_second(value: number) {
    this._selected_second = value;
  }

  get selected_minutes(): number {
    return moment(this.atValue).minutes();
  }

  set selected_minutes(value: number) {
    this._selected_minutes = value;
  }

  get selected_hour(): number {
    return moment(this.atValue).hour();
  }

  set selected_hour(value: number) {
    this._selected_hour = value;
  }

// ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  @Input() format = "YYYY-MM-DD"
  @Input() disableDate

  writeValue(value: any): void {
    if (value) {
      this.updateDate(value);
    }
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }


  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.show = false
    }
  }

  @ViewChild('timeinput') input: InputComponent

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
    this.updateDate(date.date)
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

  ngAfterViewInit() {
    // this.cssTop = this.input.inputField.nativeElement.offsetHeight + 'px'
  }

  clickMonth(month) {
    // this.atValue = moment(this.atValue).year(this.atYear).month(month.index).toDate();
    this.atMonth = month.index
    this.atType = 'full'
  }

  clickYear(year) {
    this.atYear = year
    this.atType = 'month'
  }

  setCal(s) {
    this.atType = s
  }

  preCentury() {
    this.atYear = this.atYear - 10
  }

  nextCenury() {
    this.atYear = this.atYear + 10
  }

  choosePicker() {
    this.show = true
  }

  selectHour(hour) {
    let time = moment(this.atValue)
    time.set('h', hour)
    this.atValue = time

    let change_date = this.atValue
    if (this.format) {
      change_date = change_date.format(this.format)
    }
    this.onChange(change_date)


  }

  selectMinutes(minute) {
    let time = moment(this.atValue)
    time.set('m', minute)
    this.atValue = time

    let change_date = this.atValue
    if (this.format) {
      change_date = change_date.format(this.format)
    }
    this.onChange(change_date)
  }

  selectSecond(second) {
    let time = moment(this.atValue)
    time.set('s', second)
    this.atValue = time

    let change_date = this.atValue
    if (this.format) {
      change_date = change_date.format(this.format)
    }
    this.onChange(change_date)
  }

  setMode(mode) {
    this.mode = mode
  }
}
