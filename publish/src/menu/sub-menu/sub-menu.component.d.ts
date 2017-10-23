import { ElementRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { MenuComponent } from "../menu.component";
export declare class SubMenuComponent implements OnInit {
    private _elementRef;
    parent: MenuComponent;
    private _renderer;
    ngOnInit(): void;
    _el: any;
    nativeElement: any;
    _active: boolean;
    _isOpen: boolean;
    _popoverCss: {
        left: string;
        right: string;
        top: string;
    };
    timeout: any;
    readonly expandState: string;
    isOpen: boolean;
    constructor(_elementRef: ElementRef, parent: MenuComponent, _renderer: Renderer2);
    item_class: boolean;
    setActive(): void;
    readonly activeCls: boolean;
    readonly OpenCls: boolean;
    active: boolean;
    onMouseEnterEvent(e: any): void;
    onMouseLeaveEvent(e: any): void;
    popover: ViewContainerRef;
    resetDropDownPosition(e: any): void;
    show(): void;
}
