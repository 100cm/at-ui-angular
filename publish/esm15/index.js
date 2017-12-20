import { ApplicationRef, Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Injectable, InjectionToken, Injector, Input, IterableDiffers, NgModule, NgZone, Optional, Output, Pipe, Renderer2, SkipSelf, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation, forwardRef, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge as merge$1 } from 'rxjs/observable/merge';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { debounceTime as debounceTime$1 } from 'rxjs/operator/debounceTime';
import { setTimeout as setTimeout$1 } from 'timers';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Directionality, DomPortalHost, Platform, PlatformModule, TemplatePortal } from '@angular/cdk';
import { Subject as Subject$1 } from 'rxjs/Subject';
import { Subscription as Subscription$1 } from 'rxjs/Subscription';
import { fromEvent as fromEvent$1 } from 'rxjs/observable/fromEvent';
import { auditTime as auditTime$1 } from 'rxjs/operator/auditTime';
import { __extends } from 'tslib';
import 'rxjs/operator/finally';
import 'rxjs/operator/catch';
import 'rxjs/operator/do';
import 'rxjs/operator/map';
import 'rxjs/operator/filter';
import 'rxjs/operator/share';
import { first as first$1 } from 'rxjs/operator/first';
import 'rxjs/operator/switchMap';
import 'rxjs/operator/startWith';
import { takeUntil as takeUntil$1 } from 'rxjs/operator/takeUntil';
import { DOCUMENT } from '@angular/platform-browser';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';

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
        this.showText = (this.text.nativeElement.innerText.length > 0 || this.text.nativeElement.children.length > 0);
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
/**
 * @nocollapse
 */
ButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
ButtonComponent.propDecorators = {
    'atType': [{ type: Input },],
    'atShape': [{ type: Input },],
    'atIcon': [{ type: Input },],
    'iconLoading': [{ type: Input },],
    'size': [{ type: Input },],
    'text': [{ type: ViewChild, args: ['text',] },],
};

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
/**
 * @nocollapse
 */
HollowDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
HollowDirective.propDecorators = {
    'atType': [{ type: Input, args: ['atType',] },],
};

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
/**
 * @nocollapse
 */
ButtonGroupComponent.ctorParameters = () => [];

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
/**
 * @nocollapse
 */
MenuComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
MenuComponent.propDecorators = {
    'theme': [{ type: Input, args: ['theme',] },],
    'atType': [{ type: Input },],
    'verticalClass': [{ type: HostBinding, args: [`class.at-menu--vertical`,] },],
    'horizontalClass': [{ type: HostBinding, args: [`class.at-menu--horizontal`,] },],
    'inlineClass': [{ type: HostBinding, args: [`class.at-menu--inline`,] },],
    'darkTheme': [{ type: HostBinding, args: ['class.at-menu--dark',] },],
    'lightTheme': [{ type: HostBinding, args: ['class.at-menu--light',] },],
};

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
/**
 * @nocollapse
 */
MenuItemComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
MenuItemComponent.propDecorators = {
    'item_class': [{ type: HostBinding, args: [`class.at-menu__item`,] },],
    'setActive': [{ type: HostListener, args: ['click',] },],
    'activeCls': [{ type: HostBinding, args: ['class.at-menu__item--active',] },],
    'active': [{ type: Input, args: ['active',] },],
};

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
/**
 * @nocollapse
 */
SubMenuComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: MenuComponent, decorators: [{ type: Inject, args: [MenuComponent,] },] },
    { type: Renderer2, },
];
SubMenuComponent.propDecorators = {
    'isOpen': [{ type: Input },],
    'item_class': [{ type: HostBinding, args: [`class.at-menu__submenu`,] },],
    'setActive': [{ type: HostListener, args: ['click',] },],
    'activeCls': [{ type: HostBinding, args: ['class.at-menu__item--active',] },],
    'OpenCls': [{ type: HostBinding, args: ['class.at-menu__submenu--opened',] },],
    'active': [{ type: Input },],
    'popover': [{ type: ViewChild, args: ['popover',] },],
};

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
/**
 * @nocollapse
 */
MenuItemGroupComponent.ctorParameters = () => [
    { type: MenuComponent, decorators: [{ type: Inject, args: [MenuComponent,] },] },
];
MenuItemGroupComponent.propDecorators = {
    'label': [{ type: Input },],
    'inline': [{ type: Input },],
    'drop_down': [{ type: HostBinding, args: ['class.at-dropdown-menu',] },],
};

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
/**
 * @nocollapse
 */
MenuListComponent.ctorParameters = () => [];
MenuListComponent.propDecorators = {
    'menu': [{ type: HostBinding, args: ['class.at-dropdown-menu',] },],
};

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
/**
 * @nocollapse
 */
RadioGroupComponent.ctorParameters = () => [];
RadioGroupComponent.propDecorators = {
    'size': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
RadioComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: RadioGroupComponent, },
    { type: Renderer2, },
];
RadioComponent.propDecorators = {
    'atValue': [{ type: Input },],
    'disabled': [{ type: Input },],
    'checked': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
};

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
/**
 * @nocollapse
 */
InlineMenuComponent.ctorParameters = () => [];
InlineMenuComponent.propDecorators = {
    'at_menu': [{ type: HostBinding, args: ['class.at-menu',] },],
};

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
        return ((this._alignType && `flex-${this._alignType}`));
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
        return ((this._flexType && `flex-${this._flexType}`));
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
/**
 * @nocollapse
 */
RowComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
RowComponent.propDecorators = {
    'reverse': [{ type: Input },],
    'noGutter': [{ type: Input },],
    'alignType': [{ type: Input },],
    'flexType': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
ColComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
ColComponent.propDecorators = {
    'colType': [{ type: Input },],
    'span': [{ type: Input },],
    'offset': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
TagComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
TagComponent.propDecorators = {
    'tagSpan': [{ type: ViewChild, args: ['tag',] },],
    'color': [{ type: Input },],
    'closed': [{ type: Input },],
    'closeable': [{ type: Input },],
    'onClose': [{ type: Output },],
};

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
                template: `<i class="icon icon-{{type}}"></i>
  `,
            },] },
];
/**
 * @nocollapse
 */
IconComponent.ctorParameters = () => [];
IconComponent.propDecorators = {
    'type': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    'atDisabled': [{ type: Input },],
    'changeCheck': [{ type: Output },],
    'label': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
CheckboxGroupComponent.ctorParameters = () => [];
CheckboxGroupComponent.propDecorators = {
    'checkbox': [{ type: ContentChildren, args: [CheckboxComponent,] },],
};

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
/**
 * @nocollapse
 */
InputComponent.ctorParameters = () => [
    { type: ElementRef, },
];
InputComponent.propDecorators = {
    'max': [{ type: Input },],
    'min': [{ type: Input },],
    'step': [{ type: Input },],
    'atType': [{ type: Input },],
    'onFocus': [{ type: Output },],
    'onFocusOut': [{ type: Output },],
    'atSize': [{ type: Input },],
    'icon': [{ type: Input },],
    'type': [{ type: Input },],
    'disabled': [{ type: Input },],
    'atStatus': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'prepend': [{ type: ViewChild, args: ['prepend',] },],
    'append': [{ type: ViewChild, args: ['append',] },],
    'inputField': [{ type: ViewChild, args: ['input',] },],
    'value_change': [{ type: Output },],
};

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

const FadeAnimation = trigger('fadeAnimation', [
    state('void', style({ opacity: 0 })),
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0 })),
    transition('* => true', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    transition('* => void', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
]);

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
                const /** @type {?} */ arrayOptions = (Array.from(this._selectedOptions));
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
        this.forceUpdateSelectedOption(this._value);
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
        const /** @type {?} */ arrayOptions = (Array.from(this._selectedOptions));
        this.onChange(arrayOptions.map(item => item.atValue));
    }
    /**
     * @param {?} set
     * @param {?} option
     * @return {?}
     */
    isInSet(set, option) {
        return (((Array.from(set))).find((data) => data.atValue === option.atValue));
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
                return (item != null) && (currentModelValue.indexOf(item.atValue) !== -1);
            });
            if ((!triggerByNgModel)) {
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
            let /** @type {?} */ option = ({
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
    <span *ngFor="let item of _selectedOptions" class="at-tag" [@tagAnimation]>
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
/**
 * @nocollapse
 */
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    'change': [{ type: Output },],
    'searchable': [{ type: Input },],
    'tagAble': [{ type: Input },],
    'hover': [{ type: Input },],
    'allowClear': [{ type: Input },],
    'disabled': [{ type: Input },],
    'atSize': [{ type: Input },],
    'multiple': [{ type: Input },],
    'selection': [{ type: ViewChild, args: ['selection',] },],
    'tagInput': [{ type: ViewChild, args: ['tag_input',] },],
    'searchInput': [{ type: ViewChild, args: ['search_input',] },],
};

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
/**
 * @nocollapse
 */
RadioButtonComponent.ctorParameters = () => [];
RadioButtonComponent.propDecorators = {
    'fill': [{ type: Input },],
    'textColor': [{ type: Input },],
    'buttonChecked': [{ type: HostBinding, args: ['class.at-radio--checked',] },],
    'content_span': [{ type: ViewChild, args: ['content_span',] },],
};

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
/**
 * @nocollapse
 */
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    'checkText': [{ type: Input },],
    'unCheckText': [{ type: Input },],
    'disabled': [{ type: Input },],
    'change': [{ type: Output },],
    'atSize': [{ type: Input },],
    'switch': [{ type: HostListener, args: ['click', ['$event'],] },],
};

class OptionComponent {
    /**
     * @param {?} _selectComponent
     */
    constructor(_selectComponent) {
        this._selectComponent = _selectComponent;
        this._selected = false;
        this._isTag = false;
        this._disabled = false;
        this._selectComponent.addOption(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
                template: `<ng-content></ng-content>
`,
            },] },
];
/**
 * @nocollapse
 */
OptionComponent.ctorParameters = () => [
    { type: SelectComponent, },
];
OptionComponent.propDecorators = {
    'disabled': [{ type: Input },],
    'atValue': [{ type: Input },],
    'atLabel': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
SliderComponent.ctorParameters = () => [];

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
/**
 * @nocollapse
 */
TextareaComponent.ctorParameters = () => [];
TextareaComponent.propDecorators = {
    'atPlaceholder': [{ type: Input },],
};

const POSITION_MAP = {
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
const DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP['top'], POSITION_MAP['right'], POSITION_MAP['bottom'], POSITION_MAP['left']]);
const DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP['bottomLeft'], POSITION_MAP['topLeft']]);

/**
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function arrayMap(array, iteratee) {
    let /** @type {?} */ index = -1;
    const /** @type {?} */ length = array == null ? 0 : array.length, /** @type {?} */ result = Array(length);
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
/**
 * @nocollapse
 */
DropdownMenuItemComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
DropdownMenuItemComponent.propDecorators = {
    'disabled': [{ type: Input },],
    'divided': [{ type: Input },],
    'item_class': [{ type: HostBinding, args: [`class.at-dropdown-menu__item`,] },],
    'setActive': [{ type: HostListener, args: ['click',] },],
    'activeCls': [{ type: HostBinding, args: ['class.at-dropdown-menu__item--active',] },],
    'getDivide': [{ type: HostBinding, args: ['class.at-dropdown-menu__item--divided',] },],
    'getDisableCls': [{ type: HostBinding, args: ['class.at-dropdown-menu__item--disabled',] },],
    'active': [{ type: Input, args: ['active',] },],
};

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
/**
 * @nocollapse
 */
DropdownDirective.ctorParameters = () => [
    { type: ElementRef, },
];
DropdownDirective.propDecorators = {
    'trigger': [{ type: HostBinding, args: ['class.at-dropdown__trigger',] },],
};

class DropdownComponent {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetector
     */
    constructor(_renderer, _changeDetector) {
        this._renderer = _renderer;
        this._changeDetector = _changeDetector;
        this.hasFilterButton = false;
        this._triggerWidth = 0;
        this._placement = 'bottomLeft';
        this._dropDownPosition = 'bottom';
        this._positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.trigger = 'hover';
        this.autoClose = false;
        this.atVisible = false;
        this.dropDownChange = new EventEmitter();
        this.custom_content = false;
        this._onVisibleChange = (visible) => {
            if (visible) {
                if (!this._triggerWidth) {
                    this._setTriggerWidth();
                }
            }
            this.atVisible = visible;
            this._changeDetector.markForCheck();
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placement(value) {
        this._placement = value;
        this._dropDownPosition = (this.placement.indexOf('top') !== -1) ? 'top' : 'bottom';
        this._positions.unshift(/** @type {?} */ (POSITION_MAP[this._placement]));
    }
    ;
    /**
     * @return {?}
     */
    get placement() {
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
        this.dropDownChange.emit(false);
    }
    /**
     * @return {?}
     */
    _show() {
        this.dropDownChange.emit(true);
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
            this.atVisible = false;
        }
    }
    /**
     * @return {?}
     */
    _setTriggerWidth() {
        this._triggerWidth = this._nzOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
    /**
     * @param {?} observable$
     * @return {?}
     */
    _startSubscribe(observable$) {
        this._subscription = debounceTime$1.call(observable$, 300)
            .subscribe(this._onVisibleChange);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // if (this._nzMenu) {
        //   this._nzMenu.setDropDown(true);
        // }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        let /** @type {?} */ mouse$;
        if (this.trigger === 'hover') {
            mouse$ = Observable$1.create((observer) => {
                const /** @type {?} */ disposeMouseEnter = this._renderer.listen(this._nzOrigin.elementRef.nativeElement, 'mouseenter', () => {
                    observer.next(true);
                });
                const /** @type {?} */ disposeMouseLeave = this._renderer.listen(this._nzOrigin.elementRef.nativeElement, 'mouseleave', () => {
                    observer.next(false);
                });
                return () => {
                    disposeMouseEnter();
                    disposeMouseLeave();
                };
            });
        }
        if (this.trigger === 'click') {
            mouse$ = Observable$1.create((observer) => {
                const /** @type {?} */ dispose = this._renderer.listen(this._nzOrigin.elementRef.nativeElement, 'click', (e) => {
                    e.preventDefault();
                    observer.next(true);
                });
                return () => dispose();
            });
        }
        const /** @type {?} */ observable$ = merge$1(mouse$, this.dropDownChange.asObservable());
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
      nz-connected-overlay
      [hasBackdrop]="_hasBackdrop"
      [positions]="_positions"
      [origin]="_nzOrigin"
      (backdropClick)="_hide()"
      (detach)="_hide()"
      [minWidth]="_triggerWidth"
      (positionChange)="_onPositionChange($event)"
      [open]="atVisible">
      <div

        [@dropDownAnimation]="_dropDownPosition"
        (mouseenter)="_onMouseEnterEvent($event)"
        (mouseleave)="_onMouseLeaveEvent($event)"
        [style.minWidth.px]="_triggerWidth"
        (click)="_clickDropDown($event)">
        <div>
          <ul *ngIf="!custom_content" atDropMenuList>
            <ng-content select="[atDropMenuItem]"></ng-content>
          </ul>
          <!--<ng-content select="[nz-table-filter]"></ng-content>-->
          <ng-content select="[atDropMenuCustomItem]"></ng-content>
        </div>
        <!--<ng-content select="[nz-dropdown-custom]"></ng-content>-->
      </div>
    </ng-template>
  `,
                animations: [DropDownAnimation, trigger('fadeAnimation', [
                        state('*', style({ opacity: 1 })),
                        transition('* => void', [
                            animate(50, style({ opacity: 0, display: 'hidden' }))
                        ]),
                        transition('void => *', [
                            style({ opacity: '0' }),
                            animate(50, style({ opacity: 1, }))
                        ])
                    ]),],
            },] },
];
/**
 * @nocollapse
 */
DropdownComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
DropdownComponent.propDecorators = {
    '_nzMenu': [{ type: ContentChild, args: [DropdownMenuItemComponent,] },],
    '_nzOrigin': [{ type: ContentChild, args: [DropdownDirective,] },],
    'trigger': [{ type: Input },],
    'autoClose': [{ type: Input },],
    'atVisible': [{ type: Input },],
    'dropDownChange': [{ type: Output },],
    'custom_content': [{ type: Input },],
    'placement': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
DropMenuListComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];

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
/**
 * @nocollapse
 */
NotificationContainerComponent.ctorParameters = () => [
    { type: ElementRef, },
];

const StatusIconType = {
    'info': 'icon-info',
    'error': 'icon-x-circle',
    'warning': 'icon-alert-circle',
    'success': 'icon-check-circle',
    'loading': 'icon-loader'
};

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
/**
 * @nocollapse
 */
NotificationComponent.ctorParameters = () => [
    { type: NotificationContainerComponent, },
];
NotificationComponent.propDecorators = {
    'config': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
ComponentCreatorBase.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: ApplicationRef, },
    { type: Injector, },
];

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
        setTimeout(() => {
            this.componentRef = (this.base.componentFactoryResolver
                .resolveComponentFactory(this.component)
                .create(this.base.injector));
            this.base.appRef.attachView(this.componentRef.hostView);
            this.domElem = (((this.componentRef.hostView))
                .rootNodes[0]);
            document.body.appendChild(this.domElem);
        });
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
/**
 * @nocollapse
 */
NotificationBaseService.ctorParameters = () => [
    { type: ComponentCreatorBase, },
];

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
/**
 * @nocollapse
 */
AtNotificationService.ctorParameters = () => [
    { type: NotificationBaseService, },
    { type: ComponentCreatorBase, },
];

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
/**
 * @nocollapse
 */
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    'message': [{ type: Input },],
    'atType': [{ type: Input },],
    'desc': [{ type: Input },],
    'icon': [{ type: Input },],
    'closeText': [{ type: Input },],
    'onClose': [{ type: Output },],
};

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
/**
 * @nocollapse
 */
BadgeComponent.ctorParameters = () => [];
BadgeComponent.propDecorators = {
    'atType': [{ type: Input },],
    'max': [{ type: Input },],
    'dot': [{ type: Input },],
    'show': [{ type: Input },],
    'atValue': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
AtGlobalMonitorService.ctorParameters = () => [];

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
        const /** @type {?} */ origin = this.global_service.lastClickPosition;
        let /** @type {?} */ el = this.modal_content.nativeElement;
        let /** @type {?} */ transformOrigin = `${origin.x - el.offsetLeft}px ${origin.y - el.offsetTop}px 0px`;
        this.positionStyle = { 'transform-origin': transformOrigin, 'top': this.top + 'px' };
        return this.positionStyle;
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
        let /** @type {?} */ custom_title = this.customTitle.nativeElement;
        return (custom_title.children.length > 0 || custom_title.innerText.length > 0);
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
      <div [hidden]="!show" class="at-modal__mask"></div>

      <div [ngStyle]="{'display': show ? '' : 'none'}"
           role="dialog"
           (click)="cancelFromMask($event)"
           class="at-modal__wrapper at-modal--{{atType}} at-modal--{{atType}}-{{status}}"
      >
        <div #modal_content class="at-modal" [@enterLeave]="state"
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

    </div>

  `,
            },] },
];
/**
 * @nocollapse
 */
ModalComponent.ctorParameters = () => [
    { type: AtGlobalMonitorService, },
];
ModalComponent.propDecorators = {
    'width': [{ type: Input },],
    'top': [{ type: Input },],
    'maskClose': [{ type: Input },],
    'onCancel': [{ type: Output },],
    'onOk': [{ type: Output },],
    'modal_content': [{ type: ViewChild, args: ['modal_content',] },],
    'closeable': [{ type: Input },],
    'title': [{ type: Input },],
    'message': [{ type: Input },],
    'atType': [{ type: Input },],
    'status': [{ type: Input },],
    'show': [{ type: Input },],
    'customTitle': [{ type: ViewChild, args: ['custom_title',] },],
};

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
/**
 * @nocollapse
 */
ModalBaseService.ctorParameters = () => [
    { type: ComponentCreatorBase, },
];

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
/**
 * @nocollapse
 */
AtModalService.ctorParameters = () => [
    { type: ModalBaseService, },
];

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
/**
 * @nocollapse
 */
AtThDirective.ctorParameters = () => [];
AtThDirective.propDecorators = {
    'atWidth': [{ type: Input },],
    '_th': [{ type: HostBinding, args: ['class.at-table__column',] },],
    '_tc': [{ type: HostBinding, args: ['class.at-table__cell',] },],
};

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
/**
 * @nocollapse
 */
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    'size': [{ type: Input },],
    'height': [{ type: Input },],
    'stripe': [{ type: Input },],
    'border': [{ type: Input },],
    'setThs': [{ type: ContentChildren, args: [AtThDirective, { descendants: true },] },],
    'atThead': [{ type: ContentChild, args: ['fixedHead',] },],
    'atTbody': [{ type: ContentChild, args: ['fixedBody',] },],
    'fixed_head': [{ type: ViewChild, args: ['fix_head',] },],
};

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
/**
 * @nocollapse
 */
AtTbodyDirective.ctorParameters = () => [];
AtTbodyDirective.propDecorators = {
    '_tbody': [{ type: HostBinding, args: ['class.at-table__tbody',] },],
};

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
/**
 * @nocollapse
 */
AtTdDirective.ctorParameters = () => [];
AtTdDirective.propDecorators = {
    '_td': [{ type: HostBinding, args: ['class.at-table__cell',] },],
};

