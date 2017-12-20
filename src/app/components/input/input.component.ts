import {
  Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output,
  ViewChild
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

export type atInputSize = 'small' | 'normal' | 'large'

@Component({
  selector: 'atInput',
  template: `
    <div class="{{_prefixCls}} {{_prefixCls}}--{{atSize}} {{_prefixCls}}--{{atStatus}}"
         [ngClass]="_BindClass">
      <div #prepend [hidden]="!showPrepend" [ngClass]="{'at-input-group__prepend': showPrepend}">
        <ng-content select="[atPrepend]"></ng-content>
      </div>

      <ng-template [ngIf]="atType == 'normal'">
        <input #input [(ngModel)]="value" placeholder="{{placeholder}}"
               (focus)="focus($event)" (focusout)="focusOut($event)" type="{{type}}" [disabled]="disabled"
               class="{{_prefixCls}}__original">
      </ng-template>

      <ng-template [ngIf]="atType == 'number'">
        <div class="at-input-number__input">
          <input [(ngModel)]="value" placeholder="{{placeholder}}" type="number" [disabled]="disabled"
                 class="{{_prefixCls}}__original">

          <div class="at-input-number__handler">
            <span (click)="numberUp()" class="at-input-number__up"
                  [ngClass]="{'at-input-number__up--disabled':isMax}"><i class="icon icon-chevron-up"></i></span>
            <span (click)="numberDown()" class="at-input-number__down"
                  [ngClass]="{'at-input-number__up--disabled':isMin}"><i class="icon icon-chevron-down"></i></span>
          </div>
        </div>
      </ng-template>

      <i *ngIf="icon" class="at-input__icon icon icon-{{icon}}"></i>

      <div #append [ngClass]="{'at-input-group__append': showAppend}" [hidden]="!showAppend">
        <ng-content select="[atAppend]"></ng-content>
      </div>

    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
})
export class InputComponent implements OnInit {


  constructor(public el: ElementRef) {
  }

  ngOnInit() {
  }


  private _atStatus = "original"
  private _atType = "normal"
  private _disabled = false
  private _placeholder = ''
  private _type = 'text'
  private _atSize: atInputSize = 'normal'
  private _icon: string
  private _value: any
  private _step: number = 1
  private _max: number
  private _min: number
  isMax = false
  isMin = false

  get max(): number {
    return this._max;
  }

  @Input()
  set max(value: number) {
    this._max = value;
  }

  get min(): number {
    return this._min;
  }

  @Input()
  set min(value: number) {
    this._min = value;
  }

  _prefixCls = 'at-input'
  _BindClass = {}


  get atType(): string {
    return this._atType;

  }


  get step(): number {
    return this._step;
  }

  @Input()
  set step(value: number) {
    this._step = value;
  }

  @Input()
  set atType(value: string) {
    this._atType = value;
    if (value == 'number') {
      this._prefixCls = 'at-input-number'
      this._value = this.value || 0
    }
  }

  @Output() onFocus: EventEmitter<any> = new EventEmitter()
  @Output() onFocusOut: EventEmitter<any> = new EventEmitter()

  get value(): any {

    return this._value;
  }

  set value(Ivalue: any) {
    if (this.atType == 'number') {
      if ((this.min && Ivalue < this.min) || (this.max && Ivalue > this.max)) {
        Ivalue = 0
      }
    }
    this._value = Ivalue;
    this.setNumberStatus()
    this.onChange(this._value)
  }

  get atSize(): atInputSize {
    return this._atSize;
  }

  @Input()
  set atSize(value: atInputSize) {
    this._atSize = value;
  }

  get icon(): string {
    return this._icon;
  }

  @Input()
  set icon(value: string) {
    this._icon = value;
  }

  get type(): string {
    return this._type;
  }

  @Input()
  set type(value: string) {
    this._type = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }


  get atStatus(): string {
    return this._atStatus;
  }

  @Input()
  set atStatus(value: string) {
    this._atStatus = value;
  }


  get placeholder(): string {
    return this._placeholder;
  }

  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
  }

  showAppend: boolean = true;
  showPrepend: boolean = true

  @ViewChild('prepend') prepend: any
  @ViewChild('append') append: any

  @ViewChild('input') inputField: ElementRef


  ngAfterContentInit() {
    this.showAppend = (this.trim(this.append.nativeElement.innerHTML).length > 0);
    this.showPrepend = (this.trim(this.prepend.nativeElement.innerHTML).length > 0);

    this._BindClass[`${this._prefixCls}--disabled`] = this.disabled
    this._BindClass['at-input-group'] = (this.showAppend || this.showPrepend)
    this._BindClass['at-input--prepend'] = this.showPrepend
    this._BindClass['at-input--append'] = this.showAppend
  }

  trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "")
  }

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  numberUp() {
    this._value = this._value || 0
    if ((this.max && this._value >= this.max)) {

    } else {
      this._value += this.step
    }
    this.setNumberStatus()
    this.onChange(this.value)
  }

  numberDown() {
    this._value = this._value || 0
    if ((this.min && this._value <= this.min)) {

    } else {
      this._value -= this.step
    }
    this.setNumberStatus()
    this.onChange(this.value)
  }

  setNumberStatus() {
    if (this.max && this._value >= this.max) {
      this.isMax = true
      this._value = this.max
      this.onChange(this.value)
    } else {
      this.isMax = false
    }

    if (this.min && this._value <= this.min) {
      this.isMin = true
      this._value = this.min
      this.onChange(this.value)
    } else {
      this.isMin = false
    }
  }

  @Output() value_change: EventEmitter<any> = new EventEmitter()

  change() {
    this.value_change.emit(this._value)
  }

  focus($event) {
    this.onFocus.emit($event)
  }

  focusOut($event) {
    this.onFocusOut.emit($event)
  }

}
