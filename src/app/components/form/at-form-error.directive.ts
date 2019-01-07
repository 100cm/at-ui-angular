import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[atFormError]'
})
export class AtFormErrorDirective {

  constructor() {
  }

  @HostBinding('class.at-form-item__error-tip') error = true;
}
