import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[at-dropdown]'
})
export class DropdownDirective {

  constructor(public elementRef: ElementRef) {
  }

  @HostBinding('class.at-dropdown__trigger') trigger = true;

}
