/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostBinding, HostListener, Inject, Input, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuComponent } from "../menu.component";
import { style, animate, state, transition, trigger } from '@angular/animations';
var SubMenuComponent = (function () {
    function SubMenuComponent(_elementRef, parent, _renderer) {
        this._elementRef = _elementRef;
        this.parent = parent;
        this._renderer = _renderer;
        this._active = false;
        this._isOpen = false;
        this._popoverCss = { left: '0px', right: '0px', top: '0px' };
        this.item_class = true;
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    SubMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(SubMenuComponent.prototype, "expandState", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isOpen && this.parent.atType == 'inline') {
                return 'expand';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubMenuComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SubMenuComponent.prototype.setActive = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(SubMenuComponent.prototype, "activeCls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubMenuComponent.prototype, "OpenCls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubMenuComponent.prototype, "active", {
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
    /**
     * @param {?} e
     * @return {?}
     */
    SubMenuComponent.prototype.onMouseEnterEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (this.parent._atType === 'inline')
            return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.resetDropDownPosition(e);
            _this.isOpen = true;
        }, 200);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SubMenuComponent.prototype.onMouseLeaveEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (this.parent._atType === 'inline')
            return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.isOpen = false;
        }, 200);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SubMenuComponent.prototype.resetDropDownPosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var /** @type {?} */ left = 'initial';
        var /** @type {?} */ right = '0';
        var /** @type {?} */ attributes = Array.from(this._elementRef.nativeElement.parentNode.attributes).map(function (a) {
            return a['name'];
        });
        if (this.parent.atType == 'horizontal') {
            var /** @type {?} */ height = this._elementRef.nativeElement.offsetHeight;
            //子级情况
            if (!attributes.includes('atmenu')) {
                right = (-this._elementRef.nativeElement.offsetWidth).toString() + 'px';
                height = '0';
            }
            this._popoverCss = { left: left, right: right, top: height + 'px' };
        }
        else if (this.parent.atType == 'vertical') {
            right = (-this._elementRef.nativeElement.offsetWidth).toString() + 'px';
            this._popoverCss = { left: left, right: right, top: '0' + 'px' };
        }
    };
    /**
     * @return {?}
     */
    SubMenuComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this._isOpen = !this._isOpen;
    };
    SubMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: '[atSubMenu]',
                    template: "\n    <div class=\"at-menu__submenu-title\"\n         (mouseenter)=\"onMouseEnterEvent($event)\"\n         (mouseleave)=\"onMouseLeaveEvent($event)\"\n         (click)=\"show()\"\n    >\n      <ng-content select=\"[title]\"></ng-content>\n    </div>\n    <div\n      *ngIf=\"isOpen && parent.atType != 'inline'\"\n      [ngStyle]=\"{'left': _popoverCss.left ,'right': _popoverCss.right,'top': _popoverCss.top}\"\n      (mouseenter)=\"onMouseEnterEvent($event)\"\n      (mouseleave)=\"onMouseLeaveEvent($event)\"\n      class=\"at-dropdown__popover\">\n      <ng-content></ng-content>\n    </div>\n    <!--<ng-content [@slide-up] *ngIf=\"isOpen\" select=\"[inlineMenu]\"></ng-content>-->\n\n    <div\n      [@fadeAnimation]\n      [@expandAnimation]=\"expandState\"\n      *ngIf=\"isOpen\">\n      <ng-content select=\"[inlineMenu]\"></ng-content>\n    </div>\n  ",
                    animations: [
                        trigger('fadeAnimation', [
                            state('*', style({ opacity: 1 })),
                            transition('* => void', [
                                animate(150, style({ opacity: 0, display: 'none' }))
                            ]),
                            transition('void => *', [
                                style({ opacity: '0' }),
                                animate(150, style({ opacity: 1 }))
                            ])
                        ]),
                        trigger('expandAnimation', [
                            transition('expand => void', [
                                style({ height: '*', overflow: 'hidden' }),
                                animate(150, style({ height: 0 }))
                            ]),
                            transition('void => expand', [
                                style({ height: 0, overflow: 'hidden' }),
                                animate(150, style({ height: '*' }))
                            ])
                        ])
                    ],
                },] },
    ];
    /** @nocollapse */
    SubMenuComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: MenuComponent, decorators: [{ type: Inject, args: [MenuComponent,] },] },
        { type: Renderer2, },
    ]; };
    SubMenuComponent.propDecorators = {
        "isOpen": [{ type: Input },],
        "item_class": [{ type: HostBinding, args: ["class.at-menu__submenu",] },],
        "setActive": [{ type: HostListener, args: ['click',] },],
        "activeCls": [{ type: HostBinding, args: ['class.at-menu__item--active',] },],
        "OpenCls": [{ type: HostBinding, args: ['class.at-menu__submenu--opened',] },],
        "active": [{ type: Input },],
        "popover": [{ type: ViewChild, args: ['popover',] },],
    };
    return SubMenuComponent;
}());
export { SubMenuComponent };
function SubMenuComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SubMenuComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SubMenuComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SubMenuComponent.propDecorators;
    /** @type {?} */
    SubMenuComponent.prototype._el;
    /** @type {?} */
    SubMenuComponent.prototype.nativeElement;
    /** @type {?} */
    SubMenuComponent.prototype._active;
    /** @type {?} */
    SubMenuComponent.prototype._isOpen;
    /** @type {?} */
    SubMenuComponent.prototype._popoverCss;
    /** @type {?} */
    SubMenuComponent.prototype.timeout;
    /** @type {?} */
    SubMenuComponent.prototype.item_class;
    /** @type {?} */
    SubMenuComponent.prototype.popover;
    /** @type {?} */
    SubMenuComponent.prototype._elementRef;
    /** @type {?} */
    SubMenuComponent.prototype.parent;
    /** @type {?} */
    SubMenuComponent.prototype._renderer;
}
