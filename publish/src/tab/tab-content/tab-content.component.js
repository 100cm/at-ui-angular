/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { TabComponent } from "../tab.component";
var TabContentComponent = (function () {
    function TabContentComponent(_tab_component) {
        this._tab_component = _tab_component;
    }
    /**
     * @return {?}
     */
    TabContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TabContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tabContent',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    TabContentComponent.ctorParameters = function () { return [
        { type: TabComponent, },
    ]; };
    TabContentComponent.propDecorators = {
        "title": [{ type: Input },],
        "content": [{ type: ViewChild, args: [TemplateRef,] },],
    };
    return TabContentComponent;
}());
export { TabContentComponent };
function TabContentComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabContentComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabContentComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabContentComponent.propDecorators;
    /** @type {?} */
    TabContentComponent.prototype.title;
    /** @type {?} */
    TabContentComponent.prototype.content;
    /** @type {?} */
    TabContentComponent.prototype._tab_component;
}
