import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';
export class TimeComponent {
    constructor() {
        this._selected_second = moment().hour();
        this._selected_minutes = moment().minute();
        this._selected_hour = moment().hour();
        this.selectHour = new EventEmitter();
        this.selectMinute = new EventEmitter();
        this.selectSecond = new EventEmitter();
        this.inited = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._buildHours();
        this._buildMinutes();
        this._buildSeconds();
    }
    /**
     * @return {?}
     */
    get selected_second() {
        return this._selected_second;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected_second(value) {
        this._selected_second = value;
    }
    /**
     * @return {?}
     */
    get selected_minutes() {
        return this._selected_minutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected_minutes(value) {
        this._selected_minutes = value;
    }
    /**
     * @return {?}
     */
    get selected_hour() {
        return this._selected_hour;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected_hour(value) {
        this._selected_hour = value;
    }
    /**
     * @return {?}
     */
    _buildHours() {
        this.hours = [];
        for (let /** @type {?} */ i = 0; i <= 23; i++) {
            this.hours.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    }
    /**
     * @return {?}
     */
    _buildMinutes() {
        this.minutes = [];
        for (let /** @type {?} */ i = 0; i <= 59; i++) {
            this.minutes.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    }
    /**
     * @return {?}
     */
    _buildSeconds() {
        this.seconds = [];
        for (let /** @type {?} */ i = 0; i <= 59; i++) {
            this.seconds.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (!this.inited) {
            this.inited = true;
            this.setPosition();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInited() {
    }
    /**
     * @return {?}
     */
    setPosition() {
        let /** @type {?} */ m_p = this.selected_minutes / 60;
        let /** @type {?} */ h_p = this.selected_hour / 24;
        let /** @type {?} */ s_p = this.selected_second / 60;
        let /** @type {?} */ h_el = this.hour_panel._elementRef.nativeElement;
        let /** @type {?} */ m_el = this.minute_panel._elementRef.nativeElement;
        let /** @type {?} */ s_el = this.second_panel._elementRef.nativeElement;
        let /** @type {?} */ h_el_height = h_el.scrollHeight;
        let /** @type {?} */ m_el_height = m_el.scrollHeight;
        let /** @type {?} */ s_el_height = s_el.scrollHeight;
        h_el.scrollTop = h_el_height * h_p;
        s_el.scrollTop = s_el_height * s_p;
        m_el.scrollTop = m_el_height * m_p;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    _select_minutes(index) {
        this.selected_second;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    _select_hour(index) {
    }
    /**
     * @param {?} index
     * @return {?}
     */
    _select_second(index) {
    }
}
TimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTime',
                template: `
    <div atRow>
      <div #hour_panel atCol [span]="8" class="at-time-panel">
        <ul>
          <li *ngFor="let s of hours"
              [ngClass]="{'time-selected':s.index == selected_hour}">
            {{s.name}}
          </li>
        </ul>
      </div>
      <div #minute_panel atCol [span]="8" class="at-time-panel">
        <ul>
          <li *ngFor="let s of minutes"
              [ngClass]="{'time-selected':s.index == selected_minutes}"
          >
            {{s.name}}
          </li>
        </ul>
      </div>
      <div #second_panel atCol [span]="8" class="at-time-panel">

        <ul>
          <li *ngFor="let s of seconds"
              [ngClass]="{'time-selected':s.index == selected_second}"
          >
            {{s.name}}
          </li>
        </ul>
      </div>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
TimeComponent.ctorParameters = () => [];
TimeComponent.propDecorators = {
    'selectHour': [{ type: Output },],
    'selectMinute': [{ type: Output },],
    'selectSecond': [{ type: Output },],
    'selected_second': [{ type: Input },],
    'selected_minutes': [{ type: Input },],
    'selected_hour': [{ type: Input },],
    'hour_panel': [{ type: ViewChild, args: ['hour_panel',] },],
    'minute_panel': [{ type: ViewChild, args: ['minute_panel',] },],
    'second_panel': [{ type: ViewChild, args: ['second_panel',] },],
};
function TimeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TimeComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    TimeComponent.ctorParameters;
    /** @type {?} */
    TimeComponent.propDecorators;
    /** @type {?} */
    TimeComponent.prototype.seconds;
    /** @type {?} */
    TimeComponent.prototype.minutes;
    /** @type {?} */
    TimeComponent.prototype.hours;
    /** @type {?} */
    TimeComponent.prototype._selected_second;
    /** @type {?} */
    TimeComponent.prototype._selected_minutes;
    /** @type {?} */
    TimeComponent.prototype._selected_hour;
    /** @type {?} */
    TimeComponent.prototype.selectHour;
    /** @type {?} */
    TimeComponent.prototype.selectMinute;
    /** @type {?} */
    TimeComponent.prototype.selectSecond;
    /** @type {?} */
    TimeComponent.prototype.hour_panel;
    /** @type {?} */
    TimeComponent.prototype.minute_panel;
    /** @type {?} */
    TimeComponent.prototype.second_panel;
    /** @type {?} */
    TimeComponent.prototype.inited;
}
