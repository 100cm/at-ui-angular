/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NotificationConfig } from "../../notification/notification/notification-config";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MessageContainerComponent } from "../message-container/message-container.component";
import { StatusIconType } from "../../icon/icon-status-type";
var MessageComponent = (function () {
    function MessageComponent(message_container) {
        this.message_container = message_container;
        this.status = StatusIconType;
    }
    /**
     * @return {?}
     */
    MessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function (_) {
            _this.message_container.remove(_this.message.index);
        }, this.message.duration);
    };
    MessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'atMessage',
                    template: "\n    <div class=\"at-message--wrapper\" [@enterLeave]=\"message.state\">\n      <div class=\"at-message at-message--{{message.type}}\">\n        <i class=\"icon at-message__icon {{status[message.type]}}\"></i>\n        <span class=\"at-message__content\">\n      {{message.message}}\n    </span>\n      </div>\n    </div>\n  ",
                    animations: [
                        trigger('enterLeave', [
                            state('enter', style({ opacity: 1, transform: 'translateY(0)' })),
                            transition('* => enter', [
                                style({ opacity: 0, transform: 'translateY(-50%)' }),
                                animate('100ms linear')
                            ]),
                            state('leave', style({ opacity: 0, transform: 'translateY(-50%)' })),
                            transition('* => leave', [
                                style({ opacity: 1, transform: 'translateY(0)' }),
                                animate('100ms linear')
                            ]),
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = function () { return [
        { type: MessageContainerComponent, },
    ]; };
    MessageComponent.propDecorators = {
        "message": [{ type: Input },],
    };
    return MessageComponent;
}());
export { MessageComponent };
function MessageComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MessageComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MessageComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MessageComponent.propDecorators;
    /** @type {?} */
    MessageComponent.prototype.timer;
    /** @type {?} */
    MessageComponent.prototype.status;
    /** @type {?} */
    MessageComponent.prototype.message;
    /** @type {?} */
    MessageComponent.prototype.message_container;
}
