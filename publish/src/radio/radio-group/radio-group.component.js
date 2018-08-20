/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
var RadioGroupComponent = (function () {
    function RadioGroupComponent() {
        this._size = 'common';
        this.radios = [];
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    RadioGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(RadioGroupComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} radio
     * @return {?}
     */
    RadioGroupComponent.prototype.addRadio = /**
     * @param {?} radio
     * @return {?}
     */
    function (radio) {
        this.radios.push(radio);
    };
    /**
     * @param {?} radioComponent
     * @return {?}
     */
    RadioGroupComponent.prototype.selectRadio = /**
     * @param {?} radioComponent
     * @return {?}
     */
    function (radioComponent) {
        this.updateValue(radioComponent.atValue);
        this.onChange(radioComponent.atValue);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioGroupComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this._value === value) {
            return;
        }
        this._value = value;
        this.radios.forEach(function (item) {
            item.checked = item.atValue === _this._value;
        });
    };
    /**
     * @return {?}
     */
    RadioGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.radios.forEach(function (radio) {
            if (_this.size) {
                radio._renderer.addClass(radio._el, radio._prefixCls + "--" + _this.size);
            }
        });
    };
    RadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'atRadioGroup',
                    template: "<div class=\"at-radio-group\">\n    <ng-content>\n\n    </ng-content>\n  </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return RadioGroupComponent; }),
                            multi: true
                        }
                    ],
                },] },
    ];
    /** @nocollapse */
    RadioGroupComponent.ctorParameters = function () { return []; };
    RadioGroupComponent.propDecorators = {
        "size": [{ type: Input },],
    };
    return RadioGroupComponent;
}());
export { RadioGroupComponent };
function RadioGroupComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RadioGroupComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RadioGroupComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    RadioGroupComponent.propDecorators;
    /** @type {?} */
    RadioGroupComponent.prototype._size;
    /** @type {?} */
    RadioGroupComponent.prototype.radios;
    /** @type {?} */
    RadioGroupComponent.prototype._value;
    /** @type {?} */
    RadioGroupComponent.prototype.onChange;
    /** @type {?} */
    RadioGroupComponent.prototype.onTouched;
}
