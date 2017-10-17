import { ElementRef, OnInit } from '@angular/core';
export declare class HighLightComponent implements OnInit {
    _code: any;
    codeElement: ElementRef;
    atLanguage: string;
    atCode: any;
    ngAfterViewInit(): void;
    constructor();
    ngOnInit(): void;
}
