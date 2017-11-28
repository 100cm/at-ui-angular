import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[at-tab-label]'
})
export class TabLabelDirective {

  constructor(public elementRef: ElementRef) { }

}
