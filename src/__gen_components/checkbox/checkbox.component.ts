import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'atCheckbox',
  template: `<label (click)="check($event)"
                    [ngClass]="{'at-checkbox--checked': checked,'at-checkbox--disabled': atDisabled}"
                    class="at-checkbox">

  <span class="at-checkbox__input"><span
    class="at-checkbox__inner"></span>

  <input type="checkbox" class="at-checkbox__original"></span>

    <span class="at-checkbox__label">{{label}}</span>
  </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
})
export class CheckboxComponent implements OnInit {

  private _label: string;
  private _checked = false
  private _atDisabled = false


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
