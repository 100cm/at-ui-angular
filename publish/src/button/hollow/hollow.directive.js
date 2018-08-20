/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var HollowDirective = (function () {
    function HollowDirective(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    HollowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el, "at-btn--" + this.atType + "--hollow");
    };
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
    return HollowDirective;
}());
export { HollowDirective };
function HollowDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HollowDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HollowDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HollowDirective.propDecorators;
    /** @type {?} */
    HollowDirective.prototype._el;
    /** @type {?} */
    HollowDirective.prototype.nativeElement;
    /** @type {?} */
    HollowDirective.prototype.atType;
    /** @type {?} */
    HollowDirective.prototype._elementRef;
    /** @type {?} */
    HollowDirective.prototype._renderer;
}
