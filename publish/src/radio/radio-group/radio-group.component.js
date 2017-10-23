import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class RadioGroupComponent {
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
function RadioGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    RadioGroupComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RadioGroupComponent.ctorParameters;
    /** @type {?} */
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
