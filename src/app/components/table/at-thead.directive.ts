import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[at-thead]'
})
export class AtTheadDirective {

  constructor() {
  }

  @HostBinding('class.at-table__thead') _thead = true;
}
