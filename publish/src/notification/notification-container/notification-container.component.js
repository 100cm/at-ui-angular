/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { setTimeout } from "timers";
var NotificationContainerComponent = (function () {
    function NotificationContainerComponent(el) {
        this.el = el;
        this.notifications = [];
    }
    /**
     * @return {?}
     */
    NotificationContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} notification
     * @return {?}
     */
    NotificationContainerComponent.prototype.addMessage = /**
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        this.notifications.push(notification);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NotificationContainerComponent.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ notification = this.notifications.find(function (n) {
            return n.index == index;
        });
        notification.state = 'leave';
        this.removeByIndex(index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NotificationContainerComponent.prototype.removeByIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        setTimeout(function (_) {
            _this.notifications = _this.notifications.filter(function (no) {
                return (no.index != index);
            });
        }, 110);
    };
    NotificationContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-notification-container',
                    template: "\n    <div class=\"at-notification-container\">\n      <atNotification *ngFor=\"let item of notifications\" [config]=\"item\"></atNotification>\n    </div>\n  ",
                    styles: [
                        ":host ::ng-deep .at-notification-container {\n      top: 20px;\n      position: fixed;\n      display: block;\n      right: 16px;\n      width: 320px;\n      height: auto;\n      z-index: 1040;\n    }"
                    ]
                },] },
    ];
    /** @nocollapse */
    NotificationContainerComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return NotificationContainerComponent;
}());
export { NotificationContainerComponent };
function NotificationContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NotificationContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NotificationContainerComponent.ctorParameters;
    /** @type {?} */
    NotificationContainerComponent.prototype.notifications;
    /** @type {?} */
    NotificationContainerComponent.prototype.el;
}
