import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[body]'
})
export class ModalBodyDirective {

  constructor(public elementRef: ElementRef) {
  }
}

