import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[atFormContent]'
})
export class AtFormContentDirective {

  constructor() {
  }

  @HostBinding('class.at-form-item__content') content = true
}
