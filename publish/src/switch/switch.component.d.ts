import { EventEmitter, OnInit } from '@angular/core';
export declare class SwitchComponent implements OnInit {
    _value: boolean;
    checkText: string;
    unCheckText: string;
    disabled: boolean;
    private _atSize;
    change: EventEmitter<boolean>;
    atSize: "small" | "large" | "normal";
    constructor();
    ngOnInit(): void;
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    switch(): void;
}
