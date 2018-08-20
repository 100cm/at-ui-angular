/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
export class DropdownMenuItemComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
    }
    /**
     * @return {?}
     */
    get divided() {
        return this._divided;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set divided(value) {
        this._divided = value;
    }
    /**
     * @return {?}
     */
    setActive() {
    }
    /**
     * @return {?}
     */
    get activeCls() {
        return this._active;
    }
    /**
     * @return {?}
     */
    get getDivide() {
        return this._divided;
    }
    /**
     * @return {?}
     */
    get getDisableCls() {
        return this.disabled;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this._active = active;
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
}
DropdownMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[atDropMenuItem]',
                template: `<ng-content>
  </ng-content>
  `
            },] },
];
/** @nocollapse */
DropdownMenuItemComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
DropdownMenuItemComponent.propDecorators = {
    "disabled": [{ type: Input },],
    "divided": [{ type: Input },],
    "item_class": [{ type: HostBinding, args: [`class.at-dropdown-menu__item`,] },],
    "setActive": [{ type: HostListener, args: ['click',] },],
    "activeCls": [{ type: HostBinding, args: ['class.at-dropdown-menu__item--active',] },],
    "getDivide": [{ type: HostBinding, args: ['class.at-dropdown-menu__item--divided',] },],
    "getDisableCls": [{ type: HostBinding, args: ['class.at-dropdown-menu__item--disabled',] },],
    "active": [{ type: Input, args: ['active',] },],
};
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
