import {Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AtGlobalMonitorService} from "../../at-global-monitor.service";
import {fromEvent,Observable,Subscription} from "rxjs";

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

  @ViewChild('child') childElement: ElementRef

  private _atTarget: HTMLElement | any = window

  $scrollEvent: Observable<any>

  $scrollSubscribe: Subscription
  $windowScrollSubscribe: Subscription

  style: any = {}

  _cache_rect: any

  fixed = false

  get atTarget() {
    return this._atTarget;
  }


  @Input()
  set atTarget(value) {
    this._atTarget = value || window;
    this.clearEvent();
    this.$scrollEvent = fromEvent(this._atTarget, 'scroll')
    this.bindEvent()
  }


  ngAfterViewInit() {

  }

  ngOnInit() {
    this.$windowScrollSubscribe = this.monitor.$windowScrollEvent.subscribe(event => {
      this.calculateWidth()
      if (this._atTarget === window) {
        this.handleFix()
      } else {
        //fix the basis style height
        this.style.top = this._atTarget.getBoundingClientRect().top + "px"
      }
    })

  }

  handleFix() {
    let rect = this.getOffset(this.childElement.nativeElement, this._atTarget)
    this._cache_rect ? rect = this._cache_rect : rect = rect
    let dom
    this._atTarget === window ? dom = document.documentElement : dom = this._atTarget
    let top = dom.scrollTop
    this.fixed ? top += rect.height : top
    if (top > (rect.top)) {
      this.setCache(rect)
      this.setFix(rect, this._atTarget)
    } else {
      this.style = {}
      this.fixed = false
    }
  }

  setCache(rect) {
    this._cache_rect = {...rect}
  }

  handleReset() {

  }

  bindEvent() {
    this.$scrollSubscribe = this.$scrollEvent.subscribe(event => {
      this.handleFix()
    })
  }

  setFix(rect, target) {
    if (target === window) {
      this.style.position = "fixed"
      this.style.width = this.calculateWidth() + "px"
      this.style.top = "0px"
    }
    else {
      let parent_rect = this.getOffset(this._atTarget, window)
      this.style.position = "fixed"
      this.style.width = this.calculateWidth() + 'px'
      this.style.top = this._atTarget.getBoundingClientRect().top + "px"
    }
    this.fixed = true
  }

  clearEvent() {
    if (this.$scrollSubscribe) {
      this.$scrollSubscribe.unsubscribe()
    }
  }

  get offsetTop() {
    return this.childElement.nativeElement.offsetTop
  }

  getOffset(element: Element, target: Element | Window | null): {
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


  elementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

  calculateWidth() {
    return this.childElement.nativeElement.offsetWidth
  }

}

