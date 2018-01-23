import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare type atMenuType = 'vertical' | 'horizontal' | 'inline';
export declare type atMenuTheme = 'light' | 'dark';
export declare class MenuComponent implements OnInit {
    private _elementRef;
    private _renderer;
    ngOnInit(): void;
    _atType: atMenuType;
    _el: any;
    nativeElement: any;
    _classList: any[];
    _prefixCls: string;
    private _theme;
    theme: atMenuTheme;
    atType: atMenuType;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    readonly verticalClass: boolean;
    readonly horizontalClass: boolean;
    readonly inlineClass: boolean;
    readonly darkTheme: boolean;
    readonly lightTheme: boolean;
}
