import { Directive } from '@angular/core';

@Directive({
  selector: '[at-select-unselectable]',
  host    : {
    '[attr.unselectable]': '"unselectable"',
    '[style.user-select]': '"none"'
  }
})
export class AtSelectUnselectableDirective {

}
