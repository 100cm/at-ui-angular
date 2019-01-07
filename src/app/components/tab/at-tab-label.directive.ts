import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { toBoolean }                                   from '../utils/class-helper';

@Directive({
  selector: '[at-tab-label]',
  host    : {
    '[class.at-tabs-tab]': 'true'
  }
})
export class AtTabLabelDirective {

  private _disabled = false;

  @Input()
  @HostBinding('class.at-tabs-tab-disabled')
  set disabled(value: boolean) {
    this._disabled = toBoolean(value);
  }

  get disabled(): boolean {
    return this._disabled;
  }

  constructor(public elementRef: ElementRef) {
  }

  getOffsetLeft(): number {
    return this.elementRef.nativeElement.offsetLeft;
  }

  getOffsetWidth(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }

  getOffsetTop(): number {
    return this.elementRef.nativeElement.offsetTop;
  }

  getOffsetHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
}
