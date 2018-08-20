/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MenuListComponent } from "../menu-list/menu-list.component";
var DropMenuListComponent = (function (_super) {
    tslib_1.__extends(DropMenuListComponent, _super);
    function DropMenuListComponent(el, render) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.render = render;
        return _this;
    }
    /**
     * @return {?}
     */
    DropMenuListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DropMenuListComponent.decorators = [
        { type: Component, args: [{
                    selector: '[atDropMenuList]',
                    template: "\n    <ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    DropMenuListComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    return DropMenuListComponent;
}(MenuListComponent));
export { DropMenuListComponent };
function DropMenuListComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DropMenuListComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DropMenuListComponent.ctorParameters;
    /** @type {?} */
    DropMenuListComponent.prototype.el;
    /** @type {?} */
    DropMenuListComponent.prototype.render;
}
