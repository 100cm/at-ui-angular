import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[pop-trigger],[tooltip-trigger]'
})
export class PopTriggerDirective {

  constructor(public elementRef: ElementRef) {
  }


}
