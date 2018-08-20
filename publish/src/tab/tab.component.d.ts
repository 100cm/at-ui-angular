import { OnInit, TemplateRef } from '@angular/core';
import { TabSetComponent } from "./tab-set/tab-set.component";
export declare class TabComponent implements OnInit {
    private _tabSetComponent;
    ngOnInit(): void;
    _tabHeading: TemplateRef<any>;
    _content: TemplateRef<any>;
    tab_contents: any[];
    constructor(_tabSetComponent: TabSetComponent);
}
