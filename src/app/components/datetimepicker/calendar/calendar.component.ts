import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import * as moment from 'moment';
import {Moment} from "moment";
import {AtDate} from "../at-day";

@Component({
  selector: 'atCalendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() {
  }

  @Output() _clickDate: EventEmitter<any> = new EventEmitter()


  private _weeks: Array<any> = []

  private _atValue

  get atValue() {
    return this._atValue || new Date();
  }

  @Input()
  set atValue(value) {
    this._atValue = value;
    this.atMonth = moment(value).month()
    this.atYear = moment(value).year()
    this.buildCalendar()
  }


  private _atYear = moment(new Date()).year()

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

  }

  buildMonth(d: Moment): Array<AtDate> {
    const weeks: Array<any> = [];
    const start = d.clone().date(1).day(0);
    const month = d.clone();
    let done = false;
    const date = start.clone();
    let monthIndex = date.month();
    let count = 0;
    while (!done) {
      weeks.push({days: this.buildWeek(date.clone(), month)});
      date.add(1, 'w');
      done = count++ > 4;
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
        title: date.format('YYYY-MM-DD'),
        date: date,
        disabled: false,
        firstDisabled: false,
        lastDisabled: false,
      });
      date = date.clone();
      date.add(1, 'd');
    }
    return days;
  };


  buildCalendar() {
    let date = moment(this.atValue).year(this.atYear).month(this.atMonth)
    this.weeks = this.buildMonth(date)
  }


  clickDay(day) {
    this._clickDate.emit(day)
  }
}
