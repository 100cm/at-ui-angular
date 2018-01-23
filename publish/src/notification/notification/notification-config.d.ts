export declare type NotificationConfigType = 'success' | 'info' | 'error' | 'warning' | 'loading';
export declare class NotificationConfig {
    index: any;
    title: string;
    duration: number;
    icon: string;
    message: string;
    showClose: boolean;
    state: 'enter' | 'leave';
    type: NotificationConfigType;
    guid(): string;
    constructor(options: any, type?: NotificationConfigType);
}
