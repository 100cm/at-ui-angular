import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RadioGroupComponent } from "./radio-group/radio-group.component";
export declare class RadioComponent implements OnInit {
    _elementRef: ElementRef;
    _RadioGroup: RadioGroupComponent;
    _renderer: Renderer2;
    private _atValue;
    constructor(_elementRef: ElementRef, _RadioGroup: RadioGroupComponent, _renderer: Renderer2);
    _checked: boolean;
    _disabled: boolean;
    _el: any;
    atValue: any;
    disabled: boolean;
    checked: boolean;
    ngOnInit(): void;
    _prefixCls: string;
    onClick(e: any): void;
}
