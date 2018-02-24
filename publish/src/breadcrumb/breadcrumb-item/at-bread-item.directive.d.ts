import { ElementRef } from '@angular/core';
import { BreadcrumbComponent } from "../breadcrumb.component";
export declare class AtBreadItemDirective {
    private el;
    private breadCrumb;
    _inner: HTMLElement[];
    inited: boolean;
    constructor(el: ElementRef, breadCrumb: BreadcrumbComponent);
}
