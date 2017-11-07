import { OnInit } from '@angular/core';
import { SelectComponent } from "../select.component";
export declare class OptionComponent implements OnInit {
    _selectComponent: SelectComponent;
    constructor(_selectComponent: SelectComponent);
    ngOnInit(): void;
    _atLabel: string;
    _selected: boolean;
    _atValue: any;
    private _isTag;
    isTag: boolean;
    private _disabled;
    disabled: boolean;
    atValue: any;
    atLabel: string;
}
