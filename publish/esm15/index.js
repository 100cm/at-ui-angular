import { ApplicationRef, Component, ComponentFactoryResolver, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Injectable, Injector, Input, NgModule, NgZone, Output, Renderer2, RendererFactory2, ViewChild, ViewEncapsulation, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTO_STYLE, AnimationBuilder, AnimationFactory, NoopAnimationPlayer, animate, sequence, state, style, transition, trigger, ɵAnimationGroupPlayer, ɵPRE_STYLE } from '@angular/animations';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BrowserModule, DOCUMENT, ɵDomRendererFactory2 } from '@angular/platform-browser';
import { __extends } from 'tslib';
import { setTimeout as setTimeout$1 } from 'timers';

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
        this.showText = (this.text.nativeElement.innerText.length > 0);
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
        this._active = true;
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
                template: `<div class="at-menu__submenu-title"
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
    'active': [{ type: Input, args: ['active',] },],
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
        this._el = this._elementRef.nativeElement;
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
            this.span && `col-md-${this.span}`,
            this.offset && `col-md-offset-${this.offset}`
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
                template: `<ng-content></ng-content>
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
        console.log(this.checkbox);
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
    constructor() {
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
        this.showAppend = true;
        this.showPrepend = true;
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
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'atInput',
                template: `<div class="{{_prefixCls}} {{_prefixCls}}--{{atSize}} {{_prefixCls}}--{{atStatus}}"
                 [ngClass]="_BindClass">
    <div #prepend [hidden]="!showPrepend" [ngClass]="{'at-input-group__prepend': showPrepend}">
      <ng-content select="[atPrepend]"></ng-content>
    </div>

    <ng-template [ngIf]="atType == 'normal'">
      <input [(ngModel)]="value" placeholder="{{placeholder}}" type="{{type}}" [disabled]="disabled"
             class="{{_prefixCls}}__original">
    </ng-template>

    <ng-template [ngIf]="atType == 'number'">
      <div class="at-input-number__input">
        <input [(ngModel)]="value" placeholder="{{placeholder}}" type="number" [disabled]="disabled"
               class="{{_prefixCls}}__original">

        <div class="at-input-number__handler">
          <span (click)="numberUp()" class="at-input-number__up" [ngClass]="{'at-input-number__up--disabled':isMax}"><i class="icon icon-chevron-up"  ></i></span>
          <span  (click)="numberDown()" class="at-input-number__down" [ngClass]="{'at-input-number__up--disabled':isMin}"><i class="icon icon-chevron-down"></i></span></div>
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
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    'max': [{ type: Input },],
    'min': [{ type: Input },],
    'step': [{ type: Input },],
    'atType': [{ type: Input },],
    'atSize': [{ type: Input },],
    'icon': [{ type: Input },],
    'type': [{ type: Input },],
    'disabled': [{ type: Input },],
    'atStatus': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'prepend': [{ type: ViewChild, args: ['prepend',] },],
    'append': [{ type: ViewChild, args: ['append',] },],
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
        let /** @type {?} */ label = ((this.options.filter((option) => {
            return option._selected == true;
        }) || [])[0] || {})['atLabel'];
        return label;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    addOption(option) {
        this.options.push(option);
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
        this.updateValue(value, true);
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
     * @return {?}
     */
    selectOption(e, option) {
        this.filterOptions = this.options;
        this.updateValue(option.atValue);
    }
    /**
     * @param {?} value
     * @param {?=} init
     * @param {?=} option
     * @return {?}
     */
    updateValue(value, init = false, option = { isTag: false }) {
        if (this._value === value) {
            return;
        }
        if (this.multiple) {
            if ((value == null)) {
                this._value = [];
            }
            else {
                //初始化全部push
                if (init) {
                    this._value = value;
                }
                else {
                    if (!this._value.includes(value) || option.isTag == true) {
                        this._value.push(value);
                    }
                    else {
                        //remove index
                        this._value = this._value.filter((data) => {
                            return (data != value);
                        });
                    }
                }
            }
        }
        if (!this.multiple) {
            this._value = value;
            this._searchText = this._value;
        }
        this.options.forEach((option) => {
            let /** @type {?} */ selected = false;
            // 多选
            if (this.multiple == true) {
                selected = this._value.includes(option._atValue) ? true : false;
            }
            else {
                selected = this._value === option._atValue;
            }
            option._selected = selected;
        });
        this.onChange(this._value);
        //emit the output
        this.change.emit(this._value);
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
        this.updateValue(data.atValue);
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
            if (this.options.filter((op) => {
                return (op.atValue == option.atValue);
            }).length == 0) {
                this.options.push(option);
            }
            this.updateValue(value, false, option);
            this._searchText = '';
            this.updateTop();
        }
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
    <span *ngFor="let item of selectedOptions" class="at-tag" [@tagAnimation]>
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
              [ngClass]="{'at-select__option--selected': option._selected,'at-select__option--disabled':option.disabled}"
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

class DropdownComponent {
    constructor() {
        this._placement = 'bottom';
        this.dropDown = false;
        this.position = {};
        this._dropDownPosition = 'bottom';
        this.trigger = 'click';
        this.dropDownChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get dropDownPosition() {
        return this._dropDownPosition;
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
    emitDropDown() {
        this.dropDownChange.emit(this.dropDown);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placement(value) {
        this._placement = value;
        value == ('top' || 'bottom') ? this._dropDownPosition = value : this._dropDownPosition = 'top';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropDownPosition(value) {
        this._dropDownPosition = value;
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
    onDocumentClick(e) {
        this.dropDown = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    hide(e) {
        e.stopPropagation();
        clearTimeout(this.time);
        this.time = setTimeout(_ => {
            this.dropDown = !this.dropDown;
            this.emitDropDown();
        }, 100);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    show(e) {
        e.stopPropagation();
        clearTimeout(this.time);
        this.time = setTimeout(_ => {
            this.dropDown = true;
            this.emitDropDown();
        }, 100);
    }
    /**
     * @return {?}
     */
    setdropDown() {
        clearTimeout(this.time);
        this.time = setTimeout(_ => {
            this.dropDown = !this.dropDown;
            this.emitDropDown();
        }, 100);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    mouseEnter(e) {
        if (this.trigger == 'hover') {
            this.show(e);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    mouseLeave(e) {
        if (this.trigger == 'hover') {
            this.hide(e);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.changePosition();
    }
    /**
     * @return {?}
     */
    changePosition() {
        let /** @type {?} */ trigger$$1 = this.triggerRef.nativeElement;
        let /** @type {?} */ popover = this.popoverRef.nativeElement;
        switch (this._placement) {
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
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'atDropdown',
                template: `<div (mouseenter)="mouseEnter($event)" (mouseleave)="mouseLeave($event)" class="at-dropdown">
  <div #trigger (click)="setdropDown()" class="at-dropdown__trigger">
    <ng-content></ng-content>
  </div>
  <div #popover
       class="at-dropdown__popover">
    <ul (click)="hide($event)" *ngIf="dropDown" atDropMenuList [@dropDownAnimation]="dropDownPosition">
      <ng-content select="[atDropMenuItem]"></ng-content>
    </ul>
  </div>
</div>
`,
                animations: [DropDownAnimation, trigger('fadeAnimation', [
                        state('*', style({ opacity: 1 })),
                        transition('* => void', [
                            animate(150, style({ opacity: 0, display: 'none' }))
                        ]),
                        transition('void => *', [
                            style({ opacity: '0' }),
                            animate(150, style({ opacity: 1 }))
                        ])
                    ]),],
            },] },
];
/**
 * @nocollapse
 */
DropdownComponent.ctorParameters = () => [];
DropdownComponent.propDecorators = {
    'trigger': [{ type: Input },],
    'dropDownChange': [{ type: Output },],
    'placement': [{ type: Input },],
    'dropDownPosition': [{ type: Input },],
    'triggerRef': [{ type: ViewChild, args: ['trigger',] },],
    'popoverRef': [{ type: ViewChild, args: ['popover',] },],
    'onDocumentClick': [{ type: HostListener, args: ['document:click', ['$event'],] },],
};

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

class DropMenuListComponent extends MenuListComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DropMenuListComponent.decorators = [
    { type: Component, args: [{
                selector: '[atDropMenuList]',
                template: `<ng-content></ng-content>`,
            },] },
];
/**
 * @nocollapse
 */
DropMenuListComponent.ctorParameters = () => [];

/**
 * @license Angular v4.4.6
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function optimizeGroupPlayer(players) {
    switch (players.length) {
        case 0:
            return new NoopAnimationPlayer();
        case 1:
            return players[0];
        default:
            return new ɵAnimationGroupPlayer(players);
    }
}
function normalizeKeyframes(driver, normalizer, element, keyframes, preStyles, postStyles) {
    if (preStyles === void 0) { preStyles = {}; }
    if (postStyles === void 0) { postStyles = {}; }
    var errors = [];
    var normalizedKeyframes = [];
    var previousOffset = -1;
    var previousKeyframe = null;
    keyframes.forEach(function (kf) {
        var offset = kf['offset'];
        var isSameOffset = offset == previousOffset;
        var normalizedKeyframe = (isSameOffset && previousKeyframe) || {};
        Object.keys(kf).forEach(function (prop) {
            var normalizedProp = prop;
            var normalizedValue = kf[prop];
            if (prop !== 'offset') {
                normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
                switch (normalizedValue) {
                    case ɵPRE_STYLE:
                        normalizedValue = preStyles[prop];
                        break;
                    case AUTO_STYLE:
                        normalizedValue = postStyles[prop];
                        break;
                    default:
                        normalizedValue =
                            normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
                        break;
                }
            }
            normalizedKeyframe[normalizedProp] = normalizedValue;
        });
        if (!isSameOffset) {
            normalizedKeyframes.push(normalizedKeyframe);
        }
        previousKeyframe = normalizedKeyframe;
        previousOffset = offset;
    });
    if (errors.length) {
        var LINE_START = '\n - ';
        throw new Error("Unable to animate due to the following errors:" + LINE_START + errors.join(LINE_START));
    }
    return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
    switch (eventName) {
        case 'start':
            player.onStart(function () { return callback(event && copyAnimationEvent(event, 'start', player.totalTime)); });
            break;
        case 'done':
            player.onDone(function () { return callback(event && copyAnimationEvent(event, 'done', player.totalTime)); });
            break;
        case 'destroy':
            player.onDestroy(function () { return callback(event && copyAnimationEvent(event, 'destroy', player.totalTime)); });
            break;
    }
}
function copyAnimationEvent(e, phaseName, totalTime) {
    var event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == undefined ? e.totalTime : totalTime);
    var data = e['_data'];
    if (data != null) {
        event['_data'] = data;
    }
    return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName, totalTime) {
    if (phaseName === void 0) { phaseName = ''; }
    if (totalTime === void 0) { totalTime = 0; }
    return { element: element, triggerName: triggerName, fromState: fromState, toState: toState, phaseName: phaseName, totalTime: totalTime };
}
function getOrSetAsInMap(map, key, defaultValue) {
    var value;
    if (map instanceof Map) {
        value = map.get(key);
        if (!value) {
            map.set(key, value = defaultValue);
        }
    }
    else {
        value = map[key];
        if (!value) {
            value = map[key] = defaultValue;
        }
    }
    return value;
}
function parseTimelineCommand(command) {
    var separatorPos = command.indexOf(':');
    var id = command.substring(1, separatorPos);
    var action = command.substr(separatorPos + 1);
    return [id, action];
}
var _contains = function (elm1, elm2) { return false; };
var _matches = function (element, selector) { return false; };
var _query = function (element, selector, multi) {
    return [];
};
if (typeof Element != 'undefined') {
    // this is well supported in all browsers
    _contains = function (elm1, elm2) { return elm1.contains(elm2); };
    if (Element.prototype.matches) {
        _matches = function (element, selector) { return element.matches(selector); };
    }
    else {
        var proto = Element.prototype;
        var fn_1 = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector ||
            proto.oMatchesSelector || proto.webkitMatchesSelector;
        if (fn_1) {
            _matches = function (element, selector) { return fn_1.apply(element, [selector]); };
        }
    }
    _query = function (element, selector, multi) {
        var results = [];
        if (multi) {
            results.push.apply(results, element.querySelectorAll(selector));
        }
        else {
            var elm = element.querySelector(selector);
            if (elm) {
                results.push(elm);
            }
        }
        return results;
    };
}
var matchesElement = _matches;
var containsElement = _contains;
var invokeQuery = _query;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @experimental
 */
var NoopAnimationDriver = (function () {
    function NoopAnimationDriver() {
    }
    NoopAnimationDriver.prototype.matchesElement = function (element, selector) {
        return matchesElement(element, selector);
    };
    NoopAnimationDriver.prototype.containsElement = function (elm1, elm2) { return containsElement(elm1, elm2); };
    NoopAnimationDriver.prototype.query = function (element, selector, multi) {
        return invokeQuery(element, selector, multi);
    };
    NoopAnimationDriver.prototype.computeStyle = function (element, prop, defaultValue) {
        return defaultValue || '';
    };
    NoopAnimationDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        return new NoopAnimationPlayer();
    };
    return NoopAnimationDriver;
}());
/**
 * @experimental
 */
var AnimationDriver = (function () {
    function AnimationDriver() {
    }
    return AnimationDriver;
}());
AnimationDriver.NOOP = new NoopAnimationDriver();
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ONE_SECOND = 1000;
var SUBSTITUTION_EXPR_START = '{{';
var SUBSTITUTION_EXPR_END = '}}';
var ENTER_CLASSNAME = 'ng-enter';
var LEAVE_CLASSNAME = 'ng-leave';
var ENTER_SELECTOR = '.ng-enter';
var LEAVE_SELECTOR = '.ng-leave';
var NG_TRIGGER_CLASSNAME = 'ng-trigger';
var NG_TRIGGER_SELECTOR = '.ng-trigger';
var NG_ANIMATING_CLASSNAME = 'ng-animating';
var NG_ANIMATING_SELECTOR = '.ng-animating';
function resolveTimingValue(value) {
    if (typeof value == 'number')
        return value;
    var matches = value.match(/^(-?[\.\d]+)(m?s)/);
    if (!matches || matches.length < 2)
        return 0;
    return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
    switch (unit) {
        case 's':
            return value * ONE_SECOND;
        default:
            return value;
    }
}
function resolveTiming(timings, errors, allowNegativeValues) {
    return timings.hasOwnProperty('duration') ?
        timings :
        parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
    var regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
    var duration;
    var delay = 0;
    var easing = '';
    if (typeof exp === 'string') {
        var matches = exp.match(regex);
        if (matches === null) {
            errors.push("The provided timing value \"" + exp + "\" is invalid.");
            return { duration: 0, delay: 0, easing: '' };
        }
        duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
        var delayMatch = matches[3];
        if (delayMatch != null) {
            delay = _convertTimeValueToMS(Math.floor(parseFloat(delayMatch)), matches[4]);
        }
        var easingVal = matches[5];
        if (easingVal) {
            easing = easingVal;
        }
    }
    else {
        duration = exp;
    }
    if (!allowNegativeValues) {
        var containsErrors = false;
        var startIndex = errors.length;
        if (duration < 0) {
            errors.push("Duration values below 0 are not allowed for this animation step.");
            containsErrors = true;
        }
        if (delay < 0) {
            errors.push("Delay values below 0 are not allowed for this animation step.");
            containsErrors = true;
        }
        if (containsErrors) {
            errors.splice(startIndex, 0, "The provided timing value \"" + exp + "\" is invalid.");
        }
    }
    return { duration: duration, delay: delay, easing: easing };
}
function copyObj(obj, destination) {
    if (destination === void 0) { destination = {}; }
    Object.keys(obj).forEach(function (prop) { destination[prop] = obj[prop]; });
    return destination;
}
function normalizeStyles(styles) {
    var normalizedStyles = {};
    if (Array.isArray(styles)) {
        styles.forEach(function (data) { return copyStyles(data, false, normalizedStyles); });
    }
    else {
        copyStyles(styles, false, normalizedStyles);
    }
    return normalizedStyles;
}
function copyStyles(styles, readPrototype, destination) {
    if (destination === void 0) { destination = {}; }
    if (readPrototype) {
        // we make use of a for-in loop so that the
        // prototypically inherited properties are
        // revealed from the backFill map
        for (var prop in styles) {
            destination[prop] = styles[prop];
        }
    }
    else {
        copyObj(styles, destination);
    }
    return destination;
}
function setStyles(element, styles) {
    if (element['style']) {
        Object.keys(styles).forEach(function (prop) {
            var camelProp = dashCaseToCamelCase(prop);
            element.style[camelProp] = styles[prop];
        });
    }
}
function eraseStyles(element, styles) {
    if (element['style']) {
        Object.keys(styles).forEach(function (prop) {
            var camelProp = dashCaseToCamelCase(prop);
            element.style[camelProp] = '';
        });
    }
}
function normalizeAnimationEntry(steps) {
    if (Array.isArray(steps)) {
        if (steps.length == 1)
            return steps[0];
        return sequence(steps);
    }
    return steps;
}
function validateStyleParams(value, options, errors) {
    var params = options.params || {};
    var matches = extractStyleParams(value);
    if (matches.length) {
        matches.forEach(function (varName) {
            if (!params.hasOwnProperty(varName)) {
                errors.push("Unable to resolve the local animation param " + varName + " in the given list of values");
            }
        });
    }
}
var PARAM_REGEX = new RegExp(SUBSTITUTION_EXPR_START + "\\s*(.+?)\\s*" + SUBSTITUTION_EXPR_END, 'g');
function extractStyleParams(value) {
    var params = [];
    if (typeof value === 'string') {
        var val = value.toString();
        var match = void 0;
        while (match = PARAM_REGEX.exec(val)) {
            params.push(match[1]);
        }
        PARAM_REGEX.lastIndex = 0;
    }
    return params;
}
function interpolateParams(value, params, errors) {
    var original = value.toString();
    var str = original.replace(PARAM_REGEX, function (_, varName) {
        var localVal = params[varName];
        // this means that the value was never overidden by the data passed in by the user
        if (!params.hasOwnProperty(varName)) {
            errors.push("Please provide a value for the animation param " + varName);
            localVal = '';
        }
        return localVal.toString();
    });
    // we do this to assert that numeric values stay as they are
    return str == original ? value : str;
}
function iteratorToArray(iterator) {
    var arr = [];
    var item = iterator.next();
    while (!item.done) {
        arr.push(item.value);
        item = iterator.next();
    }
    return arr;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
    return input.replace(DASH_CASE_REGEXP, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        return m[1].toUpperCase();
    });
}
function allowPreviousPlayerStylesMerge(duration, delay) {
    return duration === 0 || delay === 0;
}
function visitDslNode(visitor, node, context) {
    switch (node.type) {
        case 7 /* Trigger */:
            return visitor.visitTrigger(node, context);
        case 0 /* State */:
            return visitor.visitState(node, context);
        case 1 /* Transition */:
            return visitor.visitTransition(node, context);
        case 2 /* Sequence */:
            return visitor.visitSequence(node, context);
        case 3 /* Group */:
            return visitor.visitGroup(node, context);
        case 4 /* Animate */:
            return visitor.visitAnimate(node, context);
        case 5 /* Keyframes */:
            return visitor.visitKeyframes(node, context);
        case 6 /* Style */:
            return visitor.visitStyle(node, context);
        case 8 /* Reference */:
            return visitor.visitReference(node, context);
        case 9 /* AnimateChild */:
            return visitor.visitAnimateChild(node, context);
        case 10 /* AnimateRef */:
            return visitor.visitAnimateRef(node, context);
        case 11 /* Query */:
            return visitor.visitQuery(node, context);
        case 12 /* Stagger */:
            return visitor.visitStagger(node, context);
        default:
            throw new Error("Unable to resolve animation metadata node #" + node.type);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ANY_STATE = '*';
/**
 * @param {?} transitionValue
 * @param {?} errors
 * @return {?}
 */
function parseTransitionExpr(transitionValue, errors) {
    var /** @type {?} */ expressions = [];
    if (typeof transitionValue == 'string') {
        ((transitionValue))
            .split(/\s*,\s*/)
            .forEach(function (str) { return parseInnerTransitionStr(str, expressions, errors); });
    }
    else {
        expressions.push(/** @type {?} */ (transitionValue));
    }
    return expressions;
}
/**
 * @param {?} eventStr
 * @param {?} expressions
 * @param {?} errors
 * @return {?}
 */
function parseInnerTransitionStr(eventStr, expressions, errors) {
    if (eventStr[0] == ':') {
        eventStr = parseAnimationAlias(eventStr, errors);
    }
    var /** @type {?} */ match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (match == null || match.length < 4) {
        errors.push("The provided transition expression \"" + eventStr + "\" is not supported");
        return expressions;
    }
    var /** @type {?} */ fromState = match[1];
    var /** @type {?} */ separator = match[2];
    var /** @type {?} */ toState = match[3];
    expressions.push(makeLambdaFromStates(fromState, toState));
    var /** @type {?} */ isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
    if (separator[0] == '<' && !isFullAnyStateExpr) {
        expressions.push(makeLambdaFromStates(toState, fromState));
    }
}
/**
 * @param {?} alias
 * @param {?} errors
 * @return {?}
 */
function parseAnimationAlias(alias, errors) {
    switch (alias) {
        case ':enter':
            return 'void => *';
        case ':leave':
            return '* => void';
        default:
            errors.push("The transition alias value \"" + alias + "\" is not supported");
            return '* => *';
    }
}
var TRUE_BOOLEAN_VALUES = new Set();
TRUE_BOOLEAN_VALUES.add('true');
TRUE_BOOLEAN_VALUES.add('1');
var FALSE_BOOLEAN_VALUES = new Set();
FALSE_BOOLEAN_VALUES.add('false');
FALSE_BOOLEAN_VALUES.add('0');
/**
 * @param {?} lhs
 * @param {?} rhs
 * @return {?}
 */
function makeLambdaFromStates(lhs, rhs) {
    var /** @type {?} */ LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
    var /** @type {?} */ RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
    return function (fromState, toState) {
        var /** @type {?} */ lhsMatch = lhs == ANY_STATE || lhs == fromState;
        var /** @type {?} */ rhsMatch = rhs == ANY_STATE || rhs == toState;
        if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === 'boolean') {
            lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
        }
        if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === 'boolean') {
            rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
        }
        return lhsMatch && rhsMatch;
    };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELF_TOKEN = ':self';
var SELF_TOKEN_REGEX = new RegExp("s*" + SELF_TOKEN + "s*,?", 'g');
/**
 * @param {?} metadata
 * @param {?} errors
 * @return {?}
 */
function buildAnimationAst(metadata, errors) {
    return new AnimationAstBuilderVisitor().build(metadata, errors);
}
var LEAVE_TOKEN = ':leave';
var LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, 'g');
var ENTER_TOKEN = ':enter';
var ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, 'g');
var ROOT_SELECTOR = '';
var AnimationAstBuilderVisitor = (function () {
    function AnimationAstBuilderVisitor() {
    }
    /**
     * @param {?} metadata
     * @param {?} errors
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.build = function (metadata, errors) {
        var /** @type {?} */ context = new AnimationAstBuilderContext(errors);
        this._resetContextStyleTimingState(context);
        return (visitDslNode(this, normalizeAnimationEntry(metadata), context));
    };
    /**
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype._resetContextStyleTimingState = function (context) {
        context.currentQuerySelector = ROOT_SELECTOR;
        context.collectedStyles = {};
        context.collectedStyles[ROOT_SELECTOR] = {};
        context.currentTime = 0;
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitTrigger = function (metadata, context) {
        var _this = this;
        var /** @type {?} */ queryCount = context.queryCount = 0;
        var /** @type {?} */ depCount = context.depCount = 0;
        var /** @type {?} */ states = [];
        var /** @type {?} */ transitions = [];
        metadata.definitions.forEach(function (def) {
            _this._resetContextStyleTimingState(context);
            if (def.type == 0 /* State */) {
                var /** @type {?} */ stateDef_1 = (def);
                var /** @type {?} */ name = stateDef_1.name;
                name.split(/\s*,\s*/).forEach(function (n) {
                    stateDef_1.name = n;
                    states.push(_this.visitState(stateDef_1, context));
                });
                stateDef_1.name = name;
            }
            else if (def.type == 1 /* Transition */) {
                var /** @type {?} */ transition$$1 = _this.visitTransition(/** @type {?} */ (def), context);
                queryCount += transition$$1.queryCount;
                depCount += transition$$1.depCount;
                transitions.push(transition$$1);
            }
            else {
                context.errors.push('only state() and transition() definitions can sit inside of a trigger()');
            }
        });
        return {
            type: 7 /* Trigger */,
            name: metadata.name, states: states, transitions: transitions, queryCount: queryCount, depCount: depCount,
            options: null
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitState = function (metadata, context) {
        var /** @type {?} */ styleAst = this.visitStyle(metadata.styles, context);
        var /** @type {?} */ astParams = (metadata.options && metadata.options.params) || null;
        if (styleAst.containsDynamicStyles) {
            var /** @type {?} */ missingSubs_1 = new Set();
            var /** @type {?} */ params_1 = astParams || {};
            styleAst.styles.forEach(function (value) {
                if (isObject(value)) {
                    var /** @type {?} */ stylesObj_1 = (value);
                    Object.keys(stylesObj_1).forEach(function (prop) {
                        extractStyleParams(stylesObj_1[prop]).forEach(function (sub) {
                            if (!params_1.hasOwnProperty(sub)) {
                                missingSubs_1.add(sub);
                            }
                        });
                    });
                }
            });
            if (missingSubs_1.size) {
                var /** @type {?} */ missingSubsArr = iteratorToArray(missingSubs_1.values());
                context.errors.push("state(\"" + metadata.name + "\", ...) must define default values for all the following style substitutions: " + missingSubsArr.join(', '));
            }
        }
        return {
            type: 0 /* State */,
            name: metadata.name,
            style: styleAst,
            options: astParams ? { params: astParams } : null
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitTransition = function (metadata, context) {
        context.queryCount = 0;
        context.depCount = 0;
        var /** @type {?} */ animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
        var /** @type {?} */ matchers = parseTransitionExpr(metadata.expr, context.errors);
        return {
            type: 1 /* Transition */,
            matchers: matchers,
            animation: animation,
            queryCount: context.queryCount,
            depCount: context.depCount,
            options: normalizeAnimationOptions(metadata.options)
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitSequence = function (metadata, context) {
        var _this = this;
        return {
            type: 2 /* Sequence */,
            steps: metadata.steps.map(function (s) { return visitDslNode(_this, s, context); }),
            options: normalizeAnimationOptions(metadata.options)
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitGroup = function (metadata, context) {
        var _this = this;
        var /** @type {?} */ currentTime = context.currentTime;
        var /** @type {?} */ furthestTime = 0;
        var /** @type {?} */ steps = metadata.steps.map(function (step) {
            context.currentTime = currentTime;
            var /** @type {?} */ innerAst = visitDslNode(_this, step, context);
            furthestTime = Math.max(furthestTime, context.currentTime);
            return innerAst;
        });
        context.currentTime = furthestTime;
        return {
            type: 3 /* Group */,
            steps: steps,
            options: normalizeAnimationOptions(metadata.options)
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitAnimate = function (metadata, context) {
        var /** @type {?} */ timingAst = constructTimingAst(metadata.timings, context.errors);
        context.currentAnimateTimings = timingAst;
        var /** @type {?} */ styleAst;
        var /** @type {?} */ styleMetadata = metadata.styles ? metadata.styles : style({});
        if (styleMetadata.type == 5 /* Keyframes */) {
            styleAst = this.visitKeyframes(/** @type {?} */ (styleMetadata), context);
        }
        else {
            var /** @type {?} */ styleMetadata_1 = (metadata.styles);
            var /** @type {?} */ isEmpty = false;
            if (!styleMetadata_1) {
                isEmpty = true;
                var /** @type {?} */ newStyleData = {};
                if (timingAst.easing) {
                    newStyleData['easing'] = timingAst.easing;
                }
                styleMetadata_1 = style(newStyleData);
            }
            context.currentTime += timingAst.duration + timingAst.delay;
            var /** @type {?} */ _styleAst = this.visitStyle(styleMetadata_1, context);
            _styleAst.isEmptyStep = isEmpty;
            styleAst = _styleAst;
        }
        context.currentAnimateTimings = null;
        return {
            type: 4 /* Animate */,
            timings: timingAst,
            style: styleAst,
            options: null
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitStyle = function (metadata, context) {
        var /** @type {?} */ ast = this._makeStyleAst(metadata, context);
        this._validateStyleAst(ast, context);
        return ast;
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype._makeStyleAst = function (metadata, context) {
        var /** @type {?} */ styles = [];
        if (Array.isArray(metadata.styles)) {
            ((metadata.styles)).forEach(function (styleTuple) {
                if (typeof styleTuple == 'string') {
                    if (styleTuple == AUTO_STYLE) {
                        styles.push(/** @type {?} */ (styleTuple));
                    }
                    else {
                        context.errors.push("The provided style string value " + styleTuple + " is not allowed.");
                    }
                }
                else {
                    styles.push(/** @type {?} */ (styleTuple));
                }
            });
        }
        else {
            styles.push(metadata.styles);
        }
        var /** @type {?} */ containsDynamicStyles = false;
        var /** @type {?} */ collectedEasing = null;
        styles.forEach(function (styleData) {
            if (isObject(styleData)) {
                var /** @type {?} */ styleMap = (styleData);
                var /** @type {?} */ easing = styleMap['easing'];
                if (easing) {
                    collectedEasing = (easing);
                    delete styleMap['easing'];
                }
                if (!containsDynamicStyles) {
                    for (var /** @type {?} */ prop in styleMap) {
                        var /** @type {?} */ value = styleMap[prop];
                        if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
                            containsDynamicStyles = true;
                            break;
                        }
                    }
                }
            }
        });
        return {
            type: 6 /* Style */,
            styles: styles,
            easing: collectedEasing,
            offset: metadata.offset, containsDynamicStyles: containsDynamicStyles,
            options: null
        };
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype._validateStyleAst = function (ast, context) {
        var /** @type {?} */ timings = context.currentAnimateTimings;
        var /** @type {?} */ endTime = context.currentTime;
        var /** @type {?} */ startTime = context.currentTime;
        if (timings && startTime > 0) {
            startTime -= timings.duration + timings.delay;
        }
        ast.styles.forEach(function (tuple) {
            if (typeof tuple == 'string')
                return;
            Object.keys(tuple).forEach(function (prop) {
                var /** @type {?} */ collectedStyles = context.collectedStyles[((context.currentQuerySelector))];
                var /** @type {?} */ collectedEntry = collectedStyles[prop];
                var /** @type {?} */ updateCollectedStyle = true;
                if (collectedEntry) {
                    if (startTime != endTime && startTime >= collectedEntry.startTime &&
                        endTime <= collectedEntry.endTime) {
                        context.errors.push("The CSS property \"" + prop + "\" that exists between the times of \"" + collectedEntry.startTime + "ms\" and \"" + collectedEntry.endTime + "ms\" is also being animated in a parallel animation between the times of \"" + startTime + "ms\" and \"" + endTime + "ms\"");
                        updateCollectedStyle = false;
                    }
                    // we always choose the smaller start time value since we
                    // want to have a record of the entire animation window where
                    // the style property is being animated in between
                    startTime = collectedEntry.startTime;
                }
                if (updateCollectedStyle) {
                    collectedStyles[prop] = { startTime: startTime, endTime: endTime };
                }
                if (context.options) {
                    validateStyleParams(tuple[prop], context.options, context.errors);
                }
            });
        });
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitKeyframes = function (metadata, context) {
        var _this = this;
        var /** @type {?} */ ast = { type: 5 /* Keyframes */, styles: [], options: null };
        if (!context.currentAnimateTimings) {
            context.errors.push("keyframes() must be placed inside of a call to animate()");
            return ast;
        }
        var /** @type {?} */ MAX_KEYFRAME_OFFSET = 1;
        var /** @type {?} */ totalKeyframesWithOffsets = 0;
        var /** @type {?} */ offsets = [];
        var /** @type {?} */ offsetsOutOfOrder = false;
        var /** @type {?} */ keyframesOutOfRange = false;
        var /** @type {?} */ previousOffset = 0;
        var /** @type {?} */ keyframes = metadata.steps.map(function (styles) {
            var /** @type {?} */ style$$1 = _this._makeStyleAst(styles, context);
            var /** @type {?} */ offsetVal = style$$1.offset != null ? style$$1.offset : consumeOffset(style$$1.styles);
            var /** @type {?} */ offset = 0;
            if (offsetVal != null) {
                totalKeyframesWithOffsets++;
                offset = style$$1.offset = offsetVal;
            }
            keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
            offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
            previousOffset = offset;
            offsets.push(offset);
            return style$$1;
        });
        if (keyframesOutOfRange) {
            context.errors.push("Please ensure that all keyframe offsets are between 0 and 1");
        }
        if (offsetsOutOfOrder) {
            context.errors.push("Please ensure that all keyframe offsets are in order");
        }
        var /** @type {?} */ length = metadata.steps.length;
        var /** @type {?} */ generatedOffset = 0;
        if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
            context.errors.push("Not all style() steps within the declared keyframes() contain offsets");
        }
        else if (totalKeyframesWithOffsets == 0) {
            generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
        }
        var /** @type {?} */ limit = length - 1;
        var /** @type {?} */ currentTime = context.currentTime;
        var /** @type {?} */ currentAnimateTimings = ((context.currentAnimateTimings));
        var /** @type {?} */ animateDuration = currentAnimateTimings.duration;
        keyframes.forEach(function (kf, i) {
            var /** @type {?} */ offset = generatedOffset > 0 ? (i == limit ? 1 : (generatedOffset * i)) : offsets[i];
            var /** @type {?} */ durationUpToThisFrame = offset * animateDuration;
            context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
            currentAnimateTimings.duration = durationUpToThisFrame;
            _this._validateStyleAst(kf, context);
            kf.offset = offset;
            ast.styles.push(kf);
        });
        return ast;
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitReference = function (metadata, context) {
        return {
            type: 8 /* Reference */,
            animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
            options: normalizeAnimationOptions(metadata.options)
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitAnimateChild = function (metadata, context) {
        context.depCount++;
        return {
            type: 9 /* AnimateChild */,
            options: normalizeAnimationOptions(metadata.options)
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitAnimateRef = function (metadata, context) {
        return {
            type: 10 /* AnimateRef */,
            animation: this.visitReference(metadata.animation, context),
            options: normalizeAnimationOptions(metadata.options)
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitQuery = function (metadata, context) {
        var /** @type {?} */ parentSelector = ((context.currentQuerySelector));
        var /** @type {?} */ options = ((metadata.options || {}));
        context.queryCount++;
        context.currentQuery = metadata;
        var _a = normalizeSelector(metadata.selector), selector = _a[0], includeSelf = _a[1];
        context.currentQuerySelector =
            parentSelector.length ? (parentSelector + ' ' + selector) : selector;
        getOrSetAsInMap(context.collectedStyles, context.currentQuerySelector, {});
        var /** @type {?} */ animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
        context.currentQuery = null;
        context.currentQuerySelector = parentSelector;
        return {
            type: 11 /* Query */,
            selector: selector,
            limit: options.limit || 0,
            optional: !!options.optional, includeSelf: includeSelf, animation: animation,
            originalSelector: metadata.selector,
            options: normalizeAnimationOptions(metadata.options)
        };
    };
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    AnimationAstBuilderVisitor.prototype.visitStagger = function (metadata, context) {
        if (!context.currentQuery) {
            context.errors.push("stagger() can only be used inside of query()");
        }
        var /** @type {?} */ timings = metadata.timings === 'full' ?
            { duration: 0, delay: 0, easing: 'full' } :
            resolveTiming(metadata.timings, context.errors, true);
        return {
            type: 12 /* Stagger */,
            animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context), timings: timings,
            options: null
        };
    };
    return AnimationAstBuilderVisitor;
}());
/**
 * @param {?} selector
 * @return {?}
 */
function normalizeSelector(selector) {
    var /** @type {?} */ hasAmpersand = selector.split(/\s*,\s*/).find(function (token) { return token == SELF_TOKEN; }) ? true : false;
    if (hasAmpersand) {
        selector = selector.replace(SELF_TOKEN_REGEX, '');
    }
    selector = selector.replace(ENTER_TOKEN_REGEX, ENTER_SELECTOR)
        .replace(LEAVE_TOKEN_REGEX, LEAVE_SELECTOR)
        .replace(/@\*/g, NG_TRIGGER_SELECTOR)
        .replace(/@\w+/g, function (match) { return NG_TRIGGER_SELECTOR + '-' + match.substr(1); })
        .replace(/:animating/g, NG_ANIMATING_SELECTOR);
    return [selector, hasAmpersand];
}
/**
 * @param {?} obj
 * @return {?}
 */
function normalizeParams(obj) {
    return obj ? copyObj(obj) : null;
}
var AnimationAstBuilderContext = (function () {
    /**
     * @param {?} errors
     */
    function AnimationAstBuilderContext(errors) {
        this.errors = errors;
        this.queryCount = 0;
        this.depCount = 0;
        this.currentTransition = null;
        this.currentQuery = null;
        this.currentQuerySelector = null;
        this.currentAnimateTimings = null;
        this.currentTime = 0;
        this.collectedStyles = {};
        this.options = null;
    }
    return AnimationAstBuilderContext;
}());
/**
 * @param {?} styles
 * @return {?}
 */
function consumeOffset(styles) {
    if (typeof styles == 'string')
        return null;
    var /** @type {?} */ offset = null;
    if (Array.isArray(styles)) {
        styles.forEach(function (styleTuple) {
            if (isObject(styleTuple) && styleTuple.hasOwnProperty('offset')) {
                var /** @type {?} */ obj = (styleTuple);
                offset = parseFloat(/** @type {?} */ (obj['offset']));
                delete obj['offset'];
            }
        });
    }
    else if (isObject(styles) && styles.hasOwnProperty('offset')) {
        var /** @type {?} */ obj = (styles);
        offset = parseFloat(/** @type {?} */ (obj['offset']));
        delete obj['offset'];
    }
    return offset;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return !Array.isArray(value) && typeof value == 'object';
}
/**
 * @param {?} value
 * @param {?} errors
 * @return {?}
 */
function constructTimingAst(value, errors) {
    var /** @type {?} */ timings = null;
    if (value.hasOwnProperty('duration')) {
        timings = (value);
    }
    else if (typeof value == 'number') {
        var /** @type {?} */ duration = resolveTiming(/** @type {?} */ (value), errors).duration;
        return makeTimingAst(/** @type {?} */ (duration), 0, '');
    }
    var /** @type {?} */ strValue = (value);
    var /** @type {?} */ isDynamic = strValue.split(/\s+/).some(function (v) { return v.charAt(0) == '{' && v.charAt(1) == '{'; });
    if (isDynamic) {
        var /** @type {?} */ ast = (makeTimingAst(0, 0, ''));
        ast.dynamic = true;
        ast.strValue = strValue;
        return (ast);
    }
    timings = timings || resolveTiming(strValue, errors);
    return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
/**
 * @param {?} options
 * @return {?}
 */
function normalizeAnimationOptions(options) {
    if (options) {
        options = copyObj(options);
        if (options['params']) {
            options['params'] = ((normalizeParams(options['params'])));
        }
    }
    else {
        options = {};
    }
    return options;
}
/**
 * @param {?} duration
 * @param {?} delay
 * @param {?} easing
 * @return {?}
 */
function makeTimingAst(duration, delay, easing) {
    return { duration: duration, delay: delay, easing: easing };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} element
 * @param {?} keyframes
 * @param {?} preStyleProps
 * @param {?} postStyleProps
 * @param {?} duration
 * @param {?} delay
 * @param {?=} easing
 * @param {?=} subTimeline
 * @return {?}
 */
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing, subTimeline) {
    if (easing === void 0) { easing = null; }
    if (subTimeline === void 0) { subTimeline = false; }
    return {
        type: 1 /* TimelineAnimation */,
        element: element,
        keyframes: keyframes,
        preStyleProps: preStyleProps,
        postStyleProps: postStyleProps,
        duration: duration,
        delay: delay,
        totalTime: duration + delay, easing: easing, subTimeline: subTimeline
    };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ElementInstructionMap = (function () {
    function ElementInstructionMap() {
        this._map = new Map();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    ElementInstructionMap.prototype.consume = function (element) {
        var /** @type {?} */ instructions = this._map.get(element);
        if (instructions) {
            this._map.delete(element);
        }
        else {
            instructions = [];
        }
        return instructions;
    };
    /**
     * @param {?} element
     * @param {?} instructions
     * @return {?}
     */
    ElementInstructionMap.prototype.append = function (element, instructions) {
        var /** @type {?} */ existingInstructions = this._map.get(element);
        if (!existingInstructions) {
            this._map.set(element, existingInstructions = []);
        }
        existingInstructions.push.apply(existingInstructions, instructions);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    ElementInstructionMap.prototype.has = function (element) { return this._map.has(element); };
    /**
     * @return {?}
     */
    ElementInstructionMap.prototype.clear = function () { this._map.clear(); };
    return ElementInstructionMap;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ONE_FRAME_IN_MILLISECONDS = 1;
/**
 * @param {?} driver
 * @param {?} rootElement
 * @param {?} ast
 * @param {?=} startingStyles
 * @param {?=} finalStyles
 * @param {?=} options
 * @param {?=} subInstructions
 * @param {?=} errors
 * @return {?}
 */
function buildAnimationTimelines(driver, rootElement, ast, startingStyles, finalStyles, options, subInstructions, errors) {
    if (startingStyles === void 0) { startingStyles = {}; }
    if (finalStyles === void 0) { finalStyles = {}; }
    if (errors === void 0) { errors = []; }
    return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = (function () {
    function AnimationTimelineBuilderVisitor() {
    }
    /**
     * @param {?} driver
     * @param {?} rootElement
     * @param {?} ast
     * @param {?} startingStyles
     * @param {?} finalStyles
     * @param {?} options
     * @param {?=} subInstructions
     * @param {?=} errors
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.buildKeyframes = function (driver, rootElement, ast, startingStyles, finalStyles, options, subInstructions, errors) {
        if (errors === void 0) { errors = []; }
        subInstructions = subInstructions || new ElementInstructionMap();
        var /** @type {?} */ context = new AnimationTimelineContext(driver, rootElement, subInstructions, errors, []);
        context.options = options;
        context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
        visitDslNode(this, ast, context);
        // this checks to see if an actual animation happened
        var /** @type {?} */ timelines = context.timelines.filter(function (timeline) { return timeline.containsAnimation(); });
        if (timelines.length && Object.keys(finalStyles).length) {
            var /** @type {?} */ tl = timelines[timelines.length - 1];
            if (!tl.allowOnlyTimelineStyles()) {
                tl.setStyles([finalStyles], null, context.errors, options);
            }
        }
        return timelines.length ? timelines.map(function (timeline) { return timeline.buildKeyframes(); }) :
            [createTimelineInstruction(rootElement, [], [], [], 0, 0, '', false)];
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitTrigger = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitState = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitTransition = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitAnimateChild = function (ast, context) {
        var /** @type {?} */ elementInstructions = context.subInstructions.consume(context.element);
        if (elementInstructions) {
            var /** @type {?} */ innerContext = context.createSubContext(ast.options);
            var /** @type {?} */ startTime = context.currentTimeline.currentTime;
            var /** @type {?} */ endTime = this._visitSubInstructions(elementInstructions, innerContext, /** @type {?} */ (innerContext.options));
            if (startTime != endTime) {
                // we do this on the upper context because we created a sub context for
                // the sub child animations
                context.transformIntoNewTimeline(endTime);
            }
        }
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitAnimateRef = function (ast, context) {
        var /** @type {?} */ innerContext = context.createSubContext(ast.options);
        innerContext.transformIntoNewTimeline();
        this.visitReference(ast.animation, innerContext);
        context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
        context.previousNode = ast;
    };
    /**
     * @param {?} instructions
     * @param {?} context
     * @param {?} options
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype._visitSubInstructions = function (instructions, context, options) {
        var /** @type {?} */ startTime = context.currentTimeline.currentTime;
        var /** @type {?} */ furthestTime = startTime;
        // this is a special-case for when a user wants to skip a sub
        // animation from being fired entirely.
        var /** @type {?} */ duration = options.duration != null ? resolveTimingValue(options.duration) : null;
        var /** @type {?} */ delay = options.delay != null ? resolveTimingValue(options.delay) : null;
        if (duration !== 0) {
            instructions.forEach(function (instruction) {
                var /** @type {?} */ instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
                furthestTime =
                    Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
            });
        }
        return furthestTime;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitReference = function (ast, context) {
        context.updateOptions(ast.options, true);
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitSequence = function (ast, context) {
        var _this = this;
        var /** @type {?} */ subContextCount = context.subContextCount;
        var /** @type {?} */ ctx = context;
        var /** @type {?} */ options = ast.options;
        if (options && (options.params || options.delay)) {
            ctx = context.createSubContext(options);
            ctx.transformIntoNewTimeline();
            if (options.delay != null) {
                if (ctx.previousNode.type == 6 /* Style */) {
                    ctx.currentTimeline.snapshotCurrentStyles();
                    ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
                }
                var /** @type {?} */ delay = resolveTimingValue(options.delay);
                ctx.delayNextStep(delay);
            }
        }
        if (ast.steps.length) {
            ast.steps.forEach(function (s) { return visitDslNode(_this, s, ctx); });
            // this is here just incase the inner steps only contain or end with a style() call
            ctx.currentTimeline.applyStylesToKeyframe();
            // this means that some animation function within the sequence
            // ended up creating a sub timeline (which means the current
            // timeline cannot overlap with the contents of the sequence)
            if (ctx.subContextCount > subContextCount) {
                ctx.transformIntoNewTimeline();
            }
        }
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitGroup = function (ast, context) {
        var _this = this;
        var /** @type {?} */ innerTimelines = [];
        var /** @type {?} */ furthestTime = context.currentTimeline.currentTime;
        var /** @type {?} */ delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
        ast.steps.forEach(function (s) {
            var /** @type {?} */ innerContext = context.createSubContext(ast.options);
            if (delay) {
                innerContext.delayNextStep(delay);
            }
            visitDslNode(_this, s, innerContext);
            furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
            innerTimelines.push(innerContext.currentTimeline);
        });
        // this operation is run after the AST loop because otherwise
        // if the parent timeline's collected styles were updated then
        // it would pass in invalid data into the new-to-be forked items
        innerTimelines.forEach(function (timeline) { return context.currentTimeline.mergeTimelineCollectedStyles(timeline); });
        context.transformIntoNewTimeline(furthestTime);
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype._visitTiming = function (ast, context) {
        if (((ast)).dynamic) {
            var /** @type {?} */ strValue = ((ast)).strValue;
            var /** @type {?} */ timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
            return resolveTiming(timingValue, context.errors);
        }
        else {
            return { duration: ast.duration, delay: ast.delay, easing: ast.easing };
        }
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitAnimate = function (ast, context) {
        var /** @type {?} */ timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
        var /** @type {?} */ timeline = context.currentTimeline;
        if (timings.delay) {
            context.incrementTime(timings.delay);
            timeline.snapshotCurrentStyles();
        }
        var /** @type {?} */ style$$1 = ast.style;
        if (style$$1.type == 5 /* Keyframes */) {
            this.visitKeyframes(style$$1, context);
        }
        else {
            context.incrementTime(timings.duration);
            this.visitStyle(/** @type {?} */ (style$$1), context);
            timeline.applyStylesToKeyframe();
        }
        context.currentAnimateTimings = null;
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitStyle = function (ast, context) {
        var /** @type {?} */ timeline = context.currentTimeline;
        var /** @type {?} */ timings = ((context.currentAnimateTimings));
        // this is a special case for when a style() call
        // directly follows  an animate() call (but not inside of an animate() call)
        if (!timings && timeline.getCurrentStyleProperties().length) {
            timeline.forwardFrame();
        }
        var /** @type {?} */ easing = (timings && timings.easing) || ast.easing;
        if (ast.isEmptyStep) {
            timeline.applyEmptyStep(easing);
        }
        else {
            timeline.setStyles(ast.styles, easing, context.errors, context.options);
        }
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitKeyframes = function (ast, context) {
        var /** @type {?} */ currentAnimateTimings = ((context.currentAnimateTimings));
        var /** @type {?} */ startTime = (((context.currentTimeline))).duration;
        var /** @type {?} */ duration = currentAnimateTimings.duration;
        var /** @type {?} */ innerContext = context.createSubContext();
        var /** @type {?} */ innerTimeline = innerContext.currentTimeline;
        innerTimeline.easing = currentAnimateTimings.easing;
        ast.styles.forEach(function (step) {
            var /** @type {?} */ offset = step.offset || 0;
            innerTimeline.forwardTime(offset * duration);
            innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
            innerTimeline.applyStylesToKeyframe();
        });
        // this will ensure that the parent timeline gets all the styles from
        // the child even if the new timeline below is not used
        context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
        // we do this because the window between this timeline and the sub timeline
        // should ensure that the styles within are exactly the same as they were before
        context.transformIntoNewTimeline(startTime + duration);
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitQuery = function (ast, context) {
        var _this = this;
        // in the event that the first step before this is a style step we need
        // to ensure the styles are applied before the children are animated
        var /** @type {?} */ startTime = context.currentTimeline.currentTime;
        var /** @type {?} */ options = ((ast.options || {}));
        var /** @type {?} */ delay = options.delay ? resolveTimingValue(options.delay) : 0;
        if (delay && (context.previousNode.type === 6 /* Style */ ||
            (startTime == 0 && context.currentTimeline.getCurrentStyleProperties().length))) {
            context.currentTimeline.snapshotCurrentStyles();
            context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        var /** @type {?} */ furthestTime = startTime;
        var /** @type {?} */ elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
        context.currentQueryTotal = elms.length;
        var /** @type {?} */ sameElementTimeline = null;
        elms.forEach(function (element, i) {
            context.currentQueryIndex = i;
            var /** @type {?} */ innerContext = context.createSubContext(ast.options, element);
            if (delay) {
                innerContext.delayNextStep(delay);
            }
            if (element === context.element) {
                sameElementTimeline = innerContext.currentTimeline;
            }
            visitDslNode(_this, ast.animation, innerContext);
            // this is here just incase the inner steps only contain or end
            // with a style() call (which is here to signal that this is a preparatory
            // call to style an element before it is animated again)
            innerContext.currentTimeline.applyStylesToKeyframe();
            var /** @type {?} */ endTime = innerContext.currentTimeline.currentTime;
            furthestTime = Math.max(furthestTime, endTime);
        });
        context.currentQueryIndex = 0;
        context.currentQueryTotal = 0;
        context.transformIntoNewTimeline(furthestTime);
        if (sameElementTimeline) {
            context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
            context.currentTimeline.snapshotCurrentStyles();
        }
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineBuilderVisitor.prototype.visitStagger = function (ast, context) {
        var /** @type {?} */ parentContext = ((context.parentContext));
        var /** @type {?} */ tl = context.currentTimeline;
        var /** @type {?} */ timings = ast.timings;
        var /** @type {?} */ duration = Math.abs(timings.duration);
        var /** @type {?} */ maxTime = duration * (context.currentQueryTotal - 1);
        var /** @type {?} */ delay = duration * context.currentQueryIndex;
        var /** @type {?} */ staggerTransformer = timings.duration < 0 ? 'reverse' : timings.easing;
        switch (staggerTransformer) {
            case 'reverse':
                delay = maxTime - delay;
                break;
            case 'full':
                delay = parentContext.currentStaggerTime;
                break;
        }
        var /** @type {?} */ timeline = context.currentTimeline;
        if (delay) {
            timeline.delayNextStep(delay);
        }
        var /** @type {?} */ startingTime = timeline.currentTime;
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
        // time = duration + delay
        // the reason why this computation is so complex is because
        // the inner timeline may either have a delay value or a stretched
        // keyframe depending on if a subtimeline is not used or is used.
        parentContext.currentStaggerTime =
            (tl.currentTime - startingTime) + (tl.startTime - parentContext.currentTimeline.startTime);
    };
    return AnimationTimelineBuilderVisitor;
}());
var DEFAULT_NOOP_PREVIOUS_NODE = ({});
var AnimationTimelineContext = (function () {
    /**
     * @param {?} _driver
     * @param {?} element
     * @param {?} subInstructions
     * @param {?} errors
     * @param {?} timelines
     * @param {?=} initialTimeline
     */
    function AnimationTimelineContext(_driver, element, subInstructions, errors, timelines, initialTimeline) {
        this._driver = _driver;
        this.element = element;
        this.subInstructions = subInstructions;
        this.errors = errors;
        this.timelines = timelines;
        this.parentContext = null;
        this.currentAnimateTimings = null;
        this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        this.subContextCount = 0;
        this.options = {};
        this.currentQueryIndex = 0;
        this.currentQueryTotal = 0;
        this.currentStaggerTime = 0;
        this.currentTimeline = initialTimeline || new TimelineBuilder(element, 0);
        timelines.push(this.currentTimeline);
    }
    Object.defineProperty(AnimationTimelineContext.prototype, "params", {
        /**
         * @return {?}
         */
        get: function () { return this.options.params; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} options
     * @param {?=} skipIfExists
     * @return {?}
     */
    AnimationTimelineContext.prototype.updateOptions = function (options, skipIfExists) {
        var _this = this;
        if (!options)
            return;
        var /** @type {?} */ newOptions = (options);
        var /** @type {?} */ optionsToUpdate = this.options;
        // NOTE: this will get patched up when other animation methods support duration overrides
        if (newOptions.duration != null) {
            ((optionsToUpdate)).duration = resolveTimingValue(newOptions.duration);
        }
        if (newOptions.delay != null) {
            optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
        }
        var /** @type {?} */ newParams = newOptions.params;
        if (newParams) {
            var /** @type {?} */ paramsToUpdate_1 = ((optionsToUpdate.params));
            if (!paramsToUpdate_1) {
                paramsToUpdate_1 = this.options.params = {};
            }
            Object.keys(newParams).forEach(function (name) {
                if (!skipIfExists || !paramsToUpdate_1.hasOwnProperty(name)) {
                    paramsToUpdate_1[name] = interpolateParams(newParams[name], paramsToUpdate_1, _this.errors);
                }
            });
        }
    };
    /**
     * @return {?}
     */
    AnimationTimelineContext.prototype._copyOptions = function () {
        var /** @type {?} */ options = {};
        if (this.options) {
            var /** @type {?} */ oldParams_1 = this.options.params;
            if (oldParams_1) {
                var /** @type {?} */ params_2 = options['params'] = {};
                Object.keys(oldParams_1).forEach(function (name) { params_2[name] = oldParams_1[name]; });
            }
        }
        return options;
    };
    /**
     * @param {?=} options
     * @param {?=} element
     * @param {?=} newTime
     * @return {?}
     */
    AnimationTimelineContext.prototype.createSubContext = function (options, element, newTime) {
        if (options === void 0) { options = null; }
        var /** @type {?} */ target = element || this.element;
        var /** @type {?} */ context = new AnimationTimelineContext(this._driver, target, this.subInstructions, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
        context.previousNode = this.previousNode;
        context.currentAnimateTimings = this.currentAnimateTimings;
        context.options = this._copyOptions();
        context.updateOptions(options);
        context.currentQueryIndex = this.currentQueryIndex;
        context.currentQueryTotal = this.currentQueryTotal;
        context.parentContext = this;
        this.subContextCount++;
        return context;
    };
    /**
     * @param {?=} newTime
     * @return {?}
     */
    AnimationTimelineContext.prototype.transformIntoNewTimeline = function (newTime) {
        this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
        this.timelines.push(this.currentTimeline);
        return this.currentTimeline;
    };
    /**
     * @param {?} instruction
     * @param {?} duration
     * @param {?} delay
     * @return {?}
     */
    AnimationTimelineContext.prototype.appendInstructionToTimeline = function (instruction, duration, delay) {
        var /** @type {?} */ updatedTimings = {
            duration: duration != null ? duration : instruction.duration,
            delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
            easing: ''
        };
        var /** @type {?} */ builder = new SubTimelineBuilder(instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
        this.timelines.push(builder);
        return updatedTimings;
    };
    /**
     * @param {?} time
     * @return {?}
     */
    AnimationTimelineContext.prototype.incrementTime = function (time) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
    };
    /**
     * @param {?} delay
     * @return {?}
     */
    AnimationTimelineContext.prototype.delayNextStep = function (delay) {
        // negative delays are not yet supported
        if (delay > 0) {
            this.currentTimeline.delayNextStep(delay);
        }
    };
    /**
     * @param {?} selector
     * @param {?} originalSelector
     * @param {?} limit
     * @param {?} includeSelf
     * @param {?} optional
     * @param {?} errors
     * @return {?}
     */
    AnimationTimelineContext.prototype.invokeQuery = function (selector, originalSelector, limit, includeSelf, optional, errors) {
        var /** @type {?} */ results = [];
        if (includeSelf) {
            results.push(this.element);
        }
        if (selector.length > 0) {
            var /** @type {?} */ multi = limit != 1;
            var /** @type {?} */ elements = this._driver.query(this.element, selector, multi);
            if (limit !== 0) {
                elements = elements.slice(0, limit);
            }
            results.push.apply(results, elements);
        }
        if (!optional && results.length == 0) {
            errors.push("`query(\"" + originalSelector + "\")` returned zero elements. (Use `query(\"" + originalSelector + "\", { optional: true })` if you wish to allow this.)");
        }
        return results;
    };
    return AnimationTimelineContext;
}());
var TimelineBuilder = (function () {
    /**
     * @param {?} element
     * @param {?} startTime
     * @param {?=} _elementTimelineStylesLookup
     */
    function TimelineBuilder(element, startTime, _elementTimelineStylesLookup) {
        this.element = element;
        this.startTime = startTime;
        this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
        this.duration = 0;
        this._previousKeyframe = {};
        this._currentKeyframe = {};
        this._keyframes = new Map();
        this._styleSummary = {};
        this._pendingStyles = {};
        this._backFill = {};
        this._currentEmptyStepKeyframe = null;
        if (!this._elementTimelineStylesLookup) {
            this._elementTimelineStylesLookup = new Map();
        }
        this._localTimelineStyles = Object.create(this._backFill, {});
        this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
        if (!this._globalTimelineStyles) {
            this._globalTimelineStyles = this._localTimelineStyles;
            this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
        }
        this._loadKeyframe();
    }
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.containsAnimation = function () {
        switch (this._keyframes.size) {
            case 0:
                return false;
            case 1:
                return this.getCurrentStyleProperties().length > 0;
            default:
                return true;
        }
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.getCurrentStyleProperties = function () { return Object.keys(this._currentKeyframe); };
    Object.defineProperty(TimelineBuilder.prototype, "currentTime", {
        /**
         * @return {?}
         */
        get: function () { return this.startTime + this.duration; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} delay
     * @return {?}
     */
    TimelineBuilder.prototype.delayNextStep = function (delay) {
        // in the event that a style() step is placed right before a stagger()
        // and that style() step is the very first style() value in the animation
        // then we need to make a copy of the keyframe [0, copy, 1] so that the delay
        // properly applies the style() values to work with the stagger...
        var /** @type {?} */ hasPreStyleStep = this._keyframes.size == 1 && Object.keys(this._pendingStyles).length;
        if (this.duration || hasPreStyleStep) {
            this.forwardTime(this.currentTime + delay);
            if (hasPreStyleStep) {
                this.snapshotCurrentStyles();
            }
        }
        else {
            this.startTime += delay;
        }
    };
    /**
     * @param {?} element
     * @param {?=} currentTime
     * @return {?}
     */
    TimelineBuilder.prototype.fork = function (element, currentTime) {
        this.applyStylesToKeyframe();
        return new TimelineBuilder(element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype._loadKeyframe = function () {
        if (this._currentKeyframe) {
            this._previousKeyframe = this._currentKeyframe;
        }
        this._currentKeyframe = ((this._keyframes.get(this.duration)));
        if (!this._currentKeyframe) {
            this._currentKeyframe = Object.create(this._backFill, {});
            this._keyframes.set(this.duration, this._currentKeyframe);
        }
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.forwardFrame = function () {
        this.duration += ONE_FRAME_IN_MILLISECONDS;
        this._loadKeyframe();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    TimelineBuilder.prototype.forwardTime = function (time) {
        this.applyStylesToKeyframe();
        this.duration = time;
        this._loadKeyframe();
    };
    /**
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    TimelineBuilder.prototype._updateStyle = function (prop, value) {
        this._localTimelineStyles[prop] = value;
        this._globalTimelineStyles[prop] = value;
        this._styleSummary[prop] = { time: this.currentTime, value: value };
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.allowOnlyTimelineStyles = function () { return this._currentEmptyStepKeyframe !== this._currentKeyframe; };
    /**
     * @param {?} easing
     * @return {?}
     */
    TimelineBuilder.prototype.applyEmptyStep = function (easing) {
        var _this = this;
        if (easing) {
            this._previousKeyframe['easing'] = easing;
        }
        // special case for animate(duration):
        // all missing styles are filled with a `*` value then
        // if any destination styles are filled in later on the same
        // keyframe then they will override the overridden styles
        // We use `_globalTimelineStyles` here because there may be
        // styles in previous keyframes that are not present in this timeline
        Object.keys(this._globalTimelineStyles).forEach(function (prop) {
            _this._backFill[prop] = _this._globalTimelineStyles[prop] || AUTO_STYLE;
            _this._currentKeyframe[prop] = AUTO_STYLE;
        });
        this._currentEmptyStepKeyframe = this._currentKeyframe;
    };
    /**
     * @param {?} input
     * @param {?} easing
     * @param {?} errors
     * @param {?=} options
     * @return {?}
     */
    TimelineBuilder.prototype.setStyles = function (input, easing, errors, options) {
        var _this = this;
        if (easing) {
            this._previousKeyframe['easing'] = easing;
        }
        var /** @type {?} */ params = (options && options.params) || {};
        var /** @type {?} */ styles = flattenStyles(input, this._globalTimelineStyles);
        Object.keys(styles).forEach(function (prop) {
            var /** @type {?} */ val = interpolateParams(styles[prop], params, errors);
            _this._pendingStyles[prop] = val;
            if (!_this._localTimelineStyles.hasOwnProperty(prop)) {
                _this._backFill[prop] = _this._globalTimelineStyles.hasOwnProperty(prop) ?
                    _this._globalTimelineStyles[prop] :
                    AUTO_STYLE;
            }
            _this._updateStyle(prop, val);
        });
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.applyStylesToKeyframe = function () {
        var _this = this;
        var /** @type {?} */ styles = this._pendingStyles;
        var /** @type {?} */ props = Object.keys(styles);
        if (props.length == 0)
            return;
        this._pendingStyles = {};
        props.forEach(function (prop) {
            var /** @type {?} */ val = styles[prop];
            _this._currentKeyframe[prop] = val;
        });
        Object.keys(this._localTimelineStyles).forEach(function (prop) {
            if (!_this._currentKeyframe.hasOwnProperty(prop)) {
                _this._currentKeyframe[prop] = _this._localTimelineStyles[prop];
            }
        });
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.snapshotCurrentStyles = function () {
        var _this = this;
        Object.keys(this._localTimelineStyles).forEach(function (prop) {
            var /** @type {?} */ val = _this._localTimelineStyles[prop];
            _this._pendingStyles[prop] = val;
            _this._updateStyle(prop, val);
        });
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.getFinalKeyframe = function () { return this._keyframes.get(this.duration); };
    Object.defineProperty(TimelineBuilder.prototype, "properties", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ properties = [];
            for (var /** @type {?} */ prop in this._currentKeyframe) {
                properties.push(prop);
            }
            return properties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} timeline
     * @return {?}
     */
    TimelineBuilder.prototype.mergeTimelineCollectedStyles = function (timeline) {
        var _this = this;
        Object.keys(timeline._styleSummary).forEach(function (prop) {
            var /** @type {?} */ details0 = _this._styleSummary[prop];
            var /** @type {?} */ details1 = timeline._styleSummary[prop];
            if (!details0 || details1.time > details0.time) {
                _this._updateStyle(prop, details1.value);
            }
        });
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.buildKeyframes = function () {
        var _this = this;
        this.applyStylesToKeyframe();
        var /** @type {?} */ preStyleProps = new Set();
        var /** @type {?} */ postStyleProps = new Set();
        var /** @type {?} */ isEmpty = this._keyframes.size === 1 && this.duration === 0;
        var /** @type {?} */ finalKeyframes = [];
        this._keyframes.forEach(function (keyframe, time) {
            var /** @type {?} */ finalKeyframe = copyStyles(keyframe, true);
            Object.keys(finalKeyframe).forEach(function (prop) {
                var /** @type {?} */ value = finalKeyframe[prop];
                if (value == ɵPRE_STYLE) {
                    preStyleProps.add(prop);
                }
                else if (value == AUTO_STYLE) {
                    postStyleProps.add(prop);
                }
            });
            if (!isEmpty) {
                finalKeyframe['offset'] = time / _this.duration;
            }
            finalKeyframes.push(finalKeyframe);
        });
        var /** @type {?} */ preProps = preStyleProps.size ? iteratorToArray(preStyleProps.values()) : [];
        var /** @type {?} */ postProps = postStyleProps.size ? iteratorToArray(postStyleProps.values()) : [];
        // special case for a 0-second animation (which is designed just to place styles onscreen)
        if (isEmpty) {
            var /** @type {?} */ kf0 = finalKeyframes[0];
            var /** @type {?} */ kf1 = copyObj(kf0);
            kf0['offset'] = 0;
            kf1['offset'] = 1;
            finalKeyframes = [kf0, kf1];
        }
        return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
    };
    return TimelineBuilder;
}());
var SubTimelineBuilder = (function (_super) {
    __extends(SubTimelineBuilder, _super);
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} preStyleProps
     * @param {?} postStyleProps
     * @param {?} timings
     * @param {?=} _stretchStartingKeyframe
     */
    function SubTimelineBuilder(element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe) {
        if (_stretchStartingKeyframe === void 0) { _stretchStartingKeyframe = false; }
        var _this = _super.call(this, element, timings.delay) || this;
        _this.element = element;
        _this.keyframes = keyframes;
        _this.preStyleProps = preStyleProps;
        _this.postStyleProps = postStyleProps;
        _this._stretchStartingKeyframe = _stretchStartingKeyframe;
        _this.timings = { duration: timings.duration, delay: timings.delay, easing: timings.easing };
        return _this;
    }
    /**
     * @return {?}
     */
    SubTimelineBuilder.prototype.containsAnimation = function () { return this.keyframes.length > 1; };
    /**
     * @return {?}
     */
    SubTimelineBuilder.prototype.buildKeyframes = function () {
        var /** @type {?} */ keyframes = this.keyframes;
        var _a = this.timings, delay = _a.delay, duration = _a.duration, easing = _a.easing;
        if (this._stretchStartingKeyframe && delay) {
            var /** @type {?} */ newKeyframes = [];
            var /** @type {?} */ totalTime = duration + delay;
            var /** @type {?} */ startingGap = delay / totalTime;
            // the original starting keyframe now starts once the delay is done
            var /** @type {?} */ newFirstKeyframe = copyStyles(keyframes[0], false);
            newFirstKeyframe['offset'] = 0;
            newKeyframes.push(newFirstKeyframe);
            var /** @type {?} */ oldFirstKeyframe = copyStyles(keyframes[0], false);
            oldFirstKeyframe['offset'] = roundOffset(startingGap);
            newKeyframes.push(oldFirstKeyframe);
            /*
              When the keyframe is stretched then it means that the delay before the animation
              starts is gone. Instead the first keyframe is placed at the start of the animation
              and it is then copied to where it starts when the original delay is over. This basically
              means nothing animates during that delay, but the styles are still renderered. For this
              to work the original offset values that exist in the original keyframes must be "warped"
              so that they can take the new keyframe + delay into account.
      
              delay=1000, duration=1000, keyframes = 0 .5 1
      
              turns into
      
              delay=0, duration=2000, keyframes = 0 .33 .66 1
             */
            // offsets between 1 ... n -1 are all warped by the keyframe stretch
            var /** @type {?} */ limit = keyframes.length - 1;
            for (var /** @type {?} */ i = 1; i <= limit; i++) {
                var /** @type {?} */ kf = copyStyles(keyframes[i], false);
                var /** @type {?} */ oldOffset = (kf['offset']);
                var /** @type {?} */ timeAtKeyframe = delay + oldOffset * duration;
                kf['offset'] = roundOffset(timeAtKeyframe / totalTime);
                newKeyframes.push(kf);
            }
            // the new starting keyframe should be added at the start
            duration = totalTime;
            delay = 0;
            easing = '';
            keyframes = newKeyframes;
        }
        return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
    };
    return SubTimelineBuilder;
}(TimelineBuilder));
/**
 * @param {?} offset
 * @param {?=} decimalPoints
 * @return {?}
 */
function roundOffset(offset, decimalPoints) {
    if (decimalPoints === void 0) { decimalPoints = 3; }
    var /** @type {?} */ mult = Math.pow(10, decimalPoints - 1);
    return Math.round(offset * mult) / mult;
}
/**
 * @param {?} input
 * @param {?} allStyles
 * @return {?}
 */
function flattenStyles(input, allStyles) {
    var /** @type {?} */ styles = {};
    var /** @type {?} */ allProperties;
    input.forEach(function (token) {
        if (token === '*') {
            allProperties = allProperties || Object.keys(allStyles);
            allProperties.forEach(function (prop) { styles[prop] = AUTO_STYLE; });
        }
        else {
            copyStyles(/** @type {?} */ (token), false, styles);
        }
    });
    return styles;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Animation = (function () {
    /**
     * @param {?} _driver
     * @param {?} input
     */
    function Animation(_driver, input) {
        this._driver = _driver;
        var errors = [];
        var ast = buildAnimationAst(input, errors);
        if (errors.length) {
            var errorMessage = "animation validation failed:\n" + errors.join("\n");
            throw new Error(errorMessage);
        }
        this._animationAst = ast;
    }
    /**
     * @param {?} element
     * @param {?} startingStyles
     * @param {?} destinationStyles
     * @param {?} options
     * @param {?=} subInstructions
     * @return {?}
     */
    Animation.prototype.buildTimelines = function (element, startingStyles, destinationStyles, options, subInstructions) {
        var /** @type {?} */ start = Array.isArray(startingStyles) ? normalizeStyles(startingStyles) : (startingStyles);
        var /** @type {?} */ dest = Array.isArray(destinationStyles) ? normalizeStyles(destinationStyles) : (destinationStyles);
        var /** @type {?} */ errors = [];
        subInstructions = subInstructions || new ElementInstructionMap();
        var /** @type {?} */ result = buildAnimationTimelines(this._driver, element, this._animationAst, start, dest, options, subInstructions, errors);
        if (errors.length) {
            var /** @type {?} */ errorMessage = "animation building failed:\n" + errors.join("\n");
            throw new Error(errorMessage);
        }
        return result;
    };
    return Animation;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @experimental Animation support is experimental.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ var AnimationStyleNormalizer = (function () {
    function AnimationStyleNormalizer() {
    }
    return AnimationStyleNormalizer;
}());
/**
 * @experimental Animation support is experimental.
 */
var NoopAnimationStyleNormalizer = (function () {
    function NoopAnimationStyleNormalizer() {
    }
    NoopAnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { return propertyName; };
    NoopAnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) {
        return value;
    };
    return NoopAnimationStyleNormalizer;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WebAnimationsStyleNormalizer = (function (_super) {
    __extends(WebAnimationsStyleNormalizer, _super);
    function WebAnimationsStyleNormalizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    WebAnimationsStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) {
        return dashCaseToCamelCase(propertyName);
    };
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    WebAnimationsStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) {
        var /** @type {?} */ unit = '';
        var /** @type {?} */ strVal = value.toString().trim();
        if (DIMENSIONAL_PROP_MAP[normalizedProperty] && value !== 0 && value !== '0') {
            if (typeof value === 'number') {
                unit = 'px';
            }
            else {
                var /** @type {?} */ valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
                if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
                    errors.push("Please provide a CSS unit value for " + userProvidedProperty + ":" + value);
                }
            }
        }
        return strVal + unit;
    };
    return WebAnimationsStyleNormalizer;
}(AnimationStyleNormalizer));
var DIMENSIONAL_PROP_MAP = makeBooleanMap('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'
    .split(','));
/**
 * @param {?} keys
 * @return {?}
 */
function makeBooleanMap(keys) {
    var /** @type {?} */ map = {};
    keys.forEach(function (key) { return map[key] = true; });
    return map;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} isRemovalTransition
 * @param {?} fromStyles
 * @param {?} toStyles
 * @param {?} timelines
 * @param {?} queriedElements
 * @param {?} preStyleProps
 * @param {?} postStyleProps
 * @param {?=} errors
 * @return {?}
 */
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, errors) {
    return {
        type: 0 /* TransitionAnimation */,
        element: element,
        triggerName: triggerName,
        isRemovalTransition: isRemovalTransition,
        fromState: fromState,
        fromStyles: fromStyles,
        toState: toState,
        toStyles: toStyles,
        timelines: timelines,
        queriedElements: queriedElements,
        preStyleProps: preStyleProps,
        postStyleProps: postStyleProps,
        errors: errors
    };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = (function () {
    /**
     * @param {?} _triggerName
     * @param {?} ast
     * @param {?} _stateStyles
     */
    function AnimationTransitionFactory(_triggerName, ast, _stateStyles) {
        this._triggerName = _triggerName;
        this.ast = ast;
        this._stateStyles = _stateStyles;
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    AnimationTransitionFactory.prototype.match = function (currentState, nextState) {
        return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState);
    };
    /**
     * @param {?} stateName
     * @param {?} params
     * @param {?} errors
     * @return {?}
     */
    AnimationTransitionFactory.prototype.buildStyles = function (stateName, params, errors) {
        var /** @type {?} */ backupStateStyler = this._stateStyles['*'];
        var /** @type {?} */ stateStyler = this._stateStyles[stateName];
        var /** @type {?} */ backupStyles = backupStateStyler ? backupStateStyler.buildStyles(params, errors) : {};
        return stateStyler ? stateStyler.buildStyles(params, errors) : backupStyles;
    };
    /**
     * @param {?} driver
     * @param {?} element
     * @param {?} currentState
     * @param {?} nextState
     * @param {?=} currentOptions
     * @param {?=} nextOptions
     * @param {?=} subInstructions
     * @return {?}
     */
    AnimationTransitionFactory.prototype.build = function (driver, element, currentState, nextState, currentOptions, nextOptions, subInstructions) {
        var /** @type {?} */ errors = [];
        var /** @type {?} */ transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
        var /** @type {?} */ currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
        var /** @type {?} */ currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
        var /** @type {?} */ nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
        var /** @type {?} */ nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
        var /** @type {?} */ queriedElements = new Set();
        var /** @type {?} */ preStyleMap = new Map();
        var /** @type {?} */ postStyleMap = new Map();
        var /** @type {?} */ isRemoval = nextState === 'void';
        var /** @type {?} */ animationOptions = { params: Object.assign({}, transitionAnimationParams, nextAnimationParams) };
        var /** @type {?} */ timelines = buildAnimationTimelines(driver, element, this.ast.animation, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
        if (errors.length) {
            return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, errors);
        }
        timelines.forEach(function (tl) {
            var /** @type {?} */ elm = tl.element;
            var /** @type {?} */ preProps = getOrSetAsInMap(preStyleMap, elm, {});
            tl.preStyleProps.forEach(function (prop) { return preProps[prop] = true; });
            var /** @type {?} */ postProps = getOrSetAsInMap(postStyleMap, elm, {});
            tl.postStyleProps.forEach(function (prop) { return postProps[prop] = true; });
            if (elm !== element) {
                queriedElements.add(elm);
            }
        });
        var /** @type {?} */ queriedElementsList = iteratorToArray(queriedElements.values());
        return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, queriedElementsList, preStyleMap, postStyleMap);
    };
    return AnimationTransitionFactory;
}());
/**
 * @param {?} matchFns
 * @param {?} currentState
 * @param {?} nextState
 * @return {?}
 */
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState) {
    return matchFns.some(function (fn) { return fn(currentState, nextState); });
}
var AnimationStateStyles = (function () {
    /**
     * @param {?} styles
     * @param {?} defaultParams
     */
    function AnimationStateStyles(styles, defaultParams) {
        this.styles = styles;
        this.defaultParams = defaultParams;
    }
    /**
     * @param {?} params
     * @param {?} errors
     * @return {?}
     */
    AnimationStateStyles.prototype.buildStyles = function (params, errors) {
        var /** @type {?} */ finalStyles = {};
        var /** @type {?} */ combinedParams = copyObj(this.defaultParams);
        Object.keys(params).forEach(function (key) {
            var /** @type {?} */ value = params[key];
            if (value != null) {
                combinedParams[key] = value;
            }
        });
        this.styles.styles.forEach(function (value) {
            if (typeof value !== 'string') {
                var /** @type {?} */ styleObj_1 = (value);
                Object.keys(styleObj_1).forEach(function (prop) {
                    var /** @type {?} */ val = styleObj_1[prop];
                    if (val.length > 1) {
                        val = interpolateParams(val, combinedParams, errors);
                    }
                    finalStyles[prop] = val;
                });
            }
        });
        return finalStyles;
    };
    return AnimationStateStyles;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental Animation support is experimental.
 * @param {?} name
 * @param {?} ast
 * @return {?}
 */
function buildTrigger(name, ast) {
    return new AnimationTrigger(name, ast);
}
/**
 * \@experimental Animation support is experimental.
 */
var AnimationTrigger = (function () {
    /**
     * @param {?} name
     * @param {?} ast
     */
    function AnimationTrigger(name, ast) {
        var _this = this;
        this.name = name;
        this.ast = ast;
        this.transitionFactories = [];
        this.states = {};
        ast.states.forEach(function (ast) {
            var defaultParams = (ast.options && ast.options.params) || {};
            _this.states[ast.name] = new AnimationStateStyles(ast.style, defaultParams);
        });
        balanceProperties(this.states, 'true', '1');
        balanceProperties(this.states, 'false', '0');
        ast.transitions.forEach(function (ast) {
            _this.transitionFactories.push(new AnimationTransitionFactory(name, ast, _this.states));
        });
        this.fallbackTransition = createFallbackTransition(name, this.states);
    }
    Object.defineProperty(AnimationTrigger.prototype, "containsQueries", {
        /**
         * @return {?}
         */
        get: function () { return this.ast.queryCount > 0; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    AnimationTrigger.prototype.matchTransition = function (currentState, nextState) {
        var /** @type {?} */ entry = this.transitionFactories.find(function (f) { return f.match(currentState, nextState); });
        return entry || null;
    };
    /**
     * @param {?} currentState
     * @param {?} params
     * @param {?} errors
     * @return {?}
     */
    AnimationTrigger.prototype.matchStyles = function (currentState, params, errors) {
        return this.fallbackTransition.buildStyles(currentState, params, errors);
    };
    return AnimationTrigger;
}());
/**
 * @param {?} triggerName
 * @param {?} states
 * @return {?}
 */
function createFallbackTransition(triggerName, states) {
    var /** @type {?} */ matchers = [function (fromState, toState) { return true; }];
    var /** @type {?} */ animation = { type: 2 /* Sequence */, steps: [], options: null };
    var /** @type {?} */ transition$$1 = {
        type: 1 /* Transition */,
        animation: animation,
        matchers: matchers,
        options: null,
        queryCount: 0,
        depCount: 0
    };
    return new AnimationTransitionFactory(triggerName, transition$$1, states);
}
/**
 * @param {?} obj
 * @param {?} key1
 * @param {?} key2
 * @return {?}
 */
function balanceProperties(obj, key1, key2) {
    if (obj.hasOwnProperty(key1)) {
        if (!obj.hasOwnProperty(key2)) {
            obj[key2] = obj[key1];
        }
    }
    else if (obj.hasOwnProperty(key2)) {
        obj[key1] = obj[key2];
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
var TimelineAnimationEngine = (function () {
    /**
     * @param {?} _driver
     * @param {?} _normalizer
     */
    function TimelineAnimationEngine(_driver, _normalizer) {
        this._driver = _driver;
        this._normalizer = _normalizer;
        this._animations = {};
        this._playersById = {};
        this.players = [];
    }
    /**
     * @param {?} id
     * @param {?} metadata
     * @return {?}
     */
    TimelineAnimationEngine.prototype.register = function (id, metadata) {
        var /** @type {?} */ errors = [];
        var /** @type {?} */ ast = buildAnimationAst(metadata, errors);
        if (errors.length) {
            throw new Error("Unable to build the animation due to the following errors: " + errors.join("\n"));
        }
        else {
            this._animations[id] = ast;
        }
    };
    /**
     * @param {?} i
     * @param {?} preStyles
     * @param {?=} postStyles
     * @return {?}
     */
    TimelineAnimationEngine.prototype._buildPlayer = function (i, preStyles, postStyles) {
        var /** @type {?} */ element = i.element;
        var /** @type {?} */ keyframes = normalizeKeyframes(this._driver, this._normalizer, element, i.keyframes, preStyles, postStyles);
        return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, []);
    };
    /**
     * @param {?} id
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    TimelineAnimationEngine.prototype.create = function (id, element, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var /** @type {?} */ errors = [];
        var /** @type {?} */ ast = this._animations[id];
        var /** @type {?} */ instructions;
        var /** @type {?} */ autoStylesMap = new Map();
        if (ast) {
            instructions = buildAnimationTimelines(this._driver, element, ast, {}, {}, options, EMPTY_INSTRUCTION_MAP, errors);
            instructions.forEach(function (inst) {
                var /** @type {?} */ styles = getOrSetAsInMap(autoStylesMap, inst.element, {});
                inst.postStyleProps.forEach(function (prop) { return styles[prop] = null; });
            });
        }
        else {
            errors.push('The requested animation doesn\'t exist or has already been destroyed');
            instructions = [];
        }
        if (errors.length) {
            throw new Error("Unable to create the animation due to the following errors: " + errors.join("\n"));
        }
        autoStylesMap.forEach(function (styles, element) {
            Object.keys(styles).forEach(function (prop) { styles[prop] = _this._driver.computeStyle(element, prop, AUTO_STYLE); });
        });
        var /** @type {?} */ players = instructions.map(function (i) {
            var /** @type {?} */ styles = autoStylesMap.get(i.element);
            return _this._buildPlayer(i, {}, styles);
        });
        var /** @type {?} */ player = optimizeGroupPlayer(players);
        this._playersById[id] = player;
        player.onDestroy(function () { return _this.destroy(id); });
        this.players.push(player);
        return player;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TimelineAnimationEngine.prototype.destroy = function (id) {
        var /** @type {?} */ player = this._getPlayer(id);
        player.destroy();
        delete this._playersById[id];
        var /** @type {?} */ index = this.players.indexOf(player);
        if (index >= 0) {
            this.players.splice(index, 1);
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TimelineAnimationEngine.prototype._getPlayer = function (id) {
        var /** @type {?} */ player = this._playersById[id];
        if (!player) {
            throw new Error("Unable to find the timeline player referenced by " + id);
        }
        return player;
    };
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    TimelineAnimationEngine.prototype.listen = function (id, element, eventName, callback) {
        // triggerName, fromState, toState are all ignored for timeline animations
        var /** @type {?} */ baseEvent = makeAnimationEvent(element, '', '', '');
        listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
        return function () { };
    };
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} command
     * @param {?} args
     * @return {?}
     */
    TimelineAnimationEngine.prototype.command = function (id, element, command, args) {
        if (command == 'register') {
            this.register(id, /** @type {?} */ (args[0]));
            return;
        }
        if (command == 'create') {
            var /** @type {?} */ options = ((args[0] || {}));
            this.create(id, element, options);
            return;
        }
        var /** @type {?} */ player = this._getPlayer(id);
        switch (command) {
            case 'play':
                player.play();
                break;
            case 'pause':
                player.pause();
                break;
            case 'reset':
                player.reset();
                break;
            case 'restart':
                player.restart();
                break;
            case 'finish':
                player.finish();
                break;
            case 'init':
                player.init();
                break;
            case 'setPosition':
                player.setPosition(parseFloat(/** @type {?} */ (args[0])));
                break;
            case 'destroy':
                this.destroy(id);
                break;
        }
    };
    return TimelineAnimationEngine;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var QUEUED_CLASSNAME = 'ng-animate-queued';
var QUEUED_SELECTOR = '.ng-animate-queued';
var DISABLED_CLASSNAME = 'ng-animate-disabled';
var DISABLED_SELECTOR = '.ng-animate-disabled';
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
    namespaceId: '',
    setForRemoval: null,
    hasAnimation: false,
    removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
    namespaceId: '',
    setForRemoval: null,
    hasAnimation: false,
    removedBeforeQueried: true
};
var REMOVAL_FLAG = '__ng_removed';
var StateValue = (function () {
    /**
     * @param {?} input
     */
    function StateValue(input) {
        var isObj = input && input.hasOwnProperty('value');
        var value = isObj ? input['value'] : input;
        this.value = normalizeTriggerValue(value);
        if (isObj) {
            var options = copyObj(input);
            delete options['value'];
            this.options = options;
        }
        else {
            this.options = {};
        }
        if (!this.options.params) {
            this.options.params = {};
        }
    }
    Object.defineProperty(StateValue.prototype, "params", {
        /**
         * @return {?}
         */
        get: function () { return (this.options.params); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} options
     * @return {?}
     */
    StateValue.prototype.absorbOptions = function (options) {
        var /** @type {?} */ newParams = options.params;
        if (newParams) {
            var /** @type {?} */ oldParams_2 = ((this.options.params));
            Object.keys(newParams).forEach(function (prop) {
                if (oldParams_2[prop] == null) {
                    oldParams_2[prop] = newParams[prop];
                }
            });
        }
    };
    return StateValue;
}());
var VOID_VALUE = 'void';
var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var DELETED_STATE_VALUE = new StateValue('DELETED');
var AnimationTransitionNamespace = (function () {
    /**
     * @param {?} id
     * @param {?} hostElement
     * @param {?} _engine
     */
    function AnimationTransitionNamespace(id, hostElement, _engine) {
        this.id = id;
        this.hostElement = hostElement;
        this._engine = _engine;
        this.players = [];
        this._triggers = {};
        this._queue = [];
        this._elementListeners = new Map();
        this._hostClassName = 'ng-tns-' + id;
        addClass(hostElement, this._hostClassName);
    }
    /**
     * @param {?} element
     * @param {?} name
     * @param {?} phase
     * @param {?} callback
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.listen = function (element, name, phase, callback) {
        var _this = this;
        if (!this._triggers.hasOwnProperty(name)) {
            throw new Error("Unable to listen on the animation trigger event \"" + phase + "\" because the animation trigger \"" + name + "\" doesn't exist!");
        }
        if (phase == null || phase.length == 0) {
            throw new Error("Unable to listen on the animation trigger \"" + name + "\" because the provided event is undefined!");
        }
        if (!isTriggerEventValid(phase)) {
            throw new Error("The provided animation trigger event \"" + phase + "\" for the animation trigger \"" + name + "\" is not supported!");
        }
        var /** @type {?} */ listeners = getOrSetAsInMap(this._elementListeners, element, []);
        var /** @type {?} */ data = { name: name, phase: phase, callback: callback };
        listeners.push(data);
        var /** @type {?} */ triggersWithStates = getOrSetAsInMap(this._engine.statesByElement, element, {});
        if (!triggersWithStates.hasOwnProperty(name)) {
            addClass(element, NG_TRIGGER_CLASSNAME);
            addClass(element, NG_TRIGGER_CLASSNAME + '-' + name);
            triggersWithStates[name] = null;
        }
        return function () {
            // the event listener is removed AFTER the flush has occurred such
            // that leave animations callbacks can fire (otherwise if the node
            // is removed in between then the listeners would be deregistered)
            _this._engine.afterFlush(function () {
                var /** @type {?} */ index = listeners.indexOf(data);
                if (index >= 0) {
                    listeners.splice(index, 1);
                }
                if (!_this._triggers[name]) {
                    delete triggersWithStates[name];
                }
            });
        };
    };
    /**
     * @param {?} name
     * @param {?} ast
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.register = function (name, ast) {
        if (this._triggers[name]) {
            // throw
            return false;
        }
        else {
            this._triggers[name] = ast;
            return true;
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    AnimationTransitionNamespace.prototype._getTrigger = function (name) {
        var /** @type {?} */ trigger$$1 = this._triggers[name];
        if (!trigger$$1) {
            throw new Error("The provided animation trigger \"" + name + "\" has not been registered!");
        }
        return trigger$$1;
    };
    /**
     * @param {?} element
     * @param {?} triggerName
     * @param {?} value
     * @param {?=} defaultToFallback
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.trigger = function (element, triggerName, value, defaultToFallback) {
        var _this = this;
        if (defaultToFallback === void 0) { defaultToFallback = true; }
        var /** @type {?} */ trigger$$1 = this._getTrigger(triggerName);
        var /** @type {?} */ player = new TransitionAnimationPlayer(this.id, triggerName, element);
        var /** @type {?} */ triggersWithStates = this._engine.statesByElement.get(element);
        if (!triggersWithStates) {
            addClass(element, NG_TRIGGER_CLASSNAME);
            addClass(element, NG_TRIGGER_CLASSNAME + '-' + triggerName);
            this._engine.statesByElement.set(element, triggersWithStates = {});
        }
        var /** @type {?} */ fromState = triggersWithStates[triggerName];
        var /** @type {?} */ toState = new StateValue(value);
        var /** @type {?} */ isObj = value && value.hasOwnProperty('value');
        if (!isObj && fromState) {
            toState.absorbOptions(fromState.options);
        }
        triggersWithStates[triggerName] = toState;
        if (!fromState) {
            fromState = DEFAULT_STATE_VALUE;
        }
        else if (fromState === DELETED_STATE_VALUE) {
            return player;
        }
        var /** @type {?} */ isRemoval = toState.value === VOID_VALUE;
        // normally this isn't reached by here, however, if an object expression
        // is passed in then it may be a new object each time. Comparing the value
        // is important since that will stay the same despite there being a new object.
        // The removal arc here is special cased because the same element is triggered
        // twice in the event that it contains animations on the outer/inner portions
        // of the host container
        if (!isRemoval && fromState.value === toState.value) {
            // this means that despite the value not changing, some inner params
            // have changed which means that the animation final styles need to be applied
            if (!objEquals(fromState.params, toState.params)) {
                var /** @type {?} */ errors = [];
                var /** @type {?} */ fromStyles_1 = trigger$$1.matchStyles(fromState.value, fromState.params, errors);
                var /** @type {?} */ toStyles_1 = trigger$$1.matchStyles(toState.value, toState.params, errors);
                if (errors.length) {
                    this._engine.reportError(errors);
                }
                else {
                    this._engine.afterFlush(function () {
                        eraseStyles(element, fromStyles_1);
                        setStyles(element, toStyles_1);
                    });
                }
            }
            return;
        }
        var /** @type {?} */ playersOnElement = getOrSetAsInMap(this._engine.playersByElement, element, []);
        playersOnElement.forEach(function (player) {
            // only remove the player if it is queued on the EXACT same trigger/namespace
            // we only also deal with queued players here because if the animation has
            // started then we want to keep the player alive until the flush happens
            // (which is where the previousPlayers are passed into the new palyer)
            if (player.namespaceId == _this.id && player.triggerName == triggerName && player.queued) {
                player.destroy();
            }
        });
        var /** @type {?} */ transition$$1 = trigger$$1.matchTransition(fromState.value, toState.value);
        var /** @type {?} */ isFallbackTransition = false;
        if (!transition$$1) {
            if (!defaultToFallback)
                return;
            transition$$1 = trigger$$1.fallbackTransition;
            isFallbackTransition = true;
        }
        this._engine.totalQueuedPlayers++;
        this._queue.push({ element: element, triggerName: triggerName, transition: transition$$1, fromState: fromState, toState: toState, player: player, isFallbackTransition: isFallbackTransition });
        if (!isFallbackTransition) {
            addClass(element, QUEUED_CLASSNAME);
            player.onStart(function () { removeClass(element, QUEUED_CLASSNAME); });
        }
        player.onDone(function () {
            var /** @type {?} */ index = _this.players.indexOf(player);
            if (index >= 0) {
                _this.players.splice(index, 1);
            }
            var /** @type {?} */ players = _this._engine.playersByElement.get(element);
            if (players) {
                var /** @type {?} */ index_1 = players.indexOf(player);
                if (index_1 >= 0) {
                    players.splice(index_1, 1);
                }
            }
        });
        this.players.push(player);
        playersOnElement.push(player);
        return player;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.deregister = function (name) {
        var _this = this;
        delete this._triggers[name];
        this._engine.statesByElement.forEach(function (stateMap, element) { delete stateMap[name]; });
        this._elementListeners.forEach(function (listeners, element) {
            _this._elementListeners.set(element, listeners.filter(function (entry) { return entry.name != name; }));
        });
    };
    /**
     * @param {?} element
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.clearElementCache = function (element) {
        this._engine.statesByElement.delete(element);
        this._elementListeners.delete(element);
        var /** @type {?} */ elementPlayers = this._engine.playersByElement.get(element);
        if (elementPlayers) {
            elementPlayers.forEach(function (player) { return player.destroy(); });
            this._engine.playersByElement.delete(element);
        }
    };
    /**
     * @param {?} rootElement
     * @param {?} context
     * @param {?=} animate
     * @return {?}
     */
    AnimationTransitionNamespace.prototype._destroyInnerNodes = function (rootElement, context, animate$$1) {
        var _this = this;
        if (animate$$1 === void 0) { animate$$1 = false; }
        this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true).forEach(function (elm) {
            if (animate$$1 && containsClass(elm, _this._hostClassName)) {
                var /** @type {?} */ innerNs = _this._engine.namespacesByHostElement.get(elm);
                // special case for a host element with animations on the same element
                if (innerNs) {
                    innerNs.removeNode(elm, context, true);
                }
                _this.removeNode(elm, context, true);
            }
            else {
                _this.clearElementCache(elm);
            }
        });
    };
    /**
     * @param {?} element
     * @param {?} context
     * @param {?=} doNotRecurse
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.removeNode = function (element, context, doNotRecurse) {
        var _this = this;
        var /** @type {?} */ engine = this._engine;
        if (!doNotRecurse && element.childElementCount) {
            this._destroyInnerNodes(element, context, true);
        }
        var /** @type {?} */ triggerStates = engine.statesByElement.get(element);
        if (triggerStates) {
            var /** @type {?} */ players_1 = [];
            Object.keys(triggerStates).forEach(function (triggerName) {
                // this check is here in the event that an element is removed
                // twice (both on the host level and the component level)
                if (_this._triggers[triggerName]) {
                    var /** @type {?} */ player = _this.trigger(element, triggerName, VOID_VALUE, false);
                    if (player) {
                        players_1.push(player);
                    }
                }
            });
            if (players_1.length) {
                engine.markElementAsRemoved(this.id, element, true, context);
                optimizeGroupPlayer(players_1).onDone(function () { return engine.processLeaveNode(element); });
                return;
            }
        }
        // find the player that is animating and make sure that the
        // removal is delayed until that player has completed
        var /** @type {?} */ containsPotentialParentTransition = false;
        if (engine.totalAnimations) {
            var /** @type {?} */ currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
            // when this `if statement` does not continue forward it means that
            // a previous animation query has selected the current element and
            // is animating it. In this situation want to continue fowards and
            // allow the element to be queued up for animation later.
            if (currentPlayers && currentPlayers.length) {
                containsPotentialParentTransition = true;
            }
            else {
                var /** @type {?} */ parent = element;
                while (parent = parent.parentNode) {
                    var /** @type {?} */ triggers = engine.statesByElement.get(parent);
                    if (triggers) {
                        containsPotentialParentTransition = true;
                        break;
                    }
                }
            }
        }
        // at this stage we know that the element will either get removed
        // during flush or will be picked up by a parent query. Either way
        // we need to fire the listeners for this element when it DOES get
        // removed (once the query parent animation is done or after flush)
        var /** @type {?} */ listeners = this._elementListeners.get(element);
        if (listeners) {
            var /** @type {?} */ visitedTriggers_1 = new Set();
            listeners.forEach(function (listener) {
                var /** @type {?} */ triggerName = listener.name;
                if (visitedTriggers_1.has(triggerName))
                    return;
                visitedTriggers_1.add(triggerName);
                var /** @type {?} */ trigger$$1 = _this._triggers[triggerName];
                var /** @type {?} */ transition$$1 = trigger$$1.fallbackTransition;
                var /** @type {?} */ elementStates = ((engine.statesByElement.get(element)));
                var /** @type {?} */ fromState = elementStates[triggerName] || DEFAULT_STATE_VALUE;
                var /** @type {?} */ toState = new StateValue(VOID_VALUE);
                var /** @type {?} */ player = new TransitionAnimationPlayer(_this.id, triggerName, element);
                _this._engine.totalQueuedPlayers++;
                _this._queue.push({
                    element: element,
                    triggerName: triggerName,
                    transition: transition$$1,
                    fromState: fromState,
                    toState: toState,
                    player: player,
                    isFallbackTransition: true
                });
            });
        }
        // whether or not a parent has an animation we need to delay the deferral of the leave
        // operation until we have more information (which we do after flush() has been called)
        if (containsPotentialParentTransition) {
            engine.markElementAsRemoved(this.id, element, false, context);
        }
        else {
            // we do this after the flush has occurred such
            // that the callbacks can be fired
            engine.afterFlush(function () { return _this.clearElementCache(element); });
            engine.destroyInnerAnimations(element);
            engine._onRemovalComplete(element, context);
        }
    };
    /**
     * @param {?} element
     * @param {?} parent
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.insertNode = function (element, parent) { addClass(element, this._hostClassName); };
    /**
     * @param {?} microtaskId
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.drainQueuedTransitions = function (microtaskId) {
        var _this = this;
        var /** @type {?} */ instructions = [];
        this._queue.forEach(function (entry) {
            var /** @type {?} */ player = entry.player;
            if (player.destroyed)
                return;
            var /** @type {?} */ element = entry.element;
            var /** @type {?} */ listeners = _this._elementListeners.get(element);
            if (listeners) {
                listeners.forEach(function (listener) {
                    if (listener.name == entry.triggerName) {
                        var /** @type {?} */ baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
                        ((baseEvent))['_data'] = microtaskId;
                        listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
                    }
                });
            }
            if (player.markedForDestroy) {
                _this._engine.afterFlush(function () {
                    // now we can destroy the element properly since the event listeners have
                    // been bound to the player
                    player.destroy();
                });
            }
            else {
                instructions.push(entry);
            }
        });
        this._queue = [];
        return instructions.sort(function (a, b) {
            // if depCount == 0 them move to front
            // otherwise if a contains b then move back
            var /** @type {?} */ d0 = a.transition.ast.depCount;
            var /** @type {?} */ d1 = b.transition.ast.depCount;
            if (d0 == 0 || d1 == 0) {
                return d0 - d1;
            }
            return _this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
        });
    };
    /**
     * @param {?} context
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.destroy = function (context) {
        this.players.forEach(function (p) { return p.destroy(); });
        this._destroyInnerNodes(this.hostElement, context);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    AnimationTransitionNamespace.prototype.elementContainsData = function (element) {
        var /** @type {?} */ containsData = false;
        if (this._elementListeners.has(element))
            containsData = true;
        containsData =
            (this._queue.find(function (entry) { return entry.element === element; }) ? true : false) || containsData;
        return containsData;
    };
    return AnimationTransitionNamespace;
}());
var TransitionAnimationEngine = (function () {
    /**
     * @param {?} driver
     * @param {?} _normalizer
     */
    function TransitionAnimationEngine(driver, _normalizer) {
        this.driver = driver;
        this._normalizer = _normalizer;
        this.players = [];
        this.newHostElements = new Map();
        this.playersByElement = new Map();
        this.playersByQueriedElement = new Map();
        this.statesByElement = new Map();
        this.disabledNodes = new Set();
        this.totalAnimations = 0;
        this.totalQueuedPlayers = 0;
        this._namespaceLookup = {};
        this._namespaceList = [];
        this._flushFns = [];
        this._whenQuietFns = [];
        this.namespacesByHostElement = new Map();
        this.collectedEnterElements = [];
        this.collectedLeaveElements = [];
        this.onRemovalComplete = function (element, context) { };
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    TransitionAnimationEngine.prototype._onRemovalComplete = function (element, context) { this.onRemovalComplete(element, context); };
    Object.defineProperty(TransitionAnimationEngine.prototype, "queuedPlayers", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ players = [];
            this._namespaceList.forEach(function (ns) {
                ns.players.forEach(function (player) {
                    if (player.queued) {
                        players.push(player);
                    }
                });
            });
            return players;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} namespaceId
     * @param {?} hostElement
     * @return {?}
     */
    TransitionAnimationEngine.prototype.createNamespace = function (namespaceId, hostElement) {
        var /** @type {?} */ ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
        if (hostElement.parentNode) {
            this._balanceNamespaceList(ns, hostElement);
        }
        else {
            // defer this later until flush during when the host element has
            // been inserted so that we know exactly where to place it in
            // the namespace list
            this.newHostElements.set(hostElement, ns);
            // given that this host element is apart of the animation code, it
            // may or may not be inserted by a parent node that is an of an
            // animation renderer type. If this happens then we can still have
            // access to this item when we query for :enter nodes. If the parent
            // is a renderer then the set data-structure will normalize the entry
            this.collectEnterElement(hostElement);
        }
        return this._namespaceLookup[namespaceId] = ns;
    };
    /**
     * @param {?} ns
     * @param {?} hostElement
     * @return {?}
     */
    TransitionAnimationEngine.prototype._balanceNamespaceList = function (ns, hostElement) {
        var /** @type {?} */ limit = this._namespaceList.length - 1;
        if (limit >= 0) {
            var /** @type {?} */ found = false;
            for (var /** @type {?} */ i = limit; i >= 0; i--) {
                var /** @type {?} */ nextNamespace = this._namespaceList[i];
                if (this.driver.containsElement(nextNamespace.hostElement, hostElement)) {
                    this._namespaceList.splice(i + 1, 0, ns);
                    found = true;
                    break;
                }
            }
            if (!found) {
                this._namespaceList.splice(0, 0, ns);
            }
        }
        else {
            this._namespaceList.push(ns);
        }
        this.namespacesByHostElement.set(hostElement, ns);
        return ns;
    };
    /**
     * @param {?} namespaceId
     * @param {?} hostElement
     * @return {?}
     */
    TransitionAnimationEngine.prototype.register = function (namespaceId, hostElement) {
        var /** @type {?} */ ns = this._namespaceLookup[namespaceId];
        if (!ns) {
            ns = this.createNamespace(namespaceId, hostElement);
        }
        return ns;
    };
    /**
     * @param {?} namespaceId
     * @param {?} name
     * @param {?} trigger
     * @return {?}
     */
    TransitionAnimationEngine.prototype.registerTrigger = function (namespaceId, name, trigger$$1) {
        var /** @type {?} */ ns = this._namespaceLookup[namespaceId];
        if (ns && ns.register(name, trigger$$1)) {
            this.totalAnimations++;
        }
    };
    /**
     * @param {?} namespaceId
     * @param {?} context
     * @return {?}
     */
    TransitionAnimationEngine.prototype.destroy = function (namespaceId, context) {
        var _this = this;
        if (!namespaceId)
            return;
        var /** @type {?} */ ns = this._fetchNamespace(namespaceId);
        this.afterFlush(function () {
            _this.namespacesByHostElement.delete(ns.hostElement);
            delete _this._namespaceLookup[namespaceId];
            var /** @type {?} */ index = _this._namespaceList.indexOf(ns);
            if (index >= 0) {
                _this._namespaceList.splice(index, 1);
            }
        });
        this.afterFlushAnimationsDone(function () { return ns.destroy(context); });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TransitionAnimationEngine.prototype._fetchNamespace = function (id) { return this._namespaceLookup[id]; };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    TransitionAnimationEngine.prototype.trigger = function (namespaceId, element, name, value) {
        if (isElementNode(element)) {
            this._fetchNamespace(namespaceId).trigger(element, name, value);
            return true;
        }
        return false;
    };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} parent
     * @param {?} insertBefore
     * @return {?}
     */
    TransitionAnimationEngine.prototype.insertNode = function (namespaceId, element, parent, insertBefore) {
        if (!isElementNode(element))
            return;
        // special case for when an element is removed and reinserted (move operation)
        // when this occurs we do not want to use the element for deletion later
        var /** @type {?} */ details = (element[REMOVAL_FLAG]);
        if (details && details.setForRemoval) {
            details.setForRemoval = false;
        }
        // in the event that the namespaceId is blank then the caller
        // code does not contain any animation code in it, but it is
        // just being called so that the node is marked as being inserted
        if (namespaceId) {
            this._fetchNamespace(namespaceId).insertNode(element, parent);
        }
        // only *directives and host elements are inserted before
        if (insertBefore) {
            this.collectEnterElement(element);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    TransitionAnimationEngine.prototype.collectEnterElement = function (element) { this.collectedEnterElements.push(element); };
    /**
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    TransitionAnimationEngine.prototype.markElementAsDisabled = function (element, value) {
        if (value) {
            if (!this.disabledNodes.has(element)) {
                this.disabledNodes.add(element);
                addClass(element, DISABLED_CLASSNAME);
            }
        }
        else if (this.disabledNodes.has(element)) {
            this.disabledNodes.delete(element);
            removeClass(element, DISABLED_CLASSNAME);
        }
    };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} context
     * @param {?=} doNotRecurse
     * @return {?}
     */
    TransitionAnimationEngine.prototype.removeNode = function (namespaceId, element, context, doNotRecurse) {
        if (!isElementNode(element)) {
            this._onRemovalComplete(element, context);
            return;
        }
        var /** @type {?} */ ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
        if (ns) {
            ns.removeNode(element, context, doNotRecurse);
        }
        else {
            this.markElementAsRemoved(namespaceId, element, false, context);
        }
    };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?=} hasAnimation
     * @param {?=} context
     * @return {?}
     */
    TransitionAnimationEngine.prototype.markElementAsRemoved = function (namespaceId, element, hasAnimation, context) {
        this.collectedLeaveElements.push(element);
        element[REMOVAL_FLAG] = {
            namespaceId: namespaceId,
            setForRemoval: context, hasAnimation: hasAnimation,
            removedBeforeQueried: false
        };
    };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} name
     * @param {?} phase
     * @param {?} callback
     * @return {?}
     */
    TransitionAnimationEngine.prototype.listen = function (namespaceId, element, name, phase, callback) {
        if (isElementNode(element)) {
            return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
        }
        return function () { };
    };
    /**
     * @param {?} entry
     * @param {?} subTimelines
     * @return {?}
     */
    TransitionAnimationEngine.prototype._buildInstruction = function (entry, subTimelines) {
        return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, entry.fromState.options, entry.toState.options, subTimelines);
    };
    /**
     * @param {?} containerElement
     * @return {?}
     */
    TransitionAnimationEngine.prototype.destroyInnerAnimations = function (containerElement) {
        var _this = this;
        var /** @type {?} */ elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
        elements.forEach(function (element) {
            var /** @type {?} */ players = _this.playersByElement.get(element);
            if (players) {
                players.forEach(function (player) {
                    // special case for when an element is set for destruction, but hasn't started.
                    // in this situation we want to delay the destruction until the flush occurs
                    // so that any event listeners attached to the player are triggered.
                    if (player.queued) {
                        player.markedForDestroy = true;
                    }
                    else {
                        player.destroy();
                    }
                });
            }
            var /** @type {?} */ stateMap = _this.statesByElement.get(element);
            if (stateMap) {
                Object.keys(stateMap).forEach(function (triggerName) { return stateMap[triggerName] = DELETED_STATE_VALUE; });
            }
        });
        if (this.playersByQueriedElement.size == 0)
            return;
        elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
        if (elements.length) {
            elements.forEach(function (element) {
                var /** @type {?} */ players = _this.playersByQueriedElement.get(element);
                if (players) {
                    players.forEach(function (player) { return player.finish(); });
                }
            });
        }
    };
    /**
     * @return {?}
     */
    TransitionAnimationEngine.prototype.whenRenderingDone = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.players.length) {
                return optimizeGroupPlayer(_this.players).onDone(function () { return resolve(); });
            }
            else {
                resolve();
            }
        });
    };
    /**
     * @param {?} element
     * @return {?}
     */
    TransitionAnimationEngine.prototype.processLeaveNode = function (element) {
        var _this = this;
        var /** @type {?} */ details = (element[REMOVAL_FLAG]);
        if (details && details.setForRemoval) {
            // this will prevent it from removing it twice
            element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
            if (details.namespaceId) {
                this.destroyInnerAnimations(element);
                var /** @type {?} */ ns = this._fetchNamespace(details.namespaceId);
                if (ns) {
                    ns.clearElementCache(element);
                }
            }
            this._onRemovalComplete(element, details.setForRemoval);
        }
        if (this.driver.matchesElement(element, DISABLED_SELECTOR)) {
            this.markElementAsDisabled(element, false);
        }
        this.driver.query(element, DISABLED_SELECTOR, true).forEach(function (node) {
            _this.markElementAsDisabled(element, false);
        });
    };
    /**
     * @param {?=} microtaskId
     * @return {?}
     */
    TransitionAnimationEngine.prototype.flush = function (microtaskId) {
        var _this = this;
        if (microtaskId === void 0) { microtaskId = -1; }
        var /** @type {?} */ players = [];
        if (this.newHostElements.size) {
            this.newHostElements.forEach(function (ns, element) { return _this._balanceNamespaceList(ns, element); });
            this.newHostElements.clear();
        }
        if (this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
            var /** @type {?} */ cleanupFns = [];
            try {
                players = this._flushAnimations(cleanupFns, microtaskId);
            }
            finally {
                for (var /** @type {?} */ i = 0; i < cleanupFns.length; i++) {
                    cleanupFns[i]();
                }
            }
        }
        else {
            for (var /** @type {?} */ i = 0; i < this.collectedLeaveElements.length; i++) {
                var /** @type {?} */ element = this.collectedLeaveElements[i];
                this.processLeaveNode(element);
            }
        }
        this.totalQueuedPlayers = 0;
        this.collectedEnterElements.length = 0;
        this.collectedLeaveElements.length = 0;
        this._flushFns.forEach(function (fn) { return fn(); });
        this._flushFns = [];
        if (this._whenQuietFns.length) {
            // we move these over to a variable so that
            // if any new callbacks are registered in another
            // flush they do not populate the existing set
            var /** @type {?} */ quietFns_1 = this._whenQuietFns;
            this._whenQuietFns = [];
            if (players.length) {
                optimizeGroupPlayer(players).onDone(function () { quietFns_1.forEach(function (fn) { return fn(); }); });
            }
            else {
                quietFns_1.forEach(function (fn) { return fn(); });
            }
        }
    };
    /**
     * @param {?} errors
     * @return {?}
     */
    TransitionAnimationEngine.prototype.reportError = function (errors) {
        throw new Error("Unable to process animations due to the following failed trigger transitions\n " + errors.join('\n'));
    };
    /**
     * @param {?} cleanupFns
     * @param {?} microtaskId
     * @return {?}
     */
    TransitionAnimationEngine.prototype._flushAnimations = function (cleanupFns, microtaskId) {
        var _this = this;
        var /** @type {?} */ subTimelines = new ElementInstructionMap();
        var /** @type {?} */ skippedPlayers = [];
        var /** @type {?} */ skippedPlayersMap = new Map();
        var /** @type {?} */ queuedInstructions = [];
        var /** @type {?} */ queriedElements = new Map();
        var /** @type {?} */ allPreStyleElements = new Map();
        var /** @type {?} */ allPostStyleElements = new Map();
        var /** @type {?} */ disabledElementsSet = new Set();
        this.disabledNodes.forEach(function (node) {
            disabledElementsSet.add(node);
            var /** @type {?} */ nodesThatAreDisabled = _this.driver.query(node, QUEUED_SELECTOR, true);
            for (var /** @type {?} */ i = 0; i < nodesThatAreDisabled.length; i++) {
                disabledElementsSet.add(nodesThatAreDisabled[i]);
            }
        });
        var /** @type {?} */ bodyNode = getBodyNode();
        var /** @type {?} */ allEnterNodes = this.collectedEnterElements.length ?
            this.collectedEnterElements.filter(createIsRootFilterFn(this.collectedEnterElements)) :
            [];
        // this must occur before the instructions are built below such that
        // the :enter queries match the elements (since the timeline queries
        // are fired during instruction building).
        for (var /** @type {?} */ i = 0; i < allEnterNodes.length; i++) {
            addClass(allEnterNodes[i], ENTER_CLASSNAME);
        }
        var /** @type {?} */ allLeaveNodes = [];
        var /** @type {?} */ leaveNodesWithoutAnimations = new Set();
        for (var /** @type {?} */ i = 0; i < this.collectedLeaveElements.length; i++) {
            var /** @type {?} */ element = this.collectedLeaveElements[i];
            var /** @type {?} */ details = (element[REMOVAL_FLAG]);
            if (details && details.setForRemoval) {
                addClass(element, LEAVE_CLASSNAME);
                allLeaveNodes.push(element);
                if (!details.hasAnimation) {
                    leaveNodesWithoutAnimations.add(element);
                }
            }
        }
        cleanupFns.push(function () {
            allEnterNodes.forEach(function (element) { return removeClass(element, ENTER_CLASSNAME); });
            allLeaveNodes.forEach(function (element) {
                removeClass(element, LEAVE_CLASSNAME);
                _this.processLeaveNode(element);
            });
        });
        var /** @type {?} */ allPlayers = [];
        var /** @type {?} */ erroneousTransitions = [];
        for (var /** @type {?} */ i = this._namespaceList.length - 1; i >= 0; i--) {
            var /** @type {?} */ ns = this._namespaceList[i];
            ns.drainQueuedTransitions(microtaskId).forEach(function (entry) {
                var /** @type {?} */ player = entry.player;
                allPlayers.push(player);
                var /** @type {?} */ element = entry.element;
                if (!bodyNode || !_this.driver.containsElement(bodyNode, element)) {
                    player.destroy();
                    return;
                }
                var /** @type {?} */ instruction = ((_this._buildInstruction(entry, subTimelines)));
                if (instruction.errors && instruction.errors.length) {
                    erroneousTransitions.push(instruction);
                    return;
                }
                // if a unmatched transition is queued to go then it SHOULD NOT render
                // an animation and cancel the previously running animations.
                if (entry.isFallbackTransition) {
                    player.onStart(function () { return eraseStyles(element, instruction.fromStyles); });
                    player.onDestroy(function () { return setStyles(element, instruction.toStyles); });
                    skippedPlayers.push(player);
                    return;
                }
                // this means that if a parent animation uses this animation as a sub trigger
                // then it will instruct the timeline builder to not add a player delay, but
                // instead stretch the first keyframe gap up until the animation starts. The
                // reason this is important is to prevent extra initialization styles from being
                // required by the user in the animation.
                instruction.timelines.forEach(function (tl) { return tl.stretchStartingKeyframe = true; });
                subTimelines.append(element, instruction.timelines);
                var /** @type {?} */ tuple = { instruction: instruction, player: player, element: element };
                queuedInstructions.push(tuple);
                instruction.queriedElements.forEach(function (element) { return getOrSetAsInMap(queriedElements, element, []).push(player); });
                instruction.preStyleProps.forEach(function (stringMap, element) {
                    var /** @type {?} */ props = Object.keys(stringMap);
                    if (props.length) {
                        var /** @type {?} */ setVal_1 = ((allPreStyleElements.get(element)));
                        if (!setVal_1) {
                            allPreStyleElements.set(element, setVal_1 = new Set());
                        }
                        props.forEach(function (prop) { return setVal_1.add(prop); });
                    }
                });
                instruction.postStyleProps.forEach(function (stringMap, element) {
                    var /** @type {?} */ props = Object.keys(stringMap);
                    var /** @type {?} */ setVal = ((allPostStyleElements.get(element)));
                    if (!setVal) {
                        allPostStyleElements.set(element, setVal = new Set());
                    }
                    props.forEach(function (prop) { return setVal.add(prop); });
                });
            });
        }
        if (erroneousTransitions.length) {
            var /** @type {?} */ errors_1 = [];
            erroneousTransitions.forEach(function (instruction) {
                errors_1.push("@" + instruction.triggerName + " has failed due to:\n"); /** @type {?} */
                ((instruction.errors)).forEach(function (error) { return errors_1.push("- " + error + "\n"); });
            });
            allPlayers.forEach(function (player) { return player.destroy(); });
            this.reportError(errors_1);
        }
        // these can only be detected here since we have a map of all the elements
        // that have animations attached to them... We use a set here in the event
        // multiple enter captures on the same element were caught in different
        // renderer namespaces (e.g. when a @trigger was on a host binding that had *ngIf)
        var /** @type {?} */ enterNodesWithoutAnimations = new Set();
        for (var /** @type {?} */ i = 0; i < allEnterNodes.length; i++) {
            var /** @type {?} */ element = allEnterNodes[i];
            if (!subTimelines.has(element)) {
                enterNodesWithoutAnimations.add(element);
            }
        }
        var /** @type {?} */ allPreviousPlayersMap = new Map();
        var /** @type {?} */ sortedParentElements = [];
        queuedInstructions.forEach(function (entry) {
            var /** @type {?} */ element = entry.element;
            if (subTimelines.has(element)) {
                sortedParentElements.unshift(element);
                _this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
            }
        });
        skippedPlayers.forEach(function (player) {
            var /** @type {?} */ element = player.element;
            var /** @type {?} */ previousPlayers = _this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
            previousPlayers.forEach(function (prevPlayer) {
                getOrSetAsInMap(allPreviousPlayersMap, element, []).push(prevPlayer);
                prevPlayer.destroy();
            });
        });
        // this is a special case for nodes that will be removed (either by)
        // having their own leave animations or by being queried in a container
        // that will be removed once a parent animation is complete. The idea
        // here is that * styles must be identical to ! styles because of
        // backwards compatibility (* is also filled in by default in many places).
        // Otherwise * styles will return an empty value or auto since the element
        // that is being getComputedStyle'd will not be visible (since * = destination)
        var /** @type {?} */ replaceNodes = allLeaveNodes.filter(function (node) {
            return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
        });
        // POST STAGE: fill the * styles
        var _a = cloakAndComputeStyles(this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE), postStylesMap = _a[0], allLeaveQueriedNodes = _a[1];
        allLeaveQueriedNodes.forEach(function (node) {
            if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
                replaceNodes.push(node);
            }
        });
        // PRE STAGE: fill the ! styles
        var preStylesMap = (allPreStyleElements.size ?
            cloakAndComputeStyles(this.driver, enterNodesWithoutAnimations, allPreStyleElements, ɵPRE_STYLE) :
            [new Map()])[0];
        replaceNodes.forEach(function (node) {
            var /** @type {?} */ post = postStylesMap.get(node);
            var /** @type {?} */ pre = preStylesMap.get(node);
            postStylesMap.set(node, /** @type {?} */ (Object.assign({}, post, pre)));
        });
        var /** @type {?} */ rootPlayers = [];
        var /** @type {?} */ subPlayers = [];
        queuedInstructions.forEach(function (entry) {
            var element = entry.element, player = entry.player, instruction = entry.instruction;
            // this means that it was never consumed by a parent animation which
            // means that it is independent and therefore should be set for animation
            if (subTimelines.has(element)) {
                if (disabledElementsSet.has(element)) {
                    skippedPlayers.push(player);
                    return;
                }
                var /** @type {?} */ innerPlayer = _this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
                player.setRealPlayer(innerPlayer);
                var /** @type {?} */ parentHasPriority = null;
                for (var /** @type {?} */ i = 0; i < sortedParentElements.length; i++) {
                    var /** @type {?} */ parent = sortedParentElements[i];
                    if (parent === element)
                        break;
                    if (_this.driver.containsElement(parent, element)) {
                        parentHasPriority = parent;
                        break;
                    }
                }
                if (parentHasPriority) {
                    var /** @type {?} */ parentPlayers = _this.playersByElement.get(parentHasPriority);
                    if (parentPlayers && parentPlayers.length) {
                        player.parentPlayer = optimizeGroupPlayer(parentPlayers);
                    }
                    skippedPlayers.push(player);
                }
                else {
                    rootPlayers.push(player);
                }
            }
            else {
                eraseStyles(element, instruction.fromStyles);
                player.onDestroy(function () { return setStyles(element, instruction.toStyles); });
                // there still might be a ancestor player animating this
                // element therefore we will still add it as a sub player
                // even if its animation may be disabled
                subPlayers.push(player);
                if (disabledElementsSet.has(element)) {
                    skippedPlayers.push(player);
                }
            }
        });
        // find all of the sub players' corresponding inner animation player
        subPlayers.forEach(function (player) {
            // even if any players are not found for a sub animation then it
            // will still complete itself after the next tick since it's Noop
            var /** @type {?} */ playersForElement = skippedPlayersMap.get(player.element);
            if (playersForElement && playersForElement.length) {
                var /** @type {?} */ innerPlayer = optimizeGroupPlayer(playersForElement);
                player.setRealPlayer(innerPlayer);
            }
        });
        // the reason why we don't actually play the animation is
        // because all that a skipped player is designed to do is to
        // fire the start/done transition callback events
        skippedPlayers.forEach(function (player) {
            if (player.parentPlayer) {
                player.parentPlayer.onDestroy(function () { return player.destroy(); });
            }
            else {
                player.destroy();
            }
        });
        // run through all of the queued removals and see if they
        // were picked up by a query. If not then perform the removal
        // operation right away unless a parent animation is ongoing.
        for (var /** @type {?} */ i = 0; i < allLeaveNodes.length; i++) {
            var /** @type {?} */ element = allLeaveNodes[i];
            var /** @type {?} */ details = (element[REMOVAL_FLAG]);
            removeClass(element, LEAVE_CLASSNAME);
            // this means the element has a removal animation that is being
            // taken care of and therefore the inner elements will hang around
            // until that animation is over (or the parent queried animation)
            if (details && details.hasAnimation)
                continue;
            var /** @type {?} */ players = [];
            // if this element is queried or if it contains queried children
            // then we want for the element not to be removed from the page
            // until the queried animations have finished
            if (queriedElements.size) {
                var /** @type {?} */ queriedPlayerResults = queriedElements.get(element);
                if (queriedPlayerResults && queriedPlayerResults.length) {
                    players.push.apply(players, queriedPlayerResults);
                }
                var /** @type {?} */ queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
                for (var /** @type {?} */ j = 0; j < queriedInnerElements.length; j++) {
                    var /** @type {?} */ queriedPlayers = queriedElements.get(queriedInnerElements[j]);
                    if (queriedPlayers && queriedPlayers.length) {
                        players.push.apply(players, queriedPlayers);
                    }
                }
            }
            var /** @type {?} */ activePlayers = players.filter(function (p) { return !p.destroyed; });
            if (activePlayers.length) {
                removeNodesAfterAnimationDone(this, element, activePlayers);
            }
            else {
                this.processLeaveNode(element);
            }
        }
        // this is required so the cleanup method doesn't remove them
        allLeaveNodes.length = 0;
        rootPlayers.forEach(function (player) {
            _this.players.push(player);
            player.onDone(function () {
                player.destroy();
                var /** @type {?} */ index = _this.players.indexOf(player);
                _this.players.splice(index, 1);
            });
            player.play();
        });
        return rootPlayers;
    };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @return {?}
     */
    TransitionAnimationEngine.prototype.elementContainsData = function (namespaceId, element) {
        var /** @type {?} */ containsData = false;
        var /** @type {?} */ details = (element[REMOVAL_FLAG]);
        if (details && details.setForRemoval)
            containsData = true;
        if (this.playersByElement.has(element))
            containsData = true;
        if (this.playersByQueriedElement.has(element))
            containsData = true;
        if (this.statesByElement.has(element))
            containsData = true;
        return this._fetchNamespace(namespaceId).elementContainsData(element) || containsData;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    TransitionAnimationEngine.prototype.afterFlush = function (callback) { this._flushFns.push(callback); };
    /**
     * @param {?} callback
     * @return {?}
     */
    TransitionAnimationEngine.prototype.afterFlushAnimationsDone = function (callback) { this._whenQuietFns.push(callback); };
    /**
     * @param {?} element
     * @param {?} isQueriedElement
     * @param {?=} namespaceId
     * @param {?=} triggerName
     * @param {?=} toStateValue
     * @return {?}
     */
    TransitionAnimationEngine.prototype._getPreviousPlayers = function (element, isQueriedElement, namespaceId, triggerName, toStateValue) {
        var /** @type {?} */ players = [];
        if (isQueriedElement) {
            var /** @type {?} */ queriedElementPlayers = this.playersByQueriedElement.get(element);
            if (queriedElementPlayers) {
                players = queriedElementPlayers;
            }
        }
        else {
            var /** @type {?} */ elementPlayers = this.playersByElement.get(element);
            if (elementPlayers) {
                var /** @type {?} */ isRemovalAnimation_1 = !toStateValue || toStateValue == VOID_VALUE;
                elementPlayers.forEach(function (player) {
                    if (player.queued)
                        return;
                    if (!isRemovalAnimation_1 && player.triggerName != triggerName)
                        return;
                    players.push(player);
                });
            }
        }
        if (namespaceId || triggerName) {
            players = players.filter(function (player) {
                if (namespaceId && namespaceId != player.namespaceId)
                    return false;
                if (triggerName && triggerName != player.triggerName)
                    return false;
                return true;
            });
        }
        return players;
    };
    /**
     * @param {?} namespaceId
     * @param {?} instruction
     * @param {?} allPreviousPlayersMap
     * @return {?}
     */
    TransitionAnimationEngine.prototype._beforeAnimationBuild = function (namespaceId, instruction, allPreviousPlayersMap) {
        var _this = this;
        var /** @type {?} */ triggerName = instruction.triggerName;
        var /** @type {?} */ rootElement = instruction.element;
        // when a removal animation occurs, ALL previous players are collected
        // and destroyed (even if they are outside of the current namespace)
        var /** @type {?} */ targetNameSpaceId = instruction.isRemovalTransition ? undefined : namespaceId;
        var /** @type {?} */ targetTriggerName = instruction.isRemovalTransition ? undefined : triggerName;
        instruction.timelines.map(function (timelineInstruction) {
            var /** @type {?} */ element = timelineInstruction.element;
            var /** @type {?} */ isQueriedElement = element !== rootElement;
            var /** @type {?} */ players = getOrSetAsInMap(allPreviousPlayersMap, element, []);
            var /** @type {?} */ previousPlayers = _this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
            previousPlayers.forEach(function (player) {
                var /** @type {?} */ realPlayer = (player.getRealPlayer());
                if (realPlayer.beforeDestroy) {
                    realPlayer.beforeDestroy();
                }
                player.destroy();
                players.push(player);
            });
        });
        // this needs to be done so that the PRE/POST styles can be
        // computed properly without interfering with the previous animation
        eraseStyles(rootElement, instruction.fromStyles);
    };
    /**
     * @param {?} namespaceId
     * @param {?} instruction
     * @param {?} allPreviousPlayersMap
     * @param {?} skippedPlayersMap
     * @param {?} preStylesMap
     * @param {?} postStylesMap
     * @return {?}
     */
    TransitionAnimationEngine.prototype._buildAnimation = function (namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
        var _this = this;
        var /** @type {?} */ triggerName = instruction.triggerName;
        var /** @type {?} */ rootElement = instruction.element;
        // we first run this so that the previous animation player
        // data can be passed into the successive animation players
        var /** @type {?} */ allQueriedPlayers = [];
        var /** @type {?} */ allConsumedElements = new Set();
        var /** @type {?} */ allSubElements = new Set();
        var /** @type {?} */ allNewPlayers = instruction.timelines.map(function (timelineInstruction) {
            var /** @type {?} */ element = timelineInstruction.element;
            allConsumedElements.add(element);
            // FIXME (matsko): make sure to-be-removed animations are removed properly
            var /** @type {?} */ details = element[REMOVAL_FLAG];
            if (details && details.removedBeforeQueried)
                return new NoopAnimationPlayer();
            var /** @type {?} */ isQueriedElement = element !== rootElement;
            var /** @type {?} */ previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY)
                .map(function (p) { return p.getRealPlayer(); }))
                .filter(function (p) {
                // the `element` is not apart of the AnimationPlayer definition, but
                // Mock/WebAnimations
                // use the element within their implementation. This will be added in Angular5 to
                // AnimationPlayer
                var /** @type {?} */ pp = (p);
                return pp.element ? pp.element === element : false;
            });
            var /** @type {?} */ preStyles = preStylesMap.get(element);
            var /** @type {?} */ postStyles = postStylesMap.get(element);
            var /** @type {?} */ keyframes = normalizeKeyframes(_this.driver, _this._normalizer, element, timelineInstruction.keyframes, preStyles, postStyles);
            var /** @type {?} */ player = _this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
            // this means that this particular player belongs to a sub trigger. It is
            // important that we match this player up with the corresponding (@trigger.listener)
            if (timelineInstruction.subTimeline && skippedPlayersMap) {
                allSubElements.add(element);
            }
            if (isQueriedElement) {
                var /** @type {?} */ wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
                wrappedPlayer.setRealPlayer(player);
                allQueriedPlayers.push(wrappedPlayer);
            }
            return player;
        });
        allQueriedPlayers.forEach(function (player) {
            getOrSetAsInMap(_this.playersByQueriedElement, player.element, []).push(player);
            player.onDone(function () { return deleteOrUnsetInMap(_this.playersByQueriedElement, player.element, player); });
        });
        allConsumedElements.forEach(function (element) { return addClass(element, NG_ANIMATING_CLASSNAME); });
        var /** @type {?} */ player = optimizeGroupPlayer(allNewPlayers);
        player.onDestroy(function () {
            allConsumedElements.forEach(function (element) { return removeClass(element, NG_ANIMATING_CLASSNAME); });
            setStyles(rootElement, instruction.toStyles);
        });
        // this basically makes all of the callbacks for sub element animations
        // be dependent on the upper players for when they finish
        allSubElements.forEach(function (element) { getOrSetAsInMap(skippedPlayersMap, element, []).push(player); });
        return player;
    };
    /**
     * @param {?} instruction
     * @param {?} keyframes
     * @param {?} previousPlayers
     * @return {?}
     */
    TransitionAnimationEngine.prototype._buildPlayer = function (instruction, keyframes, previousPlayers) {
        if (keyframes.length > 0) {
            return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
        }
        // special case for when an empty transition|definition is provided
        // ... there is no point in rendering an empty animation
        return new NoopAnimationPlayer();
    };
    return TransitionAnimationEngine;
}());
var TransitionAnimationPlayer = (function () {
    /**
     * @param {?} namespaceId
     * @param {?} triggerName
     * @param {?} element
     */
    function TransitionAnimationPlayer(namespaceId, triggerName, element) {
        this.namespaceId = namespaceId;
        this.triggerName = triggerName;
        this.element = element;
        this._player = new NoopAnimationPlayer();
        this._containsRealPlayer = false;
        this._queuedCallbacks = {};
        this._destroyed = false;
        this.markedForDestroy = false;
    }
    Object.defineProperty(TransitionAnimationPlayer.prototype, "queued", {
        /**
         * @return {?}
         */
        get: function () { return this._containsRealPlayer == false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionAnimationPlayer.prototype, "destroyed", {
        /**
         * @return {?}
         */
        get: function () { return this._destroyed; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} player
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.setRealPlayer = function (player) {
        var _this = this;
        if (this._containsRealPlayer)
            return;
        this._player = player;
        Object.keys(this._queuedCallbacks).forEach(function (phase) {
            _this._queuedCallbacks[phase].forEach(function (callback) { return listenOnPlayer(player, phase, undefined, callback); });
        });
        this._queuedCallbacks = {};
        this._containsRealPlayer = true;
    };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.getRealPlayer = function () { return this._player; };
    /**
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    TransitionAnimationPlayer.prototype._queueEvent = function (name, callback) {
        getOrSetAsInMap(this._queuedCallbacks, name, []).push(callback);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.onDone = function (fn) {
        if (this.queued) {
            this._queueEvent('done', fn);
        }
        this._player.onDone(fn);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.onStart = function (fn) {
        if (this.queued) {
            this._queueEvent('start', fn);
        }
        this._player.onStart(fn);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.onDestroy = function (fn) {
        if (this.queued) {
            this._queueEvent('destroy', fn);
        }
        this._player.onDestroy(fn);
    };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.init = function () { this._player.init(); };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.hasStarted = function () { return this.queued ? false : this._player.hasStarted(); };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.play = function () { !this.queued && this._player.play(); };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.pause = function () { !this.queued && this._player.pause(); };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.restart = function () { !this.queued && this._player.restart(); };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.finish = function () { this._player.finish(); };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.destroy = function () {
        this._destroyed = true;
        this._player.destroy();
    };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.reset = function () { !this.queued && this._player.reset(); };
    /**
     * @param {?} p
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.setPosition = function (p) {
        if (!this.queued) {
            this._player.setPosition(p);
        }
    };
    /**
     * @return {?}
     */
    TransitionAnimationPlayer.prototype.getPosition = function () { return this.queued ? 0 : this._player.getPosition(); };
    Object.defineProperty(TransitionAnimationPlayer.prototype, "totalTime", {
        /**
         * @return {?}
         */
        get: function () { return this._player.totalTime; },
        enumerable: true,
        configurable: true
    });
    return TransitionAnimationPlayer;
}());
/**
 * @param {?} map
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function deleteOrUnsetInMap(map, key, value) {
    var /** @type {?} */ currentValues;
    if (map instanceof Map) {
        currentValues = map.get(key);
        if (currentValues) {
            if (currentValues.length) {
                var /** @type {?} */ index = currentValues.indexOf(value);
                currentValues.splice(index, 1);
            }
            if (currentValues.length == 0) {
                map.delete(key);
            }
        }
    }
    else {
        currentValues = map[key];
        if (currentValues) {
            if (currentValues.length) {
                var /** @type {?} */ index = currentValues.indexOf(value);
                currentValues.splice(index, 1);
            }
            if (currentValues.length == 0) {
                delete map[key];
            }
        }
    }
    return currentValues;
}
/**
 * @param {?} value
 * @return {?}
 */
function normalizeTriggerValue(value) {
    // we use `!= null` here because it's the most simple
    // way to test against a "falsy" value without mixing
    // in empty strings or a zero value. DO NOT OPTIMIZE.
    return value != null ? value : null;
}
/**
 * @param {?} node
 * @return {?}
 */
function isElementNode(node) {
    return node && node['nodeType'] === 1;
}
/**
 * @param {?} eventName
 * @return {?}
 */
function isTriggerEventValid(eventName) {
    return eventName == 'start' || eventName == 'done';
}
/**
 * @param {?} element
 * @param {?=} value
 * @return {?}
 */
function cloakElement(element, value) {
    var /** @type {?} */ oldValue = element.style.display;
    element.style.display = value != null ? value : 'none';
    return oldValue;
}
/**
 * @param {?} driver
 * @param {?} elements
 * @param {?} elementPropsMap
 * @param {?} defaultStyle
 * @return {?}
 */
function cloakAndComputeStyles(driver, elements, elementPropsMap, defaultStyle) {
    var /** @type {?} */ cloakVals = [];
    elements.forEach(function (element) { return cloakVals.push(cloakElement(element)); });
    var /** @type {?} */ valuesMap = new Map();
    var /** @type {?} */ failedElements = [];
    elementPropsMap.forEach(function (props, element) {
        var /** @type {?} */ styles = {};
        props.forEach(function (prop) {
            var /** @type {?} */ value = styles[prop] = driver.computeStyle(element, prop, defaultStyle);
            // there is no easy way to detect this because a sub element could be removed
            // by a parent animation element being detached.
            if (!value || value.length == 0) {
                element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
                failedElements.push(element);
            }
        });
        valuesMap.set(element, styles);
    });
    // we use a index variable here since Set.forEach(a, i) does not return
    // an index value for the closure (but instead just the value)
    var /** @type {?} */ i = 0;
    elements.forEach(function (element) { return cloakElement(element, cloakVals[i++]); });
    return [valuesMap, failedElements];
}
/**
 * @param {?} nodes
 * @return {?}
 */
function createIsRootFilterFn(nodes) {
    var /** @type {?} */ nodeSet = new Set(nodes);
    var /** @type {?} */ knownRootContainer = new Set();
    var /** @type {?} */ isRoot;
    isRoot = function (node) {
        if (!node)
            return true;
        if (nodeSet.has(node.parentNode))
            return false;
        if (knownRootContainer.has(node.parentNode))
            return true;
        if (isRoot(node.parentNode)) {
            knownRootContainer.add(node);
            return true;
        }
        return false;
    };
    return isRoot;
}
var CLASSES_CACHE_KEY = '$$classes';
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */
function containsClass(element, className) {
    if (element.classList) {
        return element.classList.contains(className);
    }
    else {
        var /** @type {?} */ classes = element[CLASSES_CACHE_KEY];
        return classes && classes[className];
    }
}
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */
function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
    else {
        var /** @type {?} */ classes = element[CLASSES_CACHE_KEY];
        if (!classes) {
            classes = element[CLASSES_CACHE_KEY] = {};
        }
        classes[className] = true;
    }
}
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    }
    else {
        var /** @type {?} */ classes = element[CLASSES_CACHE_KEY];
        if (classes) {
            delete classes[className];
        }
    }
}
/**
 * @return {?}
 */
function getBodyNode() {
    if (typeof document != 'undefined') {
        return document.body;
    }
    return null;
}
/**
 * @param {?} engine
 * @param {?} element
 * @param {?} players
 * @return {?}
 */
function removeNodesAfterAnimationDone(engine, element, players) {
    optimizeGroupPlayer(players).onDone(function () { return engine.processLeaveNode(element); });
}
/**
 * @param {?} players
 * @return {?}
 */
function flattenGroupPlayers(players) {
    var /** @type {?} */ finalPlayers = [];
    _flattenGroupPlayersRecur(players, finalPlayers);
    return finalPlayers;
}
/**
 * @param {?} players
 * @param {?} finalPlayers
 * @return {?}
 */
function _flattenGroupPlayersRecur(players, finalPlayers) {
    for (var /** @type {?} */ i = 0; i < players.length; i++) {
        var /** @type {?} */ player = players[i];
        if (player instanceof ɵAnimationGroupPlayer) {
            _flattenGroupPlayersRecur(player.players, finalPlayers);
        }
        else {
            finalPlayers.push(/** @type {?} */ (player));
        }
    }
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function objEquals(a, b) {
    var /** @type {?} */ k1 = Object.keys(a);
    var /** @type {?} */ k2 = Object.keys(b);
    if (k1.length != k2.length)
        return false;
    for (var /** @type {?} */ i = 0; i < k1.length; i++) {
        var /** @type {?} */ prop = k1[i];
        if (!b.hasOwnProperty(prop) || a[prop] !== b[prop])
            return false;
    }
    return true;
}
/**
 * @param {?} element
 * @param {?} allPreStyleElements
 * @param {?} allPostStyleElements
 * @return {?}
 */
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
    var /** @type {?} */ postEntry = allPostStyleElements.get(element);
    if (!postEntry)
        return false;
    var /** @type {?} */ preEntry = allPreStyleElements.get(element);
    if (preEntry) {
        postEntry.forEach(function (data) { return ((preEntry)).add(data); });
    }
    else {
        allPreStyleElements.set(element, postEntry);
    }
    allPostStyleElements.delete(element);
    return true;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AnimationEngine = (function () {
    /**
     * @param {?} driver
     * @param {?} normalizer
     */
    function AnimationEngine(driver, normalizer) {
        var _this = this;
        this._triggerCache = {};
        this.onRemovalComplete = function (element, context) { };
        this._transitionEngine = new TransitionAnimationEngine(driver, normalizer);
        this._timelineEngine = new TimelineAnimationEngine(driver, normalizer);
        this._transitionEngine.onRemovalComplete = function (element, context) { return _this.onRemovalComplete(element, context); };
    }
    /**
     * @param {?} componentId
     * @param {?} namespaceId
     * @param {?} hostElement
     * @param {?} name
     * @param {?} metadata
     * @return {?}
     */
    AnimationEngine.prototype.registerTrigger = function (componentId, namespaceId, hostElement, name, metadata) {
        var /** @type {?} */ cacheKey = componentId + '-' + name;
        var /** @type {?} */ trigger$$1 = this._triggerCache[cacheKey];
        if (!trigger$$1) {
            var /** @type {?} */ errors = [];
            var /** @type {?} */ ast = (buildAnimationAst(/** @type {?} */ (metadata), errors));
            if (errors.length) {
                throw new Error("The animation trigger \"" + name + "\" has failed to build due to the following errors:\n - " + errors.join("\n - "));
            }
            trigger$$1 = buildTrigger(name, ast);
            this._triggerCache[cacheKey] = trigger$$1;
        }
        this._transitionEngine.registerTrigger(namespaceId, name, trigger$$1);
    };
    /**
     * @param {?} namespaceId
     * @param {?} hostElement
     * @return {?}
     */
    AnimationEngine.prototype.register = function (namespaceId, hostElement) {
        this._transitionEngine.register(namespaceId, hostElement);
    };
    /**
     * @param {?} namespaceId
     * @param {?} context
     * @return {?}
     */
    AnimationEngine.prototype.destroy = function (namespaceId, context) {
        this._transitionEngine.destroy(namespaceId, context);
    };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} parent
     * @param {?} insertBefore
     * @return {?}
     */
    AnimationEngine.prototype.onInsert = function (namespaceId, element, parent, insertBefore) {
        this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
    };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    AnimationEngine.prototype.onRemove = function (namespaceId, element, context) {
        this._transitionEngine.removeNode(namespaceId, element, context);
    };
    /**
     * @param {?} element
     * @param {?} disable
     * @return {?}
     */
    AnimationEngine.prototype.disableAnimations = function (element, disable) {
        this._transitionEngine.markElementAsDisabled(element, disable);
    };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    AnimationEngine.prototype.process = function (namespaceId, element, property, value) {
        if (property.charAt(0) == '@') {
            var _a = parseTimelineCommand(property), id = _a[0], action = _a[1];
            var /** @type {?} */ args = (value);
            this._timelineEngine.command(id, element, action, args);
        }
        else {
            this._transitionEngine.trigger(namespaceId, element, property, value);
        }
    };
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    AnimationEngine.prototype.listen = function (namespaceId, element, eventName, eventPhase, callback) {
        // @@listen
        if (eventName.charAt(0) == '@') {
            var _a = parseTimelineCommand(eventName), id = _a[0], action = _a[1];
            return this._timelineEngine.listen(id, element, action, callback);
        }
        return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
    };
    /**
     * @param {?=} microtaskId
     * @return {?}
     */
    AnimationEngine.prototype.flush = function (microtaskId) {
        if (microtaskId === void 0) { microtaskId = -1; }
        this._transitionEngine.flush(microtaskId);
    };
    Object.defineProperty(AnimationEngine.prototype, "players", {
        /**
         * @return {?}
         */
        get: function () {
            return ((this._transitionEngine.players))
                .concat(/** @type {?} */ (this._timelineEngine.players));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AnimationEngine.prototype.whenRenderingDone = function () { return this._transitionEngine.whenRenderingDone(); };
    return AnimationEngine;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WebAnimationsPlayer = (function () {
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @param {?=} previousPlayers
     */
    function WebAnimationsPlayer(element, keyframes, options, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        var _this = this;
        this.element = element;
        this.keyframes = keyframes;
        this.options = options;
        this.previousPlayers = previousPlayers;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._initialized = false;
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.time = 0;
        this.parentPlayer = null;
        this.previousStyles = {};
        this.currentSnapshot = {};
        this._duration = options['duration'];
        this._delay = options['delay'] || 0;
        this.time = this._duration + this._delay;
        if (allowPreviousPlayerStylesMerge(this._duration, this._delay)) {
            previousPlayers.forEach(function (player) {
                var styles = player.currentSnapshot;
                Object.keys(styles).forEach(function (prop) { return _this.previousStyles[prop] = styles[prop]; });
            });
        }
    }
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.init = function () {
        this._buildPlayer();
        this._preparePlayerBeforeStart();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._buildPlayer = function () {
        var _this = this;
        if (this._initialized)
            return;
        this._initialized = true;
        var /** @type {?} */ keyframes = this.keyframes.map(function (styles) { return copyStyles(styles, false); });
        var /** @type {?} */ previousStyleProps = Object.keys(this.previousStyles);
        if (previousStyleProps.length) {
            var /** @type {?} */ startingKeyframe_1 = keyframes[0];
            var /** @type {?} */ missingStyleProps_1 = [];
            previousStyleProps.forEach(function (prop) {
                if (!startingKeyframe_1.hasOwnProperty(prop)) {
                    missingStyleProps_1.push(prop);
                }
                startingKeyframe_1[prop] = _this.previousStyles[prop];
            });
            if (missingStyleProps_1.length) {
                var /** @type {?} */ self_1 = this;
                var _loop_1 = function () {
                    var /** @type {?} */ kf = keyframes[i];
                    missingStyleProps_1.forEach(function (prop) {
                        kf[prop] = _computeStyle(self_1.element, prop);
                    });
                };
                // tslint:disable-next-line
                for (var /** @type {?} */ i = 1; i < keyframes.length; i++) {
                    _loop_1();
                }
            }
        }
        this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
        this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : {};
        this._player.addEventListener('finish', function () { return _this._onFinish(); });
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._preparePlayerBeforeStart = function () {
        // this is required so that the player doesn't start to animate right away
        if (this._delay) {
            this._resetDomPlayerState();
        }
        else {
            this._player.pause();
        }
    };
    /**
     * \@internal
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @return {?}
     */
    WebAnimationsPlayer.prototype._triggerWebAnimation = function (element, keyframes, options) {
        // jscompiler doesn't seem to know animate is a native property because it's not fully
        // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
        return (element['animate'](keyframes, options));
    };
    Object.defineProperty(WebAnimationsPlayer.prototype, "domPlayer", {
        /**
         * @return {?}
         */
        get: function () { return this._player; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    WebAnimationsPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    WebAnimationsPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    WebAnimationsPlayer.prototype.onDestroy = function (fn) { this._onDestroyFns.push(fn); };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.play = function () {
        this._buildPlayer();
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
            this._started = true;
        }
        this._player.play();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.pause = function () {
        this.init();
        this._player.pause();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.finish = function () {
        this.init();
        this._onFinish();
        this._player.finish();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.reset = function () {
        this._resetDomPlayerState();
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._resetDomPlayerState = function () {
        if (this._player) {
            this._player.cancel();
        }
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.restart = function () {
        this.reset();
        this.play();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.hasStarted = function () { return this._started; };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.destroy = function () {
        if (!this._destroyed) {
            this._destroyed = true;
            this._resetDomPlayerState();
            this._onFinish();
            this._onDestroyFns.forEach(function (fn) { return fn(); });
            this._onDestroyFns = [];
        }
    };
    /**
     * @param {?} p
     * @return {?}
     */
    WebAnimationsPlayer.prototype.setPosition = function (p) { this._player.currentTime = p * this.time; };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.getPosition = function () { return this._player.currentTime / this.time; };
    Object.defineProperty(WebAnimationsPlayer.prototype, "totalTime", {
        /**
         * @return {?}
         */
        get: function () { return this._delay + this._duration; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.beforeDestroy = function () {
        var _this = this;
        var /** @type {?} */ styles = {};
        if (this.hasStarted()) {
            Object.keys(this._finalKeyframe).forEach(function (prop) {
                if (prop != 'offset') {
                    styles[prop] =
                        _this._finished ? _this._finalKeyframe[prop] : _computeStyle(_this.element, prop);
                }
            });
        }
        this.currentSnapshot = styles;
    };
    return WebAnimationsPlayer;
}());
/**
 * @param {?} element
 * @param {?} prop
 * @return {?}
 */
function _computeStyle(element, prop) {
    return ((window.getComputedStyle(element)))[prop];
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WebAnimationsDriver = (function () {
    function WebAnimationsDriver() {
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    WebAnimationsDriver.prototype.matchesElement = function (element, selector) {
        return matchesElement(element, selector);
    };
    /**
     * @param {?} elm1
     * @param {?} elm2
     * @return {?}
     */
    WebAnimationsDriver.prototype.containsElement = function (elm1, elm2) { return containsElement(elm1, elm2); };
    /**
     * @param {?} element
     * @param {?} selector
     * @param {?} multi
     * @return {?}
     */
    WebAnimationsDriver.prototype.query = function (element, selector, multi) {
        return invokeQuery(element, selector, multi);
    };
    /**
     * @param {?} element
     * @param {?} prop
     * @param {?=} defaultValue
     * @return {?}
     */
    WebAnimationsDriver.prototype.computeStyle = function (element, prop, defaultValue) {
        return (((window.getComputedStyle(element)))[prop]);
    };
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @return {?}
     */
    WebAnimationsDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        var /** @type {?} */ fill = delay == 0 ? 'both' : 'forwards';
        var /** @type {?} */ playerOptions = { duration: duration, delay: delay, fill: fill };
        // we check for this to avoid having a null|undefined value be present
        // for the easing (which results in an error for certain browsers #9752)
        if (easing) {
            playerOptions['easing'] = easing;
        }
        var /** @type {?} */ previousWebAnimationPlayers = (previousPlayers.filter(function (player) { return player instanceof WebAnimationsPlayer; }));
        return new WebAnimationsPlayer(element, keyframes, playerOptions, previousWebAnimationPlayers);
    };
    return WebAnimationsDriver;
}());
/**
 * @return {?}
 */
function supportsWebAnimations() {
    return typeof Element !== 'undefined' && typeof ((Element)).prototype['animate'] === 'function';
}

/**
 * @license Angular v4.4.6
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var BrowserAnimationBuilder = (function (_super) {
    __extends(BrowserAnimationBuilder, _super);
    /**
     * @param {?} rootRenderer
     * @param {?} doc
     */
    function BrowserAnimationBuilder(rootRenderer, doc) {
        var _this = _super.call(this) || this;
        _this._nextAnimationId = 0;
        var typeData = {
            id: '0',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: { animation: [] }
        };
        _this._renderer = rootRenderer.createRenderer(doc.body, typeData);
        return _this;
    }
    /**
     * @param {?} animation
     * @return {?}
     */
    BrowserAnimationBuilder.prototype.build = function (animation) {
        var /** @type {?} */ id = this._nextAnimationId.toString();
        this._nextAnimationId++;
        var /** @type {?} */ entry = Array.isArray(animation) ? sequence(animation) : animation;
        issueAnimationCommand(this._renderer, null, id, 'register', [entry]);
        return new BrowserAnimationFactory(id, this._renderer);
    };
    return BrowserAnimationBuilder;
}(AnimationBuilder));
BrowserAnimationBuilder.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
BrowserAnimationBuilder.ctorParameters = function () { return [
    { type: RendererFactory2, },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
]; };
var BrowserAnimationFactory = (function (_super) {
    __extends(BrowserAnimationFactory, _super);
    /**
     * @param {?} _id
     * @param {?} _renderer
     */
    function BrowserAnimationFactory(_id, _renderer) {
        var _this = _super.call(this) || this;
        _this._id = _id;
        _this._renderer = _renderer;
        return _this;
    }
    /**
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    BrowserAnimationFactory.prototype.create = function (element, options) {
        return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
    };
    return BrowserAnimationFactory;
}(AnimationFactory));
var RendererAnimationPlayer = (function () {
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} options
     * @param {?} _renderer
     */
    function RendererAnimationPlayer(id, element, options, _renderer) {
        this.id = id;
        this.element = element;
        this._renderer = _renderer;
        this.parentPlayer = null;
        this._started = false;
        this.totalTime = 0;
        this._command('create', options);
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    RendererAnimationPlayer.prototype._listen = function (eventName, callback) {
        return this._renderer.listen(this.element, "@@" + this.id + ":" + eventName, callback);
    };
    /**
     * @param {?} command
     * @param {...?} args
     * @return {?}
     */
    RendererAnimationPlayer.prototype._command = function (command) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return issueAnimationCommand(this._renderer, this.element, this.id, command, args);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RendererAnimationPlayer.prototype.onDone = function (fn) { this._listen('done', fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    RendererAnimationPlayer.prototype.onStart = function (fn) { this._listen('start', fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    RendererAnimationPlayer.prototype.onDestroy = function (fn) { this._listen('destroy', fn); };
    /**
     * @return {?}
     */
    RendererAnimationPlayer.prototype.init = function () { this._command('init'); };
    /**
     * @return {?}
     */
    RendererAnimationPlayer.prototype.hasStarted = function () { return this._started; };
    /**
     * @return {?}
     */
    RendererAnimationPlayer.prototype.play = function () {
        this._command('play');
        this._started = true;
    };
    /**
     * @return {?}
     */
    RendererAnimationPlayer.prototype.pause = function () { this._command('pause'); };
    /**
     * @return {?}
     */
    RendererAnimationPlayer.prototype.restart = function () { this._command('restart'); };
    /**
     * @return {?}
     */
    RendererAnimationPlayer.prototype.finish = function () { this._command('finish'); };
    /**
     * @return {?}
     */
    RendererAnimationPlayer.prototype.destroy = function () { this._command('destroy'); };
    /**
     * @return {?}
     */
    RendererAnimationPlayer.prototype.reset = function () { this._command('reset'); };
    /**
     * @param {?} p
     * @return {?}
     */
    RendererAnimationPlayer.prototype.setPosition = function (p) { this._command('setPosition', p); };
    /**
     * @return {?}
     */
    RendererAnimationPlayer.prototype.getPosition = function () { return 0; };
    return RendererAnimationPlayer;
}());
/**
 * @param {?} renderer
 * @param {?} element
 * @param {?} id
 * @param {?} command
 * @param {?} args
 * @return {?}
 */
function issueAnimationCommand(renderer, element, id, command, args) {
    return renderer.setProperty(element, "@@" + id + ":" + command, args);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ANIMATION_PREFIX = '@';
var DISABLE_ANIMATIONS_FLAG = '@.disabled';
var AnimationRendererFactory = (function () {
    /**
     * @param {?} delegate
     * @param {?} engine
     * @param {?} _zone
     */
    function AnimationRendererFactory(delegate, engine, _zone) {
        this.delegate = delegate;
        this.engine = engine;
        this._zone = _zone;
        this._currentId = 0;
        this._microtaskId = 1;
        this._animationCallbacksBuffer = [];
        this._rendererCache = new Map();
        this._cdRecurDepth = 0;
        engine.onRemovalComplete = function (element, delegate) {
            // Note: if an component element has a leave animation, and the component
            // a host leave animation, the view engine will call `removeChild` for the parent
            // component renderer as well as for the child component renderer.
            // Therefore, we need to check if we already removed the element.
            if (delegate && delegate.parentNode(element)) {
                delegate.removeChild(element.parentNode, element);
            }
        };
    }
    /**
     * @param {?} hostElement
     * @param {?} type
     * @return {?}
     */
    AnimationRendererFactory.prototype.createRenderer = function (hostElement, type) {
        var _this = this;
        var /** @type {?} */ EMPTY_NAMESPACE_ID = '';
        // cache the delegates to find out which cached delegate can
        // be used by which cached renderer
        var /** @type {?} */ delegate = this.delegate.createRenderer(hostElement, type);
        if (!hostElement || !type || !type.data || !type.data['animation']) {
            var /** @type {?} */ renderer = this._rendererCache.get(delegate);
            if (!renderer) {
                renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine);
                // only cache this result when the base renderer is used
                this._rendererCache.set(delegate, renderer);
            }
            return renderer;
        }
        var /** @type {?} */ componentId = type.id;
        var /** @type {?} */ namespaceId = type.id + '-' + this._currentId;
        this._currentId++;
        this.engine.register(namespaceId, hostElement);
        var /** @type {?} */ animationTriggers = (type.data['animation']);
        animationTriggers.forEach(function (trigger$$1) { return _this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger$$1.name, trigger$$1); });
        return new AnimationRenderer(this, namespaceId, delegate, this.engine);
    };
    /**
     * @return {?}
     */
    AnimationRendererFactory.prototype.begin = function () {
        this._cdRecurDepth++;
        if (this.delegate.begin) {
            this.delegate.begin();
        }
    };
    /**
     * @return {?}
     */
    AnimationRendererFactory.prototype._scheduleCountTask = function () {
        var _this = this;
        Zone.current.scheduleMicroTask('incremenet the animation microtask', function () { return _this._microtaskId++; });
    };
    /**
     * @param {?} count
     * @param {?} fn
     * @param {?} data
     * @return {?}
     */
    AnimationRendererFactory.prototype.scheduleListenerCallback = function (count, fn, data) {
        var _this = this;
        if (count >= 0 && count < this._microtaskId) {
            this._zone.run(function () { return fn(data); });
            return;
        }
        if (this._animationCallbacksBuffer.length == 0) {
            Promise.resolve(null).then(function () {
                _this._zone.run(function () {
                    _this._animationCallbacksBuffer.forEach(function (tuple) {
                        var fn = tuple[0], data = tuple[1];
                        fn(data);
                    });
                    _this._animationCallbacksBuffer = [];
                });
            });
        }
        this._animationCallbacksBuffer.push([fn, data]);
    };
    /**
     * @return {?}
     */
    AnimationRendererFactory.prototype.end = function () {
        var _this = this;
        this._cdRecurDepth--;
        // this is to prevent animations from running twice when an inner
        // component does CD when a parent component insted has inserted it
        if (this._cdRecurDepth == 0) {
            this._zone.runOutsideAngular(function () {
                _this._scheduleCountTask();
                _this.engine.flush(_this._microtaskId);
            });
        }
        if (this.delegate.end) {
            this.delegate.end();
        }
    };
    /**
     * @return {?}
     */
    AnimationRendererFactory.prototype.whenRenderingDone = function () { return this.engine.whenRenderingDone(); };
    return AnimationRendererFactory;
}());
AnimationRendererFactory.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
AnimationRendererFactory.ctorParameters = function () { return [
    { type: RendererFactory2, },
    { type: AnimationEngine, },
    { type: NgZone, },
]; };
var BaseAnimationRenderer = (function () {
    /**
     * @param {?} namespaceId
     * @param {?} delegate
     * @param {?} engine
     */
    function BaseAnimationRenderer(namespaceId, delegate, engine) {
        this.namespaceId = namespaceId;
        this.delegate = delegate;
        this.engine = engine;
        this.destroyNode = this.delegate.destroyNode ? function (n) { return delegate.destroyNode(n); } : null;
    }
    Object.defineProperty(BaseAnimationRenderer.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.delegate.data; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BaseAnimationRenderer.prototype.destroy = function () {
        this.engine.destroy(this.namespaceId, this.delegate);
        this.delegate.destroy();
    };
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    BaseAnimationRenderer.prototype.createElement = function (name, namespace) {
        return this.delegate.createElement(name, namespace);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BaseAnimationRenderer.prototype.createComment = function (value) { return this.delegate.createComment(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    BaseAnimationRenderer.prototype.createText = function (value) { return this.delegate.createText(value); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    BaseAnimationRenderer.prototype.appendChild = function (parent, newChild) {
        this.delegate.appendChild(parent, newChild);
        this.engine.onInsert(this.namespaceId, newChild, parent, false);
    };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    BaseAnimationRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
        this.delegate.insertBefore(parent, newChild, refChild);
        this.engine.onInsert(this.namespaceId, newChild, parent, true);
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    BaseAnimationRenderer.prototype.removeChild = function (parent, oldChild) {
        this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    };
    /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    BaseAnimationRenderer.prototype.selectRootElement = function (selectorOrNode) { return this.delegate.selectRootElement(selectorOrNode); };
    /**
     * @param {?} node
     * @return {?}
     */
    BaseAnimationRenderer.prototype.parentNode = function (node) { return this.delegate.parentNode(node); };
    /**
     * @param {?} node
     * @return {?}
     */
    BaseAnimationRenderer.prototype.nextSibling = function (node) { return this.delegate.nextSibling(node); };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    BaseAnimationRenderer.prototype.setAttribute = function (el, name, value, namespace) {
        this.delegate.setAttribute(el, name, value, namespace);
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    BaseAnimationRenderer.prototype.removeAttribute = function (el, name, namespace) {
        this.delegate.removeAttribute(el, name, namespace);
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    BaseAnimationRenderer.prototype.addClass = function (el, name) { this.delegate.addClass(el, name); };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    BaseAnimationRenderer.prototype.removeClass = function (el, name) { this.delegate.removeClass(el, name); };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?=} flags
     * @return {?}
     */
    BaseAnimationRenderer.prototype.setStyle = function (el, style$$1, value, flags) {
        this.delegate.setStyle(el, style$$1, value, flags);
    };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?=} flags
     * @return {?}
     */
    BaseAnimationRenderer.prototype.removeStyle = function (el, style$$1, flags) {
        this.delegate.removeStyle(el, style$$1, flags);
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BaseAnimationRenderer.prototype.setProperty = function (el, name, value) {
        if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
            this.disableAnimations(el, !!value);
        }
        else {
            this.delegate.setProperty(el, name, value);
        }
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    BaseAnimationRenderer.prototype.setValue = function (node, value) { this.delegate.setValue(node, value); };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    BaseAnimationRenderer.prototype.listen = function (target, eventName, callback) {
        return this.delegate.listen(target, eventName, callback);
    };
    /**
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    BaseAnimationRenderer.prototype.disableAnimations = function (element, value) {
        this.engine.disableAnimations(element, value);
    };
    return BaseAnimationRenderer;
}());
var AnimationRenderer = (function (_super) {
    __extends(AnimationRenderer, _super);
    /**
     * @param {?} factory
     * @param {?} namespaceId
     * @param {?} delegate
     * @param {?} engine
     */
    function AnimationRenderer(factory, namespaceId, delegate, engine) {
        var _this = _super.call(this, namespaceId, delegate, engine) || this;
        _this.factory = factory;
        _this.namespaceId = namespaceId;
        return _this;
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    AnimationRenderer.prototype.setProperty = function (el, name, value) {
        if (name.charAt(0) == ANIMATION_PREFIX) {
            if (name.charAt(1) == '.' && name == DISABLE_ANIMATIONS_FLAG) {
                value = value === undefined ? true : !!value;
                this.disableAnimations(el, /** @type {?} */ (value));
            }
            else {
                this.engine.process(this.namespaceId, el, name.substr(1), value);
            }
        }
        else {
            this.delegate.setProperty(el, name, value);
        }
    };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    AnimationRenderer.prototype.listen = function (target, eventName, callback) {
        var _this = this;
        if (eventName.charAt(0) == ANIMATION_PREFIX) {
            var /** @type {?} */ element = resolveElementFromTarget(target);
            var /** @type {?} */ name = eventName.substr(1);
            var /** @type {?} */ phase = '';
            // @listener.phase is for trigger animation callbacks
            // @@listener is for animation builder callbacks
            if (name.charAt(0) != ANIMATION_PREFIX) {
                _a = parseTriggerCallbackName(name), name = _a[0], phase = _a[1];
            }
            return this.engine.listen(this.namespaceId, element, name, phase, function (event) {
                var /** @type {?} */ countId = ((event))['_data'] || -1;
                _this.factory.scheduleListenerCallback(countId, callback, event);
            });
        }
        return this.delegate.listen(target, eventName, callback);
        var _a;
    };
    return AnimationRenderer;
}(BaseAnimationRenderer));
/**
 * @param {?} target
 * @return {?}
 */
function resolveElementFromTarget(target) {
    switch (target) {
        case 'body':
            return document.body;
        case 'document':
            return document;
        case 'window':
            return window;
        default:
            return target;
    }
}
/**
 * @param {?} triggerName
 * @return {?}
 */
function parseTriggerCallbackName(triggerName) {
    var /** @type {?} */ dotIndex = triggerName.indexOf('.');
    var /** @type {?} */ trigger$$1 = triggerName.substring(0, dotIndex);
    var /** @type {?} */ phase = triggerName.substr(dotIndex + 1);
    return [trigger$$1, phase];
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var InjectableAnimationEngine = (function (_super) {
    __extends(InjectableAnimationEngine, _super);
    /**
     * @param {?} driver
     * @param {?} normalizer
     */
    function InjectableAnimationEngine(driver, normalizer) {
        return _super.call(this, driver, normalizer) || this;
    }
    return InjectableAnimationEngine;
}(AnimationEngine));
InjectableAnimationEngine.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
InjectableAnimationEngine.ctorParameters = function () { return [
    { type: AnimationDriver, },
    { type: AnimationStyleNormalizer, },
]; };
/**
 * @return {?}
 */
function instantiateSupportedAnimationDriver() {
    if (supportsWebAnimations()) {
        return new WebAnimationsDriver();
    }
    return new NoopAnimationDriver();
}
/**
 * @return {?}
 */
function instantiateDefaultStyleNormalizer() {
    return new WebAnimationsStyleNormalizer();
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [
    { provide: AnimationBuilder, useClass: BrowserAnimationBuilder },
    { provide: AnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
    { provide: AnimationEngine, useClass: InjectableAnimationEngine }, {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [ɵDomRendererFactory2, AnimationEngine, NgZone]
    }
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
var BROWSER_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useFactory: instantiateSupportedAnimationDriver }
].concat(SHARED_ANIMATION_PROVIDERS);
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{ provide: AnimationDriver, useClass: NoopAnimationDriver }].concat(SHARED_ANIMATION_PROVIDERS);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental Animation support is experimental.
 */
var BrowserAnimationsModule = (function () {
    function BrowserAnimationsModule() {
    }
    return BrowserAnimationsModule;
}());
BrowserAnimationsModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserModule],
                providers: BROWSER_ANIMATIONS_PROVIDERS,
            },] },
];
/**
 * @nocollapse
 */
BrowserAnimationsModule.ctorParameters = function () { return []; };
/**
 * \@experimental Animation support is experimental.
 */
var NoopAnimationsModule = (function () {
    function NoopAnimationsModule() {
    }
    return NoopAnimationsModule;
}());
NoopAnimationsModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserModule],
                providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
            },] },
];
/**
 * @nocollapse
 */
NoopAnimationsModule.ctorParameters = function () { return []; };

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
        this.componentRef = (this.base.componentFactoryResolver
            .resolveComponentFactory(this.component)
            .create(this.base.injector));
        this.base.appRef.attachView(this.componentRef.hostView);
        this.domElem = (((this.componentRef.hostView))
            .rootNodes[0]);
        document.body.appendChild(this.domElem);
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
        }, 180);
    }
    /**
     * @return {?}
     */
    setShow() {
        this.state = 'enter';
        setTimeout(_ => {
            this._show = true;
        }, 180);
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
        }, 180);
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
                            animate('150ms linear')
                        ]),
                        state('leave', style({ opacity: 0, transform: 'scale(0)' })),
                        transition('* => leave', [
                            style({ opacity: 1, transform: 'scale(1)' }),
                            animate('150ms linear')
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
    constructor() {
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
        this.setPopPosition();
    }
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'atPopover',
                template: `
    <div class="at-popover">
  <span (mouseenter)="mouseOver()" (mouseleave)="mouseOut()" (click)="activePop()" class="at-popover__trigger" #trigger>
  <ng-content select="[popTrigger]">
  </ng-content>
</span>
      <div #popover (mouseenter)="mouseOver()" (mouseleave)="mouseOut()" [ngStyle]="{'display': pop ? '' :'none'}"
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
PopoverComponent.ctorParameters = () => [];
PopoverComponent.propDecorators = {
    'title': [{ type: Input },],
    'trigger': [{ type: Input },],
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

class AtModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            providers: [AtNotificationService,
                AtMessageService, AtMessageContainerService,
                AtModalService, ModalBaseService,
                ComponentCreatorBase, NotificationBaseService],
            ngModule: AtModule,
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
                ],
                entryComponents: [NotificationComponent, NotificationContainerComponent,
                    MessageContainerComponent, MessageComponent,
                    ModalComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    BrowserModule, BrowserAnimationsModule
                ],
                providers: [AtGlobalMonitorService,]
            },] },
];
/**
 * @nocollapse
 */
AtModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { AtModule, AlertComponent as ɵbg, DropDownAnimation as ɵv, FadeAnimation as ɵw, TagAnimation as ɵo, AtGlobalMonitorService as ɵbj, BadgeComponent as ɵbh, AtBreadItemDirective as ɵbs, BreadcrumbComponent as ɵbr, ButtonGroupComponent as ɵc, ButtonComponent as ɵa, HollowDirective as ɵb, CheckboxGroupComponent as ɵr, CheckboxComponent as ɵq, ComponentCreator as ɵcg, ComponentCreatorBase as ɵch, DropdownComponent as ɵbb, AtFormContentDirective as ɵcc, AtFormErrorDirective as ɵcd, AtFormFeedbackDirective as ɵce, AtFormItemDirective as ɵca, AtFormLabelDirective as ɵcb, AtFormDirective as ɵbz, FormComponent as ɵby, ColComponent as ɵm, RowComponent as ɵl, IconComponent as ɵp, InputComponent as ɵs, DropMenuListComponent as ɵbd, DropdownMenuItemComponent as ɵbc, InlineMenuComponent as ɵk, MenuItemGroupComponent as ɵg, MenuItemComponent as ɵe, MenuListComponent as ɵh, MenuComponent as ɵd, SubMenuComponent as ɵf, AtMessageContainerService as ɵck, AtMessageService as ɵcj, MessageContainerComponent as ɵbt, MessageComponent as ɵbu, AtModalService as ɵcl, ModalBaseService as ɵcm, ModalComponent as ɵbi, NotificationBaseService as ɵci, NotificationContainerComponent as ɵbf, AtNotificationService as ɵcf, NotificationComponent as ɵbe, PagenationComponent as ɵbq, PopoverComponent as ɵbv, ProgressComponent as ɵbw, RadioButtonComponent as ɵt, RadioGroupComponent as ɵi, RadioComponent as ɵj, OptionComponent as ɵx, SelectComponent as ɵu, SliderComponent as ɵz, SwitchComponent as ɵy, AtTbodyTrDirective as ɵbo, AtTbodyDirective as ɵbm, AtTdDirective as ɵbn, AtThDirective as ɵbl, AtTheadDirective as ɵbp, TableComponent as ɵbk, TagComponent as ɵn, TextareaComponent as ɵba, TooltipComponent as ɵbx };
