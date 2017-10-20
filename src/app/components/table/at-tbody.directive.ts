import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[atTbody]'
})
export class AtTbodyDirective {

  constructor() {
  }

  @HostBinding('class.at-table__tbody') _tbody = true

}
