/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
var RowComponent = (function () {
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
        get: /**
         * @return {?}
         */
        function () {
            return this._reverse;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._reverse = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowComponent.prototype, "noGutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._noGutter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._noGutter = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowComponent.prototype, "alignType", {
        get: /**
         * @return {?}
         */
        function () {
            return /** @type {?} */ ((this._alignType && "flex-" + this._alignType));
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._alignType = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RowComponent.prototype, "flexType", {
        get: /**
         * @return {?}
         */
        function () {
            return /** @type {?} */ ((this._flexType && "flex-" + this._flexType));
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._flexType = value;
            this._setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RowComponent.prototype._setClassMap = /**
     * @return {?}
     */
    function () {
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
    RowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
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
    return RowComponent;
}());
export { RowComponent };
function RowComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RowComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RowComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
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
