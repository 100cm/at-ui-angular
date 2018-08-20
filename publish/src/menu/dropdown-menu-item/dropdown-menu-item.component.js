/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
var DropdownMenuItemComponent = (function () {
    function DropdownMenuItemComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._disabled = false;
        this._divided = false;
        this._active = false;
        this.item_class = true;
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    DropdownMenuItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(DropdownMenuItemComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownMenuItemComponent.prototype, "divided", {
        get: /**
         * @return {?}
         */
        function () {
            return this._divided;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._divided = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DropdownMenuItemComponent.prototype.setActive = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(DropdownMenuItemComponent.prototype, "activeCls", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownMenuItemComponent.prototype, "getDivide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._divided;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownMenuItemComponent.prototype, "getDisableCls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownMenuItemComponent.prototype, "active", {
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
    DropdownMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: '[atDropMenuItem]',
                    template: "<ng-content>\n  </ng-content>\n  "
                },] },
    ];
    /** @nocollapse */
    DropdownMenuItemComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    DropdownMenuItemComponent.propDecorators = {
        "disabled": [{ type: Input },],
        "divided": [{ type: Input },],
        "item_class": [{ type: HostBinding, args: ["class.at-dropdown-menu__item",] },],
        "setActive": [{ type: HostListener, args: ['click',] },],
        "activeCls": [{ type: HostBinding, args: ['class.at-dropdown-menu__item--active',] },],
        "getDivide": [{ type: HostBinding, args: ['class.at-dropdown-menu__item--divided',] },],
        "getDisableCls": [{ type: HostBinding, args: ['class.at-dropdown-menu__item--disabled',] },],
        "active": [{ type: Input, args: ['active',] },],
    };
    return DropdownMenuItemComponent;
}());
export { DropdownMenuItemComponent };
function DropdownMenuItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DropdownMenuItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DropdownMenuItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DropdownMenuItemComponent.propDecorators;
    /** @type {?} */
    DropdownMenuItemComponent.prototype._el;
    /** @type {?} */
    DropdownMenuItemComponent.prototype.nativeElement;
    /** @type {?} */
    DropdownMenuItemComponent.prototype._disabled;
    /** @type {?} */
    DropdownMenuItemComponent.prototype._divided;
    /** @type {?} */
    DropdownMenuItemComponent.prototype._active;
    /** @type {?} */
    DropdownMenuItemComponent.prototype.item_class;
    /** @type {?} */
    DropdownMenuItemComponent.prototype._elementRef;
    /** @type {?} */
    DropdownMenuItemComponent.prototype._renderer;
}
