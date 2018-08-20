/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var AtBreadItemComponent = (function () {
    function AtBreadItemComponent() {
        this.separator = '/';
    }
    /**
     * @return {?}
     */
    AtBreadItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AtBreadItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'at-bread-item',
                    template: "\n    <span class=\"at_breadcrumb__text\">\n      <ng-content></ng-content>\n    </span>\n    <span class=\"at-breadcrumb__separator\">{{this.separator}}</span>\n  ",
                },] },
    ];
    /** @nocollapse */
    AtBreadItemComponent.ctorParameters = function () { return []; };
    AtBreadItemComponent.propDecorators = {
        "separator": [{ type: Input },],
    };
    return AtBreadItemComponent;
}());
export { AtBreadItemComponent };
function AtBreadItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AtBreadItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AtBreadItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AtBreadItemComponent.propDecorators;
    /** @type {?} */
    AtBreadItemComponent.prototype.separator;
}
