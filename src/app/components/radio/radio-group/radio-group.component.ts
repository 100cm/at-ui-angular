import { forwardRef, AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR }                                                     from '@angular/forms';
import { RadioComponent }                                                        from '../radio.component';

@Component({
  selector: 'at-radio-group',
  template: `
    <ng-content>

    </ng-content>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ],
  host: {'[class.at-radio-group]': 'true'}
})
export class RadioGroupComponent implements OnInit, AfterContentInit {

  constructor() {
  }

  private _size: string = 'common';
  radios: RadioComponent[] = [];
  _value: string;

  ngOnInit(): void {
  }

  get size(): string {
    return this._size;
  }

  @Input()
  set size(value: string) {
    this._size = value;
  }

  addRadio(radio): void {
    this.radios.push(radio);
  }

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  selectRadio(radioComponent: RadioComponent): void {
    this.updateValue(radioComponent.atValue);
    this.onChange(radioComponent.atValue);
  }

  writeValue(value: any): void {
    this.updateValue(value);
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

  ngAfterContentInit(): void {
    this.radios.forEach(radio => {
      if (this.size) {
        radio._renderer.addClass(radio._el, `${radio._prefixCls}--${this.size}`);
      }
    });
  }
}
