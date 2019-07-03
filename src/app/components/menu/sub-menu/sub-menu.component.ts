import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef, EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnInit,
  Optional, Output, QueryList,
  Renderer2,
  SkipSelf, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { POSITION_MAP } from '../../core/overlay/overlay-position-map';
import { MenuComponent } from '../menu.component';

import { auditTime, map, takeUntil } from 'rxjs/operators';
import { ExpandAnimation } from '../../animations/expand-animation';
import { AtDropSubmenuComponent } from '../../dropdown/at-drop-submenu/at-drop-submenu.component';

@Component({
  selector: '[at-submenu]',
  template: `
    <div class="at-menu__submenu-title"
         #trigger
         (click)="setActive()"
         (mouseenter)="onMouseEnterEvent($event)"
         (mouseleave)="onMouseLeaveEvent($event)"
         [style.paddingLeft.px]="levelPaddingLeft"
         [ngClass]="onHoverClass"
         cdkOverlayOrigin
         #origin="cdkOverlayOrigin"
    >
      <ng-content select="[title]"></ng-content>
      <i *ngIf="subMenuType == 'inline' && !arrowIcon" [ngClass]="{chevron_open: isOpen}"
         class="icon icon-chevron-up"></i>

      <i *ngIf="subMenuType == 'vertical' || (subMenuType == 'horizontal' && isInSubMenu )  && !arrowIcon"
         class="icon icon-chevron-right right-arrow"></i>

      <ng-template [ngTemplateOutlet]="arrowIcon"></ng-template>

    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayWidth]="triggerWidth"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayOpen]="isOpen && parent.atType != 'inline'"
    >
      <div
        [@expandAnimation]="expandState"
        class="overlay-menu overlay-menu-{{parent.atType}} {{themeClass}}"
        (mouseenter)="onMouseEnterEvent($event)"
        (mouseleave)="onMouseLeaveEvent($event)">
        <div class="at-menu-dropdown__popover">
          <div class="at-dropdown-menu">
            <ng-template [ngTemplateOutlet]="subMenuTemplate"></ng-template>
          </div>
        </div>
      </div>
    </ng-template>
    <div
      *ngIf="subMenuType=='inline'"
      class="at-sub-dropdown-menu"
      [@expandAnimation]="expandState">
      <ng-template [ngTemplateOutlet]="subMenuTemplate"></ng-template>
    </div>
    <ng-template #subMenuTemplate>
      <ng-content></ng-content>
    </ng-template>

  `,
  animations: [
    ExpandAnimation
  ]
})
export class SubMenuComponent implements OnInit {

  _el: any;
  nativeElement: any;
  _active: boolean = false;
  _isOpen = false;
  _popoverCss = {left: '0px', right: '0px', top: '0px'};
  // cdk properties
  triggerWidth = null;
  isInSubMenu = false;
  level = 1;
  @ViewChild(CdkConnectedOverlay) cdkOverlay: CdkConnectedOverlay;
  @ContentChildren(SubMenuComponent, {descendants: true}) subMenus: QueryList<SubMenuComponent> | QueryList<AtDropSubmenuComponent>;

  @Output() readonly openChange = new EventEmitter<boolean>();
  @Input() arrowIcon: TemplateRef<void>;

  get overlayPositions(): ConnectionPositionPair[] {
    if (this.subMenuType === 'horizontal') {
      return [POSITION_MAP.bottomLeft];
    } else {
      return [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
    }
  }

  @Input() icon: string | TemplateRef<void> = '';

  placement = 'rightTop';

  onPositionChange($event: ConnectedOverlayPositionChange): void {
    if ($event.connectionPair) {
      const originMap = {
        originX: $event.connectionPair.originX,
        originY: $event.connectionPair.originY,
        overlayX: $event.connectionPair.overlayX,
        overlayY: $event.connectionPair.overlayY
      };
      const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
      if (keyList.every(key => originMap[key] === POSITION_MAP.leftTop[key])) {
        this.placement = 'leftTop';
      } else if (keyList.every(key => originMap[key] === POSITION_MAP.rightTop[key])) {
        this.placement = 'rightTop';
      }
    }
    this.cd.detectChanges();
  }

  get expandState(): string {
    if (this.isOpen && this.parent.atType === 'inline') {
      return 'expand';
    } else if (this.isOpen && this.subMenuType === 'horizontal') {
      return 'bottom';
    } else if (this.isOpen && this.subMenuType === 'vertical') {
      return 'fade';
    } else {
      return 'hidden';
    }
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
    this.setTriggerWidth();
  }

  @Input()
  set open(value: boolean) {
    this.isOpen = value;
    this.$subOpen.next(value);
  }

  constructor(public _elementRef: ElementRef, public cd: ChangeDetectorRef,
              @SkipSelf() @Optional() public subMenuComponent: SubMenuComponent,
              @Inject(MenuComponent) public parent: MenuComponent, public _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
    this.parent.sub_menus.push(this);
  }

  ngOnInit(): void {
    const $combineAll = combineLatest(this.$subOpen, this.$mouseSubject.asObservable()).pipe(map(value => value[0] || value[1]), auditTime(150));
    $combineAll.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleOpenEvent);
    this.cd.detectChanges();
  }

