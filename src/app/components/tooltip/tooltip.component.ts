import {Component, Input, OnInit} from '@angular/core';
import {PopoverComponent} from "../popover/popover.component";

@Component({
  selector: 'atTooltip',
  template: `
    <div class="at-tooltip">
    <span (mouseenter)="mouseOver()" (mouseleave)="mouseOut()" class="at-tooltip__trigger"
          #trigger>
      <ng-content select="[tooltipTrigger]"></ng-content>
    </span>
      <div
        (mouseenter)="mouseOver()" (mouseleave)="mouseOut()" [ngStyle]="{'display': pop ? '' :'none'}"
        class="at-tooltip__popper at-tooltip--{{placement}}" #popover>
        <div class="at-tooltip__arrow"></div>
        <div class="at-tooltip__content">
          <ng-content select="[tooltipContent]"></ng-content>
        </div>
      </div>
    </div>
  `,

})
export class TooltipComponent extends PopoverComponent implements OnInit {

  trigger = 'hover'

  @Input()
  set placement(value: string) {
    this._placement = value;
  }

  get placement(): string {
    return this._placement;
  }
}
