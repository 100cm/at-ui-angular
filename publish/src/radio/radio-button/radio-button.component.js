/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, Input, ViewChild } from '@angular/core';
import { RadioComponent } from "../radio.component";
var RadioButtonComponent = (function (_super) {
    tslib_1.__extends(RadioButtonComponent, _super);
    function RadioButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._prefixCls = 'at-radio-button';
        return _this;
    }
    Object.defineProperty(RadioButtonComponent.prototype, "buttonChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RadioButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.fill) {
            this._renderer.setStyle(this.content_span.nativeElement, 'background-color', this.fill);
            this._renderer.setStyle(this.content_span.nativeElement, 'border-color', this.fill);
        }
        if (this.textColor) {
            this._renderer.setStyle(this.content_span.nativeElement, 'color', this.textColor);
        }
    };
    RadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[atRadioButton]',
                    template: "<input type=\"radio\" [disabled]=\"disabled\" class=\"at-radio-button__original\" [(ngModel)]=\"checked\">\n  <span #content_span class=\"at-radio-button__inner\">\n  <ng-content>\n\n</ng-content>\n</span>\n  ",
                },] },
    ];
    /** @nocollapse */
    RadioButtonComponent.propDecorators = {
        "fill": [{ type: Input },],
        "textColor": [{ type: Input },],
        "buttonChecked": [{ type: HostBinding, args: ['class.at-radio--checked',] },],
        "content_span": [{ type: ViewChild, args: ['content_span',] },],
    };
    return RadioButtonComponent;
}(RadioComponent));
export { RadioButtonComponent };
function RadioButtonComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RadioButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RadioButtonComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    RadioButtonComponent.propDecorators;
    /** @type {?} */
    RadioButtonComponent.prototype.fill;
    /** @type {?} */
    RadioButtonComponent.prototype.textColor;
    /** @type {?} */
    RadioButtonComponent.prototype.content_span;
    /** @type {?} */
    RadioButtonComponent.prototype._prefixCls;
}
