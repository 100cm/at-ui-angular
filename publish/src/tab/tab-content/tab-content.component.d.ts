import { OnInit } from '@angular/core';
import { TabComponent } from "../tab.component";
export declare class TabContentComponent implements OnInit {
    _tab_component: TabComponent;
    constructor(_tab_component: TabComponent);
    title: string;
    content: any;
    ngOnInit(): void;
}
