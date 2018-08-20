import { OnInit } from '@angular/core';
import { TabComponent } from "../tab.component";
export declare class TabSetComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    position: 'vertical' | 'horizontal';
    selected_index: number;
    tabs: TabComponent[];
    selectTab(i: any): void;
}
