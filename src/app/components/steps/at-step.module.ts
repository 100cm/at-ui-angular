import {CommonModule}   from '@angular/common';
import {NgModule}       from '@angular/core';
import {StepComponent}  from "./step/step.component";
import {StepsComponent} from "./steps.component";
@NgModule({
            imports: [CommonModule],
            declarations: [StepComponent,StepsComponent],
            exports: [StepComponent,StepsComponent]
          })
export class AtStepModule {
}
