import { OnInit } from '@angular/core';
export declare class BadgeComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    private _atValue;
    atType: 'info' | 'warning' | 'error' | 'success';
    max: any;
    dot: boolean;
    show: boolean;
    atValue: any;
    ngAfterViewInit(): void;
}
