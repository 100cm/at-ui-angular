/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationConfig } from "./notification-config";
import { NotificationContainerComponent } from "../notification-container/notification-container.component";
import { StatusIconType } from "../../icon/icon-status-type";
export class NotificationComponent {
    /**
     * @param {?} notificationContainer
     */
    constructor(notificationContainer) {
        this.notificationContainer = notificationContainer;
        this.status = StatusIconType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.config.duration != 0) {
            this.startRemove();
        }
    }
    /**
     * @return {?}
     */
    remove() {
        this.notificationContainer.remove(this.config.index);
    }
    /**
     * @return {?}
     */
    startRemove() {
        if (this.config.duration != 0) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.remove();
            }, this.config.duration);
        }
    }
    /**
     * @return {?}
     */
    stopRemove() {
        clearTimeout(this.timer);
    }
}
NotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'atNotification',
                template: `
    <div (mouseenter)="stopRemove()" (mouseleave)="startRemove()"
         [@enterLeave]="config.state"
         class="at-notification-contained  at-notification--{{config.type}}"
         [ngClass]="{'at-notification--with-message ': config.message !=''}"
    >
      <i class="icon at-notification__icon {{status[config.type]}}"></i>
      <div class="at-notification__content"><p class="at-notification__title">{{config.title}}</p>
        <p class="at-notification__message">{{config.message}}</p></div>
      <i *ngIf="config.showClose" (click)="remove()" class="icon icon-x at-notification__close">
      </i>
    </div>

  `,
                animations: [
                    trigger('enterLeave', [
                        state('enter', style({ opacity: 1, transform: 'translateX(0)' })),
                        transition('* => enter', [
                            style({ opacity: 0, transform: 'translateX(5%)' }),
                            animate('100ms linear')
                        ]),
                        state('leave', style({ opacity: 0, transform: 'translateY(-10%)' })),
                        transition('* => leave', [
                            style({ opacity: 1, transform: 'translateY(0)' }),
                            animate('100ms linear')
                        ]),
                    ])
                ],
                styles: [`
    :host ::ng-deep .at-notification-contained {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 15px;
      right: 16px;
      width: 320px;
      padding: 8px 16px;
      color: #3f536e;
      background-color: #fff;
      line-height: 1.5;
      border-radius: 4px;
      -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      -webkit-transition: opacity .3s, top .4s, -webkit-transform .3s;
      transition: opacity .3s, top .4s, -webkit-transform .3s;
      transition: opacity .3s, transform .3s, top .4s;
      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;
      z-index: 1010;
    }
  `]
            },] },
];
/** @nocollapse */
NotificationComponent.ctorParameters = () => [
    { type: NotificationContainerComponent, },
];
NotificationComponent.propDecorators = {
    "config": [{ type: Input },],
};
function NotificationComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NotificationComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NotificationComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NotificationComponent.propDecorators;
    /** @type {?} */
    NotificationComponent.prototype.timer;
    /** @type {?} */
    NotificationComponent.prototype.status;
    /** @type {?} */
    NotificationComponent.prototype.config;
    /** @type {?} */
    NotificationComponent.prototype.notificationContainer;
}
