import { OnInit } from '@angular/core';
import { NotificationConfig } from "./notification-config";
import { NotificationContainerComponent } from "../notification-container/notification-container.component";
export declare class NotificationComponent implements OnInit {
    notificationContainer: NotificationContainerComponent;
    constructor(notificationContainer: NotificationContainerComponent);
    timer: any;
    status: {
        'info': string;
        'error': string;
        'warning': string;
        'success': string;
        'loading': string;
    };
    ngOnInit(): void;
    config: NotificationConfig;
    remove(): void;
    startRemove(): void;
    stopRemove(): void;
}
