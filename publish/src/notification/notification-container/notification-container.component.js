/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef } from "@angular/core";
import { setTimeout } from "timers";
export class NotificationContainerComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.notifications = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    addMessage(notification) {
        this.notifications.push(notification);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        let /** @type {?} */ notification = this.notifications.find((n) => {
            return n.index == index;
        });
        notification.state = 'leave';
        this.removeByIndex(index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeByIndex(index) {
        setTimeout(_ => {
            this.notifications = this.notifications.filter((no) => {
                return (no.index != index);
            });
        }, 110);
    }
}
NotificationContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-notification-container',
                template: `
    <div class="at-notification-container">
      <atNotification *ngFor="let item of notifications" [config]="item"></atNotification>
    </div>
  `,
                styles: [
                    `:host ::ng-deep .at-notification-container {
      top: 20px;
      position: fixed;
      display: block;
      right: 16px;
      width: 320px;
      height: auto;
      z-index: 1040;
    }`
                ]
            },] },
];
/** @nocollapse */
NotificationContainerComponent.ctorParameters = () => [
    { type: ElementRef, },
];
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
