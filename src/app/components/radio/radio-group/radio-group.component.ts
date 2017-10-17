import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {RadioComponent} from "../radio.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'atRadioGroup',
  template:`<div class="at-radio-group">
    <ng-content>

    </ng-content>
  </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ],

})
export class RadioGroupComponent implements OnInit {

  constructor() {
  }


  private _size: string = 'common'
  radios: RadioComponent[] = []
  _value: string;

  ngOnInit() {
  }


  get size(): string {
    return this._size;
  }

  @Input()
  set size(value: string) {
    this._size = value;
  }

  addRadio(radio) {
    this.radios.push(radio)
  }

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;


  selectRadio(radioComponent: RadioComponent) {
    this.updateValue(radioComponent.atValue);
    this.onChange(radioComponent.atValue);
  }

  writeValue(value: any): void {
    this.updateValue(value)
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }


  updateValue(value: any) {
    if (this._value === value) {
      return;
    }
    this._value = value;
    this.radios.forEach((item) => {
      item.checked = item.atValue === this._value;
    });
  }

  ngAfterContentInit() {
    this.radios.forEach(radio => {
      if (this.size) {
        radio._renderer.addClass(radio._el, `${radio._prefixCls}--${this.size}`)
      }
    })
  }
}
