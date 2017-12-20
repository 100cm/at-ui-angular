import {
  Component, ElementRef, HostListener, Input, OnInit, Output, ViewChild, EventEmitter,
  Renderer2, ChangeDetectorRef, SimpleChanges, ContentChild, ChangeDetectionStrategy
} from '@angular/core';
import {DropDownAnimation} from "../animations/drop-down-animation";
import {style, animate, state, transition, trigger} from '@angular/animations';
import {merge} from "rxjs/observable/merge";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {debounceTime} from "rxjs/operator/debounceTime";
import {Subscription} from "rxjs/Subscription";
import {ConnectionPositionPair} from "../core/overlay/position/connected-position";
import {DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP} from "../core/overlay/overlay-position-map";
import {DropdownMenuItemComponent} from "../menu/dropdown-menu-item/dropdown-menu-item.component";
import {DropdownDirective} from "./dropdown.directive";

@Component({
  selector: 'atDropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `    
    <div>
      <ng-content></ng-content>
    </div>
    <ng-template
      nz-connected-overlay
      [hasBackdrop]="_hasBackdrop"
      [positions]="_positions"
      [origin]="_nzOrigin"
      (backdropClick)="_hide()"
      (detach)="_hide()"
      [minWidth]="_triggerWidth"
      (positionChange)="_onPositionChange($event)"
      [open]="atVisible">
      <div

        [@dropDownAnimation]="_dropDownPosition"
        (mouseenter)="_onMouseEnterEvent($event)"
        (mouseleave)="_onMouseLeaveEvent($event)"
        [style.minWidth.px]="_triggerWidth"
        (click)="_clickDropDown($event)">
        <div>
          <ul *ngIf="!custom_content" atDropMenuList>
            <ng-content select="[atDropMenuItem]"></ng-content>
          </ul>
          <!--<ng-content select="[nz-table-filter]"></ng-content>-->
          <ng-content select="[atDropMenuCustomItem]"></ng-content>
        </div>
        <!--<ng-content select="[nz-dropdown-custom]"></ng-content>-->
      </div>
    </ng-template>
  `,
  animations: [DropDownAnimation, trigger('fadeAnimation', [
    state('*', style({opacity: 1})),
    transition('* => void', [
      animate(50, style({opacity: 0, display: 'hidden'}))
    ]),
    transition('void => *', [
      style({opacity: '0'}),
      animate(50, style({opacity: 1,}))
    ])
  ]),],
})

export class DropdownComponent implements OnInit {
  hasFilterButton = false;
  _triggerWidth = 0;
  _placement: string = 'bottomLeft';
  _dropDownPosition: 'top' | 'bottom' = 'bottom';
  _positions: ConnectionPositionPair[] = [...DEFAULT_DROPDOWN_POSITIONS];
  _subscription: Subscription;
  @ContentChild(DropdownMenuItemComponent) _nzMenu;
  @ContentChild(DropdownDirective) _nzOrigin
  @Input() trigger: 'click' | 'hover' = 'hover';
  @Input() autoClose = false;
  @Input() atVisible = false;
  @Output() dropDownChange: EventEmitter<boolean> = new EventEmitter();
  @Input() custom_content:boolean = false

  @Input()
  set placement(value: string) {
    this._placement = value;
    this._dropDownPosition = (this.placement.indexOf('top') !== -1) ? 'top' : 'bottom';
    this._positions.unshift(POSITION_MAP[this._placement] as ConnectionPositionPair);
  };

  get placement(): string {
    return this._placement;
  }

  _onClickEvent() {
    if (this.trigger === 'click') {
      this._show();
    }
  }

  _onMouseEnterEvent(e) {
    if (this.trigger === 'hover') {
      this._show();
    }
  }

  _onMouseLeaveEvent(e) {
    if (this.trigger === 'hover') {
      this._hide();
    }
  }

  _hide() {
    this.dropDownChange.emit(false);
  }

  _show() {
    this.dropDownChange.emit(true);
  }

  _onPositionChange(position) {
    this._dropDownPosition = position.connectionPair.originY;
  }

  _clickDropDown($event) {
    $event.stopPropagation();
    if (this.autoClose) {
      this.atVisible = false;
    }
  }

  _setTriggerWidth(): void {
    this._triggerWidth = this._nzOrigin.elementRef.nativeElement.getBoundingClientRect().width;
  }

  _onVisibleChange = (visible: boolean) => {
    if (visible) {
      if (!this._triggerWidth) {
        this._setTriggerWidth();
      }
    }
    this.atVisible = visible;
    this._changeDetector.markForCheck();
  }

  _startSubscribe(observable$: Observable<boolean>) {
    this._subscription = debounceTime.call(observable$, 300)
      .subscribe(this._onVisibleChange)
  }

  ngOnInit() {
    // if (this._nzMenu) {
    //   this._nzMenu.setDropDown(true);
    // }
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  ngAfterViewInit() {
    let mouse$: Observable<boolean>
    if (this.trigger === 'hover') {
      mouse$ = Observable.create((observer: Observer<boolean>) => {
        const disposeMouseEnter = this._renderer.listen(this._nzOrigin.elementRef.nativeElement, 'mouseenter', () => {
          observer.next(true);
        });
        const disposeMouseLeave = this._renderer.listen(this._nzOrigin.elementRef.nativeElement, 'mouseleave', () => {
          observer.next(false);
        });
        return () => {
          disposeMouseEnter();
          disposeMouseLeave();
        }
      });
    }
    if (this.trigger === 'click') {
      mouse$ = Observable.create((observer: Observer<boolean>) => {
        const dispose = this._renderer.listen(this._nzOrigin.elementRef.nativeElement, 'click', (e) => {
          e.preventDefault();
          observer.next(true);
        });
        return () => dispose();
      });
    }
    const observable$ = merge(
      mouse$,
      this.dropDownChange.asObservable()
    );
    this._startSubscribe(observable$);
  }

  get _hasBackdrop() {
    return this.trigger === 'click';
  }

  constructor(private _renderer: Renderer2, protected _changeDetector: ChangeDetectorRef) {
  }

}
