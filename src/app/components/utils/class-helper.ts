import {coerceBooleanProperty, coerceNumberProperty} from '@angular/cdk/coercion';

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
