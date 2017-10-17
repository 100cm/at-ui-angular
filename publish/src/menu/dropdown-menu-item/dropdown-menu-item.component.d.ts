import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class DropdownMenuItemComponent implements OnInit {
    private _elementRef;
    private _renderer;
    ngOnInit(): void;
    _el: any;
    nativeElement: any;
    private _disabled;
    private _divided;
    disabled: boolean;
    divided: boolean;
    private _active;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    item_class: boolean;
    setActive(): void;
    readonly activeCls: boolean;
    readonly getDivide: boolean;
    readonly getDisableCls: boolean;
    active: boolean;
}