class AtTbodyTrDirective {
    constructor() { }
}
AtTbodyTrDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atTbodyTr]'
            },] },
];
/**
 * @nocollapse
 */
AtTbodyTrDirective.ctorParameters = () => [];

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
/**
 * @nocollapse
 */
AtTheadDirective.ctorParameters = () => [];
AtTheadDirective.propDecorators = {
    '_thead': [{ type: HostBinding, args: ['class.at-table__thead',] },],
};

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
          <atSelect [(ngModel)]="pageSize">
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
/**
 * @nocollapse
 */
PagenationComponent.ctorParameters = () => [];
PagenationComponent.propDecorators = {
    'size': [{ type: Input },],
    'simple': [{ type: Input },],
    'pageIndexChange': [{ type: Output },],
    'pageSizeChange': [{ type: Output },],
    'atQuickJump': [{ type: Input },],
    'atPageSizer': [{ type: Input },],
    'atPageIndex': [{ type: Input },],
    'total': [{ type: Input },],
    'pageSize': [{ type: Input },],
};

class AtBreadItemDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.inited = false;
        this.item = true;
        this.separator = '/';
        this._inner = this.el.nativeElement.children;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.inited) {
            let /** @type {?} */ html = '';
            Array.from(this._inner).forEach(_el => {
                html += _el.outerHTML;
            });
            html ? html : html += this.el.nativeElement.innerText;
            this.el.nativeElement.innerHTML =
                `<span class="at_breadcrumb__text">${html}</span>
    <span class="at-breadcrumb__separator">${this.separator}</span>`;
            this.inited = true;
        }
    }
}
AtBreadItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atBreadItem]'
            },] },
];
/**
 * @nocollapse
 */
AtBreadItemDirective.ctorParameters = () => [
    { type: ElementRef, },
];
AtBreadItemDirective.propDecorators = {
    'item': [{ type: HostBinding, args: ['class.at-breadcrumb__item',] },],
    'separator': [{ type: Input },],
};

