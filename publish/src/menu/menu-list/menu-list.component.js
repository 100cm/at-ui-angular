/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding } from "@angular/core";
export class MenuListComponent {
    constructor() {
        this.menu = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MenuListComponent.decorators = [
    { type: Component, args: [{
                selector: '[atMenuList]',
                template: `<ng-content></ng-content>
`,
            },] },
];
/** @nocollapse */
MenuListComponent.ctorParameters = () => [];
MenuListComponent.propDecorators = {
    "menu": [{ type: HostBinding, args: ['class.at-dropdown-menu',] },],
};
function MenuListComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MenuListComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MenuListComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MenuListComponent.propDecorators;
    /** @type {?} */
    MenuListComponent.prototype.menu;
}
