/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Inject, Input } from '@angular/core';
import { MenuComponent } from "../menu.component";
export class MenuItemGroupComponent {
    /**
     * @param {?} parent
     */
    constructor(parent) {
        this.parent = parent;
        this.inline = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get drop_down() {
        return this.parent.atType != 'inline';
    }
}
MenuItemGroupComponent.decorators = [
    { type: Component, args: [{
                selector: '[itemGroup]',
                template: `<ul class="at-menu__item-group">
    <li *ngIf="label" class="at-menu__item-group-title">{{label}}</li>
    <ul class="at-menu__item-group-list">
      <ng-content></ng-content>
    </ul>
  </ul>
  `,
            },] },
];
/** @nocollapse */
MenuItemGroupComponent.ctorParameters = () => [
    { type: MenuComponent, decorators: [{ type: Inject, args: [MenuComponent,] },] },
];
MenuItemGroupComponent.propDecorators = {
    "label": [{ type: Input },],
    "inline": [{ type: Input },],
    "drop_down": [{ type: HostBinding, args: ['class.at-dropdown-menu',] },],
};
function MenuItemGroupComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MenuItemGroupComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MenuItemGroupComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MenuItemGroupComponent.propDecorators;
    /** @type {?} */
    MenuItemGroupComponent.prototype.label;
    /** @type {?} */
    MenuItemGroupComponent.prototype.inline;
    /** @type {?} */
    MenuItemGroupComponent.prototype.parent;
}
