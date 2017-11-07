import { ElementRef, OnInit } from '@angular/core';
export declare class PopoverComponent implements OnInit {
    private el;
    constructor(el: ElementRef);
    ngOnInit(): void;
    _placement: string;
    private _trigger;
    position: any;
    timer: any;
    private _title;
    title: any;
    trigger: string;
    placement: string;
    private _pop;
    pop: boolean;
    clickout(event: any): void;
    triggerEle: ElementRef;
    popover: ElementRef;
    setPopPosition(): void;
    activePop(): void;
    mouseOver(): void;
    mouseOut(): void;
    ngAfterViewChecked(): void;
}
