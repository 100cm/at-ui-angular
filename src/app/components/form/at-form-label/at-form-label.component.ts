import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {AtFormItemComponent}                   from "../at-form-item/at-form-item.component";
import {ColComponent}                          from "../../grid/col/col.component";

@Component({
             selector: 'at-form-label',
             template: `
               <label [class.at-form-item__label—-required]="required">
                 <ng-content></ng-content>
               </label>
             `,
             styleUrls: ['./at-form-label.component.css']
           })
export class AtFormLabelComponent extends ColComponent implements OnInit {


  @Input('required') required = false


  @HostBinding("class.at-form-item__label")
  get labelClass() {
    return true
  }

}
