import { Component, HostBinding } from '@angular/core';
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
/**
 * @nocollapse
 */
MenuListComponent.ctorParameters = () => [];
MenuListComponent.propDecorators = {
    'menu': [{ type: HostBinding, args: ['class.at-dropdown-menu',] },],
};
function MenuListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MenuListComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    MenuListComponent.ctorParameters;
    /** @type {?} */
    MenuListComponent.propDecorators;
    /** @type {?} */
    MenuListComponent.prototype.menu;
}
