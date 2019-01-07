import { OverlayModule }           from '@angular/cdk/overlay';
import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
import { TooltipTriggerDirective } from './tooltip-trigger.directive';
import { TooltipComponent }        from './tooltip.component';

@NgModule({
            imports: [CommonModule, OverlayModule],
            declarations: [TooltipComponent, TooltipTriggerDirective],
            exports: [TooltipComponent, TooltipTriggerDirective]
          })
export class AtTooltipModule {
}
