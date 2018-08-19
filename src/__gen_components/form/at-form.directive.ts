import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[atForm]'
})
export class AtFormDirective {

  constructor() {
  }

  @HostBinding('class.at-form') form = true


  @HostBinding('class.at-form--inline')
  get inline() {
    return this.type == 'inline'
  }

  @HostBinding('class.at-form--horizontal')
  get horizontal() {
    return this.type == 'horizontal'
  }


  @Input() type = 'horizontal'

}
