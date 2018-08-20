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
class ButtonComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
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
    /**
     * @param {?} type
     * @return {?}
     */
    set atType(type) {
        this._type = type;
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    get atType() {
        return this._type;
    }
    /**
     * @param {?} shape
     * @return {?}
     */
    set atShape(shape) {
        this._shape = shape;
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    get atShape() {
        return this._shape;
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    set atIcon(icon) {
        this._icon = icon;
    }
    /**
     * @return {?}
     */
    get atIcon() {
        return this._icon;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set iconLoading(value) {
        this._iconLoading = value;
        value == false ? this._icon = null : this._icon = 'at-btn__loading icon-loader';
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        this._size = value;
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    _setClassMap() {
        this._classList.forEach(_className => {
            this._renderer.removeClass(this._el, _className);
        });
        this._classList = [
            this.atType && `${this._prefixCls}--${this.atType}`,
            this.atShape && `${this._prefixCls}--${this.atShape}`,
            this.size && `${this._prefixCls}--${this.size}`
        ].filter((item) => {
            return !!item;
        });
        this._classList.forEach(_className => {
            this._renderer.addClass(this._el, _className);
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // console.log(this.text)
        this.showText = ((this.text.nativeElement.innerText || []).length > 0 || (this.text.nativeElement.children || []).length > 0);
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[atButton]',
                template: `<i *ngIf="atIcon != null" class="at-btn__icon icon {{atIcon}}"></i>
  <span #text [hidden]="!showText" class="at-btn__text">
  <ng-content></ng-content>
</span>

  `,
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
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
class HollowDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el, `at-btn--${this.atType}--hollow`);
    }
}
HollowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hollow]'
            },] },
];
/** @nocollapse */
HollowDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
HollowDirective.propDecorators = {
    "atType": [{ type: Input, args: ['atType',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonGroupComponent {
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
/** @nocollapse */
ButtonGroupComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MenuComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get theme() {
        return this._theme;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set theme(value) {
        this._theme = value;
    }
    /**
     * @return {?}
     */
    get atType() {
        return this._atType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atType(value) {
        this._atType = value;
    }
    /**
     * @return {?}
     */
    get verticalClass() {
        return this.atType == 'vertical';
    }
    /**
     * @return {?}
     */
    get horizontalClass() {
        return this.atType == 'horizontal';
    }
    /**
     * @return {?}
     */
    get inlineClass() {
        return this.atType == 'inline';
    }
    /**
     * @return {?}
     */
    get darkTheme() {
        return this.theme == 'dark';
    }
    /**
     * @return {?}
     */
    get lightTheme() {
        return this.theme == 'light';
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[atMenu]',
                template: `<div selector></div>
  <ng-content ></ng-content>
  `,
            },] },
];
/** @nocollapse */
MenuComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
MenuComponent.propDecorators = {
    "theme": [{ type: Input, args: ['theme',] },],
    "atType": [{ type: Input },],
    "verticalClass": [{ type: HostBinding, args: [`class.at-menu--vertical`,] },],
    "horizontalClass": [{ type: HostBinding, args: [`class.at-menu--horizontal`,] },],
    "inlineClass": [{ type: HostBinding, args: [`class.at-menu--inline`,] },],
    "darkTheme": [{ type: HostBinding, args: ['class.at-menu--dark',] },],
    "lightTheme": [{ type: HostBinding, args: ['class.at-menu--light',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MenuItemComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
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
    ngOnInit() {
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
MenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[atMenuItem]',
                template: `<ng-content></ng-content>
`,
            },] },
];
/** @nocollapse */
MenuItemComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
MenuItemComponent.propDecorators = {
    "item_class": [{ type: HostBinding, args: [`class.at-menu__item`,] },],
    "setActive": [{ type: HostListener, args: ['click',] },],
    "activeCls": [{ type: HostBinding, args: ['class.at-menu__item--active',] },],
    "active": [{ type: Input, args: ['active',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SubMenuComponent {
    /**
     * @param {?} _elementRef
     * @param {?} parent
     * @param {?} _renderer
     */
    constructor(_elementRef, parent, _renderer) {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get expandState() {
        if (this.isOpen && this.parent.atType == 'inline') {
            return 'expand';
        }
        return null;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        this._isOpen = value;
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
        return this.active;
    }
    /**
     * @return {?}
     */
    get OpenCls() {
        return this.isOpen;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this._active = active;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseEnterEvent(e) {
        if (this.parent._atType === 'inline')
            return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.resetDropDownPosition(e);
            this.isOpen = true;
        }, 200);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseLeaveEvent(e) {
        if (this.parent._atType === 'inline')
            return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.isOpen = false;
        }, 200);
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    resetDropDownPosition(e) {
        let /** @type {?} */ left = 'initial';
        let /** @type {?} */ right = '0';
        let /** @type {?} */ attributes = Array.from(this._elementRef.nativeElement.parentNode.attributes).map(a => {
            return a['name'];
        });
        if (this.parent.atType == 'horizontal') {
            let /** @type {?} */ height = this._elementRef.nativeElement.offsetHeight;
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
    }
    /**
     * @return {?}
     */
    show() {
        this._isOpen = !this._isOpen;
    }
}
SubMenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[atSubMenu]',
                template: `
    <div class="at-menu__submenu-title"
         (mouseenter)="onMouseEnterEvent($event)"
         (mouseleave)="onMouseLeaveEvent($event)"
         (click)="show()"
    >
      <ng-content select="[title]"></ng-content>
    </div>
    <div
      *ngIf="isOpen && parent.atType != 'inline'"
      [ngStyle]="{'left': _popoverCss.left ,'right': _popoverCss.right,'top': _popoverCss.top}"
      (mouseenter)="onMouseEnterEvent($event)"
      (mouseleave)="onMouseLeaveEvent($event)"
      class="at-dropdown__popover">
      <ng-content></ng-content>
    </div>
    <!--<ng-content [@slide-up] *ngIf="isOpen" select="[inlineMenu]"></ng-content>-->

    <div
      [@fadeAnimation]
      [@expandAnimation]="expandState"
      *ngIf="isOpen">
      <ng-content select="[inlineMenu]"></ng-content>
    </div>
  `,
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
SubMenuComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: MenuComponent, decorators: [{ type: Inject, args: [MenuComponent,] },] },
    { type: Renderer2, },
];
SubMenuComponent.propDecorators = {
    "isOpen": [{ type: Input },],
    "item_class": [{ type: HostBinding, args: [`class.at-menu__submenu`,] },],
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
class MenuItemGroupComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MenuListComponent {
    constructor() {
        this.menu = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MenuListComponent.decorators = [
    { type: Component, args: [{
                selector: '[atMenuList]',
                template: `<ng-content></ng-content>
`,
            },] },
];
/** @nocollapse */
MenuListComponent.ctorParameters = () => [];
MenuListComponent.propDecorators = {
    "menu": [{ type: HostBinding, args: ['class.at-dropdown-menu',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RadioGroupComponent {
    constructor() {
        this._size = 'common';
        this.radios = [];
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        this._size = value;
    }
    /**
     * @param {?} radio
     * @return {?}
     */
    addRadio(radio) {
        this.radios.push(radio);
    }
    /**
     * @param {?} radioComponent
     * @return {?}
     */
    selectRadio(radioComponent) {
        this.updateValue(radioComponent.atValue);
        this.onChange(radioComponent.atValue);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateValue(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        if (this._value === value) {
            return;
        }
        this._value = value;
        this.radios.forEach((item) => {
            item.checked = item.atValue === this._value;
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.radios.forEach(radio => {
            if (this.size) {
                radio._renderer.addClass(radio._el, `${radio._prefixCls}--${this.size}`);
            }
        });
    }
}
RadioGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'atRadioGroup',
                template: `<div class="at-radio-group">
    <ng-content>

    </ng-content>
  </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RadioGroupComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
RadioGroupComponent.ctorParameters = () => [];
RadioGroupComponent.propDecorators = {
    "size": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RadioComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _RadioGroup
     * @param {?} _renderer
     */
    constructor(_elementRef, _RadioGroup, _renderer) {
        this._elementRef = _elementRef;
        this._RadioGroup = _RadioGroup;
        this._renderer = _renderer;
        this._checked = false;
        this._disabled = false;
        this._prefixCls = 'at-radio';
        this._RadioGroup.addRadio(this);
        this._el = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get atValue() {
        return this._atValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atValue(value) {
        this._atValue = value;
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
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
        this._checked = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el, `${this._prefixCls}`);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.preventDefault();
        if (!this._disabled) {
            this._checked = true;
            this._RadioGroup.selectRadio(this);
        }
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: '[atRadio]',
                encapsulation: ViewEncapsulation.None,
                template: `<span class="at-radio__input">
    <span class="at-radio__inner" [ngClass]="{'at-radio--checked':checked ,'at-radio--disabled': disabled}"></span>
    <input type="radio" [disabled]="disabled" class="at-radio__original" [(ngModel)]="checked"></span>
  <span class="at-radio__label">
    <ng-content>

    </ng-content>
  </span>

  `,
            },] },
];
/** @nocollapse */
RadioComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: RadioGroupComponent, },
    { type: Renderer2, },
];
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
class InlineMenuComponent {
    constructor() {
        this.at_menu = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
InlineMenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[inlineMenu]',
                template: `<ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
InlineMenuComponent.ctorParameters = () => [];
InlineMenuComponent.propDecorators = {
    "at_menu": [{ type: HostBinding, args: ['class.at-menu',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._classList = [];
        this._noGutter = false;
        this._reverse = false;
        this._el = this._elementRef.nativeElement;
        this._renderer.addClass(this._el, 'row');
        this._renderer.addClass(this._el, 'at-row');
    }
    /**
     * @return {?}
     */
    get reverse() {
        return this._reverse;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set reverse(value) {
        this._reverse = value;
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    get noGutter() {
        return this._noGutter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set noGutter(value) {
        this._noGutter = value;
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    get alignType() {
        return /** @type {?} */ ((this._alignType && `flex-${this._alignType}`));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set alignType(value) {
        this._alignType = value;
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    get flexType() {
        return /** @type {?} */ ((this._flexType && `flex-${this._flexType}`));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set flexType(value) {
        this._flexType = value;
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    _setClassMap() {
        this._classList.forEach(_className => {
            this._renderer.removeClass(this._el, _className);
        });
        this._classList = [
            this.flexType && `${this.flexType}`,
            this.alignType && `${this.alignType}`,
            this.reverse && `reverse`,
            this.noGutter && 'no-gutter'
        ].filter((item) => {
            return !!item;
        });
        this._classList.forEach(_className => {
            this._renderer.addClass(this._el, _className);
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RowComponent.decorators = [
    { type: Component, args: [{
                selector: '[atRow]',
                template: `<ng-content></ng-content>
`,
            },] },
];
/** @nocollapse */
RowComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
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
class ColComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._classList = [];
        this._col_type = 'md';
        this._el = this._elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set colType(value) {
        this._col_type = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get colType() {
        return this._col_type;
    }
    /**
     * @return {?}
     */
    get span() {
        return this._span;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set span(value) {
        this._span = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get offset() {
        return this._offset;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set offset(value) {
        this._offset = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        this._classList.forEach(_className => {
            this._renderer.removeClass(this._el, _className);
        });
        this._classList = [
            this.span && `col-${this.colType}-${this.span}`,
            this.offset && `col-${this.colType}-offset-${this.offset}`
        ];
        this._classList = this._classList.filter((item) => {
            return !!item;
        });
        this._classList.forEach(_className => {
            this._renderer.addClass(this._el, _className);
        });
    }
}
ColComponent.decorators = [
    { type: Component, args: [{
                selector: '[atCol]',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
ColComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
ColComponent.propDecorators = {
    "colType": [{ type: Input },],
    "span": [{ type: Input },],
    "offset": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TagAnimation = trigger('tagAnimation', [
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
const tagThemes = ['default', 'primary', 'success', 'error', 'warning'];
class TagComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
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
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._color = value;
        this._setClassMap();
    }
    /**
     * @return {?}
     */
    get closeable() {
        return this._closeable;
    }
    /**
     * @return {?}
     */
    get closed() {
        return this._closed;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set closed(value) {
        this._closed = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set closeable(value) {
        this._closeable = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    _setClassMap() {
        if (this.tagSpan) {
            this.viewChecked = true;
            this._renderer.addClass(this.tagSpan.nativeElement, this._prefixCls);
            this._classList.forEach(_className => {
                this._renderer.removeClass(this.tagSpan.nativeElement, _className);
            });
            this._classList = [
                tagThemes.includes(this.color) && `${this._prefixCls}--${this.color}`,
            ].filter((item) => {
                return !!item;
            });
            this._classList.forEach(_className => {
                this._renderer.addClass(this.tagSpan.nativeElement, _className);
            });
            //set other colors
            if (!tagThemes.includes(this.color)) {
                this._renderer.setStyle(this.tagSpan.nativeElement, 'background-color', this.color);
                this._renderer.setStyle(this.tagSpan.nativeElement, 'border-color', this.color);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (!this.viewChecked) {
            this._setClassMap();
        }
    }
    /**
     * @return {?}
     */
    closeTag() {
        this.closed = true;
        this.onClose.emit(this.closed);
    }
}
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTag',
                template: `<span #tag *ngIf="!closed"
                  [@tagAnimation]
  >
  <span class="at-tag__text">
    <ng-content></ng-content>
    <i class="icon icon-x at-tag__close" *ngIf="closeable" (click)="closeTag()"></i>
</span>

</span>

  `,
                animations: [
                    TagAnimation
                ],
            },] },
];
/** @nocollapse */
TagComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
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
class IconComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'atIcon',
                template: `<i [ngStyle]="{'font-size':size+'px'}" class="icon icon-{{type}}"></i>
  `,
            },] },
];
/** @nocollapse */
IconComponent.ctorParameters = () => [];
IconComponent.propDecorators = {
    "type": [{ type: Input },],
    "size": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CheckboxComponent {
    constructor() {
        this._checked = false;
        this._atDisabled = false;
        this.changeCheck = new EventEmitter();
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    get atDisabled() {
        return this._atDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atDisabled(value) {
        this._atDisabled = value;
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @return {?}
     */
    get label() {
        return this._label;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set label(value) {
        this._label = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} e
     * @return {?}
     */
    check(e) {
        e.preventDefault();
        if (!this.atDisabled) {
            this._checked = !this._checked;
            this.onChange(this._checked);
            this.changeCheck.emit(this._checked);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._checked = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCheckbox',
                template: `<label (click)="check($event)"
                    [ngClass]="{'at-checkbox--checked': checked,'at-checkbox--disabled': atDisabled}"
                    class="at-checkbox">

  <span class="at-checkbox__input"><span
    class="at-checkbox__inner"></span>

  <input type="checkbox" class="at-checkbox__original"></span>

    <span class="at-checkbox__label">{{label}}</span>
  </label>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    "atDisabled": [{ type: Input },],
    "changeCheck": [{ type: Output },],
    "label": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CheckboxGroupComponent {
    constructor() {
        this._checkList = [];
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    changeList() {
        this.onChange(this._checkList);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._checkList = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
    }
}
CheckboxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCheckboxGroup',
                template: `<div class="at-checkbox-group">
  <atCheckbox *ngFor="let option of _checkList" [label]="option.label"
              [(ngModel)]="option.checked"
              (changeCheck)="changeList()">

  </atCheckbox>
</div>
`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxGroupComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
CheckboxGroupComponent.ctorParameters = () => [];
CheckboxGroupComponent.propDecorators = {
    "checkbox": [{ type: ContentChildren, args: [CheckboxComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InputComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set max(value) {
        this._max = value;
    }
    /**
     * @return {?}
     */
    get min() {
        return this._min;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set min(value) {
        this._min = value;
    }
    /**
     * @return {?}
     */
    get atType() {
        return this._atType;
    }
    /**
     * @return {?}
     */
    get step() {
        return this._step;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set step(value) {
        this._step = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atType(value) {
        this._atType = value;
        if (value == 'number') {
            this._prefixCls = 'at-input-number';
            this._value = this.value || 0;
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} Ivalue
     * @return {?}
     */
    set value(Ivalue) {
        if (this.atType == 'number') {
            if ((this.min && Ivalue < this.min) || (this.max && Ivalue > this.max)) {
                Ivalue = 0;
            }
        }
        this._value = Ivalue;
        this.setNumberStatus();
        this.onChange(this._value);
    }
    /**
     * @return {?}
     */
    get atSize() {
        return this._atSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atSize(value) {
        this._atSize = value;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set icon(value) {
        this._icon = value;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
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
    get atStatus() {
        return this._atStatus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atStatus(value) {
        this._atStatus = value;
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = value;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.showAppend = (this.trim(this.append.nativeElement.innerHTML).length > 0);
        this.showPrepend = (this.trim(this.prepend.nativeElement.innerHTML).length > 0);
        this._BindClass[`${this._prefixCls}--disabled`] = this.disabled;
        this._BindClass['at-input-group'] = (this.showAppend || this.showPrepend);
        this._BindClass['at-input--prepend'] = this.showPrepend;
        this._BindClass['at-input--append'] = this.showAppend;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    trim(str) {
        return str.replace(/(^\s+)|(\s+$)/g, "");
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    numberUp() {
        this._value = this._value || 0;
        if ((this.max && this._value >= this.max)) {
        }
        else {
            this._value += this.step;
        }
        this.setNumberStatus();
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    numberDown() {
        this._value = this._value || 0;
        if ((this.min && this._value <= this.min)) {
        }
        else {
            this._value -= this.step;
        }
        this.setNumberStatus();
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    setNumberStatus() {
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
    }
    /**
     * @return {?}
     */
    change() {
        this.value_change.emit(this._value);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    focus($event) {
        this.onFocus.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    focusOut($event) {
        this.onFocusOut.emit($event);
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'atInput',
                template: `
    <div class="{{_prefixCls}} {{_prefixCls}}--{{atSize}} {{_prefixCls}}--{{atStatus}}"
         [ngClass]="_BindClass">
      <div #prepend [hidden]="!showPrepend" [ngClass]="{'at-input-group__prepend': showPrepend}">
        <ng-content select="[atPrepend]"></ng-content>
      </div>

      <ng-template [ngIf]="atType == 'normal'">
        <input #input [(ngModel)]="value" placeholder="{{placeholder}}"
               (focus)="focus($event)" (focusout)="focusOut($event)" type="{{type}}" [disabled]="disabled"
               class="{{_prefixCls}}__original">
      </ng-template>

      <ng-template [ngIf]="atType == 'number'">
        <div class="at-input-number__input">
          <input [(ngModel)]="value" placeholder="{{placeholder}}" type="number" [disabled]="disabled"
                 class="{{_prefixCls}}__original">

          <div class="at-input-number__handler">
            <span (click)="numberUp()" class="at-input-number__up"
                  [ngClass]="{'at-input-number__up--disabled':isMax}"><i class="icon icon-chevron-up"></i></span>
            <span (click)="numberDown()" class="at-input-number__down"
                  [ngClass]="{'at-input-number__up--disabled':isMin}"><i class="icon icon-chevron-down"></i></span>
          </div>
        </div>
      </ng-template>

      <i *ngIf="icon" class="at-input__icon icon icon-{{icon}}"></i>

      <div #append [ngClass]="{'at-input-group__append': showAppend}" [hidden]="!showAppend">
        <ng-content select="[atAppend]"></ng-content>
      </div>

    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: ElementRef, },
];
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
const DropDownAnimation = trigger('dropDownAnimation', [
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
const FadeAnimation = trigger('fadeAnimation', [
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
class SelectComponent {
    constructor() {
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
        this.unSelectMultipleOption = (option, $event, emitChange = true) => {
            this._selectedOptions.delete(option);
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
            if (emitChange) {
                const /** @type {?} */ arrayOptions = /** @type {?} */ (Array.from(this._selectedOptions));
                this.onChange(arrayOptions.map(item => item.atValue));
            }
        };
        this._selectedOptions = new Set();
    }
    /**
     * @return {?}
     */
    get searchable() {
        return this._searchable;
    }
    /**
     * @return {?}
     */
    get filterOptions() {
        if (this.searchable) {
            return this._filterOptions;
        }
        else {
            return this.options;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set filterOptions(value) {
        this._filterOptions = value;
    }
    /**
     * @param {?=} setText
     * @return {?}
     */
    updateFilterOption(setText = false) {
        this.showLabel = false;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(_ => {
            this._dropdown = true;
        }, 200);
        if (this._searchText) {
            this._filterOptions = this.options.filter((option) => {
                return (option.atLabel.indexOf(this._searchText) != -1);
            });
        }
        else {
            this._filterOptions = this.options;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set searchable(value) {
        this._searchable = value;
    }
    /**
     * @return {?}
     */
    get tagAble() {
        return this._tagAble;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tagAble(value) {
        this._tagAble = value;
    }
    /**
     * @return {?}
     */
    get allowClear() {
        return this._allowClear;
    }
    /**
     * @return {?}
     */
    get hover() {
        return this._hover;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hover(value) {
        this._hover = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set allowClear(value) {
        this._allowClear = value;
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
    get atSize() {
        return this._atSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atSize(value) {
        this._atSize = value;
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = value;
    }
    /**
     * @return {?}
     */
    get selectedLabel() {
        return (this._selectedOption || {})['atLabel'] || null;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    addOption(option) {
        this.options.push(option);
        setTimeout(_ => {
            this.forceUpdateSelectedOption(this._value);
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.top == '') {
            this.updateTop();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDrop(e) {
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
    }
    /**
     * @return {?}
     */
    dropUp() {
        if (this.disabled) {
            return;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(_ => {
            this._dropdown = false;
        }, 200);
    }
    /**
     * @return {?}
     */
    dropDown() {
        if (this.disabled || !this._hover) {
            return;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(_ => {
            this._dropdown = true;
        }, 200);
    }
    /**
     * @return {?}
     */
    get selectedOptions() {
        return this.options.filter((option) => {
            return option._selected == true;
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateValue(value, false);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} e
     * @param {?} option
     * @param {?=} isUserClick
     * @return {?}
     */
    selectOption(e, option, isUserClick = true) {
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
    }
    /**
     * @param {?} option
     * @param {?=} $event
     * @return {?}
     */
    selectMultipleOption(option, $event) {
        this._selectedOptions.add(option);
        const /** @type {?} */ arrayOptions = /** @type {?} */ (Array.from(this._selectedOptions));
        this.onChange(arrayOptions.map(item => item.atValue));
    }
    /**
     * @param {?} set
     * @param {?} option
     * @return {?}
     */
    isInSet(set, option) {
        let /** @type {?} */ ined = ((/** @type {?} */ (Array.from(set)))).find((data) => {
            return data.atValue === option.atValue;
        });
        // console.log(ined)
        return ined;
    }
    /**
     * @param {?} value
     * @param {?=} emitChange
     * @return {?}
     */
    updateValue(value, emitChange = true) {
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
    }
    /**
     * @return {?}
     */
    get ArraySelectOptions() {
        return Array.from(this._selectedOptions);
    }
    /**
     * @param {?} currentModelValue
     * @param {?=} triggerByNgModel
     * @return {?}
     */
    updateSelectedOption(currentModelValue, triggerByNgModel = false) {
        if (currentModelValue == null) {
            return;
        }
        if (this.multiple) {
            const /** @type {?} */ selectedOptions = this.options.filter((item) => {
                return (item != null) && (currentModelValue.indexOf(item._atValue) != -1);
            });
            if (!triggerByNgModel) {
                selectedOptions.forEach(option => {
                    if (!this._selectedOptions.has(option)) {
                        this._selectedOptions.add(option);
                    }
                });
            }
            else {
                this._selectedOptions = new Set();
                selectedOptions.forEach(option => {
                    this._selectedOptions.add(option);
                });
            }
        }
        else {
            const /** @type {?} */ selectedOption = this.options.filter((item) => {
                return (item != null) && (item.atValue === currentModelValue);
            });
            this.selectOption(null, selectedOption[0], false);
        }
    }
    /**
     * @return {?}
     */
    clearAllSelectedOption() {
        this._selectedOptions = new Set();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clearData(e) {
        e.stopPropagation();
        this.updateValue(null);
    }
    /**
     * @param {?} e
     * @param {?} data
     * @return {?}
     */
    rejectData(e, data) {
        e.stopPropagation();
        // 如果是tag
        if (data.isTag) {
            this.options = this.options.filter((option) => {
                return (option.atValue != data.atValue || option.isTag != true);
            });
        }
        this.selectOption(e, data);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKey($event) {
        if ($event.code == 'Enter') {
            let /** @type {?} */ value = $event.target.value;
            let /** @type {?} */ option = /** @type {?} */ ({
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    forceUpdateSelectedOption(value) {
        if (value == null) {
            return;
        }
        setTimeout(_ => {
            this.updateValue(value);
        });
    }
    /**
     * @return {?}
     */
    updateTop() {
        setTimeout(_ => {
            this.top = this.selection.nativeElement.offsetHeight + 'px';
        });
    }
    /**
     * @return {?}
     */
    resetOption() {
        this.filterOptions = this.options;
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'atSelect',
                template: `
    <div (click)="handleDrop($event)" (mouseenter)="dropDown()" (mouseleave)="dropUp()"
         class="at-select at-select--{{disabled ? 'disabled' : 'visiable' }} at-select--{{multiple ? 'multiple' : 'single' }} at-select--{{atSize}}">

      <div *ngIf="multiple" #selection class="at-select__selection">
    <span *ngFor="let item of ArraySelectOptions" class="at-tag" [@tagAnimation]>
      <span class="at-tag__text">{{item.atLabel}}</span>
      <i (click)="rejectData($event,item)" class="icon icon-x at-tag__close"></i>
    </span>
        <span class="at-select__placeholder" *ngIf="selectedOptions.length == 0 && showLabel">

    </span>
        <input *ngIf="tagAble" #tag_input type="text"
               [(ngModel)]="_searchText"
               (focus)="resetOption()"
               (ngModelChange)="updateFilterOption()"
               placeholder="" (keyup)="onKey($event)" style="
    border: none;
    outline: none;
    left: 0;
    top: 0;
    display: inline-block;
    margin: 0 24px 0 8px;
    background-color: transparent;">
        <i class="icon icon-chevron-down at-select__arrow"></i>
        <i *ngIf="allowClear" (click)="clearData($event)" style="background: white"
           class="icon icon-x at-select__clear">
        </i>
      </div>


      <div #selection *ngIf="!multiple" class="at-select__selection">
        <span class="at-select__placeholder" *ngIf="!selectedLabel && showLabel">请选择</span>
        <span *ngIf="selectedLabel && showLabel"
              class="at-select__selected">{{selectedLabel}}</span>
        <input *ngIf="searchable" #search_input type="text" [(ngModel)]="_searchText"
               (focus)="resetOption()"
               (ngModelChange)="updateFilterOption()" class="at-select__input">
        <i class="icon icon-chevron-down at-select__arrow"></i>
        <i *ngIf="allowClear" (click)="clearData($event)" style="background: white"
           class="icon icon-x at-select__clear">
        </i>
      </div>

      <div *ngIf="_dropdown" [@dropDownAnimation] class="at-select__dropdown at-select__dropdown--bottom"
           [ngStyle]="{'top':top}" style="left: 0px;">
        <ul class="at-select__not-found" *ngIf="filterOptions.length == 0">
          <li>无匹配数据</li>
        </ul>
        <ul class="at-select__list">
          <li (click)="selectOption($event,option)"
              [ngClass]="{'at-select__option--selected': isInSet(_selectedOptions,option) || _selectedOption?.atValue == option.atValue ,'at-select__option--disabled':option.disabled}"
              class="at-select__option" *ngFor="let option of filterOptions">
            {{option.atLabel}}
          </li>
        </ul>
      </div>

    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SelectComponent),
                        multi: true
                    }
                ],
                animations: [DropDownAnimation, FadeAnimation, TagAnimation],
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
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
class RadioButtonComponent extends RadioComponent {
    constructor() {
        super(...arguments);
        this._prefixCls = 'at-radio-button';
    }
    /**
     * @return {?}
     */
    get buttonChecked() {
        return this._checked;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.fill) {
            this._renderer.setStyle(this.content_span.nativeElement, 'background-color', this.fill);
            this._renderer.setStyle(this.content_span.nativeElement, 'border-color', this.fill);
        }
        if (this.textColor) {
            this._renderer.setStyle(this.content_span.nativeElement, 'color', this.textColor);
        }
    }
}
RadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[atRadioButton]',
                template: `<input type="radio" [disabled]="disabled" class="at-radio-button__original" [(ngModel)]="checked">
  <span #content_span class="at-radio-button__inner">
  <ng-content>

</ng-content>
</span>
  `,
            },] },
];
/** @nocollapse */
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
class SwitchComponent {
    constructor() {
        this._value = false;
        this.disabled = false;
        this._atSize = 'normal';
        this.change = new EventEmitter();
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    get atSize() {
        return this._atSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atSize(value) {
        this._atSize = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    switch() {
        if (!this.disabled) {
            this._value = !this._value;
            this.onChange(this._value);
            this.change.emit(this._value);
        }
    }
}
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'atSwitch',
                template: `<span class="at-switch at-switch--{{atSize}}" [ngClass]="{'at-switch--checked':_value,'at-switch--disabled':disabled}">
  <span class="at-switch__text">
    {{_value ? checkText : unCheckText}}
  </span>
</span>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SwitchComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
SwitchComponent.ctorParameters = () => [];
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
class OptionComponent {
    /**
     * @param {?} _selectComponent
     */
    constructor(_selectComponent) {
        this._selectComponent = _selectComponent;
        this._selected = false;
        this._isTag = false;
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._selectComponent.addOption(this);
    }
    /**
     * @return {?}
     */
    get isTag() {
        return this._isTag;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isTag(value) {
        this._isTag = value;
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
    get atValue() {
        return this._atValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atValue(value) {
        this._atValue = value;
    }
    /**
     * @return {?}
     */
    get atLabel() {
        return this._atLabel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atLabel(value) {
        this._atLabel = value;
    }
}
OptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'atOption',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
OptionComponent.ctorParameters = () => [
    { type: SelectComponent, },
];
OptionComponent.propDecorators = {
    "disabled": [{ type: Input },],
    "atValue": [{ type: Input },],
    "atLabel": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SliderComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    mouseDown() {
        console.log('mouseDown');
    }
    /**
     * @return {?}
     */
    mouseUp() {
        console.log('mouseUp');
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'atSlider',
                template: `<div (mousedown)="mouseDown()" (mouseup)="mouseUp()" class="at-slider" data-v-a01f69b8="">
  <div class="at-input-number at-slider__input at-input-number--normal" style="display: none;">
    <div class="at-input-number__input"><input type="number" max="80" min="20" class="at-input-number__original"></div>
    <div  class="at-input-number__handler"><span class="at-input-number__up"><i class="icon icon-chevron-up"></i></span>
      <span class="at-input-number__down"><i class="icon icon-chevron-down"></i></span></div>
  </div>
  <div class="at-slider__track">
    <div class="at-slider__bar" style="width: 26.6667%;"></div>
    <div  class="at-slider__dot-wrapper at-slider__dot-wrapper--hover at-slider__dot-wrapper--drag"
         style="left: 26.6667%;">
      <div class="at-tooltip"><span class="at-tooltip__trigger"><div
        class="at-slider__dot at-slider__dot--hover at-slider__dot--drag"></div> </span>
        <div class="at-tooltip__popper at-tooltip--top" style="top: -32px; left: -9.5px;">
          <div class="at-tooltip__arrow"></div>
          <div class="at-tooltip__content"><span>36</span></div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
            },] },
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TextareaComponent {
    constructor() {
        this._value = '';
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.atPlaceholder = '请输入';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.onChange(this._value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
TextareaComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'atTextarea',
                template: `<div class="at-textarea" data-v-a01f69b8="">
  <textarea [placeholder]="atPlaceholder" [(ngModel)]="value" rows="2" class="at-textarea__original" style="">

  </textarea>
  </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextareaComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
TextareaComponent.ctorParameters = () => [];
TextareaComponent.propDecorators = {
    "atPlaceholder": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const POSITION_MAP = /** @type {?} */ (({
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
const DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP["top"], POSITION_MAP["right"], POSITION_MAP["bottom"], POSITION_MAP["left"]]);
const DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP["bottomLeft"], POSITION_MAP["topLeft"]]);

/**
 * @template T, S
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function arrayMap(array, iteratee) {
    let /** @type {?} */ index = -1;
    const /** @type {?} */ length = array == null ? 0 : array.length;
    const /** @type {?} */ result = Array(length);
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
class DropdownMenuItemComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DropdownDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.trigger = true;
    }
}
DropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[at-dropdown]'
            },] },
];
/** @nocollapse */
DropdownDirective.ctorParameters = () => [
    { type: ElementRef, },
];
DropdownDirective.propDecorators = {
    "trigger": [{ type: HostBinding, args: ['class.at-dropdown__trigger',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DropdownComponent {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetector
     */
    constructor(_renderer, _changeDetector) {
        this._renderer = _renderer;
        this._changeDetector = _changeDetector;
        this.custom_content = false;
        this._clickHide = false;
        this._visible = false;
        this.hasFilterButton = false;
        this._triggerWidth = 0;
        this._placement = 'bottom';
        this._dropDownPosition = 'bottom';
        this._positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.trigger = 'hover';
        this._visibleChange = new Subject$1();
        this.atVisibleChange = new EventEmitter();
        this._onVisibleChange = (visible) => {
            if (visible) {
                this._setTriggerWidth();
            }
            if (this.atVisible !== visible) {
                this.atVisible = visible;
                this.atVisibleChange.emit(this.atVisible);
            }
            this._changeDetector.markForCheck();
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toBoolean(value) {
        return value === '' || (value && value !== 'false');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoClose(value) {
        this._clickHide = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get autoClose() {
        return this._clickHide;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atVisible(value) {
        this._visible = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get atVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placement(value) {
        this._placement = value;
        this._dropDownPosition = (this.atPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
        this._positions.unshift(/** @type {?} */ (POSITION_MAP[this._placement]));
    }
    /**
     * @return {?}
     */
    get atPlacement() {
        return this._placement;
    }
    /**
     * @return {?}
     */
    _onClickEvent() {
        if (this.trigger === 'click') {
            this._show();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _onMouseEnterEvent(e) {
        if (this.trigger === 'hover') {
            this._show();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _onMouseLeaveEvent(e) {
        if (this.trigger === 'hover') {
            this._hide();
        }
    }
    /**
     * @return {?}
     */
    _hide() {
        this._visibleChange.next(false);
    }
    /**
     * @return {?}
     */
    _show() {
        this._visibleChange.next(true);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    _onPositionChange(position) {
        this._dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _clickDropDown($event) {
        $event.stopPropagation();
        if (this.autoClose) {
            this._hide();
        }
    }
    /**
     * @return {?}
     */
    _setTriggerWidth() {
        this._triggerWidth = this._atOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        /** should remove after https://github.com/angular/material2/pull/8765 merged **/
        if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
            this._cdkOverlay.overlayRef.updateSize({
                minWidth: this._triggerWidth
            });
        }
    }
    /**
     * @param {?} observable$
     * @return {?}
     */
    _startSubscribe(observable$) {
        this._subscription = observable$.pipe(debounceTime$1(50))
            .subscribe(this._onVisibleChange);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        let /** @type {?} */ mouse$;
        if (this.trigger === 'hover') {
            const /** @type {?} */ mouseEnterOrigin$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'mouseenter').pipe(mapTo$1(true));
            const /** @type {?} */ mouseLeaveOrigin$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'mouseleave').pipe(mapTo$1(false));
            mouse$ = mouseEnterOrigin$.pipe(merge$1(mouseLeaveOrigin$));
        }
        if (this.trigger === 'click') {
            mouse$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'click').pipe(mapTo$1(true));
            this._renderer.listen(this._atOrigin.elementRef.nativeElement, 'click', (e) => {
                e.preventDefault();
            });
        }
        const /** @type {?} */ observable$ = mouse$.pipe(merge$1(this._visibleChange));
        this._startSubscribe(observable$);
    }
    /**
     * @return {?}
     */
    get _hasBackdrop() {
        return this.trigger === 'click';
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'atDropdown',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div>
      <ng-content></ng-content>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOrigin]="_atOrigin"
      (backdropClick)="_hide()"
      [cdkConnectedOverlayMinWidth]="_triggerWidth"
      (positionChange)="_onPositionChange($event)"
      [cdkConnectedOverlayOpen]="atVisible"
    >
      <div
        class="{{'at-dropdown at-dropdown-placement-'+atPlacement}}"
        [@dropDownAnimation]="_dropDownPosition"
        (mouseenter)="_onMouseEnterEvent($event)"
        (mouseleave)="_onMouseLeaveEvent($event)"
        [style.minWidth.px]="_triggerWidth"
        (click)="_clickDropDown($event)">
        <div>
          <ul *ngIf="!custom_content" atDropMenuList>
            <ng-content select="[atDropMenuItem]"></ng-content>
          </ul>
          <!--<ng-content select="[at-table-filter]"></ng-content>-->
          <ng-content select="[atDropMenuCustomItem]"></ng-content>
        </div>
        <!--<ng-content select="[at-dropdown-custom]"></ng-content>-->
      </div>
    </ng-template>
  `,
                animations: [DropDownAnimation],
            },] },
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
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
class DropMenuListComponent extends MenuListComponent {
    /**
     * @param {?} el
     * @param {?} render
     */
    constructor(el, render) {
        super();
        this.el = el;
        this.render = render;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DropMenuListComponent.decorators = [
    { type: Component, args: [{
                selector: '[atDropMenuList]',
                template: `
    <ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
DropMenuListComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NotificationConfig {
    /**
     * @return {?}
     */
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var /** @type {?} */ r = Math.random() * 16 | 0, /** @type {?} */ v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    /**
     * @param {?} options
     * @param {?=} type
     */
    constructor(options, type) {
        this.index = this.guid();
        this.title = options.title || '';
        this.state = 'enter';
        this.duration = options.duration == 0 ? 0 : (options.duration || 4000);
        this.message = options.message || '';
        this.icon = options.icon || '';
        this.showClose = options.showClose || true;
        this.type = type || options.type || 'info';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NotificationContainerComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.notifications = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    addMessage(notification) {
        this.notifications.push(notification);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        let /** @type {?} */ notification = this.notifications.find((n) => {
            return n.index == index;
        });
        notification.state = 'leave';
        this.removeByIndex(index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeByIndex(index) {
        setTimeout$1(_ => {
            this.notifications = this.notifications.filter((no) => {
                return (no.index != index);
            });
        }, 110);
    }
}
NotificationContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-notification-container',
                template: `
    <div class="at-notification-container">
      <atNotification *ngFor="let item of notifications" [config]="item"></atNotification>
    </div>
  `,
                styles: [
                    `:host ::ng-deep .at-notification-container {
      top: 20px;
      position: fixed;
      display: block;
      right: 16px;
      width: 320px;
      height: auto;
      z-index: 1040;
    }`
                ]
            },] },
];
/** @nocollapse */
NotificationContainerComponent.ctorParameters = () => [
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const StatusIconType = {
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
class NotificationComponent {
    /**
     * @param {?} notificationContainer
     */
    constructor(notificationContainer) {
        this.notificationContainer = notificationContainer;
        this.status = StatusIconType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.config.duration != 0) {
            this.startRemove();
        }
    }
    /**
     * @return {?}
     */
    remove() {
        this.notificationContainer.remove(this.config.index);
    }
    /**
     * @return {?}
     */
    startRemove() {
        if (this.config.duration != 0) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.remove();
            }, this.config.duration);
        }
    }
    /**
     * @return {?}
     */
    stopRemove() {
        clearTimeout(this.timer);
    }
}
NotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'atNotification',
                template: `
    <div (mouseenter)="stopRemove()" (mouseleave)="startRemove()"
         [@enterLeave]="config.state"
         class="at-notification-contained  at-notification--{{config.type}}"
         [ngClass]="{'at-notification--with-message ': config.message !=''}"
    >
      <i class="icon at-notification__icon {{status[config.type]}}"></i>
      <div class="at-notification__content"><p class="at-notification__title">{{config.title}}</p>
        <p class="at-notification__message">{{config.message}}</p></div>
      <i *ngIf="config.showClose" (click)="remove()" class="icon icon-x at-notification__close">
      </i>
    </div>

  `,
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
                styles: [`
    :host ::ng-deep .at-notification-contained {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 15px;
      right: 16px;
      width: 320px;
      padding: 8px 16px;
      color: #3f536e;
      background-color: #fff;
      line-height: 1.5;
      border-radius: 4px;
      -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      -webkit-transition: opacity .3s, top .4s, -webkit-transform .3s;
      transition: opacity .3s, top .4s, -webkit-transform .3s;
      transition: opacity .3s, transform .3s, top .4s;
      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;
      z-index: 1010;
    }
  `]
            },] },
];
/** @nocollapse */
NotificationComponent.ctorParameters = () => [
    { type: NotificationContainerComponent, },
];
NotificationComponent.propDecorators = {
    "config": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ComponentCreatorBase {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
}
ComponentCreatorBase.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ComponentCreatorBase.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: ApplicationRef, },
    { type: Injector, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class ComponentCreator {
    /**
     * @param {?} base
     * @param {?=} component
     */
    constructor(base, component) {
        this.base = base;
        this.component = component;
    }
    /**
     * @return {?}
     */
    create() {
        // setTimeout(() => {
        this.componentRef = /** @type {?} */ (this.base.componentFactoryResolver
            .resolveComponentFactory(this.component)
            .create(this.base.injector));
        this.base.appRef.attachView(this.componentRef.hostView);
        this.domElem = /** @type {?} */ ((/** @type {?} */ (this.componentRef.hostView))
            .rootNodes[0]);
        document.body.appendChild(this.domElem);
        // })
    }
    /**
     * @return {?}
     */
    remove() {
        this.base.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    }
    /**
     * @template T
     * @return {?}
     */
    getElem() {
        return this.componentRef;
    }
    /**
     * @return {?}
     */
    getDom() {
        return this.domElem;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NotificationBaseService extends ComponentCreator {
    /**
     * @param {?} component_base
     */
    constructor(component_base) {
        super(component_base, NotificationContainerComponent);
        this.component_base = component_base;
        this.create();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    addMessage(config) {
        this.getElem().instance.addMessage(config);
    }
}
NotificationBaseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NotificationBaseService.ctorParameters = () => [
    { type: ComponentCreatorBase, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtNotificationService extends ComponentCreator {
    /**
     * @param {?} containerbase
     * @param {?} component_base
     */
    constructor(containerbase, component_base) {
        super(component_base, NotificationContainerComponent);
        this.containerbase = containerbase;
        this.component_base = component_base;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    success(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options, 'success');
        this.containerbase.addMessage(config);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    info(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options, 'info');
        this.containerbase.addMessage(config);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    show(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options);
        this.containerbase.addMessage(config);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    warning(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options, 'warning');
        this.containerbase.addMessage(config);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    error(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options, 'error');
        this.containerbase.addMessage(config);
    }
}
AtNotificationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtNotificationService.ctorParameters = () => [
    { type: NotificationBaseService, },
    { type: ComponentCreatorBase, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AlertComponent {
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    close() {
        this.state = 'hidden';
        setTimeout(_ => {
            this.closed = true;
            this.onClose.emit(this.closed);
        }, 300);
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'atAlert',
                template: `
    <div [@visibilityChanged]="state" *ngIf="!this.closed"
         class="at-alert at-alert--{{atType}}"
         [ngClass]="{'at-alert--with-description': desc}"
    >
      <i *ngIf="icon" class="icon at-alert__icon {{iconType[atType]}}"></i>
      <div class="at-alert__content">
        <p class="at-alert__message">{{message}}</p>
        <p *ngIf="desc" class="at-alert__description">{{desc}}</p>
      </div>
      <i (click)="close()" class="icon at-alert__close"
         [ngClass]="{' at-alert__close--custom':closeText ,'icon-x':!closeText}">
        {{closeText}}
      </i>

    </div>
  `,
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
AlertComponent.ctorParameters = () => [];
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
class BadgeComponent {
    constructor() {
        this.atType = 'info';
        this.dot = false;
        this.show = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get atValue() {
        if (this.max && this._atValue > this.max) {
            return this.max + '+';
        }
        return this._atValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atValue(value) {
        this._atValue = value;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'atBadge',
                template: `<span class="at-badge at-badge--{{atType}}">
  <span #content>
  <ng-content>

  </ng-content>
  </span>
  <span *ngIf="!dot && show" class="at-badge"
        [ngClass]="{'at-badge--corner':(content.innerText.length > 0 || content.children.length >0),
        'at-badge--alone':(content.innerText.length == 0 && content.children.length == 0 )}">
  <sup class="at-badge__content" [ngClass]="{'at-badge--dot':dot}">{{dot ? '' : atValue}}</sup>
  </span>
    <sup *ngIf="dot && show" class="at-badge__content" [ngClass]="{'at-badge--dot':dot,'at-badge--corner':(content.innerText.length > 0 || content.children.length >0),
        'at-badge--alone':(content.innerText.length == 0 && content.children.length == 0 )}">{{dot ? '' : atValue}}</sup>
</span>
`
            },] },
];
/** @nocollapse */
BadgeComponent.ctorParameters = () => [];
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

class AtGlobalMonitorService {
    constructor() {
        this.lastClickPosition = { x: 0, y: 0 };
        this.clickDocumentObserve();
    }
    /**
     * @return {?}
     */
    clickDocumentObserve() {
        document.addEventListener('click', (e) => {
            this.lastClickPosition = {
                x: e.clientX,
                y: e.clientY
            };
        });
    }
}
AtGlobalMonitorService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtGlobalMonitorService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalBodyDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
ModalBodyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[body]'
            },] },
];
/** @nocollapse */
ModalBodyDirective.ctorParameters = () => [
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalComponent {
    /**
     * @param {?} global_service
     */
    constructor(global_service) {
        this.global_service = global_service;
        this.state = 'enter';
        this.icon_status = StatusIconType;
        this._closeable = true;
        this._atType = 'normal';
        this._status = 'info';
        this._show = false;
        this._positions = [...DEFAULT_DROPDOWN_POSITIONS];
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get overlay() {
        return { elementRef: this._overlay };
    }
    /**
     * @return {?}
     */
    get closeable() {
        return this._closeable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set closeable(value) {
        this._closeable = value;
    }
    /**
     * @return {?}
     */
    get message() {
        return this._message;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set message(value) {
        this._message = value;
    }
    /**
     * @return {?}
     */
    get atType() {
        return this._atType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atType(value) {
        this._atType = value;
    }
    /**
     * @return {?}
     */
    get status() {
        return this._status;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set status(value) {
        this._status = value;
    }
    /**
     * @return {?}
     */
    get show() {
        return this._show;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set show(value) {
        value == true ? this.state = 'enter' : this.state = 'leave';
        setTimeout(_ => {
            setTimeout(_ => {
                this.setStyle();
            });
            this._show = value;
        });
    }
    /**
     * @return {?}
     */
    cancel() {
        this.state = 'leave';
        setTimeout(_ => {
            this._show = false;
            this.onCancel.emit(this._show);
        }, 20);
    }
    /**
     * @return {?}
     */
    setShow() {
        this.state = 'enter';
        setTimeout(_ => {
            this._show = true;
        }, 20);
    }
    /**
     * @return {?}
     */
    setStyle() {
        // const origin = this.global_service.lastClickPosition
        // let el = this.modal_content.nativeElement;
        // let transformOrigin = `${origin.x - el.offsetLeft}px ${origin.y - el.offsetTop }px 0px`;
        // this.positionStyle = {'transform-origin': transformOrigin, 'top': this.top + 'px'}
        // return this.positionStyle
    }
    /**
     * @return {?}
     */
    ok() {
        this.state = 'leave';
        setTimeout(_ => {
            this._show = false;
            this.onOk.emit(this._show);
        }, 20);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    cancelFromMask(e) {
        if (e.target.getAttribute('role') === 'dialog' && this.maskClose) {
            this.cancel();
        }
    }
    /**
     * @return {?}
     */
    headerContains() {
        // let custom_title = this.customTitle.nativeElement
        // return ( custom_title.children.length > 0 || custom_title.innerText.length > 0)
        return true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
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
                template: `
    <div>
      <ng-content></ng-content>
      <div #overlays></div>

      <ng-template
        cdkConnectedOverlay
        [cdkConnectedOverlayHasBackdrop]="true"
        [cdkConnectedOverlayPositions]="_positions"
        [cdkConnectedOverlayOrigin]="overlay"
        [cdkConnectedOverlayMinWidth]="width"
        [cdkConnectedOverlayOpen]="show"
      >
        <div [ngStyle]="{'display': show ? '' : 'none'}"
        class="at-modal__mask"></div>
        <div
          role="dialog"
          (click)="cancelFromMask($event)"
          class="at-modal__wrapper at-modal--{{atType}} at-modal--{{atType}}-{{status}}"
        >
          <div  class="at-modal" [@enterLeave]="state"
               [ngStyle]="positionStyle"
               [style.width]="width +'px'">
            <div [ngClass]="{'at-modal__header': headerContains()}">
              <div class="at-modal__title" #custom_title>
                <ng-content select="[header]">
                </ng-content>
                {{title ? title : ''}}
              </div>
            </div>
            <div class="at-modal__body" #modal_body>
              <ng-content select="[body]"></ng-content>
              {{message ? message : ''}}
            </div>
            <div class="at-modal__footer">
              <div #custom_footer>
                <ng-content select="[footer]"></ng-content>
              </div>
              <div *ngIf="custom_footer.children.length == 0 &&  custom_footer.innerText.length == 0">
                <button atButton (click)="cancel()">取消</button>
                <button (click)="ok()" type="primary" class="at-btn at-btn--primary">
          <span class="at-btn__text">确认
          </span>
                </button>
              </div>
            </div>
            <i *ngIf="atType == 'confirm'" class="icon at-modal__icon {{ icon_status[status]}}"></i>
            <span *ngIf="closeable" (click)="cancel()" class="at-modal__close"><i class="icon icon-x"></i></span>
          </div>
        </div>
      </ng-template>

    </div>

  `,
            },] },
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: AtGlobalMonitorService, },
];
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
class ModalBaseService extends ComponentCreator {
    /**
     * @param {?} base_creator
     */
    constructor(base_creator) {
        super(base_creator, ModalComponent);
        this.base_creator = base_creator;
    }
}
ModalBaseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ModalBaseService.ctorParameters = () => [
    { type: ComponentCreatorBase, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtModalService {
    /**
     * @param {?} base_modal_service
     */
    constructor(base_modal_service) {
        this.base_modal_service = base_modal_service;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    modal(config) {
        this.base_modal_service.create();
        let /** @type {?} */ instance = this.base_modal_service.getElem().instance;
        let /** @type {?} */ propConfig = Object.assign(config);
        //删掉ok 和cancel 回掉
        if (config) {
            delete propConfig['cancel'];
            delete propConfig['ok'];
        }
        for (let /** @type {?} */ key in propConfig) {
            instance[key] = propConfig[key];
        }
        instance.show = true;
        let /** @type {?} */ cancel = instance.cancel.bind(instance);
        let /** @type {?} */ ok = instance.ok.bind(instance);
        instance.cancel = () => {
            cancel();
            config && config.cancel && config.cancel();
            setTimeout(_ => {
                this.base_modal_service.remove();
            }, 180);
        };
        instance.ok = () => {
            ok();
            config && config.ok && config.ok();
            setTimeout(_ => {
                this.base_modal_service.remove();
            }, 180);
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    success(config) {
        this.setConfirm(config);
        config.status = 'success';
        this.modal(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    error(config) {
        this.setConfirm(config);
        config.status = 'error';
        this.modal(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    warning(config) {
        this.setConfirm(config);
        config.status = 'warning';
        this.modal(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    info(config) {
        this.setConfirm(config);
        config.status = 'info';
        this.modal(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    confirm(config) {
        this.setConfirm(config);
        config.status = 'info';
        this.modal(config);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfirm(config) {
        config.atType = 'confirm';
        config.status = 'success';
    }
}
AtModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtModalService.ctorParameters = () => [
    { type: ModalBaseService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtThDirective {
    constructor() {
        this._th = true;
        this._tc = true;
    }
}
AtThDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atTh]'
            },] },
];
/** @nocollapse */
AtThDirective.ctorParameters = () => [];
AtThDirective.propDecorators = {
    "atWidth": [{ type: Input },],
    "_th": [{ type: HostBinding, args: ['class.at-table__column',] },],
    "_tc": [{ type: HostBinding, args: ['class.at-table__cell',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TableComponent {
    constructor() {
        this._ths = [];
        this.size = 'normal';
        this.stripe = false;
        this.border = false;
        this.marginTop = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setThs(value) {
        this._ths = value.toArray();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.fixed_head) {
            setTimeout(_ => {
                this.marginTop = this.fixed_head.nativeElement.offsetHeight;
            });
        }
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTable',
                template: `
    <div class="at-table at-table--{{size}}"
         [ngStyle]="{height:height ? height+'px' :''}"
         [ngClass]="{'at-table--fixHeight': height,'at-table--stripe ':stripe,'at-table--border':border}"
    >

      <div *ngIf="!(height === undefined)" class="at-table__content" [ngStyle]="{height:height ? height+'px' :''}">
        <div class="at-table__header" #fix_head>
          <table>
            <colgroup>
              <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'" [style.minWidth]="th.atWidth+'px'">
            </colgroup>
            <ng-template [ngTemplateOutlet]="atThead"></ng-template>
          </table>
        </div>
        <div class="at-table__body"
             [ngStyle]="{height:height ? height-marginTop/2+'px' :'' ,'margin-top':marginTop/2 +'px' }">
          <table>
            <colgroup>
              <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'" [style.minWidth]="th.atWidth+'px'">
            </colgroup>

            <ng-template [ngTemplateOutlet]="atTbody"></ng-template>

          </table>
        </div>
      </div>
      <div *ngIf="(height === undefined)" class="at-table__content">
        <div class="at-table__body">
          <table>
            <colgroup>
              <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'" [style.minWidth]="th.atWidth+'px'">
            </colgroup>
            <ng-content>
            </ng-content>
          </table>
        </div>
      </div>
      <div class="at-table__footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `,
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = () => [];
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
class AtTbodyDirective {
    constructor() {
        this._tbody = true;
    }
}
AtTbodyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atTbody]'
            },] },
];
/** @nocollapse */
AtTbodyDirective.ctorParameters = () => [];
AtTbodyDirective.propDecorators = {
    "_tbody": [{ type: HostBinding, args: ['class.at-table__tbody',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtTdDirective {
    constructor() {
        this._td = true;
    }
}
AtTdDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atTd]'
            },] },
];
/** @nocollapse */
AtTdDirective.ctorParameters = () => [];
AtTdDirective.propDecorators = {
    "_td": [{ type: HostBinding, args: ['class.at-table__cell',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtTbodyTrDirective {
    constructor() { }
}
AtTbodyTrDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atTbodyTr]'
            },] },
];
/** @nocollapse */
AtTbodyTrDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtTheadDirective {
    constructor() {
        this._thead = true;
    }
}
AtTheadDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atThead]'
            },] },
];
/** @nocollapse */
AtTheadDirective.ctorParameters = () => [];
AtTheadDirective.propDecorators = {
    "_thead": [{ type: HostBinding, args: ['class.at-table__thead',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PagenationComponent {
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get _roundPageSize() {
        return Math.round(this._pageSize / 2);
    }
    /**
     * @return {?}
     */
    get atPageIndex() {
        return this._current;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atPageIndex(value) {
        if (this._current === value) {
            return;
        }
        if (value > this._lastIndex || value < this._firstIndex) {
            return;
        }
        this._current = Number(value);
        this._buildIndexes();
        this.pageIndexChange.emit(this._current);
    }
    /**
     * @return {?}
     */
    get total() {
        return this._total;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set total(value) {
        this._total = value;
        this._buildIndexes();
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pageSize(value) {
        this._pageSize = value;
        this._buildIndexes();
    }
    /**
     * 生成中间页数段落
     * @return {?}
     */
    _buildIndexes() {
        this._lastIndex = Math.ceil(this._total / this._pageSize);
        if (this._current > this._lastIndex) {
            this._jumpPage(this._lastIndex);
        }
        const /** @type {?} */ tmpPages = [];
        if (this._lastIndex <= 9) {
            for (let /** @type {?} */ i = 2; i <= this._lastIndex - 1; i++) {
                tmpPages.push({ index: i });
            }
        }
        else {
            const /** @type {?} */ current = +this._current;
            let /** @type {?} */ left = Math.max(2, current - 2);
            let /** @type {?} */ right = Math.min(current + 2, this._lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this._lastIndex - current <= 2) {
                left = this._lastIndex - 4;
            }
            for (let /** @type {?} */ i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this._pages = tmpPages;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    _jumpPage(index) {
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
    }
    /**
     * @return {?}
     */
    get _isLastIndex() {
        return this._current === this._lastIndex;
    }
    /**
     * @return {?}
     */
    get _isFirstIndex() {
        return this._current === this._firstIndex;
    }
    /**
     * 向前向后跳*页
     * @param {?} pageSize
     * @return {?}
     */
    _jumpBefore(pageSize) {
        this._jumpPage(this._current - Math.round(pageSize / 2));
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    _jumpAfter(pageSize) {
        this._jumpPage(this._current + Math.round(pageSize / 2));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _atPageIndexChange(value) {
        if (value > this._lastIndex) {
            value = this._lastIndex;
        }
        if (value == this._firstIndex) {
            value = 1;
        }
        this._current = value;
        this._buildIndexes();
        this.pageIndexChange.emit(this._current);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _atPageSizeChange(value) {
        this.pageSize = value;
        this.pageSizeChange.emit(this.pageSize);
    }
}
PagenationComponent.decorators = [
    { type: Component, args: [{
                selector: 'atPagenation',
                template: `
    <div>
      <ul *ngIf="!simple" class="at-pagination at-pagination--{{size}}">
    <span class="at-pagination__total">
      共 {{total}} 条
    </span>
        <li (click)="_jumpPage(_current-1)" [class.at-pagination--disabled]="_isFirstIndex" title="上一页"
            class="at-pagination__prev">
          <i class="icon icon-chevron-left"></i>
        </li>
        <li
          title="第一页"
          class="at-pagination__item"
          [class.at-pagination__item--active]="_isFirstIndex"
          (click)="_jumpPage(_firstIndex)">
          {{_firstIndex}}
        </li>
        <li
          [attr.title]="'向前 '+_roundPageSize+' 页'"
          class="at-pagination__item at-pagination__item--jump-prev"
          (click)="_jumpBefore(_pageSize)"
          *ngIf="(_lastIndex >9)&&(_current-3>_firstIndex)">
          <i class="icon icon-chevrons-left"></i>
        </li>
        <li
          *ngFor="let page of _pages"
          [attr.title]="page.index"
          (click)="_jumpPage(page.index)"
          class="at-pagination__item"
          [class.at-pagination__item--active]="_current==page.index">
          {{page.index}}
        </li>
        <li [attr.title]="'向后 '+_roundPageSize+' 页'"
            (click)="_jumpAfter(_pageSize)"
            class="at-pagination__item at-pagination__item--jump-next"
            *ngIf="(_lastIndex >9)&&(_current+3<_lastIndex)"
        >
          <i class="icon icon-chevrons-right"></i>
        </li>
        <li
          [attr.title]="'最后一页: '+_lastIndex"
          class="at-pagination__item"
          [class.at-pagination__item--active]="_isLastIndex"
          (click)="_jumpPage(_lastIndex)"
          *ngIf="(_lastIndex>0)&&(_lastIndex!==_firstIndex)">
          {{_lastIndex}}
        </li>
        <li title="下一页"
            [class.at-pagination--disabled]="_isLastIndex "
            class="at-pagination__next" (click)="_jumpPage(_current+1)">
          <i class="icon icon-chevron-right"></i>
        </li>

        <div *ngIf="atPageSizer" class="at-pagination__sizer">
          <atSelect [(ngModel)]="pageSize" (ngModelChange)="_atPageSizeChange($event)">
            <atOption *ngFor="let item of _options" [atValue]="item" [atLabel]="item+' 条/页'">

            </atOption>
          </atSelect>
        </div>

        <div *ngIf="atQuickJump" class="at-pagination__quickjump">
          <span>前往</span>
          <input type="text" class="at-input__original" [ngModel]="atPageIndex"
                 (ngModelChange)="_atPageIndexChange($event)">
          <span>页</span>
        </div>
      </ul>

      <ul *ngIf="simple" class="at-pagination at-pagination--simple" data-v-a01f69b8="">
        <li title="上一页"
            (click)="_jumpPage(_current-1)" [class.at-pagination--disabled]="_isFirstIndex"
            class="at-pagination__prev">
          <i class="icon icon-chevron-left"></i>
        </li>
        <div class="at-pagination__simple-paging">
          <input [ngModel]="atPageIndex"
                 (ngModelChange)="_atPageIndexChange($event)"
                 type="text" class="at-input__original">
          <span>/</span>
          <span class="at-pagination__paging-total">{{_lastIndex}}</span></div>
        <li title="下一页" class="at-pagination__next"
            [class.at-pagination--disabled]="_isLastIndex "
            class="at-pagination__next" (click)="_jumpPage(_current+1)"
        ><i class="icon icon-chevron-right"></i></li>
      </ul>
    </div>
  `,
            },] },
];
/** @nocollapse */
PagenationComponent.ctorParameters = () => [];
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
class BreadcrumbComponent {
    constructor() {
        this.items = [];
        this.separator = '/';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'atBreadcrumb',
                template: `
    <div class="at-breadcrumb">
      <ng-content></ng-content>
    </div>
  `,
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
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    "separator": [{ type: Input },],
    "breadItem": [{ type: ContentChild, args: ['breadItem',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtBreadItemDirective {
    /**
     * @param {?} el
     * @param {?} breadCrumb
     */
    constructor(el, breadCrumb) {
        this.el = el;
        this.breadCrumb = breadCrumb;
        this.inited = false;
    }
}
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
AtBreadItemDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: BreadcrumbComponent, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MessageContainerComponent extends NotificationContainerComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        let /** @type {?} */ notification = this.notifications.find((n) => {
            return n.index == index;
        });
        if (notification) {
            notification.state = 'leave';
            setTimeout(_ => {
                this.notifications = this.notifications.filter((no) => {
                    return (no.index != index);
                });
            }, 110);
        }
    }
}
MessageContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-message-container',
                template: `
    <div class="at-message__wrapper">

      <atMessage [message]="message" *ngFor="let message of notifications"></atMessage>

    </div>
  `,
                styles: [`
    :host ::ng-deep .at-message__wrapper {
      z-index: 1110;
    }

    :host ::ng-deep .at-message--wrapper {
      text-align: center;
      margin-top: 12px;
      pointer-events: none;
      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;
    }
  `]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MessageComponent {
    /**
     * @param {?} message_container
     */
    constructor(message_container) {
        this.message_container = message_container;
        this.status = StatusIconType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        clearTimeout(this.timer);
        this.timer = setTimeout(_ => {
            this.message_container.remove(this.message.index);
        }, this.message.duration);
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'atMessage',
                template: `
    <div class="at-message--wrapper" [@enterLeave]="message.state">
      <div class="at-message at-message--{{message.type}}">
        <i class="icon at-message__icon {{status[message.type]}}"></i>
        <span class="at-message__content">
      {{message.message}}
    </span>
      </div>
    </div>
  `,
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
MessageComponent.ctorParameters = () => [
    { type: MessageContainerComponent, },
];
MessageComponent.propDecorators = {
    "message": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtMessageContainerService extends ComponentCreator {
    /**
     * @param {?} component_base
     */
    constructor(component_base) {
        super(component_base, MessageContainerComponent);
        this.component_base = component_base;
        this.create();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    addMessage(config) {
        this.getElem().instance.addMessage(config);
    }
}
AtMessageContainerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtMessageContainerService.ctorParameters = () => [
    { type: ComponentCreatorBase, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtMessageService {
    /**
     * @param {?} message_container_service
     */
    constructor(message_container_service) {
        this.message_container_service = message_container_service;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    success(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options, 'success');
        this.message_container_service.addMessage(config);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    info(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options, 'info');
        this.message_container_service.addMessage(config);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    show(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options);
        this.message_container_service.addMessage(config);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    warning(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options, 'warning');
        this.message_container_service.addMessage(config);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    error(options = {}) {
        let /** @type {?} */ config = new NotificationConfig(options, 'error');
        this.message_container_service.addMessage(config);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    loading(options) {
        let /** @type {?} */ config = new NotificationConfig(options, 'loading');
        this.message_container_service.addMessage(config);
    }
}
AtMessageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AtMessageService.ctorParameters = () => [
    { type: AtMessageContainerService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PopTriggerDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
PopTriggerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[pop-trigger]'
            },] },
];
/** @nocollapse */
PopTriggerDirective.ctorParameters = () => [
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PopoverComponent {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetector
     */
    constructor(_renderer, _changeDetector) {
        this._renderer = _renderer;
        this._changeDetector = _changeDetector;
        this._clickHide = false;
        this._visible = false;
        this.hasFilterButton = false;
        this._triggerWidth = 0;
        this._placement = 'bottom';
        this._dropDownPosition = 'bottom';
        this._positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.trigger = 'hover';
        this._visibleChange = new Subject$1();
        this.atVisibleChange = new EventEmitter();
        this._onVisibleChange = (visible) => {
            if (visible) {
                this._setTriggerWidth();
            }
            if (this.atVisible !== visible) {
                this.atVisible = visible;
                this.atVisibleChange.emit(this.atVisible);
            }
            this._changeDetector.markForCheck();
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toBoolean(value) {
        return value === '' || (value && value !== 'false');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atClickHide(value) {
        this._clickHide = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get atClickHide() {
        return this._clickHide;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atVisible(value) {
        this._visible = this.toBoolean(value);
    }
    /**
     * @return {?}
     */
    get atVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placement(value) {
        this._placement = value;
        this._dropDownPosition = (this.atPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
        this._positions.unshift(/** @type {?} */ (POSITION_MAP[this._placement]));
    }
    /**
     * @return {?}
     */
    get atPlacement() {
        return this._placement;
    }
    /**
     * @return {?}
     */
    _onClickEvent() {
        if (this.trigger === 'click') {
            this._show();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _onMouseEnterEvent(e) {
        if (this.trigger === 'hover') {
            this._show();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _onMouseLeaveEvent(e) {
        if (this.trigger === 'hover') {
            this._hide();
        }
    }
    /**
     * @return {?}
     */
    _hide() {
        this._visibleChange.next(false);
    }
    /**
     * @return {?}
     */
    _show() {
        this._visibleChange.next(true);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    _onPositionChange(position) {
        this._dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _clickDropDown($event) {
        $event.stopPropagation();
        if (this.atClickHide) {
            this._hide();
        }
    }
    /**
     * @return {?}
     */
    _setTriggerWidth() {
        this._triggerWidth = this._atOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        /** should remove after https://github.com/angular/material2/pull/8765 merged **/
        if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
            this._cdkOverlay.overlayRef.updateSize({
                minWidth: this._triggerWidth
            });
        }
    }
    /**
     * @param {?} observable$
     * @return {?}
     */
    _startSubscribe(observable$) {
        this._subscription = observable$.pipe(debounceTime$1(50))
            .subscribe(this._onVisibleChange);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        let /** @type {?} */ mouse$;
        if (this.trigger === 'hover') {
            const /** @type {?} */ mouseEnterOrigin$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'mouseenter').pipe(mapTo$1(true));
            const /** @type {?} */ mouseLeaveOrigin$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'mouseleave').pipe(mapTo$1(false));
            mouse$ = mouseEnterOrigin$.pipe(merge$1(mouseLeaveOrigin$));
        }
        if (this.trigger === 'click') {
            mouse$ = fromEvent$1(this._atOrigin.elementRef.nativeElement, 'click').pipe(mapTo$1(true));
            this._renderer.listen(this._atOrigin.elementRef.nativeElement, 'click', (e) => {
                e.preventDefault();
            });
        }
        const /** @type {?} */ observable$ = mouse$.pipe(merge$1(this._visibleChange));
        this._startSubscribe(observable$);
    }
    /**
     * @return {?}
     */
    get _hasBackdrop() {
        return this.trigger === 'click';
    }
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'atPopover',
                animations: [DropDownAnimation],
                template: `
    <div class="at-popover">
      <ng-content></ng-content>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOrigin]="_atOrigin"
      (backdropClick)="_hide()"
      [cdkConnectedOverlayMinWidth]="_triggerWidth"
      (positionChange)="_onPositionChange($event)"
      [cdkConnectedOverlayOpen]="atVisible"
    >
      <div
        class="at-popover__popper__{{placement}} "
        [@dropDownAnimation]="_dropDownPosition"
        (mouseenter)="_onMouseEnterEvent($event)"
        (mouseleave)="_onMouseLeaveEvent($event)"
        [style.minWidth.px]="_triggerWidth"
        (click)="_clickDropDown($event)">
        <div class="at-popover__popper at-popover--{{placement || _placement}}">
          <div class="at-popover__arrow"></div>
          <div *ngIf="title" class="at-popover__title">
            <ng-content select="[popTitle]"></ng-content>
          </div>
          <div class="at-popover__content">
            <ng-content select="[popContent]"></ng-content>
          </div>
        </div>
        <!--<ng-content select="[at-dropdown-custom]"></ng-content>-->
      </div>
    </ng-template>


  `
            },] },
];
/** @nocollapse */
PopoverComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
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
class ProgressComponent {
    constructor() {
        this._width = 0;
        this.statusIcon = StatusIconType;
        this.stroke = 8;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get width() {
        return this._width;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        value > 100 ? value = 100 : value;
        value < 0 ? value = 0 : value;
        this._width = value;
        if (this._width == 100) {
            this.status = 'success';
        }
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'atProgress',
                template: `
    <div class="at-progress at-progress--bar at-progress--{{status}}">
      <div class="at-progress-bar">
        <div class="at-progress-bar__wraper" [ngStyle]="{'height':stroke+'px'}">
          <div class="at-progress-bar__inner" [ngStyle]="{'width': width+'%'}"></div>
        </div>
      </div>
      <div class="at-progress__text">
        <span *ngIf="!status">{{width}}%</span>
        <i *ngIf="status" class="icon {{ statusIcon[status]}}"></i>
      </div>
    </div>
  `
            },] },
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    "stroke": [{ type: Input },],
    "width": [{ type: Input },],
    "status": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TooltipComponent extends PopoverComponent {
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTooltip',
                template: `
    <!--<div class="at-tooltip">-->
    <!--<span (mouseenter)="mouseOver()" (mouseleave)="mouseOut()" class="at-tooltip__trigger"-->
          <!--#trigger>-->
      <!--<ng-content select="[tooltipTrigger]"></ng-content>-->
    <!--</span>-->
      <!--<div-->
        <!--(mouseenter)="mouseOver()" (mouseleave)="mouseOut()" [ngStyle]="{'display': pop ? '' :'none'}"-->
        <!--class="at-tooltip__popper at-tooltip&#45;&#45;{{placement}}" #popover>-->
        <!--<div class="at-tooltip__arrow"></div>-->
        <!--<div class="at-tooltip__content">-->
          <!--<ng-content select="[tooltipContent]"></ng-content>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  `,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-form',
                template: `
    <ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
FormComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtFormDirective {
    constructor() {
        this.form = true;
        this.type = 'horizontal';
    }
    /**
     * @return {?}
     */
    get inline() {
        return this.type == 'inline';
    }
    /**
     * @return {?}
     */
    get horizontal() {
        return this.type == 'horizontal';
    }
}
AtFormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atForm]'
            },] },
];
/** @nocollapse */
AtFormDirective.ctorParameters = () => [];
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
class AtFormItemDirective {
    constructor() {
        this.item = true;
    }
}
AtFormItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormItem]'
            },] },
];
/** @nocollapse */
AtFormItemDirective.ctorParameters = () => [];
AtFormItemDirective.propDecorators = {
    "item": [{ type: HostBinding, args: ['class.at-form-item',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtFormLabelDirective {
    constructor() {
        this.required = false;
        this.label = true;
    }
    /**
     * @return {?}
     */
    get require() {
        return this.required;
    }
}
AtFormLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormLabel]'
            },] },
];
/** @nocollapse */
AtFormLabelDirective.ctorParameters = () => [];
AtFormLabelDirective.propDecorators = {
    "required": [{ type: Input },],
    "label": [{ type: HostBinding, args: ['class.at-form-item__label',] },],
    "require": [{ type: HostBinding, args: ['class.at-form-item__label—-required',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtFormContentDirective {
    constructor() {
        this.content = true;
    }
}
AtFormContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormContent]'
            },] },
];
/** @nocollapse */
AtFormContentDirective.ctorParameters = () => [];
AtFormContentDirective.propDecorators = {
    "content": [{ type: HostBinding, args: ['class.at-form-item__content',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtFormErrorDirective {
    constructor() {
        this.error = true;
    }
}
AtFormErrorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormError]'
            },] },
];
/** @nocollapse */
AtFormErrorDirective.ctorParameters = () => [];
AtFormErrorDirective.propDecorators = {
    "error": [{ type: HostBinding, args: ['class.at-form-item__error-tip',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtFormFeedbackDirective {
    constructor() {
        this.feedback = true;
    }
    /**
     * @return {?}
     */
    get success() {
        return this.isSuccess;
    }
    /**
     * @return {?}
     */
    get warning() {
        return this.isWarning;
    }
    /**
     * @return {?}
     */
    get error() {
        return this.isError;
    }
    /**
     * @return {?}
     */
    get isWarning() {
        return this._isDirtyAndError('warning');
    }
    ;
    /**
     * @return {?}
     */
    get isValidate() {
        return this._isDirtyAndError('validating') || this.status === 'pending' || this.status && this.status.dirty && this.status.pending;
    }
    ;
    /**
     * @return {?}
     */
    get isError() {
        return this._isDirtyAndError('error')
            || this._isDirtyAndError('required')
            || this._isDirtyAndError('pattern')
            || this._isDirtyAndError('email')
            || this._isDirtyAndError('maxlength')
            || this._isDirtyAndError('minlength');
    }
    ;
    /**
     * @return {?}
     */
    get isSuccess() {
        return this.status === 'success' || this.status && this.status.dirty && this.status.valid;
    }
    ;
    /**
     * @param {?} name
     * @return {?}
     */
    _isDirtyAndError(name) {
        return this.status === name || this.status && this.status.dirty && this.status.hasError && this.status.hasError(name);
    }
}
AtFormFeedbackDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atFormFeedback]'
            },] },
];
/** @nocollapse */
AtFormFeedbackDirective.ctorParameters = () => [];
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
class DatetimepickerComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
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
    /**
     * @return {?}
     */
    get atType() {
        return this._atType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atType(value) {
        this._atType = value;
    }
    /**
     * @return {?}
     */
    get atValue() {
        return this._atValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showValue(value) {
        if (value) {
            this._show_value = value;
        }
    }
    /**
     * @return {?}
     */
    get showValue() {
        return this._show_value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atValue(value) {
        if (value) {
            this._atValue = value;
            this._show_value = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.updateDate(value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDocumentClick(event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.show = false;
        }
    }
    /**
     * @return {?}
     */
    preYear() {
        this.atYear = this.atYear - 1;
    }
    /**
     * @return {?}
     */
    nextYear() {
        this.atYear = this.atYear + 1;
    }
    /**
     * @return {?}
     */
    preMonth() {
        if (this.atMonth - 1 < 0) {
            this.atMonth = 11;
            this.preYear();
        }
        else {
            this.atMonth = this.atMonth - 1;
        }
    }
    /**
     * @return {?}
     */
    nextMonth() {
        if (this.atMonth + 1 > 11) {
            this.atMonth = 0;
            this.nextYear();
        }
        else {
            this.atMonth = this.atMonth + 1;
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    clickDate(date) {
        this.updateDate(date.date);
        let /** @type {?} */ change_date = this.atValue;
        if (this.format) {
            change_date = change_date.format(this.format);
        }
        this.onChange(change_date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateDate(value) {
        if (this.atValue === value) {
            return;
        }
        this.atValue = value;
        this.selectedMonth = moment(this.atValue).month();
        this.selectedYear = moment(this.atValue).year();
        this.selectedDate = moment(this.atValue).date();
        this.atYear = moment(this.atValue).year();
        this.atMonth = moment(this.atValue).month();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // this.cssTop = this.input.inputField.nativeElement.offsetHeight + 'px'
    }
    /**
     * @param {?} month
     * @return {?}
     */
    clickMonth(month) {
        // this.atValue = moment(this.atValue).year(this.atYear).month(month.index).toDate();
        this.atMonth = month.index;
        this.atType = 'full';
    }
    /**
     * @param {?} year
     * @return {?}
     */
    clickYear(year) {
        this.atYear = year;
        this.atType = 'month';
    }
    /**
     * @param {?} s
     * @return {?}
     */
    setCal(s) {
        this.atType = s;
    }
    /**
     * @return {?}
     */
    preCentury() {
        this.atYear = this.atYear - 10;
    }
    /**
     * @return {?}
     */
    nextCenury() {
        this.atYear = this.atYear + 10;
    }
    /**
     * @return {?}
     */
    choosePicker() {
        this.show = true;
    }
}
DatetimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'atDatetimePicker',
                template: `
    <atInput [ngModel]="atValue | atFormat: format" #timeinput (onFocus)="choosePicker()"
             (click)="choosePicker()"></atInput>
    <div *ngIf="show" class="over-flow-wrapper" [ngStyle]="{'top':cssTop}">
      <div class="at-datepicker">
        <div class="at-datepicker--panel">
          <div class="at-datepicker--panel--header">
            <div style="position: relative">
              <a *ngIf="atType == 'full'" (click)="preYear()" class="pre-year-btn">
              </a>
              <a *ngIf="atType == 'full'" (click)="preMonth()" class="pre-month-btn">
              </a>

              <a *ngIf="atType == 'year'" (click)="preCentury()" class="pre-year-btn">
              </a>


              <span class="current-select-label">
            <a (click)="setCal('month')" class="month-select">{{atMonth + 1}}月</a>
            <a (click)="setCal('year')" class="year-select">{{atYear}}年</a>
          </span>

              <a *ngIf="atType == 'full'" (click)="nextMonth()" class="next-month-btn">
              </a>
              <a (click)="nextYear()" class="next-year-btn">
              </a>

              <a *ngIf="atType == 'year'" (click)="nextCenury()" class="next-year-btn">
              </a>

            </div>
          </div>
          <div class="at-datepicker--panel--body">
            <atCalendar (_clickDate)="clickDate($event)" (_clickYear)="clickYear($event)"
                        (_clickMonth)="clickMonth($event)"
                        [format]="format"
                        [disableDate]="disableDate"
                        [atType]="atType"
                        [atYear]="atYear" [atMonth]="atMonth"
                        [showValue]="showValue"
                        [atValue]="atValue"></atCalendar>

          </div>
        </div>
      </div>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatetimepickerComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
DatetimepickerComponent.ctorParameters = () => [
    { type: ElementRef, },
];
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
class CalendarComponent {
    constructor() {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set disableDate(value) {
        this._disabledDate = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get disableDate() {
        return this._disabledDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showValue(value) {
        this._show_value = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get showValue() {
        return this._show_value || new Date();
    }
    /**
     * @return {?}
     */
    get atType() {
        return this._atType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atType(value) {
        this._atType = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get years() {
        return this._years;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set years(value) {
        this._years = value;
    }
    /**
     * @return {?}
     */
    get months() {
        return this._months;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set months(value) {
        this._months = value;
    }
    /**
     * @return {?}
     */
    get atValue() {
        return this._atValue || new Date();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atValue(value) {
        this._atValue = value;
        let /** @type {?} */ day = value || new Date();
        this.atMonth = moment(day).month();
        this.atYear = moment(day).year();
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get weeks() {
        return this._weeks;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set weeks(value) {
        this._weeks = value;
    }
    /**
     * @return {?}
     */
    get atYear() {
        return this._atYear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atYear(value) {
        this._atYear = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get atMonth() {
        return this._atMonth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atMonth(value) {
        this._atMonth = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    get atDay() {
        return this._atDay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atDay(value) {
        this._atDay = value;
        this.buildCalendar();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.monthName = moment.months();
    }
    /**
     * @param {?} d
     * @return {?}
     */
    buildMonth(d) {
        const /** @type {?} */ weeks = [];
        const /** @type {?} */ start = d.clone().date(1).day(0);
        const /** @type {?} */ month = d.clone();
        let /** @type {?} */ done = false;
        const /** @type {?} */ date = start.clone();
        let /** @type {?} */ monthIndex = date.month();
        let /** @type {?} */ count = 0;
        while (!done) {
            weeks.push({ days: this.buildWeek(date.clone(), month) });
            date.add(1, 'w');
            done = count++ > 4;
            monthIndex = date.month();
        }
        return weeks;
    }
    ;
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    buildWeek(date, month) {
        const /** @type {?} */ days = [];
        for (let /** @type {?} */ i = 0; i < 7; i++) {
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
    }
    ;
    /**
     * @param {?} year
     * @return {?}
     */
    buildCentury(year) {
        let /** @type {?} */ century = [];
        let /** @type {?} */ temparray = [];
        for (const /** @type {?} */ i of Array.from(Array(20).keys())) {
            century.push(i - 10 + year);
        }
        for (let /** @type {?} */ i = 0, /** @type {?} */ j = century.length; i < j; i += 5) {
            temparray.push(century.slice(i, i + 5));
            // do whatever
        }
        century = temparray;
        return century;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    buildYears(date) {
        let /** @type {?} */ formatMonths = [];
        let /** @type {?} */ months = [];
        for (let /** @type {?} */ i = 0; i < 12; i++) {
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
    }
    ;
    /**
     * @return {?}
     */
    buildCalendar() {
        moment.locale('zh-cn');
        let /** @type {?} */ time = (this.atValue == null || this.atValue == '' || !this.atValue) ? this.showValue : this.atValue;
        let /** @type {?} */ date = moment(time).year(this.atYear).month(this.atMonth);
        this.weeks = this.buildMonth(date);
        this.months = this.buildYears(date);
        this._years = this.buildCentury(this.atYear);
    }
    /**
     * @param {?} day
     * @return {?}
     */
    clickDay(day) {
        if (!day.disabled) {
            this._clickDate.emit(day);
        }
    }
    /**
     * @param {?} single
     * @return {?}
     */
    clickMonth(single) {
        this._clickMonth.emit(single);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    clickYear(year) {
        this._clickYear.emit(year);
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCalendar',
                template: `
    <table *ngIf="atType =='full'" class="at-calendar-table">
      <thead>
      <th class="column-header"><span class="column-header-inner">日</span></th>
      <th class="column-header"><span class="column-header-inner">一</span></th>
      <th class="column-header"><span class="column-header-inner">二</span></th>
      <th class="column-header"><span class="column-header-inner">三</span></th>
      <th class="column-header"><span class="column-header-inner">四</span></th>
      <th class="column-header"><span class="column-header-inner">五</span></th>
      <th class="column-header"><span class="column-header-inner">六</span></th>
      </thead>
      <tbody>
      <tr *ngFor="let week of weeks">
        <td
          *ngFor="let day of week.days" class="at-date-cell"
          (click)="clickDay(day)"
          [ngClass]="{'at-date-cell--last-month':day.isLastMonth,
'at-date-cell--selected':day.isSelectedDay ,
'at-date-cell--today':day.isCurrentDay,
'at-date-cell--next-month':day.isNextMonth,
'at-date-cell--disabled':day.disabled}">
          <div class="at-date">{{day.number}}</div>
        </td>
      </tr>
      </tbody>
    </table>

    <table *ngIf="atType=='month'" class="at-calendar-table">
      <tbody>
      <tr *ngFor="let month of months">
        <td
          *ngFor="let single of month" class="at-month-cell"
          (click)="clickMonth(single)"
          [ngClass]="{
              'at-date-cell--selected':single.isSelectedMonth ,
              'at-date-cell--today':single.isCurrentMonth}">
          <div class="at-date">{{single.name}}</div>
        </td>
      </tr>
      </tbody>
    </table>

    <table *ngIf="atType=='year'" class="at-calendar-table">
      <tbody>
      <tr *ngFor="let section of years">
        <td
          *ngFor="let year of section" class="at-month-cell"
          (click)="clickYear(year)"
          [ngClass]="{
              'at-date-cell--selected':year.isSelectedMonth ,
              'at-date-cell--today':year.isCurrentMonth}">
          <div class="at-date">{{year}}</div>
        </td>
      </tr>
      </tbody>
    </table>





  `,
            },] },
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [];
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
class TimeComponent {
    constructor() {
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
    ngOnInit() {
        this._buildHours();
        this._buildMinutes();
        this._buildSeconds();
    }
    /**
     * @return {?}
     */
    get selected_second() {
        return this._selected_second;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected_second(value) {
        this._selected_second = value;
    }
    /**
     * @return {?}
     */
    get selected_minutes() {
        return this._selected_minutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected_minutes(value) {
        this._selected_minutes = value;
    }
    /**
     * @return {?}
     */
    get selected_hour() {
        return this._selected_hour;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected_hour(value) {
        this._selected_hour = value;
    }
    /**
     * @return {?}
     */
    _buildHours() {
        this.hours = [];
        for (let /** @type {?} */ i = 0; i <= 23; i++) {
            this.hours.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    }
    /**
     * @return {?}
     */
    _buildMinutes() {
        this.minutes = [];
        for (let /** @type {?} */ i = 0; i <= 59; i++) {
            this.minutes.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    }
    /**
     * @return {?}
     */
    _buildSeconds() {
        this.seconds = [];
        for (let /** @type {?} */ i = 0; i <= 59; i++) {
            this.seconds.push({
                name: i.toString().length === 1 ? ('0' + i) : ('' + i),
                index: i
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (!this.inited) {
            this.inited = true;
            this.setPosition();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInited() {
    }
    /**
     * @return {?}
     */
    setPosition() {
        let /** @type {?} */ m_p = this.selected_minutes / 60;
        let /** @type {?} */ h_p = this.selected_hour / 24;
        let /** @type {?} */ s_p = this.selected_second / 60;
        let /** @type {?} */ h_el = this.hour_panel._elementRef.nativeElement;
        let /** @type {?} */ m_el = this.minute_panel._elementRef.nativeElement;
        let /** @type {?} */ s_el = this.second_panel._elementRef.nativeElement;
        let /** @type {?} */ h_el_height = h_el.scrollHeight;
        let /** @type {?} */ m_el_height = m_el.scrollHeight;
        let /** @type {?} */ s_el_height = s_el.scrollHeight;
        h_el.scrollTop = h_el_height * h_p;
        s_el.scrollTop = s_el_height * s_p;
        m_el.scrollTop = m_el_height * m_p;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    _select_minutes(index) {
        this.selected_second;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    _select_hour(index) {
    }
    /**
     * @param {?} index
     * @return {?}
     */
    _select_second(index) {
    }
}
TimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTime',
                template: `
    <div atRow>
      <div #hour_panel atCol [span]="8" class="at-time-panel">
        <ul>
          <li *ngFor="let s of hours"
              [ngClass]="{'time-selected':s.index == selected_hour}">
            {{s.name}}
          </li>
        </ul>
      </div>
      <div #minute_panel atCol [span]="8" class="at-time-panel">
        <ul>
          <li *ngFor="let s of minutes"
              [ngClass]="{'time-selected':s.index == selected_minutes}"
          >
            {{s.name}}
          </li>
        </ul>
      </div>
      <div #second_panel atCol [span]="8" class="at-time-panel">

        <ul>
          <li *ngFor="let s of seconds"
              [ngClass]="{'time-selected':s.index == selected_second}"
          >
            {{s.name}}
          </li>
        </ul>
      </div>
    </div>
  `,
            },] },
];
/** @nocollapse */
TimeComponent.ctorParameters = () => [];
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
class CardComponent {
    constructor() {
        this.border = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCard',
                template: `
    <div class="at-card" [ngClass]="{'at-card-bordered':border}">
      <ng-content select="[card-content]">

      </ng-content>
    </div>`,
            },] },
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    "border": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtFormatPipe {
    /**
     * @param {?} value
     * @param {?} formatString
     * @return {?}
     */
    transform(value, formatString) {
        if (value) {
            return moment(value).format(formatString);
        }
        else {
            return '';
        }
    }
}
AtFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'atFormat'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabSetComponent {
    constructor() {
        this.position = 'horizontal';
        this.selected_index = 0;
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} i
     * @return {?}
     */
    selectTab(i) {
        this.selected_index = i;
    }
}
TabSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTabSet',
                template: `
    <div class="at-tab at-tab-{{position}}">
      <div class="at-tabs-bar ">
        <div class="at-tabs-nav-container">
          <div class="at-tabs-nav-wrap">
            <div class="at-tab--navs">
              <at-tab-navs
                [selected_index]="selected_index"
                [position]="position">
                <div at-tab-label *ngFor="let item of tabs;let i =index" (click)="selectTab(i)" class="at-tab-nav">
                  <ng-template [ngTemplateOutlet]="item._tabHeading">
                  </ng-template>
                </div>
              </at-tab-navs>
            </div>
          </div>
        </div>
      </div>

      <div class="at-tab--contents">
        <div class="at-tab-content">
          <at-tab-body [content]="tabs[selected_index]?._content">

          </at-tab-body>
        </div>
      </div>

    </div>
  `,
            },] },
];
/** @nocollapse */
TabSetComponent.ctorParameters = () => [];
TabSetComponent.propDecorators = {
    "position": [{ type: Input },],
    "selected_index": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabComponent {
    /**
     * @param {?} _tabSetComponent
     */
    constructor(_tabSetComponent) {
        this._tabSetComponent = _tabSetComponent;
        this.tab_contents = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tabSetComponent.tabs.push(this);
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTab, [atTab]',
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
            },] },
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: TabSetComponent, },
];
TabComponent.propDecorators = {
    "_tabHeading": [{ type: ContentChild, args: ['atTabHeading',] },],
    "_content": [{ type: ViewChild, args: [TemplateRef,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabContentComponent {
    /**
     * @param {?} _tab_component
     */
    constructor(_tab_component) {
        this._tab_component = _tab_component;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TabContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'tabContent',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
TabContentComponent.ctorParameters = () => [
    { type: TabComponent, },
];
TabContentComponent.propDecorators = {
    "title": [{ type: Input },],
    "content": [{ type: ViewChild, args: [TemplateRef,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabBodyComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TabBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-tab-body',
                template: `
    <ng-template [ngTemplateOutlet]="content"></ng-template>`,
            },] },
];
/** @nocollapse */
TabBodyComponent.ctorParameters = () => [];
TabBodyComponent.propDecorators = {
    "content": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TabHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-tab-header',
                template: `<ng-content>
    
  </ng-content>`,
            },] },
];
/** @nocollapse */
TabHeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtTabInkDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _ngZone
     */
    constructor(_renderer, _elementRef, _ngZone) {
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
    alignToElement(element) {
        this.show();
        this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => {
                /** when horizontal remove height style and add transfrom left **/
                if (this.atPositionMode === 'horizontal') {
                    this._renderer.removeStyle(this._elementRef.nativeElement, 'height');
                    this._renderer.setStyle(this._elementRef.nativeElement, 'transform', `translate3d(${this._getLeftPosition(element)}, 0px, 0px)`);
                    this._renderer.setStyle(this._elementRef.nativeElement, 'width', this._getElementWidth(element));
                }
                else {
                    /** when vertical remove width style and add transfrom top **/
                    this._renderer.removeStyle(this._elementRef.nativeElement, 'width');
                    this._renderer.setStyle(this._elementRef.nativeElement, 'transform', `translate3d(0px, ${this._getTopPosition(element)}, 0px)`);
                    this._renderer.setStyle(this._elementRef.nativeElement, 'height', this._getElementHeight(element));
                }
            });
        });
    }
    /**
     * @return {?}
     */
    show() {
        this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'visible');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDisplay(value) {
        this._renderer.setStyle(this._elementRef.nativeElement, 'display', value);
    }
    /**
     * @return {?}
     */
    hide() {
        this._renderer.setStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
    }
    /**
     * @param {?} element
     * @return {?}
     */
    _getLeftPosition(element) {
        return element ? element.offsetLeft + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    _getElementWidth(element) {
        return element ? element.offsetWidth + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    _getTopPosition(element) {
        return element ? element.offsetTop + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    _getElementHeight(element) {
        return element ? element.offsetHeight + 'px' : '0';
    }
}
AtTabInkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[AtTabInk]'
            },] },
];
/** @nocollapse */
AtTabInkDirective.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: NgZone, },
];
AtTabInkDirective.propDecorators = {
    "_atTabsInkBar": [{ type: HostBinding, args: ['class.at-tabs-ink-bar',] },],
    "atAnimated": [{ type: Input },],
    "atPositionMode": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabLabelDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
TabLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[at-tab-label]'
            },] },
];
/** @nocollapse */
TabLabelDirective.ctorParameters = () => [
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabNavsComponent {
    constructor() {
        this._selected_index = 0;
        this._position_modal = 'horizontal';
    }
    /**
     * @return {?}
     */
    get selected_index() {
        return this._selected_index;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set position(value) {
        this._position_modal = value;
        this.alignInk(this.selected_index);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position_modal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected_index(value) {
        this._selected_index = value;
        this.alignInk(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._inkBar.alignToElement(this._labelWrappers.toArray()[0].elementRef.nativeElement);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    alignInk(index) {
        if (this._labelWrappers) {
            this._inkBar.alignToElement(this._labelWrappers.toArray()[index].elementRef.nativeElement);
        }
    }
}
TabNavsComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-tab-navs',
                template: `
    <div AtTabInk [atPositionMode]="position" class="at-tabs-ink-bar at-tabs-ink-bar-animated"></div>
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
TabNavsComponent.ctorParameters = () => [];
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
class StepsComponent {
    constructor() {
        this._direction = 'horizontal';
        this.steps = [];
        this._current = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set current(value) {
        if (value < 0) {
            return;
        }
        console.log(this._current);
        this._current = value;
        this.steps[value].status = 'process';
        //all before success
        this.steps.filter((s, i) => {
            return i < value;
        }).forEach((step) => step.status = 'finish');
        //all after wait
        this.steps.filter((s, i) => {
            return i > value;
        }).forEach((step) => step.status = 'wait');
    }
    /**
     * @return {?}
     */
    get current() {
        return this._current;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set direction(value) {
        this._direction = value;
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._direction;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //init status
        this.steps[0].status = 'process';
    }
    /**
     * @param {?} step
     * @return {?}
     */
    addStep(step) {
        this.steps.push(step);
    }
    /**
     * @return {?}
     */
    get marginPx() {
        return -this.margin + 'px';
    }
    /**
     * @param {?} i
     * @return {?}
     */
    stepWidth(i) {
        let /** @type {?} */ width = i == (this.steps.length - 1) ? '' : (100 / (this.steps.length - 1)) + '%';
        return width;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    isLast(i) {
        return i != this.steps.length - 1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        let /** @type {?} */ array = this.stepList.toArray();
        let /** @type {?} */ last = array[array.length - 1];
        let /** @type {?} */ width = last.nativeElement.offsetWidth;
        setTimeout(_ => {
            this.margin = (width + 10) / (this.steps.length - 1);
        });
    }
}
StepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-steps',
                template: `
    <div class="at-steps at-steps--{{direction}}">
      <div #steps *ngFor="let step of steps;let i = index"
           class="at-step at-step--{{step.status}}"
           [ngStyle]="{width: stepWidth(i) , 'margin-right':marginPx}">
        <div *ngIf="isLast(i)" class="at-step__line"></div>
        <div class="at-step__head">
          <div class="at-step__label" [ngClass]="{'at-step__icon': step.icon}">
            <div *ngIf="step.status !='finish' && !step.icon" class="at-step__order">
              {{ i+1}}
            </div>
            <div *ngIf="step.icon">
              <i class="icon {{step.icon}}"></i>
            </div>
            <div *ngIf="step.status === 'finish'">
              <i class="icon icon-check"></i>
            </div>
            <div *ngIf="step.status === 'error'">
              <i class="icon icon-x"></i>
            </div>
          </div>
        </div>
        <div class="at-step__main">
          <div class="at-step__title">{{step.title}}</div>
          <div class="at-step__description">{{step.description}}</div>
        </div>
      </div>
    </div>

  `,
            },] },
];
/** @nocollapse */
StepsComponent.ctorParameters = () => [];
StepsComponent.propDecorators = {
    "current": [{ type: Input },],
    "direction": [{ type: Input },],
    "stepList": [{ type: ViewChildren, args: ['steps',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StepComponent {
    /**
     * @param {?} parent
     * @param {?} el
     */
    constructor(parent, el) {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get finnalStatus() {
        return '';
    }
}
StepComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-step',
                template: `
    <ng-content>

    </ng-content>
  `,
            },] },
];
/** @nocollapse */
StepComponent.ctorParameters = () => [
    { type: StepsComponent, },
    { type: ElementRef, },
];
StepComponent.propDecorators = {
    "icon": [{ type: Input },],
    "title": [{ type: Input },],
    "description": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtBreadItemComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AtModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: AtModule,
            providers: [
                AtNotificationService,
                AtMessageService, AtMessageContainerService,
                AtModalService, ModalBaseService, ComponentCreatorBase, NotificationBaseService,
                { provide: AT_ROOT_CONFIG, useValue: options },
            ]
        };
    }
}
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
/**
 * @record
 */

const AT_ROOT_CONFIG = new InjectionToken('AtRootConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { TabComponent, ButtonComponent, HollowDirective, ButtonGroupComponent, MenuComponent, MenuItemComponent, SubMenuComponent, MenuItemGroupComponent, MenuListComponent, RadioGroupComponent, RadioComponent, InlineMenuComponent, RowComponent, ColComponent, TagComponent, IconComponent, CheckboxComponent, CheckboxGroupComponent, InputComponent, SelectComponent, RadioButtonComponent, SwitchComponent, OptionComponent, SliderComponent, TextareaComponent, DropdownComponent, DropdownMenuItemComponent, DropMenuListComponent, NotificationComponent, ComponentCreatorBase, NotificationContainerComponent, NotificationBaseService, AtNotificationService, AlertComponent, BadgeComponent, ModalComponent, AtGlobalMonitorService, AtModalService, ModalBaseService, TableComponent, AtTbodyDirective, AtTdDirective, AtThDirective, AtTbodyTrDirective, AtTheadDirective, PagenationComponent, BreadcrumbComponent, AtBreadItemDirective, MessageContainerComponent, MessageComponent, AtMessageService, AtMessageContainerService, PopoverComponent, ProgressComponent, TooltipComponent, FormComponent, AtFormDirective, AtFormItemDirective, AtFormLabelDirective, AtFormContentDirective, AtFormErrorDirective, AtFormFeedbackDirective, DatetimepickerComponent, CalendarComponent, TimeComponent, CardComponent, AtBreadItemComponent, AtModule, AT_ROOT_CONFIG, DropDownAnimation as ɵb, FadeAnimation as ɵc, TagAnimation as ɵa, ComponentCreator as ɵq, AtFormatPipe as ɵg, DropdownDirective as ɵd, ModalBodyDirective as ɵe, PopTriggerDirective as ɵf, StepComponent as ɵp, StepsComponent as ɵo, AtTabInkDirective as ɵl, TabBodyComponent as ɵj, TabContentComponent as ɵi, TabHeaderComponent as ɵk, TabLabelDirective as ɵn, TabNavsComponent as ɵm, TabSetComponent as ɵh };
export { CommonModule } from '@angular/common';
