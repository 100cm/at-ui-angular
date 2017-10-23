import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MessageContainerComponent } from '../message-container/message-container.component';
import { StatusIconType } from '../../icon/icon-status-type';
export class MessageComponent {
    /**
     * @param {?} message_container
     */
    constructor(message_container) {
        this.message_container = message_container;
        this.status = StatusIconType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        clearTimeout(this.timer);
        this.timer = setTimeout(_ => {
            this.message_container.remove(this.message.index);
        }, this.message.duration);
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'atMessage',
                templateUrl: './message.component.html',
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
/**
 * @nocollapse
 */
MessageComponent.ctorParameters = () => [
    { type: MessageContainerComponent, },
];
MessageComponent.propDecorators = {
    'message': [{ type: Input },],
};
function MessageComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MessageComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    MessageComponent.ctorParameters;
    /** @type {?} */
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
