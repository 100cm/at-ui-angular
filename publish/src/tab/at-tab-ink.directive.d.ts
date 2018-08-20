import { Renderer2, ElementRef, NgZone } from '@angular/core';
export declare class AtTabInkDirective {
    private _renderer;
    private _elementRef;
    private _ngZone;
    _atTabsInkBar: boolean;
    atAnimated: boolean;
    atPositionMode: 'horizontal' | 'vertical';
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _ngZone: NgZone);
    alignToElement(element: HTMLElement): void;
    show(): void;
    setDisplay(value: any): void;
    hide(): void;
    _getLeftPosition(element: HTMLElement): string;
    _getElementWidth(element: HTMLElement): string;
    _getTopPosition(element: HTMLElement): string;
    _getElementHeight(element: HTMLElement): string;
}
