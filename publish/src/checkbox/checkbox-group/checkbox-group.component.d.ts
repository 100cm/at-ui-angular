import { OnInit, QueryList } from '@angular/core';
import { CheckboxComponent } from "../checkbox.component";
export declare class CheckboxGroupComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    _checkList: Array<any>;
    changeList(): void;
    onChange: any;
    onTouched: any;
    writeValue(value: Array<any>): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    checkbox: QueryList<CheckboxComponent>;
    ngAfterContentInit(): void;
}
