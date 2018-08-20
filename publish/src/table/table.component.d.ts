import { ElementRef, OnInit, QueryList, TemplateRef } from '@angular/core';
import { AtThDirective } from "./at-th.directive";
export declare class TableComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    _ths: any[];
    size: 'normal' | 'large' | 'small';
    height: any;
    stripe: boolean;
    border: boolean;
    setThs: QueryList<AtThDirective>;
    atThead: TemplateRef<any>;
    atTbody: TemplateRef<any>;
    fixed_head: ElementRef;
    marginTop: number;
    ngAfterViewInit(): void;
}
