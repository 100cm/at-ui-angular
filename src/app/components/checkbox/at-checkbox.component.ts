import { forwardRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type CheckState = 'checked' | 'unchecked' | 'disabled' | 'indeterminate';

@Component({
  selector: 'at-checkbox,[at-checkbox]',
  template: `<label (click)="check($event)"
                    [ngClass]="{'at-checkbox--disabled':atDisabled ,'at-checkbox':true ,'at-checkbox--checked': status ==='checked'
                    ,'at-checkbox--indeterminate': status === 'indeterminate'
                    }"
  >

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
  ]
})
export class AtCheckboxComponent implements OnInit {

  private _label: string;
  private _checked = false;
  private _atDisabled = false;

  get atDisabled(): boolean {
    return this._atDisabled;
  }

  @Input()
  set atDisabled(value: boolean) {
    this._atDisabled = value;
  }

  @Output() readonly changeCheck: EventEmitter<boolean> = new EventEmitter();

  get checked(): boolean {
    return this._checked;
  }

  @Input()
  set checked(value: boolean) {
    this._checked = value;
  }

  _indeterminate = false;

  get indeterminate(): boolean {
    return this._indeterminate;
  }

  @Input()
  set indeterminate(value: boolean) {
    this._indeterminate = value;
  }

  get status(): string {
    if (this.checked) {
      return 'checked';
    } else if (this.indeterminate) {
      return 'indeterminate';
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

  ngOnInit(): void {
  }

  check(e: Event): void {
    e.preventDefault();
    if (!this.atDisabled) {
      this._checked = !this._checked;
      this.onChange && this.onChange(this._checked);
      this.changeCheck.emit(this._checked);
    }
  }

  // ngModel Access
  onChange: (value: boolean) => void;
  onTouched: () => void;

  writeValue(value: boolean): void {
    this._checked = value;
  }

  registerOnChange(fn: (_: boolean) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

}
