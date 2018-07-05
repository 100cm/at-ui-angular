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
import {combineLatest, merge, BehaviorSubject, Subscription, Observable, Subject, fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, mapTo, takeUntil} from 'rxjs/operators';
import {DropDownAnimation} from "../animations/drop-down-animation";
import {DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP} from "../core/overlay/overlay-position-map";
import {
  DropdownMenuItemComponent
} from "../menu/dropdown-menu-item/dropdown-menu-item.component";
import {DropdownDirective} from "./dropdown.directive";


@Component({
  selector: 'atDropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <ng-content></ng-content>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayBackdropClass]="'select-back-drop'"
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOrigin]="_atOrigin"
      (backdropClick)="_hide()"
      [cdkConnectedOverlayMinWidth]="_triggerWidth"
      (positionChange)="_onPositionChange($event)"
      [cdkConnectedOverlayOpen]="atVisible"
    >
      <div
        class="{{'at-dropdown at-dropdown-placement-'+atPlacement}}"
        [@dropDownAnimation]="_dropDownPosition"
        (mouseenter)="_onMouseEnterEvent($event)"
        (mouseleave)="_onMouseLeaveEvent($event)"
        [style.minWidth.px]="_triggerWidth"
        (click)="_clickDropDown($event)">
        <div>
          <ul *ngIf="!custom_content" atDropMenuList>
            <ng-content select="[atDropMenuItem]"></ng-content>
          </ul>
          <!--<ng-content select="[at-table-filter]"></ng-content>-->
          <ng-content select="[atDropMenuCustomItem]"></ng-content>
        </div>
        <!--<ng-content select="[at-dropdown-custom]"></ng-content>-->
      </div>
    </ng-template>
  `,
  animations: [DropDownAnimation],
})

export class DropdownComponent implements OnInit {

  @Input() custom_content = false

  private unsubscribe$ = new Subject<void>();
  $subOpen = new BehaviorSubject<boolean>(false);

  private _clickHide = false;
  private _visible = false;
  hasFilterButton = false;
  _triggerWidth = 0;
  _placement: any = 'bottom';
  _dropDownPosition: 'top' | 'center' | 'bottom' = 'bottom';
  _positions: ConnectionPositionPair[] = [...DEFAULT_DROPDOWN_POSITIONS];
  _subscription: Subscription;
  @ContentChild(DropdownDirective) _atOrigin;
  @ContentChild(DropdownMenuItemComponent) _atMenu;
  @Input() trigger: 'click' | 'hover' = 'hover';
  @Output() _visibleChange = new Subject<boolean>();
  @Output() atVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(CdkConnectedOverlay) _cdkOverlay: CdkConnectedOverlay;

  toBoolean(value: boolean | string): boolean {
    return value === '' || (value && value !== 'false');
  }


  @Input()
  set autoClose(value: boolean) {
    this._clickHide = this.toBoolean(value);
  }

  get autoClose(): boolean {
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
    this._positions.unshift(POSITION_MAP[this._placement] as ConnectionPositionPair);
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
    if (this.autoClose) {
      this._hide();
    }
  }

  _setTriggerWidth(): void {
    this._triggerWidth = this._atOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    /** should remove after https://github.com/angular/material2/pull/8765 merged **/
    if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
      this._cdkOverlay.overlayRef.updateSize({
        minWidth: this._triggerWidth,
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
    let $pre = observable$;
    const final$ = combineLatest($pre, this.$subOpen).pipe(map(value => value[0] || value[1]), debounceTime(50), distinctUntilChanged());
    final$.pipe(takeUntil(this.unsubscribe$)).subscribe(this._onVisibleChange)
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  ngAfterViewInit(): void {
    let mouse$: Observable<boolean>;
    if (this.trigger === 'hover') {
      const mouseEnterOrigin$ = fromEvent(this._atOrigin.elementRef.nativeElement, 'mouseenter').pipe(mapTo(true));
      const mouseLeaveOrigin$ = fromEvent(this._atOrigin.elementRef.nativeElement, 'mouseleave').pipe(mapTo(false));
      mouse$ = merge(mouseEnterOrigin$, mouseLeaveOrigin$,);
    }
    if (this.trigger === 'click') {
      mouse$ = fromEvent(this._atOrigin.elementRef.nativeElement, 'click').pipe(mapTo(true));
      this._renderer.listen(this._atOrigin.elementRef.nativeElement, 'click', (e) => {
        e.preventDefault();
      });
    }
    const observable$ = merge(mouse$, this._visibleChange);
    this._startSubscribe(observable$);
  }

  get _hasBackdrop(): boolean {
    return this.trigger === 'click';
  }

  constructor(private _renderer: Renderer2, protected _changeDetector: ChangeDetectorRef) {
  }
}
