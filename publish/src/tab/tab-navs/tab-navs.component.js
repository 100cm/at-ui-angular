/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { TabLabelDirective } from "../tab-label.directive";
import { AtTabInkDirective } from "../at-tab-ink.directive";
var TabNavsComponent = (function () {
    function TabNavsComponent() {
        this._selected_index = 0;
        this._position_modal = 'horizontal';
    }
    Object.defineProperty(TabNavsComponent.prototype, "selected_index", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected_index;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected_index = value;
            this.alignInk(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabNavsComponent.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position_modal;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._position_modal = value;
            this.alignInk(this.selected_index);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabNavsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TabNavsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._inkBar.alignToElement(this._labelWrappers.toArray()[0].elementRef.nativeElement);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabNavsComponent.prototype.alignInk = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this._labelWrappers) {
            this._inkBar.alignToElement(this._labelWrappers.toArray()[index].elementRef.nativeElement);
        }
    };
    TabNavsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'at-tab-navs',
                    template: "\n    <div AtTabInk [atPositionMode]=\"position\" class=\"at-tabs-ink-bar at-tabs-ink-bar-animated\"></div>\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    TabNavsComponent.ctorParameters = function () { return []; };
    TabNavsComponent.propDecorators = {
        "_labelWrappers": [{ type: ContentChildren, args: [TabLabelDirective,] },],
        "_inkBar": [{ type: ViewChild, args: [AtTabInkDirective,] },],
        "position": [{ type: Input },],
        "selected_index": [{ type: Input },],
    };
    return TabNavsComponent;
}());
export { TabNavsComponent };
function TabNavsComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabNavsComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabNavsComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabNavsComponent.propDecorators;
    /** @type {?} */
    TabNavsComponent.prototype._labelWrappers;
    /** @type {?} */
    TabNavsComponent.prototype._inkBar;
    /** @type {?} */
    TabNavsComponent.prototype._selected_index;
    /** @type {?} */
    TabNavsComponent.prototype._position_modal;
}
