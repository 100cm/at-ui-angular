/** code from https://github.com/angular/material2 */
import { Direction, Directionality }                          from '@angular/cdk/bidi';
import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Optional,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild
}                                                             from '@angular/core';
import { fromEvent, merge, of as observableOf, Subscription } from 'rxjs';
import { auditTime, startWith }                               from 'rxjs/operators';


import { AtTabLabelDirective }   from './at-tab-label.directive';
import { AtTabsInkBarDirective } from './at-tabs-ink-bar.directive';

const EXAGGERATED_OVERSCROLL = 64;
export type ScrollDirection = 'after' | 'before';

import { toBoolean }         from '../utils/class-helper';
import { atTabPositionMode } from './at-tabset.component';

@Component({
  selector: '[at-tabs-nav]',
  preserveWhitespaces: false,
  template: `
    <div style="float:right;" *ngIf="atTabBarExtraContent" class="at-tabs-extra-content">
      <ng-template [ngTemplateOutlet]="atTabBarExtraContent"></ng-template>
    </div>
    <div class="at-tabs-nav-container" [class.at-tabs-nav-container-scrolling]="showPaginationControls"
         #navContainerElement>
  <span class="at-tabs-tab-prev" (click)="scrollHeader('before')"
        [class.at-tabs-tab-btn-disabled]="disableScrollBefore"
        [class.at-tabs-tab-arrow-show]="showPaginationControls">
    <span class="at-tabs-tab-prev-icon">
      <at-icon [type]="atPositionMode === 'horizontal' ? 'chevron-left' : 'chevron-up'"
               class="at-tabs-tab-prev-icon-target"></at-icon>
    </span>
  </span>
      <span class="at-tabs-tab-next" (click)="scrollHeader('after')"
            [class.at-tabs-tab-btn-disabled]="disableScrollAfter"
            [class.at-tabs-tab-arrow-show]="showPaginationControls">
    <span class="at-tabs-tab-next-icon">
      <at-icon [type]="atPositionMode === 'horizontal' ? 'chevron-right' : 'chevron-down'"
               class="at-tabs-tab-next-icon-target"></at-icon>
    </span>
  </span>
      <div class="at-tabs-nav-wrap">
        <div class="at-tabs-nav-scroll">
          <div
            class="at-tabs-nav"
            [class.at-tabs-nav-animated]="atAnimated"
            #navListElement
            (cdkObserveContent)="onContentChanges()">
            <div at-tabs-ink-bar [hidden]="atHideBar" [atAnimated]="atAnimated" [atPositionMode]="atPositionMode"
                 style="display: block;"></div>
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>`
})
export class AtTabsNavComponent implements AfterContentChecked, AfterContentInit {
  private _animated = true;
  private _hideBar = false;
  private _showPagination = true;
  private _type = 'line';
  private _tabPositionMode: atTabPositionMode = 'horizontal';
  private _scrollDistance = 0;
  private _selectedIndex = 0;
  showPaginationControls = false;
  disableScrollAfter = true;
  disableScrollBefore = true;
  selectedIndexChanged = false;
  realignInkBar: Subscription | null = null;
  tabLabelCount: number;
  scrollDistanceChanged: boolean;
  @ContentChildren(AtTabLabelDirective) listOfatTabLabelDirective: QueryList<AtTabLabelDirective>;
  @ViewChild(AtTabsInkBarDirective) atTabsInkBarDirective: AtTabsInkBarDirective;
  @ViewChild('navContainerElement') navContainerElement: ElementRef;
  @ViewChild('navListElement') navListElement: ElementRef;
  @Output() readonly atOnNextClick = new EventEmitter<void>();
  @Output() readonly atOnPrevClick = new EventEmitter<void>();
  @Input() atTabBarExtraContent: TemplateRef<void>;

  @Input()
  set atAnimated(value: boolean) {
    this._animated = toBoolean(value);
  }

  get atAnimated(): boolean {
    return this._animated;
  }

  @Input()
  set atHideBar(value: boolean) {
    this._hideBar = toBoolean(value);
  }

  get atHideBar(): boolean {
    return this._hideBar;
  }

  @Input()
  set atType(value: string) {
    this._type = value;
    if (this._type !== 'line') {
      this.atTabsInkBarDirective.setDisplay('none');
    } else {
      this.atTabsInkBarDirective.setDisplay('block');
    }
  }

  get atType(): string {
    return this._type;
  }

  @Input()
  set atShowPagination(value: boolean) {
    this._showPagination = toBoolean(value);
  }

  get atShowPagination(): boolean {
    return this._showPagination;
  }

  @Input()
  set atPositionMode(value: atTabPositionMode) {
    this._tabPositionMode = value;
    this.alignInkBarToSelectedTab();
    if (this.atShowPagination) {
      this.updatePagination();
    }
  }

  get atPositionMode(): atTabPositionMode {
    return this._tabPositionMode;
  }

  @Input()
  set selectedIndex(value: number) {
    this.selectedIndexChanged = this._selectedIndex !== value;

    this._selectedIndex = value;
  }

  get selectedIndex(): number {
    return this._selectedIndex;
  }

  constructor(public elementRef: ElementRef,
              private ngZone: NgZone,
              private renderer: Renderer2,
              @Optional() private dir: Directionality) {
  }

