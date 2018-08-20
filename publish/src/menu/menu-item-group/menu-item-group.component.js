/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Inject, Input } from '@angular/core';
import { MenuComponent } from "../menu.component";
var MenuItemGroupComponent = (function () {
    function MenuItemGroupComponent(parent) {
        this.parent = parent;
        this.inline = true;
    }
    /**
     * @return {?}
     */
    MenuItemGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(MenuItemGroupComponent.prototype, "drop_down", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.atType != 'inline';
        },
        enumerable: true,
        configurable: true
    });
    MenuItemGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: '[itemGroup]',
                    template: "<ul class=\"at-menu__item-group\">\n    <li *ngIf=\"label\" class=\"at-menu__item-group-title\">{{label}}</li>\n    <ul class=\"at-menu__item-group-list\">\n      <ng-content></ng-content>\n    </ul>\n  </ul>\n  ",
                },] },
    ];
    /** @nocollapse */
    MenuItemGroupComponent.ctorParameters = function () { return [
        { type: MenuComponent, decorators: [{ type: Inject, args: [MenuComponent,] },] },
    ]; };
    MenuItemGroupComponent.propDecorators = {
        "label": [{ type: Input },],
        "inline": [{ type: Input },],
        "drop_down": [{ type: HostBinding, args: ['class.at-dropdown-menu',] },],
    };
    return MenuItemGroupComponent;
}());
export { MenuItemGroupComponent };
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
