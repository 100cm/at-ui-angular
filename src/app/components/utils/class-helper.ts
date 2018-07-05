import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

export interface ClassHelper {
  _prefixCls: string
  _classList: Array<any>
  _el: HTMLElement;
  nativeElement: any

  _setClassMap(): void
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
  let re = str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  })
  return re
}

export function toBoolean(value: boolean | string): boolean {
  return coerceBooleanProperty(value);
}
