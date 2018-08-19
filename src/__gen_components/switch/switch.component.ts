import {Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'atSwitch',
  template:`<span class="at-switch at-switch--{{atSize}}" [ngClass]="{'at-switch--checked':_value,'at-switch--disabled':disabled}">
  <span class="at-switch__text">
    {{_value ? checkText : unCheckText}}
  </span>
</span>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ],
})
export class SwitchComponent implements OnInit {

  _value: boolean = false

  @Input()
  checkText: string
  @Input()
  unCheckText: string
  @Input()
  disabled: boolean = false

  private _atSize: 'normal' | 'small' | 'large' = 'normal'

  @Output() change: EventEmitter<boolean> = new EventEmitter()

  get atSize() {
    return this._atSize;
  }

  @Input()
  set atSize(value) {
    this._atSize = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;


  writeValue(value: any): void {
    this._value = value
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  @HostListener('click', ['$event'])
  switch() {
    if (!this.disabled) {
      this._value = !this._value
      this.onChange(this._value)
      this.change.emit(this._value)
    }
  }

}
