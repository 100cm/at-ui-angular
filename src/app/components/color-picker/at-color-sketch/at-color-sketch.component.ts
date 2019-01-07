import { forwardRef, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR }                                                                   from '@angular/forms';
import { isValidHex }                                                                          from '../../utils/class-helper';
import { AtColorWrapComponent }                                                                from '../at-color-wrap/at-color-wrap.component';
@Component({
             selector: 'at-color-picker',
             template: `
               <div class="sketch-picker {{ atClassName }}" [style.width]="atWidth">
                 <div class="sketch-saturation">
                   <at-color-saturation [hsl]="hsl" [hsv]="hsv"
                                        (onChange)="handleValueChange($event)"
                   >
                   </at-color-saturation>
                 </div>
                 <div class="sketch-controls">
                   <div class="sketch-sliders">
                     <div class="sketch-hue">
                       <at-color-hue [hsl]="hsl"
                                     (onChange)="handleValueChange($event)"
                       ></at-color-hue>
                     </div>
                     <div class="sketch-alpha">
                       <at-color-alpha
                         [radius]="2" [rgb]="rgb" [hsl]="hsl"
                         (onChange)="handleValueChange($event)"
                       ></at-color-alpha>
                     </div>
                   </div>
                   <div class="sketch-color">
                     <at-color-checkboard></at-color-checkboard>
                     <div class="sketch-active" [style.background]="activeBackground"></div>
                   </div>
                 </div>
                 <div class="sketch-controls">
                   <at-color-sketch-fields
                     [rgb]="rgb" [hsl]="hsl" [hex]="hex"
                     [atDisableAlpha]="atDisableAlpha"
                     (onChange)="handleValueChange($event)"
                   ></at-color-sketch-fields>
                 </div>
                 <div class="sketch-controls">
                   <at-color-sketch-preset-colors
                     [colors]="atPresetColors"
                     (onClick)="handleBlockChange($event)"
                     (onSwatchHover)="onSwatchHover.emit($event)"
                   ></at-color-sketch-preset-colors>
                 </div>
               </div>`,
             styles: [
                 `
                 .sketch-picker {
                   padding: 10px 10px 0;
                   box-sizing: initial;
                   background: #fff;
                   border-radius: 4px;
                   box-shadow: 0 0 0 1px #e2ecf4, 0 8px 16px rgba(0, 0, 0, .15);
                 }

                 .sketch-saturation {
                   width: 100%;
                   padding-bottom: 75%;
                   position: relative;
                   overflow: hidden;
                 }

                 .sketch-controls {
                   display: flex;
                 }

                 .sketch-sliders {
                   padding: 4px 0px;
                   -webkit-box-flex: 1;
                   flex: 1 1 0%;
                 }

                 .sketch-hue {
                   position: relative;
                   height: 10px;
                   overflow: hidden;
                 }

                 .sketch-alpha {
                   position: relative;
                   height: 10px;
                   margin-top: 4px;
                   overflow: hidden;
                 }

                 .sketch-color {
                   width: 24px;
                   height: 24px;
                   position: relative;
                   margin-top: 4px;
                   margin-left: 4px;
                   border-radius: 3px;
                 }

                 .sketch-active {
                   position: absolute;
                   top: 0px;
                   right: 0px;
                   bottom: 0px;
                   left: 0px;
                   border-radius: 2px;
                   box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset;
                 }
               `
             ],
             changeDetection: ChangeDetectionStrategy.OnPush,
             preserveWhitespaces: false,
             providers: [
               {
                 provide: NG_VALUE_ACCESSOR,
                 useExisting: forwardRef(() => AtColorSketchComponent),
                 multi: true
               }
             ]
           })
export class AtColorSketchComponent extends AtColorWrapComponent {
  @Input() atDisableAlpha   = false;
  @Input() atPresetColors   = [
    '#D0021B',
    '#F5A623',
    '#F8E71C',
    '#8B572A',
    '#7ED321',
    '#417505',
    '#BD10E0',
    '#9013FE',
    '#4A90E2',
    '#50E3C2',
    '#B8E986',
    '#000000',
    '#4A4A4A',
    '#9B9B9B',
    '#FFFFFF'
  ];
  /** Width of picker */
           @Input() atWidth = 200;
           activeBackground: string;

  @Output() hexChange = new EventEmitter();

  constructor() {
    super();
  }

  afterValidChange() {
    this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.rgb.a})`;
  }

  handleValueChange({data, $event}) {
    this.handleChange(data, $event);
    this.onChange(this.hex);
    this.hexChange.emit(this.hex);
  }

  handleBlockChange({hex, $event}) {
    if (isValidHex(hex)) {
      // this.hex = hex;
      this.handleChange(
        {
          hex,
          source: 'hex'
        },
        $event
      );
    }
    this.onChange(hex);
    this.hexChange.emit(hex);
  }

  // ngModel Access
  onChange: any  = Function.prototype;
  onTouched: any = Function.prototype;

  writeValue(value: any): void {
    if (value) {
      this.atColor = value;
    }
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

}
