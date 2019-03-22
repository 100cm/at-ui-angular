import { forwardRef, Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { atInputSize, InputComponent } from './input.component';

@Directive({
  selector: '[at-input]'
})
export class AtInputDirective {

  constructor(public el: ElementRef) {
  }

  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  @HostBinding(`class.at-input--lg`)
  get setLgClass(): boolean {
    return this._atSize === 'large';
  }

  @HostBinding(`class.at-input--sm`)
  get setSmClass(): boolean {
    return this._atSize === 'small';
  }

  @HostBinding(`class.at-input__original`)
  get setOriginalClass(): boolean {
    return true;
  }

  @HostBinding('class.at-input--disabled')
  get disableCls(): boolean {
    return this.atDisabled;
  }

  private _atStatus = 'original';
  private _disabled = false;

  private _atSize: atInputSize = 'normal';

  get atStatus(): string {
    return this._atStatus;
  }

  set atStatus(value: string) {
    this._atStatus = value;
  }

  get atDisabled(): boolean {
    return this._disabled;
  }

  @Input()
  set atDisabled(value: boolean) {
    this._disabled = value;
  }

  get atSize(): atInputSize {
    return this._atSize;
  }

  @Input()
  set atSize(value: atInputSize) {
    this._atSize = value;
  }
}
