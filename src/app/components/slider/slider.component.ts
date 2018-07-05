import {Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {from, fromEvent, Observable, Subject} from "rxjs";
import {concatAll, map, takeUntil} from "rxjs/operators";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {fadeAnimation} from "../animations/fade-animation";

@Component({
  selector: 'atSlider',
  template: `
    <div #slider class="at-slider">
      <div class="at-input-number at-slider__input at-input-number--normal" style="display: none;">
        <div class="at-input-number__input"><input type="number" class="at-input-number__original">
        </div>
        <div class="at-input-number__handler"><span class="at-input-number__up"><i
          class="icon icon-chevron-up"></i></span>
          <span class="at-input-number__down"><i class="icon icon-chevron-down"></i></span></div>
      </div>
      <div class="at-slider__track">
        <div class="at-slider__bar" [ngStyle]="{width: sliderPercentage+ '%'}"></div>
        <div #sliderDot class="at-slider__dot-wrapper at-slider__dot-wrapper--hover at-slider__dot-wrapper--drag"
             [ngStyle]="{left: sliderPercentage+ '%'}">
          <div class="at-tooltip"><span class="at-tooltip__trigger"><div
            class="at-slider__dot at-slider__dot--hover"></div> </span>
            <div *ngIf="visible$ | async" [@fadeAnimation]="''+(visible$ | async)"
                 class="at-tooltip__popper at-tooltip--top"
                 style=" top: -45px;min-width: 45px;width: auto;position: relative;left: -15px;">
              <div class="at-tooltip__arrow"></div>
              <div class="at-tooltip__content">
                {{sliderValue}}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ],
  animations: [fadeAnimation]
})
export class SliderComponent implements OnInit {

  constructor() {
  }


  ngOnInit() {

  }


  onChange: (value: any) => void = () => null;
  onTouched: () => void = () => null;

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.sliderValue = value || 0
  }


  @ViewChild('sliderDot') dot: ElementRef

  @ViewChild('slider') sliderEle: ElementRef

  @Input() range = 100
  @Input() private _step = 1

  @Output() sliding: EventEmitter<any> = new EventEmitter<any>()

  private _sliderValue = 0


  get sliderValue(): number {
    return Math.floor((this.sliderPercentage / 100) * this.range);
  }

  set sliderValue(value: number) {
    if (value) {
      this._sliderValue = value;
      this.sliderPercentage = Math.floor((value / this.range) * 100)
    }
  }


  get step(): number {
    return this._step;
  }

  set step(value: number) {
    this._step = value;
  }

  sliderPercentage = 0

  toolTipLeft = '0px'

  isSliding = new Subject<any>()

  visible$: Observable<boolean> = this.isSliding.asObservable();

  ngAfterViewInit() {
    let $touchStart = fromEvent(this.dot.nativeElement, 'mousedown')
    let $mouseMove = fromEvent(document.body, 'mousemove')
    let $mouseUp = fromEvent(document.body, 'mouseup')
    $touchStart.pipe(map(event =>

        $mouseMove.pipe(
          takeUntil($mouseUp))
      ),
      concatAll(),
      map((event: any) => ({
        x: event.clientX,
        y: event.clientY
      }))).subscribe(rect => {

      this.sliderPercentage = this.findClosestValue(rect)
      this.sliding.emit(this.sliderValue)
      // this.toolTipLeft = this.sliderEle.nativeElement.clientWidth * (this.sliderValue / 100) + 'px'
      this.isSliding.next(true)
    })

    $mouseUp.subscribe(event => {
      this.isSliding.next(false)
      this.onChange(this.sliderValue)
    })

  }

  /**
   * return {x:,y:}
   * @param data
   */
  findClosestValue(rect) {
    let slider = this.sliderEle.nativeElement
    let sliderLength: number = slider.clientWidth

    let sliderOffset = this.getElementOffset(slider)
    let range = sliderLength + sliderOffset.left
    let percentage = Math.floor(((rect.x - sliderOffset.left) / sliderLength) * 100)
    percentage > 100 ? percentage = 100 : 0
    percentage < 0 ? percentage = 0 : 0

    return percentage
  }

  /**
   * jquery offset
   * @param {HTMLElement} elem
   * @returns {{top: number; left: number}}
   */
  getElementOffset(elem: HTMLElement): { top: number, left: number } {
    // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if (!elem.getClientRects().length) {
      return {top: 0, left: 0};
    }
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    const rect = elem.getBoundingClientRect();
    const win = elem.ownerDocument.defaultView;
    return {
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset
    };
  }

}
