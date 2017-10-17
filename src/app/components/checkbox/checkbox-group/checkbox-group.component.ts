import {Component, ContentChild, ContentChildren, forwardRef, Input, OnInit, QueryList, ViewChild} from '@angular/core';
import {CheckboxComponent} from "../checkbox.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'atCheckboxGroup',
  template: `<div class="at-checkbox-group">
  <atCheckbox *ngFor="let option of _checkList" [label]="option.label"
              [(ngModel)]="option.checked"
              (changeCheck)="changeList()">

  </atCheckbox>
</div>
`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ],
})
export class CheckboxGroupComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  _checkList: Array<any> = []


  changeList() {
    this.onChange(this._checkList)
  }

  // ngModel Access
  onChange: any = Function.prototype;
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

  @ContentChildren(CheckboxComponent) checkbox: QueryList<CheckboxComponent>

  ngAfterContentInit() {
    console.log(this.checkbox)
  }

}
