import * as tslib_1 from "tslib";
import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Injectable, InjectionToken, Injector, Input, NgModule, NgZone, Output, Pipe, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { Subject as Subject$1 } from 'rxjs/Subject';
import { fromEvent as fromEvent$1 } from 'rxjs/observable/fromEvent';
import { debounceTime as debounceTime$1 } from 'rxjs/operators/debounceTime';
import { mapTo as mapTo$1 } from 'rxjs/operators/mapTo';
import { merge as merge$1 } from 'rxjs/operators/merge';
import { setTimeout as setTimeout$1 } from 'timers';
import moment from 'moment';
import 'moment/locale/zh-cn';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonComponent = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function ButtonComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._type = 'default';
        this._prefixCls = 'at-btn';
        this._classList = [];
        this._iconLoading = false;
        this.showText = true;
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, this._prefixCls);
    }
    Object.defineProperty(ButtonComponent.prototype, "atType", {
        /**
         * @return {?}
         */
        get: function () {
            return this._type;
        },
        /**
         * @param {?} type
         * @return {?}
         */
        set: function (type) {
            this._type = type;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "atShape", {
        /**
         * @return {?}
         */
        get: function () {
            return this._shape;
        },
        /**
         * @param {?} shape
         * @return {?}
         */
        set: function (shape) {
            this._shape = shape;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "atIcon", {
        /**
         * @return {?}
         */
        get: function () {
            return this._icon;
        },
        /**
         * @param {?} icon
         * @return {?}
         */
        set: function (icon) {
            this._icon = icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "iconLoading", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._iconLoading = value;
            value == false ? this._icon = null : this._icon = 'at-btn__loading icon-loader';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "size", {
        /**
         * @return {?}
         */
        get: function () {
            return this._size;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._size = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype._setClassMap = function () {
        var _this = this;
        this._classList.forEach(function (_className) {
            _this._renderer.removeClass(_this._el, _className);
        });
        this._classList = [
            this.atType && this._prefixCls + "--" + this.atType,
            this.atShape && this._prefixCls + "--" + this.atShape,
            this.size && this._prefixCls + "--" + this.size
        ].filter(function (item) {
            return !!item;
        });
        this._classList.forEach(function (_className) {
            _this._renderer.addClass(_this._el, _className);
        });
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngAfterContentInit = function () {
        // console.log(this.text)
        this.showText = ((this.text.nativeElement.innerText || []).length > 0 || (this.text.nativeElement.children || []).length > 0);
    };
    return ButtonComponent;
}());
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[atButton]',
                template: "<i *ngIf=\"atIcon != null\" class=\"at-btn__icon icon {{atIcon}}\"></i>\n  <span #text [hidden]=\"!showText\" class=\"at-btn__text\">\n  <ng-content></ng-content>\n</span>\n\n  ",
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
ButtonComponent.propDecorators = {
    "atType": [{ type: Input },],
    "atShape": [{ type: Input },],
    "atIcon": [{ type: Input },],
    "iconLoading": [{ type: Input },],
    "size": [{ type: Input },],
    "text": [{ type: ViewChild, args: ['text',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HollowDirective = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function HollowDirective(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    HollowDirective.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el, "at-btn--" + this.atType + "--hollow");
    };
    return HollowDirective;
}());
HollowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hollow]'
            },] },
];
/** @nocollapse */
HollowDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
HollowDirective.propDecorators = {
    "atType": [{ type: Input, args: ['atType',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonGroupComponent = (function () {
    function ButtonGroupComponent() {
    }
    /**
     * @return {?}
     */
    ButtonGroupComponent.prototype.ngOnInit = function () {
    };
    return ButtonGroupComponent;
}());
ButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-button-group',
                template: "<div class=\"at-btn-group\">\n    <ng-content></ng-content>\n  </div>\n  ",
            },] },
];
/** @nocollapse */
ButtonGroupComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MenuComponent = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function MenuComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._atType = 'vertical';
        this._classList = [];
        this._prefixCls = 'at-menu';
        this._theme = 'light';
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, this._prefixCls);
    }
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MenuComponent.prototype, "theme", {
        /**
         * @return {?}
         */
        get: function () {
            return this._theme;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._theme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "atType", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atType;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "verticalClass", {
        /**
         * @return {?}
         */
        get: function () {
            return this.atType == 'vertical';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "horizontalClass", {
        /**
         * @return {?}
         */
        get: function () {
            return this.atType == 'horizontal';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "inlineClass", {
        /**
         * @return {?}
         */
        get: function () {
            return this.atType == 'inline';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "darkTheme", {
        /**
         * @return {?}
         */
        get: function () {
            return this.theme == 'dark';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "lightTheme", {
        /**
         * @return {?}
         */
        get: function () {
            return this.theme == 'light';
        },
        enumerable: true,
        configurable: true
    });
    return MenuComponent;
}());
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[atMenu]',
                template: "<div selector></div>\n  <ng-content ></ng-content>\n  ",
            },] },
];
/** @nocollapse */
MenuComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
MenuComponent.propDecorators = {
    "theme": [{ type: Input, args: ['theme',] },],
    "atType": [{ type: Input },],
    "verticalClass": [{ type: HostBinding, args: ["class.at-menu--vertical",] },],
    "horizontalClass": [{ type: HostBinding, args: ["class.at-menu--horizontal",] },],
    "inlineClass": [{ type: HostBinding, args: ["class.at-menu--inline",] },],
    "darkTheme": [{ type: HostBinding, args: ['class.at-menu--dark',] },],
    "lightTheme": [{ type: HostBinding, args: ['class.at-menu--light',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MenuItemComponent = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
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
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    MenuItemComponent.prototype.setActive = function () {
    };
    Object.defineProperty(MenuItemComponent.prototype, "activeCls", {
        /**
         * @return {?}
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuItemComponent.prototype, "active", {
        /**
         * @return {?}
         */
        get: function () {
            return this._active;
        },
        /**
         * @param {?} active
         * @return {?}
         */
        set: function (active) {
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    return MenuItemComponent;
}());
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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SubMenuComponent = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} parent
     * @param {?} _renderer
     */
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
    SubMenuComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SubMenuComponent.prototype, "expandState", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.isOpen && this.parent.atType == 'inline') {
                return 'expand';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubMenuComponent.prototype, "isOpen", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isOpen;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SubMenuComponent.prototype.setActive = function () {
    };
    Object.defineProperty(SubMenuComponent.prototype, "activeCls", {
        /**
         * @return {?}
         */
        get: function () {
            return this.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubMenuComponent.prototype, "OpenCls", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubMenuComponent.prototype, "active", {
        /**
         * @return {?}
         */
        get: function () {
            return this._active;
        },
        /**
         * @param {?} active
         * @return {?}
         */
        set: function (active) {
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SubMenuComponent.prototype.onMouseEnterEvent = function (e) {
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
    SubMenuComponent.prototype.onMouseLeaveEvent = function (e) {
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
    SubMenuComponent.prototype.resetDropDownPosition = function (e) {
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
    SubMenuComponent.prototype.show = function () {
        this._isOpen = !this._isOpen;
    };
    return SubMenuComponent;
}());
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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MenuItemGroupComponent = (function () {
    /**
     * @param {?} parent
     */
    function MenuItemGroupComponent(parent) {
        this.parent = parent;
        this.inline = true;
    }
    /**
     * @return {?}
     */
    MenuItemGroupComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MenuItemGroupComponent.prototype, "drop_down", {
        /**
         * @return {?}
         */
        get: function () {
            return this.parent.atType != 'inline';
        },
        enumerable: true,
        configurable: true
    });
    return MenuItemGroupComponent;
}());
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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MenuListComponent = (function () {
    function MenuListComponent() {
        this.menu = true;
    }
    /**
     * @return {?}
     */
    MenuListComponent.prototype.ngOnInit = function () {
    };
    return MenuListComponent;
}());
MenuListComponent.decorators = [
    { type: Component, args: [{
                selector: '[atMenuList]',
                template: "<ng-content></ng-content>\n",
            },] },
];
/** @nocollapse */
MenuListComponent.ctorParameters = function () { return []; };
MenuListComponent.propDecorators = {
    "menu": [{ type: HostBinding, args: ['class.at-dropdown-menu',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RadioGroupComponent = (function () {
    function RadioGroupComponent() {
        this._size = 'common';
        this.radios = [];
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    RadioGroupComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RadioGroupComponent.prototype, "size", {
        /**
         * @return {?}
         */
        get: function () {
            return this._size;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} radio
     * @return {?}
     */
    RadioGroupComponent.prototype.addRadio = function (radio) {
        this.radios.push(radio);
    };
    /**
     * @param {?} radioComponent
     * @return {?}
     */
    RadioGroupComponent.prototype.selectRadio = function (radioComponent) {
        this.updateValue(radioComponent.atValue);
        this.onChange(radioComponent.atValue);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioGroupComponent.prototype.writeValue = function (value) {
        this.updateValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioGroupComponent.prototype.updateValue = function (value) {
        var _this = this;
        if (this._value === value) {
            return;
        }
        this._value = value;
        this.radios.forEach(function (item) {
            item.checked = item.atValue === _this._value;
        });
    };
    /**
     * @return {?}
     */
    RadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.radios.forEach(function (radio) {
            if (_this.size) {
                radio._renderer.addClass(radio._el, radio._prefixCls + "--" + _this.size);
            }
        });
    };
    return RadioGroupComponent;
}());
RadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'atRadioGroup',
                template: "<div class=\"at-radio-group\">\n    <ng-content>\n\n    </ng-content>\n  </div>\n  ",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return RadioGroupComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
RadioGroupComponent.ctorParameters = function () { return []; };
RadioGroupComponent.propDecorators = {
    "size": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RadioComponent = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _RadioGroup
     * @param {?} _renderer
     */
    function RadioComponent(_elementRef, _RadioGroup, _renderer) {
        this._elementRef = _elementRef;
        this._RadioGroup = _RadioGroup;
        this._renderer = _renderer;
        this._checked = false;
        this._disabled = false;
        this._prefixCls = 'at-radio';
        this._RadioGroup.addRadio(this);
        this._el = this._elementRef.nativeElement;
    }
    Object.defineProperty(RadioComponent.prototype, "atValue", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atValue;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioComponent.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._disabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioComponent.prototype, "checked", {
        /**
         * @return {?}
         */
        get: function () {
            return this._checked;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RadioComponent.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el, "" + this._prefixCls);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    RadioComponent.prototype.onClick = function (e) {
        e.preventDefault();
        if (!this._disabled) {
            this._checked = true;
            this._RadioGroup.selectRadio(this);
        }
    };
    return RadioComponent;
}());
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: '[atRadio]',
                encapsulation: ViewEncapsulation.None,
                template: "<span class=\"at-radio__input\">\n    <span class=\"at-radio__inner\" [ngClass]=\"{'at-radio--checked':checked ,'at-radio--disabled': disabled}\"></span>\n    <input type=\"radio\" [disabled]=\"disabled\" class=\"at-radio__original\" [(ngModel)]=\"checked\"></span>\n  <span class=\"at-radio__label\">\n    <ng-content>\n\n    </ng-content>\n  </span>\n\n  ",
            },] },
];
/** @nocollapse */
RadioComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: RadioGroupComponent, },
    { type: Renderer2, },
]; };
RadioComponent.propDecorators = {
    "atValue": [{ type: Input },],
    "disabled": [{ type: Input },],
    "checked": [{ type: Input },],
    "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InlineMenuComponent = (function () {
    function InlineMenuComponent() {
        this.at_menu = true;
    }
    /**
     * @return {?}
     */
    InlineMenuComponent.prototype.ngOnInit = function () {
    };
    return InlineMenuComponent;
}());
InlineMenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[inlineMenu]',
                template: "<ng-content></ng-content>\n  ",
            },] },
];
/** @nocollapse */
InlineMenuComponent.ctorParameters = function () { return []; };
InlineMenuComponent.propDecorators = {
    "at_menu": [{ type: HostBinding, args: ['class.at-menu',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RowComponent = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function RowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._classList = [];
        this._noGutter = false;
        this._reverse = false;
        this._el = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, 'row');
        this._renderer.addClass(this._el, 'at-row');
    }
    Object.defineProperty(RowComponent.prototype, "reverse", {
        /**
         * @return {?}
         */
        get: function () {
            return this._reverse;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._reverse = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowComponent.prototype, "noGutter", {
        /**
         * @return {?}
         */
        get: function () {
            return this._noGutter;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._noGutter = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowComponent.prototype, "alignType", {
        /**
         * @return {?}
         */
        get: function () {
            return ((this._alignType && "flex-" + this._alignType));
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._alignType = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowComponent.prototype, "flexType", {
        /**
         * @return {?}
         */
        get: function () {
            return ((this._flexType && "flex-" + this._flexType));
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._flexType = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RowComponent.prototype._setClassMap = function () {
        var _this = this;
        this._classList.forEach(function (_className) {
            _this._renderer.removeClass(_this._el, _className);
        });
        this._classList = [
            this.flexType && "" + this.flexType,
            this.alignType && "" + this.alignType,
            this.reverse && "reverse",
            this.noGutter && 'no-gutter'
        ].filter(function (item) {
            return !!item;
        });
        this._classList.forEach(function (_className) {
            _this._renderer.addClass(_this._el, _className);
        });
    };
    /**
     * @return {?}
     */
    RowComponent.prototype.ngOnInit = function () {
    };
    return RowComponent;
}());
RowComponent.decorators = [
    { type: Component, args: [{
                selector: '[atRow]',
                template: "<ng-content></ng-content>\n",
            },] },
];
/** @nocollapse */
RowComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
RowComponent.propDecorators = {
    "reverse": [{ type: Input },],
    "noGutter": [{ type: Input },],
    "alignType": [{ type: Input },],
    "flexType": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ColComponent = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function ColComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._classList = [];
        this._col_type = 'md';
        this._el = this._elementRef.nativeElement;
    }
    Object.defineProperty(ColComponent.prototype, "colType", {
        /**
         * @return {?}
         */
        get: function () {
            return this._col_type;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._col_type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColComponent.prototype, "span", {
        /**
         * @return {?}
         */
        get: function () {
            return this._span;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._span = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColComponent.prototype, "offset", {
        /**
         * @return {?}
         */
        get: function () {
            return this._offset;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._offset = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColComponent.prototype.ngOnInit = function () {
    };
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    ColComponent.prototype.setClassMap = function () {
        var _this = this;
        this._classList.forEach(function (_className) {
            _this._renderer.removeClass(_this._el, _className);
        });
        this._classList = [
            this.span && "col-" + this.colType + "-" + this.span,
            this.offset && "col-" + this.colType + "-offset-" + this.offset
        ];
        this._classList = this._classList.filter(function (item) {
            return !!item;
        });
        this._classList.forEach(function (_className) {
            _this._renderer.addClass(_this._el, _className);
        });
    };
    return ColComponent;
}());
ColComponent.decorators = [
    { type: Component, args: [{
                selector: '[atCol]',
                template: "\n    <ng-content></ng-content>\n  ",
            },] },
];
/** @nocollapse */
ColComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
ColComponent.propDecorators = {
    "colType": [{ type: Input },],
    "span": [{ type: Input },],
    "offset": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TagAnimation = trigger('tagAnimation', [
    state('*', style({ opacity: 1, transform: 'scale(1)' })),
    transition('void => *', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('150ms linear')
    ]),
    state('void', style({ opacity: 0, transform: 'scale(0)' })),
    transition('* => void', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('150ms linear')
    ])
]);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var tagThemes = ['default', 'primary', 'success', 'error', 'warning'];
var TagComponent = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function TagComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._classList = [];
        this._prefixCls = 'at-tag';
        this.viewChecked = false;
        this._closed = false;
        this._closeable = false;
        this._color = 'default';
        this.onClose = new EventEmitter();
        this._el = this._elementRef.nativeElement;
    }
    Object.defineProperty(TagComponent.prototype, "color", {
        /**
         * @return {?}
         */
        get: function () {
            return this._color;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._color = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagComponent.prototype, "closeable", {
        /**
         * @return {?}
         */
        get: function () {
            return this._closeable;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._closeable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagComponent.prototype, "closed", {
        /**
         * @return {?}
         */
        get: function () {
            return this._closed;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._closed = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TagComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TagComponent.prototype._setClassMap = function () {
        var _this = this;
        if (this.tagSpan) {
            this.viewChecked = true;
            this._renderer.addClass(this.tagSpan.nativeElement, this._prefixCls);
            this._classList.forEach(function (_className) {
                _this._renderer.removeClass(_this.tagSpan.nativeElement, _className);
            });
            this._classList = [
                tagThemes.includes(this.color) && this._prefixCls + "--" + this.color,
            ].filter(function (item) {
                return !!item;
            });
            this._classList.forEach(function (_className) {
                _this._renderer.addClass(_this.tagSpan.nativeElement, _className);
            });
            //set other colors
            if (!tagThemes.includes(this.color)) {
                this._renderer.setStyle(this.tagSpan.nativeElement, 'background-color', this.color);
                this._renderer.setStyle(this.tagSpan.nativeElement, 'border-color', this.color);
            }
        }
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.ngAfterContentInit = function () {
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.ngAfterViewChecked = function () {
        if (!this.viewChecked) {
            this._setClassMap();
        }
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.closeTag = function () {
        this.closed = true;
        this.onClose.emit(this.closed);
    };
    return TagComponent;
}());
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTag',
                template: "<span #tag *ngIf=\"!closed\"\n                  [@tagAnimation]\n  >\n  <span class=\"at-tag__text\">\n    <ng-content></ng-content>\n    <i class=\"icon icon-x at-tag__close\" *ngIf=\"closeable\" (click)=\"closeTag()\"></i>\n</span>\n\n</span>\n\n  ",
                animations: [
                    TagAnimation
                ],
            },] },
];
/** @nocollapse */
TagComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
TagComponent.propDecorators = {
    "tagSpan": [{ type: ViewChild, args: ['tag',] },],
    "color": [{ type: Input },],
    "closed": [{ type: Input },],
    "closeable": [{ type: Input },],
    "onClose": [{ type: Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IconComponent = (function () {
    function IconComponent() {
    }
    /**
     * @return {?}
     */
    IconComponent.prototype.ngOnInit = function () {
    };
    return IconComponent;
}());
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'atIcon',
                template: "<i [ngStyle]=\"{'font-size':size+'px'}\" class=\"icon icon-{{type}}\"></i>\n  ",
            },] },
];
/** @nocollapse */
IconComponent.ctorParameters = function () { return []; };
IconComponent.propDecorators = {
    "type": [{ type: Input },],
    "size": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CheckboxComponent = (function () {
    function CheckboxComponent() {
        this._checked = false;
        this._atDisabled = false;
        this.changeCheck = new EventEmitter();
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(CheckboxComponent.prototype, "atDisabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atDisabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "checked", {
        /**
         * @return {?}
         */
        get: function () {
            return this._checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "label", {
        /**
         * @return {?}
         */
        get: function () {
            return this._label;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CheckboxComponent.prototype.check = function (e) {
        e.preventDefault();
        if (!this.atDisabled) {
            this._checked = !this._checked;
            this.onChange(this._checked);
            this.changeCheck.emit(this._checked);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxComponent.prototype.writeValue = function (value) {
        this._checked = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return CheckboxComponent;
}());
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCheckbox',
                template: "<label (click)=\"check($event)\"\n                    [ngClass]=\"{'at-checkbox--checked': checked,'at-checkbox--disabled': atDisabled}\"\n                    class=\"at-checkbox\">\n\n  <span class=\"at-checkbox__input\"><span\n    class=\"at-checkbox__inner\"></span>\n\n  <input type=\"checkbox\" class=\"at-checkbox__original\"></span>\n\n    <span class=\"at-checkbox__label\">{{label}}</span>\n  </label>\n  ",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return CheckboxComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = function () { return []; };
CheckboxComponent.propDecorators = {
    "atDisabled": [{ type: Input },],
    "changeCheck": [{ type: Output },],
    "label": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CheckboxGroupComponent = (function () {
    function CheckboxGroupComponent() {
        this._checkList = [];
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    CheckboxGroupComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    CheckboxGroupComponent.prototype.changeList = function () {
        this.onChange(this._checkList);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxGroupComponent.prototype.writeValue = function (value) {
        this._checkList = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    CheckboxGroupComponent.prototype.ngAfterContentInit = function () {
    };
    return CheckboxGroupComponent;
}());
CheckboxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCheckboxGroup',
                template: "<div class=\"at-checkbox-group\">\n  <atCheckbox *ngFor=\"let option of _checkList\" [label]=\"option.label\"\n              [(ngModel)]=\"option.checked\"\n              (changeCheck)=\"changeList()\">\n\n  </atCheckbox>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return CheckboxGroupComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
CheckboxGroupComponent.ctorParameters = function () { return []; };
CheckboxGroupComponent.propDecorators = {
    "checkbox": [{ type: ContentChildren, args: [CheckboxComponent,] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputComponent = (function () {
    /**
     * @param {?} el
     */
    function InputComponent(el) {
        this.el = el;
        this._atStatus = "original";
        this._atType = "normal";
        this._disabled = false;
        this._placeholder = '';
        this._type = 'text';
        this._atSize = 'normal';
        this._step = 1;
        this.isMax = false;
        this.isMin = false;
        this._prefixCls = 'at-input';
        this._BindClass = {};
        this.onFocus = new EventEmitter();
        this.onFocusOut = new EventEmitter();
        this.showAppend = true;
        this.showPrepend = true;
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.value_change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(InputComponent.prototype, "max", {
        /**
         * @return {?}
         */
        get: function () {
            return this._max;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._max = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "min", {
        /**
         * @return {?}
         */
        get: function () {
            return this._min;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._min = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "atType", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atType;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atType = value;
            if (value == 'number') {
                this._prefixCls = 'at-input-number';
                this._value = this.value || 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "step", {
        /**
         * @return {?}
         */
        get: function () {
            return this._step;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._step = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this._value;
        },
        /**
         * @param {?} Ivalue
         * @return {?}
         */
        set: function (Ivalue) {
            if (this.atType == 'number') {
                if ((this.min && Ivalue < this.min) || (this.max && Ivalue > this.max)) {
                    Ivalue = 0;
                }
            }
            this._value = Ivalue;
            this.setNumberStatus();
            this.onChange(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "atSize", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atSize;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "icon", {
        /**
         * @return {?}
         */
        get: function () {
            return this._icon;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "type", {
        /**
         * @return {?}
         */
        get: function () {
            return this._type;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._disabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "atStatus", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atStatus;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atStatus = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputComponent.prototype, "placeholder", {
        /**
         * @return {?}
         */
        get: function () {
            return this._placeholder;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    InputComponent.prototype.ngAfterContentInit = function () {
        this.showAppend = (this.trim(this.append.nativeElement.innerHTML).length > 0);
        this.showPrepend = (this.trim(this.prepend.nativeElement.innerHTML).length > 0);
        this._BindClass[this._prefixCls + "--disabled"] = this.disabled;
        this._BindClass['at-input-group'] = (this.showAppend || this.showPrepend);
        this._BindClass['at-input--prepend'] = this.showPrepend;
        this._BindClass['at-input--append'] = this.showAppend;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    InputComponent.prototype.trim = function (str) {
        return str.replace(/(^\s+)|(\s+$)/g, "");
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InputComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    InputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    InputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.numberUp = function () {
        this._value = this._value || 0;
        if ((this.max && this._value >= this.max)) {
        }
        else {
            this._value += this.step;
        }
        this.setNumberStatus();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.numberDown = function () {
        this._value = this._value || 0;
        if ((this.min && this._value <= this.min)) {
        }
        else {
            this._value -= this.step;
        }
        this.setNumberStatus();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.setNumberStatus = function () {
        if (this.max && this._value >= this.max) {
            this.isMax = true;
            this._value = this.max;
            this.onChange(this.value);
        }
        else {
            this.isMax = false;
        }
        if (this.min && this._value <= this.min) {
            this.isMin = true;
            this._value = this.min;
            this.onChange(this.value);
        }
        else {
            this.isMin = false;
        }
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.change = function () {
        this.value_change.emit(this._value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    InputComponent.prototype.focus = function ($event) {
        this.onFocus.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    InputComponent.prototype.focusOut = function ($event) {
        this.onFocusOut.emit($event);
    };
    return InputComponent;
}());
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'atInput',
                template: "\n    <div class=\"{{_prefixCls}} {{_prefixCls}}--{{atSize}} {{_prefixCls}}--{{atStatus}}\"\n         [ngClass]=\"_BindClass\">\n      <div #prepend [hidden]=\"!showPrepend\" [ngClass]=\"{'at-input-group__prepend': showPrepend}\">\n        <ng-content select=\"[atPrepend]\"></ng-content>\n      </div>\n\n      <ng-template [ngIf]=\"atType == 'normal'\">\n        <input #input [(ngModel)]=\"value\" placeholder=\"{{placeholder}}\"\n               (focus)=\"focus($event)\" (focusout)=\"focusOut($event)\" type=\"{{type}}\" [disabled]=\"disabled\"\n               class=\"{{_prefixCls}}__original\">\n      </ng-template>\n\n      <ng-template [ngIf]=\"atType == 'number'\">\n        <div class=\"at-input-number__input\">\n          <input [(ngModel)]=\"value\" placeholder=\"{{placeholder}}\" type=\"number\" [disabled]=\"disabled\"\n                 class=\"{{_prefixCls}}__original\">\n\n          <div class=\"at-input-number__handler\">\n            <span (click)=\"numberUp()\" class=\"at-input-number__up\"\n                  [ngClass]=\"{'at-input-number__up--disabled':isMax}\"><i class=\"icon icon-chevron-up\"></i></span>\n            <span (click)=\"numberDown()\" class=\"at-input-number__down\"\n                  [ngClass]=\"{'at-input-number__up--disabled':isMin}\"><i class=\"icon icon-chevron-down\"></i></span>\n          </div>\n        </div>\n      </ng-template>\n\n      <i *ngIf=\"icon\" class=\"at-input__icon icon icon-{{icon}}\"></i>\n\n      <div #append [ngClass]=\"{'at-input-group__append': showAppend}\" [hidden]=\"!showAppend\">\n        <ng-content select=\"[atAppend]\"></ng-content>\n      </div>\n\n    </div>\n  ",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return InputComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
InputComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
InputComponent.propDecorators = {
    "max": [{ type: Input },],
    "min": [{ type: Input },],
    "step": [{ type: Input },],
    "atType": [{ type: Input },],
    "onFocus": [{ type: Output },],
    "onFocusOut": [{ type: Output },],
    "atSize": [{ type: Input },],
    "icon": [{ type: Input },],
    "type": [{ type: Input },],
    "disabled": [{ type: Input },],
    "atStatus": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "prepend": [{ type: ViewChild, args: ['prepend',] },],
    "append": [{ type: ViewChild, args: ['append',] },],
    "inputField": [{ type: ViewChild, args: ['input',] },],
    "value_change": [{ type: Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropDownAnimation = trigger('dropDownAnimation', [
    state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    transition('void => bottom', [
        style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }),
        animate('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    transition('void => top', [
        style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 100%'
        }),
        animate('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    transition('* => void', [
        animate('250ms 100ms linear', style({ opacity: 0 }))
    ])
]);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FadeAnimation = trigger('fadeAnimation', [
    state('void', style({ opacity: 0 })),
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0 })),
    transition('* => true', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    transition('* => void', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
]);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectComponent = (function () {
    function SelectComponent() {
        var _this = this;
        this._dropdown = false;
        this.top = '';
        this.showLabel = true;
        this.options = [];
        this._selectedLabel = '';
        this._searchable = false;
        this._allowClear = false;
        this._atSize = 'normal';
        this._multiple = false;
        this._disabled = false;
        this._hover = false;
        this._tagAble = false;
        this.change = new EventEmitter();
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.unSelectMultipleOption = function (option, $event, emitChange) {
            if (emitChange === void 0) { emitChange = true; }
            _this._selectedOptions.delete(option);
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
            if (emitChange) {
                var /** @type {?} */ arrayOptions = (Array.from(_this._selectedOptions));
                _this.onChange(arrayOptions.map(function (item) { return item.atValue; }));
            }
        };
        this._selectedOptions = new Set();
    }
    Object.defineProperty(SelectComponent.prototype, "searchable", {
        /**
         * @return {?}
         */
        get: function () {
            return this._searchable;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._searchable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "filterOptions", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.searchable) {
                return this._filterOptions;
            }
            else {
                return this.options;
            }
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._filterOptions = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} setText
     * @return {?}
     */
    SelectComponent.prototype.updateFilterOption = function (setText) {
        var _this = this;
        if (setText === void 0) { setText = false; }
        this.showLabel = false;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function (_) {
            _this._dropdown = true;
        }, 200);
        if (this._searchText) {
            this._filterOptions = this.options.filter(function (option) {
                return (option.atLabel.indexOf(_this._searchText) != -1);
            });
        }
        else {
            this._filterOptions = this.options;
        }
    };
    Object.defineProperty(SelectComponent.prototype, "tagAble", {
        /**
         * @return {?}
         */
        get: function () {
            return this._tagAble;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._tagAble = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "allowClear", {
        /**
         * @return {?}
         */
        get: function () {
            return this._allowClear;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._allowClear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "hover", {
        /**
         * @return {?}
         */
        get: function () {
            return this._hover;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._hover = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._disabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "atSize", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atSize;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "multiple", {
        /**
         * @return {?}
         */
        get: function () {
            return this._multiple;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._multiple = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "selectedLabel", {
        /**
         * @return {?}
         */
        get: function () {
            return (this._selectedOption || {})['atLabel'] || null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.addOption = function (option) {
        var _this = this;
        this.options.push(option);
        setTimeout(function (_) {
            _this.forceUpdateSelectedOption(_this._value);
        });
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = function () {
        if (this.top == '') {
            this.updateTop();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterContentInit = function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SelectComponent.prototype.handleDrop = function (e) {
        if (this.disabled) {
            return;
        }
        if (this.multiple && this._dropdown == true) {
            return;
        }
        if (this._tagAble) {
            this.tagInput.nativeElement.focus();
        }
        // if (!this.multiple) {
        this._dropdown = !this._dropdown;
        // }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.dropUp = function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function (_) {
            _this._dropdown = false;
        }, 200);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.dropDown = function () {
        var _this = this;
        if (this.disabled || !this._hover) {
            return;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function (_) {
            _this._dropdown = true;
        }, 200);
    };
    Object.defineProperty(SelectComponent.prototype, "selectedOptions", {
        /**
         * @return {?}
         */
        get: function () {
            return this.options.filter(function (option) {
                return option._selected == true;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = function (value) {
        this.updateValue(value, false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} e
     * @param {?} option
     * @param {?=} isUserClick
     * @return {?}
     */
    SelectComponent.prototype.selectOption = function (e, option, isUserClick) {
        if (isUserClick === void 0) { isUserClick = true; }
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (option) {
            if (!this.multiple) {
                this._selectedOption = option;
                this._value = option.atValue;
                if (isUserClick) {
                    this.onChange(option.atValue);
                    this.change.emit(option.atValue);
                }
            }
            else {
                this.isInSet(this._selectedOptions, option) ? this.unSelectMultipleOption(option) : this.selectMultipleOption(option);
            }
        }
        this._dropdown = false;
    };
    /**
     * @param {?} option
     * @param {?=} $event
     * @return {?}
     */
    SelectComponent.prototype.selectMultipleOption = function (option, $event) {
        this._selectedOptions.add(option);
        var /** @type {?} */ arrayOptions = (Array.from(this._selectedOptions));
        this.onChange(arrayOptions.map(function (item) { return item.atValue; }));
    };
    /**
     * @param {?} set
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.isInSet = function (set, option) {
        var /** @type {?} */ ined = (((Array.from(set)))).find(function (data) {
            return data.atValue === option.atValue;
        });
        // console.log(ined)
        return ined;
    };
    /**
     * @param {?} value
     * @param {?=} emitChange
     * @return {?}
     */
    SelectComponent.prototype.updateValue = function (value, emitChange) {
        if (emitChange === void 0) { emitChange = true; }
        // if (this._value === value) {
        //   return;
        // }
        if ((value == null) && this.multiple) {
            this._value = [];
        }
        else {
            this._value = value;
        }
        if (!this.multiple) {
            if (value == null) {
                this._selectedOption = null;
            }
            else {
                this.updateSelectedOption(value);
            }
        }
        else {
            if (value) {
                if (value.length === 0) {
                    this.clearAllSelectedOption();
                }
                else {
                    this.updateSelectedOption(value, emitChange);
                }
            }
            else if (value == null) {
                this.clearAllSelectedOption();
            }
        }
    };
    Object.defineProperty(SelectComponent.prototype, "ArraySelectOptions", {
        /**
         * @return {?}
         */
        get: function () {
            return Array.from(this._selectedOptions);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} currentModelValue
     * @param {?=} triggerByNgModel
     * @return {?}
     */
    SelectComponent.prototype.updateSelectedOption = function (currentModelValue, triggerByNgModel) {
        var _this = this;
        if (triggerByNgModel === void 0) { triggerByNgModel = false; }
        if (currentModelValue == null) {
            return;
        }
        if (this.multiple) {
            var /** @type {?} */ selectedOptions = this.options.filter(function (item) {
                return (item != null) && (currentModelValue.indexOf(item._atValue) != -1);
            });
            if (!triggerByNgModel) {
                selectedOptions.forEach(function (option) {
                    if (!_this._selectedOptions.has(option)) {
                        _this._selectedOptions.add(option);
                    }
                });
            }
            else {
                this._selectedOptions = new Set();
                selectedOptions.forEach(function (option) {
                    _this._selectedOptions.add(option);
                });
            }
        }
        else {
            var /** @type {?} */ selectedOption = this.options.filter(function (item) {
                return (item != null) && (item.atValue === currentModelValue);
            });
            this.selectOption(null, selectedOption[0], false);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clearAllSelectedOption = function () {
        this._selectedOptions = new Set();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SelectComponent.prototype.clearData = function (e) {
        e.stopPropagation();
        this.updateValue(null);
    };
    /**
     * @param {?} e
     * @param {?} data
     * @return {?}
     */
    SelectComponent.prototype.rejectData = function (e, data) {
        e.stopPropagation();
        // 如果是tag
        if (data.isTag) {
            this.options = this.options.filter(function (option) {
                return (option.atValue != data.atValue || option.isTag != true);
            });
        }
        this.selectOption(e, data);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SelectComponent.prototype.onKey = function ($event) {
        if ($event.code == 'Enter') {
            var /** @type {?} */ value = $event.target.value;
            var /** @type {?} */ option = ({
                _atLabel: value,
                atLabel: value,
                _atValue: value,
                atValue: value,
                _selected: false,
                isTag: true,
                _selectComponent: this
            });
            $event.target.value = '';
            this.options.push(option);
            this.selectOption(null, option);
            this._searchText = '';
            this.updateTop();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.forceUpdateSelectedOption = function (value) {
        var _this = this;
        if (value == null) {
            return;
        }
        setTimeout(function (_) {
            _this.updateValue(value);
        });
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateTop = function () {
        var _this = this;
        setTimeout(function (_) {
            _this.top = _this.selection.nativeElement.offsetHeight + 'px';
        });
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.resetOption = function () {
        this.filterOptions = this.options;
    };
    return SelectComponent;
}());
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'atSelect',
                template: "\n    <div (click)=\"handleDrop($event)\" (mouseenter)=\"dropDown()\" (mouseleave)=\"dropUp()\"\n         class=\"at-select at-select--{{disabled ? 'disabled' : 'visiable' }} at-select--{{multiple ? 'multiple' : 'single' }} at-select--{{atSize}}\">\n\n      <div *ngIf=\"multiple\" #selection class=\"at-select__selection\">\n    <span *ngFor=\"let item of ArraySelectOptions\" class=\"at-tag\" [@tagAnimation]>\n      <span class=\"at-tag__text\">{{item.atLabel}}</span>\n      <i (click)=\"rejectData($event,item)\" class=\"icon icon-x at-tag__close\"></i>\n    </span>\n        <span class=\"at-select__placeholder\" *ngIf=\"selectedOptions.length == 0 && showLabel\">\n\n    </span>\n        <input *ngIf=\"tagAble\" #tag_input type=\"text\"\n               [(ngModel)]=\"_searchText\"\n               (focus)=\"resetOption()\"\n               (ngModelChange)=\"updateFilterOption()\"\n               placeholder=\"\" (keyup)=\"onKey($event)\" style=\"\n    border: none;\n    outline: none;\n    left: 0;\n    top: 0;\n    display: inline-block;\n    margin: 0 24px 0 8px;\n    background-color: transparent;\">\n        <i class=\"icon icon-chevron-down at-select__arrow\"></i>\n        <i *ngIf=\"allowClear\" (click)=\"clearData($event)\" style=\"background: white\"\n           class=\"icon icon-x at-select__clear\">\n        </i>\n      </div>\n\n\n      <div #selection *ngIf=\"!multiple\" class=\"at-select__selection\">\n        <span class=\"at-select__placeholder\" *ngIf=\"!selectedLabel && showLabel\">\u8BF7\u9009\u62E9</span>\n        <span *ngIf=\"selectedLabel && showLabel\"\n              class=\"at-select__selected\">{{selectedLabel}}</span>\n        <input *ngIf=\"searchable\" #search_input type=\"text\" [(ngModel)]=\"_searchText\"\n               (focus)=\"resetOption()\"\n               (ngModelChange)=\"updateFilterOption()\" class=\"at-select__input\">\n        <i class=\"icon icon-chevron-down at-select__arrow\"></i>\n        <i *ngIf=\"allowClear\" (click)=\"clearData($event)\" style=\"background: white\"\n           class=\"icon icon-x at-select__clear\">\n        </i>\n      </div>\n\n      <div *ngIf=\"_dropdown\" [@dropDownAnimation] class=\"at-select__dropdown at-select__dropdown--bottom\"\n           [ngStyle]=\"{'top':top}\" style=\"left: 0px;\">\n        <ul class=\"at-select__not-found\" *ngIf=\"filterOptions.length == 0\">\n          <li>\u65E0\u5339\u914D\u6570\u636E</li>\n        </ul>\n        <ul class=\"at-select__list\">\n          <li (click)=\"selectOption($event,option)\"\n              [ngClass]=\"{'at-select__option--selected': isInSet(_selectedOptions,option) || _selectedOption?.atValue == option.atValue ,'at-select__option--disabled':option.disabled}\"\n              class=\"at-select__option\" *ngFor=\"let option of filterOptions\">\n            {{option.atLabel}}\n          </li>\n        </ul>\n      </div>\n\n    </div>\n  ",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SelectComponent; }),
                        multi: true
                    }
                ],
                animations: [DropDownAnimation, FadeAnimation, TagAnimation],
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = function () { return []; };
SelectComponent.propDecorators = {
    "change": [{ type: Output },],
    "searchable": [{ type: Input },],
    "tagAble": [{ type: Input },],
    "hover": [{ type: Input },],
    "allowClear": [{ type: Input },],
    "disabled": [{ type: Input },],
    "atSize": [{ type: Input },],
    "multiple": [{ type: Input },],
    "selection": [{ type: ViewChild, args: ['selection',] },],
    "tagInput": [{ type: ViewChild, args: ['tag_input',] },],
    "searchInput": [{ type: ViewChild, args: ['search_input',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RadioButtonComponent = (function (_super) {
    tslib_1.__extends(RadioButtonComponent, _super);
    function RadioButtonComponent() {
        var _this = _super.apply(this, arguments) || this;
        _this._prefixCls = 'at-radio-button';
        return _this;
    }
    Object.defineProperty(RadioButtonComponent.prototype, "buttonChecked", {
        /**
         * @return {?}
         */
        get: function () {
            return this._checked;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RadioButtonComponent.prototype.ngOnInit = function () {
        if (this.fill) {
            this._renderer.setStyle(this.content_span.nativeElement, 'background-color', this.fill);
            this._renderer.setStyle(this.content_span.nativeElement, 'border-color', this.fill);
        }
        if (this.textColor) {
            this._renderer.setStyle(this.content_span.nativeElement, 'color', this.textColor);
        }
    };
    return RadioButtonComponent;
}(RadioComponent));
RadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[atRadioButton]',
                template: "<input type=\"radio\" [disabled]=\"disabled\" class=\"at-radio-button__original\" [(ngModel)]=\"checked\">\n  <span #content_span class=\"at-radio-button__inner\">\n  <ng-content>\n\n</ng-content>\n</span>\n  ",
            },] },
];
/** @nocollapse */
RadioButtonComponent.ctorParameters = function () { return []; };
RadioButtonComponent.propDecorators = {
    "fill": [{ type: Input },],
    "textColor": [{ type: Input },],
    "buttonChecked": [{ type: HostBinding, args: ['class.at-radio--checked',] },],
    "content_span": [{ type: ViewChild, args: ['content_span',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SwitchComponent = (function () {
    function SwitchComponent() {
        this._value = false;
        this.disabled = false;
        this._atSize = 'normal';
        this.change = new EventEmitter();
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(SwitchComponent.prototype, "atSize", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atSize;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atSize = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwitchComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SwitchComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    SwitchComponent.prototype.switch = function () {
        if (!this.disabled) {
            this._value = !this._value;
            this.onChange(this._value);
            this.change.emit(this._value);
        }
    };
    return SwitchComponent;
}());
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'atSwitch',
                template: "<span class=\"at-switch at-switch--{{atSize}}\" [ngClass]=\"{'at-switch--checked':_value,'at-switch--disabled':disabled}\">\n  <span class=\"at-switch__text\">\n    {{_value ? checkText : unCheckText}}\n  </span>\n</span>\n  ",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SwitchComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
SwitchComponent.ctorParameters = function () { return []; };
SwitchComponent.propDecorators = {
    "checkText": [{ type: Input },],
    "unCheckText": [{ type: Input },],
    "disabled": [{ type: Input },],
    "change": [{ type: Output },],
    "atSize": [{ type: Input },],
    "switch": [{ type: HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OptionComponent = (function () {
    /**
     * @param {?} _selectComponent
     */
    function OptionComponent(_selectComponent) {
        this._selectComponent = _selectComponent;
        this._selected = false;
        this._isTag = false;
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    OptionComponent.prototype.ngOnInit = function () {
        this._selectComponent.addOption(this);
    };
    Object.defineProperty(OptionComponent.prototype, "isTag", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isTag;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isTag = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionComponent.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._disabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionComponent.prototype, "atValue", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atValue;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionComponent.prototype, "atLabel", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atLabel;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atLabel = value;
        },
        enumerable: true,
        configurable: true
    });
    return OptionComponent;
}());
OptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'atOption',
                template: "\n    <ng-content></ng-content>\n  ",
            },] },
];
/** @nocollapse */
OptionComponent.ctorParameters = function () { return [
    { type: SelectComponent, },
]; };
OptionComponent.propDecorators = {
    "disabled": [{ type: Input },],
    "atValue": [{ type: Input },],
    "atLabel": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SliderComponent = (function () {
    function SliderComponent() {
    }
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.mouseDown = function () {
        console.log('mouseDown');
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.mouseUp = function () {
        console.log('mouseUp');
    };
    return SliderComponent;
}());
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'atSlider',
                template: "<div (mousedown)=\"mouseDown()\" (mouseup)=\"mouseUp()\" class=\"at-slider\" data-v-a01f69b8=\"\">\n  <div class=\"at-input-number at-slider__input at-input-number--normal\" style=\"display: none;\">\n    <div class=\"at-input-number__input\"><input type=\"number\" max=\"80\" min=\"20\" class=\"at-input-number__original\"></div>\n    <div  class=\"at-input-number__handler\"><span class=\"at-input-number__up\"><i class=\"icon icon-chevron-up\"></i></span>\n      <span class=\"at-input-number__down\"><i class=\"icon icon-chevron-down\"></i></span></div>\n  </div>\n  <div class=\"at-slider__track\">\n    <div class=\"at-slider__bar\" style=\"width: 26.6667%;\"></div>\n    <div  class=\"at-slider__dot-wrapper at-slider__dot-wrapper--hover at-slider__dot-wrapper--drag\"\n         style=\"left: 26.6667%;\">\n      <div class=\"at-tooltip\"><span class=\"at-tooltip__trigger\"><div\n        class=\"at-slider__dot at-slider__dot--hover at-slider__dot--drag\"></div> </span>\n        <div class=\"at-tooltip__popper at-tooltip--top\" style=\"top: -32px; left: -9.5px;\">\n          <div class=\"at-tooltip__arrow\"></div>\n          <div class=\"at-tooltip__content\"><span>36</span></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
            },] },
];
/** @nocollapse */
SliderComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextareaComponent = (function () {
    function TextareaComponent() {
        this._value = '';
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.atPlaceholder = '请输入';
    }
    /**
     * @return {?}
     */
    TextareaComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TextareaComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this._value;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._value = value;
            this.onChange(this._value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    TextareaComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextareaComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TextareaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return TextareaComponent;
}());
TextareaComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'atTextarea',
                template: "<div class=\"at-textarea\" data-v-a01f69b8=\"\">\n  <textarea [placeholder]=\"atPlaceholder\" [(ngModel)]=\"value\" rows=\"2\" class=\"at-textarea__original\" style=\"\">\n\n  </textarea>\n  </div>\n  ",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TextareaComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
TextareaComponent.ctorParameters = function () { return []; };
TextareaComponent.propDecorators = {
    "atPlaceholder": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var POSITION_MAP = (({
    'top': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topCenter': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topLeft': {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    'topRight': {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    'right': {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
    },
    'rightTop': {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
    },
    'rightBottom': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom',
    },
    'bottom': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomCenter': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomLeft': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
    },
    'bottomRight': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
    },
    'left': {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
    },
    'leftTop': {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top',
    },
    'leftBottom': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom',
    },
}));
// TODO: The whole logic does not make sense here, _objectValues just returns a copy of original array
var DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP["top"], POSITION_MAP["right"], POSITION_MAP["bottom"], POSITION_MAP["left"]]);
var DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP["bottomLeft"], POSITION_MAP["topLeft"]]);
/**
 * @template T, S
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function arrayMap(array, iteratee) {
    var /** @type {?} */ index = -1;
    var /** @type {?} */ length = array == null ? 0 : array.length;
    var /** @type {?} */ result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
 * @template T
 * @param {?} object
 * @param {?} props
 * @return {?}
 */
function baseValues(object, props) {
    return arrayMap(props, function (key) {
        return object[key];
    });
}
/**
 * @template T
 * @param {?} object
 * @return {?}
 */
function _objectValues(object) {
    return object == null ? [] : baseValues(object, Object.keys(object));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownMenuItemComponent = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
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
    DropdownMenuItemComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DropdownMenuItemComponent.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._disabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownMenuItemComponent.prototype, "divided", {
        /**
         * @return {?}
         */
        get: function () {
            return this._divided;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._divided = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DropdownMenuItemComponent.prototype.setActive = function () {
    };
    Object.defineProperty(DropdownMenuItemComponent.prototype, "activeCls", {
        /**
         * @return {?}
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownMenuItemComponent.prototype, "getDivide", {
        /**
         * @return {?}
         */
        get: function () {
            return this._divided;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownMenuItemComponent.prototype, "getDisableCls", {
        /**
         * @return {?}
         */
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownMenuItemComponent.prototype, "active", {
        /**
         * @return {?}
         */
        get: function () {
            return this._active;
        },
        /**
         * @param {?} active
         * @return {?}
         */
        set: function (active) {
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    return DropdownMenuItemComponent;
}());
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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownDirective = (function () {
    /**
     * @param {?} elementRef
     */
    function DropdownDirective(elementRef) {
        this.elementRef = elementRef;
        this.trigger = true;
    }
    return DropdownDirective;
}());
DropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[at-dropdown]'
            },] },
];
/** @nocollapse */
DropdownDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
DropdownDirective.propDecorators = {
    "trigger": [{ type: HostBinding, args: ['class.at-dropdown__trigger',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownComponent = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetector
     */
    function DropdownComponent(_renderer, _changeDetector) {
        var _this = this;
        this._renderer = _renderer;
        this._changeDetector = _changeDetector;
        this.custom_content = false;
        this._clickHide = false;
        this._visible = false;
        this.hasFilterButton = false;
        this._triggerWidth = 0;
        this._placement = 'bottom';
        this._dropDownPosition = 'bottom';
        this._positions = DEFAULT_DROPDOWN_POSITIONS.slice();
        this.trigger = 'hover';
        this._visibleChange = new Subject$1();
        this.atVisibleChange = new EventEmitter();
        this._onVisibleChange = function (visible) {
            if (visible) {
                _this._setTriggerWidth();
            }
            if (_this.atVisible !== visible) {
                _this.atVisible = visible;
                _this.atVisibleChange.emit(_this.atVisible);
            }
            _this._changeDetector.markForCheck();
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DropdownComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    Object.defineProperty(DropdownComponent.prototype, "autoClose", {
        /**
         * @return {?}
         */
        get: function () {
            return this._clickHide;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._clickHide = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "atVisible", {
        /**
         * @return {?}
         */
        get: function () {
            return this._visible;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._visible = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "placement", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._placement = value;
            this._dropDownPosition = (this.atPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
            this._positions.unshift(/** @type {?} */ (POSITION_MAP[this._placement]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownComponent.prototype, "atPlacement", {
        /**
         * @return {?}
         */
        get: function () {
            return this._placement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DropdownComponent.prototype._onClickEvent = function () {
        if (this.trigger === 'click') {
            this._show();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DropdownComponent.prototype._onMouseEnterEvent = function (e) {
        if (this.trigger === 'hover') {
            this._show();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DropdownComponent.prototype._onMouseLeaveEvent = function (e) {
        if (this.trigger === 'hover') {
            this._hide();
        }
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype._hide = function () {
        this._visibleChange.next(false);
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype._show = function () {
        this._visibleChange.next(true);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    DropdownComponent.prototype._onPositionChange = function (position) {
        this._dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DropdownComponent.prototype._clickDropDown = function ($event) {
        $event.stopPropagation();
        if (this.autoClose) {
            this._hide();
        }
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype._setTriggerWidth = function () {
        this._triggerWidth = this._atOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        /** should remove after https://github.com/angular/material2/pull/8765 merged **/
        if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
            this._cdkOverlay.overlayRef.updateSize({
                minWidth: this._triggerWidth
            });
        }
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    DropdownComponent.prototype._startSubscribe = function (observable$) {
        this._subscription = observable$.pipe(debounceTime$1(50))
            .subscribe(this._onVisibleChange);
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnDestroy = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngAfterViewInit = function () {
        var /** @type {?} */ mouse$;
        if (this.trigger === 'hover') {
            var /** @type {?} */ mouseEnterOrigin$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'mouseenter').pipe(mapTo$1(true));
            var /** @type {?} */ mouseLeaveOrigin$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'mouseleave').pipe(mapTo$1(false));
            mouse$ = mouseEnterOrigin$.pipe(merge$1(mouseLeaveOrigin$));
        }
        if (this.trigger === 'click') {
            mouse$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'click').pipe(mapTo$1(true));
            this._renderer.listen(this._atOrigin.elementRef.nativeElement, 'click', function (e) {
                e.preventDefault();
            });
        }
        var /** @type {?} */ observable$ = mouse$.pipe(merge$1(this._visibleChange));
        this._startSubscribe(observable$);
    };
    Object.defineProperty(DropdownComponent.prototype, "_hasBackdrop", {
        /**
         * @return {?}
         */
        get: function () {
            return this.trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    return DropdownComponent;
}());
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'atDropdown',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n    <div>\n      <ng-content></ng-content>\n    </div>\n    <ng-template\n      cdkConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n      [cdkConnectedOverlayPositions]=\"_positions\"\n      [cdkConnectedOverlayOrigin]=\"_atOrigin\"\n      (backdropClick)=\"_hide()\"\n      [cdkConnectedOverlayMinWidth]=\"_triggerWidth\"\n      (positionChange)=\"_onPositionChange($event)\"\n      [cdkConnectedOverlayOpen]=\"atVisible\"\n    >\n      <div\n        class=\"{{'at-dropdown at-dropdown-placement-'+atPlacement}}\"\n        [@dropDownAnimation]=\"_dropDownPosition\"\n        (mouseenter)=\"_onMouseEnterEvent($event)\"\n        (mouseleave)=\"_onMouseLeaveEvent($event)\"\n        [style.minWidth.px]=\"_triggerWidth\"\n        (click)=\"_clickDropDown($event)\">\n        <div>\n          <ul *ngIf=\"!custom_content\" atDropMenuList>\n            <ng-content select=\"[atDropMenuItem]\"></ng-content>\n          </ul>\n          <!--<ng-content select=\"[at-table-filter]\"></ng-content>-->\n          <ng-content select=\"[atDropMenuCustomItem]\"></ng-content>\n        </div>\n        <!--<ng-content select=\"[at-dropdown-custom]\"></ng-content>-->\n      </div>\n    </ng-template>\n  ",
                animations: [DropDownAnimation],
            },] },
];
/** @nocollapse */
DropdownComponent.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
]; };
DropdownComponent.propDecorators = {
    "custom_content": [{ type: Input },],
    "_atOrigin": [{ type: ContentChild, args: [DropdownDirective,] },],
    "_atMenu": [{ type: ContentChild, args: [DropdownMenuItemComponent,] },],
    "trigger": [{ type: Input },],
    "_visibleChange": [{ type: Output },],
    "atVisibleChange": [{ type: Output },],
    "_cdkOverlay": [{ type: ViewChild, args: [CdkConnectedOverlay,] },],
    "autoClose": [{ type: Input },],
    "atVisible": [{ type: Input },],
    "placement": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropMenuListComponent = (function (_super) {
    tslib_1.__extends(DropMenuListComponent, _super);
    /**
     * @param {?} el
     * @param {?} render
     */
    function DropMenuListComponent(el, render) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.render = render;
        return _this;
    }
    /**
     * @return {?}
     */
    DropMenuListComponent.prototype.ngOnInit = function () {
    };
    return DropMenuListComponent;
}(MenuListComponent));
DropMenuListComponent.decorators = [
    { type: Component, args: [{
                selector: '[atDropMenuList]',
                template: "\n    <ng-content></ng-content>",
            },] },
];
/** @nocollapse */
DropMenuListComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NotificationConfig = (function () {
    /**
     * @param {?} options
     * @param {?=} type
     */
    function NotificationConfig(options, type) {
        this.index = this.guid();
        this.title = options.title || '';
        this.state = 'enter';
        this.duration = options.duration == 0 ? 0 : (options.duration || 4000);
        this.message = options.message || '';
        this.icon = options.icon || '';
        this.showClose = options.showClose || true;
        this.type = type || options.type || 'info';
    }
    /**
     * @return {?}
     */
    NotificationConfig.prototype.guid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var /** @type {?} */ r = Math.random() * 16 | 0, /** @type {?} */ v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return NotificationConfig;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NotificationContainerComponent = (function () {
    /**
     * @param {?} el
     */
    function NotificationContainerComponent(el) {
        this.el = el;
        this.notifications = [];
    }
    /**
     * @return {?}
     */
    NotificationContainerComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} notification
     * @return {?}
     */
    NotificationContainerComponent.prototype.addMessage = function (notification) {
        this.notifications.push(notification);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NotificationContainerComponent.prototype.remove = function (index) {
        var /** @type {?} */ notification = this.notifications.find(function (n) {
            return n.index == index;
        });
        notification.state = 'leave';
        this.removeByIndex(index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NotificationContainerComponent.prototype.removeByIndex = function (index) {
        var _this = this;
        setTimeout$1(function (_) {
            _this.notifications = _this.notifications.filter(function (no) {
                return (no.index != index);
            });
        }, 110);
    };
    return NotificationContainerComponent;
}());
NotificationContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-notification-container',
                template: "\n    <div class=\"at-notification-container\">\n      <atNotification *ngFor=\"let item of notifications\" [config]=\"item\"></atNotification>\n    </div>\n  ",
                styles: [
                    ":host ::ng-deep .at-notification-container {\n      top: 20px;\n      position: fixed;\n      display: block;\n      right: 16px;\n      width: 320px;\n      height: auto;\n      z-index: 1040;\n    }"
                ]
            },] },
];
/** @nocollapse */
NotificationContainerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StatusIconType = {
    'info': 'icon-info',
    'error': 'icon-x-circle',
    'warning': 'icon-alert-circle',
    'success': 'icon-check-circle',
    'loading': 'icon-loader'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NotificationComponent = (function () {
    /**
     * @param {?} notificationContainer
     */
    function NotificationComponent(notificationContainer) {
        this.notificationContainer = notificationContainer;
        this.status = StatusIconType;
    }
    /**
     * @return {?}
     */
    NotificationComponent.prototype.ngOnInit = function () {
        if (this.config.duration != 0) {
            this.startRemove();
        }
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.remove = function () {
        this.notificationContainer.remove(this.config.index);
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.startRemove = function () {
        var _this = this;
        if (this.config.duration != 0) {
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                _this.remove();
            }, this.config.duration);
        }
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.stopRemove = function () {
        clearTimeout(this.timer);
    };
    return NotificationComponent;
}());
NotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'atNotification',
                template: "\n    <div (mouseenter)=\"stopRemove()\" (mouseleave)=\"startRemove()\"\n         [@enterLeave]=\"config.state\"\n         class=\"at-notification-contained  at-notification--{{config.type}}\"\n         [ngClass]=\"{'at-notification--with-message ': config.message !=''}\"\n    >\n      <i class=\"icon at-notification__icon {{status[config.type]}}\"></i>\n      <div class=\"at-notification__content\"><p class=\"at-notification__title\">{{config.title}}</p>\n        <p class=\"at-notification__message\">{{config.message}}</p></div>\n      <i *ngIf=\"config.showClose\" (click)=\"remove()\" class=\"icon icon-x at-notification__close\">\n      </i>\n    </div>\n\n  ",
                animations: [
                    trigger('enterLeave', [
                        state('enter', style({ opacity: 1, transform: 'translateX(0)' })),
                        transition('* => enter', [
                            style({ opacity: 0, transform: 'translateX(5%)' }),
                            animate('100ms linear')
                        ]),
                        state('leave', style({ opacity: 0, transform: 'translateY(-10%)' })),
                        transition('* => leave', [
                            style({ opacity: 1, transform: 'translateY(0)' }),
                            animate('100ms linear')
                        ]),
                    ])
                ],
                styles: ["\n    :host ::ng-deep .at-notification-contained {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-bottom: 15px;\n      right: 16px;\n      width: 320px;\n      padding: 8px 16px;\n      color: #3f536e;\n      background-color: #fff;\n      line-height: 1.5;\n      border-radius: 4px;\n      -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);\n      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);\n      -webkit-transition: opacity .3s, top .4s, -webkit-transform .3s;\n      transition: opacity .3s, top .4s, -webkit-transform .3s;\n      transition: opacity .3s, transform .3s, top .4s;\n      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;\n      z-index: 1010;\n    }\n  "]
            },] },
];
/** @nocollapse */
NotificationComponent.ctorParameters = function () { return [
    { type: NotificationContainerComponent, },
]; };
NotificationComponent.propDecorators = {
    "config": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentCreatorBase = (function () {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    function ComponentCreatorBase(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    return ComponentCreatorBase;
}());
ComponentCreatorBase.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ComponentCreatorBase.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: ApplicationRef, },
    { type: Injector, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentCreator = (function () {
    /**
     * @param {?} base
     * @param {?=} component
     */
    function ComponentCreator(base, component) {
        this.base = base;
        this.component = component;
    }
    /**
     * @return {?}
     */
    ComponentCreator.prototype.create = function () {
        // setTimeout(() => {
        this.componentRef = (this.base.componentFactoryResolver
            .resolveComponentFactory(this.component)
            .create(this.base.injector));
        this.base.appRef.attachView(this.componentRef.hostView);
        this.domElem = (((this.componentRef.hostView))
            .rootNodes[0]);
        document.body.appendChild(this.domElem);
        // })
    };
    /**
     * @return {?}
     */
    ComponentCreator.prototype.remove = function () {
        this.base.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    };
    /**
     * @template T
     * @return {?}
     */
    ComponentCreator.prototype.getElem = function () {
        return this.componentRef;
    };
    /**
     * @return {?}
     */
    ComponentCreator.prototype.getDom = function () {
        return this.domElem;
    };
    return ComponentCreator;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NotificationBaseService = (function (_super) {
    tslib_1.__extends(NotificationBaseService, _super);
    /**
     * @param {?} component_base
     */
    function NotificationBaseService(component_base) {
        var _this = _super.call(this, component_base, NotificationContainerComponent) || this;
        _this.component_base = component_base;
        _this.create();
        return _this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NotificationBaseService.prototype.addMessage = function (config) {
        this.getElem().instance.addMessage(config);
    };
    return NotificationBaseService;
}(ComponentCreator));
NotificationBaseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NotificationBaseService.ctorParameters = function () { return [
    { type: ComponentCreatorBase, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtNotificationService = (function (_super) {
    tslib_1.__extends(AtNotificationService, _super);
    /**
     * @param {?} containerbase
     * @param {?} component_base
     */
    function AtNotificationService(containerbase, component_base) {
        var _this = _super.call(this, component_base, NotificationContainerComponent) || this;
        _this.containerbase = containerbase;
        _this.component_base = component_base;
        return _this;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    AtNotificationService.prototype.success = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options, 'success');
        this.containerbase.addMessage(config);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AtNotificationService.prototype.info = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options, 'info');
        this.containerbase.addMessage(config);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AtNotificationService.prototype.show = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options);
        this.containerbase.addMessage(config);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AtNotificationService.prototype.warning = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options, 'warning');
        this.containerbase.addMessage(config);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AtNotificationService.prototype.error = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options, 'error');
        this.containerbase.addMessage(config);
    };
    return AtNotificationService;
}(ComponentCreator));
AtNotificationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtNotificationService.ctorParameters = function () { return [
    { type: NotificationBaseService, },
    { type: ComponentCreatorBase, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertComponent = (function () {
    function AlertComponent() {
        this.iconType = {
            'info': 'icon-info',
            'error': 'icon-x-circle',
            'warning': 'icon-alert-circle',
            'success': 'icon-check-circle'
        };
        this.atType = 'info';
        this.icon = false;
        this.state = 'shown';
        this.closed = false;
        this.onClose = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    AlertComponent.prototype.close = function () {
        var _this = this;
        this.state = 'hidden';
        setTimeout(function (_) {
            _this.closed = true;
            _this.onClose.emit(_this.closed);
        }, 300);
    };
    return AlertComponent;
}());
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'atAlert',
                template: "\n    <div [@visibilityChanged]=\"state\" *ngIf=\"!this.closed\"\n         class=\"at-alert at-alert--{{atType}}\"\n         [ngClass]=\"{'at-alert--with-description': desc}\"\n    >\n      <i *ngIf=\"icon\" class=\"icon at-alert__icon {{iconType[atType]}}\"></i>\n      <div class=\"at-alert__content\">\n        <p class=\"at-alert__message\">{{message}}</p>\n        <p *ngIf=\"desc\" class=\"at-alert__description\">{{desc}}</p>\n      </div>\n      <i (click)=\"close()\" class=\"icon at-alert__close\"\n         [ngClass]=\"{' at-alert__close--custom':closeText ,'icon-x':!closeText}\">\n        {{closeText}}\n      </i>\n\n    </div>\n  ",
                animations: [
                    trigger('visibilityChanged', [
                        state('shown', style({ opacity: 1 })),
                        state('hidden', style({ opacity: 0 })),
                        transition('shown => hidden', animate('600ms')),
                        transition('hidden => shown', animate('300ms')),
                    ])
                ],
            },] },
];
/** @nocollapse */
AlertComponent.ctorParameters = function () { return []; };
AlertComponent.propDecorators = {
    "message": [{ type: Input },],
    "atType": [{ type: Input },],
    "desc": [{ type: Input },],
    "icon": [{ type: Input },],
    "closeText": [{ type: Input },],
    "onClose": [{ type: Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BadgeComponent = (function () {
    function BadgeComponent() {
        this.atType = 'info';
        this.dot = false;
        this.show = true;
    }
    /**
     * @return {?}
     */
    BadgeComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BadgeComponent.prototype, "atValue", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.max && this._atValue > this.max) {
                return this.max + '+';
            }
            return this._atValue;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atValue = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BadgeComponent.prototype.ngAfterViewInit = function () {
    };
    return BadgeComponent;
}());
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'atBadge',
                template: "<span class=\"at-badge at-badge--{{atType}}\">\n  <span #content>\n  <ng-content>\n\n  </ng-content>\n  </span>\n  <span *ngIf=\"!dot && show\" class=\"at-badge\"\n        [ngClass]=\"{'at-badge--corner':(content.innerText.length > 0 || content.children.length >0),\n        'at-badge--alone':(content.innerText.length == 0 && content.children.length == 0 )}\">\n  <sup class=\"at-badge__content\" [ngClass]=\"{'at-badge--dot':dot}\">{{dot ? '' : atValue}}</sup>\n  </span>\n    <sup *ngIf=\"dot && show\" class=\"at-badge__content\" [ngClass]=\"{'at-badge--dot':dot,'at-badge--corner':(content.innerText.length > 0 || content.children.length >0),\n        'at-badge--alone':(content.innerText.length == 0 && content.children.length == 0 )}\">{{dot ? '' : atValue}}</sup>\n</span>\n"
            },] },
];
/** @nocollapse */
BadgeComponent.ctorParameters = function () { return []; };
BadgeComponent.propDecorators = {
    "atType": [{ type: Input },],
    "max": [{ type: Input },],
    "dot": [{ type: Input },],
    "show": [{ type: Input },],
    "atValue": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var AtGlobalMonitorService = (function () {
    function AtGlobalMonitorService() {
        this.lastClickPosition = { x: 0, y: 0 };
        this.clickDocumentObserve();
    }
    /**
     * @return {?}
     */
    AtGlobalMonitorService.prototype.clickDocumentObserve = function () {
        var _this = this;
        document.addEventListener('click', function (e) {
            _this.lastClickPosition = {
                x: e.clientX,
                y: e.clientY
            };
        });
    };
    return AtGlobalMonitorService;
}());
AtGlobalMonitorService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtGlobalMonitorService.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalBodyDirective = (function () {
    /**
     * @param {?} elementRef
     */
    function ModalBodyDirective(elementRef) {
        this.elementRef = elementRef;
    }
    return ModalBodyDirective;
}());
ModalBodyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[body]'
            },] },
];
/** @nocollapse */
ModalBodyDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalComponent = (function () {
    /**
     * @param {?} global_service
     */
    function ModalComponent(global_service) {
        this.global_service = global_service;
        this.state = 'enter';
        this.icon_status = StatusIconType;
        this._closeable = true;
        this._atType = 'normal';
        this._status = 'info';
        this._show = false;
        this._positions = DEFAULT_DROPDOWN_POSITIONS.slice();
        this.width = 520;
        this.top = 100;
        this.maskClose = true;
        this.onCancel = new EventEmitter();
        this.onOk = new EventEmitter();
        this.positionStyle = {};
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ModalComponent.prototype, "overlay", {
        /**
         * @return {?}
         */
        get: function () {
            return { elementRef: this._overlay };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "closeable", {
        /**
         * @return {?}
         */
        get: function () {
            return this._closeable;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._closeable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "message", {
        /**
         * @return {?}
         */
        get: function () {
            return this._message;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "atType", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atType;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "status", {
        /**
         * @return {?}
         */
        get: function () {
            return this._status;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "show", {
        /**
         * @return {?}
         */
        get: function () {
            return this._show;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var _this = this;
            value == true ? this.state = 'enter' : this.state = 'leave';
            setTimeout(function (_) {
                setTimeout(function (_) {
                    _this.setStyle();
                });
                _this._show = value;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalComponent.prototype.cancel = function () {
        var _this = this;
        this.state = 'leave';
        setTimeout(function (_) {
            _this._show = false;
            _this.onCancel.emit(_this._show);
        }, 20);
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.setShow = function () {
        var _this = this;
        this.state = 'enter';
        setTimeout(function (_) {
            _this._show = true;
        }, 20);
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.setStyle = function () {
        // const origin = this.global_service.lastClickPosition
        // let el = this.modal_content.nativeElement;
        // let transformOrigin = `${origin.x - el.offsetLeft}px ${origin.y - el.offsetTop }px 0px`;
        // this.positionStyle = {'transform-origin': transformOrigin, 'top': this.top + 'px'}
        // return this.positionStyle
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ok = function () {
        var _this = this;
        this.state = 'leave';
        setTimeout(function (_) {
            _this._show = false;
            _this.onOk.emit(_this._show);
        }, 20);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ModalComponent.prototype.cancelFromMask = function (e) {
        if (e.target.getAttribute('role') === 'dialog' && this.maskClose) {
            this.cancel();
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.headerContains = function () {
        // let custom_title = this.customTitle.nativeElement
        // return ( custom_title.children.length > 0 || custom_title.innerText.length > 0)
        return true;
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngAfterViewInit = function () {
    };
    return ModalComponent;
}());
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'atModal',
                animations: [trigger('enterLeave', [
                        state('enter', style({ opacity: 1, transform: 'scale(1)' })),
                        transition('* => enter', [
                            style({ opacity: 0, transform: 'scale(0.1)' }),
                            animate('100ms linear')
                        ]),
                        state('leave', style({ opacity: 0, transform: 'scale(0)' })),
                        transition('* => leave', [
                            style({ opacity: 1, transform: 'scale(1)' }),
                            animate('100ms linear')
                        ]),
                    ])],
                template: "\n    <div>\n      <ng-content></ng-content>\n      <div #overlays></div>\n\n      <ng-template\n        cdkConnectedOverlay\n        [cdkConnectedOverlayHasBackdrop]=\"true\"\n        [cdkConnectedOverlayPositions]=\"_positions\"\n        [cdkConnectedOverlayOrigin]=\"overlay\"\n        [cdkConnectedOverlayMinWidth]=\"width\"\n        [cdkConnectedOverlayOpen]=\"show\"\n      >\n        <div [ngStyle]=\"{'display': show ? '' : 'none'}\"\n        class=\"at-modal__mask\"></div>\n        <div\n          role=\"dialog\"\n          (click)=\"cancelFromMask($event)\"\n          class=\"at-modal__wrapper at-modal--{{atType}} at-modal--{{atType}}-{{status}}\"\n        >\n          <div  class=\"at-modal\" [@enterLeave]=\"state\"\n               [ngStyle]=\"positionStyle\"\n               [style.width]=\"width +'px'\">\n            <div [ngClass]=\"{'at-modal__header': headerContains()}\">\n              <div class=\"at-modal__title\" #custom_title>\n                <ng-content select=\"[header]\">\n                </ng-content>\n                {{title ? title : ''}}\n              </div>\n            </div>\n            <div class=\"at-modal__body\" #modal_body>\n              <ng-content select=\"[body]\"></ng-content>\n              {{message ? message : ''}}\n            </div>\n            <div class=\"at-modal__footer\">\n              <div #custom_footer>\n                <ng-content select=\"[footer]\"></ng-content>\n              </div>\n              <div *ngIf=\"custom_footer.children.length == 0 &&  custom_footer.innerText.length == 0\">\n                <button atButton (click)=\"cancel()\">\u53D6\u6D88</button>\n                <button (click)=\"ok()\" type=\"primary\" class=\"at-btn at-btn--primary\">\n          <span class=\"at-btn__text\">\u786E\u8BA4\n          </span>\n                </button>\n              </div>\n            </div>\n            <i *ngIf=\"atType == 'confirm'\" class=\"icon at-modal__icon {{ icon_status[status]}}\"></i>\n            <span *ngIf=\"closeable\" (click)=\"cancel()\" class=\"at-modal__close\"><i class=\"icon icon-x\"></i></span>\n          </div>\n        </div>\n      </ng-template>\n\n    </div>\n\n  ",
            },] },
];
/** @nocollapse */
ModalComponent.ctorParameters = function () { return [
    { type: AtGlobalMonitorService, },
]; };
ModalComponent.propDecorators = {
    "width": [{ type: Input },],
    "top": [{ type: Input },],
    "maskClose": [{ type: Input },],
    "onCancel": [{ type: Output },],
    "onOk": [{ type: Output },],
    "modal_content": [{ type: ViewChild, args: ['modal_content',] },],
    "_overlay": [{ type: ViewChild, args: ['overlays',] },],
    "body": [{ type: ContentChild, args: [ModalBodyDirective,] },],
    "closeable": [{ type: Input },],
    "title": [{ type: Input },],
    "message": [{ type: Input },],
    "atType": [{ type: Input },],
    "status": [{ type: Input },],
    "show": [{ type: Input },],
    "customTitle": [{ type: ViewChild, args: ['custom_title',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalBaseService = (function (_super) {
    tslib_1.__extends(ModalBaseService, _super);
    /**
     * @param {?} base_creator
     */
    function ModalBaseService(base_creator) {
        var _this = _super.call(this, base_creator, ModalComponent) || this;
        _this.base_creator = base_creator;
        return _this;
    }
    return ModalBaseService;
}(ComponentCreator));
ModalBaseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ModalBaseService.ctorParameters = function () { return [
    { type: ComponentCreatorBase, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtModalService = (function () {
    /**
     * @param {?} base_modal_service
     */
    function AtModalService(base_modal_service) {
        this.base_modal_service = base_modal_service;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    AtModalService.prototype.modal = function (config) {
        var _this = this;
        this.base_modal_service.create();
        var /** @type {?} */ instance = this.base_modal_service.getElem().instance;
        var /** @type {?} */ propConfig = Object.assign(config);
        //删掉ok 和cancel 回掉
        if (config) {
            delete propConfig['cancel'];
            delete propConfig['ok'];
        }
        for (var /** @type {?} */ key in propConfig) {
            instance[key] = propConfig[key];
        }
        instance.show = true;
        var /** @type {?} */ cancel = instance.cancel.bind(instance);
        var /** @type {?} */ ok = instance.ok.bind(instance);
        instance.cancel = function () {
            cancel();
            config && config.cancel && config.cancel();
            setTimeout(function (_) {
                _this.base_modal_service.remove();
            }, 180);
        };
        instance.ok = function () {
            ok();
            config && config.ok && config.ok();
            setTimeout(function (_) {
                _this.base_modal_service.remove();
            }, 180);
        };
    };
    /**
     * @param {?} config
     * @return {?}
     */
    AtModalService.prototype.success = function (config) {
        this.setConfirm(config);
        config.status = 'success';
        this.modal(config);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    AtModalService.prototype.error = function (config) {
        this.setConfirm(config);
        config.status = 'error';
        this.modal(config);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    AtModalService.prototype.warning = function (config) {
        this.setConfirm(config);
        config.status = 'warning';
        this.modal(config);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    AtModalService.prototype.info = function (config) {
        this.setConfirm(config);
        config.status = 'info';
        this.modal(config);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    AtModalService.prototype.confirm = function (config) {
        this.setConfirm(config);
        config.status = 'info';
        this.modal(config);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    AtModalService.prototype.setConfirm = function (config) {
        config.atType = 'confirm';
        config.status = 'success';
    };
    return AtModalService;
}());
AtModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtModalService.ctorParameters = function () { return [
    { type: ModalBaseService, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtThDirective = (function () {
    function AtThDirective() {
        this._th = true;
        this._tc = true;
    }
    return AtThDirective;
}());
AtThDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atTh]'
            },] },
];
/** @nocollapse */
AtThDirective.ctorParameters = function () { return []; };
AtThDirective.propDecorators = {
    "atWidth": [{ type: Input },],
    "_th": [{ type: HostBinding, args: ['class.at-table__column',] },],
    "_tc": [{ type: HostBinding, args: ['class.at-table__cell',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableComponent = (function () {
    function TableComponent() {
        this._ths = [];
        this.size = 'normal';
        this.stripe = false;
        this.border = false;
        this.marginTop = 0;
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TableComponent.prototype, "setThs", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._ths = value.toArray();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.fixed_head) {
            setTimeout(function (_) {
                _this.marginTop = _this.fixed_head.nativeElement.offsetHeight;
            });
        }
    };
    return TableComponent;
}());
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTable',
                template: "\n    <div class=\"at-table at-table--{{size}}\"\n         [ngStyle]=\"{height:height ? height+'px' :''}\"\n         [ngClass]=\"{'at-table--fixHeight': height,'at-table--stripe ':stripe,'at-table--border':border}\"\n    >\n\n      <div *ngIf=\"!(height === undefined)\" class=\"at-table__content\" [ngStyle]=\"{height:height ? height+'px' :''}\">\n        <div class=\"at-table__header\" #fix_head>\n          <table>\n            <colgroup>\n              <col *ngFor=\"let th of _ths\" [style.width]=\"th.atWidth +'px'\" [style.minWidth]=\"th.atWidth+'px'\">\n            </colgroup>\n            <ng-template [ngTemplateOutlet]=\"atThead\"></ng-template>\n          </table>\n        </div>\n        <div class=\"at-table__body\"\n             [ngStyle]=\"{height:height ? height-marginTop/2+'px' :'' ,'margin-top':marginTop/2 +'px' }\">\n          <table>\n            <colgroup>\n              <col *ngFor=\"let th of _ths\" [style.width]=\"th.atWidth +'px'\" [style.minWidth]=\"th.atWidth+'px'\">\n            </colgroup>\n\n            <ng-template [ngTemplateOutlet]=\"atTbody\"></ng-template>\n\n          </table>\n        </div>\n      </div>\n      <div *ngIf=\"(height === undefined)\" class=\"at-table__content\">\n        <div class=\"at-table__body\">\n          <table>\n            <colgroup>\n              <col *ngFor=\"let th of _ths\" [style.width]=\"th.atWidth +'px'\" [style.minWidth]=\"th.atWidth+'px'\">\n            </colgroup>\n            <ng-content>\n            </ng-content>\n          </table>\n        </div>\n      </div>\n      <div class=\"at-table__footer\">\n        <ng-content select=\"[footer]\"></ng-content>\n      </div>\n    </div>\n  ",
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = function () { return []; };
TableComponent.propDecorators = {
    "size": [{ type: Input },],
    "height": [{ type: Input },],
    "stripe": [{ type: Input },],
    "border": [{ type: Input },],
    "setThs": [{ type: ContentChildren, args: [AtThDirective, { descendants: true },] },],
    "atThead": [{ type: ContentChild, args: ['fixedHead',] },],
    "atTbody": [{ type: ContentChild, args: ['fixedBody',] },],
    "fixed_head": [{ type: ViewChild, args: ['fix_head',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtTbodyDirective = (function () {
    function AtTbodyDirective() {
        this._tbody = true;
    }
    return AtTbodyDirective;
}());
AtTbodyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atTbody]'
            },] },
];
/** @nocollapse */
AtTbodyDirective.ctorParameters = function () { return []; };
AtTbodyDirective.propDecorators = {
    "_tbody": [{ type: HostBinding, args: ['class.at-table__tbody',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtTdDirective = (function () {
    function AtTdDirective() {
        this._td = true;
    }
    return AtTdDirective;
}());
AtTdDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atTd]'
            },] },
];
/** @nocollapse */
AtTdDirective.ctorParameters = function () { return []; };
AtTdDirective.propDecorators = {
    "_td": [{ type: HostBinding, args: ['class.at-table__cell',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtTbodyTrDirective = (function () {
    function AtTbodyTrDirective() {
    }
    return AtTbodyTrDirective;
}());
AtTbodyTrDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atTbodyTr]'
            },] },
];
/** @nocollapse */
AtTbodyTrDirective.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtTheadDirective = (function () {
    function AtTheadDirective() {
        this._thead = true;
    }
    return AtTheadDirective;
}());
AtTheadDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atThead]'
            },] },
];
/** @nocollapse */
AtTheadDirective.ctorParameters = function () { return []; };
AtTheadDirective.propDecorators = {
    "_thead": [{ type: HostBinding, args: ['class.at-table__thead',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PagenationComponent = (function () {
    function PagenationComponent() {
        this._current = 1;
        this._pageSize = 10;
        this._firstIndex = 1;
        this._pages = [];
        this._options = [10, 20, 30, 40, 50];
        this._lastIndex = Infinity;
        this.size = 'normal';
        this.simple = false;
        this.pageIndexChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.atQuickJump = false;
        this.atPageSizer = false;
    }
    /**
     * @return {?}
     */
    PagenationComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PagenationComponent.prototype, "_roundPageSize", {
        /**
         * @return {?}
         */
        get: function () {
            return Math.round(this._pageSize / 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagenationComponent.prototype, "atPageIndex", {
        /**
         * @return {?}
         */
        get: function () {
            return this._current;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._current === value) {
                return;
            }
            if (value > this._lastIndex || value < this._firstIndex) {
                return;
            }
            this._current = Number(value);
            this._buildIndexes();
            this.pageIndexChange.emit(this._current);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagenationComponent.prototype, "total", {
        /**
         * @return {?}
         */
        get: function () {
            return this._total;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._total = value;
            this._buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagenationComponent.prototype, "pageSize", {
        /**
         * @return {?}
         */
        get: function () {
            return this._pageSize;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._pageSize = value;
            this._buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 生成中间页数段落
     * @return {?}
     */
    PagenationComponent.prototype._buildIndexes = function () {
        this._lastIndex = Math.ceil(this._total / this._pageSize);
        if (this._current > this._lastIndex) {
            this._jumpPage(this._lastIndex);
        }
        var /** @type {?} */ tmpPages = [];
        if (this._lastIndex <= 9) {
            for (var /** @type {?} */ i = 2; i <= this._lastIndex - 1; i++) {
                tmpPages.push({ index: i });
            }
        }
        else {
            var /** @type {?} */ current = +this._current;
            var /** @type {?} */ left = Math.max(2, current - 2);
            var /** @type {?} */ right = Math.min(current + 2, this._lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this._lastIndex - current <= 2) {
                left = this._lastIndex - 4;
            }
            for (var /** @type {?} */ i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this._pages = tmpPages;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PagenationComponent.prototype._jumpPage = function (index) {
        if (index === this._firstIndex - 1 || index === this._lastIndex + 1 || index === this.atPageIndex) {
            return;
        }
        if (index < this._firstIndex) {
            this._current = this._firstIndex;
        }
        else if (index > this._lastIndex) {
            this._current = this._lastIndex;
        }
        else {
            this._current = index;
        }
        this._buildIndexes();
        this.pageIndexChange.emit(this.atPageIndex);
    };
    Object.defineProperty(PagenationComponent.prototype, "_isLastIndex", {
        /**
         * @return {?}
         */
        get: function () {
            return this._current === this._lastIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagenationComponent.prototype, "_isFirstIndex", {
        /**
         * @return {?}
         */
        get: function () {
            return this._current === this._firstIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 向前向后跳*页
     * @param {?} pageSize
     * @return {?}
     */
    PagenationComponent.prototype._jumpBefore = function (pageSize) {
        this._jumpPage(this._current - Math.round(pageSize / 2));
    };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    PagenationComponent.prototype._jumpAfter = function (pageSize) {
        this._jumpPage(this._current + Math.round(pageSize / 2));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PagenationComponent.prototype._atPageIndexChange = function (value) {
        if (value > this._lastIndex) {
            value = this._lastIndex;
        }
        if (value == this._firstIndex) {
            value = 1;
        }
        this._current = value;
        this._buildIndexes();
        this.pageIndexChange.emit(this._current);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PagenationComponent.prototype._atPageSizeChange = function (value) {
        this.pageSize = value;
        this.pageSizeChange.emit(this.pageSize);
    };
    return PagenationComponent;
}());
PagenationComponent.decorators = [
    { type: Component, args: [{
                selector: 'atPagenation',
                template: "\n    <div>\n      <ul *ngIf=\"!simple\" class=\"at-pagination at-pagination--{{size}}\">\n    <span class=\"at-pagination__total\">\n      \u5171 {{total}} \u6761\n    </span>\n        <li (click)=\"_jumpPage(_current-1)\" [class.at-pagination--disabled]=\"_isFirstIndex\" title=\"\u4E0A\u4E00\u9875\"\n            class=\"at-pagination__prev\">\n          <i class=\"icon icon-chevron-left\"></i>\n        </li>\n        <li\n          title=\"\u7B2C\u4E00\u9875\"\n          class=\"at-pagination__item\"\n          [class.at-pagination__item--active]=\"_isFirstIndex\"\n          (click)=\"_jumpPage(_firstIndex)\">\n          {{_firstIndex}}\n        </li>\n        <li\n          [attr.title]=\"'\u5411\u524D '+_roundPageSize+' \u9875'\"\n          class=\"at-pagination__item at-pagination__item--jump-prev\"\n          (click)=\"_jumpBefore(_pageSize)\"\n          *ngIf=\"(_lastIndex >9)&&(_current-3>_firstIndex)\">\n          <i class=\"icon icon-chevrons-left\"></i>\n        </li>\n        <li\n          *ngFor=\"let page of _pages\"\n          [attr.title]=\"page.index\"\n          (click)=\"_jumpPage(page.index)\"\n          class=\"at-pagination__item\"\n          [class.at-pagination__item--active]=\"_current==page.index\">\n          {{page.index}}\n        </li>\n        <li [attr.title]=\"'\u5411\u540E '+_roundPageSize+' \u9875'\"\n            (click)=\"_jumpAfter(_pageSize)\"\n            class=\"at-pagination__item at-pagination__item--jump-next\"\n            *ngIf=\"(_lastIndex >9)&&(_current+3<_lastIndex)\"\n        >\n          <i class=\"icon icon-chevrons-right\"></i>\n        </li>\n        <li\n          [attr.title]=\"'\u6700\u540E\u4E00\u9875: '+_lastIndex\"\n          class=\"at-pagination__item\"\n          [class.at-pagination__item--active]=\"_isLastIndex\"\n          (click)=\"_jumpPage(_lastIndex)\"\n          *ngIf=\"(_lastIndex>0)&&(_lastIndex!==_firstIndex)\">\n          {{_lastIndex}}\n        </li>\n        <li title=\"\u4E0B\u4E00\u9875\"\n            [class.at-pagination--disabled]=\"_isLastIndex \"\n            class=\"at-pagination__next\" (click)=\"_jumpPage(_current+1)\">\n          <i class=\"icon icon-chevron-right\"></i>\n        </li>\n\n        <div *ngIf=\"atPageSizer\" class=\"at-pagination__sizer\">\n          <atSelect [(ngModel)]=\"pageSize\" (ngModelChange)=\"_atPageSizeChange($event)\">\n            <atOption *ngFor=\"let item of _options\" [atValue]=\"item\" [atLabel]=\"item+' \u6761/\u9875'\">\n\n            </atOption>\n          </atSelect>\n        </div>\n\n        <div *ngIf=\"atQuickJump\" class=\"at-pagination__quickjump\">\n          <span>\u524D\u5F80</span>\n          <input type=\"text\" class=\"at-input__original\" [ngModel]=\"atPageIndex\"\n                 (ngModelChange)=\"_atPageIndexChange($event)\">\n          <span>\u9875</span>\n        </div>\n      </ul>\n\n      <ul *ngIf=\"simple\" class=\"at-pagination at-pagination--simple\" data-v-a01f69b8=\"\">\n        <li title=\"\u4E0A\u4E00\u9875\"\n            (click)=\"_jumpPage(_current-1)\" [class.at-pagination--disabled]=\"_isFirstIndex\"\n            class=\"at-pagination__prev\">\n          <i class=\"icon icon-chevron-left\"></i>\n        </li>\n        <div class=\"at-pagination__simple-paging\">\n          <input [ngModel]=\"atPageIndex\"\n                 (ngModelChange)=\"_atPageIndexChange($event)\"\n                 type=\"text\" class=\"at-input__original\">\n          <span>/</span>\n          <span class=\"at-pagination__paging-total\">{{_lastIndex}}</span></div>\n        <li title=\"\u4E0B\u4E00\u9875\" class=\"at-pagination__next\"\n            [class.at-pagination--disabled]=\"_isLastIndex \"\n            class=\"at-pagination__next\" (click)=\"_jumpPage(_current+1)\"\n        ><i class=\"icon icon-chevron-right\"></i></li>\n      </ul>\n    </div>\n  ",
            },] },
];
/** @nocollapse */
PagenationComponent.ctorParameters = function () { return []; };
PagenationComponent.propDecorators = {
    "size": [{ type: Input },],
    "simple": [{ type: Input },],
    "pageIndexChange": [{ type: Output },],
    "pageSizeChange": [{ type: Output },],
    "atQuickJump": [{ type: Input },],
    "atPageSizer": [{ type: Input },],
    "atPageIndex": [{ type: Input },],
    "total": [{ type: Input },],
    "pageSize": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
        this.items = [];
        this.separator = '/';
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'atBreadcrumb',
                template: "\n    <div class=\"at-breadcrumb\">\n      <ng-content></ng-content>\n    </div>\n  ",
            },] },
];
// @ContentChildren(AtBreadItemDirective)
// set setThs(value: QueryList<AtBreadItemDirective>) {
//   let items = value.toArray()
//   items.forEach((item) => {
//     item.separator = this.separator
//   })
// }
/** @nocollapse */
BreadcrumbComponent.ctorParameters = function () { return []; };
BreadcrumbComponent.propDecorators = {
    "separator": [{ type: Input },],
    "breadItem": [{ type: ContentChild, args: ['breadItem',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtBreadItemDirective = (function () {
    /**
     * @param {?} el
     * @param {?} breadCrumb
     */
    function AtBreadItemDirective(el, breadCrumb) {
        this.el = el;
        this.breadCrumb = breadCrumb;
        this.inited = false;
    }
    return AtBreadItemDirective;
}());
AtBreadItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atBreadItem]'
            },] },
];
// @HostBinding('class.at-breadcrumb__item') item = true
//
//
// @Input() separator = '/'
//
// ngAfterContentInit() {
//   if (!this.inited) {
//     let html = ''
//     Array.from(this._inner).forEach(_el => {
//       html += _el.outerHTML
//     })
//
//     html ? html : html += this.el.nativeElement.innerText
//     this.el.nativeElement.innerHTML =
//       `<span class="at_breadcrumb__text">${html}</span>
//   <span class="at-breadcrumb__separator">${this.separator}</span>`
//
//     this.inited = true
//   }
// }
/** @nocollapse */
AtBreadItemDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: BreadcrumbComponent, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MessageContainerComponent = (function (_super) {
    tslib_1.__extends(MessageContainerComponent, _super);
    function MessageContainerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    MessageContainerComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MessageContainerComponent.prototype.remove = function (index) {
        var _this = this;
        var /** @type {?} */ notification = this.notifications.find(function (n) {
            return n.index == index;
        });
        if (notification) {
            notification.state = 'leave';
            setTimeout(function (_) {
                _this.notifications = _this.notifications.filter(function (no) {
                    return (no.index != index);
                });
            }, 110);
        }
    };
    return MessageContainerComponent;
}(NotificationContainerComponent));
MessageContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-message-container',
                template: "\n    <div class=\"at-message__wrapper\">\n\n      <atMessage [message]=\"message\" *ngFor=\"let message of notifications\"></atMessage>\n\n    </div>\n  ",
                styles: ["\n    :host ::ng-deep .at-message__wrapper {\n      z-index: 1110;\n    }\n\n    :host ::ng-deep .at-message--wrapper {\n      text-align: center;\n      margin-top: 12px;\n      pointer-events: none;\n      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;\n    }\n  "]
            },] },
];
/** @nocollapse */
MessageContainerComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MessageComponent = (function () {
    /**
     * @param {?} message_container
     */
    function MessageComponent(message_container) {
        this.message_container = message_container;
        this.status = StatusIconType;
    }
    /**
     * @return {?}
     */
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function (_) {
            _this.message_container.remove(_this.message.index);
        }, this.message.duration);
    };
    return MessageComponent;
}());
MessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'atMessage',
                template: "\n    <div class=\"at-message--wrapper\" [@enterLeave]=\"message.state\">\n      <div class=\"at-message at-message--{{message.type}}\">\n        <i class=\"icon at-message__icon {{status[message.type]}}\"></i>\n        <span class=\"at-message__content\">\n      {{message.message}}\n    </span>\n      </div>\n    </div>\n  ",
                animations: [
                    trigger('enterLeave', [
                        state('enter', style({ opacity: 1, transform: 'translateY(0)' })),
                        transition('* => enter', [
                            style({ opacity: 0, transform: 'translateY(-50%)' }),
                            animate('100ms linear')
                        ]),
                        state('leave', style({ opacity: 0, transform: 'translateY(-50%)' })),
                        transition('* => leave', [
                            style({ opacity: 1, transform: 'translateY(0)' }),
                            animate('100ms linear')
                        ]),
                    ])
                ]
            },] },
];
/** @nocollapse */
MessageComponent.ctorParameters = function () { return [
    { type: MessageContainerComponent, },
]; };
MessageComponent.propDecorators = {
    "message": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtMessageContainerService = (function (_super) {
    tslib_1.__extends(AtMessageContainerService, _super);
    /**
     * @param {?} component_base
     */
    function AtMessageContainerService(component_base) {
        var _this = _super.call(this, component_base, MessageContainerComponent) || this;
        _this.component_base = component_base;
        _this.create();
        return _this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    AtMessageContainerService.prototype.addMessage = function (config) {
        this.getElem().instance.addMessage(config);
    };
    return AtMessageContainerService;
}(ComponentCreator));
AtMessageContainerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtMessageContainerService.ctorParameters = function () { return [
    { type: ComponentCreatorBase, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtMessageService = (function () {
    /**
     * @param {?} message_container_service
     */
    function AtMessageService(message_container_service) {
        this.message_container_service = message_container_service;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    AtMessageService.prototype.success = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options, 'success');
        this.message_container_service.addMessage(config);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AtMessageService.prototype.info = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options, 'info');
        this.message_container_service.addMessage(config);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AtMessageService.prototype.show = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options);
        this.message_container_service.addMessage(config);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AtMessageService.prototype.warning = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options, 'warning');
        this.message_container_service.addMessage(config);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    AtMessageService.prototype.error = function (options) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ config = new NotificationConfig(options, 'error');
        this.message_container_service.addMessage(config);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    AtMessageService.prototype.loading = function (options) {
        var /** @type {?} */ config = new NotificationConfig(options, 'loading');
        this.message_container_service.addMessage(config);
    };
    return AtMessageService;
}());
AtMessageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtMessageService.ctorParameters = function () { return [
    { type: AtMessageContainerService, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopTriggerDirective = (function () {
    /**
     * @param {?} elementRef
     */
    function PopTriggerDirective(elementRef) {
        this.elementRef = elementRef;
    }
    return PopTriggerDirective;
}());
PopTriggerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[pop-trigger]'
            },] },
];
/** @nocollapse */
PopTriggerDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverComponent = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetector
     */
    function PopoverComponent(_renderer, _changeDetector) {
        var _this = this;
        this._renderer = _renderer;
        this._changeDetector = _changeDetector;
        this._clickHide = false;
        this._visible = false;
        this.hasFilterButton = false;
        this._triggerWidth = 0;
        this._placement = 'bottom';
        this._dropDownPosition = 'bottom';
        this._positions = DEFAULT_DROPDOWN_POSITIONS.slice();
        this.trigger = 'hover';
        this._visibleChange = new Subject$1();
        this.atVisibleChange = new EventEmitter();
        this._onVisibleChange = function (visible) {
            if (visible) {
                _this._setTriggerWidth();
            }
            if (_this.atVisible !== visible) {
                _this.atVisible = visible;
                _this.atVisibleChange.emit(_this.atVisible);
            }
            _this._changeDetector.markForCheck();
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    PopoverComponent.prototype.toBoolean = function (value) {
        return value === '' || (value && value !== 'false');
    };
    Object.defineProperty(PopoverComponent.prototype, "atClickHide", {
        /**
         * @return {?}
         */
        get: function () {
            return this._clickHide;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._clickHide = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "atVisible", {
        /**
         * @return {?}
         */
        get: function () {
            return this._visible;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._visible = this.toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "placement", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._placement = value;
            this._dropDownPosition = (this.atPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
            this._positions.unshift(/** @type {?} */ (POSITION_MAP[this._placement]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "atPlacement", {
        /**
         * @return {?}
         */
        get: function () {
            return this._placement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverComponent.prototype._onClickEvent = function () {
        if (this.trigger === 'click') {
            this._show();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    PopoverComponent.prototype._onMouseEnterEvent = function (e) {
        if (this.trigger === 'hover') {
            this._show();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    PopoverComponent.prototype._onMouseLeaveEvent = function (e) {
        if (this.trigger === 'hover') {
            this._hide();
        }
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype._hide = function () {
        this._visibleChange.next(false);
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype._show = function () {
        this._visibleChange.next(true);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    PopoverComponent.prototype._onPositionChange = function (position) {
        this._dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PopoverComponent.prototype._clickDropDown = function ($event) {
        $event.stopPropagation();
        if (this.atClickHide) {
            this._hide();
        }
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype._setTriggerWidth = function () {
        this._triggerWidth = this._atOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        /** should remove after https://github.com/angular/material2/pull/8765 merged **/
        if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
            this._cdkOverlay.overlayRef.updateSize({
                minWidth: this._triggerWidth
            });
        }
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    PopoverComponent.prototype._startSubscribe = function (observable$) {
        this._subscription = observable$.pipe(debounceTime$1(50))
            .subscribe(this._onVisibleChange);
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype.ngOnDestroy = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype.ngAfterViewInit = function () {
        var /** @type {?} */ mouse$;
        if (this.trigger === 'hover') {
            var /** @type {?} */ mouseEnterOrigin$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'mouseenter').pipe(mapTo$1(true));
            var /** @type {?} */ mouseLeaveOrigin$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'mouseleave').pipe(mapTo$1(false));
            mouse$ = mouseEnterOrigin$.pipe(merge$1(mouseLeaveOrigin$));
        }
        if (this.trigger === 'click') {
            mouse$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'click').pipe(mapTo$1(true));
            this._renderer.listen(this._atOrigin.elementRef.nativeElement, 'click', function (e) {
                e.preventDefault();
            });
        }
        var /** @type {?} */ observable$ = mouse$.pipe(merge$1(this._visibleChange));
        this._startSubscribe(observable$);
    };
    Object.defineProperty(PopoverComponent.prototype, "_hasBackdrop", {
        /**
         * @return {?}
         */
        get: function () {
            return this.trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    return PopoverComponent;
}());
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'atPopover',
                animations: [DropDownAnimation],
                template: "\n    <div class=\"at-popover\">\n      <ng-content></ng-content>\n    </div>\n    <ng-template\n      cdkConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n      [cdkConnectedOverlayPositions]=\"_positions\"\n      [cdkConnectedOverlayOrigin]=\"_atOrigin\"\n      (backdropClick)=\"_hide()\"\n      [cdkConnectedOverlayMinWidth]=\"_triggerWidth\"\n      (positionChange)=\"_onPositionChange($event)\"\n      [cdkConnectedOverlayOpen]=\"atVisible\"\n    >\n      <div\n        class=\"at-popover__popper__{{placement}} \"\n        [@dropDownAnimation]=\"_dropDownPosition\"\n        (mouseenter)=\"_onMouseEnterEvent($event)\"\n        (mouseleave)=\"_onMouseLeaveEvent($event)\"\n        [style.minWidth.px]=\"_triggerWidth\"\n        (click)=\"_clickDropDown($event)\">\n        <div class=\"at-popover__popper at-popover--{{placement || _placement}}\">\n          <div class=\"at-popover__arrow\"></div>\n          <div *ngIf=\"title\" class=\"at-popover__title\">\n            <ng-content select=\"[popTitle]\"></ng-content>\n          </div>\n          <div class=\"at-popover__content\">\n            <ng-content select=\"[popContent]\"></ng-content>\n          </div>\n        </div>\n        <!--<ng-content select=\"[at-dropdown-custom]\"></ng-content>-->\n      </div>\n    </ng-template>\n\n\n  "
            },] },
];
/** @nocollapse */
PopoverComponent.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
]; };
PopoverComponent.propDecorators = {
    "_atMenu": [{ type: ContentChild, args: [DropdownMenuItemComponent,] },],
    "_atOrigin": [{ type: ContentChild, args: [PopTriggerDirective,] },],
    "trigger": [{ type: Input },],
    "_visibleChange": [{ type: Output },],
    "atVisibleChange": [{ type: Output },],
    "_cdkOverlay": [{ type: ViewChild, args: [CdkConnectedOverlay,] },],
    "atClickHide": [{ type: Input },],
    "atVisible": [{ type: Input },],
    "placement": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressComponent = (function () {
    function ProgressComponent() {
        this._width = 0;
        this.statusIcon = StatusIconType;
        this.stroke = 8;
    }
    /**
     * @return {?}
     */
    ProgressComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProgressComponent.prototype, "width", {
        /**
         * @return {?}
         */
        get: function () {
            return this._width;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            value > 100 ? value = 100 : value;
            value < 0 ? value = 0 : value;
            this._width = value;
            if (this._width == 100) {
                this.status = 'success';
            }
        },
        enumerable: true,
        configurable: true
    });
    return ProgressComponent;
}());
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'atProgress',
                template: "\n    <div class=\"at-progress at-progress--bar at-progress--{{status}}\">\n      <div class=\"at-progress-bar\">\n        <div class=\"at-progress-bar__wraper\" [ngStyle]=\"{'height':stroke+'px'}\">\n          <div class=\"at-progress-bar__inner\" [ngStyle]=\"{'width': width+'%'}\"></div>\n        </div>\n      </div>\n      <div class=\"at-progress__text\">\n        <span *ngIf=\"!status\">{{width}}%</span>\n        <i *ngIf=\"status\" class=\"icon {{ statusIcon[status]}}\"></i>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
ProgressComponent.ctorParameters = function () { return []; };
ProgressComponent.propDecorators = {
    "stroke": [{ type: Input },],
    "width": [{ type: Input },],
    "status": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipComponent = (function (_super) {
    tslib_1.__extends(TooltipComponent, _super);
    function TooltipComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TooltipComponent;
}(PopoverComponent));
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTooltip',
                template: "\n    <!--<div class=\"at-tooltip\">-->\n    <!--<span (mouseenter)=\"mouseOver()\" (mouseleave)=\"mouseOut()\" class=\"at-tooltip__trigger\"-->\n          <!--#trigger>-->\n      <!--<ng-content select=\"[tooltipTrigger]\"></ng-content>-->\n    <!--</span>-->\n      <!--<div-->\n        <!--(mouseenter)=\"mouseOver()\" (mouseleave)=\"mouseOut()\" [ngStyle]=\"{'display': pop ? '' :'none'}\"-->\n        <!--class=\"at-tooltip__popper at-tooltip&#45;&#45;{{placement}}\" #popover>-->\n        <!--<div class=\"at-tooltip__arrow\"></div>-->\n        <!--<div class=\"at-tooltip__content\">-->\n          <!--<ng-content select=\"[tooltipContent]\"></ng-content>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  ",
            },] },
];
/** @nocollapse */
TooltipComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormComponent = (function () {
    function FormComponent() {
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = function () {
    };
    return FormComponent;
}());
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-form',
                template: "\n    <ng-content></ng-content>",
            },] },
];
/** @nocollapse */
FormComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtFormDirective = (function () {
    function AtFormDirective() {
        this.form = true;
        this.type = 'horizontal';
    }
    Object.defineProperty(AtFormDirective.prototype, "inline", {
        /**
         * @return {?}
         */
        get: function () {
            return this.type == 'inline';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtFormDirective.prototype, "horizontal", {
        /**
         * @return {?}
         */
        get: function () {
            return this.type == 'horizontal';
        },
        enumerable: true,
        configurable: true
    });
    return AtFormDirective;
}());
AtFormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atForm]'
            },] },
];
/** @nocollapse */
AtFormDirective.ctorParameters = function () { return []; };
AtFormDirective.propDecorators = {
    "form": [{ type: HostBinding, args: ['class.at-form',] },],
    "inline": [{ type: HostBinding, args: ['class.at-form--inline',] },],
    "horizontal": [{ type: HostBinding, args: ['class.at-form--horizontal',] },],
    "type": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtFormItemDirective = (function () {
    function AtFormItemDirective() {
        this.item = true;
    }
    return AtFormItemDirective;
}());
AtFormItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormItem]'
            },] },
];
/** @nocollapse */
AtFormItemDirective.ctorParameters = function () { return []; };
AtFormItemDirective.propDecorators = {
    "item": [{ type: HostBinding, args: ['class.at-form-item',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtFormLabelDirective = (function () {
    function AtFormLabelDirective() {
        this.required = false;
        this.label = true;
    }
    Object.defineProperty(AtFormLabelDirective.prototype, "require", {
        /**
         * @return {?}
         */
        get: function () {
            return this.required;
        },
        enumerable: true,
        configurable: true
    });
    return AtFormLabelDirective;
}());
AtFormLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormLabel]'
            },] },
];
/** @nocollapse */
AtFormLabelDirective.ctorParameters = function () { return []; };
AtFormLabelDirective.propDecorators = {
    "required": [{ type: Input },],
    "label": [{ type: HostBinding, args: ['class.at-form-item__label',] },],
    "require": [{ type: HostBinding, args: ['class.at-form-item__label—-required',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtFormContentDirective = (function () {
    function AtFormContentDirective() {
        this.content = true;
    }
    return AtFormContentDirective;
}());
AtFormContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormContent]'
            },] },
];
/** @nocollapse */
AtFormContentDirective.ctorParameters = function () { return []; };
AtFormContentDirective.propDecorators = {
    "content": [{ type: HostBinding, args: ['class.at-form-item__content',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtFormErrorDirective = (function () {
    function AtFormErrorDirective() {
        this.error = true;
    }
    return AtFormErrorDirective;
}());
AtFormErrorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormError]'
            },] },
];
/** @nocollapse */
AtFormErrorDirective.ctorParameters = function () { return []; };
AtFormErrorDirective.propDecorators = {
    "error": [{ type: HostBinding, args: ['class.at-form-item__error-tip',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtFormFeedbackDirective = (function () {
    function AtFormFeedbackDirective() {
        this.feedback = true;
    }
    Object.defineProperty(AtFormFeedbackDirective.prototype, "success", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isSuccess;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtFormFeedbackDirective.prototype, "warning", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isWarning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtFormFeedbackDirective.prototype, "error", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtFormFeedbackDirective.prototype, "isWarning", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isDirtyAndError('warning');
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AtFormFeedbackDirective.prototype, "isValidate", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isDirtyAndError('validating') || this.status === 'pending' || this.status && this.status.dirty && this.status.pending;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AtFormFeedbackDirective.prototype, "isError", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isDirtyAndError('error')
                || this._isDirtyAndError('required')
                || this._isDirtyAndError('pattern')
                || this._isDirtyAndError('email')
                || this._isDirtyAndError('maxlength')
                || this._isDirtyAndError('minlength');
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AtFormFeedbackDirective.prototype, "isSuccess", {
        /**
         * @return {?}
         */
        get: function () {
            return this.status === 'success' || this.status && this.status.dirty && this.status.valid;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @param {?} name
     * @return {?}
     */
    AtFormFeedbackDirective.prototype._isDirtyAndError = function (name) {
        return this.status === name || this.status && this.status.dirty && this.status.hasError && this.status.hasError(name);
    };
    return AtFormFeedbackDirective;
}());
AtFormFeedbackDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormFeedback]'
            },] },
];
/** @nocollapse */
AtFormFeedbackDirective.ctorParameters = function () { return []; };
AtFormFeedbackDirective.propDecorators = {
    "status": [{ type: Input },],
    "feedback": [{ type: HostBinding, args: ['class.feedback',] },],
    "success": [{ type: HostBinding, args: ['class.feedback_success',] },],
    "warning": [{ type: HostBinding, args: ['class.feedback_warning',] },],
    "error": [{ type: HostBinding, args: ['class.feedback_error',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DatetimepickerComponent = (function () {
    /**
     * @param {?} el
     */
    function DatetimepickerComponent(el) {
        this.el = el;
        this._atType = 'full';
        this.show = false;
        this._atValue = null;
        this.atYear = moment(this.atValue || this.showValue).year();
        this.atMonth = moment(this.atValue || this.showValue).month();
        this.selectedDate = moment(this.atValue).date();
        this.selectedYear = moment(this.atValue).year();
        this.selectedMonth = moment(this.atValue).month();
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.format = "YYYY-MM-DD";
    }
    Object.defineProperty(DatetimepickerComponent.prototype, "atType", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atType;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatetimepickerComponent.prototype, "atValue", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atValue;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this._atValue = value;
                this._show_value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatetimepickerComponent.prototype, "showValue", {
        /**
         * @return {?}
         */
        get: function () {
            return this._show_value;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this._show_value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    DatetimepickerComponent.prototype.writeValue = function (value) {
        if (value) {
            this.updateDate(value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatetimepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatetimepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    DatetimepickerComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatetimepickerComponent.prototype.onDocumentClick = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.show = false;
        }
    };
    /**
     * @return {?}
     */
    DatetimepickerComponent.prototype.preYear = function () {
        this.atYear = this.atYear - 1;
    };
    /**
     * @return {?}
     */
    DatetimepickerComponent.prototype.nextYear = function () {
        this.atYear = this.atYear + 1;
    };
    /**
     * @return {?}
     */
    DatetimepickerComponent.prototype.preMonth = function () {
        if (this.atMonth - 1 < 0) {
            this.atMonth = 11;
            this.preYear();
        }
        else {
            this.atMonth = this.atMonth - 1;
        }
    };
    /**
     * @return {?}
     */
    DatetimepickerComponent.prototype.nextMonth = function () {
        if (this.atMonth + 1 > 11) {
            this.atMonth = 0;
            this.nextYear();
        }
        else {
            this.atMonth = this.atMonth + 1;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimepickerComponent.prototype.clickDate = function (date) {
        this.updateDate(date.date);
        var /** @type {?} */ change_date = this.atValue;
        if (this.format) {
            change_date = change_date.format(this.format);
        }
        this.onChange(change_date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DatetimepickerComponent.prototype.updateDate = function (value) {
        if (this.atValue === value) {
            return;
        }
        this.atValue = value;
        this.selectedMonth = moment(this.atValue).month();
        this.selectedYear = moment(this.atValue).year();
        this.selectedDate = moment(this.atValue).date();
        this.atYear = moment(this.atValue).year();
        this.atMonth = moment(this.atValue).month();
    };
    /**
     * @return {?}
     */
    DatetimepickerComponent.prototype.ngAfterViewInit = function () {
        // this.cssTop = this.input.inputField.nativeElement.offsetHeight + 'px'
    };
    /**
     * @param {?} month
     * @return {?}
     */
    DatetimepickerComponent.prototype.clickMonth = function (month) {
        // this.atValue = moment(this.atValue).year(this.atYear).month(month.index).toDate();
        this.atMonth = month.index;
        this.atType = 'full';
    };
    /**
     * @param {?} year
     * @return {?}
     */
    DatetimepickerComponent.prototype.clickYear = function (year) {
        this.atYear = year;
        this.atType = 'month';
    };
    /**
     * @param {?} s
     * @return {?}
     */
    DatetimepickerComponent.prototype.setCal = function (s) {
        this.atType = s;
    };
    /**
     * @return {?}
     */
    DatetimepickerComponent.prototype.preCentury = function () {
        this.atYear = this.atYear - 10;
    };
    /**
     * @return {?}
     */
    DatetimepickerComponent.prototype.nextCenury = function () {
        this.atYear = this.atYear + 10;
    };
    /**
     * @return {?}
     */
    DatetimepickerComponent.prototype.choosePicker = function () {
        this.show = true;
    };
    return DatetimepickerComponent;
}());
DatetimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'atDatetimePicker',
                template: "\n    <atInput [ngModel]=\"atValue | atFormat: format\" #timeinput (onFocus)=\"choosePicker()\"\n             (click)=\"choosePicker()\"></atInput>\n    <div *ngIf=\"show\" class=\"over-flow-wrapper\" [ngStyle]=\"{'top':cssTop}\">\n      <div class=\"at-datepicker\">\n        <div class=\"at-datepicker--panel\">\n          <div class=\"at-datepicker--panel--header\">\n            <div style=\"position: relative\">\n              <a *ngIf=\"atType == 'full'\" (click)=\"preYear()\" class=\"pre-year-btn\">\n              </a>\n              <a *ngIf=\"atType == 'full'\" (click)=\"preMonth()\" class=\"pre-month-btn\">\n              </a>\n\n              <a *ngIf=\"atType == 'year'\" (click)=\"preCentury()\" class=\"pre-year-btn\">\n              </a>\n\n\n              <span class=\"current-select-label\">\n            <a (click)=\"setCal('month')\" class=\"month-select\">{{atMonth + 1}}\u6708</a>\n            <a (click)=\"setCal('year')\" class=\"year-select\">{{atYear}}\u5E74</a>\n          </span>\n\n              <a *ngIf=\"atType == 'full'\" (click)=\"nextMonth()\" class=\"next-month-btn\">\n              </a>\n              <a (click)=\"nextYear()\" class=\"next-year-btn\">\n              </a>\n\n              <a *ngIf=\"atType == 'year'\" (click)=\"nextCenury()\" class=\"next-year-btn\">\n              </a>\n\n            </div>\n          </div>\n          <div class=\"at-datepicker--panel--body\">\n            <atCalendar (_clickDate)=\"clickDate($event)\" (_clickYear)=\"clickYear($event)\"\n                        (_clickMonth)=\"clickMonth($event)\"\n                        [format]=\"format\"\n                        [disableDate]=\"disableDate\"\n                        [atType]=\"atType\"\n                        [atYear]=\"atYear\" [atMonth]=\"atMonth\"\n                        [showValue]=\"showValue\"\n                        [atValue]=\"atValue\"></atCalendar>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return DatetimepickerComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
DatetimepickerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
DatetimepickerComponent.propDecorators = {
    "atType": [{ type: Input },],
    "format": [{ type: Input },],
    "disableDate": [{ type: Input },],
    "onDocumentClick": [{ type: HostListener, args: ['document:click', ['$event'],] },],
    "input": [{ type: ViewChild, args: ['timeinput',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarComponent = (function () {
    function CalendarComponent() {
        this._clickMonth = new EventEmitter();
        this._clickYear = new EventEmitter();
        this._clickDate = new EventEmitter();
        this.monthName = [];
        this._atType = 'full';
        this._weeks = [];
        this._months = [];
        this._years = [];
        this._atYear = moment(new Date()).year();
        this._atMonth = moment(new Date()).month();
    }
    Object.defineProperty(CalendarComponent.prototype, "disableDate", {
        /**
         * @return {?}
         */
        get: function () {
            return this._disabledDate;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._disabledDate = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "showValue", {
        /**
         * @return {?}
         */
        get: function () {
            return this._show_value || new Date();
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._show_value = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atType", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atType;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atType = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "years", {
        /**
         * @return {?}
         */
        get: function () {
            return this._years;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._years = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "months", {
        /**
         * @return {?}
         */
        get: function () {
            return this._months;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._months = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atValue", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atValue || new Date();
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atValue = value;
            var /** @type {?} */ day = value || new Date();
            this.atMonth = moment(day).month();
            this.atYear = moment(day).year();
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "weeks", {
        /**
         * @return {?}
         */
        get: function () {
            return this._weeks;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._weeks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atYear", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atYear;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atYear = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atMonth", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atMonth;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atMonth = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "atDay", {
        /**
         * @return {?}
         */
        get: function () {
            return this._atDay;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._atDay = value;
            this.buildCalendar();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = function () {
        this.monthName = moment.months();
    };
    /**
     * @param {?} d
     * @return {?}
     */
    CalendarComponent.prototype.buildMonth = function (d) {
        var /** @type {?} */ weeks = [];
        var /** @type {?} */ start = d.clone().date(1).day(0);
        var /** @type {?} */ month = d.clone();
        var /** @type {?} */ done = false;
        var /** @type {?} */ date = start.clone();
        var /** @type {?} */ monthIndex = date.month();
        var /** @type {?} */ count = 0;
        while (!done) {
            weeks.push({ days: this.buildWeek(date.clone(), month) });
            date.add(1, 'w');
            done = count++ > 4;
            monthIndex = date.month();
        }
        return weeks;
    };
    ;
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    CalendarComponent.prototype.buildWeek = function (date, month) {
        var /** @type {?} */ days = [];
        for (var /** @type {?} */ i = 0; i < 7; i++) {
            days.push({
                number: date.date(),
                isLastMonth: date.month() < month.month(),
                isNextMonth: date.month() > month.month(),
                isCurrentDay: date.isSame(new Date(), 'day'),
                isSelectedDay: date.isSame(this.atValue, 'day'),
                title: date.format(this.format),
                date: date,
                disabled: this.disableDate && date.isBefore(this.disableDate, 'day'),
                firstDisabled: false,
                lastDisabled: false,
            });
            date = date.clone();
            date.add(1, 'd');
        }
        return days;
    };
    ;
    /**
     * @param {?} year
     * @return {?}
     */
    CalendarComponent.prototype.buildCentury = function (year) {
        var /** @type {?} */ century = [];
        var /** @type {?} */ temparray = [];
        for (var _i = 0, _a = Array.from(Array(20).keys()); _i < _a.length; _i++) {
            var i = _a[_i];
            century.push(i - 10 + year);
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ j = century.length; i < j; i += 5) {
            temparray.push(century.slice(i, i + 5));
            // do whatever
        }
        century = temparray;
        return century;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.buildYears = function (date) {
        var /** @type {?} */ formatMonths = [];
        var /** @type {?} */ months = [];
        for (var /** @type {?} */ i = 0; i < 12; i++) {
            months.push({
                index: i,
                name: this.monthName[i],
                isCurrentMonth: moment(new Date()).month() === i && date.isSame(new Date(), 'year'),
                isSelectedMonth: this.atMonth === i,
            });
            if ((i + 1) % 3 === 0) {
                formatMonths.push(months);
                months = [];
            }
        }
        return formatMonths;
    };
    ;
    /**
     * @return {?}
     */
    CalendarComponent.prototype.buildCalendar = function () {
        moment.locale('zh-cn');
        var /** @type {?} */ time = (this.atValue == null || this.atValue == '' || !this.atValue) ? this.showValue : this.atValue;
        var /** @type {?} */ date = moment(time).year(this.atYear).month(this.atMonth);
        this.weeks = this.buildMonth(date);
        this.months = this.buildYears(date);
        this._years = this.buildCentury(this.atYear);
    };
    /**
     * @param {?} day
     * @return {?}
     */
    CalendarComponent.prototype.clickDay = function (day) {
        if (!day.disabled) {
            this._clickDate.emit(day);
        }
    };
    /**
     * @param {?} single
     * @return {?}
     */
    CalendarComponent.prototype.clickMonth = function (single) {
        this._clickMonth.emit(single);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CalendarComponent.prototype.clickYear = function (year) {
        this._clickYear.emit(year);
    };
    return CalendarComponent;
}());
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCalendar',
                template: "\n    <table *ngIf=\"atType =='full'\" class=\"at-calendar-table\">\n      <thead>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u65E5</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E00</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E8C</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E09</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u56DB</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E94</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u516D</span></th>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let week of weeks\">\n        <td\n          *ngFor=\"let day of week.days\" class=\"at-date-cell\"\n          (click)=\"clickDay(day)\"\n          [ngClass]=\"{'at-date-cell--last-month':day.isLastMonth,\n'at-date-cell--selected':day.isSelectedDay ,\n'at-date-cell--today':day.isCurrentDay,\n'at-date-cell--next-month':day.isNextMonth,\n'at-date-cell--disabled':day.disabled}\">\n          <div class=\"at-date\">{{day.number}}</div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n    <table *ngIf=\"atType=='month'\" class=\"at-calendar-table\">\n      <tbody>\n      <tr *ngFor=\"let month of months\">\n        <td\n          *ngFor=\"let single of month\" class=\"at-month-cell\"\n          (click)=\"clickMonth(single)\"\n          [ngClass]=\"{\n              'at-date-cell--selected':single.isSelectedMonth ,\n              'at-date-cell--today':single.isCurrentMonth}\">\n          <div class=\"at-date\">{{single.name}}</div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n    <table *ngIf=\"atType=='year'\" class=\"at-calendar-table\">\n      <tbody>\n      <tr *ngFor=\"let section of years\">\n        <td\n          *ngFor=\"let year of section\" class=\"at-month-cell\"\n          (click)=\"clickYear(year)\"\n          [ngClass]=\"{\n              'at-date-cell--selected':year.isSelectedMonth ,\n              'at-date-cell--today':year.isCurrentMonth}\">\n          <div class=\"at-date\">{{year}}</div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n\n\n\n\n  ",
            },] },
];
/** @nocollapse */
CalendarComponent.ctorParameters = function () { return []; };
CalendarComponent.propDecorators = {
    "_clickMonth": [{ type: Output },],
    "_clickYear": [{ type: Output },],
    "_clickDate": [{ type: Output },],
    "disableDate": [{ type: Input },],
    "showValue": [{ type: Input },],
    "private": [{ type: Input },],
    "atType": [{ type: Input },],
    "atValue": [{ type: Input },],
    "atYear": [{ type: Input },],
    "format": [{ type: Input },],
    "atMonth": [{ type: Input },],
    "atDay": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimeComponent = (function () {
    function TimeComponent() {
        this._selected_second = moment().hour();
        this._selected_minutes = moment().minute();
        this._selected_hour = moment().hour();
        this.selectHour = new EventEmitter();
        this.selectMinute = new EventEmitter();
        this.selectSecond = new EventEmitter();
        this.inited = false;
    }
    /**
     * @return {?}
     */
    TimeComponent.prototype.ngOnInit = function () {
        this._buildHours();
        this._buildMinutes();
        this._buildSeconds();
    };
    Object.defineProperty(TimeComponent.prototype, "selected_second", {
        /**
         * @return {?}
         */
        get: function () {
            return this._selected_second;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._selected_second = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeComponent.prototype, "selected_minutes", {
        /**
         * @return {?}
         */
        get: function () {
            return this._selected_minutes;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._selected_minutes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeComponent.prototype, "selected_hour", {
        /**
         * @return {?}
         */
        get: function () {
            return this._selected_hour;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._selected_hour = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimeComponent.prototype._buildHours = function () {
        this.hours = [];
        for (var /** @type {?} */ i = 0; i <= 23; i++) {
            this.hours.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype._buildMinutes = function () {
        this.minutes = [];
        for (var /** @type {?} */ i = 0; i <= 59; i++) {
            this.minutes.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype._buildSeconds = function () {
        this.seconds = [];
        for (var /** @type {?} */ i = 0; i <= 59; i++) {
            this.seconds.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.ngAfterViewChecked = function () {
        if (!this.inited) {
            this.inited = true;
            this.setPosition();
        }
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.ngAfterContentInited = function () {
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.setPosition = function () {
        var /** @type {?} */ m_p = this.selected_minutes / 60;
        var /** @type {?} */ h_p = this.selected_hour / 24;
        var /** @type {?} */ s_p = this.selected_second / 60;
        var /** @type {?} */ h_el = this.hour_panel._elementRef.nativeElement;
        var /** @type {?} */ m_el = this.minute_panel._elementRef.nativeElement;
        var /** @type {?} */ s_el = this.second_panel._elementRef.nativeElement;
        var /** @type {?} */ h_el_height = h_el.scrollHeight;
        var /** @type {?} */ m_el_height = m_el.scrollHeight;
        var /** @type {?} */ s_el_height = s_el.scrollHeight;
        h_el.scrollTop = h_el_height * h_p;
        s_el.scrollTop = s_el_height * s_p;
        m_el.scrollTop = m_el_height * m_p;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TimeComponent.prototype._select_minutes = function (index) {
        this.selected_second;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TimeComponent.prototype._select_hour = function (index) {
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TimeComponent.prototype._select_second = function (index) {
    };
    return TimeComponent;
}());
TimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTime',
                template: "\n    <div atRow>\n      <div #hour_panel atCol [span]=\"8\" class=\"at-time-panel\">\n        <ul>\n          <li *ngFor=\"let s of hours\"\n              [ngClass]=\"{'time-selected':s.index == selected_hour}\">\n            {{s.name}}\n          </li>\n        </ul>\n      </div>\n      <div #minute_panel atCol [span]=\"8\" class=\"at-time-panel\">\n        <ul>\n          <li *ngFor=\"let s of minutes\"\n              [ngClass]=\"{'time-selected':s.index == selected_minutes}\"\n          >\n            {{s.name}}\n          </li>\n        </ul>\n      </div>\n      <div #second_panel atCol [span]=\"8\" class=\"at-time-panel\">\n\n        <ul>\n          <li *ngFor=\"let s of seconds\"\n              [ngClass]=\"{'time-selected':s.index == selected_second}\"\n          >\n            {{s.name}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  ",
            },] },
];
/** @nocollapse */
TimeComponent.ctorParameters = function () { return []; };
TimeComponent.propDecorators = {
    "selectHour": [{ type: Output },],
    "selectMinute": [{ type: Output },],
    "selectSecond": [{ type: Output },],
    "selected_second": [{ type: Input },],
    "selected_minutes": [{ type: Input },],
    "selected_hour": [{ type: Input },],
    "hour_panel": [{ type: ViewChild, args: ['hour_panel',] },],
    "minute_panel": [{ type: ViewChild, args: ['minute_panel',] },],
    "second_panel": [{ type: ViewChild, args: ['second_panel',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CardComponent = (function () {
    function CardComponent() {
        this.border = false;
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = function () {
    };
    return CardComponent;
}());
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCard',
                template: "\n    <div class=\"at-card\" [ngClass]=\"{'at-card-bordered':border}\">\n      <ng-content select=\"[card-content]\">\n\n      </ng-content>\n    </div>",
            },] },
];
/** @nocollapse */
CardComponent.ctorParameters = function () { return []; };
CardComponent.propDecorators = {
    "border": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtFormatPipe = (function () {
    function AtFormatPipe() {
    }
    /**
     * @param {?} value
     * @param {?} formatString
     * @return {?}
     */
    AtFormatPipe.prototype.transform = function (value, formatString) {
        if (value) {
            return moment(value).format(formatString);
        }
        else {
            return '';
        }
    };
    return AtFormatPipe;
}());
AtFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'atFormat'
            },] },
];
/** @nocollapse */
AtFormatPipe.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabSetComponent = (function () {
    function TabSetComponent() {
        this.position = 'horizontal';
        this.selected_index = 0;
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    TabSetComponent.prototype.ngOnInit = function () {
    };
    /**
     * @param {?} i
     * @return {?}
     */
    TabSetComponent.prototype.selectTab = function (i) {
        this.selected_index = i;
    };
    return TabSetComponent;
}());
TabSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTabSet',
                template: "\n    <div class=\"at-tab at-tab-{{position}}\">\n      <div class=\"at-tabs-bar \">\n        <div class=\"at-tabs-nav-container\">\n          <div class=\"at-tabs-nav-wrap\">\n            <div class=\"at-tab--navs\">\n              <at-tab-navs\n                [selected_index]=\"selected_index\"\n                [position]=\"position\">\n                <div at-tab-label *ngFor=\"let item of tabs;let i =index\" (click)=\"selectTab(i)\" class=\"at-tab-nav\">\n                  <ng-template [ngTemplateOutlet]=\"item._tabHeading\">\n                  </ng-template>\n                </div>\n              </at-tab-navs>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"at-tab--contents\">\n        <div class=\"at-tab-content\">\n          <at-tab-body [content]=\"tabs[selected_index]?._content\">\n\n          </at-tab-body>\n        </div>\n      </div>\n\n    </div>\n  ",
            },] },
];
/** @nocollapse */
TabSetComponent.ctorParameters = function () { return []; };
TabSetComponent.propDecorators = {
    "position": [{ type: Input },],
    "selected_index": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabComponent = (function () {
    /**
     * @param {?} _tabSetComponent
     */
    function TabComponent(_tabSetComponent) {
        this._tabSetComponent = _tabSetComponent;
        this.tab_contents = [];
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = function () {
        this._tabSetComponent.tabs.push(this);
    };
    return TabComponent;
}());
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTab, [atTab]',
                encapsulation: ViewEncapsulation.None,
                template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
            },] },
];
/** @nocollapse */
TabComponent.ctorParameters = function () { return [
    { type: TabSetComponent, },
]; };
TabComponent.propDecorators = {
    "_tabHeading": [{ type: ContentChild, args: ['atTabHeading',] },],
    "_content": [{ type: ViewChild, args: [TemplateRef,] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabContentComponent = (function () {
    /**
     * @param {?} _tab_component
     */
    function TabContentComponent(_tab_component) {
        this._tab_component = _tab_component;
    }
    /**
     * @return {?}
     */
    TabContentComponent.prototype.ngOnInit = function () {
    };
    return TabContentComponent;
}());
TabContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'tabContent',
                template: "\n    <ng-content></ng-content>\n  ",
            },] },
];
/** @nocollapse */
TabContentComponent.ctorParameters = function () { return [
    { type: TabComponent, },
]; };
TabContentComponent.propDecorators = {
    "title": [{ type: Input },],
    "content": [{ type: ViewChild, args: [TemplateRef,] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabBodyComponent = (function () {
    function TabBodyComponent() {
    }
    /**
     * @return {?}
     */
    TabBodyComponent.prototype.ngOnInit = function () {
    };
    return TabBodyComponent;
}());
TabBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-tab-body',
                template: "\n    <ng-template [ngTemplateOutlet]=\"content\"></ng-template>",
            },] },
];
/** @nocollapse */
TabBodyComponent.ctorParameters = function () { return []; };
TabBodyComponent.propDecorators = {
    "content": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabHeaderComponent = (function () {
    function TabHeaderComponent() {
    }
    /**
     * @return {?}
     */
    TabHeaderComponent.prototype.ngOnInit = function () {
    };
    return TabHeaderComponent;
}());
TabHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-tab-header',
                template: "<ng-content>\n    \n  </ng-content>",
            },] },
];
/** @nocollapse */
TabHeaderComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtTabInkDirective = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _ngZone
     */
    function AtTabInkDirective(_renderer, _elementRef, _ngZone) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._atTabsInkBar = true;
        this.atPositionMode = 'horizontal';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    AtTabInkDirective.prototype.alignToElement = function (element) {
        var _this = this;
        this.show();
        this._ngZone.runOutsideAngular(function () {
            requestAnimationFrame(function () {
                /** when horizontal remove height style and add transfrom left **/
                if (_this.atPositionMode === 'horizontal') {
                    _this._renderer.removeStyle(_this._elementRef.nativeElement, 'height');
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'transform', "translate3d(" + _this._getLeftPosition(element) + ", 0px, 0px)");
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'width', _this._getElementWidth(element));
                }
                else {
                    /** when vertical remove width style and add transfrom top **/
                    _this._renderer.removeStyle(_this._elementRef.nativeElement, 'width');
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'transform', "translate3d(0px, " + _this._getTopPosition(element) + ", 0px)");
                    _this._renderer.setStyle(_this._elementRef.nativeElement, 'height', _this._getElementHeight(element));
                }
            });
        });
    };
    /**
     * @return {?}
     */
    AtTabInkDirective.prototype.show = function () {
        this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'visible');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AtTabInkDirective.prototype.setDisplay = function (value) {
        this._renderer.setStyle(this._elementRef.nativeElement, 'display', value);
    };
    /**
     * @return {?}
     */
    AtTabInkDirective.prototype.hide = function () {
        this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
    };
    /**
     * @param {?} element
     * @return {?}
     */
    AtTabInkDirective.prototype._getLeftPosition = function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    AtTabInkDirective.prototype._getElementWidth = function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    AtTabInkDirective.prototype._getTopPosition = function (element) {
        return element ? element.offsetTop + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    AtTabInkDirective.prototype._getElementHeight = function (element) {
        return element ? element.offsetHeight + 'px' : '0';
    };
    return AtTabInkDirective;
}());
AtTabInkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[AtTabInk]'
            },] },
];
/** @nocollapse */
AtTabInkDirective.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: NgZone, },
]; };
AtTabInkDirective.propDecorators = {
    "_atTabsInkBar": [{ type: HostBinding, args: ['class.at-tabs-ink-bar',] },],
    "atAnimated": [{ type: Input },],
    "atPositionMode": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabLabelDirective = (function () {
    /**
     * @param {?} elementRef
     */
    function TabLabelDirective(elementRef) {
        this.elementRef = elementRef;
    }
    return TabLabelDirective;
}());
TabLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[at-tab-label]'
            },] },
];
/** @nocollapse */
TabLabelDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabNavsComponent = (function () {
    function TabNavsComponent() {
        this._selected_index = 0;
        this._position_modal = 'horizontal';
    }
    Object.defineProperty(TabNavsComponent.prototype, "selected_index", {
        /**
         * @return {?}
         */
        get: function () {
            return this._selected_index;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._selected_index = value;
            this.alignInk(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabNavsComponent.prototype, "position", {
        /**
         * @return {?}
         */
        get: function () {
            return this._position_modal;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._position_modal = value;
            this.alignInk(this.selected_index);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabNavsComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TabNavsComponent.prototype.ngAfterContentInit = function () {
        this._inkBar.alignToElement(this._labelWrappers.toArray()[0].elementRef.nativeElement);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabNavsComponent.prototype.alignInk = function (index) {
        if (this._labelWrappers) {
            this._inkBar.alignToElement(this._labelWrappers.toArray()[index].elementRef.nativeElement);
        }
    };
    return TabNavsComponent;
}());
TabNavsComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-tab-navs',
                template: "\n    <div AtTabInk [atPositionMode]=\"position\" class=\"at-tabs-ink-bar at-tabs-ink-bar-animated\"></div>\n    <ng-content></ng-content>\n  ",
            },] },
];
/** @nocollapse */
TabNavsComponent.ctorParameters = function () { return []; };
TabNavsComponent.propDecorators = {
    "_labelWrappers": [{ type: ContentChildren, args: [TabLabelDirective,] },],
    "_inkBar": [{ type: ViewChild, args: [AtTabInkDirective,] },],
    "position": [{ type: Input },],
    "selected_index": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StepsComponent = (function () {
    function StepsComponent() {
        this._direction = 'horizontal';
        this.steps = [];
        this._current = 0;
    }
    Object.defineProperty(StepsComponent.prototype, "current", {
        /**
         * @return {?}
         */
        get: function () {
            return this._current;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value < 0) {
                return;
            }
            console.log(this._current);
            this._current = value;
            this.steps[value].status = 'process';
            //all before success
            this.steps.filter(function (s, i) {
                return i < value;
            }).forEach(function (step) { return step.status = 'finish'; });
            //all after wait
            this.steps.filter(function (s, i) {
                return i > value;
            }).forEach(function (step) { return step.status = 'wait'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StepsComponent.prototype, "direction", {
        /**
         * @return {?}
         */
        get: function () {
            return this._direction;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._direction = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StepsComponent.prototype.ngOnInit = function () {
        //init status
        this.steps[0].status = 'process';
    };
    /**
     * @param {?} step
     * @return {?}
     */
    StepsComponent.prototype.addStep = function (step) {
        this.steps.push(step);
    };
    Object.defineProperty(StepsComponent.prototype, "marginPx", {
        /**
         * @return {?}
         */
        get: function () {
            return -this.margin + 'px';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} i
     * @return {?}
     */
    StepsComponent.prototype.stepWidth = function (i) {
        var /** @type {?} */ width = i == (this.steps.length - 1) ? '' : (100 / (this.steps.length - 1)) + '%';
        return width;
    };
    /**
     * @param {?} i
     * @return {?}
     */
    StepsComponent.prototype.isLast = function (i) {
        return i != this.steps.length - 1;
    };
    /**
     * @return {?}
     */
    StepsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var /** @type {?} */ array = this.stepList.toArray();
        var /** @type {?} */ last = array[array.length - 1];
        var /** @type {?} */ width = last.nativeElement.offsetWidth;
        setTimeout(function (_) {
            _this.margin = (width + 10) / (_this.steps.length - 1);
        });
    };
    return StepsComponent;
}());
StepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-steps',
                template: "\n    <div class=\"at-steps at-steps--{{direction}}\">\n      <div #steps *ngFor=\"let step of steps;let i = index\"\n           class=\"at-step at-step--{{step.status}}\"\n           [ngStyle]=\"{width: stepWidth(i) , 'margin-right':marginPx}\">\n        <div *ngIf=\"isLast(i)\" class=\"at-step__line\"></div>\n        <div class=\"at-step__head\">\n          <div class=\"at-step__label\" [ngClass]=\"{'at-step__icon': step.icon}\">\n            <div *ngIf=\"step.status !='finish' && !step.icon\" class=\"at-step__order\">\n              {{ i+1}}\n            </div>\n            <div *ngIf=\"step.icon\">\n              <i class=\"icon {{step.icon}}\"></i>\n            </div>\n            <div *ngIf=\"step.status === 'finish'\">\n              <i class=\"icon icon-check\"></i>\n            </div>\n            <div *ngIf=\"step.status === 'error'\">\n              <i class=\"icon icon-x\"></i>\n            </div>\n          </div>\n        </div>\n        <div class=\"at-step__main\">\n          <div class=\"at-step__title\">{{step.title}}</div>\n          <div class=\"at-step__description\">{{step.description}}</div>\n        </div>\n      </div>\n    </div>\n\n  ",
            },] },
];
/** @nocollapse */
StepsComponent.ctorParameters = function () { return []; };
StepsComponent.propDecorators = {
    "current": [{ type: Input },],
    "direction": [{ type: Input },],
    "stepList": [{ type: ViewChildren, args: ['steps',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StepComponent = (function () {
    /**
     * @param {?} parent
     * @param {?} el
     */
    function StepComponent(parent, el) {
        this.parent = parent;
        this.el = el;
        this.status = 'wait';
        this.title = '';
        this.description = '';
        this.parent.addStep(this);
    }
    /**
     * @return {?}
     */
    StepComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(StepComponent.prototype, "finnalStatus", {
        /**
         * @return {?}
         */
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    return StepComponent;
}());
StepComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-step',
                template: "\n    <ng-content>\n\n    </ng-content>\n  ",
            },] },
];
/** @nocollapse */
StepComponent.ctorParameters = function () { return [
    { type: StepsComponent, },
    { type: ElementRef, },
]; };
StepComponent.propDecorators = {
    "icon": [{ type: Input },],
    "title": [{ type: Input },],
    "description": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtBreadItemComponent = (function () {
    function AtBreadItemComponent() {
        this.separator = '/';
    }
    /**
     * @return {?}
     */
    AtBreadItemComponent.prototype.ngOnInit = function () {
    };
    return AtBreadItemComponent;
}());
AtBreadItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-bread-item',
                template: "\n    <span class=\"at_breadcrumb__text\">\n      <ng-content></ng-content>\n    </span>\n    <span class=\"at-breadcrumb__separator\">{{this.separator}}</span>\n  ",
            },] },
];
/** @nocollapse */
AtBreadItemComponent.ctorParameters = function () { return []; };
AtBreadItemComponent.propDecorators = {
    "separator": [{ type: Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AtModule = (function () {
    function AtModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    AtModule.forRoot = function (options) {
        return {
            ngModule: AtModule,
            providers: [
                AtNotificationService,
                AtMessageService, AtMessageContainerService,
                AtModalService, ModalBaseService, ComponentCreatorBase, NotificationBaseService,
                { provide: AT_ROOT_CONFIG, useValue: options },
            ]
        };
    };
    return AtModule;
}());
AtModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonComponent,
                    HollowDirective,
                    ButtonGroupComponent,
                    MenuComponent,
                    MenuItemComponent,
                    SubMenuComponent,
                    MenuItemGroupComponent,
                    MenuListComponent,
                    RadioGroupComponent,
                    RadioComponent,
                    InlineMenuComponent,
                    RowComponent,
                    ColComponent,
                    TagComponent,
                    IconComponent,
                    CheckboxComponent,
                    CheckboxGroupComponent,
                    InputComponent,
                    RadioButtonComponent,
                    SelectComponent,
                    OptionComponent,
                    SwitchComponent,
                    SliderComponent,
                    TextareaComponent,
                    DropdownComponent,
                    DropdownMenuItemComponent,
                    DropMenuListComponent,
                    NotificationComponent,
                    NotificationContainerComponent,
                    AlertComponent,
                    BadgeComponent,
                    ModalComponent,
                    TableComponent,
                    AtTbodyDirective,
                    AtTdDirective,
                    AtThDirective,
                    AtTbodyTrDirective,
                    AtTheadDirective,
                    PagenationComponent,
                    BreadcrumbComponent,
                    AtBreadItemDirective,
                    MessageContainerComponent,
                    MessageComponent,
                    PopoverComponent,
                    ProgressComponent,
                    TooltipComponent,
                    FormComponent,
                    AtFormDirective,
                    AtFormItemDirective,
                    AtFormLabelDirective,
                    AtFormContentDirective,
                    AtFormErrorDirective,
                    AtFormFeedbackDirective,
                    ModalBodyDirective,
                    DatetimepickerComponent,
                    CalendarComponent,
                    TimeComponent,
                    CardComponent,
                    AtFormatPipe,
                    TabComponent,
                    TabContentComponent,
                    TabSetComponent,
                    TabBodyComponent,
                    TabHeaderComponent,
                    AtTabInkDirective,
                    TabNavsComponent,
                    TabLabelDirective,
                    DropdownDirective,
                    PopTriggerDirective,
                    ModalBodyDirective,
                    StepsComponent,
                    StepComponent,
                    AtBreadItemComponent,
                ],
                exports: [
                    ButtonComponent,
                    HollowDirective,
                    ButtonGroupComponent,
                    MenuComponent,
                    MenuItemComponent,
                    SubMenuComponent,
                    MenuItemGroupComponent,
                    MenuListComponent,
                    RadioGroupComponent,
                    RadioComponent,
                    InlineMenuComponent,
                    RowComponent,
                    ColComponent,
                    TagComponent,
                    IconComponent,
                    CheckboxComponent,
                    CheckboxGroupComponent,
                    InputComponent,
                    RadioButtonComponent,
                    SelectComponent,
                    OptionComponent,
                    SwitchComponent,
                    SliderComponent,
                    TextareaComponent,
                    DropdownComponent,
                    DropdownMenuItemComponent,
                    DropMenuListComponent,
                    NotificationComponent,
                    NotificationContainerComponent,
                    AlertComponent,
                    BadgeComponent,
                    ModalComponent,
                    TableComponent,
                    PagenationComponent,
                    AtThDirective,
                    AtTbodyDirective,
                    AtTbodyTrDirective,
                    ModalBodyDirective,
                    AtTheadDirective,
                    AtTdDirective,
                    BreadcrumbComponent,
                    AtBreadItemDirective,
                    AtBreadItemComponent,
                    MessageContainerComponent,
                    MessageComponent,
                    PopoverComponent,
                    ProgressComponent,
                    TooltipComponent,
                    FormComponent,
                    AtFormContentDirective,
                    AtFormDirective,
                    AtFormItemDirective,
                    AtFormLabelDirective,
                    AtFormErrorDirective,
                    AtFormFeedbackDirective,
                    DropdownDirective,
                    PopTriggerDirective,
                    CalendarComponent,
                    DatetimepickerComponent,
                    TimeComponent,
                    CardComponent,
                    AtFormatPipe,
                    TabComponent,
                    TabContentComponent,
                    TabSetComponent,
                    StepsComponent,
                    StepComponent,
                ],
                entryComponents: [NotificationComponent, NotificationContainerComponent,
                    MessageContainerComponent, MessageComponent,
                    ModalComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    OverlayModule,
                ],
                providers: [AtGlobalMonitorService]
            },] },
];
/** @nocollapse */
AtModule.ctorParameters = function () { return []; };
/**
 * @record
 */
var AT_ROOT_CONFIG = new InjectionToken('AtRootConfig');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { TabComponent, ButtonComponent, HollowDirective, ButtonGroupComponent, MenuComponent, MenuItemComponent, SubMenuComponent, MenuItemGroupComponent, MenuListComponent, RadioGroupComponent, RadioComponent, InlineMenuComponent, RowComponent, ColComponent, TagComponent, IconComponent, CheckboxComponent, CheckboxGroupComponent, InputComponent, SelectComponent, RadioButtonComponent, SwitchComponent, OptionComponent, SliderComponent, TextareaComponent, DropdownComponent, DropdownMenuItemComponent, DropMenuListComponent, NotificationComponent, ComponentCreatorBase, NotificationContainerComponent, NotificationBaseService, AtNotificationService, AlertComponent, BadgeComponent, ModalComponent, AtGlobalMonitorService, AtModalService, ModalBaseService, TableComponent, AtTbodyDirective, AtTdDirective, AtThDirective, AtTbodyTrDirective, AtTheadDirective, PagenationComponent, BreadcrumbComponent, AtBreadItemDirective, MessageContainerComponent, MessageComponent, AtMessageService, AtMessageContainerService, PopoverComponent, ProgressComponent, TooltipComponent, FormComponent, AtFormDirective, AtFormItemDirective, AtFormLabelDirective, AtFormContentDirective, AtFormErrorDirective, AtFormFeedbackDirective, DatetimepickerComponent, CalendarComponent, TimeComponent, CardComponent, AtBreadItemComponent, AtModule, AT_ROOT_CONFIG, DropDownAnimation as ɵb, FadeAnimation as ɵc, TagAnimation as ɵa, ComponentCreator as ɵq, AtFormatPipe as ɵg, DropdownDirective as ɵd, ModalBodyDirective as ɵe, PopTriggerDirective as ɵf, StepComponent as ɵp, StepsComponent as ɵo, AtTabInkDirective as ɵl, TabBodyComponent as ɵj, TabContentComponent as ɵi, TabHeaderComponent as ɵk, TabLabelDirective as ɵn, TabNavsComponent as ɵm, TabSetComponent as ɵh };
export { CommonModule } from '@angular/common';
