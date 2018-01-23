import { ElementRef, OnInit } from '@angular/core';
import { NotificationConfig } from "../notification/notification-config";
export declare class NotificationContainerComponent implements OnInit {
    private el;
    constructor(el: ElementRef);
    ngOnInit(): void;
    notifications: Array<NotificationConfig>;
    addMessage(notification: any): void;
    remove(index: any): void;
    removeByIndex(index: any): void;
}
