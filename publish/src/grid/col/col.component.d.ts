import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class ColComponent implements OnInit {
    _elementRef: ElementRef;
    private _renderer;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    private _span;
    private _offset;
    _el: any;
    _classList: Array<any>;
    _col_type: 'md' | 'sm' | 'xs' | 'lg';
    colType: "md" | "sm" | "xs" | "lg";
    span: number;
    offset: number;
    ngOnInit(): void;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
}
