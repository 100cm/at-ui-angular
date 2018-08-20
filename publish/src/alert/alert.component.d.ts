import { EventEmitter, OnInit } from '@angular/core';
export declare class AlertComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    iconType: {
        'info': string;
        'error': string;
        'warning': string;
        'success': string;
    };
    message: string;
    atType: 'info' | 'error' | 'warning' | 'success';
    desc: string;
    icon: boolean;
    closeText: string;
    state: 'shown' | 'hidden';
    closed: boolean;
    onClose: EventEmitter<boolean>;
    close(): void;
}