  @HostBinding(`class.at-menu__submenu`) item_class = true;

  setActive(): void {
    if (this.parent.single) {
      this.parent.clearAllOpen(this);
    }
    this.isOpen = !this.isOpen;
    this.openChange.emit(this.isOpen);
  }

  @HostBinding('class.at-menu__item--active')
  get activeCls() {
    return this.active;
  }

  @HostBinding('class.at-menu__submenu--opened')
  get OpenCls() {
    return this.isOpen;
  }

  @Input()
  set active(active: boolean) {
    this._active = active;
  }

  get active(): boolean {
    return this._active;
  }

  @ViewChild('popover') popover: ViewContainerRef;

  get onHoverClass() {
    const classMap = {};
    classMap[`menu-item-on-hover-${this.parent._atType}`] = this.hoverOn;
    classMap[`menu-item-on-select`] = this.hoverOn && this.isInSubMenu;
    return classMap;
  }

  get levelPaddingLeft(): number | null {
    return this.subMenuType === 'inline' ? this.level * 23 : null;
  }

  show() {
    this._isOpen = !this._isOpen;
  }

  $subOpen = new BehaviorSubject<boolean>(false);
  private $mouseSubject = new Subject<boolean>();
  private unsubscribe$ = new Subject<void>();

  handleOpenEvent = (data: boolean) => {
    if (this.isOpen !== data) {
      this.isOpen = data;
    }
    if (this.subMenuComponent) {
      this.subMenuComponent.$subOpen.next(this.isOpen);
    }
    this.hoverOn = this.isOpen;
  };

  hoverOn = false;

  ngAfterViewInit(): void {
    if (this.subMenus && this.subMenus.length) {
      (this.subMenus as QueryList<SubMenuComponent>).filter((x: SubMenuComponent | AtDropSubmenuComponent) => x !== this).forEach(menu => {
        setTimeout(_ => {
          menu.isInSubMenu = true;
          if (this.subMenuType === 'inline') {
            menu.level = this.level + 1;
          }
        });
      });
    }

  }

  get subMenuType(): string {
    if (this.parent._atType === 'inline') {
      return 'inline';
    } else if ((this.parent._atType === 'vertical') || (this.isInSubMenu)) {
      return 'vertical';
    } else {
      return 'horizontal';
    }
  }

  onMouseEnterEvent(e: MouseEvent): void {
    if ((this.subMenuType === 'horizontal') || (this.subMenuType === 'vertical')) {
      this.$mouseSubject.next(true);
      this.openChange.emit(true);
    }
  }

  onMouseLeaveEvent(e: MouseEvent): void {
    if ((this.subMenuType === 'horizontal') || (this.subMenuType === 'vertical')) {
      this.$mouseSubject.next(false);
      this.openChange.emit(false);
    }
  }

  setTriggerWidth(): void {
    if (this.parent._atType === 'horizontal') {
      this.triggerWidth = this._el.getBoundingClientRect().width;

      /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
      if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
        this.cdkOverlay.overlayRef.updateSize({
          width: this.triggerWidth
        });
      }
    }

  }

  get themeClass() {
    const themeClassMap = {'dark': 'at-menu--dark', 'light': 'at-menu--light', 'dracula': 'at-menu--dracula'};
    return themeClassMap[this.parent.theme];
  }

}
