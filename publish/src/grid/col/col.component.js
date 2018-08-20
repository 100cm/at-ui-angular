/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
var ColComponent = (function () {
    function ColComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._classList = [];
        this._col_type = 'md';
        this._el = this._elementRef.nativeElement;
    }
    Object.defineProperty(ColComponent.prototype, "colType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._col_type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._col_type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColComponent.prototype, "span", {
        get: /**
         * @return {?}
         */
        function () {
            return this._span;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._span = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColComponent.prototype, "offset", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offset;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._offset = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    ColComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
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
    return ColComponent;
}());
export { ColComponent };
function ColComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
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
    ColComponent.prototype._col_type;
    /** @type {?} */
    ColComponent.prototype._elementRef;
    /** @type {?} */
    ColComponent.prototype._renderer;
}
