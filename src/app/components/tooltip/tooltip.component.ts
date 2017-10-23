import {Component, Input, OnInit} from '@angular/core';
import {PopoverComponent} from "../popover/popover.component";

@Component({
  selector: 'atTooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
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
