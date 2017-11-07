import { OnInit, QueryList, TemplateRef } from '@angular/core';
import { AtBreadItemDirective } from "./breadcrumb-item/at-bread-item.directive";
export declare class BreadcrumbComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    separator: string;
    breadItem: TemplateRef<any>;
    setThs: QueryList<AtBreadItemDirective>;
}
