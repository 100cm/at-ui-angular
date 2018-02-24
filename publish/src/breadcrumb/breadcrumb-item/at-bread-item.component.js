/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class AtBreadItemComponent {
    constructor() {
        this.separator = '/';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AtBreadItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-bread-item',
                template: `
    <span class="at_breadcrumb__text">
      <ng-content></ng-content>
    </span>
    <span class="at-breadcrumb__separator">{{this.separator}}</span>
  `,
            },] },
];
/** @nocollapse */
AtBreadItemComponent.ctorParameters = () => [];
AtBreadItemComponent.propDecorators = {
    "separator": [{ type: Input },],
};
function AtBreadItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AtBreadItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AtBreadItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AtBreadItemComponent.propDecorators;
    /** @type {?} */
    AtBreadItemComponent.prototype.separator;
}
