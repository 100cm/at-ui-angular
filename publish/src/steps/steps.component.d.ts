import { OnInit, QueryList } from '@angular/core';
import { StepComponent } from "./step/step.component";
export declare class StepsComponent implements OnInit {
    _direction: 'horizontal' | 'vertical';
    steps: Array<StepComponent>;
    margin: number;
    _current: number;
    current: number;
    direction: "vertical" | "horizontal";
    stepList: QueryList<any>;
    constructor();
    ngOnInit(): void;
    addStep(step: StepComponent): void;
    readonly marginPx: string;
    stepWidth(i: any): string;
    isLast(i: any): boolean;
    ngAfterViewInit(): void;
}
