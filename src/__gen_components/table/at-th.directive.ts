import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[atTh]'
})
export class AtThDirective {

  constructor() {
  }

  @Input() atWidth;

  @HostBinding('class.at-table__column') _th = true

  @HostBinding('class.at-table__cell') _tc = true

}
