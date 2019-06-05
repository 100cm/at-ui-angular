import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AtI18nInterface } from '../../i18n/at-i18n.interface';
import { AtI18nService } from '../../i18n/at-i18n.service';
import { AtDate } from '../at-day';
import { BladeDate } from '../blade-date';

@Component({
  selector: 'at-calendar',
  template: `
    <table cellspacing="0" role="grid" *ngIf="atType =='full'" class="at-calendar-table">
      <thead>
      <th class="column-header"><span class="column-header-inner">{{locale?.DatePicker?.Sunday}}</span></th>
      <th class="column-header"><span class="column-header-inner">{{locale?.DatePicker?.Monday}}</span></th>
      <th class="column-header"><span class="column-header-inner">{{locale?.DatePicker?.TuesDay}}</span></th>
      <th class="column-header"><span class="column-header-inner">{{locale?.DatePicker?.Wednesday}}</span>
      </th>
      <th class="column-header"><span class="column-header-inner">{{locale?.DatePicker?.ThursDay}}</span>
      </th>
      <th class="column-header"><span class="column-header-inner">{{locale?.DatePicker?.Friday}}</span></th>
      <th class="column-header"><span class="column-header-inner">{{locale?.DatePicker?.Saturday}}</span>
      </th>
      </thead>
      <tbody>
      <tr role="row" *ngFor="let week of weeks">
        <td
          role="gridcell"
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

    <table cellspacing="0" role="grid" *ngIf="atType=='month'" class="at-calendar-table">
      <tbody>
      <tr role="row" *ngFor="let month of months">
        <td
          role="gridcell"
          *ngFor="let single of month" class="at-month-cell"
          (click)="clickMonth(single)"
          [ngClass]="{
              'at-date-cell--selected':single.isSelectedMonth ,
              'at-date-cell--today':single.isCurrentMonth}">
          <a class="at-date">{{single.name}}</a>
        </td>
      </tr>
      </tbody>
    </table>

    <table cellspacing="0" role="grid" *ngIf="atType=='year'" class="at-calendar-table">
      <tbody>
      <tr role="row" *ngFor="let section of years">
        <td
          role="gridcell"
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



  `

})
export class CalendarComponent implements OnInit {

  @Output() _clickMonth: EventEmitter<any> = new EventEmitter();
  @Output() _clickYear: EventEmitter<any> = new EventEmitter();

  constructor(private at_i18n_service: AtI18nService) {
  }

  @Output() _clickDate: EventEmitter<any> = new EventEmitter();

  @Input()
  set disableDate(value) {
    console.log(value);
    this._disabledDate = value;
    this.buildCalendar();
  }

  get disableDate() {
    return this._disabledDate;
  }

  _show_value;

  @Input()
  set showValue(value) {
    this._show_value = value;
    this.buildCalendar();
  }

  get showValue() {
    return this._show_value || new Date();
  }

  monthName = [];
  _disabledDate;

  @Input() private;
  _atType: 'full' | 'month' | 'year' = 'full';

  get atType() {
    return this._atType;
  }

  @Input()
  set atType(value) {
    this._atType = value;
    this.buildCalendar();
  }

  private _weeks: any[] = [];

  private _months: any[] = [];

  private _years: any[] = [];

  get years(): any[] {
    return this._years;
  }

  set years(value: any[]) {
    this._years = value;
  }

  get months(): any[] {
    return this._months;
  }

  set months(value: any[]) {
    this._months = value;
  }

  get atValue() {
    return this._atValue || new Date();
  }

  @Input()
  set atValue(value: string | Date) {
    this._atValue = value;
    const day = value || new Date();
    this.atMonth = new BladeDate(day).getMonth();
    this.atYear = new BladeDate(day).getYear();
    this.buildCalendar();
  }

  private _atValue;
  private _atYear = new BladeDate().getYear();
  private _atMonth = new BladeDate().getMonth();
  private _atDay;

  get weeks(): any[] {
    return this._weeks;
  }

