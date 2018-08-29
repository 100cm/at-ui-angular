import {Directive, HostBinding} from '@angular/core';
import {RowComponent}           from "../grid/row/row.component";

@Directive({
  selector: '[at-form-item]'
})
export class AtFormItemDirective extends RowComponent{

  @HostBinding('class.at-form-item') item = true

}
