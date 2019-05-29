import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy, OnInit,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild
}                              from '@angular/core';
import { Subject }             from 'rxjs';
import { takeUntil }           from 'rxjs/operators';
import { toBoolean, toNumber } from '../../utils/class-helper';
import { AtCarouselDirective } from './at-carousel.directive';

export type SwipeDirection = 'swipeleft' | 'swiperight';

@Component({
  selector: 'at-carousel',
  template: `
    <div class="slick-initialized slick-slider">
      <div class="slick-list" #slickList tabindex="-1" (keydown)="onKeyDown($event)"
           (swipeleft)="swipe('swipeleft')" (swiperight)="swipe('swiperight')"
           (pan)="swipeInProgress($event);">
        <div class="slick-track" [style.transform]="transform" #slickTrack>
             <!--(mousedown)="$event.preventDefault()">-->
          <ng-content></ng-content>
        </div>
      </div>
      <ul class="slick-dots" *ngIf="atDots">
        <li
          *ngFor="let content of slideContents; let i =index"
          [class.slick-active]="content.isActive"
          (click)="setActive(content,i)">
          <ng-template [ngTemplateOutlet]="atDotRender || renderDotTemplate"
                       [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
        </li>
        <li *ngIf="atShowPage" class="slick-dots-page"><span>{{activeIndex}}/{{ActivePage}}</span></li>
      </ul>
    </div>

    <ng-template #renderDotTemplate let-index>
      <button>{{index + 1}}</button>
    </ng-template>
  `,
  host: {
    '[class.at-carousel]': 'true'
  },
  styles: [
      `
      :host {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .slick-dots {
        display: block;
      }

      .slick-track {
        opacity: 1;
        transition: all 0.5s ease;
      }

      .slick-slide {
        transition: opacity 500ms ease;
      }

    `
  ]
})
export class AtCarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  ngOnInit(): void {
  }

  private _autoPlay = false;
  private _autoPlaySpeed = 3000;
  private _dots = true;
  private _vertical = false;
  private _effect = 'scrollx';
  private unsubscribe$ = new Subject<void>();

  activeIndex = 0;
  transform = 'translate3d(0px, 0px, 0px)';
  timeout;

  @ContentChildren(AtCarouselDirective) slideContents: QueryList<AtCarouselDirective>;
  @ViewChild('slickList', { static: true }) slickList: ElementRef;
  @ViewChild('slickTrack', { static: true }) slickTrack: ElementRef;
  @Output() readonly atAfterChange: EventEmitter<number> = new EventEmitter();
  @Output() readonly atBeforeChange: EventEmitter<{ from: number; to: number }> = new EventEmitter();
  @Input() atEnableSwipe = true;

  @HostListener('window:resize', ['$event'])
  onWindowResize(e: UIEvent): void {
    this.renderContent();
  }

  @Input() atShowPage = false;

  get nextIndex(): number {
    return this.activeIndex < this.slideContents.length - 1 ? (this.activeIndex + 1) : 0;
  }

  get prevIndex(): number {
    return this.activeIndex > 0 ? (this.activeIndex - 1) : (this.slideContents.length - 1);
  }

  @Input() atDotRender: TemplateRef<{ $implicit: number }>;

  @Input()
  set atDots(value: boolean) {
    this._dots = toBoolean(value);
  }

  get atDots(): boolean {
    return this._dots;
  }

  @Input()
  set atEffect(value: string) {
    this._effect = value;
    this.updateMode();
  }

  get atEffect(): string {
    return this._effect;
  }

  @Input()
  set atAutoPlay(value: boolean) {
    this._autoPlay = toBoolean(value);
    this.setUpAutoPlay();
  }

  get atAutoPlay(): boolean {
    return this._autoPlay;
  }

  @Input()
  set atAutoPlaySpeed(value: number) {
    this._autoPlaySpeed = toNumber(value, null);
    this.setUpAutoPlay();
  }

  get atAutoPlaySpeed(): number {
    return this._autoPlaySpeed;
  }

  @Input()
  @HostBinding('class.at-carousel-vertical')
  set atVertical(value: boolean) {
    this._vertical = toBoolean(value);
    this.updateMode();
  }

  get atVertical(): boolean {
    return this._vertical;
  }

  get ActivePage(): number {
    return this.slideContents.length;
  }

  setActive(content: AtCarouselDirective, i: number): void {
    if (this.slideContents && this.slideContents.length) {
      this.setUpAutoPlay();
      const beforeIndex = this.slideContents.toArray().findIndex(slide => slide.isActive);
      this.atBeforeChange.emit({from: beforeIndex, to: i});
      this.activeIndex = i;
      if (this.atEffect === 'scrollx') {
        if (this.atVertical) {
          this.transform = `translate3d(0px, ${-this.activeIndex * this.elementRef.nativeElement.offsetHeight}px, 0px)`;
        } else {
          this.transform = `translate3d(${-this.activeIndex * this.elementRef.nativeElement.offsetWidth}px, 0px, 0px)`;
        }
      } else {
        this.transform = 'translate3d(0px, 0px, 0px)';
      }
      this.slideContents.forEach(slide => slide.isActive = slide === content);
      this.atAfterChange.emit(i);
    }
  }

  renderContent(): void {
    if (this.slideContents && this.slideContents.length) {
      const width = this.elementRef.nativeElement.offsetWidth;
      this.slideContents.forEach((content, i) => {
        content.width = width;
        if (this.atEffect === 'fade') {
          content.fadeMode = true;
          if (this.atVertical) {
            content.top = -i * this.elementRef.nativeElement.offsetHeight;
          } else {
            content.left = -i * content.width;
          }
        } else {
          content.fadeMode = false;
          content.left = null;
          content.top = null;
        }
      });
      if (this.atVertical) {
        this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
        this.renderer.removeStyle(this.slickList.nativeElement, 'width');
        this.renderer.removeStyle(this.slickList.nativeElement, 'height');
        this.renderer.setStyle(this.slickList.nativeElement, 'height', `${this.slideContents.first.el.offsetHeight}px`);
        this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
        this.renderer.setStyle(this.slickTrack.nativeElement, 'height', `${this.slideContents.length * width}px`);
      } else {
        this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
        this.renderer.removeStyle(this.slickList.nativeElement, 'height');
        this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
        this.renderer.setStyle(this.slickTrack.nativeElement, 'width', `${this.slideContents.length * width}px`);
      }
      this.setUpAutoPlay();
    }
  }

  setUpAutoPlay(): void {
    this.clearTimeout();
    if (this.atAutoPlay && this.atAutoPlaySpeed > 0) {
      this.timeout = setTimeout(_ => {
        this.setActive(this.slideContents.toArray()[this.nextIndex], this.nextIndex);
      }, this.atAutoPlaySpeed);
    }
  }

  updateMode(): void {
    if (this.slideContents && this.slideContents.length) {
      this.renderContent();
      this.setActive(this.slideContents.first, 0);
    }
  }

  clearTimeout(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  next(): void {
    this.setActive(this.slideContents.toArray()[this.nextIndex], this.nextIndex);
  }

  pre(): void {
    this.setActive(this.slideContents.toArray()[this.prevIndex], this.prevIndex);
  }

  goTo(index: number): void {
    if (index >= 0 && index <= this.slideContents.length - 1) {
      this.setActive(this.slideContents.toArray()[index], index);
    }
  }

  onKeyDown(e: KeyboardEvent): void {
    if (e.keyCode === 37) { // Left
      this.pre();
      e.preventDefault();
    } else if (e.keyCode === 39) { // Right
      this.next();
      e.preventDefault();
    }
  }

  swipe(action: SwipeDirection = 'swipeleft'): void {
    if (!this.atEnableSwipe) {
      return;
    }
    if (action === 'swipeleft') {
      this.next();
    }
    if (action === 'swiperight') {
      this.pre();
    }
  }

  /* tslint:disable:no-any */
  swipeInProgress(e: any): void {
    if (this.atEffect === 'scrollx') {
      const final = e.isFinal;
      const scrollWidth = final ? 0 : e.deltaX * 1.2;
      const totalWidth = this.elementRef.nativeElement.offsetWidth;
      if (this.atVertical) {
        const totalHeight = this.elementRef.nativeElement.offsetHeight;
        const scrollPercent = scrollWidth / totalWidth;
        const scrollHeight = scrollPercent * totalHeight;
        this.transform = `translate3d(0px, ${-this.activeIndex * totalHeight + scrollHeight}px, 0px)`;
      } else {
        this.transform = `translate3d(${-this.activeIndex * totalWidth + scrollWidth}px, 0px, 0px)`;
      }
    }
    if (e.isFinal) {
      this.setUpAutoPlay();
    } else {
      this.clearTimeout();
    }
  }

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterContentInit(): void {
    if (this.slideContents && this.slideContents.length) {
      this.slideContents.first.isActive = true;
    }
  }

  ngAfterViewInit(): void {
    this.slideContents.changes
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.renderContent();
      });
    this.renderContent();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.clearTimeout();
  }

}
