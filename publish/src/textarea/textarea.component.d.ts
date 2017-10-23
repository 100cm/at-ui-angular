import { OnInit } from '@angular/core';
export declare class TextareaComponent implements OnInit {
    private _value;
    constructor();
    ngOnInit(): void;
    value: string;
    onChange: any;
    onTouched: any;
    atPlaceholder: string;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
}
