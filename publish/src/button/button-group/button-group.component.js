import { Component } from '@angular/core';
export class ButtonGroupComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-button-group',
                template: `<div class="at-btn-group">
    <ng-content></ng-content>
  </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ButtonGroupComponent.ctorParameters = () => [];
function ButtonGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ButtonGroupComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ButtonGroupComponent.ctorParameters;
}
