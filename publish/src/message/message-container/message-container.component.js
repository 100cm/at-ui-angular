import { Component } from '@angular/core';
import { NotificationContainerComponent } from '../../notification/notification-container/notification-container.component';
export class MessageContainerComponent extends NotificationContainerComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        let /** @type {?} */ notification = this.notifications.find((n) => {
            return n.index == index;
        });
        if (notification) {
            notification.state = 'leave';
            setTimeout(_ => {
                this.notifications = this.notifications.filter((no) => {
                    return (no.index != index);
                });
            }, 110);
        }
    }
}
MessageContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-message-container',
                templateUrl: './message-container.component.html',
                styles: [`
    :host ::ng-deep .at-message__wrapper {
      z-index: 1110;
    }

    :host ::ng-deep .at-message--wrapper {
      text-align: center;
      margin-top: 12px;
      pointer-events: none;
      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
MessageContainerComponent.ctorParameters = () => [];
function MessageContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MessageContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    MessageContainerComponent.ctorParameters;
}
