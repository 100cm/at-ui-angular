(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/animations'), require('@angular/forms'), require('rxjs/observable/merge'), require('rxjs/Observable'), require('rxjs/operator/debounceTime'), require('timers'), require('moment'), require('moment/locale/zh-cn'), require('@angular/cdk'), require('rxjs/Subject'), require('rxjs/Subscription'), require('rxjs/observable/fromEvent'), require('rxjs/operator/auditTime'), require('rxjs/operator/finally'), require('rxjs/operator/catch'), require('rxjs/operator/do'), require('rxjs/operator/map'), require('rxjs/operator/filter'), require('rxjs/operator/share'), require('rxjs/operator/first'), require('rxjs/operator/switchMap'), require('rxjs/operator/startWith'), require('rxjs/operator/takeUntil'), require('@angular/platform-browser'), require('rxjs/BehaviorSubject')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/animations', '@angular/forms', 'rxjs/observable/merge', 'rxjs/Observable', 'rxjs/operator/debounceTime', 'timers', 'moment', 'moment/locale/zh-cn', '@angular/cdk', 'rxjs/Subject', 'rxjs/Subscription', 'rxjs/observable/fromEvent', 'rxjs/operator/auditTime', 'rxjs/operator/finally', 'rxjs/operator/catch', 'rxjs/operator/do', 'rxjs/operator/map', 'rxjs/operator/filter', 'rxjs/operator/share', 'rxjs/operator/first', 'rxjs/operator/switchMap', 'rxjs/operator/startWith', 'rxjs/operator/takeUntil', '@angular/platform-browser', 'rxjs/BehaviorSubject'], factory) :
	(factory((global['at-ng'] = {}),global.ng.core,global.ng.common,global.ng.animations,global.ng.forms,global.Rx.Observable,global.Rx,global.Rx.Observable.prototype,global.timers,global.moment,null,global.ng.cdk,global.Rx,global.Rx,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.ng.platformBrowser,global.Rx));
}(this, (function (exports,core,common,animations,forms,merge,Observable,debounceTime,timers,moment,zhCn,cdk,Subject,Subscription,fromEvent,auditTime,_finally,_catch,_do,map,filter,share,first,switchMap,startWith,takeUntil,platformBrowser,BehaviorSubject) { 'use strict';

moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
        this.showText = (this.text.nativeElement.innerText.length > 0 || this.text.nativeElement.children.length > 0);
    };
    return ButtonComponent;
}());
ButtonComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[atButton]',
                template: "<i *ngIf=\"atIcon != null\" class=\"at-btn__icon icon {{atIcon}}\"></i>\n  <span #text [hidden]=\"!showText\" class=\"at-btn__text\">\n  <ng-content></ng-content>\n</span>\n\n  ",
            },] },
];
/**
 * @nocollapse
 */
ButtonComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
ButtonComponent.propDecorators = {
    'atType': [{ type: core.Input },],
    'atShape': [{ type: core.Input },],
    'atIcon': [{ type: core.Input },],
    'iconLoading': [{ type: core.Input },],
    'size': [{ type: core.Input },],
    'text': [{ type: core.ViewChild, args: ['text',] },],
};
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
    { type: core.Directive, args: [{
                selector: '[hollow]'
            },] },
];
/**
 * @nocollapse
 */
HollowDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
HollowDirective.propDecorators = {
    'atType': [{ type: core.Input, args: ['atType',] },],
};
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
    { type: core.Component, args: [{
                selector: 'at-button-group',
                template: "<div class=\"at-btn-group\">\n    <ng-content></ng-content>\n  </div>\n  ",
            },] },
];
/**
 * @nocollapse
 */
ButtonGroupComponent.ctorParameters = function () { return []; };
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
    { type: core.Component, args: [{
                selector: '[atMenu]',
                template: "<div selector></div>\n  <ng-content ></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
MenuComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
MenuComponent.propDecorators = {
    'theme': [{ type: core.Input, args: ['theme',] },],
    'atType': [{ type: core.Input },],
    'verticalClass': [{ type: core.HostBinding, args: ["class.at-menu--vertical",] },],
    'horizontalClass': [{ type: core.HostBinding, args: ["class.at-menu--horizontal",] },],
    'inlineClass': [{ type: core.HostBinding, args: ["class.at-menu--inline",] },],
    'darkTheme': [{ type: core.HostBinding, args: ['class.at-menu--dark',] },],
    'lightTheme': [{ type: core.HostBinding, args: ['class.at-menu--light',] },],
};
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
    { type: core.Component, args: [{
                selector: '[atMenuItem]',
                template: "<ng-content></ng-content>\n",
            },] },
];
/**
 * @nocollapse
 */
MenuItemComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
MenuItemComponent.propDecorators = {
    'item_class': [{ type: core.HostBinding, args: ["class.at-menu__item",] },],
    'setActive': [{ type: core.HostListener, args: ['click',] },],
    'activeCls': [{ type: core.HostBinding, args: ['class.at-menu__item--active',] },],
    'active': [{ type: core.Input, args: ['active',] },],
};
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
    { type: core.Component, args: [{
                selector: '[atSubMenu]',
                template: "\n    <div class=\"at-menu__submenu-title\"\n         (mouseenter)=\"onMouseEnterEvent($event)\"\n         (mouseleave)=\"onMouseLeaveEvent($event)\"\n         (click)=\"show()\"\n    >\n      <ng-content select=\"[title]\"></ng-content>\n    </div>\n    <div\n      *ngIf=\"isOpen && parent.atType != 'inline'\"\n      [ngStyle]=\"{'left': _popoverCss.left ,'right': _popoverCss.right,'top': _popoverCss.top}\"\n      (mouseenter)=\"onMouseEnterEvent($event)\"\n      (mouseleave)=\"onMouseLeaveEvent($event)\"\n      class=\"at-dropdown__popover\">\n      <ng-content></ng-content>\n    </div>\n    <!--<ng-content [@slide-up] *ngIf=\"isOpen\" select=\"[inlineMenu]\"></ng-content>-->\n\n    <div\n      [@fadeAnimation]\n      [@expandAnimation]=\"expandState\"\n      *ngIf=\"isOpen\">\n      <ng-content select=\"[inlineMenu]\"></ng-content>\n    </div>\n  ",
                animations: [
                    animations.trigger('fadeAnimation', [
                        animations.state('*', animations.style({ opacity: 1 })),
                        animations.transition('* => void', [
                            animations.animate(150, animations.style({ opacity: 0, display: 'none' }))
                        ]),
                        animations.transition('void => *', [
                            animations.style({ opacity: '0' }),
                            animations.animate(150, animations.style({ opacity: 1 }))
                        ])
                    ]),
                    animations.trigger('expandAnimation', [
                        animations.transition('expand => void', [
                            animations.style({ height: '*', overflow: 'hidden' }),
                            animations.animate(150, animations.style({ height: 0 }))
                        ]),
                        animations.transition('void => expand', [
                            animations.style({ height: 0, overflow: 'hidden' }),
                            animations.animate(150, animations.style({ height: '*' }))
                        ])
                    ])
                ],
            },] },
];
/**
 * @nocollapse
 */
SubMenuComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: MenuComponent, decorators: [{ type: core.Inject, args: [MenuComponent,] },] },
    { type: core.Renderer2, },
]; };
SubMenuComponent.propDecorators = {
    'isOpen': [{ type: core.Input },],
    'item_class': [{ type: core.HostBinding, args: ["class.at-menu__submenu",] },],
    'setActive': [{ type: core.HostListener, args: ['click',] },],
    'activeCls': [{ type: core.HostBinding, args: ['class.at-menu__item--active',] },],
    'OpenCls': [{ type: core.HostBinding, args: ['class.at-menu__submenu--opened',] },],
    'active': [{ type: core.Input },],
    'popover': [{ type: core.ViewChild, args: ['popover',] },],
};
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
    { type: core.Component, args: [{
                selector: '[itemGroup]',
                template: "<ul class=\"at-menu__item-group\">\n    <li *ngIf=\"label\" class=\"at-menu__item-group-title\">{{label}}</li>\n    <ul class=\"at-menu__item-group-list\">\n      <ng-content></ng-content>\n    </ul>\n  </ul>\n  ",
            },] },
];
/**
 * @nocollapse
 */
MenuItemGroupComponent.ctorParameters = function () { return [
    { type: MenuComponent, decorators: [{ type: core.Inject, args: [MenuComponent,] },] },
]; };
MenuItemGroupComponent.propDecorators = {
    'label': [{ type: core.Input },],
    'inline': [{ type: core.Input },],
    'drop_down': [{ type: core.HostBinding, args: ['class.at-dropdown-menu',] },],
};
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
    { type: core.Component, args: [{
                selector: '[atMenuList]',
                template: "<ng-content></ng-content>\n",
            },] },
];
/**
 * @nocollapse
 */
