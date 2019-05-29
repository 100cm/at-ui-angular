import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, mapTo, merge } from 'rxjs/operators';
import { DropDownAnimation } from '../animations/drop-down-animation';
import { fadeAnimation } from '../animations/fade-animation';
import {
  DEFAULT_DROPDOWN_POSITIONS,
  POSITION_MAP
} from '../core/overlay/overlay-position-map';
import { DropdownMenuItemComponent } from '../menu/dropdown-menu-item/dropdown-menu-item.component';
import { toCamelCase, underscoreToCamelCase } from '../utils/class-helper';
import { PopTriggerDirective } from './pop-trigger.directive';

@Component({
  selector: 'at-popover',
  animations: [fadeAnimation],
  template: `
    <div class="at-popover">
      <ng-content select="[pop-trigger]"></ng-content>
    </div>
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOrigin]="_atOrigin"
      (backdropClick)="_hide()"
      (detach)="_hide()"
      [cdkConnectedOverlayMinWidth]="_triggerWidth"
      (positionChange)="_onPositionChange($event)"
      [cdkConnectedOverlayOpen]="atVisible"
    >
      <div
        [@fadeAnimation]="''+($visible | async)"
        (mouseenter)="_onMouseEnterEvent($event)"
        (mouseleave)="_onMouseLeaveEvent($event)"
        [style.minWidth.px]="_triggerWidth"
        (click)="_clickDropDown($event)">
        <div class="at-popover__popper " [ngClass]="placeClass">
          <div class="at-popover__arrow"></div>
          <div class="at-popover__content">
            <ng-content></ng-content>
          </div>
        </div>
        <!--<ng-content select="[at-dropdown-custom]"></ng-content>-->
      </div>
    </ng-template>


  `
})
export class PopoverComponent implements OnInit {

  private _clickHide = false;
  _visible = false;
  hasFilterButton = false;
  _triggerWidth = 0;
  _placement: any = 'bottom';
  _dropDownPosition: 'top' | 'center' | 'bottom' = 'bottom';
  _positions: ConnectionPositionPair[] = [...DEFAULT_DROPDOWN_POSITIONS];
  _subscription: Subscription;
  _prefix = 'at-popover--';

  @ContentChild(DropdownMenuItemComponent, /* TODO: add static flag */ {static: false}) _atMenu;
  @ContentChild(PopTriggerDirective, /* TODO: add static flag */ {static: false}) _atOrigin;

  @Input() trigger: 'click' | 'hover' = 'hover';
  @Output() _visibleChange = new Subject<boolean>();
  $visible = this._visibleChange.asObservable();
  @Output() atVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(CdkConnectedOverlay, {static: true}) _cdkOverlay: CdkConnectedOverlay;

  toBoolean(value: boolean | string): boolean {
    return value === '' || (value && value !== 'false');
  }

  @Input()
  set atClickHide(value: boolean) {
    this._clickHide = this.toBoolean(value);
  }

  get atClickHide(): boolean {
    return this._clickHide;
  }

  @Input()
  set atVisible(value: boolean) {
    this._visible = this.toBoolean(value);
  }

  get atVisible(): boolean {
    return this._visible;
  }

  get placeClass() {
    const classMap = {};
    classMap[`${this._prefix}${this._placement}`] = true;
    return classMap;
  }

  @Input()
  set placement(value: any) {
    this._placement = underscoreToCamelCase(value);
    this._dropDownPosition = (this.atPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
    this._positions.unshift(POSITION_MAP[underscoreToCamelCase(value)] as ConnectionPositionPair);
  }

  get atPlacement(): any {
    return this._placement;
  }

  _onClickEvent(): void {
    if (this.trigger === 'click') {
      this._show();
    }
  }

  _onMouseEnterEvent(e: MouseEvent): void {
    if (this.trigger === 'hover') {
      this._show();
    }
  }

  _onMouseLeaveEvent(e: MouseEvent): void {
    if (this.trigger === 'hover') {
      this._hide();
    }
  }

  _hide(): void {
    this._visibleChange.next(false);
  }

  _show(): void {
    this._visibleChange.next(true);
  }

  _onPositionChange(position: ConnectedOverlayPositionChange): void {
    // somtimes  'center' key will make impossible
    for (const key in POSITION_MAP) {
      if (JSON.stringify(position.connectionPair) === JSON.stringify(POSITION_MAP[key])) {
        this._placement = key;
        break;
      }
    }
    this.cdr.detectChanges();
  }

  _clickDropDown($event: MouseEvent): void {
    $event.stopPropagation();
    if (this.atClickHide) {
      this._hide();
    }
  }

  _setTriggerWidth(): void {
    this._triggerWidth = this._atOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    /** should remove after https://github.com/angular/material2/pull/8765 merged **/
    if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
      this._cdkOverlay.overlayRef.updateSize({
        minWidth: this._triggerWidth
      });
    }
  }

  _onVisibleChange = (visible: boolean) => {
    if (visible) {
      this._setTriggerWidth();
    }
    if (this.atVisible !== visible) {
      this.atVisible = visible;
      this.atVisibleChange.emit(this.atVisible);
    }
    this._changeDetector.markForCheck();
  };

  _startSubscribe(observable$: Observable<boolean>): void {
    this._subscription = observable$.pipe(debounceTime(50))
      .subscribe(this._onVisibleChange);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    let mouse$: Observable<boolean>;
    if (this._atOrigin) {
      if (this.trigger === 'hover') {
        const mouseEnterOrigin$ = fromEvent(this._atOrigin.elementRef.nativeElement, 'mouseenter').pipe(mapTo(true));
        const mouseLeaveOrigin$ = fromEvent(this._atOrigin.elementRef.nativeElement, 'mouseleave').pipe(mapTo(false));
        mouse$ = mouseEnterOrigin$.pipe(merge(mouseLeaveOrigin$));
      }
      if (this.trigger === 'click') {
        mouse$ = fromEvent(this._atOrigin.elementRef.nativeElement, 'click').pipe(mapTo(true));
        this._renderer.listen(this._atOrigin.elementRef.nativeElement, 'click', (e) => {
          e.preventDefault();
        });
      }
      const observable$ = mouse$.pipe(merge(this._visibleChange));
      this._startSubscribe(observable$);
    }
  }

  get _hasBackdrop(): boolean {
    return this.trigger === 'click';
  }

  constructor(public _renderer: Renderer2, private cdr: ChangeDetectorRef, protected _changeDetector: ChangeDetectorRef) {
  }
}
