/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NotificationContainerComponent } from "../../notification/notification-container/notification-container.component";
var MessageContainerComponent = (function (_super) {
    tslib_1.__extends(MessageContainerComponent, _super);
    function MessageContainerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    MessageContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MessageContainerComponent.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        var /** @type {?} */ notification = this.notifications.find(function (n) {
            return n.index == index;
        });
        if (notification) {
            notification.state = 'leave';
            setTimeout(function (_) {
                _this.notifications = _this.notifications.filter(function (no) {
                    return (no.index != index);
                });
            }, 110);
        }
    };
    MessageContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-container',
                    template: "\n    <div class=\"at-message__wrapper\">\n\n      <atMessage [message]=\"message\" *ngFor=\"let message of notifications\"></atMessage>\n\n    </div>\n  ",
                    styles: ["\n    :host ::ng-deep .at-message__wrapper {\n      z-index: 1110;\n    }\n\n    :host ::ng-deep .at-message--wrapper {\n      text-align: center;\n      margin-top: 12px;\n      pointer-events: none;\n      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;\n    }\n  "]
                },] },
    ];
    return MessageContainerComponent;
}(NotificationContainerComponent));
export { MessageContainerComponent };
function MessageContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MessageContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MessageContainerComponent.ctorParameters;
}
