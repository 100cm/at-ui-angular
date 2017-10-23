import { EventEmitter, OnInit } from '@angular/core';
export declare class CheckboxComponent implements OnInit {
    private _label;
    private _checked;
    private _atDisabled;
    atDisabled: boolean;
    changeCheck: EventEmitter<any>;
    readonly checked: boolean;
    label: string;
    constructor();
    ngOnInit(): void;
    check(e: any): void;
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
}
