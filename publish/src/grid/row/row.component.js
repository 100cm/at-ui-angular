import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
export class RowComponent {
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
function RowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    RowComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RowComponent.ctorParameters;
    /** @type {?} */
    RowComponent.propDecorators;
    /** @type {?} */
    RowComponent.prototype._prefixCls;
    /** @type {?} */
    RowComponent.prototype._classList;
    /** @type {?} */
    RowComponent.prototype._el;
    /** @type {?} */
    RowComponent.prototype.nativeElement;
    /** @type {?} */
    RowComponent.prototype._flexType;
    /** @type {?} */
    RowComponent.prototype._alignType;
    /** @type {?} */
    RowComponent.prototype._noGutter;
    /** @type {?} */
    RowComponent.prototype._reverse;
    /** @type {?} */
    RowComponent.prototype._elementRef;
    /** @type {?} */
    RowComponent.prototype._renderer;
}
