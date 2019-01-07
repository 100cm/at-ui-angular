import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription }                           from 'rxjs';
import { AtGlobalMonitorService }                                        from '../../at-global-monitor.service';

@Component({
  selector: 'at-affix',
  template: `
    <div #child [ngStyle]="style">
      <ng-content></ng-content>
    </div>`
})
export class AtAffixComponent implements OnInit {

  constructor(private monitor: AtGlobalMonitorService) {
  }

  @ViewChild('child') childElement: ElementRef;

  private _atTarget: HTMLElement | Window = window;

  $scrollEvent: Observable<any>;

  $scrollSubscribe: Subscription;
  $windowScrollSubscribe: Subscription;

  style: { [x: string]: string } = {};

  _cache_rect;

  fixed = false;

  get atTarget(): HTMLElement | Window {
    return this._atTarget;
  }

  @Input()
  set atTarget(value: HTMLElement | Window) {
    this._atTarget = value || window;
    this.clearEvent();
    this.$scrollEvent = fromEvent(this._atTarget, 'scroll');
    this.bindEvent();
  }

  ngOnInit(): void {
    this.$windowScrollSubscribe = this.monitor.$windowScrollEvent.subscribe(event => {
      this.calculateWidth();
      if (this._atTarget === window) {
        this.handleFix();
      } else if (this._atTarget instanceof Element) {
        // fix the basis style height
        this.style.top = this._atTarget.getBoundingClientRect().top + 'px';
      }
    });

  }

  handleFix(): void {
    let rect = this.getOffset(this.childElement.nativeElement, this._atTarget);
    this._cache_rect ? rect = this._cache_rect : rect = rect;
    let dom;
    this._atTarget === window ? dom = document.documentElement : dom = this._atTarget;
    let top = dom.scrollTop;
    if (this.fixed) {
      top += rect.height;
    }
    ;
    if (top > (rect.top)) {
      this.setCache(rect);
      this.setFix(rect, this._atTarget);
    } else {
      this.style = {};
      this.fixed = false;
    }
  }

  setCache(rect: { [x: string]: number }): void {
    this._cache_rect = {...rect};
  }

  bindEvent(): void {
    this.$scrollSubscribe = this.$scrollEvent.subscribe(event => {
      this.handleFix();
    });
  }

  setFix(rect: { [x: string]: number }, target: HTMLElement | Window): void {

    if (target === window) {
      this.style.position = 'fixed';
      this.style.width = this.calculateWidth() + 'px';
      this.style.top = '0px';
    } else {
      this.style.position = 'fixed';
      this.style.width = this.calculateWidth() + 'px';
      // noinspection TsLint
      if (this._atTarget instanceof HTMLElement){
        this.style.top = this._atTarget.getBoundingClientRect().top + 'px';
      }
    }
    this.fixed = true;
  }

  clearEvent(): void {
    if (this.$scrollSubscribe) {
      this.$scrollSubscribe.unsubscribe();
    }
  }

  get offsetTop(): string {
    return this.childElement.nativeElement.offsetTop;
  }

  getOffset(element: HTMLElement, target: Element | Window | null): {
    top: number;
    left: number;
    width: number;
    height: number;
  } {
    const elemRect = element.getBoundingClientRect();
    const targetRect = this.getTargetRect(target);

    const scrollTop = this.getScroll(target, true);
    const scrollLeft = this.getScroll(target, false);

    const docElem = window.document.body;
    const clientTop = docElem.clientTop || 0;
    const clientLeft = docElem.clientLeft || 0;

    return {
      top: elemRect.top - targetRect.top + scrollTop - clientTop,
      left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
      width: elemRect.width,
      height: elemRect.height
    };
  }

  getScroll(el?: Element | Window, top: boolean = true): number {
    const target = el ? el : window;
    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';
    const isWindow = target === window;
    let ret = isWindow ? target[prop] : target[method];
    if (isWindow && typeof ret !== 'number') {
      ret = document.documentElement[method];
    }
    return ret;
  }

  private getTargetRect(target: Element | Window | null): ClientRect {
    return target !== window ?
      (target as HTMLElement).getBoundingClientRect() :
      {top: 0, left: 0, bottom: 0} as ClientRect;
  }

  elementInViewport(el: HTMLElement): boolean {
    let baseEl = el;
    let top = baseEl.offsetTop;
    let left = baseEl.offsetLeft;
    const width = baseEl.offsetWidth;
    const height = baseEl.offsetHeight;
    while (el.offsetParent) {
      baseEl = el.offsetParent as HTMLElement;
      top += baseEl.offsetTop;
      left += baseEl.offsetLeft;
    }
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

  calculateWidth(): string {
    return this.childElement.nativeElement.offsetWidth;
  }

}
