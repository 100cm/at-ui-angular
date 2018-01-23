/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding } from "@angular/core";
export class InlineMenuComponent {
    constructor() {
        this.at_menu = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
InlineMenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[inlineMenu]',
                template: `<ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
InlineMenuComponent.ctorParameters = () => [];
InlineMenuComponent.propDecorators = {
    "at_menu": [{ type: HostBinding, args: ['class.at-menu',] },],
};
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
