import {
  ChangeDetectorRef,
  Component, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output, QueryList,
  Renderer2,
  ViewChild
} from '@angular/core';
import {OptionComponent} from "./option/option.component";
import {DropDownAnimation} from "../animations/drop-down-animation";
import {fadeAnimation as FadeAnimation} from "../animations/fade-animation";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {TagAnimation} from "../animations/tag-animation";
import {isNotNil} from "../utils/class-helper";
import {CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange} from "@angular/cdk/overlay";
import {Observable, Subscription, fromEvent, Subject} from "rxjs";
import {debounceTime, mapTo, merge} from 'rxjs/operators';

@Component({
  selector: '[atSelect,at-select]',
  template: `
    <div
      cdkOverlayOrigin
      class="at-select"
      [class.at-select--single]="isSingleMode"
      [class.at-select--multiple]="isMultipleOrTags"
      [class.at-select--open]="atVisible"
      tabindex="0">
      <div
        at-select-input
        class="at-select at-select--visiable at-select--{{atMode}} at-select--{{atSize}}"
        [compareWith]="compareWith"
        [atPlaceHolder]="atPlaceHolder"
        [atShowSearch]="searchable"
        (OnSearch)="OnSearch($event)"
        [atOpen]="atVisible"
        [atMode]="atMode"
        [tagAble]="tagAble"
        [atSize]="atSize"
        [allowClear]="allowClear"
        (clearNgModel)="clearNgModel()"
        (addOptionTag)="addOptionTag($event)"
        (selectValueChange)="selectValue($event)"
        [listSelectedOption]="listOfSelectedOption"
        [listOfatOptionComponent]="listOfOptionComponent"
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
          [searchAble]="searchable"
          [searchText]="searchText"
          [remoteSearch]="remoteSearch"
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

  overlayWidth: any = ''
  overlayMinWidth: any = ''
  _atVisible = false
  _multiple = false

  private _searchText = ''


  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
  }

  @Input() atMode = 'default'
  @Input() atSize = 'common'
  @Input() searchable = false
  @Input() compareWith = (a, b) => a === b


  get multiple(): boolean {
    return this._multiple;
  }

  @Output() search: EventEmitter<any> = new EventEmitter()

  @Input() atDisabled: boolean = false
  @Input() atPlaceHolder = ''
  @Input() remoteSearch = false

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
    setTimeout(_ => {
      this.listOfSelectedOption = this.listOfOptionComponent.toArray().filter(optionComponent => {
        return value.includes(optionComponent.atValue)
      })
    },)
  }

  initListOfOption = false

  ngDocheck() {
    if (this.initListOfOption == false && this.listOfOptionComponent) {
      this.initListOfOption = true
      this.updateSelectedOption(this.listOfSelectedValue)
    }
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

  }

  onPositionChange(position: ConnectedOverlayPositionChange): void {

  }

  clearNgModel(): void {
    if (this.isSingleMode) {
      this.updateNgModel([], null);
    } else {
      this.updateNgModel([], []);
    }
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
    if (this.isSingleMode) {
      this.change.emit(value)
    } else {
      this.change.emit(value)
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
    let mouse$: Observable<boolean>;
    mouse$ = fromEvent(this.cdkOverlayOrigin.elementRef.nativeElement, 'click').pipe(mapTo(true));
    this.renderer.listen(this.cdkOverlayOrigin.elementRef.nativeElement, 'click', (e) => {
      e.preventDefault()
      e.stopPropagation()
    });
    const observable$ = mouse$.pipe(merge(this._visibleChange));
    this._startSubscribe(observable$);
  }

  OnSearch(text) {
    this.searchText = text
    this.search.emit(this.searchText)
  }

  optionExist(option) {
    let list = this.listOfOptionComponent.toArray()
    return list.find(optionComponent => optionComponent.atValue == option.atValue)
  }

  addOptionTag(params) {
    if (params.handle == 'add') {
      if (!this.optionExist(params.option)) {
        this.listOfOptionComponent.reset([...this.listOfOptionComponent.toArray(), params.option])
      }
    } else if (params.handle == 'remove') {
      let list = this.listOfOptionComponent.toArray()
      list = list.filter(optionComponent => {
        return (optionComponent.isTag == false || optionComponent.atValue != params.option.atValue)
      })
      this.listOfOptionComponent.reset(list)
    } else {
      this.updateSelectedOption(this.listOfSelectedValue)
    }

  }
}
