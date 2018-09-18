import {NgModule}                from "@angular/core";
import {CommonModule}            from "@angular/common";
import {TooltipComponent}        from "./tooltip.component";
import {TooltipTriggerDirective} from "./tooltip-trigger.directive";
import {OverlayModule}           from "@angular/cdk/overlay";

@NgModule({
            imports: [CommonModule, OverlayModule],
            declarations: [TooltipComponent, TooltipTriggerDirective],
            exports: [TooltipComponent, TooltipTriggerDirective]
          })
export class AtTooltipModule {
}
