import { Component, HostBinding } from '@angular/core';
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
/**
 * @nocollapse
 */
InlineMenuComponent.ctorParameters = () => [];
InlineMenuComponent.propDecorators = {
    'at_menu': [{ type: HostBinding, args: ['class.at-menu',] },],
};
function InlineMenuComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    InlineMenuComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    InlineMenuComponent.ctorParameters;
    /** @type {?} */
    InlineMenuComponent.propDecorators;
    /** @type {?} */
    InlineMenuComponent.prototype.at_menu;
}
