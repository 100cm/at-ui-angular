import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR}                                          from '@angular/forms';

@Component({
  selector: 'at-checkbox',
  template: `<label (click)="check($event)"

                    class="at-checkbox at-checkbox--{{status}}">

  <span class="at-checkbox__input"><span
    class="at-checkbox__inner"></span>

  <input type="checkbox" class="at-checkbox__original"></span>
    <span class="at-checkbox__label">{{label}}</span>
  </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AtCheckboxComponent),
      multi: true
    }
  ],
})
export class AtCheckboxComponent implements OnInit {

  private _label: string;
  private _checked = false
  private _atDisabled = false

  _state: 'checked' | 'unchecked' | 'disabled' | 'indeterminate' = 'unchecked'

  @Input()
  set state(value) {
    this._state = value
    if (value != 'checked') {
      this._checked = false
    }

  }


  get atDisabled(): boolean {
    return this._atDisabled;
  }

  @Input()
  set atDisabled(value: boolean) {
    this._atDisabled = value;
  }

  @Output() changeCheck: EventEmitter<any> = new EventEmitter()

  get checked(): boolean {
    return this._checked;
  }

  get indeterminate(): boolean {
    return this._state == 'indeterminate'
  }

  get status() {
    if (this.atDisabled) {
      return 'disabled'
    }
    else if (this.checked) {
      return 'checked'
    }
    else if (this.indeterminate) {
      return 'indeterminate'
    }
  }


  get label(): string {
    return this._label;
  }

  @Input()
  set label(value: string) {
    this._label = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

  check(e) {
    e.preventDefault()
    if (!this.atDisabled) {
      this._checked = !this._checked
      this.onChange(this._checked)
      this.changeCheck.emit(this._checked)
    }
  }

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  writeValue(value: any): void {
    this._checked = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }


}
