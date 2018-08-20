/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
var InlineMenuComponent = (function () {
    function InlineMenuComponent() {
        this.at_menu = true;
    }
    /**
     * @return {?}
     */
    InlineMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    InlineMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: '[inlineMenu]',
                    template: "<ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    InlineMenuComponent.ctorParameters = function () { return []; };
    InlineMenuComponent.propDecorators = {
        "at_menu": [{ type: HostBinding, args: ['class.at-menu',] },],
    };
    return InlineMenuComponent;
}());
export { InlineMenuComponent };
function InlineMenuComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    InlineMenuComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    InlineMenuComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    InlineMenuComponent.propDecorators;
    /** @type {?} */
    InlineMenuComponent.prototype.at_menu;
}
