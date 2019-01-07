import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { RadioGroupComponent }                                                        from '../radio-group/radio-group.component';
import { RadioComponent }                                                             from '../radio.component';

@Component({
             selector: '[at-radio-button]',
             template: `<input type="radio" [disabled]="disabled" class="at-radio-button__original"
                               [(ngModel)]="checked">
             <span #content_span class="at-radio-button__inner">
  <ng-content>
  </ng-content>
</span>
             `
           })
export class RadioButtonComponent extends RadioComponent implements OnInit {

  @Input()
  fill: string;

  @Input()
  textColor: string;

  @HostBinding('class.at-radio--checked')
  get buttonChecked() {
    return this._checked;
  }

  @HostBinding('class.at-radio-button')
  get buttonClass() {
    return true;
  }

  @ViewChild('content_span') content_span: any;

  _prefixCls = 'at-radio-button';

  ngOnInit() {
    if (this.fill) {
      this._renderer.setStyle(this.content_span.nativeElement, 'background-color', this.fill);
      this._renderer.setStyle(this.content_span.nativeElement, 'border-color', this.fill);
    }
    if (this.textColor) {
      this._renderer.setStyle(this.content_span.nativeElement, 'color', this.textColor);
    }
  }

}
