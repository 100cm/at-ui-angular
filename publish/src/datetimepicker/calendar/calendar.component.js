/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/zh-cn';
var CalendarComponent = (function () {
    function CalendarComponent() {
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
    Object.defineProperty(CalendarComponent.prototype, "disableDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledDate = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "showValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._show_value || new Date();
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._show_value = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._atType;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._atType = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "years", {
        get: /**
         * @return {?}
         */
        function () {
            return this._years;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._years = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "months", {
        get: /**
         * @return {?}
         */
        function () {
            return this._months;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._months = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._atValue || new Date();
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._atValue = value;
            var /** @type {?} */ day = value || new Date();
            this.atMonth = moment(day).month();
            this.atYear = moment(day).year();
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "weeks", {
        get: /**
         * @return {?}
         */
        function () {
            return this._weeks;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._weeks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._atYear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._atYear = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._atMonth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._atMonth = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atDay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._atDay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._atDay = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.monthName = moment.months();
    };
    /**
     * @param {?} d
     * @return {?}
     */
    CalendarComponent.prototype.buildMonth = /**
     * @param {?} d
     * @return {?}
     */
    function (d) {
        var /** @type {?} */ weeks = [];
        var /** @type {?} */ start = d.clone().date(1).day(0);
        var /** @type {?} */ month = d.clone();
        var /** @type {?} */ done = false;
        var /** @type {?} */ date = start.clone();
        var /** @type {?} */ monthIndex = date.month();
        var /** @type {?} */ count = 0;
        while (!done) {
            weeks.push({ days: this.buildWeek(date.clone(), month) });
            date.add(1, 'w');
            done = count++ > 4;
            monthIndex = date.month();
        }
        return weeks;
    };
    ;
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    CalendarComponent.prototype.buildWeek = /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    function (date, month) {
        var /** @type {?} */ days = [];
        for (var /** @type {?} */ i = 0; i < 7; i++) {
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
    ;
    /**
     * @param {?} year
     * @return {?}
     */
    CalendarComponent.prototype.buildCentury = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        var /** @type {?} */ century = [];
        var /** @type {?} */ temparray = [];
        for (var _i = 0, _a = Array.from(Array(20).keys()); _i < _a.length; _i++) {
            var i = _a[_i];
            century.push(i - 10 + year);
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ j = century.length; i < j; i += 5) {
            temparray.push(century.slice(i, i + 5));
            // do whatever
        }
        century = temparray;
        return century;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.buildYears = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ formatMonths = [];
        var /** @type {?} */ months = [];
        for (var /** @type {?} */ i = 0; i < 12; i++) {
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
    ;
    /**
     * @return {?}
     */
    CalendarComponent.prototype.buildCalendar = /**
     * @return {?}
     */
    function () {
        moment.locale('zh-cn');
        var /** @type {?} */ time = (this.atValue == null || this.atValue == '' || !this.atValue) ? this.showValue : this.atValue;
        var /** @type {?} */ date = moment(time).year(this.atYear).month(this.atMonth);
        this.weeks = this.buildMonth(date);
        this.months = this.buildYears(date);
        this._years = this.buildCentury(this.atYear);
    };
    /**
     * @param {?} day
     * @return {?}
     */
    CalendarComponent.prototype.clickDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        if (!day.disabled) {
            this._clickDate.emit(day);
        }
    };
    /**
     * @param {?} single
     * @return {?}
     */
    CalendarComponent.prototype.clickMonth = /**
     * @param {?} single
     * @return {?}
     */
    function (single) {
        this._clickMonth.emit(single);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CalendarComponent.prototype.clickYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this._clickYear.emit(year);
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'atCalendar',
                    template: "\n    <table *ngIf=\"atType =='full'\" class=\"at-calendar-table\">\n      <thead>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u65E5</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E00</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E8C</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E09</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u56DB</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E94</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u516D</span></th>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let week of weeks\">\n        <td\n          *ngFor=\"let day of week.days\" class=\"at-date-cell\"\n          (click)=\"clickDay(day)\"\n          [ngClass]=\"{'at-date-cell--last-month':day.isLastMonth,\n'at-date-cell--selected':day.isSelectedDay ,\n'at-date-cell--today':day.isCurrentDay,\n'at-date-cell--next-month':day.isNextMonth,\n'at-date-cell--disabled':day.disabled}\">\n          <div class=\"at-date\">{{day.number}}</div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n    <table *ngIf=\"atType=='month'\" class=\"at-calendar-table\">\n      <tbody>\n      <tr *ngFor=\"let month of months\">\n        <td\n          *ngFor=\"let single of month\" class=\"at-month-cell\"\n          (click)=\"clickMonth(single)\"\n          [ngClass]=\"{\n              'at-date-cell--selected':single.isSelectedMonth ,\n              'at-date-cell--today':single.isCurrentMonth}\">\n          <div class=\"at-date\">{{single.name}}</div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n    <table *ngIf=\"atType=='year'\" class=\"at-calendar-table\">\n      <tbody>\n      <tr *ngFor=\"let section of years\">\n        <td\n          *ngFor=\"let year of section\" class=\"at-month-cell\"\n          (click)=\"clickYear(year)\"\n          [ngClass]=\"{\n              'at-date-cell--selected':year.isSelectedMonth ,\n              'at-date-cell--today':year.isCurrentMonth}\">\n          <div class=\"at-date\">{{year}}</div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n\n\n\n\n  ",
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return []; };
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
    return CalendarComponent;
}());
export { CalendarComponent };
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
