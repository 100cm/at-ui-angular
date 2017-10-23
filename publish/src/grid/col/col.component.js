import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
export class ColComponent {
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
function ColComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ColComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ColComponent.ctorParameters;
    /** @type {?} */
    ColComponent.propDecorators;
    /** @type {?} */
    ColComponent.prototype._span;
    /** @type {?} */
    ColComponent.prototype._offset;
    /** @type {?} */
    ColComponent.prototype._el;
    /** @type {?} */
    ColComponent.prototype._classList;
    /** @type {?} */
    ColComponent.prototype._elementRef;
    /** @type {?} */
    ColComponent.prototype._renderer;
}
