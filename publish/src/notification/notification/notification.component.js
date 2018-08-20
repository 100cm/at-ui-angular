/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationConfig } from "./notification-config";
import { NotificationContainerComponent } from "../notification-container/notification-container.component";
import { StatusIconType } from "../../icon/icon-status-type";
var NotificationComponent = (function () {
    function NotificationComponent(notificationContainer) {
        this.notificationContainer = notificationContainer;
        this.status = StatusIconType;
    }
    /**
     * @return {?}
     */
    NotificationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.config.duration != 0) {
            this.startRemove();
        }
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.notificationContainer.remove(this.config.index);
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.startRemove = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.duration != 0) {
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                _this.remove();
            }, this.config.duration);
        }
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.stopRemove = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.timer);
    };
    NotificationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'atNotification',
                    template: "\n    <div (mouseenter)=\"stopRemove()\" (mouseleave)=\"startRemove()\"\n         [@enterLeave]=\"config.state\"\n         class=\"at-notification-contained  at-notification--{{config.type}}\"\n         [ngClass]=\"{'at-notification--with-message ': config.message !=''}\"\n    >\n      <i class=\"icon at-notification__icon {{status[config.type]}}\"></i>\n      <div class=\"at-notification__content\"><p class=\"at-notification__title\">{{config.title}}</p>\n        <p class=\"at-notification__message\">{{config.message}}</p></div>\n      <i *ngIf=\"config.showClose\" (click)=\"remove()\" class=\"icon icon-x at-notification__close\">\n      </i>\n    </div>\n\n  ",
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
                    styles: ["\n    :host ::ng-deep .at-notification-contained {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-bottom: 15px;\n      right: 16px;\n      width: 320px;\n      padding: 8px 16px;\n      color: #3f536e;\n      background-color: #fff;\n      line-height: 1.5;\n      border-radius: 4px;\n      -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);\n      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);\n      -webkit-transition: opacity .3s, top .4s, -webkit-transform .3s;\n      transition: opacity .3s, top .4s, -webkit-transform .3s;\n      transition: opacity .3s, transform .3s, top .4s;\n      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;\n      z-index: 1010;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NotificationComponent.ctorParameters = function () { return [
        { type: NotificationContainerComponent, },
    ]; };
    NotificationComponent.propDecorators = {
        "config": [{ type: Input },],
    };
    return NotificationComponent;
}());
export { NotificationComponent };
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
