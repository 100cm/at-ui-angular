import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {PopoverComponent}                       from "../popover/popover.component";
import {TooltipTriggerDirective}                from "./tooltip-trigger.directive";
import {Observable, fromEvent}                  from "rxjs";

import {mapTo, merge}  from "rxjs/operators";
import {fadeAnimation} from "../animations/fade-animation";


@Component({
             selector: 'at-tooltip',
             template: `
               <div class="at-tooltip">
                 <ng-content select="[pop-trigger]"></ng-content>
               </div>
               <ng-template
                 #overlay="cdkConnectedOverlay"
                 cdkConnectedOverlay
                 [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
                 [cdkConnectedOverlayPositions]="_positions"
                 [cdkConnectedOverlayOrigin]="_atOrigin"
                 (backdropClick)="_hide()"
                 (detach)="_hide()"
                 [cdkConnectedOverlayMinWidth]="_triggerWidth"
                 (positionChange)="_onPositionChange($event)"
                 [cdkConnectedOverlayOpen]="atVisible"
               >
                 <div
                   [@fadeAnimation]="''+($visible | async)"
                   (mouseenter)="_onMouseEnterEvent($event)"
                   (mouseleave)="_onMouseLeaveEvent($event)"
                   [style.minWidth.px]="_triggerWidth"
                   (click)="_clickDropDown($event)">
                   <div class="at-tooltip__popper " [ngClass]="placeClass">
                     <div class="at-tooltip__arrow"></div>
                     <div class="at-tooltip__content">
                       <ng-content></ng-content>
                     </div>
                   </div>
                   <!--<ng-content select="[at-dropdown-custom]"></ng-content>-->
                 </div>
               </ng-template>

             `,
             animations: [fadeAnimation],

           })
export class TooltipComponent extends PopoverComponent implements OnInit {
  _prefix = "at-tooltip--"
}