MenuListComponent.ctorParameters = function () { return []; };
MenuListComponent.propDecorators = {
    'menu': [{ type: core.HostBinding, args: ['class.at-dropdown-menu',] },],
};
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
    { type: core.Component, args: [{
                selector: 'atRadioGroup',
                template: "<div class=\"at-radio-group\">\n    <ng-content>\n\n    </ng-content>\n  </div>\n  ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return RadioGroupComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/**
 * @nocollapse
 */
RadioGroupComponent.ctorParameters = function () { return []; };
RadioGroupComponent.propDecorators = {
    'size': [{ type: core.Input },],
};
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
    { type: core.Component, args: [{
                selector: '[atRadio]',
                encapsulation: core.ViewEncapsulation.None,
                template: "<span class=\"at-radio__input\">\n    <span class=\"at-radio__inner\" [ngClass]=\"{'at-radio--checked':checked ,'at-radio--disabled': disabled}\"></span>\n    <input type=\"radio\" [disabled]=\"disabled\" class=\"at-radio__original\" [(ngModel)]=\"checked\"></span>\n  <span class=\"at-radio__label\">\n    <ng-content>\n\n    </ng-content>\n  </span>\n\n  ",
            },] },
];
/**
 * @nocollapse
 */
RadioComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: RadioGroupComponent, },
    { type: core.Renderer2, },
]; };
RadioComponent.propDecorators = {
    'atValue': [{ type: core.Input },],
    'disabled': [{ type: core.Input },],
    'checked': [{ type: core.Input },],
    'onClick': [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
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
    { type: core.Component, args: [{
                selector: '[inlineMenu]',
                template: "<ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
InlineMenuComponent.ctorParameters = function () { return []; };
InlineMenuComponent.propDecorators = {
    'at_menu': [{ type: core.HostBinding, args: ['class.at-menu',] },],
};
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
    { type: core.Component, args: [{
                selector: '[atRow]',
                template: "<ng-content></ng-content>\n",
            },] },
];
/**
 * @nocollapse
 */
RowComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
RowComponent.propDecorators = {
    'reverse': [{ type: core.Input },],
    'noGutter': [{ type: core.Input },],
    'alignType': [{ type: core.Input },],
    'flexType': [{ type: core.Input },],
};
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
    { type: core.Component, args: [{
                selector: '[atCol]',
                template: "\n    <ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
ColComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
ColComponent.propDecorators = {
    'colType': [{ type: core.Input },],
    'span': [{ type: core.Input },],
    'offset': [{ type: core.Input },],
};
var TagAnimation = animations.trigger('tagAnimation', [
    animations.state('*', animations.style({ opacity: 1, transform: 'scale(1)' })),
    animations.transition('void => *', [
        animations.style({ opacity: 0, transform: 'scale(0)' }),
        animations.animate('150ms linear')
    ]),
    animations.state('void', animations.style({ opacity: 0, transform: 'scale(0)' })),
    animations.transition('* => void', [
        animations.style({ opacity: 1, transform: 'scale(1)' }),
        animations.animate('150ms linear')
    ])
]);
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
        this.onClose = new core.EventEmitter();
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
    { type: core.Component, args: [{
                selector: 'atTag',
                template: "<span #tag *ngIf=\"!closed\"\n                  [@tagAnimation]\n  >\n  <span class=\"at-tag__text\">\n    <ng-content></ng-content>\n    <i class=\"icon icon-x at-tag__close\" *ngIf=\"closeable\" (click)=\"closeTag()\"></i>\n</span>\n\n</span>\n\n  ",
                animations: [
                    TagAnimation
                ],
            },] },
];
/**
 * @nocollapse
 */
TagComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
TagComponent.propDecorators = {
    'tagSpan': [{ type: core.ViewChild, args: ['tag',] },],
    'color': [{ type: core.Input },],
    'closed': [{ type: core.Input },],
    'closeable': [{ type: core.Input },],
    'onClose': [{ type: core.Output },],
};
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
    { type: core.Component, args: [{
                selector: 'atIcon',
                template: "<i class=\"icon icon-{{type}}\"></i>\n  ",
            },] },
];
/**
 * @nocollapse
 */
IconComponent.ctorParameters = function () { return []; };
IconComponent.propDecorators = {
    'type': [{ type: core.Input },],
};
var CheckboxComponent = (function () {
    function CheckboxComponent() {
        this._checked = false;
        this._atDisabled = false;
        this.changeCheck = new core.EventEmitter();
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
    { type: core.Component, args: [{
                selector: 'atCheckbox',
                template: "<label (click)=\"check($event)\"\n                    [ngClass]=\"{'at-checkbox--checked': checked,'at-checkbox--disabled': atDisabled}\"\n                    class=\"at-checkbox\">\n\n  <span class=\"at-checkbox__input\"><span\n    class=\"at-checkbox__inner\"></span>\n\n  <input type=\"checkbox\" class=\"at-checkbox__original\"></span>\n\n    <span class=\"at-checkbox__label\">{{label}}</span>\n  </label>\n  ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return CheckboxComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/**
 * @nocollapse
 */
CheckboxComponent.ctorParameters = function () { return []; };
CheckboxComponent.propDecorators = {
    'atDisabled': [{ type: core.Input },],
    'changeCheck': [{ type: core.Output },],
    'label': [{ type: core.Input },],
};
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
    { type: core.Component, args: [{
                selector: 'atCheckboxGroup',
                template: "<div class=\"at-checkbox-group\">\n  <atCheckbox *ngFor=\"let option of _checkList\" [label]=\"option.label\"\n              [(ngModel)]=\"option.checked\"\n              (changeCheck)=\"changeList()\">\n\n  </atCheckbox>\n</div>\n",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return CheckboxGroupComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/**
 * @nocollapse
 */
CheckboxGroupComponent.ctorParameters = function () { return []; };
CheckboxGroupComponent.propDecorators = {
    'checkbox': [{ type: core.ContentChildren, args: [CheckboxComponent,] },],
};
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
        this.onFocus = new core.EventEmitter();
        this.onFocusOut = new core.EventEmitter();
        this.showAppend = true;
        this.showPrepend = true;
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.value_change = new core.EventEmitter();
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
    { type: core.Component, args: [{
                selector: 'atInput',
                template: "\n    <div class=\"{{_prefixCls}} {{_prefixCls}}--{{atSize}} {{_prefixCls}}--{{atStatus}}\"\n         [ngClass]=\"_BindClass\">\n      <div #prepend [hidden]=\"!showPrepend\" [ngClass]=\"{'at-input-group__prepend': showPrepend}\">\n        <ng-content select=\"[atPrepend]\"></ng-content>\n      </div>\n\n      <ng-template [ngIf]=\"atType == 'normal'\">\n        <input #input [(ngModel)]=\"value\" placeholder=\"{{placeholder}}\"\n               (focus)=\"focus($event)\" (focusout)=\"focusOut($event)\" type=\"{{type}}\" [disabled]=\"disabled\"\n               class=\"{{_prefixCls}}__original\">\n      </ng-template>\n\n      <ng-template [ngIf]=\"atType == 'number'\">\n        <div class=\"at-input-number__input\">\n          <input [(ngModel)]=\"value\" placeholder=\"{{placeholder}}\" type=\"number\" [disabled]=\"disabled\"\n                 class=\"{{_prefixCls}}__original\">\n\n          <div class=\"at-input-number__handler\">\n            <span (click)=\"numberUp()\" class=\"at-input-number__up\"\n                  [ngClass]=\"{'at-input-number__up--disabled':isMax}\"><i class=\"icon icon-chevron-up\"></i></span>\n            <span (click)=\"numberDown()\" class=\"at-input-number__down\"\n                  [ngClass]=\"{'at-input-number__up--disabled':isMin}\"><i class=\"icon icon-chevron-down\"></i></span>\n          </div>\n        </div>\n      </ng-template>\n\n      <i *ngIf=\"icon\" class=\"at-input__icon icon icon-{{icon}}\"></i>\n\n      <div #append [ngClass]=\"{'at-input-group__append': showAppend}\" [hidden]=\"!showAppend\">\n        <ng-content select=\"[atAppend]\"></ng-content>\n      </div>\n\n    </div>\n  ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return InputComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/**
 * @nocollapse
 */
InputComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
InputComponent.propDecorators = {
    'max': [{ type: core.Input },],
    'min': [{ type: core.Input },],
    'step': [{ type: core.Input },],
    'atType': [{ type: core.Input },],
    'onFocus': [{ type: core.Output },],
    'onFocusOut': [{ type: core.Output },],
    'atSize': [{ type: core.Input },],
    'icon': [{ type: core.Input },],
    'type': [{ type: core.Input },],
    'disabled': [{ type: core.Input },],
    'atStatus': [{ type: core.Input },],
    'placeholder': [{ type: core.Input },],
    'prepend': [{ type: core.ViewChild, args: ['prepend',] },],
    'append': [{ type: core.ViewChild, args: ['append',] },],
    'inputField': [{ type: core.ViewChild, args: ['input',] },],
    'value_change': [{ type: core.Output },],
};
var DropDownAnimation = animations.trigger('dropDownAnimation', [
    animations.state('bottom', animations.style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    animations.transition('void => bottom', [
        animations.style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }),
        animations.animate('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    animations.state('top', animations.style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    animations.transition('void => top', [
        animations.style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 100%'
        }),
        animations.animate('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    animations.transition('* => void', [
        animations.animate('250ms 100ms linear', animations.style({ opacity: 0 }))
    ])
]);
var FadeAnimation = animations.trigger('fadeAnimation', [
    animations.state('void', animations.style({ opacity: 0 })),
    animations.state('true', animations.style({ opacity: 1 })),
    animations.state('false', animations.style({ opacity: 0 })),
    animations.transition('* => true', animations.animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    animations.transition('* => void', animations.animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
]);
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
        this.change = new core.EventEmitter();
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
        this.options.push(option);
        this.forceUpdateSelectedOption(this._value);
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
        return (((Array.from(set))).find(function (data) { return data.atValue === option.atValue; }));
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
                return (item != null) && (currentModelValue.indexOf(item.atValue) !== -1);
            });
            if ((!triggerByNgModel)) {
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
    { type: core.Component, args: [{
                selector: 'atSelect',
                template: "\n    <div (click)=\"handleDrop($event)\" (mouseenter)=\"dropDown()\" (mouseleave)=\"dropUp()\"\n         class=\"at-select at-select--{{disabled ? 'disabled' : 'visiable' }} at-select--{{multiple ? 'multiple' : 'single' }} at-select--{{atSize}}\">\n\n      <div *ngIf=\"multiple\" #selection class=\"at-select__selection\">\n    <span *ngFor=\"let item of _selectedOptions\" class=\"at-tag\" [@tagAnimation]>\n      <span class=\"at-tag__text\">{{item.atLabel}}</span>\n      <i (click)=\"rejectData($event,item)\" class=\"icon icon-x at-tag__close\"></i>\n    </span>\n        <span class=\"at-select__placeholder\" *ngIf=\"selectedOptions.length == 0 && showLabel\">\n\n    </span>\n        <input *ngIf=\"tagAble\" #tag_input type=\"text\"\n               [(ngModel)]=\"_searchText\"\n               (focus)=\"resetOption()\"\n               (ngModelChange)=\"updateFilterOption()\"\n               placeholder=\"\" (keyup)=\"onKey($event)\" style=\"\n    border: none;\n    outline: none;\n    left: 0;\n    top: 0;\n    display: inline-block;\n    margin: 0 24px 0 8px;\n    background-color: transparent;\">\n        <i class=\"icon icon-chevron-down at-select__arrow\"></i>\n        <i *ngIf=\"allowClear\" (click)=\"clearData($event)\" style=\"background: white\"\n           class=\"icon icon-x at-select__clear\">\n        </i>\n      </div>\n\n\n      <div #selection *ngIf=\"!multiple\" class=\"at-select__selection\">\n        <span class=\"at-select__placeholder\" *ngIf=\"!selectedLabel && showLabel\">\u8BF7\u9009\u62E9</span>\n        <span *ngIf=\"selectedLabel && showLabel\"\n              class=\"at-select__selected\">{{selectedLabel}}</span>\n        <input *ngIf=\"searchable\" #search_input type=\"text\" [(ngModel)]=\"_searchText\"\n               (focus)=\"resetOption()\"\n               (ngModelChange)=\"updateFilterOption()\" class=\"at-select__input\">\n        <i class=\"icon icon-chevron-down at-select__arrow\"></i>\n        <i *ngIf=\"allowClear\" (click)=\"clearData($event)\" style=\"background: white\"\n           class=\"icon icon-x at-select__clear\">\n        </i>\n      </div>\n\n      <div *ngIf=\"_dropdown\" [@dropDownAnimation] class=\"at-select__dropdown at-select__dropdown--bottom\"\n           [ngStyle]=\"{'top':top}\" style=\"left: 0px;\">\n        <ul class=\"at-select__not-found\" *ngIf=\"filterOptions.length == 0\">\n          <li>\u65E0\u5339\u914D\u6570\u636E</li>\n        </ul>\n        <ul class=\"at-select__list\">\n          <li (click)=\"selectOption($event,option)\"\n              [ngClass]=\"{'at-select__option--selected': isInSet(_selectedOptions,option) || _selectedOption?.atValue == option.atValue ,'at-select__option--disabled':option.disabled}\"\n              class=\"at-select__option\" *ngFor=\"let option of filterOptions\">\n            {{option.atLabel}}\n          </li>\n        </ul>\n      </div>\n\n    </div>\n  ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return SelectComponent; }),
                        multi: true
                    }
                ],
                animations: [DropDownAnimation, FadeAnimation, TagAnimation],
            },] },
];
/**
 * @nocollapse
 */
SelectComponent.ctorParameters = function () { return []; };
SelectComponent.propDecorators = {
    'change': [{ type: core.Output },],
    'searchable': [{ type: core.Input },],
    'tagAble': [{ type: core.Input },],
    'hover': [{ type: core.Input },],
    'allowClear': [{ type: core.Input },],
    'disabled': [{ type: core.Input },],
    'atSize': [{ type: core.Input },],
    'multiple': [{ type: core.Input },],
    'selection': [{ type: core.ViewChild, args: ['selection',] },],
    'tagInput': [{ type: core.ViewChild, args: ['tag_input',] },],
    'searchInput': [{ type: core.ViewChild, args: ['search_input',] },],
};
var RadioButtonComponent = (function (_super) {
    __extends(RadioButtonComponent, _super);
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
    { type: core.Component, args: [{
                selector: '[atRadioButton]',
                template: "<input type=\"radio\" [disabled]=\"disabled\" class=\"at-radio-button__original\" [(ngModel)]=\"checked\">\n  <span #content_span class=\"at-radio-button__inner\">\n  <ng-content>\n\n</ng-content>\n</span>\n  ",
            },] },
];
/**
 * @nocollapse
 */
RadioButtonComponent.ctorParameters = function () { return []; };
RadioButtonComponent.propDecorators = {
    'fill': [{ type: core.Input },],
    'textColor': [{ type: core.Input },],
    'buttonChecked': [{ type: core.HostBinding, args: ['class.at-radio--checked',] },],
    'content_span': [{ type: core.ViewChild, args: ['content_span',] },],
};
var SwitchComponent = (function () {
    function SwitchComponent() {
        this._value = false;
        this.disabled = false;
        this._atSize = 'normal';
        this.change = new core.EventEmitter();
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
    { type: core.Component, args: [{
                selector: 'atSwitch',
                template: "<span class=\"at-switch at-switch--{{atSize}}\" [ngClass]=\"{'at-switch--checked':_value,'at-switch--disabled':disabled}\">\n  <span class=\"at-switch__text\">\n    {{_value ? checkText : unCheckText}}\n  </span>\n</span>\n  ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return SwitchComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/**
 * @nocollapse
 */
SwitchComponent.ctorParameters = function () { return []; };
SwitchComponent.propDecorators = {
    'checkText': [{ type: core.Input },],
    'unCheckText': [{ type: core.Input },],
    'disabled': [{ type: core.Input },],
    'change': [{ type: core.Output },],
    'atSize': [{ type: core.Input },],
    'switch': [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
var OptionComponent = (function () {
    /**
     * @param {?} _selectComponent
     */
    function OptionComponent(_selectComponent) {
        this._selectComponent = _selectComponent;
        this._selected = false;
        this._isTag = false;
        this._disabled = false;
        this._selectComponent.addOption(this);
    }
    /**
     * @return {?}
     */
    OptionComponent.prototype.ngOnInit = function () {
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
    { type: core.Component, args: [{
                selector: 'atOption',
                template: "<ng-content></ng-content>\n",
            },] },
];
/**
 * @nocollapse
 */
OptionComponent.ctorParameters = function () { return [
    { type: SelectComponent, },
]; };
OptionComponent.propDecorators = {
    'disabled': [{ type: core.Input },],
    'atValue': [{ type: core.Input },],
    'atLabel': [{ type: core.Input },],
};
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
    { type: core.Component, args: [{
                selector: 'atSlider',
                template: "<div (mousedown)=\"mouseDown()\" (mouseup)=\"mouseUp()\" class=\"at-slider\" data-v-a01f69b8=\"\">\n  <div class=\"at-input-number at-slider__input at-input-number--normal\" style=\"display: none;\">\n    <div class=\"at-input-number__input\"><input type=\"number\" max=\"80\" min=\"20\" class=\"at-input-number__original\"></div>\n    <div  class=\"at-input-number__handler\"><span class=\"at-input-number__up\"><i class=\"icon icon-chevron-up\"></i></span>\n      <span class=\"at-input-number__down\"><i class=\"icon icon-chevron-down\"></i></span></div>\n  </div>\n  <div class=\"at-slider__track\">\n    <div class=\"at-slider__bar\" style=\"width: 26.6667%;\"></div>\n    <div  class=\"at-slider__dot-wrapper at-slider__dot-wrapper--hover at-slider__dot-wrapper--drag\"\n         style=\"left: 26.6667%;\">\n      <div class=\"at-tooltip\"><span class=\"at-tooltip__trigger\"><div\n        class=\"at-slider__dot at-slider__dot--hover at-slider__dot--drag\"></div> </span>\n        <div class=\"at-tooltip__popper at-tooltip--top\" style=\"top: -32px; left: -9.5px;\">\n          <div class=\"at-tooltip__arrow\"></div>\n          <div class=\"at-tooltip__content\"><span>36</span></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
            },] },
];
/**
 * @nocollapse
 */
SliderComponent.ctorParameters = function () { return []; };
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
    { type: core.Component, args: [{
                encapsulation: core.ViewEncapsulation.None,
                selector: 'atTextarea',
                template: "<div class=\"at-textarea\" data-v-a01f69b8=\"\">\n  <textarea [placeholder]=\"atPlaceholder\" [(ngModel)]=\"value\" rows=\"2\" class=\"at-textarea__original\" style=\"\">\n\n  </textarea>\n  </div>\n  ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TextareaComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/**
 * @nocollapse
 */
TextareaComponent.ctorParameters = function () { return []; };
TextareaComponent.propDecorators = {
    'atPlaceholder': [{ type: core.Input },],
};
var POSITION_MAP = {
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
};
var DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP['top'], POSITION_MAP['right'], POSITION_MAP['bottom'], POSITION_MAP['left']]);
var DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP['bottomLeft'], POSITION_MAP['topLeft']]);
/**
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function arrayMap(array, iteratee) {
    var /** @type {?} */ index = -1;
    var /** @type {?} */ length = array == null ? 0 : array.length, /** @type {?} */ result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
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
 * @param {?} object
 * @return {?}
 */
function _objectValues(object) {
    return object == null ? [] : baseValues(object, Object.keys(object));
}
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
    { type: core.Component, args: [{
                selector: '[atDropMenuItem]',
                template: "<ng-content>\n  </ng-content>\n  "
            },] },
];
/**
 * @nocollapse
 */
DropdownMenuItemComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
DropdownMenuItemComponent.propDecorators = {
    'disabled': [{ type: core.Input },],
    'divided': [{ type: core.Input },],
    'item_class': [{ type: core.HostBinding, args: ["class.at-dropdown-menu__item",] },],
    'setActive': [{ type: core.HostListener, args: ['click',] },],
    'activeCls': [{ type: core.HostBinding, args: ['class.at-dropdown-menu__item--active',] },],
    'getDivide': [{ type: core.HostBinding, args: ['class.at-dropdown-menu__item--divided',] },],
    'getDisableCls': [{ type: core.HostBinding, args: ['class.at-dropdown-menu__item--disabled',] },],
    'active': [{ type: core.Input, args: ['active',] },],
};
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
    { type: core.Directive, args: [{
                selector: '[at-dropdown]'
            },] },
];
/**
 * @nocollapse
 */
DropdownDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
DropdownDirective.propDecorators = {
    'trigger': [{ type: core.HostBinding, args: ['class.at-dropdown__trigger',] },],
};
var DropdownComponent = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetector
     */
    function DropdownComponent(_renderer, _changeDetector) {
        var _this = this;
        this._renderer = _renderer;
        this._changeDetector = _changeDetector;
        this.hasFilterButton = false;
        this._triggerWidth = 0;
        this._placement = 'bottomLeft';
        this._dropDownPosition = 'bottom';
        this._positions = DEFAULT_DROPDOWN_POSITIONS.slice();
        this.trigger = 'hover';
        this.autoClose = false;
        this.atVisible = false;
        this.dropDownChange = new core.EventEmitter();
        this.custom_content = false;
        this._onVisibleChange = function (visible) {
            if (visible) {
                if (!_this._triggerWidth) {
                    _this._setTriggerWidth();
                }
            }
            _this.atVisible = visible;
            _this._changeDetector.markForCheck();
        };
    }
    Object.defineProperty(DropdownComponent.prototype, "placement", {
        /**
         * @return {?}
         */
        get: function () {
            return this._placement;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._placement = value;
            this._dropDownPosition = (this.placement.indexOf('top') !== -1) ? 'top' : 'bottom';
            this._positions.unshift(/** @type {?} */ (POSITION_MAP[this._placement]));
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
        this.dropDownChange.emit(false);
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype._show = function () {
        this.dropDownChange.emit(true);
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
            this.atVisible = false;
        }
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype._setTriggerWidth = function () {
        this._triggerWidth = this._nzOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    DropdownComponent.prototype._startSubscribe = function (observable$) {
        this._subscription = debounceTime.debounceTime.call(observable$, 300)
            .subscribe(this._onVisibleChange);
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = function () {
        // if (this._nzMenu) {
        //   this._nzMenu.setDropDown(true);
        // }
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var /** @type {?} */ mouse$;
        if (this.trigger === 'hover') {
            mouse$ = Observable.Observable.create(function (observer) {
                var /** @type {?} */ disposeMouseEnter = _this._renderer.listen(_this._nzOrigin.elementRef.nativeElement, 'mouseenter', function () {
                    observer.next(true);
                });
                var /** @type {?} */ disposeMouseLeave = _this._renderer.listen(_this._nzOrigin.elementRef.nativeElement, 'mouseleave', function () {
                    observer.next(false);
                });
                return function () {
                    disposeMouseEnter();
                    disposeMouseLeave();
                };
            });
        }
        if (this.trigger === 'click') {
            mouse$ = Observable.Observable.create(function (observer) {
                var /** @type {?} */ dispose = _this._renderer.listen(_this._nzOrigin.elementRef.nativeElement, 'click', function (e) {
                    e.preventDefault();
                    observer.next(true);
                });
                return function () { return dispose(); };
            });
        }
        var /** @type {?} */ observable$ = merge.merge(mouse$, this.dropDownChange.asObservable());
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
    { type: core.Component, args: [{
                selector: 'atDropdown',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "    \n    <div>\n      <ng-content></ng-content>\n    </div>\n    <ng-template\n      nz-connected-overlay\n      [hasBackdrop]=\"_hasBackdrop\"\n      [positions]=\"_positions\"\n      [origin]=\"_nzOrigin\"\n      (backdropClick)=\"_hide()\"\n      (detach)=\"_hide()\"\n      [minWidth]=\"_triggerWidth\"\n      (positionChange)=\"_onPositionChange($event)\"\n      [open]=\"atVisible\">\n      <div\n\n        [@dropDownAnimation]=\"_dropDownPosition\"\n        (mouseenter)=\"_onMouseEnterEvent($event)\"\n        (mouseleave)=\"_onMouseLeaveEvent($event)\"\n        [style.minWidth.px]=\"_triggerWidth\"\n        (click)=\"_clickDropDown($event)\">\n        <div>\n          <ul *ngIf=\"!custom_content\" atDropMenuList>\n            <ng-content select=\"[atDropMenuItem]\"></ng-content>\n          </ul>\n          <!--<ng-content select=\"[nz-table-filter]\"></ng-content>-->\n          <ng-content select=\"[atDropMenuCustomItem]\"></ng-content>\n        </div>\n        <!--<ng-content select=\"[nz-dropdown-custom]\"></ng-content>-->\n      </div>\n    </ng-template>\n  ",
                animations: [DropDownAnimation, animations.trigger('fadeAnimation', [
                        animations.state('*', animations.style({ opacity: 1 })),
                        animations.transition('* => void', [
                            animations.animate(50, animations.style({ opacity: 0, display: 'hidden' }))
                        ]),
                        animations.transition('void => *', [
                            animations.style({ opacity: '0' }),
                            animations.animate(50, animations.style({ opacity: 1, }))
                        ])
                    ]),],
            },] },
];
/**
 * @nocollapse
 */
DropdownComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
]; };
DropdownComponent.propDecorators = {
    '_nzMenu': [{ type: core.ContentChild, args: [DropdownMenuItemComponent,] },],
    '_nzOrigin': [{ type: core.ContentChild, args: [DropdownDirective,] },],
    'trigger': [{ type: core.Input },],
    'autoClose': [{ type: core.Input },],
    'atVisible': [{ type: core.Input },],
    'dropDownChange': [{ type: core.Output },],
    'custom_content': [{ type: core.Input },],
    'placement': [{ type: core.Input },],
};
var DropMenuListComponent = (function (_super) {
    __extends(DropMenuListComponent, _super);
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
    { type: core.Component, args: [{
                selector: '[atDropMenuList]',
                template: "\n    <ng-content></ng-content>",
            },] },
];
/**
 * @nocollapse
 */
DropMenuListComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
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
        timers.setTimeout(function (_) {
            _this.notifications = _this.notifications.filter(function (no) {
                return (no.index != index);
            });
        }, 110);
    };
    return NotificationContainerComponent;
}());
NotificationContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-notification-container',
                template: "\n    <div class=\"at-notification-container\">\n      <atNotification *ngFor=\"let item of notifications\" [config]=\"item\"></atNotification>\n    </div>\n  ",
                styles: [
                    ":host ::ng-deep .at-notification-container {\n      top: 20px;\n      position: fixed;\n      display: block;\n      right: 16px;\n      width: 320px;\n      height: auto;\n      z-index: 1040;\n    }"
                ]
            },] },
];
/**
 * @nocollapse
 */
NotificationContainerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
var StatusIconType = {
    'info': 'icon-info',
    'error': 'icon-x-circle',
    'warning': 'icon-alert-circle',
    'success': 'icon-check-circle',
    'loading': 'icon-loader'
};
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
    { type: core.Component, args: [{
                selector: 'atNotification',
                template: "\n    <div (mouseenter)=\"stopRemove()\" (mouseleave)=\"startRemove()\"\n         [@enterLeave]=\"config.state\"\n         class=\"at-notification-contained  at-notification--{{config.type}}\"\n         [ngClass]=\"{'at-notification--with-message ': config.message !=''}\"\n    >\n      <i class=\"icon at-notification__icon {{status[config.type]}}\"></i>\n      <div class=\"at-notification__content\"><p class=\"at-notification__title\">{{config.title}}</p>\n        <p class=\"at-notification__message\">{{config.message}}</p></div>\n      <i *ngIf=\"config.showClose\" (click)=\"remove()\" class=\"icon icon-x at-notification__close\">\n      </i>\n    </div>\n\n  ",
                animations: [
                    animations.trigger('enterLeave', [
                        animations.state('enter', animations.style({ opacity: 1, transform: 'translateX(0)' })),
                        animations.transition('* => enter', [
                            animations.style({ opacity: 0, transform: 'translateX(5%)' }),
                            animations.animate('100ms linear')
                        ]),
                        animations.state('leave', animations.style({ opacity: 0, transform: 'translateY(-10%)' })),
                        animations.transition('* => leave', [
                            animations.style({ opacity: 1, transform: 'translateY(0)' }),
                            animations.animate('100ms linear')
                        ]),
                    ])
                ],
                styles: ["\n    :host ::ng-deep .at-notification-contained {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-bottom: 15px;\n      right: 16px;\n      width: 320px;\n      padding: 8px 16px;\n      color: #3f536e;\n      background-color: #fff;\n      line-height: 1.5;\n      border-radius: 4px;\n      -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);\n      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);\n      -webkit-transition: opacity .3s, top .4s, -webkit-transform .3s;\n      transition: opacity .3s, top .4s, -webkit-transform .3s;\n      transition: opacity .3s, transform .3s, top .4s;\n      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;\n      z-index: 1010;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
NotificationComponent.ctorParameters = function () { return [
    { type: NotificationContainerComponent, },
]; };
NotificationComponent.propDecorators = {
    'config': [{ type: core.Input },],
};
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
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
ComponentCreatorBase.ctorParameters = function () { return [
    { type: core.ComponentFactoryResolver, },
    { type: core.ApplicationRef, },
    { type: core.Injector, },
]; };
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
        var _this = this;
        setTimeout(function () {
            _this.componentRef = (_this.base.componentFactoryResolver
                .resolveComponentFactory(_this.component)
                .create(_this.base.injector));
            _this.base.appRef.attachView(_this.componentRef.hostView);
            _this.domElem = (((_this.componentRef.hostView))
                .rootNodes[0]);
            document.body.appendChild(_this.domElem);
        });
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
var NotificationBaseService = (function (_super) {
    __extends(NotificationBaseService, _super);
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
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
NotificationBaseService.ctorParameters = function () { return [
    { type: ComponentCreatorBase, },
]; };
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
var AtNotificationService = (function (_super) {
    __extends(AtNotificationService, _super);
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
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
AtNotificationService.ctorParameters = function () { return [
    { type: NotificationBaseService, },
    { type: ComponentCreatorBase, },
]; };
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
        this.onClose = new core.EventEmitter();
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
    { type: core.Component, args: [{
                selector: 'atAlert',
                template: "\n    <div [@visibilityChanged]=\"state\" *ngIf=\"!this.closed\"\n         class=\"at-alert at-alert--{{atType}}\"\n         [ngClass]=\"{'at-alert--with-description': desc}\"\n    >\n      <i *ngIf=\"icon\" class=\"icon at-alert__icon {{iconType[atType]}}\"></i>\n      <div class=\"at-alert__content\">\n        <p class=\"at-alert__message\">{{message}}</p>\n        <p *ngIf=\"desc\" class=\"at-alert__description\">{{desc}}</p>\n      </div>\n      <i (click)=\"close()\" class=\"icon at-alert__close\"\n         [ngClass]=\"{' at-alert__close--custom':closeText ,'icon-x':!closeText}\">\n        {{closeText}}\n      </i>\n\n    </div>\n  ",
                animations: [
                    animations.trigger('visibilityChanged', [
                        animations.state('shown', animations.style({ opacity: 1 })),
                        animations.state('hidden', animations.style({ opacity: 0 })),
                        animations.transition('shown => hidden', animations.animate('600ms')),
                        animations.transition('hidden => shown', animations.animate('300ms')),
                    ])
                ],
            },] },
];
/**
 * @nocollapse
 */
AlertComponent.ctorParameters = function () { return []; };
AlertComponent.propDecorators = {
    'message': [{ type: core.Input },],
    'atType': [{ type: core.Input },],
    'desc': [{ type: core.Input },],
    'icon': [{ type: core.Input },],
    'closeText': [{ type: core.Input },],
    'onClose': [{ type: core.Output },],
};
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
    { type: core.Component, args: [{
                selector: 'atBadge',
                template: "<span class=\"at-badge at-badge--{{atType}}\">\n  <span #content>\n  <ng-content>\n\n  </ng-content>\n  </span>\n  <span *ngIf=\"!dot && show\" class=\"at-badge\"\n        [ngClass]=\"{'at-badge--corner':(content.innerText.length > 0 || content.children.length >0),\n        'at-badge--alone':(content.innerText.length == 0 && content.children.length == 0 )}\">\n  <sup class=\"at-badge__content\" [ngClass]=\"{'at-badge--dot':dot}\">{{dot ? '' : atValue}}</sup>\n  </span>\n    <sup *ngIf=\"dot && show\" class=\"at-badge__content\" [ngClass]=\"{'at-badge--dot':dot,'at-badge--corner':(content.innerText.length > 0 || content.children.length >0),\n        'at-badge--alone':(content.innerText.length == 0 && content.children.length == 0 )}\">{{dot ? '' : atValue}}</sup>\n</span>\n"
            },] },
];
/**
 * @nocollapse
 */
BadgeComponent.ctorParameters = function () { return []; };
BadgeComponent.propDecorators = {
    'atType': [{ type: core.Input },],
    'max': [{ type: core.Input },],
    'dot': [{ type: core.Input },],
    'show': [{ type: core.Input },],
    'atValue': [{ type: core.Input },],
};
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
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
AtGlobalMonitorService.ctorParameters = function () { return []; };
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
        this.width = 520;
        this.top = 100;
        this.maskClose = true;
        this.onCancel = new core.EventEmitter();
        this.onOk = new core.EventEmitter();
        this.positionStyle = {};
    }
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = function () {
    };
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
        var /** @type {?} */ origin = this.global_service.lastClickPosition;
        var /** @type {?} */ el = this.modal_content.nativeElement;
        var /** @type {?} */ transformOrigin = origin.x - el.offsetLeft + "px " + (origin.y - el.offsetTop) + "px 0px";
        this.positionStyle = { 'transform-origin': transformOrigin, 'top': this.top + 'px' };
        return this.positionStyle;
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
        var /** @type {?} */ custom_title = this.customTitle.nativeElement;
        return (custom_title.children.length > 0 || custom_title.innerText.length > 0);
    };
    return ModalComponent;
}());
ModalComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'atModal',
                animations: [animations.trigger('enterLeave', [
                        animations.state('enter', animations.style({ opacity: 1, transform: 'scale(1)' })),
                        animations.transition('* => enter', [
                            animations.style({ opacity: 0, transform: 'scale(0.1)' }),
                            animations.animate('100ms linear')
                        ]),
                        animations.state('leave', animations.style({ opacity: 0, transform: 'scale(0)' })),
                        animations.transition('* => leave', [
                            animations.style({ opacity: 1, transform: 'scale(1)' }),
                            animations.animate('100ms linear')
                        ]),
                    ])],
                template: "\n    <div>\n      <div [hidden]=\"!show\" class=\"at-modal__mask\"></div>\n\n      <div [ngStyle]=\"{'display': show ? '' : 'none'}\"\n           role=\"dialog\"\n           (click)=\"cancelFromMask($event)\"\n           class=\"at-modal__wrapper at-modal--{{atType}} at-modal--{{atType}}-{{status}}\"\n      >\n        <div #modal_content class=\"at-modal\" [@enterLeave]=\"state\"\n             [ngStyle]=\"positionStyle\"\n             [style.width]=\"width +'px'\">\n          <div [ngClass]=\"{'at-modal__header': headerContains()}\">\n            <div class=\"at-modal__title\" #custom_title>\n              <ng-content select=\"[header]\">\n              </ng-content>\n              {{title ? title : ''}}\n            </div>\n          </div>\n          <div class=\"at-modal__body\" #modal_body>\n            <ng-content select=\"[body]\"></ng-content>\n            {{message ? message : ''}}\n          </div>\n          <div class=\"at-modal__footer\">\n            <div #custom_footer>\n              <ng-content select=\"[footer]\"></ng-content>\n            </div>\n            <div *ngIf=\"custom_footer.children.length == 0 &&  custom_footer.innerText.length == 0\">\n              <button atButton (click)=\"cancel()\">\u53D6\u6D88</button>\n              <button (click)=\"ok()\" type=\"primary\" class=\"at-btn at-btn--primary\">\n          <span class=\"at-btn__text\">\u786E\u8BA4\n          </span>\n              </button>\n            </div>\n          </div>\n          <i *ngIf=\"atType == 'confirm'\" class=\"icon at-modal__icon {{ icon_status[status]}}\"></i>\n          <span *ngIf=\"closeable\" (click)=\"cancel()\" class=\"at-modal__close\"><i class=\"icon icon-x\"></i></span>\n        </div>\n      </div>\n\n    </div>\n\n  ",
            },] },
];
/**
 * @nocollapse
 */
ModalComponent.ctorParameters = function () { return [
    { type: AtGlobalMonitorService, },
]; };
ModalComponent.propDecorators = {
    'width': [{ type: core.Input },],
    'top': [{ type: core.Input },],
    'maskClose': [{ type: core.Input },],
    'onCancel': [{ type: core.Output },],
    'onOk': [{ type: core.Output },],
    'modal_content': [{ type: core.ViewChild, args: ['modal_content',] },],
    'closeable': [{ type: core.Input },],
    'title': [{ type: core.Input },],
    'message': [{ type: core.Input },],
    'atType': [{ type: core.Input },],
    'status': [{ type: core.Input },],
    'show': [{ type: core.Input },],
    'customTitle': [{ type: core.ViewChild, args: ['custom_title',] },],
};
var ModalBaseService = (function (_super) {
    __extends(ModalBaseService, _super);
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
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
ModalBaseService.ctorParameters = function () { return [
    { type: ComponentCreatorBase, },
]; };
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
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
AtModalService.ctorParameters = function () { return [
    { type: ModalBaseService, },
]; };
var AtThDirective = (function () {
    function AtThDirective() {
        this._th = true;
        this._tc = true;
    }
    return AtThDirective;
}());
AtThDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[atTh]'
            },] },
];
/**
 * @nocollapse
 */
AtThDirective.ctorParameters = function () { return []; };
AtThDirective.propDecorators = {
    'atWidth': [{ type: core.Input },],
    '_th': [{ type: core.HostBinding, args: ['class.at-table__column',] },],
    '_tc': [{ type: core.HostBinding, args: ['class.at-table__cell',] },],
};
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
    { type: core.Component, args: [{
                selector: 'atTable',
                template: "\n    <div class=\"at-table at-table--{{size}}\"\n         [ngStyle]=\"{height:height ? height+'px' :''}\"\n         [ngClass]=\"{'at-table--fixHeight': height,'at-table--stripe ':stripe,'at-table--border':border}\"\n    >\n\n      <div *ngIf=\"!(height === undefined)\" class=\"at-table__content\" [ngStyle]=\"{height:height ? height+'px' :''}\">\n        <div class=\"at-table__header\" #fix_head>\n          <table>\n            <colgroup>\n              <col *ngFor=\"let th of _ths\" [style.width]=\"th.atWidth +'px'\" [style.minWidth]=\"th.atWidth+'px'\">\n            </colgroup>\n            <ng-template [ngTemplateOutlet]=\"atThead\"></ng-template>\n          </table>\n        </div>\n        <div class=\"at-table__body\"\n             [ngStyle]=\"{height:height ? height-marginTop/2+'px' :'' ,'margin-top':marginTop/2 +'px' }\">\n          <table>\n            <colgroup>\n              <col *ngFor=\"let th of _ths\" [style.width]=\"th.atWidth +'px'\" [style.minWidth]=\"th.atWidth+'px'\">\n            </colgroup>\n\n            <ng-template [ngTemplateOutlet]=\"atTbody\"></ng-template>\n\n          </table>\n        </div>\n      </div>\n      <div *ngIf=\"(height === undefined)\" class=\"at-table__content\">\n        <div class=\"at-table__body\">\n          <table>\n            <colgroup>\n              <col *ngFor=\"let th of _ths\" [style.width]=\"th.atWidth +'px'\" [style.minWidth]=\"th.atWidth+'px'\">\n            </colgroup>\n            <ng-content>\n            </ng-content>\n          </table>\n        </div>\n      </div>\n      <div class=\"at-table__footer\">\n        <ng-content select=\"[footer]\"></ng-content>\n      </div>\n    </div>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TableComponent.ctorParameters = function () { return []; };
TableComponent.propDecorators = {
    'size': [{ type: core.Input },],
    'height': [{ type: core.Input },],
    'stripe': [{ type: core.Input },],
    'border': [{ type: core.Input },],
    'setThs': [{ type: core.ContentChildren, args: [AtThDirective, { descendants: true },] },],
    'atThead': [{ type: core.ContentChild, args: ['fixedHead',] },],
    'atTbody': [{ type: core.ContentChild, args: ['fixedBody',] },],
    'fixed_head': [{ type: core.ViewChild, args: ['fix_head',] },],
};
var AtTbodyDirective = (function () {
    function AtTbodyDirective() {
        this._tbody = true;
    }
    return AtTbodyDirective;
}());
AtTbodyDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[atTbody]'
            },] },
];
/**
 * @nocollapse
 */
AtTbodyDirective.ctorParameters = function () { return []; };
AtTbodyDirective.propDecorators = {
    '_tbody': [{ type: core.HostBinding, args: ['class.at-table__tbody',] },],
};
var AtTdDirective = (function () {
    function AtTdDirective() {
        this._td = true;
    }
    return AtTdDirective;
}());
AtTdDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[atTd]'
            },] },
];
/**
 * @nocollapse
 */
AtTdDirective.ctorParameters = function () { return []; };
AtTdDirective.propDecorators = {
    '_td': [{ type: core.HostBinding, args: ['class.at-table__cell',] },],
};
var AtTbodyTrDirective = (function () {
    function AtTbodyTrDirective() {
    }
    return AtTbodyTrDirective;
}());
AtTbodyTrDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[atTbodyTr]'
            },] },
];
/**
 * @nocollapse
 */
AtTbodyTrDirective.ctorParameters = function () { return []; };
var AtTheadDirective = (function () {
    function AtTheadDirective() {
        this._thead = true;
    }
    return AtTheadDirective;
}());
AtTheadDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[atThead]'
            },] },
];
/**
 * @nocollapse
 */
AtTheadDirective.ctorParameters = function () { return []; };
AtTheadDirective.propDecorators = {
    '_thead': [{ type: core.HostBinding, args: ['class.at-table__thead',] },],
};
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
        this.pageIndexChange = new core.EventEmitter();
        this.pageSizeChange = new core.EventEmitter();
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
    return PagenationComponent;
}());
PagenationComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'atPagenation',
                template: "\n    <div>\n      <ul *ngIf=\"!simple\" class=\"at-pagination at-pagination--{{size}}\">\n    <span class=\"at-pagination__total\">\n      \u5171 {{total}} \u6761\n    </span>\n        <li (click)=\"_jumpPage(_current-1)\" [class.at-pagination--disabled]=\"_isFirstIndex\" title=\"\u4E0A\u4E00\u9875\"\n            class=\"at-pagination__prev\">\n          <i class=\"icon icon-chevron-left\"></i>\n        </li>\n        <li\n          title=\"\u7B2C\u4E00\u9875\"\n          class=\"at-pagination__item\"\n          [class.at-pagination__item--active]=\"_isFirstIndex\"\n          (click)=\"_jumpPage(_firstIndex)\">\n          {{_firstIndex}}\n        </li>\n        <li\n          [attr.title]=\"'\u5411\u524D '+_roundPageSize+' \u9875'\"\n          class=\"at-pagination__item at-pagination__item--jump-prev\"\n          (click)=\"_jumpBefore(_pageSize)\"\n          *ngIf=\"(_lastIndex >9)&&(_current-3>_firstIndex)\">\n          <i class=\"icon icon-chevrons-left\"></i>\n        </li>\n        <li\n          *ngFor=\"let page of _pages\"\n          [attr.title]=\"page.index\"\n          (click)=\"_jumpPage(page.index)\"\n          class=\"at-pagination__item\"\n          [class.at-pagination__item--active]=\"_current==page.index\">\n          {{page.index}}\n        </li>\n        <li [attr.title]=\"'\u5411\u540E '+_roundPageSize+' \u9875'\"\n            (click)=\"_jumpAfter(_pageSize)\"\n            class=\"at-pagination__item at-pagination__item--jump-next\"\n            *ngIf=\"(_lastIndex >9)&&(_current+3<_lastIndex)\"\n        >\n          <i class=\"icon icon-chevrons-right\"></i>\n        </li>\n        <li\n          [attr.title]=\"'\u6700\u540E\u4E00\u9875: '+_lastIndex\"\n          class=\"at-pagination__item\"\n          [class.at-pagination__item--active]=\"_isLastIndex\"\n          (click)=\"_jumpPage(_lastIndex)\"\n          *ngIf=\"(_lastIndex>0)&&(_lastIndex!==_firstIndex)\">\n          {{_lastIndex}}\n        </li>\n        <li title=\"\u4E0B\u4E00\u9875\"\n            [class.at-pagination--disabled]=\"_isLastIndex \"\n            class=\"at-pagination__next\" (click)=\"_jumpPage(_current+1)\">\n          <i class=\"icon icon-chevron-right\"></i>\n        </li>\n\n        <div *ngIf=\"atPageSizer\" class=\"at-pagination__sizer\">\n          <atSelect [(ngModel)]=\"pageSize\">\n            <atOption *ngFor=\"let item of _options\" [atValue]=\"item\" [atLabel]=\"item+' \u6761/\u9875'\">\n\n            </atOption>\n          </atSelect>\n        </div>\n\n        <div *ngIf=\"atQuickJump\" class=\"at-pagination__quickjump\">\n          <span>\u524D\u5F80</span>\n          <input type=\"text\" class=\"at-input__original\" [ngModel]=\"atPageIndex\"\n                 (ngModelChange)=\"_atPageIndexChange($event)\">\n          <span>\u9875</span>\n        </div>\n      </ul>\n\n      <ul *ngIf=\"simple\" class=\"at-pagination at-pagination--simple\" data-v-a01f69b8=\"\">\n        <li title=\"\u4E0A\u4E00\u9875\"\n            (click)=\"_jumpPage(_current-1)\" [class.at-pagination--disabled]=\"_isFirstIndex\"\n            class=\"at-pagination__prev\">\n          <i class=\"icon icon-chevron-left\"></i>\n        </li>\n        <div class=\"at-pagination__simple-paging\">\n          <input [ngModel]=\"atPageIndex\"\n                 (ngModelChange)=\"_atPageIndexChange($event)\"\n                 type=\"text\" class=\"at-input__original\">\n          <span>/</span>\n          <span class=\"at-pagination__paging-total\">{{_lastIndex}}</span></div>\n        <li title=\"\u4E0B\u4E00\u9875\" class=\"at-pagination__next\"\n            [class.at-pagination--disabled]=\"_isLastIndex \"\n            class=\"at-pagination__next\" (click)=\"_jumpPage(_current+1)\"\n        ><i class=\"icon icon-chevron-right\"></i></li>\n      </ul>\n    </div>\n  ",
            },] },
];
/**
 * @nocollapse
 */
