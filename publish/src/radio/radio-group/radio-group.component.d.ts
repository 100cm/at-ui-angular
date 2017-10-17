import { OnInit } from '@angular/core';
import { RadioComponent } from "../radio.component";
export declare class RadioGroupComponent implements OnInit {
    constructor();
    private _size;
    radios: RadioComponent[];
    _value: string;
    ngOnInit(): void;
    size: string;
    addRadio(radio: any): void;
    onChange: any;
    onTouched: any;
    selectRadio(radioComponent: RadioComponent): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    updateValue(value: any): void;
    ngAfterContentInit(): void;
}
