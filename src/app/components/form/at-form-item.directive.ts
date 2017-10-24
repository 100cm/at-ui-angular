import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[atFormItem]'
})
export class AtFormItemDirective {

  constructor() {
  }

  @HostBinding('class.at-form-item') item = true
}
