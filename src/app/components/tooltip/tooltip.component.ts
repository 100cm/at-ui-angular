import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {PopoverComponent} from "../popover/popover.component";
import {TooltipTriggerDirective} from "./tooltip-trigger.directive";
import {Observable, fromEvent} from "rxjs";

import {mapTo, merge} from "rxjs/operators";
import {fadeAnimation} from "../animations/fade-animation";


@Component({
  selector: 'atTooltip',
  template: `
    <div class="at-tooltip">
      <span class="at-tooltip__trigger">
      <ng-content></ng-content>
    </span>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOrigin]="_atOrigin"
      (backdropClick)="_hide()"
      [cdkConnectedOverlayMinWidth]="_triggerWidth"
      (positionChange)="_onPositionChange($event)"
      [cdkConnectedOverlayOpen]="atVisible"
    >
      <div
        (mouseenter)="_onMouseEnterEvent($event)"
        (mouseleave)="_onMouseLeaveEvent($event)"
        [style.minWidth.px]="_triggerWidth"
        (click)="_clickDropDown($event)"
        [@fadeAnimation]="''+(visible$ | async)"
        class="at-tooltip__popper at-tooltip--{{atPlacement}}">
        <div class="at-tooltip__arrow"></div>
        <div class="at-tooltip__content">
          <ng-content select="[tooltipContent]"></ng-content>
        </div>
      </div>
    </ng-template>

  `,
  animations: [fadeAnimation],

})
export class TooltipComponent extends PopoverComponent implements OnInit {
  @Input()
  trigger: any = 'hover'
  @Input()
  left: string

  @Input()
  isSlide = false

  _onMouseLeaveEvent(e: MouseEvent): void {
    if (this.trigger === 'hover' && !this.isSlide) {
      this._hide();
    }
  }

  visible$: Observable<boolean> = this._visibleChange.asObservable();
}
