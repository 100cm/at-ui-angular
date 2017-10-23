import { ElementRef } from '@angular/core';
export declare class AtBreadItemDirective {
    private el;
    _inner: HTMLElement[];
    inited: boolean;
    constructor(el: ElementRef);
    item: boolean;
    separator: string;
    ngAfterContentInit(): void;
}
