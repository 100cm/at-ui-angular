/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { StepsComponent } from "../steps.component";
var StepComponent = (function () {
    function StepComponent(parent, el) {
        this.parent = parent;
        this.el = el;
        this.status = 'wait';
        this.title = '';
        this.description = '';
        this.parent.addStep(this);
    }
    /**
     * @return {?}
     */
    StepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(StepComponent.prototype, "finnalStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    StepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'at-step',
                    template: "\n    <ng-content>\n\n    </ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    StepComponent.ctorParameters = function () { return [
        { type: StepsComponent, },
        { type: ElementRef, },
    ]; };
    StepComponent.propDecorators = {
        "icon": [{ type: Input },],
        "title": [{ type: Input },],
        "description": [{ type: Input },],
    };
    return StepComponent;
}());
export { StepComponent };
function StepComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    StepComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    StepComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    StepComponent.propDecorators;
    /** @type {?} */
    StepComponent.prototype.icon;
    /** @type {?} */
    StepComponent.prototype.status;
    /** @type {?} */
    StepComponent.prototype.title;
    /** @type {?} */
    StepComponent.prototype.description;
    /** @type {?} */
    StepComponent.prototype.parent;
    /** @type {?} */
    StepComponent.prototype.el;
}
