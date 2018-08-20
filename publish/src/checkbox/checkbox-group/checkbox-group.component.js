/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { CheckboxComponent } from "../checkbox.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
export class CheckboxGroupComponent {
    constructor() {
        this._checkList = [];
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
    changeList() {
        this.onChange(this._checkList);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._checkList = value;
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
     * @return {?}
     */
    ngAfterContentInit() {
    }
}
CheckboxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'atCheckboxGroup',
                template: `<div class="at-checkbox-group">
  <atCheckbox *ngFor="let option of _checkList" [label]="option.label"
              [(ngModel)]="option.checked"
              (changeCheck)="changeList()">

  </atCheckbox>
</div>
`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CheckboxGroupComponent),
                        multi: true
                    }
                ],
            },] },
];
/** @nocollapse */
CheckboxGroupComponent.ctorParameters = () => [];
CheckboxGroupComponent.propDecorators = {
    "checkbox": [{ type: ContentChildren, args: [CheckboxComponent,] },],
};
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
