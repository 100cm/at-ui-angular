/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
var TabBodyComponent = (function () {
    function TabBodyComponent() {
    }
    /**
     * @return {?}
     */
    TabBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TabBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'at-tab-body',
                    template: "\n    <ng-template [ngTemplateOutlet]=\"content\"></ng-template>",
                },] },
    ];
    /** @nocollapse */
    TabBodyComponent.ctorParameters = function () { return []; };
    TabBodyComponent.propDecorators = {
        "content": [{ type: Input },],
    };
    return TabBodyComponent;
}());
export { TabBodyComponent };
function TabBodyComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabBodyComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabBodyComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabBodyComponent.propDecorators;
    /** @type {?} */
    TabBodyComponent.prototype.content;
}
