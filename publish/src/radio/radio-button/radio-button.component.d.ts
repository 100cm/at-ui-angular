import { OnInit } from '@angular/core';
import { RadioComponent } from "../radio.component";
export declare class RadioButtonComponent extends RadioComponent implements OnInit {
    fill: string;
    textColor: string;
    readonly buttonChecked: boolean;
    content_span: any;
    _prefixCls: string;
    ngOnInit(): void;
}
