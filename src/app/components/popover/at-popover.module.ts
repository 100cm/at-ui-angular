import { OverlayModule }       from '@angular/cdk/overlay';
import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
import { PopTriggerDirective } from './pop-trigger.directive';
import { PopoverComponent }    from './popover.component';
@NgModule({
            imports: [CommonModule, OverlayModule],
            declarations: [PopoverComponent, PopTriggerDirective],
            exports: [PopoverComponent, PopTriggerDirective]
          })
export class AtPopoverModule {
}
