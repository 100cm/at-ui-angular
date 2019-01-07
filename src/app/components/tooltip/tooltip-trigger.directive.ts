import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tooltipTrigger]'
})
export class TooltipTriggerDirective {

  constructor(public elementRef: ElementRef) { }

}