PagenationComponent.ctorParameters = function () { return []; };
PagenationComponent.propDecorators = {
    'size': [{ type: core.Input },],
    'simple': [{ type: core.Input },],
    'pageIndexChange': [{ type: core.Output },],
    'pageSizeChange': [{ type: core.Output },],
    'atQuickJump': [{ type: core.Input },],
    'atPageSizer': [{ type: core.Input },],
    'atPageIndex': [{ type: core.Input },],
    'total': [{ type: core.Input },],
    'pageSize': [{ type: core.Input },],
};
var AtBreadItemDirective = (function () {
    /**
     * @param {?} el
     */
    function AtBreadItemDirective(el) {
        this.el = el;
        this.inited = false;
        this.item = true;
        this.separator = '/';
        this._inner = this.el.nativeElement.children;
    }
    /**
     * @return {?}
     */
    AtBreadItemDirective.prototype.ngAfterContentInit = function () {
        if (!this.inited) {
            var /** @type {?} */ html_1 = '';
            Array.from(this._inner).forEach(function (_el) {
                html_1 += _el.outerHTML;
            });
            html_1 ? html_1 : html_1 += this.el.nativeElement.innerText;
            this.el.nativeElement.innerHTML =
                "<span class=\"at_breadcrumb__text\">" + html_1 + "</span>\n    <span class=\"at-breadcrumb__separator\">" + this.separator + "</span>";
            this.inited = true;
        }
    };
    return AtBreadItemDirective;
}());
AtBreadItemDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[atBreadItem]'
            },] },
];
/**
 * @nocollapse
 */
AtBreadItemDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
AtBreadItemDirective.propDecorators = {
    'item': [{ type: core.HostBinding, args: ['class.at-breadcrumb__item',] },],
    'separator': [{ type: core.Input },],
};
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
        this.separator = '/';
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BreadcrumbComponent.prototype, "setThs", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var _this = this;
            var /** @type {?} */ items = value.toArray();
            items.forEach(function (item) {
                item.separator = _this.separator;
            });
        },
        enumerable: true,
        configurable: true
    });
    return BreadcrumbComponent;
}());
BreadcrumbComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'atBreadcrumb',
                template: "\n    <div class=\"at-breadcrumb\">\n      <ng-content></ng-content>\n    </div>\n  ",
            },] },
];
/**
 * @nocollapse
 */
BreadcrumbComponent.ctorParameters = function () { return []; };
BreadcrumbComponent.propDecorators = {
    'separator': [{ type: core.Input },],
    'breadItem': [{ type: core.ContentChild, args: ['breadItem',] },],
    'setThs': [{ type: core.ContentChildren, args: [AtBreadItemDirective,] },],
};
var MessageContainerComponent = (function (_super) {
    __extends(MessageContainerComponent, _super);
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
    { type: core.Component, args: [{
                selector: 'app-message-container',
                template: "\n    <div class=\"at-message__wrapper\">\n\n      <atMessage [message]=\"message\" *ngFor=\"let message of notifications\"></atMessage>\n\n    </div>\n  ",
                styles: ["\n    :host ::ng-deep .at-message__wrapper {\n      z-index: 1110;\n    }\n\n    :host ::ng-deep .at-message--wrapper {\n      text-align: center;\n      margin-top: 12px;\n      pointer-events: none;\n      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
MessageContainerComponent.ctorParameters = function () { return []; };
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
    { type: core.Component, args: [{
                selector: 'atMessage',
                template: "\n    <div class=\"at-message--wrapper\" [@enterLeave]=\"message.state\">\n      <div class=\"at-message at-message--{{message.type}}\">\n        <i class=\"icon at-message__icon {{status[message.type]}}\"></i>\n        <span class=\"at-message__content\">\n      {{message.message}}\n    </span>\n      </div>\n    </div>\n  ",
                animations: [
                    animations.trigger('enterLeave', [
                        animations.state('enter', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                        animations.transition('* => enter', [
                            animations.style({ opacity: 0, transform: 'translateY(-50%)' }),
                            animations.animate('100ms linear')
                        ]),
                        animations.state('leave', animations.style({ opacity: 0, transform: 'translateY(-50%)' })),
                        animations.transition('* => leave', [
                            animations.style({ opacity: 1, transform: 'translateY(0)' }),
                            animations.animate('100ms linear')
                        ]),
                    ])
                ]
            },] },
];
/**
 * @nocollapse
 */
MessageComponent.ctorParameters = function () { return [
    { type: MessageContainerComponent, },
]; };
MessageComponent.propDecorators = {
    'message': [{ type: core.Input },],
};
var AtMessageContainerService = (function (_super) {
    __extends(AtMessageContainerService, _super);
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
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
AtMessageContainerService.ctorParameters = function () { return [
    { type: ComponentCreatorBase, },
]; };
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
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
AtMessageService.ctorParameters = function () { return [
    { type: AtMessageContainerService, },
]; };
var PopoverComponent = (function () {
    /**
     * @param {?} el
     */
    function PopoverComponent(el) {
        this.el = el;
        this._placement = 'top';
        this._trigger = 'click';
        this.position = {};
        this._pop = false;
    }
    /**
     * @return {?}
     */
    PopoverComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PopoverComponent.prototype, "title", {
        /**
         * @return {?}
         */
        get: function () {
            return this._title;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "trigger", {
        /**
         * @return {?}
         */
        get: function () {
            return this._trigger;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._trigger = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "placement", {
        /**
         * @return {?}
         */
        get: function () {
            return this._placement;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "pop", {
        /**
         * @return {?}
         */
        get: function () {
            return this._pop;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._pop = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    PopoverComponent.prototype.clickout = function (event) {
        if (this.el.nativeElement.contains(event.target)) {
        }
        else {
            this.pop = false;
        }
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype.setPopPosition = function () {
        var /** @type {?} */ trigger$$1 = this.triggerEle.nativeElement;
        var /** @type {?} */ popover = this.popover.nativeElement;
        switch (this.placement) {
            case 'top':
                this.position.left = trigger$$1.offsetLeft - (popover.offsetWidth / 2) + (trigger$$1.offsetWidth / 2);
                this.position.top = trigger$$1.offsetTop - popover.offsetHeight;
                break;
            case 'top-left':
                this.position.left = trigger$$1.offsetLeft;
                this.position.top = trigger$$1.offsetTop - popover.offsetHeight;
                break;
            case 'top-right':
                this.position.left = trigger$$1.offsetLeft + trigger$$1.offsetWidth - popover.offsetWidth;
                this.position.top = trigger$$1.offsetTop - popover.offsetHeight;
                break;
            case 'left':
                this.position.left = trigger$$1.offsetLeft - popover.offsetWidth;
                this.position.top = trigger$$1.offsetTop + (trigger$$1.offsetHeight / 2) - (popover.offsetHeight / 2);
                break;
            case 'left-top':
                this.position.left = trigger$$1.offsetLeft - popover.offsetWidth;
                this.position.top = trigger$$1.offsetTop;
                break;
            case 'left-bottom':
                this.position.left = trigger$$1.offsetLeft - popover.offsetWidth;
                this.position.top = trigger$$1.offsetTop + trigger$$1.offsetHeight - popover.offsetHeight;
                break;
            case 'right':
                this.position.left = trigger$$1.offsetLeft + trigger$$1.offsetWidth;
                this.position.top = trigger$$1.offsetTop + (trigger$$1.offsetHeight / 2) - (popover.offsetHeight / 2);
                break;
            case 'right-top':
                this.position.left = trigger$$1.offsetLeft + trigger$$1.offsetWidth;
                this.position.top = trigger$$1.offsetTop;
                break;
            case 'right-bottom':
                this.position.left = trigger$$1.offsetLeft + trigger$$1.offsetWidth;
                this.position.top = trigger$$1.offsetTop + trigger$$1.offsetHeight - popover.offsetHeight;
                break;
            case 'bottom':
                this.position.left = trigger$$1.offsetLeft - (popover.offsetWidth / 2) + (trigger$$1.offsetWidth / 2);
                this.position.top = trigger$$1.offsetTop + trigger$$1.offsetHeight;
                break;
            case 'bottom-left':
                this.position.left = trigger$$1.offsetLeft;
                this.position.top = trigger$$1.offsetTop + trigger$$1.offsetHeight;
                break;
            case 'bottom-right':
                this.position.left = trigger$$1.offsetLeft + trigger$$1.offsetWidth - popover.offsetWidth;
                this.position.top = trigger$$1.offsetTop + trigger$$1.offsetHeight;
                break;
            default:
                // if user set wrong placement, then use default 'top'
                this.position.left = trigger$$1.offsetLeft - (popover.offsetWidth / 2) + (trigger$$1.offsetWidth / 2);
                this.position.top = trigger$$1.offsetTop - popover.offsetHeight;
                break;
        }
        popover.style.top = this.position.top + "px";
        popover.style.left = this.position.left + "px";
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype.activePop = function () {
        if (this.trigger == 'click') {
            this.pop = !this.pop;
        }
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype.mouseOver = function () {
        var _this = this;
        if (this.trigger == 'hover') {
            clearTimeout(this.timer);
            this.timer = setTimeout(function (_) {
                _this.pop = true;
            }, 300);
        }
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype.mouseOut = function () {
        var _this = this;
        if (this.trigger == 'hover') {
            clearTimeout(this.timer);
            this.timer = setTimeout(function (_) {
                _this.pop = false;
            }, 300);
        }
    };
    /**
     * @return {?}
     */
    PopoverComponent.prototype.ngAfterViewChecked = function () {
        // this.setPopPosition()
    };
    return PopoverComponent;
}());
PopoverComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'atPopover',
                animations: [FadeAnimation],
                template: "\n    <div class=\"at-popover\">\n  <span (mouseenter)=\"mouseOver()\" (mouseleave)=\"mouseOut()\" (click)=\"activePop()\" class=\"at-popover__trigger\" #trigger>\n  <ng-content select=\"[popTrigger]\">\n  </ng-content>\n</span>\n      <div #popover [@fadeAnimation] (mouseenter)=\"mouseOver()\" (mouseleave)=\"mouseOut()\"\n           [ngStyle]=\"{'display': pop ? '' :'none'}\"\n           class=\"at-popover__popper at-popover--{{placement}}\">\n        <div class=\"at-popover__arrow\"></div>\n        <div *ngIf=\"title\" class=\"at-popover__title\">\n          <ng-content select=\"[popTitle]\"></ng-content>\n        </div>\n        <div class=\"at-popover__content\">\n          <ng-content select=\"[popContent]\"></ng-content>\n        </div>\n      </div>\n    </div>\n\n  "
            },] },
];
/**
 * @nocollapse
 */
PopoverComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
PopoverComponent.propDecorators = {
    'title': [{ type: core.Input },],
    'trigger': [{ type: core.Input },],
    'clickout': [{ type: core.HostListener, args: ['document:click', ['$event'],] },],
    'pop': [{ type: core.Input },],
    'placement': [{ type: core.Input },],
    'triggerEle': [{ type: core.ViewChild, args: ['trigger',] },],
    'popover': [{ type: core.ViewChild, args: ['popover',] },],
};
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
    { type: core.Component, args: [{
                selector: 'atProgress',
                template: "\n    <div class=\"at-progress at-progress--bar at-progress--{{status}}\">\n      <div class=\"at-progress-bar\">\n        <div class=\"at-progress-bar__wraper\" [ngStyle]=\"{'height':stroke+'px'}\">\n          <div class=\"at-progress-bar__inner\" [ngStyle]=\"{'width': width+'%'}\"></div>\n        </div>\n      </div>\n      <div class=\"at-progress__text\">\n        <span *ngIf=\"!status\">{{width}}%</span>\n        <i *ngIf=\"status\" class=\"icon {{ statusIcon[status]}}\"></i>\n      </div>\n    </div>\n  "
            },] },
];
/**
 * @nocollapse
 */
ProgressComponent.ctorParameters = function () { return []; };
ProgressComponent.propDecorators = {
    'stroke': [{ type: core.Input },],
    'width': [{ type: core.Input },],
    'status': [{ type: core.Input },],
};
var TooltipComponent = (function (_super) {
    __extends(TooltipComponent, _super);
    function TooltipComponent() {
        var _this = _super.apply(this, arguments) || this;
        _this.trigger = 'hover';
        return _this;
    }
    Object.defineProperty(TooltipComponent.prototype, "placement", {
        /**
         * @return {?}
         */
        get: function () {
            return this._placement;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._placement = value;
        },
        enumerable: true,
        configurable: true
    });
    return TooltipComponent;
}(PopoverComponent));
TooltipComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'atTooltip',
                template: "\n    <div class=\"at-tooltip\">\n    <span (mouseenter)=\"mouseOver()\" (mouseleave)=\"mouseOut()\" class=\"at-tooltip__trigger\"\n          #trigger>\n      <ng-content select=\"[tooltipTrigger]\"></ng-content>\n    </span>\n      <div\n        (mouseenter)=\"mouseOver()\" (mouseleave)=\"mouseOut()\" [ngStyle]=\"{'display': pop ? '' :'none'}\"\n        class=\"at-tooltip__popper at-tooltip--{{placement}}\" #popover>\n        <div class=\"at-tooltip__arrow\"></div>\n        <div class=\"at-tooltip__content\">\n          <ng-content select=\"[tooltipContent]\"></ng-content>\n        </div>\n      </div>\n    </div>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TooltipComponent.ctorParameters = function () { return []; };
TooltipComponent.propDecorators = {
    'placement': [{ type: core.Input },],
};
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
    { type: core.Component, args: [{
                selector: 'app-form',
                template: "\n    <ng-content></ng-content>",
            },] },
];
/**
 * @nocollapse
 */
FormComponent.ctorParameters = function () { return []; };
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
    { type: core.Directive, args: [{
                selector: '[atForm]'
            },] },
];
/**
 * @nocollapse
 */
AtFormDirective.ctorParameters = function () { return []; };
AtFormDirective.propDecorators = {
    'form': [{ type: core.HostBinding, args: ['class.at-form',] },],
    'inline': [{ type: core.HostBinding, args: ['class.at-form--inline',] },],
    'horizontal': [{ type: core.HostBinding, args: ['class.at-form--horizontal',] },],
    'type': [{ type: core.Input },],
};
var AtFormItemDirective = (function () {
    function AtFormItemDirective() {
        this.item = true;
    }
    return AtFormItemDirective;
}());
AtFormItemDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[atFormItem]'
            },] },
];
/**
 * @nocollapse
 */
AtFormItemDirective.ctorParameters = function () { return []; };
AtFormItemDirective.propDecorators = {
    'item': [{ type: core.HostBinding, args: ['class.at-form-item',] },],
};
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
    { type: core.Directive, args: [{
                selector: '[atFormLabel]'
            },] },
];
/**
 * @nocollapse
 */
AtFormLabelDirective.ctorParameters = function () { return []; };
AtFormLabelDirective.propDecorators = {
    'required': [{ type: core.Input },],
    'label': [{ type: core.HostBinding, args: ['class.at-form-item__label',] },],
    'require': [{ type: core.HostBinding, args: ['class.at-form-item__label—-required',] },],
};
var AtFormContentDirective = (function () {
    function AtFormContentDirective() {
        this.content = true;
    }
    return AtFormContentDirective;
}());
AtFormContentDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[atFormContent]'
            },] },
];
/**
 * @nocollapse
 */
AtFormContentDirective.ctorParameters = function () { return []; };
AtFormContentDirective.propDecorators = {
    'content': [{ type: core.HostBinding, args: ['class.at-form-item__content',] },],
};
var AtFormErrorDirective = (function () {
    function AtFormErrorDirective() {
        this.error = true;
    }
    return AtFormErrorDirective;
}());
AtFormErrorDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[atFormError]'
            },] },
];
/**
 * @nocollapse
 */
