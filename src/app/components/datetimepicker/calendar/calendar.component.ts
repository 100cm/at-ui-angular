import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import * as moment from 'moment';
import {Moment}    from "moment";
import {AtDate}    from "../at-day";
import 'moment/locale/zh-cn';

@Component({
             selector: 'at-calendar',
             template: `
               <table *ngIf="atType =='full'" class="at-calendar-table">
                 <thead>
                 <th class="column-header"><span class="column-header-inner">日</span></th>
                 <th class="column-header"><span class="column-header-inner">一</span></th>
                 <th class="column-header"><span class="column-header-inner">二</span></th>
                 <th class="column-header"><span class="column-header-inner">三</span></th>
                 <th class="column-header"><span class="column-header-inner">四</span></th>
                 <th class="column-header"><span class="column-header-inner">五</span></th>
                 <th class="column-header"><span class="column-header-inner">六</span></th>
                 </thead>
                 <tbody>
                 <tr *ngFor="let week of weeks">
                   <td
                     *ngFor="let day of week.days" class="at-date-cell"
                     (click)="clickDay(day)"
                     [ngClass]="{'at-date-cell--last-month':day.isLastMonth,
'at-date-cell--selected':day.isSelectedDay ,
'at-date-cell--today':day.isCurrentDay,
'at-date-cell--next-month':day.isNextMonth,
'at-date-cell--disabled':day.disabled}">
                     <div class="at-date">{{day.number}}</div>
                   </td>
                 </tr>
                 </tbody>
               </table>

               <table *ngIf="atType=='month'" class="at-calendar-table">
                 <tbody>
                 <tr *ngFor="let month of months">
                   <td
                     *ngFor="let single of month" class="at-month-cell"
                     (click)="clickMonth(single)"
                     [ngClass]="{
              'at-date-cell--selected':single.isSelectedMonth ,
              'at-date-cell--today':single.isCurrentMonth}">
                     <div class="at-date">{{single.name}}</div>
                   </td>
                 </tr>
                 </tbody>
               </table>

               <table *ngIf="atType=='year'" class="at-calendar-table">
                 <tbody>
                 <tr *ngFor="let section of years">
                   <td
                     *ngFor="let year of section" class="at-month-cell"
                     (click)="clickYear(year.year)"
                     [ngClass]="{
              'at-date-cell--selected':year.isSelectedYear ,
              'at-date-cell--today':year.isCurrentYear}">
                     <div class="at-date">{{year.year}}</div>
                   </td>
                 </tr>
                 </tbody>
               </table>



             `,

           })
export class CalendarComponent implements OnInit {


  @Output() _clickMonth: EventEmitter<any> = new EventEmitter();
  @Output() _clickYear: EventEmitter<any>  = new EventEmitter();

  constructor() {
  }

  @Output() _clickDate: EventEmitter<any> = new EventEmitter()

  @Input()
  set disableDate(value) {
    this._disabledDate = value
    this.buildCalendar()
  }

  get disableDate() {
    return this._disabledDate
  }

  _show_value

  @Input()
  set showValue(value) {
    this._show_value = value
    this.buildCalendar()
  }

  get showValue() {
    return this._show_value || new Date()
  }


  monthName = []
  _disabledDate

  @Input() private
           _atType: 'full' | 'month' | 'year' = 'full'


  get atType() {
    return this._atType;
  }

  @Input()
  set atType(value) {
    this._atType = value;
    this.buildCalendar()
  }

  private _weeks: Array<any> = []

  private _months: Array<any> = []

  private _years: Array<any> = []


  get years(): Array<any> {
    return this._years;
  }

  set years(value: Array<any>) {
    this._years = value;
  }

  get months(): Array<any> {
    return this._months;
  }

  set months(value: Array<any>) {
    this._months = value;
  }


  get atValue() {
    return this._atValue || new Date();
  }

