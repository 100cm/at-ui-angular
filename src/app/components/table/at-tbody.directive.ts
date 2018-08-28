import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[at-tbody]'
})
export class AtTbodyDirective {

  constructor() {
  }

  @HostBinding('class.at-table__tbody') _tbody = true

}
