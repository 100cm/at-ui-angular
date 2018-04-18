import {
  ChangeDetectorRef,
  Component, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, QueryList,
  Renderer2,
  ViewChild
} from '@angular/core';
import {OptionComponent} from "./option/option.component";
import {DropDownAnimation} from "../animations/drop-down-animation";
import {FadeAnimation} from "../animations/fade-animation";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {TagAnimation} from "../animations/tag-animation";
import {isNotNil} from "../utils/class-helper";
import {CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange} from "@angular/cdk/overlay";
import {Observable} from "rxjs/Observable";
import {debounceTime} from 'rxjs/operators/debounceTime';
import {mapTo} from 'rxjs/operators/mapTo';
import {merge} from 'rxjs/operators/merge';
import {Subscription} from "rxjs/Subscription";
import {fromEvent} from "rxjs/observable/fromEvent";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'atSelect',
  template: `
    <div
      cdkOverlayOrigin
      [class.at-select--single]="isSingleMode"
      [class.at-select--multiple]="isMultipleOrTags"
      (keydown)="onKeyDownCdkOverlayOrigin($event)"
      tabindex="0">
      <div
        at-select-input
        [compareWith]="compareWith"
        [atPlaceHolder]="atPlaceHolder"
        [atShowSearch]="atShowSearch"
        [atMode]="atMode"
        (selectValueChange)="selectValue($event)"
        [listSelectedOption]="listOfSelectedOption"
        [atListOfSelectedValue]="listOfSelectedValue">
      </div>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      (backdropClick)="closeDropDown()"
      (detach)="closeDropDown();"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayWidth]="overlayWidth"
      [cdkConnectedOverlayMinWidth]="overlayMinWidth"
      [cdkConnectedOverlayOpen]="atVisible">
      <div [@dropDownAnimation]="atVisible ? 'bottom' : 'hidden' ">
        <div
          style="overflow: auto"
          at-option-container
          [atMode]="atMode"
          (selectValueChange)="selectValue($event)"
          [listOfatOptionComponent]="listOfOptionComponent"
          [atListOfSelectedValue]="listOfSelectedValue">
        </div>
      </div>
    </ng-template>
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  animations: [DropDownAnimation, FadeAnimation, TagAnimation],
})
export class SelectComponent implements OnInit {

  constructor(private renderer: Renderer2, protected _changeDetector: ChangeDetectorRef) {
  }


  onChange: (value: string | string[]) => void = () => null;
  onTouched: () => void = () => null;

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  value: any | any[];
  isDestroy = true;
  isInit = false;
  overlayWidth = ''
  overlayMinWidth = ''
  _atVisible = false

  @Input() atMode = 'default'
  @Input() atSize = 'common'
  @Input() searchable = false
  @Input() compareWith = (a, b) => a === b
  _multiple = false

  get multiple(): boolean {
    return this._multiple;
  }

  @Input() atDisabled: boolean = false
  @Input() atPlaceHolder = ''
  @Input() atShowSearch = false

  @Input()
  set multiple(value: boolean) {
    this._multiple = value;
    if (value == true) {
      this.atMode = 'multiple'
    }
  }

  listOfSelectedValue: any[] = [];
  listOfSelectedOption: OptionComponent[] = []

  @Input() allowClear = false
  @Input() disabled = false
  @Input() tagAble = false
  @Output() change: EventEmitter<any> = new EventEmitter()
  @Output() _visibleChange = new Subject<boolean>()

  @Input() atDropdownMatchSelectWidth = true;
  @ContentChildren(OptionComponent) listOfOptionComponent: QueryList<OptionComponent>;

  @ViewChild(CdkOverlayOrigin) cdkOverlayOrigin: CdkOverlayOrigin;
  @ViewChild(CdkConnectedOverlay) cdkConnectedOverlay: CdkConnectedOverlay;

  ngOnInit(): void {
    this.isDestroy = false;
  }


  @Input()
  set atVisible(value: boolean) {
    this._visibleChange.next(value)
    this._atVisible = value
  }

  get atVisible(): boolean {
    return this._atVisible;
  }

  get isSingleMode(): boolean {
    return this.atMode === 'default';
  }

  get isMultipleOrTags(): boolean {
    return this.atMode === 'tags' || this.atMode === '_multiple';
  }


  writeValue(value: any | any[]): void {
    this.value = value;
    if (isNotNil(value)) {
      if (Array.isArray(value)) {
        this.listOfSelectedValue = value;
      } else {
        this.listOfSelectedValue = [value];
      }
      this.updateSelectedOption(this.listOfSelectedValue)
    } else {
      this.listOfSelectedValue = [];
    }


  }

  updateSelectedOption(value) {
    this.listOfSelectedOption = this.listOfOptionComponent.toArray().filter(optionComponent => {
      return value.includes(optionComponent.atValue)
    })
  }

  onKeyDownCdkOverlayOrigin(event) {

  }

  closeDropDown(): void {
    if (this.atVisible) {
      this.onTouched();
      this._visibleChange.next(false);
    }
  }


  ngOnDestroy(): void {
    this.isDestroy = true;
  }

  onPositionChange(position: ConnectedOverlayPositionChange): void {

  }

  selectValue(value) {
    let modelValue;
    if (this.isSingleMode) {
      if (value.length) {
        modelValue = value[0];
      }
      this._visibleChange.next(false)
    } else {
      modelValue = value;
    }
    this.updateNgModel(value, modelValue);
  }

  updateNgModel(list: any[], value: string | string[]): void {
    this.listOfSelectedValue = list;
    this.updateSelectedOption(this.listOfSelectedValue)
    if (value !== this.value) {
      this.value = value;
      this.onChange(this.value);
    }

  }

  @Output() atVisibleChange: EventEmitter<boolean> = new EventEmitter();
  _subscription: Subscription;

  _onVisibleChange = (visible: boolean) => {
    if (visible) {
      this._UpdateOverlayWidth()
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

  _UpdateOverlayWidth(): void {
    this.overlayMinWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    this.overlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    /** should remove after https://github.com/angular/material2/pull/8765 merged **/
    if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
      this.cdkConnectedOverlay.overlayRef.updateSize({
        minWidth: this.overlayMinWidth
      });
    }
  }

  ngAfterViewInit(): void {
    this.isInit = true;
    let mouse$: Observable<boolean>;
    mouse$ = fromEvent(this.cdkOverlayOrigin.elementRef.nativeElement, 'click').pipe(mapTo(true));
    this.renderer.listen(this.cdkOverlayOrigin.elementRef.nativeElement, 'click', (e) => {
      e.preventDefault()

    });
    const observable$ = mouse$.pipe(merge(this._visibleChange));
    this._startSubscribe(observable$);
  }
}