AtFormErrorDirective.ctorParameters = function () { return []; };
AtFormErrorDirective.propDecorators = {
    'error': [{ type: core.HostBinding, args: ['class.at-form-item__error-tip',] },],
};
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
    { type: core.Directive, args: [{
                selector: '[atFormFeedback]'
            },] },
];
/**
 * @nocollapse
 */
AtFormFeedbackDirective.ctorParameters = function () { return []; };
AtFormFeedbackDirective.propDecorators = {
    'status': [{ type: core.Input },],
    'feedback': [{ type: core.HostBinding, args: ['class.feedback',] },],
    'success': [{ type: core.HostBinding, args: ['class.feedback_success',] },],
    'warning': [{ type: core.HostBinding, args: ['class.feedback_warning',] },],
    'error': [{ type: core.HostBinding, args: ['class.feedback_error',] },],
};
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
    { type: core.Component, args: [{
                selector: 'atDatetimePicker',
                template: "\n    <atInput [ngModel]=\"atValue | atFormat: format\" #timeinput (onFocus)=\"choosePicker()\"\n             (click)=\"choosePicker()\"></atInput>\n    <div *ngIf=\"show\" class=\"over-flow-wrapper\" [ngStyle]=\"{'top':cssTop}\">\n      <div class=\"at-datepicker\">\n        <div class=\"at-datepicker--panel\">\n          <div class=\"at-datepicker--panel--header\">\n            <div style=\"position: relative\">\n              <a *ngIf=\"atType == 'full'\" (click)=\"preYear()\" class=\"pre-year-btn\">\n              </a>\n              <a *ngIf=\"atType == 'full'\" (click)=\"preMonth()\" class=\"pre-month-btn\">\n              </a>\n\n              <a *ngIf=\"atType == 'year'\" (click)=\"preCentury()\" class=\"pre-year-btn\">\n              </a>\n\n\n              <span class=\"current-select-label\">\n            <a (click)=\"setCal('month')\" class=\"month-select\">{{atMonth + 1}}\u6708</a>\n            <a (click)=\"setCal('year')\" class=\"year-select\">{{atYear}}\u5E74</a>\n          </span>\n\n              <a *ngIf=\"atType == 'full'\" (click)=\"nextMonth()\" class=\"next-month-btn\">\n              </a>\n              <a (click)=\"nextYear()\" class=\"next-year-btn\">\n              </a>\n\n              <a *ngIf=\"atType == 'year'\" (click)=\"nextCenury()\" class=\"next-year-btn\">\n              </a>\n\n            </div>\n          </div>\n          <div class=\"at-datepicker--panel--body\">\n            <atCalendar (_clickDate)=\"clickDate($event)\" (_clickYear)=\"clickYear($event)\"\n                        (_clickMonth)=\"clickMonth($event)\"\n                        [format]=\"format\"\n                        [disableDate]=\"disableDate\"\n                        [atType]=\"atType\"\n                        [atYear]=\"atYear\" [atMonth]=\"atMonth\"\n                        [showValue]=\"showValue\"\n                        [atValue]=\"atValue\"></atCalendar>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return DatetimepickerComponent; }),
                        multi: true
                    }
                ],
            },] },
];
/**
 * @nocollapse
 */
DatetimepickerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
DatetimepickerComponent.propDecorators = {
    'atType': [{ type: core.Input },],
    'format': [{ type: core.Input },],
    'disableDate': [{ type: core.Input },],
    'onDocumentClick': [{ type: core.HostListener, args: ['document:click', ['$event'],] },],
    'input': [{ type: core.ViewChild, args: ['timeinput',] },],
};
var CalendarComponent = (function () {
    function CalendarComponent() {
        this._clickMonth = new core.EventEmitter();
        this._clickYear = new core.EventEmitter();
        this._clickDate = new core.EventEmitter();
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
    
    /**
     * @param {?} year
     * @return {?}
     */
    CalendarComponent.prototype.buildCentury = function (year) {
        var /** @type {?} */ century = [];
        var /** @type {?} */ temparray = [];
        for (var _a = 0, _b = Array.from(Array(20).keys()); _a < _b.length; _a++) {
            var i = _b[_a];
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
    { type: core.Component, args: [{
                selector: 'atCalendar',
                template: "\n    <table *ngIf=\"atType =='full'\" class=\"at-calendar-table\">\n      <thead>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u65E5</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E00</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E8C</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E09</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u56DB</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u4E94</span></th>\n      <th class=\"column-header\"><span class=\"column-header-inner\">\u516D</span></th>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let week of weeks\">\n        <td\n          *ngFor=\"let day of week.days\" class=\"at-date-cell\"\n          (click)=\"clickDay(day)\"\n          [ngClass]=\"{'at-date-cell--last-month':day.isLastMonth,\n'at-date-cell--selected':day.isSelectedDay ,\n'at-date-cell--today':day.isCurrentDay,\n'at-date-cell--next-month':day.isNextMonth,\n'at-date-cell--disabled':day.disabled}\">\n          <div class=\"at-date\">{{day.number}}</div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n    <table *ngIf=\"atType=='month'\" class=\"at-calendar-table\">\n      <tbody>\n      <tr *ngFor=\"let month of months\">\n        <td\n          *ngFor=\"let single of month\" class=\"at-month-cell\"\n          (click)=\"clickMonth(single)\"\n          [ngClass]=\"{\n              'at-date-cell--selected':single.isSelectedMonth ,\n              'at-date-cell--today':single.isCurrentMonth}\">\n          <div class=\"at-date\">{{single.name}}</div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n    <table *ngIf=\"atType=='year'\" class=\"at-calendar-table\">\n      <tbody>\n      <tr *ngFor=\"let section of years\">\n        <td\n          *ngFor=\"let year of section\" class=\"at-month-cell\"\n          (click)=\"clickYear(year)\"\n          [ngClass]=\"{\n              'at-date-cell--selected':year.isSelectedMonth ,\n              'at-date-cell--today':year.isCurrentMonth}\">\n          <div class=\"at-date\">{{year}}</div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n\n\n\n\n  ",
            },] },
];
/**
 * @nocollapse
 */
CalendarComponent.ctorParameters = function () { return []; };
CalendarComponent.propDecorators = {
    '_clickMonth': [{ type: core.Output },],
    '_clickYear': [{ type: core.Output },],
    '_clickDate': [{ type: core.Output },],
    'disableDate': [{ type: core.Input },],
    'showValue': [{ type: core.Input },],
    'private': [{ type: core.Input },],
    'atType': [{ type: core.Input },],
    'atValue': [{ type: core.Input },],
    'atYear': [{ type: core.Input },],
    'format': [{ type: core.Input },],
    'atMonth': [{ type: core.Input },],
    'atDay': [{ type: core.Input },],
};
var TimeComponent = (function () {
    function TimeComponent() {
        this._selected_second = moment().hour();
        this._selected_minutes = moment().minute();
        this._selected_hour = moment().hour();
        this.selectHour = new core.EventEmitter();
        this.selectMinute = new core.EventEmitter();
        this.selectSecond = new core.EventEmitter();
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
    { type: core.Component, args: [{
                selector: 'atTime',
                template: "\n    <div atRow>\n      <div #hour_panel atCol [span]=\"8\" class=\"at-time-panel\">\n        <ul>\n          <li *ngFor=\"let s of hours\"\n              [ngClass]=\"{'time-selected':s.index == selected_hour}\">\n            {{s.name}}\n          </li>\n        </ul>\n      </div>\n      <div #minute_panel atCol [span]=\"8\" class=\"at-time-panel\">\n        <ul>\n          <li *ngFor=\"let s of minutes\"\n              [ngClass]=\"{'time-selected':s.index == selected_minutes}\"\n          >\n            {{s.name}}\n          </li>\n        </ul>\n      </div>\n      <div #second_panel atCol [span]=\"8\" class=\"at-time-panel\">\n\n        <ul>\n          <li *ngFor=\"let s of seconds\"\n              [ngClass]=\"{'time-selected':s.index == selected_second}\"\n          >\n            {{s.name}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TimeComponent.ctorParameters = function () { return []; };
TimeComponent.propDecorators = {
    'selectHour': [{ type: core.Output },],
    'selectMinute': [{ type: core.Output },],
    'selectSecond': [{ type: core.Output },],
    'selected_second': [{ type: core.Input },],
    'selected_minutes': [{ type: core.Input },],
    'selected_hour': [{ type: core.Input },],
    'hour_panel': [{ type: core.ViewChild, args: ['hour_panel',] },],
    'minute_panel': [{ type: core.ViewChild, args: ['minute_panel',] },],
    'second_panel': [{ type: core.ViewChild, args: ['second_panel',] },],
};
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
    { type: core.Component, args: [{
                selector: 'atCard',
                template: "\n    <div class=\"at-card\" [ngClass]=\"{'at-card-bordered':border}\">\n      <ng-content select=\"[card-content]\">\n\n      </ng-content>\n    </div>",
            },] },
];
/**
 * @nocollapse
 */
CardComponent.ctorParameters = function () { return []; };
CardComponent.propDecorators = {
    'border': [{ type: core.Input },],
};
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
    { type: core.Pipe, args: [{
                name: 'atFormat'
            },] },
];
/**
 * @nocollapse
 */
AtFormatPipe.ctorParameters = function () { return []; };
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
    { type: core.Component, args: [{
                selector: 'atTabSet',
                template: "\n    <div class=\"at-tab at-tab-{{position}}\">\n      <div class=\"at-tabs-bar \">\n        <div class=\"at-tabs-nav-container\">\n          <div class=\"at-tabs-nav-wrap\">\n            <div class=\"at-tab--navs\">\n              <at-tab-navs\n                [selected_index]=\"selected_index\"\n                [position]=\"position\">\n                <div at-tab-label *ngFor=\"let item of tabs;let i =index\" (click)=\"selectTab(i)\" class=\"at-tab-nav\">\n                  <ng-template [ngTemplateOutlet]=\"item._tabHeading\">\n                  </ng-template>\n                </div>\n              </at-tab-navs>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"at-tab--contents\">\n        <div class=\"at-tab-content\">\n          <at-tab-body [content]=\"tabs[selected_index]?._content\">\n\n          </at-tab-body>\n        </div>\n      </div>\n\n    </div>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TabSetComponent.ctorParameters = function () { return []; };
TabSetComponent.propDecorators = {
    'position': [{ type: core.Input },],
    'selected_index': [{ type: core.Input },],
};
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
    { type: core.Component, args: [{
                selector: 'atTab, [atTab]',
                encapsulation: core.ViewEncapsulation.None,
                template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TabComponent.ctorParameters = function () { return [
    { type: TabSetComponent, },
]; };
TabComponent.propDecorators = {
    '_tabHeading': [{ type: core.ContentChild, args: ['atTabHeading',] },],
    '_content': [{ type: core.ViewChild, args: [core.TemplateRef,] },],
};
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
    { type: core.Component, args: [{
                selector: 'tabContent',
                template: "\n    <ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TabContentComponent.ctorParameters = function () { return [
    { type: TabComponent, },
]; };
TabContentComponent.propDecorators = {
    'title': [{ type: core.Input },],
    'content': [{ type: core.ViewChild, args: [core.TemplateRef,] },],
};
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
    { type: core.Component, args: [{
                selector: 'at-tab-body',
                template: "\n    <ng-template [ngTemplateOutlet]=\"content\"></ng-template>",
            },] },
];
/**
 * @nocollapse
 */
TabBodyComponent.ctorParameters = function () { return []; };
TabBodyComponent.propDecorators = {
    'content': [{ type: core.Input },],
};
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
    { type: core.Component, args: [{
                selector: 'app-tab-header',
                template: "<ng-content>\n    \n  </ng-content>",
            },] },
];
/**
 * @nocollapse
 */
TabHeaderComponent.ctorParameters = function () { return []; };
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
    { type: core.Directive, args: [{
                selector: '[AtTabInk]'
            },] },
];
/**
 * @nocollapse
 */
AtTabInkDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: core.NgZone, },
]; };
AtTabInkDirective.propDecorators = {
    '_atTabsInkBar': [{ type: core.HostBinding, args: ['class.at-tabs-ink-bar',] },],
    'atAnimated': [{ type: core.Input },],
    'atPositionMode': [{ type: core.Input },],
};
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
    { type: core.Directive, args: [{
                selector: '[at-tab-label]'
            },] },
];
/**
 * @nocollapse
 */
TabLabelDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
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
    { type: core.Component, args: [{
                selector: 'at-tab-navs',
                template: "\n    <div AtTabInk [atPositionMode]=\"position\" class=\"at-tabs-ink-bar at-tabs-ink-bar-animated\"></div>\n    <ng-content></ng-content>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TabNavsComponent.ctorParameters = function () { return []; };
TabNavsComponent.propDecorators = {
    '_labelWrappers': [{ type: core.ContentChildren, args: [TabLabelDirective,] },],
    '_inkBar': [{ type: core.ViewChild, args: [AtTabInkDirective,] },],
    'position': [{ type: core.Input },],
    'selected_index': [{ type: core.Input },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * OverlayState is a bag of values for either the initial configuration or current state of an
 * overlay.
 */
var OverlayState = (function () {
    function OverlayState() {
        /**
         * Custom class to add to the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */
        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * The direction of the text in the overlay panel.
         */
        this.direction = 'ltr';
        // TODO(jelbourn): configuration still to add
        // - focus trap
        // - disable pointer events
        // - z-index
    }
    return OverlayState;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = (function () {
    /**
     * @param {?} _portalHost
     * @param {?} _pane
     * @param {?} _state
     * @param {?} _scrollStrategy
     * @param {?} _ngZone
     */
    function OverlayRef(_portalHost, _pane, _state, _scrollStrategy, _ngZone) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._state = _state;
        this._scrollStrategy = _scrollStrategy;
        this._ngZone = _ngZone;
        this._backdropElement = null;
        this._backdropClick = new Subject.Subject();
        this._attachments = new Subject.Subject();
        this._detachments = new Subject.Subject();
        _scrollStrategy.attach(this);
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /**
         * The overlay's HTML element
         * @return {?}
         */
        get: function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches the overlay to a portal instance and adds the backdrop.
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    OverlayRef.prototype.attach = function (portal) {
        var /** @type {?} */ attachResult = this._portalHost.attach(portal);
        // Update the pane element with the given state configuration.
        this._updateStackingOrder();
        this.updateSize();
        this.updateDirection();
        this.updatePosition();
        this._scrollStrategy.enable();
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._state.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._state.panelClass) {
            this._pane.classList.add(this._state.panelClass);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        return attachResult;
    };
    /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = function () {
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        this._scrollStrategy.disable();
        var /** @type {?} */ detachmentResult = this._portalHost.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        return detachmentResult;
    };
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    OverlayRef.prototype.dispose = function () {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.dispose();
        }
        if (this._scrollStrategy) {
            this._scrollStrategy.disable();
        }
        this.detachBackdrop();
        this._portalHost.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._detachments.next();
        this._detachments.complete();
    };
    /**
     * Checks whether the overlay has been attached.
     * @return {?}
     */
    OverlayRef.prototype.hasAttached = function () {
        return this._portalHost.hasAttached();
    };
    /**
     * Returns an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    OverlayRef.prototype.backdropClick = function () {
        return this._backdropClick.asObservable();
    };
    /**
     * Returns an observable that emits when the overlay has been attached.
     * @return {?}
     */
    OverlayRef.prototype.attachments = function () {
        return this._attachments.asObservable();
    };
    /**
     * Returns an observable that emits when the overlay has been detached.
     * @return {?}
     */
    OverlayRef.prototype.detachments = function () {
        return this._detachments.asObservable();
    };
    /**
     * Gets the current state config of the overlay.
     * @return {?}
     */
    OverlayRef.prototype.getState = function () {
        return this._state;
    };
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    OverlayRef.prototype.updatePosition = function () {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.apply(this._pane);
        }
    };
    /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    OverlayRef.prototype.updateDirection = function () {
        this._pane.setAttribute('dir', this._state.direction);
    };
    /**
     * Updates the size of the overlay based on the overlay config.
     * @return {?}
     */
    OverlayRef.prototype.updateSize = function () {
        if (this._state.width || this._state.width === 0) {
            this._pane.style.width = formatCssUnit(this._state.width);
        }
        if (this._state.height || this._state.height === 0) {
            this._pane.style.height = formatCssUnit(this._state.height);
        }
        if (this._state.minWidth || this._state.minWidth === 0) {
            this._pane.style.minWidth = formatCssUnit(this._state.minWidth);
        }
        if (this._state.minHeight || this._state.minHeight === 0) {
            this._pane.style.minHeight = formatCssUnit(this._state.minHeight);
        }
    };
    /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    OverlayRef.prototype._togglePointerEvents = function (enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    };
    /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    OverlayRef.prototype._attachBackdrop = function () {
        var _this = this;
        this._backdropElement = document.createElement('div');
        this._backdropElement.classList.add('nz-overlay-backdrop');
        if (this._state.backdropClass) {
            this._backdropElement.classList.add(this._state.backdropClass);
        }
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._pane.parentElement.insertBefore(this._backdropElement, this._pane);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function () { return _this._backdropClick.next(null); });
        // Add class to fade-in the backdrop after one frame.
        requestAnimationFrame(function () {
            if (_this._backdropElement) {
                _this._backdropElement.classList.add('nz-overlay-backdrop-showing');
            }
        });
    };
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    OverlayRef.prototype._updateStackingOrder = function () {
        if (this._pane.nextSibling) {
            this._pane.parentNode.appendChild(this._pane);
        }
    };
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    OverlayRef.prototype.detachBackdrop = function () {
        var _this = this;
        var /** @type {?} */ backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            var /** @type {?} */ finishDetach_1 = function () {
                // It may not be attached to anything in certain cases (e.g. unit tests).
                if (backdropToDetach && backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (_this._backdropElement === backdropToDetach) {
                    _this._backdropElement = null;
                }
            };
            backdropToDetach.classList.remove('nz-overlay-backdrop-showing');
            if (this._state.backdropClass) {
                backdropToDetach.classList.remove(this._state.backdropClass);
            }
            backdropToDetach.addEventListener('transitionend', finishDetach_1);
            // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.
            backdropToDetach.style.pointerEvents = 'none';
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            this._ngZone.runOutsideAngular(function () {
                setTimeout(finishDetach_1, 500);
            });
        }
    };
    return OverlayRef;
}());
/**
 * @param {?} value
 * @return {?}
 */
function formatCssUnit(value) {
    return typeof value === 'string' ? (value) : value + "px";
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Time in ms to throttle the scrolling events by default.
 */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = (function () {
    /**
     * @param {?} _ngZone
     * @param {?} _platform
     */
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new Subject.Subject();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollableReferences = new Map();
    }
    /**
     * Registers a Scrollable with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event in its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = function (scrollable) {
        var _this = this;
        var /** @type {?} */ scrollSubscription = scrollable.elementScrolled().subscribe(function () { return _this._notify(); });
        this.scrollableReferences.set(scrollable, scrollSubscription);
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = function (scrollable) {
        var /** @type {?} */ scrollableReference = this.scrollableReferences.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollableReferences.delete(scrollable);
        }
    };
    /**
     * Subscribes to an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     * @param {?=} auditTimeInMs
     * @param {?=} callback
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = function (auditTimeInMs, callback) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        // Scroll events can only happen on the browser, so do nothing if we're not on the browser.
        if (!this._platform.isBrowser) {
            return Subscription.Subscription.EMPTY;
        }
        // In the case of a 0ms delay, use an observable without auditTime
        // since it does add a perceptible delay in processing overhead.
        var /** @type {?} */ observable = auditTimeInMs > 0 ?
            auditTime.auditTime.call(this._scrolled.asObservable(), auditTimeInMs) :
            this._scrolled.asObservable();
        this._scrolledCount++;
        if (!this._globalSubscription) {
            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
                return merge.merge(fromEvent.fromEvent(window.document, 'scroll'), fromEvent.fromEvent(window, 'resize')).subscribe(function () { return _this._notify(); });
            });
        }
        // Note that we need to do the subscribing from here, in order to be able to remove
        // the global event listeners once there are no more subscriptions.
        var /** @type {?} */ subscription = observable.subscribe(callback);
        subscription.add(function () {
            _this._scrolledCount--;
            if (_this._globalSubscription && !_this.scrollableReferences.size && !_this._scrolledCount) {
                _this._globalSubscription.unsubscribe();
                _this._globalSubscription = null;
            }
        });
        return subscription;
    };
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getScrollContainers = function (elementRef) {
        var _this = this;
        var /** @type {?} */ scrollingContainers = [];
        this.scrollableReferences.forEach(function (_subscription, scrollable) {
            if (_this.scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.scrollableContainsElement = function (scrollable, elementRef) {
        var /** @type {?} */ element = elementRef.nativeElement;
        var /** @type {?} */ scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element === scrollableElement) {
                return true;
            }
        } while (element = element.parentElement);
        return false;
    };
    /**
     * Sends a notification that a scroll event has been fired.
     * @return {?}
     */
    ScrollDispatcher.prototype._notify = function () {
        this._scrolled.next();
    };
    return ScrollDispatcher;
}());
ScrollDispatcher.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
ScrollDispatcher.ctorParameters = function () { return [
    { type: core.NgZone, },
    { type: cdk.Platform, },
]; };
/**
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
var SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new core.Optional(), new core.SkipSelf(), ScrollDispatcher], core.NgZone, cdk.Platform],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = (function () {
    /**
     * @param {?} scrollDispatcher
     */
    function ViewportRuler(scrollDispatcher) {
        var _this = this;
        // Subscribe to scroll and resize events and update the document rectangle on changes.
        scrollDispatcher.scrolled(0, function () { return _this._cacheViewportGeometry(); });
    }
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @param {?=} documentRect
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = function (documentRect) {
        if (documentRect === void 0) { documentRect = this._documentRect; }
        // Cache the document bounding rect so that we don't recompute it for multiple calls.
        if (!documentRect) {
            this._cacheViewportGeometry();
            documentRect = this._documentRect;
        }
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var /** @type {?} */ scrollPosition = this.getViewportScrollPosition(documentRect);
        var /** @type {?} */ height = window.innerHeight;
        var /** @type {?} */ width = window.innerWidth;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @param {?=} documentRect
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = function (documentRect) {
        if (documentRect === void 0) { documentRect = this._documentRect; }
        // Cache the document bounding rect so that we don't recompute it for multiple calls.
        if (!documentRect) {
            this._cacheViewportGeometry();
            documentRect = this._documentRect;
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        var /** @type {?} */ top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            document.documentElement.scrollTop || 0;
        var /** @type {?} */ left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            document.documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Caches the latest client rectangle of the document element.
     * @return {?}
     */
    ViewportRuler.prototype._cacheViewportGeometry = function () {
        this._documentRect = document.documentElement.getBoundingClientRect();
    };
    return ViewportRuler;
}());
ViewportRuler.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
ViewportRuler.ctorParameters = function () { return [
    { type: ScrollDispatcher, },
]; };
/**
 * @param {?} parentRuler
 * @param {?} scrollDispatcher
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, scrollDispatcher) {
    return parentRuler || new ViewportRuler(scrollDispatcher);
}
var VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new core.Optional(), new core.SkipSelf(), ViewportRuler], ScrollDispatcher],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Horizontal dimension of a connection point on the perimeter of the origin or overlay element. */
/**
 * The points of the origin element and the overlay element to connect.
 */
var ConnectionPositionPair = (function () {
    /**
     * @param {?} origin
     * @param {?} overlay
     */
    function ConnectionPositionPair(origin, overlay) {
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 */
var ScrollableViewProperties = (function () {
    function ScrollableViewProperties() {
    }
    return ScrollableViewProperties;
}());
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
var ConnectedOverlayPositionChange = (function () {
    /**
     * @param {?} connectionPair
     * @param {?} scrollableViewProperties
     */
    function ConnectedOverlayPositionChange(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    return ConnectedOverlayPositionChange;
}());
/**
 * @nocollapse
 */
ConnectedOverlayPositionChange.ctorParameters = function () { return [
    { type: ConnectionPositionPair, },
    { type: ScrollableViewProperties, decorators: [{ type: core.Optional },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var ConnectedPositionStrategy = (function () {
    /**
     * @param {?} _connectedTo
     * @param {?} _originPos
     * @param {?} _overlayPos
     * @param {?} _viewportRuler
     */
    function ConnectedPositionStrategy(_connectedTo, _originPos, _overlayPos, _viewportRuler) {
        this._connectedTo = _connectedTo;
        this._originPos = _originPos;
        this._overlayPos = _overlayPos;
        this._viewportRuler = _viewportRuler;
        this._dir = 'ltr';
        /**
         * The offset in pixels for the overlay connection point on the x-axis
         */
        this._offsetX = 0;
        /**
         * The offset in pixels for the overlay connection point on the y-axis
         */
        this._offsetY = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */
        this.scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        this._onPositionChange = new Subject.Subject();
        this._origin = this._connectedTo.nativeElement;
        this.withFallbackPosition(_originPos, _overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /**
         * Whether the we're dealing with an RTL context
         * @return {?}
         */
        get: function () {
            return this._dir === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /**
         * Emits an event when the connection point changes.
         * @return {?}
         */
        get: function () {
            return this._onPositionChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        get: function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * To be used to for any cleanup after the element gets destroyed.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.dispose = function () { };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     *
     * @param {?} element Element to which to apply the CSS styles.
     * @return {?} Resolves when the styles have been applied.
     */
    ConnectedPositionStrategy.prototype.apply = function (element) {
        // Cache the overlay pane element in case re-calculating position is necessary
        this._pane = element;
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        var /** @type {?} */ originRect = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayRect = element.getBoundingClientRect();
        // We use the viewport rect to determine whether a position would go off-screen.
        var /** @type {?} */ viewportRect = this._viewportRuler.getViewportRect();
        // Fallback point if none of the fallbacks fit into the viewport.
        var /** @type {?} */ fallbackPoint;
        var /** @type {?} */ fallbackPosition;
        // We want to place the overlay in the first of the preferred positions such that the
        // overlay fits on-screen.
        for (var _a = 0, _b = this._preferredPositions; _a < _b.length; _a++) {
            var pos = _b[_a];
            // Get the (x, y) point of connection on the origin, and then use that to get the
            // (top, left) coordinate for the overlay at `pos`.
            var /** @type {?} */ originPoint = this._getOriginConnectionPoint(originRect, pos);
            var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportRect, pos);
            // If the overlay in the calculated position fits on-screen, put it there and we're done.
            if (overlayPoint.fitsInViewport) {
                this._setElementPosition(element, overlayRect, overlayPoint, pos);
                // Save the last connected position in case the position needs to be re-calculated.
                this._lastConnectedPosition = pos;
                // Notify that the position has been changed along with its change properties.
                var /** @type {?} */ scrollableViewProperties = this.getScrollableViewProperties(element);
                var /** @type {?} */ positionChange = new ConnectedOverlayPositionChange(pos, scrollableViewProperties);
                this._onPositionChange.next(positionChange);
                return;
            }
            else if (!fallbackPoint || fallbackPoint.visibleArea < overlayPoint.visibleArea) {
                fallbackPoint = overlayPoint;
                fallbackPosition = pos;
            }
        }
        // If none of the preferred positions were in the viewport, take the one
        // with the largest visible area.
        this._setElementPosition(element, overlayRect, fallbackPoint, fallbackPosition);
    };
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = function () {
        var /** @type {?} */ originRect = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayRect = this._pane.getBoundingClientRect();
        var /** @type {?} */ viewportRect = this._viewportRuler.getViewportRect();
        var /** @type {?} */ lastPosition = this._lastConnectedPosition || this._preferredPositions[0];
        var /** @type {?} */ originPoint = this._getOriginConnectionPoint(originRect, lastPosition);
        var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportRect, lastPosition);
        this._setElementPosition(this._pane, overlayRect, overlayPoint, lastPosition);
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = function (scrollables) {
        this.scrollables = scrollables;
    };
    /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos) {
        this._preferredPositions.push(new ConnectionPositionPair(originPos, overlayPos));
        return this;
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withDirection = function (dir) {
        this._dir = dir;
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetX = function (offset) {
        this._offsetX = offset;
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetY = function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getStartX = function (rect) {
        return this._isRtl ? rect.right : rect.left;
    };
    /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getEndX = function (rect) {
        return this._isRtl ? rect.left : rect.right;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getOriginConnectionPoint = function (originRect, pos) {
        var /** @type {?} */ originStartX = this._getStartX(originRect);
        var /** @type {?} */ originEndX = this._getEndX(originRect);
        var /** @type {?} */ x;
        if (pos.originX === 'center') {
            x = originStartX + (originRect.width / 2);
        }
        else {
            x = pos.originX === 'start' ? originStartX : originEndX;
        }
        var /** @type {?} */ y;
        if (pos.originY === 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY === 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected, as well as how much of the element
     * would be inside the viewport at that position.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} viewportRect
     * @param {?} pos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getOverlayPoint = function (originPoint, overlayRect, viewportRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the potential overlay position
        // relative to the origin point.
        var /** @type {?} */ overlayStartX;
        if (pos.overlayX === 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl ? 0 : -overlayRect.width;
        }
        var /** @type {?} */ overlayStartY;
        if (pos.overlayY === 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY === 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        var /** @type {?} */ x = originPoint.x + overlayStartX + this._offsetX;
        var /** @type {?} */ y = originPoint.y + overlayStartY + this._offsetY;
        // How much the overlay would overflow at this position, on each side.
        var /** @type {?} */ leftOverflow = 0 - x;
        var /** @type {?} */ rightOverflow = (x + overlayRect.width) - viewportRect.width;
        var /** @type {?} */ topOverflow = 0 - y;
        var /** @type {?} */ bottomOverflow = (y + overlayRect.height) - viewportRect.height;
        // Visible parts of the element on each axis.
        var /** @type {?} */ visibleWidth = this._subtractOverflows(overlayRect.width, leftOverflow, rightOverflow);
        var /** @type {?} */ visibleHeight = this._subtractOverflows(overlayRect.height, topOverflow, bottomOverflow);
        // The area of the element that's within the viewport.
        var /** @type {?} */ visibleArea = visibleWidth * visibleHeight;
        var /** @type {?} */ fitsInViewport = (overlayRect.width * overlayRect.height) === visibleArea;
        return { x: x, y: y, fitsInViewport: fitsInViewport, visibleArea: visibleArea };
    };
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @param {?} overlay
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.getScrollableViewProperties = function (overlay) {
        var _this = this;
        var /** @type {?} */ originBounds = this._getElementBounds(this._origin);
        var /** @type {?} */ overlayBounds = this._getElementBounds(overlay);
        var /** @type {?} */ scrollContainerBounds = this.scrollables.map(function (scrollable) {
            return _this._getElementBounds(scrollable.getElementRef().nativeElement);
        });
        return {
            isOriginClipped: this.isElementClipped(originBounds, scrollContainerBounds),
            isOriginOutsideView: this.isElementOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: this.isElementClipped(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: this.isElementOutsideView(overlayBounds, scrollContainerBounds),
        };
    };
    /**
     * Whether the element is completely out of the view of any of the containers.
     * @param {?} elementBounds
     * @param {?} containersBounds
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.isElementOutsideView = function (elementBounds, containersBounds) {
        return containersBounds.some(function (containerBounds) {
            var /** @type {?} */ outsideAbove = elementBounds.bottom < containerBounds.top;
            var /** @type {?} */ outsideBelow = elementBounds.top > containerBounds.bottom;
            var /** @type {?} */ outsideLeft = elementBounds.right < containerBounds.left;
            var /** @type {?} */ outsideRight = elementBounds.left > containerBounds.right;
            return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
    };
    /**
     * Whether the element is clipped by any of the containers.
     * @param {?} elementBounds
     * @param {?} containersBounds
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.isElementClipped = function (elementBounds, containersBounds) {
        return containersBounds.some(function (containerBounds) {
            var /** @type {?} */ clippedAbove = elementBounds.top < containerBounds.top;
            var /** @type {?} */ clippedBelow = elementBounds.bottom > containerBounds.bottom;
            var /** @type {?} */ clippedLeft = elementBounds.left < containerBounds.left;
            var /** @type {?} */ clippedRight = elementBounds.right > containerBounds.right;
            return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
    };
    /**
     * Physically positions the overlay element to the given coordinate.
     * @param {?} element
     * @param {?} overlayRect
     * @param {?} overlayPoint
     * @param {?} pos
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._setElementPosition = function (element, overlayRect, overlayPoint, pos) {
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear above
        // or below the origin and the direction in which the element will expand.
        var /** @type {?} */ verticalStyleProperty = pos.overlayY === 'bottom' ? 'bottom' : 'top';
        // When using `bottom`, we adjust the y position such that it is the distance
        // from the bottom of the viewport rather than the top.
        var /** @type {?} */ y = verticalStyleProperty === 'top' ?
            overlayPoint.y :
            document.documentElement.clientHeight - (overlayPoint.y + overlayRect.height);
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        var /** @type {?} */ horizontalStyleProperty;
        if (this._dir === 'rtl') {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        var /** @type {?} */ x = horizontalStyleProperty === 'left' ?
            overlayPoint.x :
            document.documentElement.clientWidth - (overlayPoint.x + overlayRect.width);
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        ['top', 'bottom', 'left', 'right'].forEach(function (p) { return element.style[p] = null; });
        element.style[verticalStyleProperty] = y + "px";
        element.style[horizontalStyleProperty] = x + "px";
    };
    /**
     * Returns the bounding positions of the provided element with respect to the viewport.
     * @param {?} element
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._getElementBounds = function (element) {
        var /** @type {?} */ boundingClientRect = element.getBoundingClientRect();
        return {
            top: boundingClientRect.top,
            right: boundingClientRect.left + boundingClientRect.width,
            bottom: boundingClientRect.top + boundingClientRect.height,
            left: boundingClientRect.left
        };
    };
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    ConnectedPositionStrategy.prototype._subtractOverflows = function (length) {
        var overflows = [];
        for (var _a = 1; _a < arguments.length; _a++) {
            overflows[_a - 1] = arguments[_a];
        }
        return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    };
    return ConnectedPositionStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var GlobalPositionStrategy = (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
        this._wrapper = null;
    }
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.top = function (value) {
        if (value === void 0) { value = ''; }
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.left = function (value) {
        if (value === void 0) { value = ''; }
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.bottom = function (value) {
        if (value === void 0) { value = ''; }
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.right = function (value) {
        if (value === void 0) { value = ''; }
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.width = function (value) {
        if (value === void 0) { value = ''; }
        this._width = value;
        // When the width is 100%, we should reset the `left` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.left('0px');
        }
        return this;
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.height = function (value) {
        if (value === void 0) { value = ''; }
        this._height = value;
        // When the height is 100%, we should reset the `top` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.top('0px');
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerHorizontally = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerVertically = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * \@docs-private
     *
     * @param {?} element Element to which to apply the CSS.
     * @return {?} Resolved when the styles have been applied.
     */
    GlobalPositionStrategy.prototype.apply = function (element) {
        if (!this._wrapper && element.parentNode) {
            this._wrapper = document.createElement('div');
            this._wrapper.classList.add('cdk-global-overlay-wrapper');
            element.parentNode.insertBefore(this._wrapper, element);
            this._wrapper.appendChild(element);
        }
        var /** @type {?} */ styles = element.style;
        var /** @type {?} */ parentStyles = ((element.parentNode)).style;
        styles.position = this._cssPosition;
        styles.marginTop = this._topOffset;
        styles.marginLeft = this._leftOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        styles.width = this._width;
        styles.height = this._height;
        parentStyles.justifyContent = this._justifyContent;
        parentStyles.alignItems = this._alignItems;
    };
    /**
     * Removes the wrapper element from the DOM.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.dispose = function () {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    };
    return GlobalPositionStrategy;
}());
/**
 * Free position strategy for overlay without origin
 * @author lingyi.zcs
 */
var FreePositionStrategy = (function () {
    function FreePositionStrategy() {
    }
    /**
     * Apply the position to the element. (NOTE: normally will triggered by scrolling)
     * \@docs-private
     *
     * @param {?} element Element to which to apply the CSS.
     * @return {?} Resolved when the styles have been applied.
     */
    FreePositionStrategy.prototype.apply = function (element) {
        if (!this._wrapper) {
            this._wrapper = document.createElement('div');
            this._wrapper.classList.add('cdk-free-overlay-wrapper');
            element.parentNode.insertBefore(this._wrapper, element);
            this._wrapper.appendChild(element);
            // // Initialized style once
            // const style = element.style;
            // style.position = this._cssPosition;
            // style.top = this._top;
            // style.left = this._left;
            // style.width = this._width;
            // style.height = this._height;
        }
        // TODO: do somethings while triggered (eg. by scrolling)
    };
    /**
     * Removes the wrapper element from the DOM.
     * @return {?}
     */
    FreePositionStrategy.prototype.dispose = function () {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    };
    return FreePositionStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Builder for overlay position strategy.
 */
var OverlayPositionBuilder = (function () {
    /**
     * @param {?} _viewportRuler
     */
    function OverlayPositionBuilder(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
    }
    /**
     * Creates a free position strategy
     * @return {?}
     */
    OverlayPositionBuilder.prototype.free = function () {
        return new FreePositionStrategy();
    };
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    OverlayPositionBuilder.prototype.global = function () {
        return new GlobalPositionStrategy();
    };
    /**
     * Creates a relative position strategy.
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    OverlayPositionBuilder.prototype.connectedTo = function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(elementRef, originPos, overlayPos, this._viewportRuler);
    };
    return OverlayPositionBuilder;
}());
OverlayPositionBuilder.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
OverlayPositionBuilder.ctorParameters = function () { return [
    { type: ViewportRuler, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var OverlayContainer = (function () {
    function OverlayContainer() {
    }
    Object.defineProperty(OverlayContainer.prototype, "themeClass", {
        /**
         * Base theme to be applied to all overlay-based components.
         * @return {?}
         */
        get: function () { return this._themeClass; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._containerElement) {
                this._containerElement.classList.remove(this._themeClass);
                if (value) {
                    this._containerElement.classList.add(value);
                }
            }
            this._themeClass = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = function () {
        var /** @type {?} */ container = document.createElement('div');
        container.classList.add('nz-overlay-container');
        if (this._themeClass) {
            container.classList.add(this._themeClass);
        }
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());
OverlayContainer.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
OverlayContainer.ctorParameters = function () { return []; };
/**
 * @param {?} parentContainer
 * @return {?}
 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer) {
    return parentContainer || new OverlayContainer();
}
var OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [[new core.Optional(), new core.SkipSelf(), OverlayContainer]],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var Scrollable = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _scroll
     * @param {?} _ngZone
     * @param {?} _renderer
     */
    function Scrollable(_elementRef, _scroll, _ngZone, _renderer) {
        this._elementRef = _elementRef;
        this._scroll = _scroll;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._elementScrolled = new Subject.Subject();
    }
    /**
     * @return {?}
     */
    Scrollable.prototype.ngOnInit = function () {
        var _this = this;
        this._scrollListener = this._ngZone.runOutsideAngular(function () {
            return _this._renderer.listen(_this.getElementRef().nativeElement, 'scroll', function (event) {
                _this._elementScrolled.next(event);
            });
        });
        this._scroll.register(this);
    };
    /**
     * @return {?}
     */
    Scrollable.prototype.ngOnDestroy = function () {
        this._scroll.deregister(this);
        if (this._scrollListener) {
            this._scrollListener();
            this._scrollListener = null;
        }
    };
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    Scrollable.prototype.elementScrolled = function () {
        return this._elementScrolled.asObservable();
    };
    /**
     * @return {?}
     */
    Scrollable.prototype.getElementRef = function () {
        return this._elementRef;
    };
    return Scrollable;
}());
Scrollable.decorators = [
    { type: core.Directive, args: [{
                selector: '[cdk-scrollable], [cdkScrollable]'
            },] },
];
/**
 * @nocollapse
 */
Scrollable.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: ScrollDispatcher, },
    { type: core.NgZone, },
    { type: core.Renderer2, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Describes a strategy that will be used by an overlay
 * to handle scroll events while it is open.
 * @abstract
 */
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
function getMdScrollStrategyAlreadyAttachedError() {
    return Error("Scroll strategy has already been attached.");
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
var CloseScrollStrategy = (function () {
    /**
     * @param {?} _scrollDispatcher
     */
    function CloseScrollStrategy(_scrollDispatcher) {
        this._scrollDispatcher = _scrollDispatcher;
        this._scrollSubscription = null;
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    CloseScrollStrategy.prototype.attach = function (overlayRef) {
        if (this._overlayRef) {
            throw getMdScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /**
     * @return {?}
     */
    CloseScrollStrategy.prototype.enable = function () {
        var _this = this;
        if (!this._scrollSubscription) {
            this._scrollSubscription = this._scrollDispatcher.scrolled(0, function () {
                if (_this._overlayRef.hasAttached()) {
                    _this._overlayRef.detach();
                }
                _this.disable();
            });
        }
    };
    /**
     * @return {?}
     */
    CloseScrollStrategy.prototype.disable = function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return CloseScrollStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Scroll strategy that doesn't do anything.
 */
var NoopScrollStrategy = (function () {
    function NoopScrollStrategy() {
    }
    /**
     * @return {?}
     */
    NoopScrollStrategy.prototype.enable = function () { };
    /**
     * @return {?}
     */
    NoopScrollStrategy.prototype.disable = function () { };
    /**
     * @return {?}
     */
    NoopScrollStrategy.prototype.attach = function () { };
    return NoopScrollStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
var BlockScrollStrategy = (function () {
    /**
     * @param {?} _viewportRuler
     */
    function BlockScrollStrategy(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
    }
    /**
     * @return {?}
     */
    BlockScrollStrategy.prototype.attach = function () { };
    /**
     * @return {?}
     */
    BlockScrollStrategy.prototype.enable = function () {
        if (this._canBeEnabled()) {
            var /** @type {?} */ root = document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = -this._previousScrollPosition.left + "px";
            root.style.top = -this._previousScrollPosition.top + "px";
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    };
    /**
     * @return {?}
     */
    BlockScrollStrategy.prototype.disable = function () {
        if (this._isEnabled) {
            this._isEnabled = false;
            document.documentElement.style.left = this._previousHTMLStyles.left;
            document.documentElement.style.top = this._previousHTMLStyles.top;
            document.documentElement.classList.remove('cdk-global-scrollblock');
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
        }
    };
    /**
     * @return {?}
     */
    BlockScrollStrategy.prototype._canBeEnabled = function () {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        if (document.documentElement.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        var /** @type {?} */ body = document.body;
        var /** @type {?} */ viewport = this._viewportRuler.getViewportRect();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Strategy that will update the element position as the user is scrolling.
 */
var RepositionScrollStrategy = (function () {
    /**
     * @param {?} _scrollDispatcher
     * @param {?=} _config
     */
    function RepositionScrollStrategy(_scrollDispatcher, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    RepositionScrollStrategy.prototype.attach = function (overlayRef) {
        if (this._overlayRef) {
            throw getMdScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /**
     * @return {?}
     */
    RepositionScrollStrategy.prototype.enable = function () {
        var _this = this;
        if (!this._scrollSubscription) {
            var /** @type {?} */ throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle, function () {
                _this._overlayRef.updatePosition();
            });
        }
    };
    /**
     * @return {?}
     */
    RepositionScrollStrategy.prototype.disable = function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return RepositionScrollStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
var ScrollStrategyOptions = (function () {
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _viewportRuler
     */
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        /**
         * Do nothing on scroll.
         */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         */
        this.close = function () { return new CloseScrollStrategy(_this._scrollDispatcher); };
        /**
         * Block scrolling.
         */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) { return new RepositionScrollStrategy(_this._scrollDispatcher, config); };
    }
    return ScrollStrategyOptions;
}());
ScrollStrategyOptions.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
ScrollStrategyOptions.ctorParameters = function () { return [
    { type: ScrollDispatcher, },
    { type: ViewportRuler, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ScrollDispatchModule = (function () {
    function ScrollDispatchModule() {
    }
    return ScrollDispatchModule;
}());
ScrollDispatchModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [cdk.PlatformModule],
                exports: [Scrollable],
                declarations: [Scrollable],
                providers: [SCROLL_DISPATCHER_PROVIDER, ScrollStrategyOptions],
            },] },
];
/**
 * @nocollapse
 */
ScrollDispatchModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Next overlay unique ID.
 */
var nextUniqueId = 0;
/**
 * The default state for newly created overlays.
 */
var defaultState = new OverlayState();
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = (function () {
    /**
     * @param {?} scrollStrategies
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _positionBuilder
     * @param {?} _appRef
     * @param {?} _injector
     * @param {?} _ngZone
     */
    function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _appRef, _injector, _ngZone) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._appRef = _appRef;
        this._injector = _injector;
        this._ngZone = _ngZone;
    }
    /**
     * Creates an overlay.
     * @param {?=} state State to apply to the overlay.
     * @param {?=} paneClassName
     * @return {?} Reference to the created overlay.
     */
    Overlay.prototype.create = function (state$$1, paneClassName) {
        if (state$$1 === void 0) { state$$1 = defaultState; }
        return this._createOverlayRef(this._createPaneElement(paneClassName), state$$1);
    };
    /**
     * Returns a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?}
     */
    Overlay.prototype.position = function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?=} className
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (className) {
        var /** @type {?} */ pane = document.createElement('div');
        pane.id = "nz-overlay-" + nextUniqueId++;
        pane.classList.add('nz-overlay-pane');
        if (className) {
            var /** @type {?} */ classList = className.split(' ');
            classList.forEach(function (c) {
                pane.classList.add(c);
            });
        }
        this._overlayContainer.getContainerElement().appendChild(pane);
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new cdk.DomPortalHost(pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param {?} pane DOM element for the overlay
     * @param {?} state
     * @return {?}
     */
    Overlay.prototype._createOverlayRef = function (pane, state$$1) {
        var /** @type {?} */ scrollStrategy = state$$1.scrollStrategy || this.scrollStrategies.noop();
        var /** @type {?} */ portalHost = this._createPortalHost(pane);
        return new OverlayRef(portalHost, pane, state$$1, scrollStrategy, this._ngZone);
    };
    return Overlay;
}());
Overlay.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
Overlay.ctorParameters = function () { return [
    { type: ScrollStrategyOptions, },
    { type: OverlayContainer, },
    { type: core.ComponentFactoryResolver, },
    { type: OverlayPositionBuilder, },
    { type: core.ApplicationRef, },
    { type: core.Injector, },
    { type: core.NgZone, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty$1(value) {
    return value != null && "" + value !== 'false';
}
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var hasV8BreakIterator = (typeof (Intl) !== 'undefined' && ((Intl)).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 * \@docs-private
 */
var Platform$1 = (function () {
    function Platform$$1() {
        this.isBrowser = typeof document === 'object' && !!document;
        /**
         * Layout Engines
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser &&
            (!!(((window)).chrome || hasV8BreakIterator) && !!CSS && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Browsers and Platform Types
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    return Platform$$1;
}());
Platform$1.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
Platform$1.ctorParameters = function () { return []; };
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
var InteractivityChecker = (function () {
    /**
     * @param {?} _platform
     */
    function InteractivityChecker(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    InteractivityChecker.prototype.isDisabled = function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    InteractivityChecker.prototype.isVisible = function (element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    InteractivityChecker.prototype.isTabbable = function (element) {
        // Nothing is tabbable on the the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        var /** @type {?} */ frameElement = (getWindow(element).frameElement);
        if (frameElement) {
            var /** @type {?} */ frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
        var /** @type {?} */ tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    };
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    InteractivityChecker.prototype.isFocusable = function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    return InteractivityChecker;
}());
InteractivityChecker.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
InteractivityChecker.ctorParameters = function () {
    return [
        { type: Platform$1, },
    ];
};
/**
 * Checks whether the specified element has any geometry / rectangles.
 * @param {?} element
 * @return {?}
 */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
/**
 * Gets whether an element's
 * @param {?} element
 * @return {?}
 */
function isNativeFormElement(element) {
    var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/**
 * Gets whether an element is an <input type="hidden">.
 * @param {?} element
 * @return {?}
 */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/**
 * Gets whether an element is an anchor that has an href attribute.
 * @param {?} element
 * @return {?}
 */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/**
 * Gets whether an element is an input element.
 * @param {?} element
 * @return {?}
 */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/**
 * Gets whether an element is an anchor element.
 * @param {?} element
 * @return {?}
 */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/**
 * Gets whether an element has a valid tabindex.
 * @param {?} element
 * @return {?}
 */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    var /** @type {?} */ tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 * @param {?} element
 * @return {?}
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var /** @type {?} */ tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/**
 * Checks whether the specified element is potentially tabbable on iOS
 * @param {?} element
 * @return {?}
 */
function isPotentiallyTabbableIOS(element) {
    var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
    var /** @type {?} */ inputType = nodeName === 'input' && ((element)).type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 * @param {?} element
 * @return {?}
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/**
 * Gets the parent window of a DOM node with regards of being inside of an iframe.
 * @param {?} node
 * @return {?}
 */
function getWindow(node) {
    return node.ownerDocument.defaultView || window;
}
/**
 * Utility class used to chain RxJS operators.
 *
 * This class is the concrete implementation, but the type used by the user when chaining
 * is StrictRxChain. The strict chain enforces types on the operators to the same level as
 * the prototype-added equivalents.
 */
var RxChain = (function () {
    /**
     * @param {?} _context
     */
    function RxChain(_context) {
        this._context = _context;
    }
    /**
     * Starts a new chain and specifies the initial `this` value.
     * @template T
     * @param {?} context Initial `this` value for the chain.
     * @return {?}
     */
    RxChain.from = function (context) {
        return new RxChain(context);
    };
    /**
     * Invokes an RxJS operator as a part of the chain.
     * @param {?} operator Operator to be invoked.
     * @param {...?} args Arguments to be passed to the operator.
     * @return {?}
     */
    RxChain.prototype.call = function (operator) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._context = operator.call.apply(operator, [this._context].concat(args));
        return this;
    };
    /**
     * Subscribes to the result of the chain.
     * @param {?} fn Callback to be invoked when the result emits a value.
     * @return {?}
     */
    RxChain.prototype.subscribe = function (fn) {
        return this._context.subscribe(fn);
    };
    /**
     * Returns the result of the chain.
     * @return {?}
     */
    RxChain.prototype.result = function () {
        return this._context;
    };
    return RxChain;
}());
var first$1$1 = (first.first);
var debounceTime$1$1 = (debounceTime.debounceTime);
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * NOTE: This class currently uses a very simple (naive) approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like tabIndex > 0, flex `order`, and shadow roots can cause to two to misalign.
 * This will be replaced with a more intelligent solution before the library is considered stable.
 */
var FocusTrap = (function () {
    /**
     * @param {?} _element
     * @param {?} _platform
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?=} deferAnchors
     */
    function FocusTrap(_element, _platform, _checker, _ngZone, deferAnchors) {
        if (deferAnchors === void 0) {
            deferAnchors = false;
        }
        this._element = _element;
        this._platform = _platform;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    Object.defineProperty(FocusTrap.prototype, "enabled", {
        /**
         * Whether the focus trap is active.
         * @return {?}
         */
        get: function () { return this._enabled; },
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            this._enabled = val;
            if (this._startAnchor && this._endAnchor) {
                this._startAnchor.tabIndex = this._endAnchor.tabIndex = this._enabled ? 0 : -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    FocusTrap.prototype.destroy = function () {
        if (this._startAnchor && this._startAnchor.parentNode) {
            this._startAnchor.parentNode.removeChild(this._startAnchor);
        }
        if (this._endAnchor && this._endAnchor.parentNode) {
            this._endAnchor.parentNode.removeChild(this._endAnchor);
        }
        this._startAnchor = this._endAnchor = null;
    };
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?}
     */
    FocusTrap.prototype.attachAnchors = function () {
        var _this = this;
        // If we're not on the browser, there can be no focus to trap.
        if (!this._platform.isBrowser) {
            return;
        }
        if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();
        }
        if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();
        }
        this._ngZone.runOutsideAngular(function () {
            ((_this._startAnchor)).addEventListener('focus', function () { return _this.focusLastTabbableElement(); }); /** @type {?} */
            ((_this._endAnchor)).addEventListener('focus', function () { return _this.focusFirstTabbableElement(); });
            if (_this._element.parentNode) {
                _this._element.parentNode.insertBefore(/** @type {?} */ ((_this._startAnchor)), _this._element);
                _this._element.parentNode.insertBefore(/** @type {?} */ ((_this._endAnchor)), _this._element.nextSibling);
            }
        });
    };
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element..
     * @return {?}
     */
    FocusTrap.prototype.focusInitialElementWhenReady = function () {
        var _this = this;
        this._executeOnStable(function () { return _this.focusInitialElement(); });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?}
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = function () {
        var _this = this;
        this._executeOnStable(function () { return _this.focusFirstTabbableElement(); });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?}
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = function () {
        var _this = this;
        this._executeOnStable(function () { return _this.focusLastTabbableElement(); });
    };
    /**
     * Get the specified boundary element of the trapped region.
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    FocusTrap.prototype._getRegionBoundary = function (bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var /** @type {?} */ markers = (this._element.querySelectorAll("[cdk-focus-region-" + bound + "], " +
            ("[cdk-focus-" + bound + "]")));
        for (var /** @type {?} */ i = 0; i < markers.length; i++) {
            if (markers[i].hasAttribute("cdk-focus-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-" + bound + "'," +
                    (" use 'cdk-focus-region-" + bound + "' instead."), markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    };
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?}
     */
    FocusTrap.prototype.focusInitialElement = function () {
        var /** @type {?} */ redirectToElement = (this._element.querySelector('[cdk-focus-initial]'));
        if (redirectToElement) {
            redirectToElement.focus();
        }
        else {
            this.focusFirstTabbableElement();
        }
    };
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?}
     */
    FocusTrap.prototype.focusFirstTabbableElement = function () {
        var /** @type {?} */ redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?}
     */
    FocusTrap.prototype.focusLastTabbableElement = function () {
        var /** @type {?} */ redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getFirstTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        var /** @type {?} */ children = root.children || root.childNodes;
        for (var /** @type {?} */ i = 0; i < children.length; i++) {
            var /** @type {?} */ tabbableChild = children[i].nodeType === Node.ELEMENT_NODE ?
                this._getFirstTabbableElement(/** @type {?} */ (children[i])) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getLastTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        var /** @type {?} */ children = root.children || root.childNodes;
        for (var /** @type {?} */ i = children.length - 1; i >= 0; i--) {
            var /** @type {?} */ tabbableChild = children[i].nodeType === Node.ELEMENT_NODE ?
                this._getLastTabbableElement(/** @type {?} */ (children[i])) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /**
     * Creates an anchor element.
     * @return {?}
     */
    FocusTrap.prototype._createAnchor = function () {
        var /** @type {?} */ anchor = document.createElement('div');
        anchor.tabIndex = this._enabled ? 0 : -1;
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        return anchor;
    };
    /**
     * Executes a function when the zone is stable.
     * @param {?} fn
     * @return {?}
     */
    FocusTrap.prototype._executeOnStable = function (fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            first$1$1.call(this._ngZone.onStable).subscribe(fn);
        }
    };
    return FocusTrap;
}());
/**
 * Factory that allows easy instantiation of focus traps.
 */
var FocusTrapFactory = (function () {
    /**
     * @param {?} _checker
     * @param {?} _platform
     * @param {?} _ngZone
     */
    function FocusTrapFactory(_checker, _platform, _ngZone) {
        this._checker = _checker;
        this._platform = _platform;
        this._ngZone = _ngZone;
    }
    /**
     * @param {?} element
     * @param {?=} deferAnchors
     * @return {?}
     */
    FocusTrapFactory.prototype.create = function (element, deferAnchors) {
        if (deferAnchors === void 0) {
            deferAnchors = false;
        }
        return new FocusTrap(element, this._platform, this._checker, this._ngZone, deferAnchors);
    };
    return FocusTrapFactory;
}());
FocusTrapFactory.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
FocusTrapFactory.ctorParameters = function () {
    return [
        { type: InteractivityChecker, },
        { type: Platform$1, },
        { type: core.NgZone, },
    ];
};
/**
 * Directive for trapping focus within a region.
 * @deprecated
 */
var FocusTrapDeprecatedDirective = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _focusTrapFactory
     */
    function FocusTrapDeprecatedDirective(_elementRef, _focusTrapFactory) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(FocusTrapDeprecatedDirective.prototype, "disabled", {
        /**
         * Whether the focus trap is active.
         * @return {?}
         */
        get: function () { return !this.focusTrap.enabled; },
        /**
         * @param {?} val
         * @return {?}
         */
        set: function (val) {
            this.focusTrap.enabled = !coerceBooleanProperty$1(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FocusTrapDeprecatedDirective.prototype.ngOnDestroy = function () {
        this.focusTrap.destroy();
    };
    /**
     * @return {?}
     */
    FocusTrapDeprecatedDirective.prototype.ngAfterContentInit = function () {
        this.focusTrap.attachAnchors();
    };
    return FocusTrapDeprecatedDirective;
}());
FocusTrapDeprecatedDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'cdk-focus-trap',
            },] },
];
/**
 * @nocollapse
 */
FocusTrapDeprecatedDirective.ctorParameters = function () {
    return [
        { type: core.ElementRef, },
        { type: FocusTrapFactory, },
    ];
};
FocusTrapDeprecatedDirective.propDecorators = {
    'disabled': [{ type: core.Input },],
};
/**
 * Directive for trapping focus within a region.
 */
var FocusTrapDirective = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _focusTrapFactory
     */
    function FocusTrapDirective(_elementRef, _focusTrapFactory) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(FocusTrapDirective.prototype, "enabled", {
        /**
         * Whether the focus trap is active.
         * @return {?}
         */
        get: function () { return this.focusTrap.enabled; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) { this.focusTrap.enabled = coerceBooleanProperty$1(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FocusTrapDirective.prototype.ngOnDestroy = function () {
        this.focusTrap.destroy();
    };
    /**
     * @return {?}
     */
    FocusTrapDirective.prototype.ngAfterContentInit = function () {
        this.focusTrap.attachAnchors();
    };
    return FocusTrapDirective;
}());
FocusTrapDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[cdkTrapFocus]',
                exportAs: 'cdkTrapFocus',
            },] },
];
/**
 * @nocollapse
 */
FocusTrapDirective.ctorParameters = function () {
    return [
        { type: core.ElementRef, },
        { type: FocusTrapFactory, },
    ];
};
FocusTrapDirective.propDecorators = {
    'enabled': [{ type: core.Input, args: ['cdkTrapFocus',] },],
};
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new core.InjectionToken('liveAnnouncerElement');
var LiveAnnouncer = (function () {
    /**
     * @param {?} elementToken
     * @param {?} platform
     */
    function LiveAnnouncer(elementToken, platform) {
        // Only do anything if we're on the browser platform.
        if (platform.isBrowser) {
            // We inject the live element as `any` because the constructor signature cannot reference
            // browser globals (HTMLElement) on non-browser environments, since having a class decorator
            // causes TypeScript to preserve the constructor signature types.
            this._liveElement = elementToken || this._createLiveElement();
        }
    }
    /**
     * Announces a message to screenreaders.
     * @param {?} message Message to be announced to the screenreader
     * @param {?=} politeness The politeness of the announcer element
     * @return {?}
     */
    LiveAnnouncer.prototype.announce = function (message, politeness) {
        var _this = this;
        if (politeness === void 0) {
            politeness = 'polite';
        }
        this._liveElement.textContent = '';
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        setTimeout(function () { return _this._liveElement.textContent = message; }, 100);
    };
    /**
     * Removes the aria-live element from the DOM.
     * @return {?}
     */
    LiveAnnouncer.prototype._removeLiveElement = function () {
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
        }
    };
    /**
     * @return {?}
     */
    LiveAnnouncer.prototype._createLiveElement = function () {
        var /** @type {?} */ liveEl = document.createElement('div');
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        document.body.appendChild(liveEl);
        return liveEl;
    };
    return LiveAnnouncer;
}());
LiveAnnouncer.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
LiveAnnouncer.ctorParameters = function () {
    return [
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] },] },
        { type: Platform$1, },
    ];
};
/**
 * @param {?} parentDispatcher
 * @param {?} liveElement
 * @param {?} platform
 * @return {?}
 */
function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentDispatcher, liveElement, platform) {
    return parentDispatcher || new LiveAnnouncer(liveElement, platform);
}
var LIVE_ANNOUNCER_PROVIDER = {
    // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
    provide: LiveAnnouncer,
    deps: [
        [new core.Optional(), new core.SkipSelf(), LiveAnnouncer],
        [new core.Optional(), new core.Inject(LIVE_ANNOUNCER_ELEMENT_TOKEN)],
        Platform$1,
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};
var PlatformModule$1 = (function () {
    function PlatformModule$$1() {
    }
    return PlatformModule$$1;
}());
PlatformModule$1.decorators = [
    { type: core.NgModule, args: [{
                providers: [Platform$1]
            },] },
];
/**
 * @nocollapse
 */
PlatformModule$1.ctorParameters = function () { return []; };
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var TAB = 9;
var ESCAPE = 27;
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
var ListKeyManager = (function () {
    /**
     * @param {?} _items
     */
    function ListKeyManager(_items) {
        this._items = _items;
        this._activeItemIndex = -1;
        this._tabOut = new Subject.Subject();
        this._wrap = false;
    }
    /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     *
     * @return {?} The ListKeyManager that the method was called on.
     */
    ListKeyManager.prototype.withWrap = function () {
        this._wrap = true;
        return this;
    };
    /**
     * Sets the active item to the item at the index specified.
     *
     * @param {?} index The index of the item to be set as active.
     * @return {?}
     */
    ListKeyManager.prototype.setActiveItem = function (index) {
        this._activeItemIndex = index;
        this._activeItem = this._items.toArray()[index];
    };
    /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    ListKeyManager.prototype.onKeydown = function (event) {
        switch (event.keyCode) {
            case DOWN_ARROW:
                this.setNextItemActive();
                break;
            case UP_ARROW:
                this.setPreviousItemActive();
                break;
            case TAB:
                // Note that we shouldn't prevent the default action on tab.
                this._tabOut.next();
                return;
            default:
                return;
        }
        event.preventDefault();
    };
    Object.defineProperty(ListKeyManager.prototype, "activeItemIndex", {
        /**
         * Index of the currently active item.
         * @return {?}
         */
        get: function () {
            return this._activeItemIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListKeyManager.prototype, "activeItem", {
        /**
         * The active item.
         * @return {?}
         */
        get: function () {
            return this._activeItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setFirstItemActive = function () {
        this._setActiveItemByIndex(0, 1);
    };
    /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setLastItemActive = function () {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    };
    /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setNextItemActive = function () {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    };
    /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setPreviousItemActive = function () {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    };
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItemIndex = function (index) {
        this._activeItemIndex = index;
    };
    Object.defineProperty(ListKeyManager.prototype, "tabOut", {
        /**
         * Observable that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         * @return {?}
         */
        get: function () {
            return this._tabOut.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @param {?} delta
     * @param {?=} items
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByDelta = function (delta, items) {
        if (items === void 0) {
            items = this._items.toArray();
        }
        this._wrap ? this._setActiveInWrapMode(delta, items)
            : this._setActiveInDefaultMode(delta, items);
    };
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @param {?} delta
     * @param {?} items
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInWrapMode = function (delta, items) {
        // when active item would leave menu, wrap to beginning or end
        this._activeItemIndex =
            (this._activeItemIndex + delta + items.length) % items.length;
        // skip all disabled menu items recursively until an enabled one is reached
        if (items[this._activeItemIndex].disabled) {
            this._setActiveInWrapMode(delta, items);
        }
        else {
            this.setActiveItem(this._activeItemIndex);
        }
    };
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @param {?} delta
     * @param {?} items
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInDefaultMode = function (delta, items) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta, items);
    };
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @param {?} index
     * @param {?} fallbackDelta
     * @param {?=} items
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByIndex = function (index, fallbackDelta, items) {
        if (items === void 0) {
            items = this._items.toArray();
        }
        if (!items[index]) {
            return;
        }
        while (items[index].disabled) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    };
    return ListKeyManager;
}());
var ActiveDescendantKeyManager = (function (_super) {
    __extends(ActiveDescendantKeyManager, _super);
    function ActiveDescendantKeyManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds active styles to the newly active item and removes active
     * styles from the previously active item.
     * @param {?} index
     * @return {?}
     */
    ActiveDescendantKeyManager.prototype.setActiveItem = function (index) {
        var _this = this;
        Promise.resolve().then(function () {
            if (_this.activeItem) {
                _this.activeItem.setInactiveStyles();
            }
            _super.prototype.setActiveItem.call(_this, index);
            if (_this.activeItem) {
                _this.activeItem.setActiveStyles();
            }
        });
    };
    return ActiveDescendantKeyManager;
}(ListKeyManager));
var FocusKeyManager = (function (_super) {
    __extends(FocusKeyManager, _super);
    /**
     * @param {?} items
     */
    function FocusKeyManager(items) {
        return _super.call(this, items) || this;
    }
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds focuses the newly active item.
     * @param {?} index
     * @return {?}
     */
    FocusKeyManager.prototype.setActiveItem = function (index) {
        _super.prototype.setActiveItem.call(this, index);
        if (this.activeItem) {
            this.activeItem.focus();
        }
    };
    return FocusKeyManager;
}(ListKeyManager));
var A11yModule = (function () {
    function A11yModule() {
    }
    return A11yModule;
}());
A11yModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, PlatformModule$1],
                declarations: [FocusTrapDirective, FocusTrapDeprecatedDirective],
                exports: [FocusTrapDirective, FocusTrapDeprecatedDirective],
                providers: [InteractivityChecker, FocusTrapFactory, LIVE_ANNOUNCER_PROVIDER]
            },] },
];
/**
 * @nocollapse
 */
A11yModule.ctorParameters = function () { return []; };
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 */
var DIR_DOCUMENT = new core.InjectionToken('md-dir-doc');
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality$1 = (function () {
    /**
     * @param {?=} _document
     */
    function Directionality$$1(_document) {
        this.value = 'ltr';
        this.change = new core.EventEmitter();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var bodyDir = _document.body ? _document.body.dir : null;
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            this.value = (bodyDir || htmlDir || 'ltr');
        }
    }
    return Directionality$$1;
}());
Directionality$1.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
Directionality$1.ctorParameters = function () {
    return [
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [DIR_DOCUMENT,] },] },
    ];
};
/**
 * @param {?} parentDirectionality
 * @param {?} _document
 * @return {?}
 */
function DIRECTIONALITY_PROVIDER_FACTORY(parentDirectionality, _document) {
    return parentDirectionality || new Directionality$1(_document);
}
var DIRECTIONALITY_PROVIDER = {
    // If there is already a Directionality available, use that. Otherwise, provide a new one.
    provide: Directionality$1,
    deps: [[new core.Optional(), new core.SkipSelf(), Directionality$1], [new core.Optional(), platformBrowser.DOCUMENT]],
    useFactory: DIRECTIONALITY_PROVIDER_FACTORY
};
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Would provide itself in case a component looks for the Directionality service
 */
var Dir = (function () {
    function Dir() {
        /**
         * Layout direction of the element.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new core.EventEmitter();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /**
         * \@docs-private
         * @return {?}
         */
        get: function () {
            return this._dir;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            var /** @type {?} */ old = this._dir;
            this._dir = v;
            if (old !== this._dir && this._isInitialized) {
                this.change.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /**
         * Current layout direction of the element.
         * @return {?}
         */
        get: function () { return this.dir; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this.dir = v; },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = function () {
        this._isInitialized = true;
    };
    return Dir;
}());
Dir.decorators = [
    { type: core.Directive, args: [{
                selector: '[dir]',
                // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
                exportAs: '$implicit',
                providers: [
                    { provide: Directionality$1, useExisting: Dir }
                ]
            },] },
];
/**
 * @nocollapse
 */
Dir.ctorParameters = function () { return []; };
Dir.propDecorators = {
    'change': [{ type: core.Output, args: ['dirChange',] },],
    'dir': [{ type: core.HostBinding, args: ['attr.dir',] }, { type: core.Input, args: ['dir',] },],
};
var BidiModule = (function () {
    function BidiModule() {
    }
    return BidiModule;
}());
BidiModule.decorators = [
    { type: core.NgModule, args: [{
                exports: [Dir],
                declarations: [Dir],
                providers: [
                    { provide: DIR_DOCUMENT, useExisting: platformBrowser.DOCUMENT },
                    Directionality$1,
                ]
            },] },
];
/**
 * @nocollapse
 */
BidiModule.ctorParameters = function () { return []; };
/**
 * The row template that can be used by the md-table. Should not be used outside of the
 * material library.
 */
var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
var BaseRowDef = (function () {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    function BaseRowDef(template, _differs) {
        this.template = template;
        this._differs = _differs;
        /**
         * Event stream that emits when changes are made to the columns.
         */
        this.columnsChange = new Subject.Subject();
        this.viewInitialized = false;
    }
    /**
     * @return {?}
     */
    BaseRowDef.prototype.ngAfterViewInit = function () {
        this.viewInitialized = true;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseRowDef.prototype.ngOnChanges = function (changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property.
        if (!this._columnsDiffer && changes['columns'].currentValue) {
            this._columnsDiffer = this._differs.find(changes['columns'].currentValue).create();
        }
    };
    /**
     * @return {?}
     */
    BaseRowDef.prototype.ngDoCheck = function () {
        if (!this.viewInitialized || !this._columnsDiffer || !this.columns) {
            return;
        }
        // Notify the table if there are any changes to the columns.
        var /** @type {?} */ changes = this._columnsDiffer.diff(this.columns);
        if (changes) {
            this.columnsChange.next();
        }
    };
    return BaseRowDef;
}());
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
var CdkHeaderRowDef = (function (_super) {
    __extends(CdkHeaderRowDef, _super);
    /**
     * @param {?} template
     * @param {?} _differs
     */
    function CdkHeaderRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    return CdkHeaderRowDef;
}(BaseRowDef));
CdkHeaderRowDef.decorators = [
    { type: core.Directive, args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef'],
            },] },
];
/**
 * @nocollapse
 */
CdkHeaderRowDef.ctorParameters = function () {
    return [
        { type: core.TemplateRef, },
        { type: core.IterableDiffers, },
    ];
};
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display.
 */
var CdkRowDef = (function (_super) {
    __extends(CdkRowDef, _super);
    /**
     * @param {?} template
     * @param {?} _differs
     */
    function CdkRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    return CdkRowDef;
}(BaseRowDef));
CdkRowDef.decorators = [
    { type: core.Directive, args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns'],
            },] },
];
/**
 * @nocollapse
 */
CdkRowDef.ctorParameters = function () {
    return [
        { type: core.TemplateRef, },
        { type: core.IterableDiffers, },
    ];
};
/**
 * Outlet for rendering cells inside of a row or header row.
 * \@docs-private
 */
var CdkCellOutlet = (function () {
    /**
     * @param {?} _viewContainer
     */
    function CdkCellOutlet(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    return CdkCellOutlet;
}());
CdkCellOutlet.decorators = [
    { type: core.Directive, args: [{ selector: '[cdkCellOutlet]' },] },
];
/**
 * @nocollapse
 */
CdkCellOutlet.ctorParameters = function () {
    return [
        { type: core.ViewContainerRef, },
    ];
};
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
var CdkHeaderRow = (function () {
    function CdkHeaderRow() {
    }
    return CdkHeaderRow;
}());
CdkHeaderRow.decorators = [
    { type: core.Component, args: [{
                selector: 'cdk-header-row',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row',
                },
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
CdkHeaderRow.ctorParameters = function () { return []; };
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
var CdkRow = (function () {
    function CdkRow() {
    }
    return CdkRow;
}());
CdkRow.decorators = [
    { type: core.Component, args: [{
                selector: 'cdk-row',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row',
                },
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
CdkRow.ctorParameters = function () { return []; };
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
var CdkCellDef = (function () {
    /**
     * @param {?} template
     */
    function CdkCellDef(template) {
        this.template = template;
    }
    return CdkCellDef;
}());
CdkCellDef.decorators = [
    { type: core.Directive, args: [{ selector: '[cdkCellDef]' },] },
];
/**
 * @nocollapse
 */
CdkCellDef.ctorParameters = function () {
    return [
        { type: core.TemplateRef, },
    ];
};
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var CdkHeaderCellDef = (function () {
    /**
     * @param {?} template
     */
    function CdkHeaderCellDef(template) {
        this.template = template;
    }
    return CdkHeaderCellDef;
}());
CdkHeaderCellDef.decorators = [
    { type: core.Directive, args: [{ selector: '[cdkHeaderCellDef]' },] },
];
/**
 * @nocollapse
 */
CdkHeaderCellDef.ctorParameters = function () {
    return [
        { type: core.TemplateRef, },
    ];
};
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
var CdkColumnDef = (function () {
    function CdkColumnDef() {
    }
    return CdkColumnDef;
}());
CdkColumnDef.decorators = [
    { type: core.Directive, args: [{ selector: '[cdkColumnDef]' },] },
];
/**
 * @nocollapse
 */
CdkColumnDef.ctorParameters = function () { return []; };
CdkColumnDef.propDecorators = {
    'name': [{ type: core.Input, args: ['cdkColumnDef',] },],
    'cell': [{ type: core.ContentChild, args: [CdkCellDef,] },],
    'headerCell': [{ type: core.ContentChild, args: [CdkHeaderCellDef,] },],
};
/**
 * Header cell template container that adds the right classes and role.
 */
var CdkHeaderCell = (function () {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     */
    function CdkHeaderCell(columnDef, elementRef, renderer) {
        this.columnDef = columnDef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, "cdk-column-" + columnDef.name);
    }
    return CdkHeaderCell;
}());
CdkHeaderCell.decorators = [
    { type: core.Directive, args: [{
                selector: 'cdk-header-cell',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader',
                },
            },] },
];
/**
 * @nocollapse
 */
CdkHeaderCell.ctorParameters = function () {
    return [
        { type: CdkColumnDef, },
        { type: core.ElementRef, },
        { type: core.Renderer2, },
    ];
};
/**
 * Cell template container that adds the right classes and role.
 */
var CdkCell = (function () {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     */
    function CdkCell(columnDef, elementRef, renderer) {
        this.columnDef = columnDef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, "cdk-column-" + columnDef.name);
    }
    return CdkCell;
}());
CdkCell.decorators = [
    { type: core.Directive, args: [{
                selector: 'cdk-cell',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell',
                },
            },] },
];
/**
 * @nocollapse
 */
CdkCell.ctorParameters = function () {
    return [
        { type: CdkColumnDef, },
        { type: core.ElementRef, },
        { type: core.Renderer2, },
    ];
};
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * \@docs-private
 * @param {?} id Id whose lookup failed.
 * @return {?}
 */
function getTableUnknownColumnError(id) {
    return new Error("cdk-table: Could not find column with id \"" + id + "\".");
}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * \@docs-private
 */
var RowPlaceholder = (function () {
    /**
     * @param {?} viewContainer
     */
    function RowPlaceholder(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return RowPlaceholder;
}());
RowPlaceholder.decorators = [
    { type: core.Directive, args: [{ selector: '[rowPlaceholder]' },] },
];
/**
 * @nocollapse
 */
RowPlaceholder.ctorParameters = function () {
    return [
        { type: core.ViewContainerRef, },
    ];
};
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * \@docs-private
 */
var HeaderRowPlaceholder = (function () {
    /**
     * @param {?} viewContainer
     */
    function HeaderRowPlaceholder(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return HeaderRowPlaceholder;
}());
HeaderRowPlaceholder.decorators = [
    { type: core.Directive, args: [{ selector: '[headerRowPlaceholder]' },] },
];
/**
 * @nocollapse
 */
HeaderRowPlaceholder.ctorParameters = function () {
    return [
        { type: core.ViewContainerRef, },
    ];
};
/**
 * The table template that can be used by the md-table. Should not be used outside of the
 * material library.
 */
var CDK_TABLE_TEMPLATE = "\n  <ng-container headerRowPlaceholder></ng-container>\n  <ng-container rowPlaceholder></ng-container>";
/**
 * A data table that connects with a data source to retrieve data of type T and renders
 * a header row and data rows. Updates the rows when new data is provided by the data source.
 */
var CdkTable = (function () {
    /**
     * @param {?} _differs
     * @param {?} _changeDetectorRef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} role
     */
    function CdkTable(_differs, _changeDetectorRef, elementRef, renderer, role) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new Subject.Subject();
        /**
         * Flag set to true after the component has been initialized.
         */
        this._isViewInitialized = false;
        /**
         * Latest data provided by the data source through the connect interface.
         */
        this._data = [];
        /**
         * Map of all the user's defined columns identified by name.
         * Contains the header and data-cell templates.
         */
        this._columnDefinitionsByName = new Map();
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */
        this.viewChange = new BehaviorSubject.BehaviorSubject({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            renderer.setAttribute(elementRef.nativeElement, 'role', 'grid');
        }
    }
    Object.defineProperty(CdkTable.prototype, "trackBy", {
        /**
         * @return {?}
         */
        get: function () { return this._trackByFn; },
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to ngFor trackBy function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (core.isDevMode() &&
                fn != null && typeof fn !== 'function' && (console) && (console.warn)) {
                console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
            }
            this._trackByFn = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTable.prototype, "dataSource", {
        /**
         * Provides a stream containing the latest data array to render. Influenced by the table's
         * stream of view window (what rows are currently on screen).
         * @return {?}
         */
        get: function () { return this._dataSource; },
        /**
         * @param {?} dataSource
         * @return {?}
         */
        set: function (dataSource) {
            if (this._dataSource !== dataSource) {
                this._switchDataSource(dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTable.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this.dataSource) {
            this.dataSource.disconnect(this);
        }
    };
    /**
     * @return {?}
     */
    CdkTable.prototype.ngOnInit = function () {
        // TODO(andrewseguin): Setup a listener for scroll events
        //   and emit the calculated view to this.viewChange
    };
    /**
     * @return {?}
     */
    CdkTable.prototype.ngAfterContentInit = function () {
        var _this = this;
        // TODO(andrewseguin): Throw an error if two columns share the same name
        this._columnDefinitions.forEach(function (columnDef) {
            _this._columnDefinitionsByName.set(columnDef.name, columnDef);
        });
        // Re-render the rows if any of their columns change.
        // TODO(andrewseguin): Determine how to only re-render the rows that have their columns changed.
        var /** @type {?} */ columnChangeEvents = this._rowDefinitions.map(function (rowDef) { return rowDef.columnsChange; });
        takeUntil.takeUntil.call(merge.merge.apply(void 0, columnChangeEvents), this._onDestroy).subscribe(function () {
            // Reset the data to an empty array so that renderRowChanges will re-render all new rows.
            _this._rowPlaceholder.viewContainer.clear();
            _this._dataDiffer.diff([]);
            _this._renderRowChanges();
        });
        // Re-render the header row if the columns change
        takeUntil.takeUntil.call(this._headerDefinition.columnsChange, this._onDestroy).subscribe(function () {
            _this._headerRowPlaceholder.viewContainer.clear();
            _this._renderHeaderRow();
        });
    };
    /**
     * @return {?}
     */
    CdkTable.prototype.ngAfterViewInit = function () {
        // Find and construct an iterable differ that can be used to find the diff in an array.
        this._dataDiffer = this._differs.find([]).create(this._trackByFn);
        this._isViewInitialized = true;
    };
    /**
     * @return {?}
     */
    CdkTable.prototype.ngDoCheck = function () {
        if (this._isViewInitialized && this.dataSource && !this._renderChangeSubscription) {
            this._renderHeaderRow();
            if (this.dataSource && !this._renderChangeSubscription) {
                this._observeRenderChanges();
            }
        }
    };
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row placeholder. Otherwise start listening for new data.
     * @param {?} dataSource
     * @return {?}
     */
    CdkTable.prototype._switchDataSource = function (dataSource) {
        this._data = [];
        if (this._dataSource) {
            this.dataSource.disconnect(this);
        }
        this._dataSource = dataSource;
        if (this._isViewInitialized) {
            if (this._renderChangeSubscription) {
                this._renderChangeSubscription.unsubscribe();
            }
            if (this._dataSource) {
                this._observeRenderChanges();
            }
            else {
                this._rowPlaceholder.viewContainer.clear();
            }
        }
    };
    /**
     * Set up a subscription for the data provided by the data source.
     * @return {?}
     */
    CdkTable.prototype._observeRenderChanges = function () {
        var _this = this;
        this._renderChangeSubscription = takeUntil.takeUntil.call(this.dataSource.connect(this), this._onDestroy)
            .subscribe(function (data) {
            _this._data = data;
            _this._renderRowChanges();
        });
    };
    /**
     * Create the embedded view for the header template and place it in the header row view container.
     * @return {?}
     */
    CdkTable.prototype._renderHeaderRow = function () {
        var /** @type {?} */ cells = this._getHeaderCellTemplatesForRow(this._headerDefinition);
        if (!cells.length) {
            return;
        }
        // TODO(andrewseguin): add some code to enforce that exactly
        //   one CdkCellOutlet was instantiated as a result
        //   of `createEmbeddedView`.
        this._headerRowPlaceholder.viewContainer
            .createEmbeddedView(this._headerDefinition.template, { cells: cells });
        cells.forEach(function (cell) {
            CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cell.template, {});
        });
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Check for changes made in the data and render each change (row added/removed/moved).
     * @return {?}
     */
    CdkTable.prototype._renderRowChanges = function () {
        var _this = this;
        var /** @type {?} */ changes = this._dataDiffer.diff(this._data);
        if (!changes) {
            return;
        }
        var /** @type {?} */ viewContainer = this._rowPlaceholder.viewContainer;
        changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
                _this._insertRow(_this._data[currentIndex], currentIndex);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                var /** @type {?} */ view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(/** @type {?} */ ((view)), currentIndex);
            }
        });
        this._updateRowContext();
    };
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     * @param {?} rowData
     * @param {?} index
     * @return {?}
     */
    CdkTable.prototype._insertRow = function (rowData, index) {
        // TODO(andrewseguin): Add when predicates to the row definitions
        //   to find the right template to used based on
        //   the data rather than choosing the first row definition.
        var /** @type {?} */ row = this._rowDefinitions.first;
        // Row context that will be provided to both the created embedded row view and its cells.
        var /** @type {?} */ context = { $implicit: rowData };
        // TODO(andrewseguin): add some code to enforce that exactly one
        //   CdkCellOutlet was instantiated as a result  of `createEmbeddedView`.
        this._rowPlaceholder.viewContainer.createEmbeddedView(row.template, context, index);
        // Insert empty cells if there is no data to improve rendering time.
        var /** @type {?} */ cells = rowData ? this._getCellTemplatesForRow(row) : [];
        cells.forEach(function (cell) {
            CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cell.template, context);
        });
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Updates the context for each row to reflect any data changes that may have caused
     * rows to be added, removed, or moved. The view container contains the same context
     * that was provided to each of its cells.
     * @return {?}
     */
    CdkTable.prototype._updateRowContext = function () {
        var /** @type {?} */ viewContainer = this._rowPlaceholder.viewContainer;
        for (var /** @type {?} */ index = 0, /** @type {?} */ count = viewContainer.length; index < count; index++) {
            var /** @type {?} */ viewRef = (viewContainer.get(index));
            viewRef.context.index = index;
            viewRef.context.count = count;
            viewRef.context.first = index === 0;
            viewRef.context.last = index === count - 1;
            viewRef.context.even = index % 2 === 0;
            viewRef.context.odd = index % 2 !== 0;
        }
    };
    /**
     * Returns the cell template definitions to insert into the header
     * as defined by its list of columns to display.
     * @param {?} headerDef
     * @return {?}
     */
    CdkTable.prototype._getHeaderCellTemplatesForRow = function (headerDef) {
        var _this = this;
        if (!headerDef.columns) {
            return [];
        }
        return headerDef.columns.map(function (columnId) {
            var /** @type {?} */ column = _this._columnDefinitionsByName.get(columnId);
            if (!column) {
                throw getTableUnknownColumnError(columnId);
            }
            return column.headerCell;
        });
    };
    /**
     * Returns the cell template definitions to insert in the provided row
     * as defined by its list of columns to display.
     * @param {?} rowDef
     * @return {?}
     */
    CdkTable.prototype._getCellTemplatesForRow = function (rowDef) {
        var _this = this;
        if (!rowDef.columns) {
            return [];
        }
        return rowDef.columns.map(function (columnId) {
            var /** @type {?} */ column = _this._columnDefinitionsByName.get(columnId);
            if (!column) {
                throw getTableUnknownColumnError(columnId);
            }
            return column.cell;
        });
    };
    return CdkTable;
}());
CdkTable.decorators = [
    { type: core.Component, args: [{
                selector: 'cdk-table',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table',
                },
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
CdkTable.ctorParameters = function () {
    return [
        { type: core.IterableDiffers, },
        { type: core.ChangeDetectorRef, },
        { type: core.ElementRef, },
        { type: core.Renderer2, },
        { type: undefined, decorators: [{ type: core.Attribute, args: ['role',] },] },
    ];
};
CdkTable.propDecorators = {
    'trackBy': [{ type: core.Input },],
    'dataSource': [{ type: core.Input },],
    '_rowPlaceholder': [{ type: core.ViewChild, args: [RowPlaceholder,] },],
    '_headerRowPlaceholder': [{ type: core.ViewChild, args: [HeaderRowPlaceholder,] },],
    '_columnDefinitions': [{ type: core.ContentChildren, args: [CdkColumnDef,] },],
    '_headerDefinition': [{ type: core.ContentChild, args: [CdkHeaderRowDef,] },],
    '_rowDefinitions': [{ type: core.ContentChildren, args: [CdkRowDef,] },],
};
/**
 * @abstract
 */
var DataSource = (function () {
    function DataSource() {
    }
    /**
     * Connects a collection viewer (such as a data-table) to this data source.
     * @abstract
     * @param {?} collectionViewer The component that exposes a view over the data provided by this
     *     data source.
     * @return {?} Observable that emits a new value when the data changes.
     */
    DataSource.prototype.connect = function (collectionViewer) { };
    /**
     * Disconnects a collection viewer (such as a data-table) from this data source. Can be used
     * to perform any clean-up or tear-down operations when a view is being destroyed.
     *
     * @abstract
     * @param {?} collectionViewer The component that exposes a view over the data provided by this
     *     data source.
     * @return {?}
     */
    DataSource.prototype.disconnect = function (collectionViewer) { };
    return DataSource;
}());
var EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    RowPlaceholder,
    HeaderRowPlaceholder,
];
var CdkTableModule = (function () {
    function CdkTableModule() {
    }
    return CdkTableModule;
}());
CdkTableModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                exports: [EXPORTED_DECLARATIONS],
                declarations: [EXPORTED_DECLARATIONS]
            },] },
];
/**
 * @nocollapse
 */
CdkTableModule.ctorParameters = function () { return []; };
/**
 * Throws an exception when attempting to attach a null portal to a host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * \@docs-private
 * @return {?}
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * \@docs-private
 * @return {?}
 */
function throwPortalHostAlreadyDisposedError() {
    throw Error('This PortalHost has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * \@docs-private
 * @return {?}
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalHost accepts either' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalHostError() {
    throw Error('Attempting to attach a portal to a null PortalHost');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * \@docs-privatew
 * @return {?}
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalHost`.
 * @abstract
 */
var Portal = (function () {
    function Portal() {
    }
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.attach = function (host) {
        if (host == null) {
            throwNullPortalHostError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return (host.attach(this));
    };
    /**
     * Detach this portal from its host
     * @return {?}
     */
    Portal.prototype.detach = function () {
        var /** @type {?} */ host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = (function (_super) {
    __extends(ComponentPortal, _super);
    /**
     * @param {?} component
     * @param {?=} viewContainerRef
     * @param {?=} injector
     */
    function ComponentPortal(component, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
var TemplatePortal$1 = (function (_super) {
    __extends(TemplatePortal$$1, _super);
    /**
     * @param {?} template
     * @param {?} viewContainerRef
     */
    function TemplatePortal$$1(template, viewContainerRef) {
        var _this = _super.call(this) || this;
        /**
         * Additional locals for the instantiated embedded view.
         * These locals can be seen as "exports" for the template, such as how ngFor has
         * index / event / odd.
         * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
         */
        _this.locals = new Map();
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        return _this;
    }
    Object.defineProperty(TemplatePortal$$1.prototype, "origin", {
        /**
         * @return {?}
         */
        get: function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} host
     * @param {?=} locals
     * @return {?}
     */
    TemplatePortal$$1.prototype.attach = function (host, locals) {
        this.locals = locals == null ? new Map() : locals;
        return _super.prototype.attach.call(this, host);
    };
    /**
     * @return {?}
     */
    TemplatePortal$$1.prototype.detach = function () {
        this.locals = new Map();
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal$$1;
}(Portal));
/**
 * Partial implementation of PortalHost that only deals with attaching either a
 * ComponentPortal or a TemplatePortal.
 * @abstract
 */
var BasePortalHost = (function () {
    function BasePortalHost() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
    }
    /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    BasePortalHost.prototype.hasAttached = function () {
        return !!this._attachedPortal;
    };
    /**
     * @param {?} portal
     * @return {?}
     */
    BasePortalHost.prototype.attach = function (portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalHostAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal$1) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throwUnknownPortalTypeError();
    };
    /**
     * @abstract
     * @template T
     * @param {?} portal
     * @return {?}
     */
    BasePortalHost.prototype.attachComponentPortal = function (portal) { };
    /**
     * @abstract
     * @param {?} portal
     * @return {?}
     */
    BasePortalHost.prototype.attachTemplatePortal = function (portal) { };
    /**
     * @return {?}
     */
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /**
     * @return {?}
     */
    BasePortalHost.prototype.dispose = function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    /**
     * @return {?}
     */
    BasePortalHost.prototype._invokeDisposeFn = function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalHost;
}());
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost$1 = (function (_super) {
    __extends(DomPortalHost$$1, _super);
    /**
     * @param {?} _hostDomElement
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     * @param {?} _defaultInjector
     */
    function DomPortalHost$$1(_hostDomElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?}
     */
    DomPortalHost$$1.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param {?} portal Portal to be attached.
     * @return {?}
     */
    DomPortalHost$$1.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        var /** @type {?} */ viewContainer = portal.viewContainerRef;
        var /** @type {?} */ viewRef = viewContainer.createEmbeddedView(portal.templateRef);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalHost the view can be added everywhere in the DOM (e.g Overlay Container)
        // To move the view to the specified host element. We just re-append the existing root nodes.
        viewRef.rootNodes.forEach(function (rootNode) { return _this._hostDomElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var /** @type {?} */ index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return new Map();
    };
    /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    DomPortalHost$$1.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this._hostDomElement.parentNode != null) {
            this._hostDomElement.parentNode.removeChild(this._hostDomElement);
        }
    };
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalHost$$1.prototype._getComponentRootNode = function (componentRef) {
        return (((componentRef.hostView)).rootNodes[0]);
    };
    return DomPortalHost$$1;
}(BasePortalHost));
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 *
 * Usage:
 * <ng-template portal #greeting>
 *   <p> Hello {{name}} </p>
 * </ng-template>
 */
var TemplatePortalDirective = (function (_super) {
    __extends(TemplatePortalDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TemplatePortalDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TemplatePortalDirective;
}(TemplatePortal$1));
TemplatePortalDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[cdk-portal], [cdkPortal], [portal]',
                exportAs: 'cdkPortal',
            },] },
];
/**
 * @nocollapse
 */
TemplatePortalDirective.ctorParameters = function () {
    return [
        { type: core.TemplateRef, },
        { type: core.ViewContainerRef, },
    ];
};
/**
 * Directive version of a PortalHost. Because the directive *is* a PortalHost, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * <ng-template [cdkPortalHost]="greeting"></ng-template>
 */
var PortalHostDirective = (function (_super) {
    __extends(PortalHostDirective, _super);
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _viewContainerRef
     */
    function PortalHostDirective(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /**
         * The attached portal.
         */
        _this._portal = null;
        return _this;
    }
    Object.defineProperty(PortalHostDirective.prototype, "_deprecatedPortal", {
        /**
         * @deprecated
         * @return {?}
         */
        get: function () { return this.portal; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this.portal = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalHostDirective.prototype, "portal", {
        /**
         * Portal associated with the Portal host.
         * @return {?}
         */
        get: function () {
            return this._portal;
        },
        /**
         * @param {?} portal
         * @return {?}
         */
        set: function (portal) {
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._portal = portal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PortalHostDirective.prototype.ngOnDestroy = function () {
        _super.prototype.dispose.call(this);
        this._portal = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalHost using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal host.
     * @return {?}
     */
    PortalHostDirective.prototype.attachComponentPortal = function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalHost.
        var /** @type {?} */ viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._portal = portal;
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param {?} portal Portal to be attached.
     * @return {?}
     */
    PortalHostDirective.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        this._viewContainerRef.createEmbeddedView(portal.templateRef);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._portal = portal;
        // TODO(jelbourn): return locals from view
        return new Map();
    };
    return PortalHostDirective;
}(BasePortalHost));
PortalHostDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[cdkPortalHost], [portalHost]',
                inputs: ['portal: cdkPortalHost']
            },] },
];
/**
 * @nocollapse
 */
PortalHostDirective.ctorParameters = function () {
    return [
        { type: core.ComponentFactoryResolver, },
        { type: core.ViewContainerRef, },
    ];
};
PortalHostDirective.propDecorators = {
    '_deprecatedPortal': [{ type: core.Input, args: ['portalHost',] },],
};
var PortalModule = (function () {
    function PortalModule() {
    }
    return PortalModule;
}());
PortalModule.decorators = [
    { type: core.NgModule, args: [{
                exports: [TemplatePortalDirective, PortalHostDirective],
                declarations: [TemplatePortalDirective, PortalHostDirective],
            },] },
];
/**
 * @nocollapse
 */
PortalModule.ctorParameters = function () { return []; };
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * \@docs-private
 */
var MdMutationObserverFactory = (function () {
    function MdMutationObserverFactory() {
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    MdMutationObserverFactory.prototype.create = function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    return MdMutationObserverFactory;
}());
MdMutationObserverFactory.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
MdMutationObserverFactory.ctorParameters = function () { return []; };
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
var ObserveContent = (function () {
    /**
     * @param {?} _mutationObserverFactory
     * @param {?} _elementRef
     */
    function ObserveContent(_mutationObserverFactory, _elementRef) {
        this._mutationObserverFactory = _mutationObserverFactory;
        this._elementRef = _elementRef;
        /**
         * Event emitted for each change in the element's content.
         */
        this.event = new core.EventEmitter();
        /**
         * Used for debouncing the emitted values to the observeContent event.
         */
        this._debouncer = new Subject.Subject();
    }
    /**
     * @return {?}
     */
    ObserveContent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.debounce > 0) {
            RxChain.from(this._debouncer)
                .call(debounceTime$1$1, this.debounce)
                .subscribe(function (mutations) { return _this.event.emit(mutations); });
        }
        else {
            this._debouncer.subscribe(function (mutations) { return _this.event.emit(mutations); });
        }
        this._observer = this._mutationObserverFactory.create(function (mutations) {
            _this._debouncer.next(mutations);
        });
        if (this._observer) {
            this._observer.observe(this._elementRef.nativeElement, {
                characterData: true,
                childList: true,
                subtree: true
            });
        }
    };
    /**
     * @return {?}
     */
    ObserveContent.prototype.ngOnDestroy = function () {
        if (this._observer) {
            this._observer.disconnect();
            this._debouncer.complete();
        }
    };
    return ObserveContent;
}());
ObserveContent.decorators = [
    { type: core.Directive, args: [{
                selector: '[cdkObserveContent]'
            },] },
];
/**
 * @nocollapse
 */
ObserveContent.ctorParameters = function () {
    return [
        { type: MdMutationObserverFactory, },
        { type: core.ElementRef, },
    ];
};
ObserveContent.propDecorators = {
    'event': [{ type: core.Output, args: ['cdkObserveContent',] },],
    'debounce': [{ type: core.Input },],
};
var ObserveContentModule = (function () {
    function ObserveContentModule() {
    }
    return ObserveContentModule;
}());
ObserveContentModule.decorators = [
    { type: core.NgModule, args: [{
                exports: [ObserveContent],
                declarations: [ObserveContent],
                providers: [MdMutationObserverFactory]
            },] },
];
/**
 * @nocollapse
 */
ObserveContentModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}
/**
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
 */
var defaultPositionList = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
];
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var OverlayOrigin = (function () {
    /**
     * @param {?} elementRef
     */
    function OverlayOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    return OverlayOrigin;
}());
OverlayOrigin.decorators = [
    { type: core.Directive, args: [{
                selector: '[nz-overlay-origin]',
                exportAs: 'nzOverlayOrigin',
            },] },
];
/**
 * @nocollapse
 */
OverlayOrigin.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
/**
 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
 */
var ConnectedOverlayDirective = (function () {
    /**
     * @param {?} _overlay
     * @param {?} _renderer
     * @param {?} templateRef
     * @param {?} viewContainerRef
     * @param {?} _dir
     */
    function ConnectedOverlayDirective(_overlay, _renderer, templateRef, viewContainerRef, _dir) {
        this._overlay = _overlay;
        this._renderer = _renderer;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._offsetX = 0;
        this._offsetY = 0;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = this._overlay.scrollStrategies.reposition();
        /**
         * Whether the overlay is open.
         */
        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */
        this.backdropClick = new core.EventEmitter();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new core.EventEmitter();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new core.EventEmitter();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new core.EventEmitter();
        this._templatePortal = new cdk.TemplatePortal(templateRef, viewContainerRef);
    }
    Object.defineProperty(ConnectedOverlayDirective.prototype, "offsetX", {
        /**
         * The offset in pixels for the overlay connection point on the x-axis
         * @return {?}
         */
        get: function () {
            return this._offsetX;
        },
        /**
         * @param {?} offsetX
         * @return {?}
         */
        set: function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._position.withOffsetX(offsetX);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "offsetY", {
        /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */
        get: function () {
            return this._offsetY;
        },
        /**
         * @param {?} offsetY
         * @return {?}
         */
        set: function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._position.withOffsetY(offsetY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "hasBackdrop", {
        /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */
        get: function () {
            return this._hasBackdrop;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._hasBackdrop = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "overlayRef", {
        /**
         * The associated overlay reference.
         * @return {?}
         */
        get: function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "dir", {
        /**
         * The element's layout direction.
         * @return {?}
         */
        get: function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ConnectedOverlayDirective.prototype.ngOnDestroy = function () {
        this._destroyOverlay();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ConnectedOverlayDirective.prototype.ngOnChanges = function (changes) {
        if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    };
    /**
     * Creates an overlay
     * @return {?}
     */
    ConnectedOverlayDirective.prototype._createOverlay = function () {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig(), this.paneClass);
    };
    /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    ConnectedOverlayDirective.prototype._buildConfig = function () {
        var /** @type {?} */ overlayConfig = new OverlayState();
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        overlayConfig.hasBackdrop = this.hasBackdrop;
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        this._position = (this._createPositionStrategy());
        overlayConfig.positionStrategy = this._position;
        overlayConfig.scrollStrategy = this.scrollStrategy;
        return overlayConfig;
    };
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    ConnectedOverlayDirective.prototype._createPositionStrategy = function () {
        var /** @type {?} */ pos = this.positions[0];
        var /** @type {?} */ originPoint = { originX: pos.originX, originY: pos.originY };
        var /** @type {?} */ overlayPoint = { overlayX: pos.overlayX, overlayY: pos.overlayY };
        var /** @type {?} */ strategy = this._overlay.position()
            .connectedTo(this.origin.elementRef, originPoint, overlayPoint)
            .withOffsetX(this.offsetX)
            .withOffsetY(this.offsetY);
        this._handlePositionChanges(strategy);
        return strategy;
    };
    /**
     * @param {?} strategy
     * @return {?}
     */
    ConnectedOverlayDirective.prototype._handlePositionChanges = function (strategy) {
        var _this = this;
        for (var /** @type {?} */ i = 1; i < this.positions.length; i++) {
            strategy.withFallbackPosition({ originX: this.positions[i].originX, originY: this.positions[i].originY }, { overlayX: this.positions[i].overlayX, overlayY: this.positions[i].overlayY });
        }
        this._positionSubscription =
            strategy.onPositionChange.subscribe(function (pos) { return _this.positionChange.emit(pos); });
    };
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    ConnectedOverlayDirective.prototype._attachOverlay = function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay();
        }
        this._position.withDirection(this.dir);
        this._overlayRef.getState().direction = this.dir;
        this._initEscapeListener();
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function () {
                _this.backdropClick.emit();
            });
        }
    };
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    ConnectedOverlayDirective.prototype._detachOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
            this._backdropSubscription = null;
        }
        if (this._escapeListener) {
            this._escapeListener();
        }
    };
    /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    ConnectedOverlayDirective.prototype._destroyOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
        if (this._positionSubscription) {
            this._positionSubscription.unsubscribe();
        }
        if (this._escapeListener) {
            this._escapeListener();
        }
    };
    /**
     * Sets the event listener that closes the overlay when pressing Escape.
     * @return {?}
     */
    ConnectedOverlayDirective.prototype._initEscapeListener = function () {
        var _this = this;
        this._escapeListener = this._renderer.listen('document', 'keydown', function (event) {
            if (event.keyCode === ESCAPE) {
                _this._detachOverlay();
            }
        });
    };
    return ConnectedOverlayDirective;
}());
ConnectedOverlayDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[nz-connected-overlay]',
                exportAs: 'nzConnectedOverlay'
            },] },
];
/**
 * @nocollapse
 */
ConnectedOverlayDirective.ctorParameters = function () { return [
    { type: Overlay, },
    { type: core.Renderer2, },
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
    { type: cdk.Directionality, decorators: [{ type: core.Optional },] },
]; };
ConnectedOverlayDirective.propDecorators = {
    'origin': [{ type: core.Input },],
    'positions': [{ type: core.Input },],
    'offsetX': [{ type: core.Input },],
    'offsetY': [{ type: core.Input },],
    'width': [{ type: core.Input },],
    'height': [{ type: core.Input },],
    'minWidth': [{ type: core.Input },],
    'minHeight': [{ type: core.Input },],
    'backdropClass': [{ type: core.Input },],
    'paneClass': [{ type: core.Input },],
    'scrollStrategy': [{ type: core.Input },],
    'open': [{ type: core.Input },],
    'hasBackdrop': [{ type: core.Input },],
    'backdropClick': [{ type: core.Output },],
    'positionChange': [{ type: core.Output },],
    'attach': [{ type: core.Output },],
    'detach': [{ type: core.Output },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The FullscreenOverlayContainer is the alternative to OverlayContainer
 * that supports correct displaying of overlay elements in Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 * It should be provided in the root component that way:
 * providers: [
 *   {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
 * ],
 */
var FullscreenOverlayContainer = (function (_super) {
    __extends(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._createContainer = function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = function () {
        if (!this._containerElement) {
            return;
        }
        var /** @type {?} */ fullscreenElement = this.getFullscreenElement();
        var /** @type {?} */ parent = fullscreenElement || document.body;
        parent.appendChild(this._containerElement);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = function (fn) {
        if (document.fullscreenEnabled) {
            document.addEventListener('fullscreenchange', fn);
        }
        else if (document.webkitFullscreenEnabled) {
            document.addEventListener('webkitfullscreenchange', fn);
        }
        else if (((document)).mozFullScreenEnabled) {
            document.addEventListener('mozfullscreenchange', fn);
        }
        else if (((document)).msFullscreenEnabled) {
            document.addEventListener('MSFullscreenChange', fn);
        }
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.getFullscreenElement = function () {
        return document.fullscreenElement ||
            document.webkitFullscreenElement ||
            ((document)).mozFullScreenElement ||
            ((document)).msFullscreenElement ||
            null;
    };
    return FullscreenOverlayContainer;
}(OverlayContainer));
FullscreenOverlayContainer.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
FullscreenOverlayContainer.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    VIEWPORT_RULER_PROVIDER,
    OVERLAY_CONTAINER_PROVIDER,
];
var OverlayModule = (function () {
    function OverlayModule() {
    }
    return OverlayModule;
}());
OverlayModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [ScrollDispatchModule],
                exports: [ConnectedOverlayDirective, OverlayOrigin, ScrollDispatchModule],
                declarations: [ConnectedOverlayDirective, OverlayOrigin],
                providers: [OVERLAY_PROVIDERS],
            },] },
];
/**
 * @nocollapse
 */
OverlayModule.ctorParameters = function () { return []; };
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
                // Services
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
    { type: core.NgModule, args: [{
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
                    AtTheadDirective,
                    AtTdDirective,
                    BreadcrumbComponent,
                    AtBreadItemDirective,
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
                    CalendarComponent,
                    DatetimepickerComponent,
                    TimeComponent,
                    CardComponent,
                    AtFormatPipe,
                    TabComponent,
                    TabContentComponent,
                    TabSetComponent
                ],
                entryComponents: [NotificationComponent, NotificationContainerComponent,
                    MessageContainerComponent, MessageComponent,
                    ModalComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    // BrowserModule,
                    OverlayModule,
                ],
                providers: [AtGlobalMonitorService]
            },] },
];
/**
 * @nocollapse
 */
AtModule.ctorParameters = function () { return []; };
var AT_ROOT_CONFIG = new core.InjectionToken('AtRootConfig');

exports.TabComponent = TabComponent;
exports.ButtonComponent = ButtonComponent;
exports.HollowDirective = HollowDirective;
exports.ButtonGroupComponent = ButtonGroupComponent;
exports.MenuComponent = MenuComponent;
exports.MenuItemComponent = MenuItemComponent;
exports.SubMenuComponent = SubMenuComponent;
exports.MenuItemGroupComponent = MenuItemGroupComponent;
exports.MenuListComponent = MenuListComponent;
exports.RadioGroupComponent = RadioGroupComponent;
exports.RadioComponent = RadioComponent;
exports.InlineMenuComponent = InlineMenuComponent;
exports.RowComponent = RowComponent;
exports.ColComponent = ColComponent;
exports.TagComponent = TagComponent;
exports.IconComponent = IconComponent;
exports.CheckboxComponent = CheckboxComponent;
exports.CheckboxGroupComponent = CheckboxGroupComponent;
exports.InputComponent = InputComponent;
exports.SelectComponent = SelectComponent;
exports.RadioButtonComponent = RadioButtonComponent;
exports.SwitchComponent = SwitchComponent;
exports.OptionComponent = OptionComponent;
exports.SliderComponent = SliderComponent;
exports.TextareaComponent = TextareaComponent;
exports.DropdownComponent = DropdownComponent;
exports.DropdownMenuItemComponent = DropdownMenuItemComponent;
exports.DropMenuListComponent = DropMenuListComponent;
exports.NotificationComponent = NotificationComponent;
exports.ComponentCreatorBase = ComponentCreatorBase;
exports.NotificationContainerComponent = NotificationContainerComponent;
exports.NotificationBaseService = NotificationBaseService;
exports.AtNotificationService = AtNotificationService;
exports.AlertComponent = AlertComponent;
exports.BadgeComponent = BadgeComponent;
exports.ModalComponent = ModalComponent;
exports.AtGlobalMonitorService = AtGlobalMonitorService;
exports.AtModalService = AtModalService;
exports.ModalBaseService = ModalBaseService;
exports.TableComponent = TableComponent;
exports.AtTbodyDirective = AtTbodyDirective;
exports.AtTdDirective = AtTdDirective;
exports.AtThDirective = AtThDirective;
exports.AtTbodyTrDirective = AtTbodyTrDirective;
exports.AtTheadDirective = AtTheadDirective;
exports.PagenationComponent = PagenationComponent;
exports.BreadcrumbComponent = BreadcrumbComponent;
exports.AtBreadItemDirective = AtBreadItemDirective;
exports.MessageContainerComponent = MessageContainerComponent;
exports.MessageComponent = MessageComponent;
exports.AtMessageService = AtMessageService;
exports.AtMessageContainerService = AtMessageContainerService;
exports.PopoverComponent = PopoverComponent;
exports.ProgressComponent = ProgressComponent;
exports.TooltipComponent = TooltipComponent;
exports.FormComponent = FormComponent;
exports.AtFormDirective = AtFormDirective;
exports.AtFormItemDirective = AtFormItemDirective;
exports.AtFormLabelDirective = AtFormLabelDirective;
exports.AtFormContentDirective = AtFormContentDirective;
exports.AtFormErrorDirective = AtFormErrorDirective;
exports.AtFormFeedbackDirective = AtFormFeedbackDirective;
exports.DatetimepickerComponent = DatetimepickerComponent;
exports.CalendarComponent = CalendarComponent;
exports.TimeComponent = TimeComponent;
exports.CardComponent = CardComponent;
exports.AtModule = AtModule;
exports.AT_ROOT_CONFIG = AT_ROOT_CONFIG;
exports.ɵb = DropDownAnimation;
exports.ɵc = FadeAnimation;
exports.ɵa = TagAnimation;
exports.ɵbe = ComponentCreator;
exports.ɵm = OVERLAY_PROVIDERS;
exports.ɵn = OverlayModule;
exports.ɵo = Overlay;
exports.ɵr = OVERLAY_CONTAINER_PROVIDER;
exports.ɵq = OVERLAY_CONTAINER_PROVIDER_FACTORY;
exports.ɵp = OverlayContainer;
exports.ɵt = ConnectedOverlayDirective;
exports.ɵs = OverlayOrigin;
exports.ɵbd = OverlayPositionBuilder;
exports.ɵw = VIEWPORT_RULER_PROVIDER;
exports.ɵv = VIEWPORT_RULER_PROVIDER_FACTORY;
exports.ɵu = ViewportRuler;
exports.ɵx = ScrollDispatchModule;
exports.ɵbb = SCROLL_DISPATCHER_PROVIDER;
exports.ɵba = SCROLL_DISPATCHER_PROVIDER_FACTORY;
exports.ɵz = ScrollDispatcher;
exports.ɵbc = ScrollStrategyOptions;
exports.ɵy = Scrollable;
exports.ɵe = AtFormatPipe;
exports.ɵd = DropdownDirective;
exports.ɵj = AtTabInkDirective;
exports.ɵh = TabBodyComponent;
exports.ɵg = TabContentComponent;
exports.ɵi = TabHeaderComponent;
exports.ɵl = TabLabelDirective;
exports.ɵk = TabNavsComponent;
exports.ɵf = TabSetComponent;
exports.CommonModule = common.CommonModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
