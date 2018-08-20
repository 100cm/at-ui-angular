/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { StepsComponent } from "../steps.component";
export class StepComponent {
    /**
     * @param {?} parent
     * @param {?} el
     */
    constructor(parent, el) {
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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get finnalStatus() {
        return '';
    }
}
StepComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-step',
                template: `
    <ng-content>

    </ng-content>
  `,
            },] },
];
/** @nocollapse */
StepComponent.ctorParameters = () => [
    { type: StepsComponent, },
    { type: ElementRef, },
];
StepComponent.propDecorators = {
    "icon": [{ type: Input },],
    "title": [{ type: Input },],
    "description": [{ type: Input },],
};
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