  set weeks(value: any[]) {
    this._weeks = value;
  }

  get atYear(): number {
    return this._atYear;
  }

  @Input()
  set atYear(value: number) {
    this._atYear = value;
    this.buildCalendar();
  }

  get atMonth(): number {

    return this._atMonth;
  }

  @Input() format: string;

  @Input()
  set atMonth(value: number) {
    this._atMonth = value;
    this.buildCalendar();
  }

  get atDay(): number {
    return this._atDay;
  }

  @Input()
  set atDay(value: number) {
    this._atDay = value;
    this.buildCalendar();
  }

  private _locale: AtI18nInterface;

  get locale(): AtI18nInterface {
    return this._locale;
  }

  @Input()
  set locale(value: AtI18nInterface) {
    if (value) {
      this._locale = value;
      this.buildCalendar();
    }
  }

  ngOnInit() {
    this.monthName = this._locale.DatePicker.months;
  }

  buildWeeks(d: BladeDate): AtDate[] {
    const weeks: any[] = [];
    const start = d.clone().setDate(1).setDay(0);
    const month = d.clone();
    let done = false;
    let date: BladeDate = start.clone();
    let monthIndex = date.getMonth();
    let count = 0;
    while (!done) {
      weeks.push({days: this.buildWeek(date.clone(), month)});
      date = date.addWeeks(1);
      done = count++ > 4;
      monthIndex = date.getMonth();
    }
    return weeks;
  }

  buildWeek(date: BladeDate, month: BladeDate): AtDate[] {
    const days: AtDate[] = [];
    let build_date: BladeDate = date.clone();
    for (let i = 0; i < 7; i++) {
      days.push({
        number: build_date.getDate(),
        isLastMonth: build_date.getMonth() < month.getMonth(),
        isNextMonth: build_date.getMonth() > month.getMonth(),
        isCurrentDay: build_date.isSame(new Date(), 'day'),
        isSelectedDay: build_date.isSame(new BladeDate(this.atValue), 'day'),
        title: build_date.format(this.format),
        date: build_date,
        disabled: this.disableDate && build_date.isBefore(new BladeDate(this.disableDate), 'day'),
        firstDisabled: false,
        lastDisabled: false
      });
      build_date = build_date.addDays(1);
    }
    return days;
  }

  buildYears(year: number) {
    let century = [];
    const temp_array = [];
    for (const i of Array.from(Array(20).keys())) {
      const y = i - 10 + year;
      century.push({
        year: y,
        isSelectedYear: y === year,
        isCurrentYear: new BladeDate().getYear() === y
      });
    }
    for (let i = 0, j = century.length; i < j; i += 5) {
      temp_array.push(century.slice(i, i + 5));
      // do whatever
    }
    century = temp_array;
    return century;
  }

  buildMonths(date: BladeDate) {
    const formatMonths = [];
    let months: any[] = [];
    for (let i = 0; i < 12; i++) {
      months.push({
        index: i,
        name: this.monthName[i],
        isCurrentMonth: new BladeDate().getMonth() === i && date.isSame(new Date(), 'year'),
        isSelectedMonth: this.atMonth === i
      });
      if ((i + 1) % 3 === 0) {
        formatMonths.push(months);
        months = [];
      }
    }
    return formatMonths;
  }

  buildCalendar(): void {
    const time = (this.atValue == null || this.atValue === '' || !this.atValue) ? this.showValue : this.atValue;
    const date = new BladeDate(time).setYear(this.atYear).setMonth(this.atMonth);
    this.weeks = this.buildWeeks(date);
    this.months = this.buildMonths(date);
    this._years = this.buildYears(this.atYear);
  }

  clickDay(day: AtDate): void {
    if (!day.disabled) {
      this._clickDate.emit(day);
    }
  }

  clickMonth(single): void {
    this._clickMonth.emit(single);
  }

  clickYear(year): void {
    this._clickYear.emit(year);
  }
}
