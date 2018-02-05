import { ElementRef, OnInit } from '@angular/core';
import { StepsComponent } from "../steps.component";
export declare class StepComponent implements OnInit {
    private parent;
    el: ElementRef;
    constructor(parent: StepsComponent, el: ElementRef);
    ngOnInit(): void;
    icon: any;
    status: 'finish' | 'process' | 'wait' | 'success' | 'error';
    title: string;
    description: string;
    readonly finnalStatus: string;
}
