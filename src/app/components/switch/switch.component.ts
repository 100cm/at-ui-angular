import {Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'atSwitch',
  templateUrl: './switch.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ],
  styleUrls: ['./switch.component.css']
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
