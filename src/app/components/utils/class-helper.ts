import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import * as _tinycolor from 'tinycolor2';

export interface ClassHelper {
  _prefixCls: string;
  _classList: any[];
  _el: HTMLElement;
  nativeElement: any;

  _setClassMap(): void;
}

export function isNotNil(value: any): boolean {
  return (typeof(value) !== 'undefined') && value !== null;
}

export function toCamelCase(str) {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
}

export function underscoreToCamelCase(str) {
  const re = str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
  return re;
}

export function toBoolean(value: boolean | string): boolean {
  return coerceBooleanProperty(value);
}

export function toNumber<D>(value: number | string, fallback: D): number | D {
  return coerceNumberProperty(value, fallback);
}

export function InputBoolean(): any { // tslint:disable-line:no-any
  return function InputBooleanPropDecorator (target: object, name: string): void {
    // Add our own private prop
    const privatePropName = `$$__${name}`;

    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputBoolean decorator.`);
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    });

    Object.defineProperty(target, name, {
      get(): boolean {
        return this[ privatePropName ]; // tslint:disable-line:no-invalid-this
      },
      set(value: boolean | string): void {
        this[ privatePropName ] = toBoolean(value); // tslint:disable-line:no-invalid-this
      }
    });

    // // Do rest things for input decorator
    // const inputDecorator = Input();
    // inputDecorator(target, name);
  };
}

const tinycolor = _tinycolor;

export function simpleCheckForValidColor(data) {
  const keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
  let checked = 0;
  let passed = 0;
  keysToCheck.forEach(letter => {
    if (!data[letter]) {
      return;
    }
    checked += 1;
    if (!isNaN(data[letter])) {
      passed += 1;
    }
    if (letter === 's' || letter === 'l') {
      const percentPatt = /^\d+%$/;
      if (percentPatt.test(data[letter])) {
        passed += 1;
      }
    }
  });
  return checked === passed ? data : false;
}

export function toState(data, oldHue?: number) {
  const color = data.hex ? tinycolor(data.hex) : tinycolor(data);
  const hsl = color.toHsl();
  const hsv = color.toHsv();
  const rgb = color.toRgb();
  const hex = color.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  const transparent = hex === '000000' && rgb.a === 0;

  return {
    hsl,
    hex: transparent ? 'transparent' : `#${hex}`,
    rgb,
    hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  };
}

export function isValidHex(hex: string) {
  return tinycolor(hex).isValid();
}

export function getContrastingColor(data) {
  if (!data) {
    return '#fff';
  }
  const col = toState(data);
  if (col.hex === 'transparent') {
    return 'rgba(0,0,0,0.4)';
  }
  const yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}

export function render(c1: string, c2: string, size: number) {
  if (typeof document === 'undefined') {
    return null;
  }
  const canvas = document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  } // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

const checkboardCache: {[key: string]: string} = {};

export function getCheckerboard(c1: string, c2: string, size: number) {
  const key = `${c1}-${c2}-${size}`;
  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  const checkboard = render(c1, c2, size);
  if (!checkboard) {
    return null;
  }
  checkboardCache[key] = checkboard;
  return checkboard;
}

export function isPromise(obj: {} | void): boolean {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof (obj as Promise<{}>).then === 'function' && typeof (obj as Promise<{}>).catch === 'function';
}
