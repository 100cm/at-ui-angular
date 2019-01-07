import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ColComponent }                          from '../../grid/col/col.component';
import { AtFormItemComponent }                   from '../at-form-item/at-form-item.component';

@Component({
             selector: 'at-form-label',
             template: `
               <label [class.at-form-item__label—-required]="required">
                 <ng-content></ng-content>
               </label>
             `
           })
export class AtFormLabelComponent extends ColComponent implements OnInit {

  @Input('required') required = false;

  @HostBinding('class.at-form-item__label')
  get labelClass() {
    return true;
  }

}
