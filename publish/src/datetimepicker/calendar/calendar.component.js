/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from "@angular/core";
import * as moment from "moment";
import "moment/locale/zh-cn";
export class CalendarComponent {
    constructor() {
        this._clickMonth = new EventEmitter();
        this._clickYear = new EventEmitter();
        this._clickDate = new EventEmitter();
        this.monthName = [];
        this._atType = 'full';
        this._weeks = [];
        this._months = [];
        this._years = [];
        this._atYear = moment(new Date()).year();
        this._atMonth = moment(new Date()).month();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disableDate(value) {
        this._disabledDate = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get disableDate() {
        return this._disabledDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showValue(value) {
        this._show_value = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get showValue() {
        return this._show_value || new Date();
    }
    /**
     * @return {?}
     */
    get atType() {
        return this._atType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atType(value) {
        this._atType = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get years() {
        return this._years;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set years(value) {
        this._years = value;
    }
    /**
     * @return {?}
     */
    get months() {
        return this._months;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set months(value) {
        this._months = value;
    }
    /**
     * @return {?}
     */
    get atValue() {
        return this._atValue || new Date();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atValue(value) {
        this._atValue = value;
        let /** @type {?} */ day = value || new Date();
        this.atMonth = moment(day).month();
        this.atYear = moment(day).year();
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get weeks() {
        return this._weeks;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set weeks(value) {
        this._weeks = value;
    }
    /**
     * @return {?}
     */
    get atYear() {
        return this._atYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atYear(value) {
        this._atYear = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get atMonth() {
        return this._atMonth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atMonth(value) {
        this._atMonth = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get atDay() {
        return this._atDay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atDay(value) {
        this._atDay = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.monthName = moment.months();
    }
    /**
     * @param {?} d
     * @return {?}
     */
    buildMonth(d) {
        const /** @type {?} */ weeks = [];
        const /** @type {?} */ start = d.clone().date(1).day(0);
        const /** @type {?} */ month = d.clone();
        let /** @type {?} */ done = false;
        const /** @type {?} */ date = start.clone();
        let /** @type {?} */ monthIndex = date.month();
        let /** @type {?} */ count = 0;
        while (!done) {
            weeks.push({ days: this.buildWeek(date.clone(), month) });
            date.add(1, 'w');
            done = count++ > 4;
            monthIndex = date.month();
        }
        return weeks;
    }
    ;
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    buildWeek(date, month) {
        const /** @type {?} */ days = [];
        for (let /** @type {?} */ i = 0; i < 7; i++) {
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
    }
    ;
    /**
     * @param {?} year
     * @return {?}
     */
    buildCentury(year) {
        let /** @type {?} */ century = [];
        let /** @type {?} */ temparray = [];
        for (const /** @type {?} */ i of Array.from(Array(20).keys())) {
            century.push(i - 10 + year);
        }
        for (let /** @type {?} */ i = 0, /** @type {?} */ j = century.length; i < j; i += 5) {
            temparray.push(century.slice(i, i + 5));
            // do whatever
        }
        century = temparray;
        return century;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    buildYears(date) {
        let /** @type {?} */ formatMonths = [];
        let /** @type {?} */ months = [];
        for (let /** @type {?} */ i = 0; i < 12; i++) {
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
    }
    ;
    /**
     * @return {?}
     */
    buildCalendar() {
        moment.locale('zh-cn');
        let /** @type {?} */ time = (this.atValue == null || this.atValue == '' || !this.atValue) ? this.showValue : this.atValue;
        let /** @type {?} */ date = moment(time).year(this.atYear).month(this.atMonth);
        this.weeks = this.buildMonth(date);
        this.months = this.buildYears(date);
        this._years = this.buildCentury(this.atYear);
    }
    /**
     * @param {?} day
     * @return {?}
     */
    clickDay(day) {
        if (!day.disabled) {
            this._clickDate.emit(day);
        }
    }
    /**
     * @param {?} single
     * @return {?}
     */
    clickMonth(single) {
        this._clickMonth.emit(single);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    clickYear(year) {
        this._clickYear.emit(year);
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCalendar',
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
          (click)="clickYear(year)"
          [ngClass]="{
              'at-date-cell--selected':year.isSelectedMonth ,
              'at-date-cell--today':year.isCurrentMonth}">
          <div class="at-date">{{year}}</div>
        </td>
      </tr>
      </tbody>
    </table>





  `,
            },] },
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [];
CalendarComponent.propDecorators = {
    "_clickMonth": [{ type: Output },],
    "_clickYear": [{ type: Output },],
    "_clickDate": [{ type: Output },],
    "disableDate": [{ type: Input },],
    "showValue": [{ type: Input },],
    "private": [{ type: Input },],
    "atType": [{ type: Input },],
    "atValue": [{ type: Input },],
    "atYear": [{ type: Input },],
    "format": [{ type: Input },],
    "atMonth": [{ type: Input },],
    "atDay": [{ type: Input },],
};
function CalendarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CalendarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CalendarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CalendarComponent.propDecorators;
    /** @type {?} */
    CalendarComponent.prototype._clickMonth;
    /** @type {?} */
    CalendarComponent.prototype._clickYear;
    /** @type {?} */
    CalendarComponent.prototype._clickDate;
    /** @type {?} */
    CalendarComponent.prototype._show_value;
    /** @type {?} */
    CalendarComponent.prototype.monthName;
    /** @type {?} */
    CalendarComponent.prototype._disabledDate;
    /** @type {?} */
    CalendarComponent.prototype.private;
    /** @type {?} */
    CalendarComponent.prototype._atType;
    /** @type {?} */
    CalendarComponent.prototype._weeks;
    /** @type {?} */
    CalendarComponent.prototype._months;
    /** @type {?} */
    CalendarComponent.prototype._years;
    /** @type {?} */
    CalendarComponent.prototype._atValue;
    /** @type {?} */
    CalendarComponent.prototype._atYear;
    /** @type {?} */
    CalendarComponent.prototype._atMonth;
    /** @type {?} */
    CalendarComponent.prototype._atDay;
    /** @type {?} */
    CalendarComponent.prototype.format;
}
