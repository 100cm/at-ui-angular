import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[atTd]'
})
export class AtTdDirective {

  constructor() {
  }

  @HostBinding('class.at-table__cell') _td = true
}
