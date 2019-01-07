import { Directive, ElementRef } from '@angular/core';

@Directive({
             selector: '[at-drag-trigger]'
           })
export class DragTriggerDirective {

  constructor(public el: ElementRef) {
  }

}
