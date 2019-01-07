import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { toState }                                                      from '../../utils/class-helper';
import { AtColorWrapComponent }                                         from '../at-color-wrap/at-color-wrap.component';

@Component({
             selector: 'at-color-alpha-picker',
             template: `
               <div class="alpha-picker {{ atClassName }}"
                    [style.width.px]="width" [style.height.px]="height">
                 <at-color-alpha
                   [hsl]="hsl"
                   [rgb]="rgb"
                   [pointer]="pointer"
                   [direction]="direction"
                   (onChange)="handlePickerChange($event)"
                 ></at-color-alpha>
               </div>
             `,
             styles: [
                 `
                 .alpha-picker {
                   position: relative;
                 }

                 .color-alpha {
                   radius: 2px;
                 }
               `
             ],
             changeDetection: ChangeDetectionStrategy.OnPush,
             preserveWhitespaces: false
           })
export class AtColorAlphaPickerComponent extends AtColorWrapComponent implements OnChanges {
  /** Pixel value for picker width */
  @Input() width: string | number               = 316;
  /** Pixel value for picker height */
  @Input() height: string | number              = 16;
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
  pointer: { [key: string]: string }            = {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    transform: 'translate(-9px, -2px)',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
  };

  constructor() {
    super();
  }

  ngOnChanges() {
    if (this.direction === 'vertical') {
      this.pointer.transform = 'translate(-3px, -9px)';
    }
    this.setState(toState(this.atColor, this.oldHue));
  }

  handlePickerChange({data, $event}) {
    this.handleChange(data, $event);
  }
}
