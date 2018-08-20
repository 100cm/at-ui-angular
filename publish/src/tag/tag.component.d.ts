import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { ClassHelper } from "../utils/class-helper";
export declare class TagComponent implements OnInit, ClassHelper {
    private _elementRef;
    private _renderer;
    nativeElement: any;
    _classList: Array<any>;
    _el: HTMLElement;
    _prefixCls: string;
    viewChecked: boolean;
    private _closed;
    private _closeable;
    tagSpan: any;
    private _color;
    color: string;
    closeable: boolean;
    closed: boolean;
    onClose: EventEmitter<boolean>;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    _setClassMap(): void;
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    closeTag(): void;
}
