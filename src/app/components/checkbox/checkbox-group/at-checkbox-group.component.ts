import {Component, ContentChild, ContentChildren, forwardRef, Input, OnInit, QueryList, ViewChild} from '@angular/core';
import {AtCheckboxComponent}                                                                       from "../at-checkbox.component";
import {NG_VALUE_ACCESSOR}                                                                         from "@angular/forms";

@Component({
             selector: 'at-checkbox-group',
             template: `
               <div class="at-checkbox-group">
                 <at-checkbox *ngFor="let option of _checkList" [label]="option.label"
                              [(ngModel)]="option.checked"
                              (changeCheck)="changeList()">

                 </at-checkbox>
               </div>
             `,
             providers: [
               {
                 provide: NG_VALUE_ACCESSOR,
                 useExisting: forwardRef(() => AtCheckboxGroupComponent),
                 multi: true
               }
             ],
           })
export class AtCheckboxGroupComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  _checkList: Array<any> = []


  changeList() {
    this.onChange(this._checkList)
  }

  // ngModel Access
  onChange: any  = Function.prototype;
  onTouched: any = Function.prototype;

  writeValue(value: Array<any>): void {
    this._checkList = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  @ContentChildren(AtCheckboxComponent) checkbox: QueryList<AtCheckboxComponent>

  ngAfterContentInit() {

  }


}
