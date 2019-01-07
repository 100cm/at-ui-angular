import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
}                       from '@angular/core';

import { Subscription }                       from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { simpleCheckForValidColor, toState }  from '../../utils/class-helper';
import { Color, HSLA, HSVA, RGBA }            from '../color.interface';

export interface ColorEvent {
  $event: Event;
  color: Color;
}

@Component({
  selector: 'at-color-wrap',
  template: ''
})
export class AtColorWrapComponent implements OnInit {

  @Input() atClassName = '';
  private _atColor: HSLA = {
    h: 250,
    s: 0.5,
    l: 0.2,
    a: 1
  };

  get atColor(): HSLA {
    return this._atColor;
  }

  @Input()
  set atColor(value: HSLA) {
    this._atColor = value;
    this.setState(toState(this._atColor, this.oldHue));
    this.currentColor = this.hex;
  }

  @Output() readonly onChangeComplete = new EventEmitter<ColorEvent>();
  @Output() readonly onSwatchHover = new EventEmitter<ColorEvent>();
  oldHue: number;
  hsl: HSLA;
  hsv: HSVA;
  rgb: RGBA;
  hex: string;
  source: string;
  currentColor: string;
  changes: Subscription;

  ngOnDestroy(): void {

  }

  setState(data) {
    this.oldHue = data.oldHue;
    this.hsl = data.hsl;
    this.hsv = data.hsv;
    this.rgb = data.rgb;
    this.hex = data.hex;
    this.source = data.source;
    this.afterValidChange();
  }

  handleChange(data, $event) {
    const isValidColor = simpleCheckForValidColor(data);
    if (isValidColor) {
      const color = toState(data, data.h || this.oldHue);
      this.setState(color);
      this.afterValidChange();
    }
  }

  /** hook for components after a complete change */
  afterValidChange() {
  }

  handleSwatchHover(data, $event) {
    const isValidColor = simpleCheckForValidColor(data);
    if (isValidColor) {
      const color = toState(data, data.h || this.oldHue);
      this.setState(color);
      this.onSwatchHover.emit({color, $event});
    }
  }

  ngOnInit(): void {
  }

}
