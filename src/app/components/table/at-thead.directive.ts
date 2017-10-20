import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[atThead]'
})
export class AtTheadDirective {

  constructor() {
  }

  @HostBinding('class.at-table__thead') _thead = true
}
