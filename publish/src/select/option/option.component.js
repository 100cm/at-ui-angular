/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SelectComponent } from "../select.component";
export class OptionComponent {
    /**
     * @param {?} _selectComponent
     */
    constructor(_selectComponent) {
        this._selectComponent = _selectComponent;
        this._selected = false;
        this._isTag = false;
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._selectComponent.addOption(this);
    }
    /**
     * @return {?}
     */
    get isTag() {
        return this._isTag;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isTag(value) {
        this._isTag = value;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
    }
    /**
     * @return {?}
     */
    get atValue() {
        return this._atValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atValue(value) {
        this._atValue = value;
    }
    /**
     * @return {?}
     */
    get atLabel() {
        return this._atLabel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set atLabel(value) {
        this._atLabel = value;
    }
}
OptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'atOption',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
OptionComponent.ctorParameters = () => [
    { type: SelectComponent, },
];
OptionComponent.propDecorators = {
    "disabled": [{ type: Input },],
    "atValue": [{ type: Input },],
    "atLabel": [{ type: Input },],
};
function OptionComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    OptionComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    OptionComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    OptionComponent.propDecorators;
    /** @type {?} */
    OptionComponent.prototype._atLabel;
    /** @type {?} */
    OptionComponent.prototype._selected;
    /** @type {?} */
    OptionComponent.prototype._atValue;
    /** @type {?} */
    OptionComponent.prototype._isTag;
    /** @type {?} */
    OptionComponent.prototype._disabled;
    /** @type {?} */
    OptionComponent.prototype._selectComponent;
}
