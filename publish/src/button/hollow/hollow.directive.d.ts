import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class HollowDirective implements OnInit {
    private _elementRef;
    private _renderer;
    _el: any;
    nativeElement: any;
    atType: string;
    ngOnInit(): void;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
