import {
  forwardRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild
}                                             from '@angular/core';
import { NG_VALUE_ACCESSOR }                    from '@angular/forms';
import { from, fromEvent, merge, Observable, Subject } from 'rxjs';
import { concatAll, map, takeUntil }            from 'rxjs/operators';
import { fadeAnimation }                        from '../animations/fade-animation';

const _ = require('lodash');

@Component({
             selector: 'at-slider',
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
                   <div class="at-slider__bar" [ngStyle]="{width: inkPercentage+ '%',left: inkLeft + '%'}"></div>
                   <ng-container *ngFor="let item of markDots">
                     <div class="mark-container">
                       <div [ngClass]="{'at-slider__mark__not':!markInRange(item.left)}"
                            class="at-slider__mark" [ngStyle]="{left:  item.left +'%'}">
                       </div>
                       <div class="at-slider__mark__text" [ngStyle]="{left:  item.left +'%'}">
                         {{item.title}}
                       </div>
                     </div>
                   </ng-container>

                   <!--//dot basic-->
                   <div #sliderDot
                        class="at-slider__dot-wrapper at-slider__dot-wrapper--hover at-slider__dot-wrapper--drag"
                        [ngStyle]="{left: sliderPercentage['start']+ '%'}">
                     <div class="at-tooltip">
                       <span class="at-tooltip__trigger">
                       <div class="at-slider__dot at-slider__dot--hover"></div>
                        </span>
                       <div *ngIf="(visible$ | async) && currentVisible('start') "
                            [@fadeAnimation]="''+(visible$ | async)"
                            class="at-tooltip__popper at-tooltip--top"
                            style=" top: -55px;position: relative;left: 50%;
                            transform: translateX(-50%); display: inline-block">
                         <div class="at-tooltip__arrow"></div>
                         <div class="at-tooltip__content">
                           <span> {{labelValue('start')}}</span>
                         </div>
                       </div>
                     </div>

                   </div>
                   <!--//dot end-->
                   <ng-container *ngIf="atMode == 'range'">
                     <div #sliderDotEnd
                          class="at-slider__dot-wrapper at-slider__dot-wrapper--hover at-slider__dot-wrapper--drag"
                          [ngStyle]="{left: sliderPercentage['end']+ '%'}"
                     >
                       <div class="at-tooltip"><span class="at-tooltip__trigger"><div
                         class="at-slider__dot at-slider__dot--hover"></div> </span>
                         <div *ngIf="(visible$ | async) && currentVisible('end')"
                              [@fadeAnimation]="''+(visible$ | async)"
                              class="at-tooltip__popper at-tooltip--top"
                              style=" top: -55px;position: relative;left: 50%;
                            transform: translateX(-50%); display: inline-block">
                           <div class="at-tooltip__arrow"></div>
                           <div class="at-tooltip__content">
                             <span> {{labelValue('end')}}</span>
                           </div>
                         </div>
                       </div>

                     </div>
                   </ng-container>
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

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

  }

  onChange: (value: any) => void = () => null;
  onTouched: () => void          = () => null;

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.sliderValue = value || 0;
  }

  @ViewChild('sliderDot') dot: ElementRef;

  @ViewChild('sliderDotEnd') dotEnd: ElementRef;

  @ViewChild('slider') sliderEle: ElementRef;

  @Input() range = 100;

  private _step = 1;

  @Input() atMode = 'common';

  private _marks = [];

  @Output() atValueChange: EventEmitter<any> = new EventEmitter<any>();

  private _sliderValue = 0;

  get marks(): any[] {
    return this._marks;
  }

  get markDots() {
    return this.marksArray.map(number => {
      return {
        title: this.marks[number],
        left: Math.floor(number) / Math.floor(this.range) * 100
      };
    });
  }

  get marksArray() {
    const array = [];
    for (const number in this.marks) {
      array.push(number);
    }
    return array;
  }

  // [{}]

  @Input()
  set marks(value: any[]) {
    this._marks = value;
  }

  get sliderValue(): number {
    const array = _.sortBy(this.stepToArray(this.range, this.step).concat(this.marksArray));
    if (this.atMode == 'range') {
      return this.sortPercentage().map(v => {
        const value = Math.floor((v / 100) * this.range);
        return value >= this.range ? value : this.closest(array, value);
      });
    } else {
      const v = Math.floor((this.sliderPercentage.start / 100) * this.range);
      return v >= this.range ? v : this.closest(array, v);
    }
  }

  labelValue(index) {
    return Math.floor((this.sliderPercentage[index] / 100) * this.range);
  }

  set sliderValue(value: number) {
    if (value) {
      this._sliderValue = value;
      if (this.atMode == 'common') {
        this.sliderPercentage.start = Math.floor((value / this.range) * 100);
      } else {
        this.sliderPercentage.start = Math.floor((value[0] / this.range) * 100);
        this.sliderPercentage.end   = Math.floor((value[1] / this.range) * 100);
      }
    }
  }

  get inkPercentage() {
    if (this.atMode == 'range') {
      return this.sortPercentage()[1] - this.sortPercentage()[0];
    } else {
      return this.sliderPercentage.start;
    }
  }

  get inkLeft() {
    if (this.atMode == 'range') {
      return this.sortPercentage()[0];
    } else {
      return 0;
    }
  }

  sortPercentage() {
    return _.sortBy(this.sliderPercentage);
  }

  get step(): number {
    return this._step;
  }

  @Input()
  set step(value: number) {
    this._step = value;
  }

  sliderPercentage = {start: 0, end: 0};

  isSliding = new Subject<any>();

  visible$: Observable<boolean> = this.isSliding.asObservable();

  activeIndex = 'start';

  currentVisible(index) {
    return this.activeIndex == index;
  }

  ngAfterViewInit() {
    const $beginStart = fromEvent(this.dot.nativeElement, 'mousedown');
    let $touchStart;
    let $endTouchStart;
    if (this.dotEnd) {
      $endTouchStart = fromEvent(this.dotEnd.nativeElement, 'mousedown');
      $touchStart    = merge($beginStart, $endTouchStart);
      this.renderer.listen(this.dotEnd.nativeElement, 'mousedown', (e) => {
        e.preventDefault();
        this.activeIndex = 'end';
      });
    } else {
      $touchStart = $beginStart;
    }
    this.renderer.listen(this.dot.nativeElement, 'mousedown', (e) => {
      e.preventDefault();
      this.activeIndex = 'start';
    });

    const $mouseMove = fromEvent(document.body, 'mousemove');
    const $mouseUp   = fromEvent(document.body, 'mouseup');
    $touchStart.pipe(map(event =>
                           $mouseMove.pipe(
                             takeUntil($mouseUp))
                     ),
                     concatAll(),
                     map((event: any) => ({
                       x: event.clientX,
                       y: event.clientY
                     }))).subscribe(rect => {
      this.sliderPercentage[this.activeIndex] = this.findClosestValue(rect);
      this.atValueChange.emit(this.sliderValue);
      // this.toolTipLeft = this.sliderEle.nativeElement.clientWidth * (this.sliderValue / 100) + 'px'
      this.isSliding.next(true);
    });

    $mouseUp.subscribe(event => {
      this.isSliding.next(false);
      this.onChange(this.sliderValue);
    });

  }

  markInRange(left) {
    return (left <= this.sortPercentage()[1] && left >= this.sortPercentage()[0]);
  }

  /**
   * return {x:,y:}
   */
  findClosestValue(rect) {
    const slider               = this.sliderEle.nativeElement;
    const sliderLength: number = slider.clientWidth;
    const sliderOffset         = this.getElementOffset(slider);
    const range                = sliderLength + sliderOffset.left;
    const each_range           = (this.range / this.step);

    // get the percentage
    let percentage = Math.floor(((rect.x - sliderOffset.left) / sliderLength) * 100);
    percentage > 100 ? percentage = 100 : 0;
    percentage < 0 ? percentage = 0 : 0;

    // find the closet array
    const stepPercent = (this.step / this.range) * 100;
    let array       = this.stepToArray(100, stepPercent);
    const mark_array  = this.marksArray.map(number => Math.floor(number) / Math.floor(this.range) * 100);
    array           = _.sortBy(array.concat(mark_array));
    return (percentage == 100 ? 100 : this.closest(array, percentage));
  }

  /**
   * jquery offset
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
    const win  = elem.ownerDocument.defaultView;
    return {
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset
    };
  }

  stepToArray(range, step) {
    const range_length = Math.floor(range / step);
    const range_array  = [];
    for (let i = 0; i <= range_length; i++) {
      let array_item = i * step;
      array_item     = array_item < range ? array_item : range;
      range_array.push(array_item);
    }
    return range_array;
  }

  closest(arr, num) {
    let mid;
    let lo = 0;
    let hi = arr.length - 1;
    while (hi - lo > 1) {
      mid = Math.floor((lo + hi) / 2);
      if (arr[mid] < num) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    if (num - arr[lo] <= arr[hi] - num) {
      return arr[lo];
    }
    return arr[hi];
  }

}
