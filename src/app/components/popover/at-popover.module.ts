import {CommonModule}        from '@angular/common';
import {NgModule}            from '@angular/core';
import {PopoverComponent}    from "./popover.component";
import {PopTriggerDirective} from "./pop-trigger.directive";
import {OverlayModule}       from "@angular/cdk/overlay";
@NgModule({
            imports: [CommonModule,OverlayModule],
            declarations: [PopoverComponent,PopTriggerDirective],
            exports: [PopoverComponent,PopTriggerDirective]
          })
export class AtPopoverModule {
}
