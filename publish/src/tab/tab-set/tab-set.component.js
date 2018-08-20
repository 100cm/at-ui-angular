/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TabSetComponent = (function () {
    function TabSetComponent() {
        this.position = 'horizontal';
        this.selected_index = 0;
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    TabSetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} i
     * @return {?}
     */
    TabSetComponent.prototype.selectTab = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.selected_index = i;
    };
    TabSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'atTabSet',
                    template: "\n    <div class=\"at-tab at-tab-{{position}}\">\n      <div class=\"at-tabs-bar \">\n        <div class=\"at-tabs-nav-container\">\n          <div class=\"at-tabs-nav-wrap\">\n            <div class=\"at-tab--navs\">\n              <at-tab-navs\n                [selected_index]=\"selected_index\"\n                [position]=\"position\">\n                <div at-tab-label *ngFor=\"let item of tabs;let i =index\" (click)=\"selectTab(i)\" class=\"at-tab-nav\">\n                  <ng-template [ngTemplateOutlet]=\"item._tabHeading\">\n                  </ng-template>\n                </div>\n              </at-tab-navs>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"at-tab--contents\">\n        <div class=\"at-tab-content\">\n          <at-tab-body [content]=\"tabs[selected_index]?._content\">\n\n          </at-tab-body>\n        </div>\n      </div>\n\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    TabSetComponent.ctorParameters = function () { return []; };
    TabSetComponent.propDecorators = {
        "position": [{ type: Input },],
        "selected_index": [{ type: Input },],
    };
    return TabSetComponent;
}());
export { TabSetComponent };
function TabSetComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabSetComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabSetComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabSetComponent.propDecorators;
    /** @type {?} */
    TabSetComponent.prototype.position;
    /** @type {?} */
    TabSetComponent.prototype.selected_index;
    /** @type {?} */
    TabSetComponent.prototype.tabs;
}
