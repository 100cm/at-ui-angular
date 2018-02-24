import { OnInit, TemplateRef } from '@angular/core';
import { AtBreadItemDirective } from "./breadcrumb-item/at-bread-item.directive";
export declare class BreadcrumbComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    items: Array<AtBreadItemDirective>;
    separator: string;
    breadItem: TemplateRef<any>;
}
