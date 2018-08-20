/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SelectComponent } from "../select.component";
var OptionComponent = (function () {
    function OptionComponent(_selectComponent) {
        this._selectComponent = _selectComponent;
        this._selected = false;
        this._isTag = false;
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    OptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._selectComponent.addOption(this);
    };
    Object.defineProperty(OptionComponent.prototype, "isTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isTag;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isTag = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionComponent.prototype, "atValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._atValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._atValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionComponent.prototype, "atLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._atLabel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._atLabel = value;
        },
        enumerable: true,
        configurable: true
    });
    OptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'atOption',
                    template: "\n    <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    OptionComponent.ctorParameters = function () { return [
        { type: SelectComponent, },
    ]; };
    OptionComponent.propDecorators = {
        "disabled": [{ type: Input },],
        "atValue": [{ type: Input },],
        "atLabel": [{ type: Input },],
    };
    return OptionComponent;
}());
export { OptionComponent };
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
