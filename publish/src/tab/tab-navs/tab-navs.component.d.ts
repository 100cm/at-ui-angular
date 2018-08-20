import { OnInit, QueryList } from '@angular/core';
import { TabLabelDirective } from "../tab-label.directive";
import { AtTabInkDirective } from "../at-tab-ink.directive";
export declare class TabNavsComponent implements OnInit {
    _labelWrappers: QueryList<TabLabelDirective>;
    _inkBar: AtTabInkDirective;
    selected_index: number;
    _selected_index: number;
    _position_modal: string;
    position: string;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    alignInk(index: any): void;
}
