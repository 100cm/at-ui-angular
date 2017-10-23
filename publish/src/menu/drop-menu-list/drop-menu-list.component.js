import { Component } from '@angular/core';
import { MenuListComponent } from '../menu-list/menu-list.component';
export class DropMenuListComponent extends MenuListComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DropMenuListComponent.decorators = [
    { type: Component, args: [{
                selector: '[atDropMenuList]',
                template: `<ng-content></ng-content>`,
            },] },
];
/**
 * @nocollapse
 */
DropMenuListComponent.ctorParameters = () => [];
function DropMenuListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DropMenuListComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DropMenuListComponent.ctorParameters;
}
