/** get some code from https://github.com/angular/material2 */

import { DOCUMENT }   from '@angular/common';
import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild
}                   from '@angular/core';
import { Observable } from 'rxjs';
import { map }        from 'rxjs/operators';

import { isNotNil }                 from '../utils/class-helper';
import { AtTabComponent }           from './at-tab.component';
import { AtTabsNavComponent }       from './at-tabs-nav.component';
import { AtUpdateHostClassService } from './update-host-class.service';

export interface atAnimatedInterface {
  inkBar: boolean;
  tabPane: boolean;
}

export class atTabChangeEvent {
  index: number;
  tab: AtTabComponent;
}

export type atTabPosition = 'top' | 'bottom' | 'left' | 'right';
export type atTabPositionMode = 'horizontal' | 'vertical';
export type atTabType = 'line' | 'card';

@Component({
  selector: 'at-tab-set',
  preserveWhitespaces: false,
  providers: [AtUpdateHostClassService],
  template: `
    <div
      class="at-tabs-bar"
      at-tabs-nav
      role="tablist"
      tabindex="0"
      [atType]="atType"
      [atShowPagination]="atShowPagination"
      [atPositionMode]="_tabPositionMode"
      [atAnimated]="inkBarAnimated"
      [ngStyle]="atTabBarStyle"
      [atHideBar]="atHideAll"
      [atTabBarExtraContent]="atTabBarExtraContent"
      [selectedIndex]="atSelectedIndex"
      (atOnNextClick)="atOnNextClick.emit()"
      (atOnPrevClick)="atOnPrevClick.emit()">
      <div
        at-tab-label
        role="tab"
        [style.margin-right.px]="atTabBarGutter"
        [class.at-tabs-tab-active]="(atSelectedIndex == i) && !atHideAll"
        [disabled]="tab.atDisabled"
        (click)="clickLabel(i,tab.atDisabled)"
        *ngFor="let tab of listOfatTabComponent; let i = index">
        <ng-container *ngIf="tab.isTitleString; else titleTemplate">{{ tab.atTitle }}</ng-container>
        <ng-template #titleTemplate>
          <ng-template [ngTemplateOutlet]="tab.atTitle"></ng-template>
        </ng-template>
      </div>
    </div>
    <div
      class="at-tabs-content"
      #tabContent
      [class.at-tabs-content-animated]="tabPaneAnimated"
      [class.at-tabs-content-no-animated]="!tabPaneAnimated"
      [style.margin-left.%]="tabPaneAnimated&&(-atSelectedIndex*100)">
      <div at-tab-body
           class="at-tabs-tabpane"
           [class.at-tabs-tabpane-active]="(atSelectedIndex == i) && !atHideAll"
           [class.at-tabs-tabpane-inactive]="(atSelectedIndex != i) || atHideAll"
           [content]="tab.content"
           *ngFor="let tab of listOfatTabComponent; let i = index">
      </div>
    </div>`,
  host: {
    '(scroll)': 'onScroll($event)'
  },
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AtTabsetComponent implements AfterContentChecked, OnInit, AfterViewInit {
  private _tabPosition: atTabPosition = 'top';
  private _indexToSelect: number | null = 0;
  private _selectedIndex: number | null = null;
  private _type: atTabType = 'line';
  private _size = 'default';
  private _animated: atAnimatedInterface | boolean = true;
  el: HTMLElement = this.elementRef.nativeElement;
  prefixCls = 'at-tabs';
  _tabPositionMode: atTabPositionMode = 'horizontal';
  inkBarAnimated = true;
  tabPaneAnimated = true;
  isViewInit = false;
  listOfatTabComponent: AtTabComponent[] = [];
  @Input() atTabBarExtraContent: TemplateRef<void>;
  @ViewChild(AtTabsNavComponent) atTabsNavComponent: AtTabsNavComponent;
  @ViewChild('tabContent') tabContent: ElementRef;
  @Input() atShowPagination = true;
  @Input() atHideAll = false;
  @Input() atTabBarGutter: number;
  @Input() atTabBarStyle: { [key: string]: string };
  @Output() readonly atOnNextClick = new EventEmitter<void>();
  @Output() readonly atOnPrevClick = new EventEmitter<void>();

  @Input()
  set atAnimated(value: atAnimatedInterface | boolean) {
    this._animated = value;
    this.setClassMap();
    this.inkBarAnimated = (this.atAnimated === true) || ((this.atAnimated as atAnimatedInterface).inkBar === true);
    this.tabPaneAnimated = (this.atAnimated === true) || ((this.atAnimated as atAnimatedInterface).tabPane === true);
  }

  get atAnimated(): atAnimatedInterface | boolean {
    return this._animated;
  }

  @Input('atIndex')
  set atSelectedIndex(value: number | null) {
    this._indexToSelect = value;
  }

  get atSelectedIndex(): number | null {
    return this._selectedIndex;
  }

  @Output()
  get atSelectedIndexChange(): Observable<number> {
    return this.atSelectChange.pipe(map(event => event.index));
  }

  @Output() readonly atSelectChange: EventEmitter<atTabChangeEvent> = new EventEmitter<atTabChangeEvent>(true);

  @Input() set atSize(value: string) {
    this._size = value;
    this.setClassMap();
  }

  get atSize(): string {
    return this._size;
  }

  @Input('position')
  set atTabPosition(value: atTabPosition) {
    if (this._tabPosition === value) {
      return;
    }
    this._tabPosition = value;
    if ((this._tabPosition === 'top') || (this._tabPosition === 'bottom')) {
      this._tabPositionMode = 'horizontal';
    } else {
      this._tabPositionMode = 'vertical';
    }
    this.setPosition(value);
    this.setClassMap();
  }

  get atTabPosition(): atTabPosition {
    return this._tabPosition;
  }

  @Input('atMode')
  set atType(value: atTabType) {
    if (this._type === value) {
      return;
    }
    this._type = value;
    if (this._type === 'card') {
      this.atAnimated = false;
    }
    this.setClassMap();
  }

  get atType(): atTabType {
    return this._type;
  }

  setPosition(value: atTabPosition): void {
    if (this.isViewInit) {
      if (value === 'bottom') {
        this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.atTabsNavComponent.elementRef.nativeElement);
      } else {
        this.renderer.insertBefore(this.el, this.atTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
      }
    }

  }

  setClassMap(): void {
    const classMap = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-vertical`]: (this.atTabPosition === 'left') || (this.atTabPosition === 'right'),
      [`${this.prefixCls}-${this.atTabPosition}`]: this.atTabPosition,
      [`${this.prefixCls}-no-animation`]: (this.atAnimated === false) || ((this.atAnimated as atAnimatedInterface).tabPane === false),
      [`${this.prefixCls}-${this.atType}`]: this.atType,
      [`${this.prefixCls}-large`]: this.atSize === 'large',
      [`${this.prefixCls}-small`]: this.atSize === 'small'
    };
    this.atUpdateHostClassService.updateHostClass(this.el, classMap);
  }

  clickLabel(index: number, disabled: boolean): void {
    if (!disabled) {
      this.atSelectedIndex = index;
      this.listOfatTabComponent[index].atClick.emit();
    }
  }

  ngOnInit(): void {
    this.setClassMap();
  }

  ngAfterContentChecked(): void {
    // Clamp the next selected index to the bounds of 0 and the tabs length. Note the `|| 0`, which
    // ensures that values like NaN can't get through and which would otherwise throw the
    // component into an infinite loop (since Math.max(NaN, 0) === NaN).
    const indexToSelect = this._indexToSelect =
      Math.min(this.listOfatTabComponent.length - 1, Math.max(this._indexToSelect || 0, 0));

    // If there is a change in selected index, emit a change event. Should not trigger if
    // the selected index has not yet been initialized.
    if (this._selectedIndex !== indexToSelect && isNotNil(this._selectedIndex)) {
      this.atSelectChange.emit(this.createChangeEvent(indexToSelect));
    }

    // Setup the position for each tab and optionally setup an origin on the next selected tab.
    this.listOfatTabComponent.forEach((tab: AtTabComponent, index: number) => {
      tab.position = index - indexToSelect;
      // If there is already a selected tab, then set up an origin for the next selected tab
      // if it doesn't have one already.
      if (isNotNil(this._selectedIndex) && tab.position === 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    this._selectedIndex = indexToSelect;
  }

  createChangeEvent(index: number): atTabChangeEvent {
    const event = new atTabChangeEvent();
    event.index = index;
    if (this.listOfatTabComponent && this.listOfatTabComponent.length) {
      event.tab = this.listOfatTabComponent[index];
      this.listOfatTabComponent.forEach((item, i) => {
        if (i !== index) {
          item.atDeselect.emit();
        }
      });
      event.tab.atSelect.emit();
    }
    return event;
  }

  addTab(value: AtTabComponent): void {
    this.listOfatTabComponent.push(value);
  }

  removeTab(value: AtTabComponent): void {
    this.listOfatTabComponent.splice(this.listOfatTabComponent.indexOf(value), 1);
  }

  // From https://github.com/react-component/tabs/blob/master/src/Tabs.js
  // Prevent focus to make the Tabs scroll offset
  onScroll($event: Event): void {
    const target: Element = $event.target as Element;
    if (target.scrollLeft > 0) {
      target.scrollLeft = 0;
      if (this.document && this.document.activeElement) {
        (this.document.activeElement as HTMLElement).blur();
      }
    }
  }

  // tslint:disable-next-line:no-any
  constructor(private renderer: Renderer2, private atUpdateHostClassService: AtUpdateHostClassService, private elementRef: ElementRef, @Optional() @Inject(DOCUMENT) private document: any) {
  }

  ngAfterViewInit(): void {
    this.isViewInit = true;
    this.setPosition(this.atTabPosition);
  }

}
