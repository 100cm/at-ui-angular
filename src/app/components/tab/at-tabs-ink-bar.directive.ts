import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';

import { atTabPositionMode } from './at-tabset.component';
import {toBoolean}           from '../utils/class-helper';

// tslint:disable:no-any typedef no-invalid-this
const availablePrefixs = [ 'moz', 'ms', 'webkit' ];

function requestAnimationFramePolyfill(): typeof requestAnimationFrame {
  let lastTime = 0;
  return function (callback: FrameRequestCallback): number {
    const currTime = new Date().getTime();
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = window.setTimeout(() => {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

function getRequestAnimationFrame(): typeof requestAnimationFrame {
  if (typeof window === 'undefined') {
    return () => null;
  }
  if (window.requestAnimationFrame) {
    // https://github.com/vuejs/vue/issues/4465
    return window.requestAnimationFrame.bind(window);
  }

  const prefix = availablePrefixs.filter(key => `${key}RequestAnimationFrame` in window)[ 0 ];

  return prefix
    ? window[ `${prefix}RequestAnimationFrame` ]
    : requestAnimationFramePolyfill();
}

export function cancelRequestAnimationFrame(id: number): any {
  if (typeof window === 'undefined') {
    return null;
  }
  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }
  const prefix = availablePrefixs.filter(key =>
    `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window
  )[ 0 ];

  return prefix ?
    (
      (window as any)[ `${prefix}CancelAnimationFrame` ] ||
      (window as any)[ `${prefix}CancelRequestAnimationFrame` ]
    ).call(this, id) : clearTimeout(id);
}

export const reqAnimFrame = getRequestAnimationFrame();


@Directive({
  selector: '[at-tabs-ink-bar]',
  host    : {
    '[class.at-tabs-ink-bar]'            : 'true',
    '[class.at-tabs-ink-bar-animated]'   : 'atAnimated',
    '[class.at-tabs-ink-bar-no-animated]': '!atAnimated'
  }
})
export class AtTabsInkBarDirective {
  private _animated = false;

  @Input()
  set atAnimated(value: boolean) {
    this._animated = toBoolean(value);
  }

  get atAnimated(): boolean {
    return this._animated;
  }

  @Input() atPositionMode: atTabPositionMode = 'horizontal';

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef,
              private ngZone: NgZone) {
  }

  alignToElement(element: HTMLElement): void {
    this.show();

    this.ngZone.runOutsideAngular(() => {
      reqAnimFrame(() => {
        /** when horizontal remove height style and add transform left **/
        if (this.atPositionMode === 'horizontal') {
          this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
          this.renderer.setStyle(this.elementRef.nativeElement, 'transform',
            `translate3d(${this.getLeftPosition(element)}, 0px, 0px)`);
          this.renderer.setStyle(this.elementRef.nativeElement, 'width',
            this.getElementWidth(element));
        } else {
          /** when vertical remove width style and add transform top **/
          this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
          this.renderer.setStyle(this.elementRef.nativeElement, 'transform',
            `translate3d(0px, ${this.getTopPosition(element)}, 0px)`);
          this.renderer.setStyle(this.elementRef.nativeElement, 'height',
            this.getElementHeight(element));
        }
      });
    });
  }

  show(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'visible');
  }

  setDisplay(value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', value);
  }

  getLeftPosition(element: HTMLElement): string {
    return element ? element.offsetLeft + 'px' : '0';
  }

  getElementWidth(element: HTMLElement): string {
    return element ? element.offsetWidth + 'px' : '0';
  }

  getTopPosition(element: HTMLElement): string {
    return element ? element.offsetTop + 'px' : '0';
  }

  getElementHeight(element: HTMLElement): string {
    return element ? element.offsetHeight + 'px' : '0';
  }
}
