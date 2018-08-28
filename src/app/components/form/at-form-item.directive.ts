import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[at-form-item]'
})
export class AtFormItemDirective {

  constructor() {
  }

  @HostBinding('class.at-form-item') item = true
}
