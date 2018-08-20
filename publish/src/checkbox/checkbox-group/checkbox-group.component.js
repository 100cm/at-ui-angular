/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { CheckboxComponent } from "../checkbox.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
var CheckboxGroupComponent = (function () {
    function CheckboxGroupComponent() {
        this._checkList = [];
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    CheckboxGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CheckboxGroupComponent.prototype.changeList = /**
     * @return {?}
     */
    function () {
        this.onChange(this._checkList);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._checkList = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxGroupComponent.prototype.registerOnChange = /**
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
    CheckboxGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    CheckboxGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
    };
    CheckboxGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'atCheckboxGroup',
                    template: "<div class=\"at-checkbox-group\">\n  <atCheckbox *ngFor=\"let option of _checkList\" [label]=\"option.label\"\n              [(ngModel)]=\"option.checked\"\n              (changeCheck)=\"changeList()\">\n\n  </atCheckbox>\n</div>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return CheckboxGroupComponent; }),
                            multi: true
                        }
                    ],
                },] },
    ];
    /** @nocollapse */
    CheckboxGroupComponent.ctorParameters = function () { return []; };
    CheckboxGroupComponent.propDecorators = {
        "checkbox": [{ type: ContentChildren, args: [CheckboxComponent,] },],
    };
    return CheckboxGroupComponent;
}());
export { CheckboxGroupComponent };
function CheckboxGroupComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CheckboxGroupComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CheckboxGroupComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CheckboxGroupComponent.propDecorators;
    /** @type {?} */
    CheckboxGroupComponent.prototype._checkList;
    /** @type {?} */
    CheckboxGroupComponent.prototype.onChange;
    /** @type {?} */
    CheckboxGroupComponent.prototype.onTouched;
    /** @type {?} */
    CheckboxGroupComponent.prototype.checkbox;
}
