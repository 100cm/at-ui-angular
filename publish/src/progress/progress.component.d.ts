import { OnInit } from '@angular/core';
export declare class ProgressComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    private _width;
    width: number;
    statusIcon: {
        'info': string;
        'error': string;
        'warning': string;
        'success': string;
        'loading': string;
    };
    stroke: number;
    status: string;
}
