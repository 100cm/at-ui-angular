/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';
var TimeComponent = (function () {
    function TimeComponent() {
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
    TimeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._buildHours();
        this._buildMinutes();
        this._buildSeconds();
    };
    Object.defineProperty(TimeComponent.prototype, "selected_second", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected_second;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected_second = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeComponent.prototype, "selected_minutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected_minutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected_minutes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeComponent.prototype, "selected_hour", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected_hour;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected_hour = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimeComponent.prototype._buildHours = /**
     * @return {?}
     */
    function () {
        this.hours = [];
        for (var /** @type {?} */ i = 0; i <= 23; i++) {
            this.hours.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype._buildMinutes = /**
     * @return {?}
     */
    function () {
        this.minutes = [];
        for (var /** @type {?} */ i = 0; i <= 59; i++) {
            this.minutes.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype._buildSeconds = /**
     * @return {?}
     */
    function () {
        this.seconds = [];
        for (var /** @type {?} */ i = 0; i <= 59; i++) {
            this.seconds.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (!this.inited) {
            this.inited = true;
            this.setPosition();
        }
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.ngAfterContentInited = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.setPosition = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ m_p = this.selected_minutes / 60;
        var /** @type {?} */ h_p = this.selected_hour / 24;
        var /** @type {?} */ s_p = this.selected_second / 60;
        var /** @type {?} */ h_el = this.hour_panel._elementRef.nativeElement;
        var /** @type {?} */ m_el = this.minute_panel._elementRef.nativeElement;
        var /** @type {?} */ s_el = this.second_panel._elementRef.nativeElement;
        var /** @type {?} */ h_el_height = h_el.scrollHeight;
        var /** @type {?} */ m_el_height = m_el.scrollHeight;
        var /** @type {?} */ s_el_height = s_el.scrollHeight;
        h_el.scrollTop = h_el_height * h_p;
        s_el.scrollTop = s_el_height * s_p;
        m_el.scrollTop = m_el_height * m_p;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TimeComponent.prototype._select_minutes = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.selected_second;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TimeComponent.prototype._select_hour = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TimeComponent.prototype._select_second = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
    };
    TimeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'atTime',
                    template: "\n    <div atRow>\n      <div #hour_panel atCol [span]=\"8\" class=\"at-time-panel\">\n        <ul>\n          <li *ngFor=\"let s of hours\"\n              [ngClass]=\"{'time-selected':s.index == selected_hour}\">\n            {{s.name}}\n          </li>\n        </ul>\n      </div>\n      <div #minute_panel atCol [span]=\"8\" class=\"at-time-panel\">\n        <ul>\n          <li *ngFor=\"let s of minutes\"\n              [ngClass]=\"{'time-selected':s.index == selected_minutes}\"\n          >\n            {{s.name}}\n          </li>\n        </ul>\n      </div>\n      <div #second_panel atCol [span]=\"8\" class=\"at-time-panel\">\n\n        <ul>\n          <li *ngFor=\"let s of seconds\"\n              [ngClass]=\"{'time-selected':s.index == selected_second}\"\n          >\n            {{s.name}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    TimeComponent.ctorParameters = function () { return []; };
    TimeComponent.propDecorators = {
        "selectHour": [{ type: Output },],
        "selectMinute": [{ type: Output },],
        "selectSecond": [{ type: Output },],
        "selected_second": [{ type: Input },],
        "selected_minutes": [{ type: Input },],
        "selected_hour": [{ type: Input },],
        "hour_panel": [{ type: ViewChild, args: ['hour_panel',] },],
        "minute_panel": [{ type: ViewChild, args: ['minute_panel',] },],
        "second_panel": [{ type: ViewChild, args: ['second_panel',] },],
    };
    return TimeComponent;
}());
export { TimeComponent };
function TimeComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimeComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimeComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
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