class BreadcrumbComponent {
    constructor() {
        this.separator = '/';
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
        let /** @type {?} */ items = value.toArray();
        items.forEach((item) => {
            item.separator = this.separator;
        });
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
/**
 * @nocollapse
 */
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    'separator': [{ type: Input },],
    'breadItem': [{ type: ContentChild, args: ['breadItem',] },],
    'setThs': [{ type: ContentChildren, args: [AtBreadItemDirective,] },],
};

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
 * @nocollapse
 */
MessageContainerComponent.ctorParameters = () => [];

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
/**
 * @nocollapse
 */
MessageComponent.ctorParameters = () => [
    { type: MessageContainerComponent, },
];
MessageComponent.propDecorators = {
    'message': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
AtMessageContainerService.ctorParameters = () => [
    { type: ComponentCreatorBase, },
];

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
/**
 * @nocollapse
 */
AtMessageService.ctorParameters = () => [
    { type: AtMessageContainerService, },
];

class PopoverComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._placement = 'top';
        this._trigger = 'click';
        this.position = {};
        this._pop = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get title() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        this._title = value;
    }
    /**
     * @return {?}
     */
    get trigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set trigger(value) {
        this._trigger = value;
    }
    /**
     * @return {?}
     */
    get placement() {
        return this._placement;
    }
    /**
     * @return {?}
     */
    get pop() {
        return this._pop;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickout(event) {
        if (this.el.nativeElement.contains(event.target)) {
        }
        else {
            this.pop = false;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pop(value) {
        this._pop = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placement(value) {
        this._placement = value;
    }
    /**
     * @return {?}
     */
    setPopPosition() {
        let /** @type {?} */ trigger$$1 = this.triggerEle.nativeElement;
        let /** @type {?} */ popover = this.popover.nativeElement;
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
        popover.style.top = `${this.position.top}px`;
        popover.style.left = `${this.position.left}px`;
    }
    /**
     * @return {?}
     */
    activePop() {
        if (this.trigger == 'click') {
            this.pop = !this.pop;
        }
    }
    /**
     * @return {?}
     */
    mouseOver() {
        if (this.trigger == 'hover') {
            clearTimeout(this.timer);
            this.timer = setTimeout(_ => {
                this.pop = true;
            }, 300);
        }
    }
    /**
     * @return {?}
     */
    mouseOut() {
        if (this.trigger == 'hover') {
            clearTimeout(this.timer);
            this.timer = setTimeout(_ => {
                this.pop = false;
            }, 300);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        // this.setPopPosition()
    }
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'atPopover',
                animations: [FadeAnimation],
                template: `
    <div class="at-popover">
  <span (mouseenter)="mouseOver()" (mouseleave)="mouseOut()" (click)="activePop()" class="at-popover__trigger" #trigger>
  <ng-content select="[popTrigger]">
  </ng-content>
</span>
      <div #popover [@fadeAnimation] (mouseenter)="mouseOver()" (mouseleave)="mouseOut()"
           [ngStyle]="{'display': pop ? '' :'none'}"
           class="at-popover__popper at-popover--{{placement}}">
        <div class="at-popover__arrow"></div>
        <div *ngIf="title" class="at-popover__title">
          <ng-content select="[popTitle]"></ng-content>
        </div>
        <div class="at-popover__content">
          <ng-content select="[popContent]"></ng-content>
        </div>
      </div>
    </div>

  `
            },] },
];
/**
 * @nocollapse
 */
PopoverComponent.ctorParameters = () => [
    { type: ElementRef, },
];
PopoverComponent.propDecorators = {
    'title': [{ type: Input },],
    'trigger': [{ type: Input },],
    'clickout': [{ type: HostListener, args: ['document:click', ['$event'],] },],
    'pop': [{ type: Input },],
    'placement': [{ type: Input },],
    'triggerEle': [{ type: ViewChild, args: ['trigger',] },],
    'popover': [{ type: ViewChild, args: ['popover',] },],
};

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
/**
 * @nocollapse
 */
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    'stroke': [{ type: Input },],
    'width': [{ type: Input },],
    'status': [{ type: Input },],
};

class TooltipComponent extends PopoverComponent {
    constructor() {
        super(...arguments);
        this.trigger = 'hover';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placement(value) {
        this._placement = value;
    }
    /**
     * @return {?}
     */
    get placement() {
        return this._placement;
    }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTooltip',
                template: `
    <div class="at-tooltip">
    <span (mouseenter)="mouseOver()" (mouseleave)="mouseOut()" class="at-tooltip__trigger"
          #trigger>
      <ng-content select="[tooltipTrigger]"></ng-content>
    </span>
      <div
        (mouseenter)="mouseOver()" (mouseleave)="mouseOut()" [ngStyle]="{'display': pop ? '' :'none'}"
        class="at-tooltip__popper at-tooltip--{{placement}}" #popover>
        <div class="at-tooltip__arrow"></div>
        <div class="at-tooltip__content">
          <ng-content select="[tooltipContent]"></ng-content>
        </div>
      </div>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
TooltipComponent.ctorParameters = () => [];
TooltipComponent.propDecorators = {
    'placement': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
FormComponent.ctorParameters = () => [];

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
/**
 * @nocollapse
 */
AtFormDirective.ctorParameters = () => [];
AtFormDirective.propDecorators = {
    'form': [{ type: HostBinding, args: ['class.at-form',] },],
    'inline': [{ type: HostBinding, args: ['class.at-form--inline',] },],
    'horizontal': [{ type: HostBinding, args: ['class.at-form--horizontal',] },],
    'type': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
AtFormItemDirective.ctorParameters = () => [];
AtFormItemDirective.propDecorators = {
    'item': [{ type: HostBinding, args: ['class.at-form-item',] },],
};

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
/**
 * @nocollapse
 */
AtFormLabelDirective.ctorParameters = () => [];
AtFormLabelDirective.propDecorators = {
    'required': [{ type: Input },],
    'label': [{ type: HostBinding, args: ['class.at-form-item__label',] },],
    'require': [{ type: HostBinding, args: ['class.at-form-item__label—-required',] },],
};

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
/**
 * @nocollapse
 */
AtFormContentDirective.ctorParameters = () => [];
AtFormContentDirective.propDecorators = {
    'content': [{ type: HostBinding, args: ['class.at-form-item__content',] },],
};

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
/**
 * @nocollapse
 */
AtFormErrorDirective.ctorParameters = () => [];
AtFormErrorDirective.propDecorators = {
    'error': [{ type: HostBinding, args: ['class.at-form-item__error-tip',] },],
};

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
/**
 * @nocollapse
 */
AtFormFeedbackDirective.ctorParameters = () => [];
AtFormFeedbackDirective.propDecorators = {
    'status': [{ type: Input },],
    'feedback': [{ type: HostBinding, args: ['class.feedback',] },],
    'success': [{ type: HostBinding, args: ['class.feedback_success',] },],
    'warning': [{ type: HostBinding, args: ['class.feedback_warning',] },],
    'error': [{ type: HostBinding, args: ['class.feedback_error',] },],
};

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
/**
 * @nocollapse
 */
DatetimepickerComponent.ctorParameters = () => [
    { type: ElementRef, },
];
DatetimepickerComponent.propDecorators = {
    'atType': [{ type: Input },],
    'format': [{ type: Input },],
    'disableDate': [{ type: Input },],
    'onDocumentClick': [{ type: HostListener, args: ['document:click', ['$event'],] },],
    'input': [{ type: ViewChild, args: ['timeinput',] },],
};

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
/**
 * @nocollapse
 */
CalendarComponent.ctorParameters = () => [];
CalendarComponent.propDecorators = {
    '_clickMonth': [{ type: Output },],
    '_clickYear': [{ type: Output },],
    '_clickDate': [{ type: Output },],
    'disableDate': [{ type: Input },],
    'showValue': [{ type: Input },],
    'private': [{ type: Input },],
    'atType': [{ type: Input },],
    'atValue': [{ type: Input },],
    'atYear': [{ type: Input },],
    'format': [{ type: Input },],
    'atMonth': [{ type: Input },],
    'atDay': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
TimeComponent.ctorParameters = () => [];
TimeComponent.propDecorators = {
    'selectHour': [{ type: Output },],
    'selectMinute': [{ type: Output },],
    'selectSecond': [{ type: Output },],
    'selected_second': [{ type: Input },],
    'selected_minutes': [{ type: Input },],
    'selected_hour': [{ type: Input },],
    'hour_panel': [{ type: ViewChild, args: ['hour_panel',] },],
    'minute_panel': [{ type: ViewChild, args: ['minute_panel',] },],
    'second_panel': [{ type: ViewChild, args: ['second_panel',] },],
};

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
/**
 * @nocollapse
 */
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    'border': [{ type: Input },],
};

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
 * @nocollapse
 */
AtFormatPipe.ctorParameters = () => [];

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
/**
 * @nocollapse
 */
TabSetComponent.ctorParameters = () => [];
TabSetComponent.propDecorators = {
    'position': [{ type: Input },],
    'selected_index': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
TabComponent.ctorParameters = () => [
    { type: TabSetComponent, },
];
TabComponent.propDecorators = {
    '_tabHeading': [{ type: ContentChild, args: ['atTabHeading',] },],
    '_content': [{ type: ViewChild, args: [TemplateRef,] },],
};

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
/**
 * @nocollapse
 */
TabContentComponent.ctorParameters = () => [
    { type: TabComponent, },
];
TabContentComponent.propDecorators = {
    'title': [{ type: Input },],
    'content': [{ type: ViewChild, args: [TemplateRef,] },],
};

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
/**
 * @nocollapse
 */
TabBodyComponent.ctorParameters = () => [];
TabBodyComponent.propDecorators = {
    'content': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
TabHeaderComponent.ctorParameters = () => [];

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
/**
 * @nocollapse
 */
AtTabInkDirective.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: NgZone, },
];
AtTabInkDirective.propDecorators = {
    '_atTabsInkBar': [{ type: HostBinding, args: ['class.at-tabs-ink-bar',] },],
    'atAnimated': [{ type: Input },],
    'atPositionMode': [{ type: Input },],
};

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
/**
 * @nocollapse
 */
TabLabelDirective.ctorParameters = () => [
    { type: ElementRef, },
];

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
/**
 * @nocollapse
 */
TabNavsComponent.ctorParameters = () => [];
TabNavsComponent.propDecorators = {
    '_labelWrappers': [{ type: ContentChildren, args: [TabLabelDirective,] },],
    '_inkBar': [{ type: ViewChild, args: [AtTabInkDirective,] },],
    'position': [{ type: Input },],
    'selected_index': [{ type: Input },],
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
class OverlayState {
    constructor() {
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
}

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
class OverlayRef {
    /**
     * @param {?} _portalHost
     * @param {?} _pane
     * @param {?} _state
     * @param {?} _scrollStrategy
     * @param {?} _ngZone
     */
    constructor(_portalHost, _pane, _state, _scrollStrategy, _ngZone) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._state = _state;
        this._scrollStrategy = _scrollStrategy;
        this._ngZone = _ngZone;
        this._backdropElement = null;
        this._backdropClick = new Subject$1();
        this._attachments = new Subject$1();
        this._detachments = new Subject$1();
        _scrollStrategy.attach(this);
    }
    /**
     * The overlay's HTML element
     * @return {?}
     */
    get overlayElement() {
        return this._pane;
    }
    /**
     * Attaches the overlay to a portal instance and adds the backdrop.
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    attach(portal) {
        const /** @type {?} */ attachResult = this._portalHost.attach(portal);
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
    }
    /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    detach() {
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        this._scrollStrategy.disable();
        const /** @type {?} */ detachmentResult = this._portalHost.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        return detachmentResult;
    }
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    dispose() {
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
    }
    /**
     * Checks whether the overlay has been attached.
     * @return {?}
     */
    hasAttached() {
        return this._portalHost.hasAttached();
    }
    /**
     * Returns an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    backdropClick() {
        return this._backdropClick.asObservable();
    }
    /**
     * Returns an observable that emits when the overlay has been attached.
     * @return {?}
     */
    attachments() {
        return this._attachments.asObservable();
    }
    /**
     * Returns an observable that emits when the overlay has been detached.
     * @return {?}
     */
    detachments() {
        return this._detachments.asObservable();
    }
    /**
     * Gets the current state config of the overlay.
     * @return {?}
     */
    getState() {
        return this._state;
    }
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    updatePosition() {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.apply(this._pane);
        }
    }
    /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    updateDirection() {
        this._pane.setAttribute('dir', this._state.direction);
    }
    /**
     * Updates the size of the overlay based on the overlay config.
     * @return {?}
     */
    updateSize() {
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
    }
    /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    }
    /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    _attachBackdrop() {
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
        this._backdropElement.addEventListener('click', () => this._backdropClick.next(null));
        // Add class to fade-in the backdrop after one frame.
        requestAnimationFrame(() => {
            if (this._backdropElement) {
                this._backdropElement.classList.add('nz-overlay-backdrop-showing');
            }
        });
    }
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    _updateStackingOrder() {
        if (this._pane.nextSibling) {
            this._pane.parentNode.appendChild(this._pane);
        }
    }
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    detachBackdrop() {
        const /** @type {?} */ backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            const /** @type {?} */ finishDetach = () => {
                // It may not be attached to anything in certain cases (e.g. unit tests).
                if (backdropToDetach && backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (this._backdropElement === backdropToDetach) {
                    this._backdropElement = null;
                }
            };
            backdropToDetach.classList.remove('nz-overlay-backdrop-showing');
            if (this._state.backdropClass) {
                backdropToDetach.classList.remove(this._state.backdropClass);
            }
            backdropToDetach.addEventListener('transitionend', finishDetach);
            // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.
            backdropToDetach.style.pointerEvents = 'none';
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            this._ngZone.runOutsideAngular(() => {
                setTimeout(finishDetach, 500);
            });
        }
    }
}
/**
 * @param {?} value
 * @return {?}
 */
function formatCssUnit(value) {
    return typeof value === 'string' ? (value) : `${value}px`;
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
const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
class ScrollDispatcher {
    /**
     * @param {?} _ngZone
     * @param {?} _platform
     */
    constructor(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new Subject$1();
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
    register(scrollable) {
        const /** @type {?} */ scrollSubscription = scrollable.elementScrolled().subscribe(() => this._notify());
        this.scrollableReferences.set(scrollable, scrollSubscription);
    }
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    deregister(scrollable) {
        const /** @type {?} */ scrollableReference = this.scrollableReferences.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollableReferences.delete(scrollable);
        }
    }
    /**
     * Subscribes to an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     * @param {?=} auditTimeInMs
     * @param {?=} callback
     * @return {?}
     */
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME, callback) {
        // Scroll events can only happen on the browser, so do nothing if we're not on the browser.
        if (!this._platform.isBrowser) {
            return Subscription$1.EMPTY;
        }
        // In the case of a 0ms delay, use an observable without auditTime
        // since it does add a perceptible delay in processing overhead.
        const /** @type {?} */ observable = auditTimeInMs > 0 ?
            auditTime$1.call(this._scrolled.asObservable(), auditTimeInMs) :
            this._scrolled.asObservable();
        this._scrolledCount++;
        if (!this._globalSubscription) {
            this._globalSubscription = this._ngZone.runOutsideAngular(() => {
                return merge$1(fromEvent$1(window.document, 'scroll'), fromEvent$1(window, 'resize')).subscribe(() => this._notify());
            });
        }
        // Note that we need to do the subscribing from here, in order to be able to remove
        // the global event listeners once there are no more subscriptions.
        const /** @type {?} */ subscription = observable.subscribe(callback);
        subscription.add(() => {
            this._scrolledCount--;
            if (this._globalSubscription && !this.scrollableReferences.size && !this._scrolledCount) {
                this._globalSubscription.unsubscribe();
                this._globalSubscription = null;
            }
        });
        return subscription;
    }
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    getScrollContainers(elementRef) {
        const /** @type {?} */ scrollingContainers = [];
        this.scrollableReferences.forEach((_subscription, scrollable) => {
            if (this.scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    }
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    scrollableContainsElement(scrollable, elementRef) {
        let /** @type {?} */ element = elementRef.nativeElement;
        const /** @type {?} */ scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element === scrollableElement) {
                return true;
            }
        } while (element = element.parentElement);
        return false;
    }
    /**
     * Sends a notification that a scroll event has been fired.
     * @return {?}
     */
    _notify() {
        this._scrolled.next();
    }
}
ScrollDispatcher.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ScrollDispatcher.ctorParameters = () => [
    { type: NgZone, },
    { type: Platform, },
];
/**
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
const SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new Optional(), new SkipSelf(), ScrollDispatcher], NgZone, Platform],
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
class ViewportRuler {
    /**
     * @param {?} scrollDispatcher
     */
    constructor(scrollDispatcher) {
        // Subscribe to scroll and resize events and update the document rectangle on changes.
        scrollDispatcher.scrolled(0, () => this._cacheViewportGeometry());
    }
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @param {?=} documentRect
     * @return {?}
     */
    getViewportRect(documentRect = this._documentRect) {
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
        const /** @type {?} */ scrollPosition = this.getViewportScrollPosition(documentRect);
        const /** @type {?} */ height = window.innerHeight;
        const /** @type {?} */ width = window.innerWidth;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height,
            width,
        };
    }
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @param {?=} documentRect
     * @return {?}
     */
    getViewportScrollPosition(documentRect = this._documentRect) {
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
        const /** @type {?} */ top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            document.documentElement.scrollTop || 0;
        const /** @type {?} */ left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            document.documentElement.scrollLeft || 0;
        return { top, left };
    }
    /**
     * Caches the latest client rectangle of the document element.
     * @return {?}
     */
    _cacheViewportGeometry() {
        this._documentRect = document.documentElement.getBoundingClientRect();
    }
}
ViewportRuler.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ViewportRuler.ctorParameters = () => [
    { type: ScrollDispatcher, },
];
/**
 * @param {?} parentRuler
 * @param {?} scrollDispatcher
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, scrollDispatcher) {
    return parentRuler || new ViewportRuler(scrollDispatcher);
}
const VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new Optional(), new SkipSelf(), ViewportRuler], ScrollDispatcher],
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
class ConnectionPositionPair {
    /**
     * @param {?} origin
     * @param {?} overlay
     */
    constructor(origin, overlay) {
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
}
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
class ScrollableViewProperties {
}
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
class ConnectedOverlayPositionChange {
    /**
     * @param {?} connectionPair
     * @param {?} scrollableViewProperties
     */
    constructor(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
}
/**
 * @nocollapse
 */
ConnectedOverlayPositionChange.ctorParameters = () => [
    { type: ConnectionPositionPair, },
    { type: ScrollableViewProperties, decorators: [{ type: Optional },] },
];

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
class ConnectedPositionStrategy {
    /**
     * @param {?} _connectedTo
     * @param {?} _originPos
     * @param {?} _overlayPos
     * @param {?} _viewportRuler
     */
    constructor(_connectedTo, _originPos, _overlayPos, _viewportRuler) {
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
        this._onPositionChange = new Subject$1();
        this._origin = this._connectedTo.nativeElement;
        this.withFallbackPosition(_originPos, _overlayPos);
    }
    /**
     * Whether the we're dealing with an RTL context
     * @return {?}
     */
    get _isRtl() {
        return this._dir === 'rtl';
    }
    /**
     * Emits an event when the connection point changes.
     * @return {?}
     */
    get onPositionChange() {
        return this._onPositionChange.asObservable();
    }
    /**
     * Ordered list of preferred positions, from most to least desirable.
     * @return {?}
     */
    get positions() {
        return this._preferredPositions;
    }
    /**
     * To be used to for any cleanup after the element gets destroyed.
     * @return {?}
     */
    dispose() { }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     *
     * @param {?} element Element to which to apply the CSS styles.
     * @return {?} Resolves when the styles have been applied.
     */
    apply(element) {
        // Cache the overlay pane element in case re-calculating position is necessary
        this._pane = element;
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        const /** @type {?} */ originRect = this._origin.getBoundingClientRect();
        const /** @type {?} */ overlayRect = element.getBoundingClientRect();
        // We use the viewport rect to determine whether a position would go off-screen.
        const /** @type {?} */ viewportRect = this._viewportRuler.getViewportRect();
        // Fallback point if none of the fallbacks fit into the viewport.
        let /** @type {?} */ fallbackPoint;
        let /** @type {?} */ fallbackPosition;
        // We want to place the overlay in the first of the preferred positions such that the
        // overlay fits on-screen.
        for (const /** @type {?} */ pos of this._preferredPositions) {
            // Get the (x, y) point of connection on the origin, and then use that to get the
            // (top, left) coordinate for the overlay at `pos`.
            const /** @type {?} */ originPoint = this._getOriginConnectionPoint(originRect, pos);
            const /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportRect, pos);
            // If the overlay in the calculated position fits on-screen, put it there and we're done.
            if (overlayPoint.fitsInViewport) {
                this._setElementPosition(element, overlayRect, overlayPoint, pos);
                // Save the last connected position in case the position needs to be re-calculated.
                this._lastConnectedPosition = pos;
                // Notify that the position has been changed along with its change properties.
                const /** @type {?} */ scrollableViewProperties = this.getScrollableViewProperties(element);
                const /** @type {?} */ positionChange = new ConnectedOverlayPositionChange(pos, scrollableViewProperties);
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
    }
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    recalculateLastPosition() {
        const /** @type {?} */ originRect = this._origin.getBoundingClientRect();
        const /** @type {?} */ overlayRect = this._pane.getBoundingClientRect();
        const /** @type {?} */ viewportRect = this._viewportRuler.getViewportRect();
        const /** @type {?} */ lastPosition = this._lastConnectedPosition || this._preferredPositions[0];
        const /** @type {?} */ originPoint = this._getOriginConnectionPoint(originRect, lastPosition);
        const /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, viewportRect, lastPosition);
        this._setElementPosition(this._pane, overlayRect, overlayPoint, lastPosition);
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    withScrollableContainers(scrollables) {
        this.scrollables = scrollables;
    }
    /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    withFallbackPosition(originPos, overlayPos) {
        this._preferredPositions.push(new ConnectionPositionPair(originPos, overlayPos));
        return this;
    }
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    withDirection(dir) {
        this._dir = dir;
        return this;
    }
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    withOffsetX(offset) {
        this._offsetX = offset;
        return this;
    }
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    withOffsetY(offset) {
        this._offsetY = offset;
        return this;
    }
    /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    _getStartX(rect) {
        return this._isRtl ? rect.right : rect.left;
    }
    /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param {?} rect
     * @return {?}
     */
    _getEndX(rect) {
        return this._isRtl ? rect.left : rect.right;
    }
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    _getOriginConnectionPoint(originRect, pos) {
        const /** @type {?} */ originStartX = this._getStartX(originRect);
        const /** @type {?} */ originEndX = this._getEndX(originRect);
        let /** @type {?} */ x;
        if (pos.originX === 'center') {
            x = originStartX + (originRect.width / 2);
        }
        else {
            x = pos.originX === 'start' ? originStartX : originEndX;
        }
        let /** @type {?} */ y;
        if (pos.originY === 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY === 'top' ? originRect.top : originRect.bottom;
        }
        return { x, y };
    }
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
    _getOverlayPoint(originPoint, overlayRect, viewportRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the potential overlay position
        // relative to the origin point.
        let /** @type {?} */ overlayStartX;
        if (pos.overlayX === 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl ? 0 : -overlayRect.width;
        }
        let /** @type {?} */ overlayStartY;
        if (pos.overlayY === 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY === 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        const /** @type {?} */ x = originPoint.x + overlayStartX + this._offsetX;
        const /** @type {?} */ y = originPoint.y + overlayStartY + this._offsetY;
        // How much the overlay would overflow at this position, on each side.
        const /** @type {?} */ leftOverflow = 0 - x;
        const /** @type {?} */ rightOverflow = (x + overlayRect.width) - viewportRect.width;
        const /** @type {?} */ topOverflow = 0 - y;
        const /** @type {?} */ bottomOverflow = (y + overlayRect.height) - viewportRect.height;
        // Visible parts of the element on each axis.
        const /** @type {?} */ visibleWidth = this._subtractOverflows(overlayRect.width, leftOverflow, rightOverflow);
        const /** @type {?} */ visibleHeight = this._subtractOverflows(overlayRect.height, topOverflow, bottomOverflow);
        // The area of the element that's within the viewport.
        const /** @type {?} */ visibleArea = visibleWidth * visibleHeight;
        const /** @type {?} */ fitsInViewport = (overlayRect.width * overlayRect.height) === visibleArea;
        return { x, y, fitsInViewport, visibleArea };
    }
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @param {?} overlay
     * @return {?}
     */
    getScrollableViewProperties(overlay) {
        const /** @type {?} */ originBounds = this._getElementBounds(this._origin);
        const /** @type {?} */ overlayBounds = this._getElementBounds(overlay);
        const /** @type {?} */ scrollContainerBounds = this.scrollables.map((scrollable) => {
            return this._getElementBounds(scrollable.getElementRef().nativeElement);
        });
        return {
            isOriginClipped: this.isElementClipped(originBounds, scrollContainerBounds),
            isOriginOutsideView: this.isElementOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: this.isElementClipped(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: this.isElementOutsideView(overlayBounds, scrollContainerBounds),
        };
    }
    /**
     * Whether the element is completely out of the view of any of the containers.
     * @param {?} elementBounds
     * @param {?} containersBounds
     * @return {?}
     */
    isElementOutsideView(elementBounds, containersBounds) {
        return containersBounds.some((containerBounds) => {
            const /** @type {?} */ outsideAbove = elementBounds.bottom < containerBounds.top;
            const /** @type {?} */ outsideBelow = elementBounds.top > containerBounds.bottom;
            const /** @type {?} */ outsideLeft = elementBounds.right < containerBounds.left;
            const /** @type {?} */ outsideRight = elementBounds.left > containerBounds.right;
            return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
    }
    /**
     * Whether the element is clipped by any of the containers.
     * @param {?} elementBounds
     * @param {?} containersBounds
     * @return {?}
     */
    isElementClipped(elementBounds, containersBounds) {
        return containersBounds.some((containerBounds) => {
            const /** @type {?} */ clippedAbove = elementBounds.top < containerBounds.top;
            const /** @type {?} */ clippedBelow = elementBounds.bottom > containerBounds.bottom;
            const /** @type {?} */ clippedLeft = elementBounds.left < containerBounds.left;
            const /** @type {?} */ clippedRight = elementBounds.right > containerBounds.right;
            return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
    }
    /**
     * Physically positions the overlay element to the given coordinate.
     * @param {?} element
     * @param {?} overlayRect
     * @param {?} overlayPoint
     * @param {?} pos
     * @return {?}
     */
    _setElementPosition(element, overlayRect, overlayPoint, pos) {
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear above
        // or below the origin and the direction in which the element will expand.
        const /** @type {?} */ verticalStyleProperty = pos.overlayY === 'bottom' ? 'bottom' : 'top';
        // When using `bottom`, we adjust the y position such that it is the distance
        // from the bottom of the viewport rather than the top.
        const /** @type {?} */ y = verticalStyleProperty === 'top' ?
            overlayPoint.y :
            document.documentElement.clientHeight - (overlayPoint.y + overlayRect.height);
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        let /** @type {?} */ horizontalStyleProperty;
        if (this._dir === 'rtl') {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = pos.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        const /** @type {?} */ x = horizontalStyleProperty === 'left' ?
            overlayPoint.x :
            document.documentElement.clientWidth - (overlayPoint.x + overlayRect.width);
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        ['top', 'bottom', 'left', 'right'].forEach(p => element.style[p] = null);
        element.style[verticalStyleProperty] = `${y}px`;
        element.style[horizontalStyleProperty] = `${x}px`;
    }
    /**
     * Returns the bounding positions of the provided element with respect to the viewport.
     * @param {?} element
     * @return {?}
     */
    _getElementBounds(element) {
        const /** @type {?} */ boundingClientRect = element.getBoundingClientRect();
        return {
            top: boundingClientRect.top,
            right: boundingClientRect.left + boundingClientRect.width,
            bottom: boundingClientRect.top + boundingClientRect.height,
            left: boundingClientRect.left
        };
    }
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    _subtractOverflows(length, ...overflows) {
        return overflows.reduce((currentValue, currentOverflow) => {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    }
}

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
class GlobalPositionStrategy {
    constructor() {
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
    top(value = '') {
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    }
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    left(value = '') {
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    }
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    bottom(value = '') {
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    }
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    right(value = '') {
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    }
    /**
     * Sets the overlay width and clears any previously set width.
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    width(value = '') {
        this._width = value;
        // When the width is 100%, we should reset the `left` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.left('0px');
        }
        return this;
    }
    /**
     * Sets the overlay height and clears any previously set height.
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    height(value = '') {
        this._height = value;
        // When the height is 100%, we should reset the `top` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.top('0px');
        }
        return this;
    }
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    centerHorizontally(offset = '') {
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    }
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    centerVertically(offset = '') {
        this.top(offset);
        this._alignItems = 'center';
        return this;
    }
    /**
     * Apply the position to the element.
     * \@docs-private
     *
     * @param {?} element Element to which to apply the CSS.
     * @return {?} Resolved when the styles have been applied.
     */
    apply(element) {
        if (!this._wrapper && element.parentNode) {
            this._wrapper = document.createElement('div');
            this._wrapper.classList.add('cdk-global-overlay-wrapper');
            element.parentNode.insertBefore(this._wrapper, element);
            this._wrapper.appendChild(element);
        }
        const /** @type {?} */ styles = element.style;
        const /** @type {?} */ parentStyles = ((element.parentNode)).style;
        styles.position = this._cssPosition;
        styles.marginTop = this._topOffset;
        styles.marginLeft = this._leftOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        styles.width = this._width;
        styles.height = this._height;
        parentStyles.justifyContent = this._justifyContent;
        parentStyles.alignItems = this._alignItems;
    }
    /**
     * Removes the wrapper element from the DOM.
     * @return {?}
     */
    dispose() {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    }
}

/**
 * Free position strategy for overlay without origin
 * @author lingyi.zcs
 */
class FreePositionStrategy {
    /**
     * Apply the position to the element. (NOTE: normally will triggered by scrolling)
     * \@docs-private
     *
     * @param {?} element Element to which to apply the CSS.
     * @return {?} Resolved when the styles have been applied.
     */
    apply(element) {
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
    }
    /**
     * Removes the wrapper element from the DOM.
     * @return {?}
     */
    dispose() {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    }
}

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
class OverlayPositionBuilder {
    /**
     * @param {?} _viewportRuler
     */
    constructor(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
    }
    /**
     * Creates a free position strategy
     * @return {?}
     */
    free() {
        return new FreePositionStrategy();
    }
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    global() {
        return new GlobalPositionStrategy();
    }
    /**
     * Creates a relative position strategy.
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    connectedTo(elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(elementRef, originPos, overlayPos, this._viewportRuler);
    }
}
OverlayPositionBuilder.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
OverlayPositionBuilder.ctorParameters = () => [
    { type: ViewportRuler, },
];

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
class OverlayContainer {
    /**
     * Base theme to be applied to all overlay-based components.
     * @return {?}
     */
    get themeClass() { return this._themeClass; }
    /**
     * @param {?} value
     * @return {?}
     */
    set themeClass(value) {
        if (this._containerElement) {
            this._containerElement.classList.remove(this._themeClass);
            if (value) {
                this._containerElement.classList.add(value);
            }
        }
        this._themeClass = value;
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    getContainerElement() {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    }
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    _createContainer() {
        const /** @type {?} */ container = document.createElement('div');
        container.classList.add('nz-overlay-container');
        if (this._themeClass) {
            container.classList.add(this._themeClass);
        }
        document.body.appendChild(container);
        this._containerElement = container;
    }
}
OverlayContainer.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
OverlayContainer.ctorParameters = () => [];
/**
 * @param {?} parentContainer
 * @return {?}
 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer) {
    return parentContainer || new OverlayContainer();
}
const OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [[new Optional(), new SkipSelf(), OverlayContainer]],
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
class Scrollable {
    /**
     * @param {?} _elementRef
     * @param {?} _scroll
     * @param {?} _ngZone
     * @param {?} _renderer
     */
    constructor(_elementRef, _scroll, _ngZone, _renderer) {
        this._elementRef = _elementRef;
        this._scroll = _scroll;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._elementScrolled = new Subject$1();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._scrollListener = this._ngZone.runOutsideAngular(() => {
            return this._renderer.listen(this.getElementRef().nativeElement, 'scroll', (event) => {
                this._elementScrolled.next(event);
            });
        });
        this._scroll.register(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._scroll.deregister(this);
        if (this._scrollListener) {
            this._scrollListener();
            this._scrollListener = null;
        }
    }
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    elementScrolled() {
        return this._elementScrolled.asObservable();
    }
    /**
     * @return {?}
     */
    getElementRef() {
        return this._elementRef;
    }
}
Scrollable.decorators = [
    { type: Directive, args: [{
                selector: '[cdk-scrollable], [cdkScrollable]'
            },] },
];
/**
 * @nocollapse
 */
Scrollable.ctorParameters = () => [
    { type: ElementRef, },
    { type: ScrollDispatcher, },
    { type: NgZone, },
    { type: Renderer2, },
];

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
    return Error(`Scroll strategy has already been attached.`);
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
class CloseScrollStrategy {
    /**
     * @param {?} _scrollDispatcher
     */
    constructor(_scrollDispatcher) {
        this._scrollDispatcher = _scrollDispatcher;
        this._scrollSubscription = null;
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        if (this._overlayRef) {
            throw getMdScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /**
     * @return {?}
     */
    enable() {
        if (!this._scrollSubscription) {
            this._scrollSubscription = this._scrollDispatcher.scrolled(0, () => {
                if (this._overlayRef.hasAttached()) {
                    this._overlayRef.detach();
                }
                this.disable();
            });
        }
    }
    /**
     * @return {?}
     */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
}

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
class NoopScrollStrategy {
    /**
     * @return {?}
     */
    enable() { }
    /**
     * @return {?}
     */
    disable() { }
    /**
     * @return {?}
     */
    attach() { }
}

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
class BlockScrollStrategy {
    /**
     * @param {?} _viewportRuler
     */
    constructor(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
    }
    /**
     * @return {?}
     */
    attach() { }
    /**
     * @return {?}
     */
    enable() {
        if (this._canBeEnabled()) {
            const /** @type {?} */ root = document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = `${-this._previousScrollPosition.left}px`;
            root.style.top = `${-this._previousScrollPosition.top}px`;
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    }
    /**
     * @return {?}
     */
    disable() {
        if (this._isEnabled) {
            this._isEnabled = false;
            document.documentElement.style.left = this._previousHTMLStyles.left;
            document.documentElement.style.top = this._previousHTMLStyles.top;
            document.documentElement.classList.remove('cdk-global-scrollblock');
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
        }
    }
    /**
     * @return {?}
     */
    _canBeEnabled() {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        if (document.documentElement.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        const /** @type {?} */ body = document.body;
        const /** @type {?} */ viewport = this._viewportRuler.getViewportRect();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    }
}

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
class RepositionScrollStrategy {
    /**
     * @param {?} _scrollDispatcher
     * @param {?=} _config
     */
    constructor(_scrollDispatcher, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        if (this._overlayRef) {
            throw getMdScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /**
     * @return {?}
     */
    enable() {
        if (!this._scrollSubscription) {
            const /** @type {?} */ throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle, () => {
                this._overlayRef.updatePosition();
            });
        }
    }
    /**
     * @return {?}
     */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
}

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
class ScrollStrategyOptions {
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _viewportRuler
     */
    constructor(_scrollDispatcher, _viewportRuler) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        /**
         * Do nothing on scroll.
         */
        this.noop = () => new NoopScrollStrategy();
        /**
         * Close the overlay as soon as the user scrolls.
         */
        this.close = () => new CloseScrollStrategy(this._scrollDispatcher);
        /**
         * Block scrolling.
         */
        this.block = () => new BlockScrollStrategy(this._viewportRuler);
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = (config) => new RepositionScrollStrategy(this._scrollDispatcher, config);
    }
}
ScrollStrategyOptions.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ScrollStrategyOptions.ctorParameters = () => [
    { type: ScrollDispatcher, },
    { type: ViewportRuler, },
];

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ScrollDispatchModule {
}
ScrollDispatchModule.decorators = [
    { type: NgModule, args: [{
                imports: [PlatformModule],
                exports: [Scrollable],
                declarations: [Scrollable],
                providers: [SCROLL_DISPATCHER_PROVIDER, ScrollStrategyOptions],
            },] },
];
/**
 * @nocollapse
 */
ScrollDispatchModule.ctorParameters = () => [];

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
let nextUniqueId = 0;
/**
 * The default state for newly created overlays.
 */
const defaultState = new OverlayState();
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
class Overlay {
    /**
     * @param {?} scrollStrategies
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _positionBuilder
     * @param {?} _appRef
     * @param {?} _injector
     * @param {?} _ngZone
     */
    constructor(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _appRef, _injector, _ngZone) {
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
    create(state$$1 = defaultState, paneClassName) {
        return this._createOverlayRef(this._createPaneElement(paneClassName), state$$1);
    }
    /**
     * Returns a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?}
     */
    position() {
        return this._positionBuilder;
    }
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?=} className
     * @return {?} Newly-created pane element
     */
    _createPaneElement(className) {
        const /** @type {?} */ pane = document.createElement('div');
        pane.id = `nz-overlay-${nextUniqueId++}`;
        pane.classList.add('nz-overlay-pane');
        if (className) {
            const /** @type {?} */ classList = className.split(' ');
            classList.forEach(c => {
                pane.classList.add(c);
            });
        }
        this._overlayContainer.getContainerElement().appendChild(pane);
        return pane;
    }
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    _createPortalHost(pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef, this._injector);
    }
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param {?} pane DOM element for the overlay
     * @param {?} state
     * @return {?}
     */
    _createOverlayRef(pane, state$$1) {
        const /** @type {?} */ scrollStrategy = state$$1.scrollStrategy || this.scrollStrategies.noop();
        const /** @type {?} */ portalHost = this._createPortalHost(pane);
        return new OverlayRef(portalHost, pane, state$$1, scrollStrategy, this._ngZone);
    }
}
Overlay.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
Overlay.ctorParameters = () => [
    { type: ScrollStrategyOptions, },
    { type: OverlayContainer, },
    { type: ComponentFactoryResolver, },
    { type: OverlayPositionBuilder, },
    { type: ApplicationRef, },
    { type: Injector, },
    { type: NgZone, },
];

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
var Platform$1 = /*@__PURE__*/(function () {
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
    { type: Injectable },
];
/**
 * @nocollapse
 */
Platform$1.ctorParameters = function () { return []; };
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
var InteractivityChecker = /*@__PURE__*/(function () {
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
    { type: Injectable },
];
/**
 * @nocollapse
 */
InteractivityChecker.ctorParameters = function () { return [
    { type: Platform$1, },
]; };
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
var RxChain = /*@__PURE__*/(function () {
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
var first$1$1 = (first$1);
var debounceTime$1$1 = (debounceTime$1);
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * NOTE: This class currently uses a very simple (naive) approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like tabIndex > 0, flex `order`, and shadow roots can cause to two to misalign.
 * This will be replaced with a more intelligent solution before the library is considered stable.
 */
var FocusTrap = /*@__PURE__*/(function () {
    /**
     * @param {?} _element
     * @param {?} _platform
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?=} deferAnchors
     */
    function FocusTrap(_element, _platform, _checker, _ngZone, deferAnchors) {
        if (deferAnchors === void 0) { deferAnchors = false; }
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
var FocusTrapFactory = /*@__PURE__*/(function () {
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
        if (deferAnchors === void 0) { deferAnchors = false; }
        return new FocusTrap(element, this._platform, this._checker, this._ngZone, deferAnchors);
    };
    return FocusTrapFactory;
}());
FocusTrapFactory.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
FocusTrapFactory.ctorParameters = function () { return [
    { type: InteractivityChecker, },
    { type: Platform$1, },
    { type: NgZone, },
]; };
/**
 * Directive for trapping focus within a region.
 * @deprecated
 */
var FocusTrapDeprecatedDirective = /*@__PURE__*/(function () {
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
    { type: Directive, args: [{
                selector: 'cdk-focus-trap',
            },] },
];
/**
 * @nocollapse
 */
FocusTrapDeprecatedDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: FocusTrapFactory, },
]; };
FocusTrapDeprecatedDirective.propDecorators = {
    'disabled': [{ type: Input },],
};
/**
 * Directive for trapping focus within a region.
 */
var FocusTrapDirective = /*@__PURE__*/(function () {
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
    { type: Directive, args: [{
                selector: '[cdkTrapFocus]',
                exportAs: 'cdkTrapFocus',
            },] },
];
/**
 * @nocollapse
 */
FocusTrapDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: FocusTrapFactory, },
]; };
FocusTrapDirective.propDecorators = {
    'enabled': [{ type: Input, args: ['cdkTrapFocus',] },],
};
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken('liveAnnouncerElement');
var LiveAnnouncer = /*@__PURE__*/(function () {
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
        if (politeness === void 0) { politeness = 'polite'; }
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
    { type: Injectable },
];
/**
 * @nocollapse
 */
LiveAnnouncer.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] },] },
    { type: Platform$1, },
]; };
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
        [new Optional(), new SkipSelf(), LiveAnnouncer],
        [new Optional(), new Inject(LIVE_ANNOUNCER_ELEMENT_TOKEN)],
        Platform$1,
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};
var PlatformModule$1 = /*@__PURE__*/(function () {
    function PlatformModule$$1() {
    }
    return PlatformModule$$1;
}());
PlatformModule$1.decorators = [
    { type: NgModule, args: [{
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
var ListKeyManager = /*@__PURE__*/(function () {
    /**
     * @param {?} _items
     */
    function ListKeyManager(_items) {
        this._items = _items;
        this._activeItemIndex = -1;
        this._tabOut = new Subject$1();
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
        if (items === void 0) { items = this._items.toArray(); }
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
        if (items === void 0) { items = this._items.toArray(); }
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
var ActiveDescendantKeyManager = /*@__PURE__*/(function (_super) {
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
var FocusKeyManager = /*@__PURE__*/(function (_super) {
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
var A11yModule = /*@__PURE__*/(function () {
    function A11yModule() {
    }
    return A11yModule;
}());
A11yModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PlatformModule$1],
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
var DIR_DOCUMENT = new InjectionToken('md-dir-doc');
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality$1 = /*@__PURE__*/(function () {
    /**
     * @param {?=} _document
     */
    function Directionality$$1(_document) {
        this.value = 'ltr';
        this.change = new EventEmitter();
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
    { type: Injectable },
];
/**
 * @nocollapse
 */
Directionality$1.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DIR_DOCUMENT,] },] },
]; };
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
    deps: [[new Optional(), new SkipSelf(), Directionality$1], [new Optional(), DOCUMENT]],
    useFactory: DIRECTIONALITY_PROVIDER_FACTORY
};
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Would provide itself in case a component looks for the Directionality service
 */
var Dir = /*@__PURE__*/(function () {
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
        this.change = new EventEmitter();
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
    { type: Directive, args: [{
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
    'change': [{ type: Output, args: ['dirChange',] },],
    'dir': [{ type: HostBinding, args: ['attr.dir',] }, { type: Input, args: ['dir',] },],
};
var BidiModule = /*@__PURE__*/(function () {
    function BidiModule() {
    }
    return BidiModule;
}());
BidiModule.decorators = [
    { type: NgModule, args: [{
                exports: [Dir],
                declarations: [Dir],
                providers: [
                    { provide: DIR_DOCUMENT, useExisting: DOCUMENT },
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
var BaseRowDef = /*@__PURE__*/(function () {
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
        this.columnsChange = new Subject$1();
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
var CdkHeaderRowDef = /*@__PURE__*/(function (_super) {
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
    { type: Directive, args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef'],
            },] },
];
/**
 * @nocollapse
 */
CdkHeaderRowDef.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: IterableDiffers, },
]; };
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display.
 */
var CdkRowDef = /*@__PURE__*/(function (_super) {
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
    { type: Directive, args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns'],
            },] },
];
/**
 * @nocollapse
 */
CdkRowDef.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: IterableDiffers, },
]; };
/**
 * Outlet for rendering cells inside of a row or header row.
 * \@docs-private
 */
var CdkCellOutlet = /*@__PURE__*/(function () {
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
    { type: Directive, args: [{ selector: '[cdkCellOutlet]' },] },
];
/**
 * @nocollapse
 */
CdkCellOutlet.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
var CdkHeaderRow = /*@__PURE__*/(function () {
    function CdkHeaderRow() {
    }
    return CdkHeaderRow;
}());
CdkHeaderRow.decorators = [
    { type: Component, args: [{
                selector: 'cdk-header-row',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
CdkHeaderRow.ctorParameters = function () { return []; };
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
var CdkRow = /*@__PURE__*/(function () {
    function CdkRow() {
    }
    return CdkRow;
}());
CdkRow.decorators = [
    { type: Component, args: [{
                selector: 'cdk-row',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
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
var CdkCellDef = /*@__PURE__*/(function () {
    /**
     * @param {?} template
     */
    function CdkCellDef(template) {
        this.template = template;
    }
    return CdkCellDef;
}());
CdkCellDef.decorators = [
    { type: Directive, args: [{ selector: '[cdkCellDef]' },] },
];
/**
 * @nocollapse
 */
CdkCellDef.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var CdkHeaderCellDef = /*@__PURE__*/(function () {
    /**
     * @param {?} template
     */
    function CdkHeaderCellDef(template) {
        this.template = template;
    }
    return CdkHeaderCellDef;
}());
CdkHeaderCellDef.decorators = [
    { type: Directive, args: [{ selector: '[cdkHeaderCellDef]' },] },
];
/**
 * @nocollapse
 */
CdkHeaderCellDef.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
var CdkColumnDef = /*@__PURE__*/(function () {
    function CdkColumnDef() {
    }
    return CdkColumnDef;
}());
CdkColumnDef.decorators = [
    { type: Directive, args: [{ selector: '[cdkColumnDef]' },] },
];
/**
 * @nocollapse
 */
CdkColumnDef.ctorParameters = function () { return []; };
CdkColumnDef.propDecorators = {
    'name': [{ type: Input, args: ['cdkColumnDef',] },],
    'cell': [{ type: ContentChild, args: [CdkCellDef,] },],
    'headerCell': [{ type: ContentChild, args: [CdkHeaderCellDef,] },],
};
/**
 * Header cell template container that adds the right classes and role.
 */
var CdkHeaderCell = /*@__PURE__*/(function () {
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
    { type: Directive, args: [{
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
CdkHeaderCell.ctorParameters = function () { return [
    { type: CdkColumnDef, },
    { type: ElementRef, },
    { type: Renderer2, },
]; };
/**
 * Cell template container that adds the right classes and role.
 */
var CdkCell = /*@__PURE__*/(function () {
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
    { type: Directive, args: [{
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
CdkCell.ctorParameters = function () { return [
    { type: CdkColumnDef, },
    { type: ElementRef, },
    { type: Renderer2, },
]; };
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
var RowPlaceholder = /*@__PURE__*/(function () {
    /**
     * @param {?} viewContainer
     */
    function RowPlaceholder(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return RowPlaceholder;
}());
RowPlaceholder.decorators = [
    { type: Directive, args: [{ selector: '[rowPlaceholder]' },] },
];
/**
 * @nocollapse
 */
RowPlaceholder.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * \@docs-private
 */
var HeaderRowPlaceholder = /*@__PURE__*/(function () {
    /**
     * @param {?} viewContainer
     */
    function HeaderRowPlaceholder(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return HeaderRowPlaceholder;
}());
HeaderRowPlaceholder.decorators = [
    { type: Directive, args: [{ selector: '[headerRowPlaceholder]' },] },
];
/**
 * @nocollapse
 */
HeaderRowPlaceholder.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * The table template that can be used by the md-table. Should not be used outside of the
 * material library.
 */
var CDK_TABLE_TEMPLATE = "\n  <ng-container headerRowPlaceholder></ng-container>\n  <ng-container rowPlaceholder></ng-container>";
/**
 * A data table that connects with a data source to retrieve data of type T and renders
 * a header row and data rows. Updates the rows when new data is provided by the data source.
 */
var CdkTable = /*@__PURE__*/(function () {
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
        this._onDestroy = new Subject$1();
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
        this.viewChange = new BehaviorSubject$1({ start: 0, end: Number.MAX_VALUE });
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
            if (isDevMode() &&
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
        takeUntil$1.call(merge$1.apply(void 0, columnChangeEvents), this._onDestroy).subscribe(function () {
            // Reset the data to an empty array so that renderRowChanges will re-render all new rows.
            _this._rowPlaceholder.viewContainer.clear();
            _this._dataDiffer.diff([]);
            _this._renderRowChanges();
        });
        // Re-render the header row if the columns change
        takeUntil$1.call(this._headerDefinition.columnsChange, this._onDestroy).subscribe(function () {
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
        this._renderChangeSubscription = takeUntil$1.call(this.dataSource.connect(this), this._onDestroy)
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
    { type: Component, args: [{
                selector: 'cdk-table',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table',
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
CdkTable.ctorParameters = function () { return [
    { type: IterableDiffers, },
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: undefined, decorators: [{ type: Attribute, args: ['role',] },] },
]; };
CdkTable.propDecorators = {
    'trackBy': [{ type: Input },],
    'dataSource': [{ type: Input },],
    '_rowPlaceholder': [{ type: ViewChild, args: [RowPlaceholder,] },],
    '_headerRowPlaceholder': [{ type: ViewChild, args: [HeaderRowPlaceholder,] },],
    '_columnDefinitions': [{ type: ContentChildren, args: [CdkColumnDef,] },],
    '_headerDefinition': [{ type: ContentChild, args: [CdkHeaderRowDef,] },],
    '_rowDefinitions': [{ type: ContentChildren, args: [CdkRowDef,] },],
};
/**
 * @abstract
 */
var DataSource = /*@__PURE__*/(function () {
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
var CdkTableModule = /*@__PURE__*/(function () {
    function CdkTableModule() {
    }
    return CdkTableModule;
}());
CdkTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
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
var Portal = /*@__PURE__*/(function () {
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
var ComponentPortal = /*@__PURE__*/(function (_super) {
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
var TemplatePortal$1 = /*@__PURE__*/(function (_super) {
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
var BasePortalHost = /*@__PURE__*/(function () {
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
var DomPortalHost$1 = /*@__PURE__*/(function (_super) {
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
var TemplatePortalDirective = /*@__PURE__*/(function (_super) {
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
    { type: Directive, args: [{
                selector: '[cdk-portal], [cdkPortal], [portal]',
                exportAs: 'cdkPortal',
            },] },
];
/**
 * @nocollapse
 */
TemplatePortalDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
]; };
/**
 * Directive version of a PortalHost. Because the directive *is* a PortalHost, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * <ng-template [cdkPortalHost]="greeting"></ng-template>
 */
var PortalHostDirective = /*@__PURE__*/(function (_super) {
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
    { type: Directive, args: [{
                selector: '[cdkPortalHost], [portalHost]',
                inputs: ['portal: cdkPortalHost']
            },] },
];
/**
 * @nocollapse
 */
PortalHostDirective.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: ViewContainerRef, },
]; };
PortalHostDirective.propDecorators = {
    '_deprecatedPortal': [{ type: Input, args: ['portalHost',] },],
};
var PortalModule = /*@__PURE__*/(function () {
    function PortalModule() {
    }
    return PortalModule;
}());
PortalModule.decorators = [
    { type: NgModule, args: [{
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
var MdMutationObserverFactory = /*@__PURE__*/(function () {
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
    { type: Injectable },
];
/**
 * @nocollapse
 */
MdMutationObserverFactory.ctorParameters = function () { return []; };
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
var ObserveContent = /*@__PURE__*/(function () {
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
        this.event = new EventEmitter();
        /**
         * Used for debouncing the emitted values to the observeContent event.
         */
        this._debouncer = new Subject$1();
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
    { type: Directive, args: [{
                selector: '[cdkObserveContent]'
            },] },
];
/**
 * @nocollapse
 */
ObserveContent.ctorParameters = function () { return [
    { type: MdMutationObserverFactory, },
    { type: ElementRef, },
]; };
ObserveContent.propDecorators = {
    'event': [{ type: Output, args: ['cdkObserveContent',] },],
    'debounce': [{ type: Input },],
};
var ObserveContentModule = /*@__PURE__*/(function () {
    function ObserveContentModule() {
    }
    return ObserveContentModule;
}());
ObserveContentModule.decorators = [
    { type: NgModule, args: [{
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
    return value != null && `${value}` !== 'false';
}
/**
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
 */
const defaultPositionList = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
];
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
class OverlayOrigin {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
OverlayOrigin.decorators = [
    { type: Directive, args: [{
                selector: '[nz-overlay-origin]',
                exportAs: 'nzOverlayOrigin',
            },] },
];
/**
 * @nocollapse
 */
OverlayOrigin.ctorParameters = () => [
    { type: ElementRef, },
];
/**
 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
 */
class ConnectedOverlayDirective {
    /**
     * @param {?} _overlay
     * @param {?} _renderer
     * @param {?} templateRef
     * @param {?} viewContainerRef
     * @param {?} _dir
     */
    constructor(_overlay, _renderer, templateRef, viewContainerRef, _dir) {
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
        this.backdropClick = new EventEmitter();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new EventEmitter();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new EventEmitter();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new EventEmitter();
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
    }
    /**
     * The offset in pixels for the overlay connection point on the x-axis
     * @return {?}
     */
    get offsetX() {
        return this._offsetX;
    }
    /**
     * @param {?} offsetX
     * @return {?}
     */
    set offsetX(offsetX) {
        this._offsetX = offsetX;
        if (this._position) {
            this._position.withOffsetX(offsetX);
        }
    }
    /**
     * The offset in pixels for the overlay connection point on the y-axis
     * @return {?}
     */
    get offsetY() {
        return this._offsetY;
    }
    /**
     * @param {?} offsetY
     * @return {?}
     */
    set offsetY(offsetY) {
        this._offsetY = offsetY;
        if (this._position) {
            this._position.withOffsetY(offsetY);
        }
    }
    /**
     * Whether or not the overlay should attach a backdrop.
     * @return {?}
     */
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasBackdrop(value) {
        this._hasBackdrop = coerceBooleanProperty(value);
    }
    /**
     * The associated overlay reference.
     * @return {?}
     */
    get overlayRef() {
        return this._overlayRef;
    }
    /**
     * The element's layout direction.
     * @return {?}
     */
    get dir() {
        return this._dir ? this._dir.value : 'ltr';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyOverlay();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    }
    /**
     * Creates an overlay
     * @return {?}
     */
    _createOverlay() {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig(), this.paneClass);
    }
    /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    _buildConfig() {
        const /** @type {?} */ overlayConfig = new OverlayState();
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
    }
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    _createPositionStrategy() {
        const /** @type {?} */ pos = this.positions[0];
        const /** @type {?} */ originPoint = { originX: pos.originX, originY: pos.originY };
        const /** @type {?} */ overlayPoint = { overlayX: pos.overlayX, overlayY: pos.overlayY };
        const /** @type {?} */ strategy = this._overlay.position()
            .connectedTo(this.origin.elementRef, originPoint, overlayPoint)
            .withOffsetX(this.offsetX)
            .withOffsetY(this.offsetY);
        this._handlePositionChanges(strategy);
        return strategy;
    }
    /**
     * @param {?} strategy
     * @return {?}
     */
    _handlePositionChanges(strategy) {
        for (let /** @type {?} */ i = 1; i < this.positions.length; i++) {
            strategy.withFallbackPosition({ originX: this.positions[i].originX, originY: this.positions[i].originY }, { overlayX: this.positions[i].overlayX, overlayY: this.positions[i].overlayY });
        }
        this._positionSubscription =
            strategy.onPositionChange.subscribe(pos => this.positionChange.emit(pos));
    }
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    _attachOverlay() {
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
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(() => {
                this.backdropClick.emit();
            });
        }
    }
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    _detachOverlay() {
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
    }
    /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    _destroyOverlay() {
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
    }
    /**
     * Sets the event listener that closes the overlay when pressing Escape.
     * @return {?}
     */
    _initEscapeListener() {
        this._escapeListener = this._renderer.listen('document', 'keydown', (event) => {
            if (event.keyCode === ESCAPE) {
                this._detachOverlay();
            }
        });
    }
}
ConnectedOverlayDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-connected-overlay]',
                exportAs: 'nzConnectedOverlay'
            },] },
];
/**
 * @nocollapse
 */
ConnectedOverlayDirective.ctorParameters = () => [
    { type: Overlay, },
    { type: Renderer2, },
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: Directionality, decorators: [{ type: Optional },] },
];
ConnectedOverlayDirective.propDecorators = {
    'origin': [{ type: Input },],
    'positions': [{ type: Input },],
    'offsetX': [{ type: Input },],
    'offsetY': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'minWidth': [{ type: Input },],
    'minHeight': [{ type: Input },],
    'backdropClass': [{ type: Input },],
    'paneClass': [{ type: Input },],
    'scrollStrategy': [{ type: Input },],
    'open': [{ type: Input },],
    'hasBackdrop': [{ type: Input },],
    'backdropClick': [{ type: Output },],
    'positionChange': [{ type: Output },],
    'attach': [{ type: Output },],
    'detach': [{ type: Output },],
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
class FullscreenOverlayContainer extends OverlayContainer {
    /**
     * @return {?}
     */
    _createContainer() {
        super._createContainer();
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(() => this._adjustParentForFullscreenChange());
    }
    /**
     * @return {?}
     */
    _adjustParentForFullscreenChange() {
        if (!this._containerElement) {
            return;
        }
        const /** @type {?} */ fullscreenElement = this.getFullscreenElement();
        const /** @type {?} */ parent = fullscreenElement || document.body;
        parent.appendChild(this._containerElement);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    _addFullscreenChangeListener(fn) {
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
    }
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    getFullscreenElement() {
        return document.fullscreenElement ||
            document.webkitFullscreenElement ||
            ((document)).mozFullScreenElement ||
            ((document)).msFullscreenElement ||
            null;
    }
}
FullscreenOverlayContainer.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
FullscreenOverlayContainer.ctorParameters = () => [];

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    VIEWPORT_RULER_PROVIDER,
    OVERLAY_CONTAINER_PROVIDER,
];
class OverlayModule {
}
OverlayModule.decorators = [
    { type: NgModule, args: [{
                imports: [ScrollDispatchModule],
                exports: [ConnectedOverlayDirective, OverlayOrigin, ScrollDispatchModule],
                declarations: [ConnectedOverlayDirective, OverlayOrigin],
                providers: [OVERLAY_PROVIDERS],
            },] },
];
/**
 * @nocollapse
 */
OverlayModule.ctorParameters = () => [];

class AtModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
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
                    CommonModule,
                    FormsModule,
                    // BrowserModule,
                    OverlayModule,
                ],
                providers: [AtGlobalMonitorService]
            },] },
];
/**
 * @nocollapse
 */
AtModule.ctorParameters = () => [];
const AT_ROOT_CONFIG = new InjectionToken('AtRootConfig');

/**
 * Generated bundle index. Do not edit.
 */

export { TabComponent, ButtonComponent, HollowDirective, ButtonGroupComponent, MenuComponent, MenuItemComponent, SubMenuComponent, MenuItemGroupComponent, MenuListComponent, RadioGroupComponent, RadioComponent, InlineMenuComponent, RowComponent, ColComponent, TagComponent, IconComponent, CheckboxComponent, CheckboxGroupComponent, InputComponent, SelectComponent, RadioButtonComponent, SwitchComponent, OptionComponent, SliderComponent, TextareaComponent, DropdownComponent, DropdownMenuItemComponent, DropMenuListComponent, NotificationComponent, ComponentCreatorBase, NotificationContainerComponent, NotificationBaseService, AtNotificationService, AlertComponent, BadgeComponent, ModalComponent, AtGlobalMonitorService, AtModalService, ModalBaseService, TableComponent, AtTbodyDirective, AtTdDirective, AtThDirective, AtTbodyTrDirective, AtTheadDirective, PagenationComponent, BreadcrumbComponent, AtBreadItemDirective, MessageContainerComponent, MessageComponent, AtMessageService, AtMessageContainerService, PopoverComponent, ProgressComponent, TooltipComponent, FormComponent, AtFormDirective, AtFormItemDirective, AtFormLabelDirective, AtFormContentDirective, AtFormErrorDirective, AtFormFeedbackDirective, DatetimepickerComponent, CalendarComponent, TimeComponent, CardComponent, AtModule, AT_ROOT_CONFIG, DropDownAnimation as ɵb, FadeAnimation as ɵc, TagAnimation as ɵa, ComponentCreator as ɵbe, OVERLAY_PROVIDERS as ɵm, OverlayModule as ɵn, Overlay as ɵo, OVERLAY_CONTAINER_PROVIDER as ɵr, OVERLAY_CONTAINER_PROVIDER_FACTORY as ɵq, OverlayContainer as ɵp, ConnectedOverlayDirective as ɵt, OverlayOrigin as ɵs, OverlayPositionBuilder as ɵbd, VIEWPORT_RULER_PROVIDER as ɵw, VIEWPORT_RULER_PROVIDER_FACTORY as ɵv, ViewportRuler as ɵu, ScrollDispatchModule as ɵx, SCROLL_DISPATCHER_PROVIDER as ɵbb, SCROLL_DISPATCHER_PROVIDER_FACTORY as ɵba, ScrollDispatcher as ɵz, ScrollStrategyOptions as ɵbc, Scrollable as ɵy, AtFormatPipe as ɵe, DropdownDirective as ɵd, AtTabInkDirective as ɵj, TabBodyComponent as ɵh, TabContentComponent as ɵg, TabHeaderComponent as ɵi, TabLabelDirective as ɵl, TabNavsComponent as ɵk, TabSetComponent as ɵf };
export { CommonModule } from '@angular/common';
