import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
}                   from '@angular/core';
import { isValidHex } from '../../utils/class-helper';
import { HSLA, RGBA } from '../color.interface';

@Component({
             selector: 'at-color-sketch-fields',
             template: `
               <div class="sketch-fields">
                 <div class="sketch-double">
                   <at-color-editable-input
                     [style]="{ input: input, label: label }"
                     label="色值"
                     [value]="hex.replace('#', '')"
                     (onChange)="handleChange($event)"
                   ></at-color-editable-input>
                 </div>
                 <div class="sketch-single">
                   <at-color-editable-input
                     [style]="{ input: input, label: label }"
                     label="r"
                     [value]="rgb?.r"
                     (onChange)="handleChange($event)"
                     [dragLabel]="true"
                     [dragMax]="255"
                   ></at-color-editable-input>
                 </div>
                 <div class="sketch-single">
                   <at-color-editable-input
                     [style]="{ input: input, label: label }"
                     label="g"
                     [value]="rgb?.g"
                     (onChange)="handleChange($event)"
                     [dragLabel]="true"
                     [dragMax]="255"
                   ></at-color-editable-input>
                 </div>
                 <div class="sketch-single">
                   <at-color-editable-input
                     [style]="{ input: input, label: label }"
                     label="b"
                     [value]="rgb?.b"
                     (onChange)="handleChange($event)"
                     [dragLabel]="true"
                     [dragMax]="255"
                   ></at-color-editable-input>
                 </div>
                 <div class="sketch-alpha" *ngIf="atDisableAlpha === false">
                   <at-color-editable-input
                     [style]="{ input: input, label: label }"
                     label="a"
                     [value]="round(rgb?.a * 100)"
                     (onChange)="handleChange($event)"
                     [dragLabel]="true"
                     [dragMax]="100"
                   ></at-color-editable-input>
                 </div>
               </div>
             `,
             styles: [
                 `
                 .sketch-fields {
                   display: flex;
                   padding-top: 4px;
                 }

                 .sketch-double {
                   -webkit-box-flex: 2;
                   flex: 2 1 0%;
                 }

                 .sketch-single {
                   flex: 1 1 0%;
                   padding-left: 6px;
                 }

                 .sketch-alpha {
                   -webkit-box-flex: 1;
                   flex: 1 1 0%;
                   padding-left: 6px;
                 }
               `
             ],
             changeDetection: ChangeDetectionStrategy.OnPush,
             preserveWhitespaces: false
           })
export class AtSketchFieldsComponent {
  @Input() hsl: HSLA;
  @Input() rgb: RGBA;
  private _hex: string = '';

  get hex(): string {
    return this._hex;
  }

  @Input()
  set hex(value: string) {
    if (value) {
      this._hex = value;
    }
  }

  @Input() atDisableAlpha                   = false;
  @Output() onChange                        = new EventEmitter<any>();
           input: { [key: string]: string } = {
             width: '100%',
             padding: '4px 10% 3px',
             border: 'none',
             boxSizing: 'border-box',
             boxShadow: 'inset 0 0 0 1px #ccc',
             fontSize: '11px'
           };
           label: { [key: string]: string } = {
             display: 'block',
             textAlign: 'center',
             fontSize: '11px',
             color: '#222',
             paddingTop: '3px',
             paddingBottom: '4px',
             textTransform: 'capitalize'
           };

  round(value) {
    return Math.round(value);
  }

  handleChange({data, $event}) {
    if (data.hex) {
      if (isValidHex(data.hex)) {
        this.onChange.emit({
                             data: {
                               hex: data.hex,
                               source: '_hex'
                             },
                             $event
                           });
      }
    } else if (data.r || data.g || data.b) {
      this.onChange.emit({
                           data: {
                             r: data.r || this.rgb.r,
                             g: data.g || this.rgb.g,
                             b: data.b || this.rgb.b,
                             source: 'rgb'
                           },
                           $event
                         });
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }
      data.a /= 100;

      this.onChange.emit({
                           data: {
                             h: this.hsl.h,
                             s: this.hsl.s,
                             l: this.hsl.l,
                             a: Math.round(data.a * 100) / 100,
                             source: 'rgb'
                           },
                           $event
                         });
    } else if (data.h || data.s || data.l) {
      this.onChange.emit({
                           data: {
                             h: data.h || this.hsl.h,
                             s: Number((data.s && data.s) || this.hsl.s),
                             l: Number((data.l && data.l) || this.hsl.l),
                             source: 'hsl'
                           },
                           $event
                         });
    }
  }
}