  onContentChanges(): void {
    if (this.atShowPagination) {
      this.updatePagination();
    }
    this.alignInkBarToSelectedTab();
  }

  scrollHeader(scrollDir: ScrollDirection): void {
    if (scrollDir === 'before' && !this.disableScrollBefore) {
      this.atOnPrevClick.emit();
    } else if (scrollDir === 'after' && !this.disableScrollAfter) {
      this.atOnNextClick.emit();
    }
    // Move the scroll distance one-third the length of the tab list's viewport.
    this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix / 3;
  }

  ngAfterContentChecked(): void {

    if (this.tabLabelCount !== this.listOfatTabLabelDirective.length) {
      if (this.atShowPagination) {
        this.updatePagination();
      }
      this.tabLabelCount = this.listOfatTabLabelDirective.length;
    }
    if (this.selectedIndexChanged) {
      this.scrollToLabel(this._selectedIndex);
      if (this.atShowPagination) {
        this.checkScrollingControls();
      }
      this.alignInkBarToSelectedTab();
      this.selectedIndexChanged = false;
    }
    if (this.scrollDistanceChanged) {
      if (this.atShowPagination) {
        this.updateTabScrollPosition();
      }
      this.scrollDistanceChanged = false;
    }
  }

  ngAfterContentInit(): void {
    this.realignInkBar = this.ngZone.runOutsideAngular(() => {
      const dirChange = this.dir ? this.dir.change : observableOf(null);
      const resize = typeof window !== 'undefined' ?
        fromEvent(window, 'resize').pipe(auditTime(10)) :
        observableOf(null);
      return merge(dirChange, resize).pipe(startWith(null)).subscribe(() => {
        if (this.atShowPagination) {
          this.updatePagination();
        }
        this.alignInkBarToSelectedTab();
      });
    });
  }

  updateTabScrollPosition(): void {
    const scrollDistance = this.scrollDistance;
    if (this.atPositionMode === 'horizontal') {
      const translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
      this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(${translateX}px, 0, 0)`);
    } else {
      this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(0,${-scrollDistance}px, 0)`);
    }
  }

  updatePagination(): void {
    this.checkPaginationEnabled();
    this.checkScrollingControls();
    this.updateTabScrollPosition();
  }

  checkPaginationEnabled(): void {
    this.showPaginationControls =
      this.tabListScrollWidthHeightPix > this.elementRefOffSetWidthHeight;

    if (!this.showPaginationControls) {
      this.scrollDistance = 0;
    }
  }

  scrollToLabel(labelIndex: number): void {
    const selectedLabel = this.listOfatTabLabelDirective
      ? this.listOfatTabLabelDirective.toArray()[labelIndex]
      : null;

    if (selectedLabel) {
      // The view length is the visible width of the tab labels.

      let labelBeforePos: number;
      let labelAfterPos: number;
      if (this.atPositionMode === 'horizontal') {
        if (this.getLayoutDirection() === 'ltr') {
          labelBeforePos = selectedLabel.getOffsetLeft();
          labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
        } else {
          labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
          labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
        }
      } else {
        labelBeforePos = selectedLabel.getOffsetTop();
        labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
      }
      const beforeVisiblePos = this.scrollDistance;
      const afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;

      if (labelBeforePos < beforeVisiblePos) {
        // Scroll header to move label to the before direction
        this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
      } else if (labelAfterPos > afterVisiblePos) {
        // Scroll header to move label to the after direction
        this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
      }
    }
  }

  checkScrollingControls(): void {
    // Check if the pagination arrows should be activated.
    this.disableScrollBefore = this.scrollDistance === 0;
    this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
  }

  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  getMaxScrollDistance(): number {
    return (this.tabListScrollWidthHeightPix - this.viewWidthHeightPix) || 0;
  }

  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  set scrollDistance(v: number) {
    this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));

    // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.
    this.scrollDistanceChanged = true;

    this.checkScrollingControls();
  }

  get scrollDistance(): number {
    return this._scrollDistance;
  }

  get viewWidthHeightPix(): number {
    let PAGINATION_PIX = 0;
    if (this.showPaginationControls) {
      PAGINATION_PIX = 64;
    }
    if (this.atPositionMode === 'horizontal') {
      return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
    } else {
      return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
    }
  }

  get tabListScrollWidthHeightPix(): number {
    if (this.atPositionMode === 'horizontal') {
      return this.navListElement.nativeElement.scrollWidth;
    } else {
      return this.navListElement.nativeElement.scrollHeight;
    }
  }

  get elementRefOffSetWidthHeight(): number {
    if (this.atPositionMode === 'horizontal') {
      return this.elementRef.nativeElement.offsetWidth;
    } else {
      return this.elementRef.nativeElement.offsetHeight;
    }
  }

  getLayoutDirection(): Direction {
    return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
  }

  alignInkBarToSelectedTab(): void {
    if (this.atType === 'line') {
      const selectedLabelWrapper = this.listOfatTabLabelDirective && this.listOfatTabLabelDirective.length
        ? this.listOfatTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
        : null;
      if (this.atTabsInkBarDirective) {
        this.atTabsInkBarDirective.alignToElement(selectedLabelWrapper);
      }
    }
  }
}
