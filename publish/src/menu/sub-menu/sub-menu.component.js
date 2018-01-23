/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostBinding, HostListener, Inject, Input, Renderer2, ViewChild, ViewContainerRef } from "@angular/core";
import { MenuComponent } from "../menu.component";
import { style, animate, state, transition, trigger } from "@angular/animations";
export class SubMenuComponent {
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
