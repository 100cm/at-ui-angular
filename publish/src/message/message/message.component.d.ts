import { OnInit } from '@angular/core';
import { NotificationConfig } from "../../notification/notification/notification-config";
import { MessageContainerComponent } from "../message-container/message-container.component";
export declare class MessageComponent implements OnInit {
    private message_container;
    constructor(message_container: MessageContainerComponent);
    timer: any;
    status: {
        'info': string;
        'error': string;
        'warning': string;
        'success': string;
        'loading': string;
    };
    ngOnInit(): void;
    message: NotificationConfig;
}
