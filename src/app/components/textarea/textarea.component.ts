import { forwardRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'at-textarea',
  template: `<div class="at-textarea" data-v-a01f69b8="">
  <textarea [placeholder]="atPlaceholder" [(ngModel)]="value" rows="2" class="at-textarea__original" style="">

  </textarea>
  </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements OnInit {

  private _value: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(this._value);
  }

// ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  @Input()
  atPlaceholder: string = '请输入';

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

}
