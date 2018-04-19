import {CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair} from '@angular/cdk/overlay';
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
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime} from 'rxjs/operators/debounceTime';
import {mapTo} from 'rxjs/operators/mapTo';
import {merge} from 'rxjs/operators/merge';
import {DropDownAnimation} from "../animations/drop-down-animation";
import {DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP} from "../core/overlay/overlay-position-map";
import {DropdownMenuItemComponent} from "../menu/dropdown-menu-item/dropdown-menu-item.component";
import {PopTriggerDirective} from "./pop-trigger.directive";
import {toCamelCase, underscoreToCamelCase} from "../utils/class-helper";

@Component({
  selector: 'atPopover',
  animations: [DropDownAnimation],
  template: `
    <div class="at-popover">
      <ng-content></ng-content>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOrigin]="_atOrigin"
      (backdropClick)="_hide()"
      [cdkConnectedOverlayMinWidth]="_triggerWidth"
      (positionChange)="_onPositionChange($event)"
      [cdkConnectedOverlayOpen]="atVisible"
    >
      <div
        class="at-popover__popper__{{placement}} "
        [@dropDownAnimation]="_dropDownPosition"
        (mouseenter)="_onMouseEnterEvent($event)"
        (mouseleave)="_onMouseLeaveEvent($event)"
        [style.minWidth.px]="_triggerWidth"
        (click)="_clickDropDown($event)">
        <div class="at-popover__popper at-popover--{{placement || _placement}}">
          <div class="at-popover__arrow"></div>
          <div *ngIf="title" class="at-popover__title">
            <ng-content select="[popTitle]"></ng-content>
          </div>
          <div class="at-popover__content">
            <ng-content select="[popContent]"></ng-content>
          </div>
        </div>
        <!--<ng-content select="[at-dropdown-custom]"></ng-content>-->
      </div>
    </ng-template>


  `
})
export class PopoverComponent implements OnInit {

  private _clickHide = false;
  private _visible = false;
  hasFilterButton = false;
  _triggerWidth = 0;
  _placement: any = 'bottom';
  _dropDownPosition: 'top' | 'center' | 'bottom' = 'bottom';
  _positions: ConnectionPositionPair[] = [...DEFAULT_DROPDOWN_POSITIONS];
  _subscription: Subscription;

  @ContentChild(DropdownMenuItemComponent) _atMenu;
  @ContentChild(PopTriggerDirective) _atOrigin

  @Input() trigger: 'click' | 'hover' = 'hover';
  @Output() _visibleChange = new Subject<boolean>();
  @Output() atVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(CdkConnectedOverlay) _cdkOverlay: CdkConnectedOverlay;

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

  @Input()
  set placement(value: any) {
    this._placement = value;
    this._dropDownPosition = (this.atPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
    this._positions.unshift(POSITION_MAP[underscoreToCamelCase(this._placement)] as ConnectionPositionPair);
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
    this._dropDownPosition = position.connectionPair.originY;
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
  }

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

  get _hasBackdrop(): boolean {
    return this.trigger === 'click';
  }

  constructor(public _renderer: Renderer2, protected _changeDetector: ChangeDetectorRef) {
  }
}
