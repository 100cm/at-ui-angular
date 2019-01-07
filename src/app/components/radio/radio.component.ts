import {
  Component, ElementRef, HostBinding, HostListener, Inject, Input, OnInit, Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@Component({
  selector: '[at-radio]',
  encapsulation: ViewEncapsulation.None,
  template: `<span class="at-radio__input">
    <span class="at-radio__inner" [ngClass]="{'at-radio--checked':checked ,'at-radio--disabled': disabled}"></span>
    <input type="radio" [disabled]="disabled" class="at-radio__original" [(ngModel)]="checked"></span>
  <span class="at-radio__label">
    <ng-content>

    </ng-content>
  </span>

  `
})
export class RadioComponent implements OnInit {

  private _atValue: any;

  constructor(public _elementRef: ElementRef, public _RadioGroup: RadioGroupComponent, public _renderer: Renderer2) {
    this._RadioGroup.addRadio(this);
    this._el = this._elementRef.nativeElement;
  }

  _checked: boolean = false;

  _disabled = false;

  _el: any;

  get atValue(): any {
    return this._atValue;
  }

  @Input()
  set atValue(value: any) {
    this._atValue = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }

  get checked(): boolean {
    return this._checked;
  }

  @Input()
  set checked(value: boolean) {
    this._checked = value;
  }

  ngOnInit() {
    this._renderer.addClass(this._el, `${this._prefixCls}`);
  }

  _prefixCls = 'at-radio';

  @HostListener('click', ['$event'])
  onClick(e) {
    e.preventDefault();
    if (!this._disabled) {
      this._checked = true;
      this._RadioGroup.selectRadio(this);
    }
  }

}
