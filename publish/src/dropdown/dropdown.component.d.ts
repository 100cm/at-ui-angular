import { ElementRef, OnInit, EventEmitter } from '@angular/core';
export declare class DropdownComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    _placement: string;
    dropDown: boolean;
    position: any;
    time: any;
    private _dropDownPosition;
    trigger: 'click' | 'hover';
    dropDownChange: EventEmitter<boolean>;
    dropDownPosition: "top" | "bottom";
    placement: string;
    emitDropDown(): void;
    triggerRef: ElementRef;
    popoverRef: ElementRef;
    ngAfterContentInit(): void;
    onDocumentClick(e: any): void;
    hide(e: any): void;
    show(e: any): void;
    setdropDown(): void;
    mouseEnter(e: any): void;
    mouseLeave(e: any): void;
    ngAfterViewChecked(): void;
    changePosition(): void;
}
