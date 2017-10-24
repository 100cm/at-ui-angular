import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[atFormLabel]'
})
export class AtFormLabelDirective {

  constructor() {
  }


  @Input() required = false

  @HostBinding('class.at-form-item__label') label = true


  @HostBinding('class.at-form-item__label—-required')
  get require() {
    return this.required
  }

}