  @Input()
  set atValue(value) {
    this._atValue = value;
    let day       = value || new Date()
    this.atMonth  = moment(day).month()
    this.atYear   = moment(day).year()
    this.buildCalendar()
  }

  private _atValue
  private _atYear  = moment(new Date()).year()
  private _atMonth = moment(new Date()).month()
  private _atDay


  get weeks(): Array<any> {
    return this._weeks;
  }

  set weeks(value: Array<any>) {
    this._weeks = value;
  }

  get atYear(): number {
    return this._atYear;
  }

  @Input()
  set atYear(value: number) {
    this._atYear = value;
    this.buildCalendar()
  }

  get atMonth(): number {

    return this._atMonth;
  }

  @Input() format: string

  @Input()
  set atMonth(value: number) {
    this._atMonth = value;
    this.buildCalendar()
  }

  get atDay(): number {
    return this._atDay;
  }

  @Input()
  set atDay(value: number) {
    this._atDay = value;
    this.buildCalendar()
  }

  ngOnInit() {
    this.monthName = moment.months()
  }

  buildWeeks(d: Moment): Array<AtDate> {
    const weeks: Array<any> = [];
    const start             = d.clone().date(1).day(0);
    const month             = d.clone();
    let done                = false;
    const date              = start.clone();
    let monthIndex          = date.month();
    let count               = 0;
    while (!done) {
      weeks.push({days: this.buildWeek(date.clone(), month)});
      date.add(1, 'w');
      done       = count++ > 4;
      monthIndex = date.month();
    }
    return weeks;
  };


  buildWeek(date: Moment, month: Moment): Array<AtDate> {
    const days: Array<AtDate> = [];
    for (let i = 0; i < 7; i++) {
      days.push({
                  number: date.date(),
                  isLastMonth: date.month() < month.month(),
                  isNextMonth: date.month() > month.month(),
                  isCurrentDay: date.isSame(new Date(), 'day'),
                  isSelectedDay: date.isSame(this.atValue, 'day'),
                  title: date.format(this.format),
                  date: date,
                  disabled: this.disableDate && date.isBefore(this.disableDate, 'day'),
                  firstDisabled: false,
                  lastDisabled: false,
                });
      date = date.clone();
      date.add(1, 'd');
    }
    return days;
  };

  buildYears(year) {
    let century    = [];
    let temp_array = []
    for (const i of Array.from(Array(20).keys())) {
      let y = i - 10 + year
      century.push({
                     year: y,
                     isSelectedYear: moment().get('y'),
                     isCurrentYear: moment().get('y') == y,
                   });
    }
    for (let i = 0, j = century.length; i < j; i += 5) {
      temp_array.push(century.slice(i, i + 5));
      // do whatever
    }
    century = temp_array

    return century;
  }

  buildMonths(date: Moment) {
    let formatMonths       = [];
    let months: Array<any> = [];
    for (let i = 0; i < 12; i++) {
      months.push({
                    index: i,
                    name: this.monthName[i],
                    isCurrentMonth: moment(new Date()).month() === i && date.isSame(new Date(), 'year'),
                    isSelectedMonth: this.atMonth === i,
                  });
      if ((i + 1) % 3 === 0) {
        formatMonths.push(months);
        months = [];
      }
    }
    return formatMonths;
  };


  buildCalendar() {
    moment.locale('zh-cn')
    let time    = (this.atValue == null || this.atValue == '' || !this.atValue) ? this.showValue : this.atValue
    let date    = moment(time).year(this.atYear).month(this.atMonth)
    this.weeks  = this.buildWeeks(date)
    this.months = this.buildMonths(date)
    this._years = this.buildYears(this.atYear)
  }


  clickDay(day) {
    if (!day.disabled) {
      this._clickDate.emit(day)
    }
  }

  clickMonth(single) {
    this._clickMonth.emit(single)
  }

  clickYear(year) {
    this._clickYear.emit(year)
  }
}
