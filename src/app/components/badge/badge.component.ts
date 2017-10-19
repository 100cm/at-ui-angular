import {Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'atBadge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  private _atValue: any

  @Input() atType: 'info' | 'warning' | 'error' | 'success' = 'info'
  @Input() max
  @Input() dot: boolean = false
  @Input() show: boolean = true


  get atValue(): any {
    if (this.max && this._atValue > this.max) {
      return this.max + '+'
    }
    return this._atValue;
  }

  @Input()
  set atValue(value: any) {
    this._atValue = value;
  }

  ngAfterViewInit() {

  }

}
