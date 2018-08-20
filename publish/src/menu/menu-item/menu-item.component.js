/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
var MenuItemComponent = (function () {
    function MenuItemComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._active = false;
        this.item_class = true;
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    MenuItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    MenuItemComponent.prototype.setActive = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(MenuItemComponent.prototype, "activeCls", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuItemComponent.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    MenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: '[atMenuItem]',
                    template: "<ng-content></ng-content>\n",
                },] },
    ];
    /** @nocollapse */
    MenuItemComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    MenuItemComponent.propDecorators = {
        "item_class": [{ type: HostBinding, args: ["class.at-menu__item",] },],
        "setActive": [{ type: HostListener, args: ['click',] },],
        "activeCls": [{ type: HostBinding, args: ['class.at-menu__item--active',] },],
        "active": [{ type: Input, args: ['active',] },],
    };
    return MenuItemComponent;
}());
export { MenuItemComponent };
function MenuItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MenuItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MenuItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MenuItemComponent.propDecorators;
    /** @type {?} */
    MenuItemComponent.prototype._el;
    /** @type {?} */
    MenuItemComponent.prototype.nativeElement;
    /** @type {?} */
    MenuItemComponent.prototype._active;
    /** @type {?} */
    MenuItemComponent.prototype.item_class;
    /** @type {?} */
    MenuItemComponent.prototype._elementRef;
    /** @type {?} */
    MenuItemComponent.prototype._renderer;
}
