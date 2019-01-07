import { forwardRef, Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR }                                                                     from '@angular/forms';
import { atInputSize }                                                                           from '../input';

@Component({
  selector: 'at-switch',
  template: `<span class="at-switch at-switch--{{atSize}}"
                   [ngClass]="{'at-switch--checked':_value,'at-switch--disabled':disabled}">
  <span class="at-switch__text">
    <ng-container *ngIf="CheckIsString; else checkChildren">
      {{_value ? checkText : ''}}
    </ng-container>
    <ng-template #checkChildren>
       <ng-template *ngIf="_value" [ngTemplateOutlet]="checkText"></ng-template>
    </ng-template>
       <ng-container *ngIf="UncheckIsString; else UncheckChildren">
      {{_value ? '' : unCheckText}}
    </ng-container>
    <ng-template #UncheckChildren>
       <ng-template *ngIf="!_value" [ngTemplateOutlet]="unCheckText"></ng-template>
    </ng-template>

  </span>
</span>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements OnInit {

  _value: boolean = false;

  @Input()
  checkText: string | TemplateRef<any>;
  @Input()
  unCheckText: string | TemplateRef<any>;
  @Input()
  disabled: boolean = false;

  private _atSize: atInputSize = 'normal';

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  get atSize() {
    return this._atSize;
  }

  @Input()
  set atSize(value) {
    this._atSize = value;
  }

  get CheckIsString() {
    return !(this.checkText instanceof TemplateRef);
  }

  get UncheckIsString() {
    return !(this.unCheckText instanceof TemplateRef);
  }

  constructor() {
  }

  ngOnInit() {
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

  @HostListener('click', ['$event'])
  switch() {
    if (!this.disabled) {
      this._value = !this._value;
      this.onChange(this._value);
      this.change.emit(this._value);
    }
  }

}
