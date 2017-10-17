import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ClassHelper } from "../../utils/class-helper";
export declare type RowFlexType = 'center' | 'end' | 'start' | 'around' | 'between';
export declare type RowFlexAlign = 'top' | 'middle' | 'bottom';
export declare class RowComponent implements OnInit, ClassHelper {
    private _elementRef;
    private _renderer;
    _prefixCls: string;
    _classList: Array<any>;
    _el: HTMLElement;
    nativeElement: any;
    private _flexType;
    private _alignType;
    private _noGutter;
    private _reverse;
    reverse: boolean;
    noGutter: boolean;
    alignType: RowFlexAlign;
    flexType: RowFlexType;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    _setClassMap(): void;
    ngOnInit(): void;
}
