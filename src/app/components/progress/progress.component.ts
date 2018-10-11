import {Component, Input, OnInit} from '@angular/core';
import {StatusIconType} from "../icon/icon-status-type";

@Component({
  selector: 'at-progress',
  template: `
    <div class="at-progress at-progress--bar at-progress--{{status}}">
      <div class="at-progress-bar">
        <div class="at-progress-bar__wraper" [ngStyle]="{'height':stroke+'px'}">
          <div class="at-progress-bar__inner" [ngStyle]="{'width': width+'%'}"></div>
        </div>
      </div>
      <div class="at-progress__text">
        <span *ngIf="!status">{{width}}%</span>
        <i *ngIf="status" class="icon {{ statusIcon[status]}}"></i>
      </div>
    </div>
  `
})
export class ProgressComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  private _width: number = 0


  get width(): number {
    return this._width;
  }

  statusIcon = StatusIconType

  @Input()
  stroke: number = 8

  @Input()
  set width(value: number) {
    value > 100 ? value = 100 : value
    value < 0 ? value = 0 : value
    this._width = value;
    if (this._width == 100) {
      this.status = 'success'
    }else{
      this.status = 'process'
    }
  }

  @Input() status: string

}
