import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare type AtButtonType = 'default' | 'primary' | 'text' | 'success' | 'error' | 'warning' | 'info';
export declare type AtButtonShape = 'circle' | null;
export declare type AtButtonSize = 'small' | 'large' | 'smaller';
export declare class ButtonComponent implements OnInit {
    private _elementRef;
    private _renderer;
    atType: AtButtonType;
    atShape: AtButtonShape;
    atIcon: string;
    iconLoading: boolean;
    size: AtButtonSize;
    text: any;
    _type: AtButtonType;
    _el: HTMLElement;
    _shape: AtButtonShape;
    nativeElement: HTMLElement;
    _prefixCls: string;
    _classList: any[];
    _iconLoading: boolean;
    _icon: string;
    _size: AtButtonSize;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    _setClassMap(): void;
    showText: boolean;
    ngAfterContentInit(): void;
}
