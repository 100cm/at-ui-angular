import {
  animate,
  state,
  style,
  transition,
  trigger
}                                                                              from '@angular/animations';
import {CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange} from '@angular/cdk/overlay';
import {
  forwardRef,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  SimpleChange,
  ViewChild
}                                                                              from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR}                               from '@angular/forms';
import {isNotNil, toBoolean}                                                   from '../utils/class-helper';
import {AtOptionContainerComponent}                                            from './at-option-container.component';
import {AtOptionGroupComponent}                                                from './at-option-group.component';
import {AtOptionComponent}                                                     from './at-option.component';
import {defaultFilterOption, TFilterOption}                                    from './at-option.pipe';
import {AtSelectTopControlComponent}                                           from './at-select-top-control.component';

@Component({
             selector: 'at-select',
             providers: [
               {
                 provide: NG_VALUE_ACCESSOR,
                 useExisting: forwardRef(() => AtSelectComponent),
                 multi: true
               }
             ],
             animations: [
               trigger('dropDownAnimation', [
                 state('hidden', style({
                                         opacity: 0,
                                         display: 'none'
                                       })),
                 state('bottom', style({
                                         opacity: 1,
                                         transform: 'scaleY(1)',
                                         transformOrigin: '0% 0%'
                                       })),
                 state('top', style({
                                      opacity: 1,
                                      transform: 'scaleY(1)',
                                      transformOrigin: '0% 100%'
                                    })),
                 transition('hidden => bottom', [
                   style({
                           opacity: 0,
                           transform: 'scaleY(0.8)',
                           transformOrigin: '0% 0%'
                         }),
                   animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                 ]),
                 transition('bottom => hidden', [
                   animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                                                                   opacity: 0,
                                                                                   transform: 'scaleY(0.8)',
                                                                                   transformOrigin: '0% 0%'
                                                                                 }))
                 ]),
                 transition('hidden => top', [
                   style({
                           opacity: 0,
                           transform: 'scaleY(0.8)',
                           transformOrigin: '0% 100%'
                         }),
                   animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                 ]),
                 transition('top => hidden', [
                   animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                                                                   opacity: 0,
                                                                                   transform: 'scaleY(0.8)',
                                                                                   transformOrigin: '0% 100%'
                                                                                 }))
                 ])
               ])
             ],
             template: `
               <div
                 cdkOverlayOrigin
                 class="at-select at-select--{{atSize}}"
                 [class.at-select--open]="atOpen"
                 [class.at-select-single]="isSingleMode"
                 [class.at-select--multiple]="isMultipleOrTags"
                 [class.at-select--disabled]="atDisabled"
                 (keydown)="onKeyDownCdkOverlayOrigin($event)"
                 tabindex="0">
                 <div
                   at-select-top-control
                   [atOpen]="atOpen"
                   (OnClear)="onClearSelection($event)"
                   [allowClear]="atAllowClear"
                   [compareWith]="compareWith"
                   [atPlaceHolder]="atPlaceHolder"
                   [atShowSearch]="atShowSearch"
                   [atDisabled]="atDisabled"
                   [atMode]="atMode"
                   [atListTemplateOfOption]="listOfTemplateOption"
                   [atListOfSelectedValue]="listOfSelectedValue"
                   (atOnSearch)="onSearch($event.value,$event.emit)"
                   (atListOfSelectedValueChange)="updateListOfSelectedValueFromTopControl($event)">
                 </div>
               </div>
               <ng-template
                 cdkConnectedOverlay
                 [cdkConnectedOverlayHasBackdrop]="true"
                 [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
                 (backdropClick)="closeDropDown()"
                 (detach)="closeDropDown();"
                 (attach)="attachSelect()"
                 (positionChange)="onPositionChange($event)"
                 [cdkConnectedOverlayWidth]="overlayWidth"
                 [cdkConnectedOverlayMinWidth]="overlayMinWidth"
                 [cdkConnectedOverlayOpen]="!isDestroy">
                 <div [ngClass]="dropDownClassMap" [@dropDownAnimation]="atOpen ? dropDownPosition : 'hidden' "
                      [ngStyle]="atDropdownStyle">
                   <div
                     style="overflow: auto"
                     at-option-container
                     [listOfatOptionComponent]="listOfatOptionComponent"
                     [listOfatOptionGroupComponent]="listOfatOptionGroupComponent"
                     [atSearchValue]="searchValue"
                     [atFilterOption]="atFilterOption"
                     [remoteSearch]="atServerSearch"
                     [compareWith]="compareWith"
                     [atNotFoundContent]="atNotFoundContent"
                     [atMaxMultipleCount]="atMaxMultipleCount"
                     [atMode]="atMode"
                     (atScrollToBottom)="atScrollToBottom.emit()"
                     (atClickOption)="onClickOptionFromOptionContainer()"
                     (atListOfTemplateOptionChange)="listOfTemplateOptionChange($event)"
                     (atListOfSelectedValueChange)="updateListOfSelectedValueFromOptionContainer($event)"
                     [atListOfSelectedValue]="listOfSelectedValue">
                   </div>
                 </div>
               </ng-template>
               <!--can not use ViewChild since it will match sub options in option group -->
               <ng-template>
                 <ng-content></ng-content>
               </ng-template>
             `
           })
export class AtSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
  private _disabled                                     = false;
  private _allowClear                                   = false;
  private _showSearch                                   = false;
  private _open                                         = false;
  private _placeholder: string;
  private _autoFocus                                    = false;
  private _dropdownClassName: string;
          onChange: (value: string | string[]) => void  = () => null;
          onTouched: () => void                         = () => null;
          dropDownPosition: 'top' | 'center' | 'bottom' = 'bottom';
  // tslint:disable-next-line:no-any
          listOfSelectedValue: any[]                    = [];
          listOfTemplateOption: AtOptionComponent[]     = [];
  // tslint:disable-next-line:no-any
          value: any | any[];
          overlayWidth: number;
          overlayMinWidth: number;
          searchValue: string                           = '';
          isDestroy                                     = true;
          isInit                                        = false;
          dropDownClassMap;
  @ViewChild(CdkOverlayOrigin) cdkOverlayOrigin: CdkOverlayOrigin;
  @ViewChild(CdkConnectedOverlay) cdkConnectedOverlay: CdkConnectedOverlay;
  @ViewChild(AtSelectTopControlComponent) atSelectTopControlComponent: AtSelectTopControlComponent;
  @ViewChild(AtOptionContainerComponent) atOptionContainerComponent: AtOptionContainerComponent;
  /** should move to at-option-container when https://github.com/angular/angular/issues/20810 resolved **/
          @ContentChildren(AtOptionComponent) listOfatOptionComponent: QueryList<AtOptionComponent>;
  @ContentChildren(AtOptionGroupComponent) listOfatOptionGroupComponent: QueryList<AtOptionGroupComponent>;
  @Output() search                                      = new EventEmitter<string>();
  @Output() atScrollToBottom                            = new EventEmitter<void>();
  @Output() atOpenChange                                = new EventEmitter<boolean>();
  @Input() atSize                                       = 'normal';
  @Input('remoteSearch') atServerSearch                 = false;
  @Input() atMode: 'default' | 'multiple' | 'tags'      = 'default';
  @Input() atDropdownMatchSelectWidth                   = true;
  @Input() atFilterOption: TFilterOption                = defaultFilterOption;
  @Input() atMaxMultipleCount                           = Infinity;
  @Input() atDropdownStyle: { [key: string]: string; };
  @Input() atNotFoundContent: string;
  /** https://github.com/angular/angular/pull/13349/files **/
          // tslint:disable-next-line:no-any
          @Input() compareWith                          = (o1: any, o2: any) => o1 === o2;

  private _multiple = false
  private _tagAble  = false


  get tagAble(): boolean {
    return this._tagAble;
  }

  @Input()
  set tagAble(value: boolean) {
    this._tagAble = value;
    this.atMode   = 'tags'
  }

  get multiple(): boolean {
    return this._multiple;
  }


  @Input()
  set multiple(value: boolean) {
    this._multiple = value;
    if (this._multiple) {
      this.atMode = 'multiple'
    }
    else {
      this.atMode = 'default'
    }
  }

  @Input()
  set atDropdownClassName(value: string) {
    this._dropdownClassName = value;
    this.updateDropDownClassMap();
  }

  get atDropdownClassName(): string {
    return this._dropdownClassName;
  }

  @Input()
  set atAutoFocus(value: boolean) {
    this._autoFocus = toBoolean(value);
    this.updateAutoFocus();
  }

  get atAutoFocus(): boolean {
    return this._autoFocus;
  }

  @Input()
  set atOpen(value: boolean) {
    this._open = value;
    this.handleEscBug();
    this.updateCdkConnectedOverlayStatus();
    this.updateDropDownClassMap();
    if (this.atOpen) {
      if (this.atSelectTopControlComponent) {
        this.atSelectTopControlComponent.focusOnInput();
        this.atSelectTopControlComponent.setInputValue('', true);
      }
      if (this.atOptionContainerComponent) {
        this.atOptionContainerComponent.scrollIntoView();
      }
      //handle the select overlay position to fix the z-index bug
      if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
        this.cdkConnectedOverlay.overlayRef.updatePosition();
        const backdropElement = this.cdkConnectedOverlay.overlayRef.backdropElement;
        const parentNode      = this.renderer.parentNode(backdropElement);
        const hostElement     = this.cdkConnectedOverlay.overlayRef.hostElement;
        this.renderer.appendChild(parentNode, backdropElement);
        this.renderer.appendChild(parentNode, hostElement);
      }
    }
    else {
      if (this.atSelectTopControlComponent) {
        this.atSelectTopControlComponent.setInputValue('', false);
      }
      if (this.atOptionContainerComponent) {
        this.atOptionContainerComponent.resetActiveOption();
      }
    }
  }

  attachSelect() {
    this.cdkConnectedOverlay.overlayRef.hostElement.classList.add('select-hostOverlay')
  }

  get atOpen(): boolean {
    return this._open;
  }

  @Input()
  set atDisabled(value: boolean) {
    this._disabled = toBoolean(value);
    if (this.atDisabled) {
      this.closeDropDown();
    }
  }

  get atDisabled(): boolean {
    return this._disabled;
  }

  @Input('allowClear')
  set atAllowClear(value: boolean) {
    this._allowClear = toBoolean(value);
  }

  get atAllowClear(): boolean {
    return this._allowClear;
  }

  @Input('searchable')
  set atShowSearch(value: boolean) {
    this._showSearch = toBoolean(value);
  }

  get atShowSearch(): boolean {
    return this._showSearch;
  }

  @Input()
  set atPlaceHolder(value: string) {
    this._placeholder = value;
  }

  get atPlaceHolder(): string {
    return this._placeholder;
  }

  @HostListener('click')
  onClick(): void {
    if (!this.atDisabled) {
      this.atOpen = !this.atOpen;
      this.atOpenChange.emit(this.atOpen);
    }
  }

  updateAutoFocus(): void {
    if (this.isInit && this.atSelectTopControlComponent.inputElement) {
      if (this.atAutoFocus) {
        this.renderer.setAttribute(this.atSelectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
      }
      else {
        this.renderer.removeAttribute(this.atSelectTopControlComponent.inputElement.nativeElement, 'autofocus');
      }
    }
  }

  focus(): void {
    if (this.atSelectTopControlComponent.inputElement) {
      this.atSelectTopControlComponent.inputElement.nativeElement.focus();
    }
  }

  blur(): void {
    if (this.atSelectTopControlComponent.inputElement) {
      this.atSelectTopControlComponent.inputElement.nativeElement.blur();
    }
  }

  /** overlay can not be always open , reopen overlay after press esc **/
  handleEscBug(): void {
    if (this.atOpen && this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && !this.cdkConnectedOverlay.overlayRef.backdropElement) {
      this.cdkConnectedOverlay.open = true;
      this.cdkConnectedOverlay.ngOnChanges({open: new SimpleChange(false, true, false)});
    }
  }

  onKeyDownCdkOverlayOrigin(e: KeyboardEvent): void {
    if (this.atOptionContainerComponent) {
      this.atOptionContainerComponent.onKeyDownUl(e);
    }
  }

  closeDropDown(): void {
    if (this.atOpen) {
      this.onTouched();
      this.atOpen = false;
      this.atOpenChange.emit(this.atOpen);
    }
  }

  onPositionChange(position: ConnectedOverlayPositionChange): void {
    this.dropDownPosition = position.connectionPair.originY;
    this.updateDropDownClassMap();
  }

  onClickOptionFromOptionContainer(): void {
    if (this.isSingleMode) {
      this.closeDropDown();
    }
    else if (this.atMode === 'tags') {
      this.onSearch('', true);
    }
  }

  updateCdkConnectedOverlayStatus(): void {
    if (this.isInit && this.atOpen && this.cdkOverlayOrigin) {
      if (this.atDropdownMatchSelectWidth) {
        this.overlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        this.cdkConnectedOverlay.overlayRef.updateSize({width: this.overlayWidth});
      }
      else {
        this.overlayMinWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        this.cdkConnectedOverlay.overlayRef.updateSize({minWidth: this.overlayMinWidth});
      }

    }
    this.updateCdkConnectedOverlayPositions();
    if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && this.cdkConnectedOverlay.overlayRef.backdropElement) {
      if (this.atOpen) {
        this.renderer.removeStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display');
      }
      else {
        this.renderer.setStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display', 'none');
      }
    }
  }

  updateCdkConnectedOverlayPositions(): void {
    /** wait for input size change **/
    setTimeout(() => this.cdkConnectedOverlay.overlayRef.updatePosition(), 160);
  }

  get isSingleMode(): boolean {
    return this.atMode === 'default';
  }

  get isMultipleOrTags(): boolean {
    return this.atMode === 'tags' || this.atMode === 'multiple';
  }

  /** option container atListOfSelectedValueChange -> update ngModel **/
  // tslint:disable-next-line:no-any
  updateListOfSelectedValueFromOptionContainer(value: any[]): void {
    this.clearSearchValue();
    this.updateFromSelectedList(value);
  }

  /** option container atListOfSelectedValueChange -> update ngModel **/
  // tslint:disable-next-line:no-any
  updateListOfSelectedValueFromTopControl(value: any[]): void {
    this.clearSearchValue();
    this.updateFromSelectedList(value);
  }

  // tslint:disable-next-line:no-any
  updateFromSelectedList(value: any[]): void {
    let modelValue;
    if (this.isSingleMode) {
      if (value.length) {
        modelValue = value[0];
      }
    }
    else {
      modelValue = value;
      this.updateCdkConnectedOverlayPositions();
    }
    this.updateNgModel(value, modelValue);
  }

  onSearch(value: string, emit: boolean): void {
    if (emit && (this.searchValue !== value)) {
      this.search.emit(value);
      this.searchValue = value;
    }
  }

  clearNgModel(): void {
    if (this.isSingleMode) {
      this.updateNgModel([], null);
    }
    else {
      this.updateNgModel([], []);
    }
  }

  // tslint:disable-next-line:no-any
  updateNgModel(list: any[], value: string | string[]): void {
    this.listOfSelectedValue = list;
    if (value !== this.value) {
      this.value = value;
      this.onChange(this.value);
    }
  }

  listOfTemplateOptionChange(value: AtOptionComponent[]): void {
    this.listOfTemplateOption = value;
  }

  updateDropDownClassMap(): void {
    this.dropDownClassMap = {
      ['antSelect-dropdown']: true,
      [`antSelect-dropdown-Single`]: this.isSingleMode,
      [`antSelect-dropdown--multiple`]: this.isMultipleOrTags,
      [`antSelect-dropdown-placement-bottomLeft`]: this.dropDownPosition === 'bottom',
      [`antSelect-dropdown-placement-topLeft`]: this.dropDownPosition === 'top',
      [`${this.atDropdownClassName}`]: !!this.atDropdownClassName
    };
  }

  onClearSelection(e: MouseEvent): void {
    // TODO: should not clear disabled option ?
    e.stopPropagation();
    this.clearNgModel();
  }

  clearSearchValue(): void {
    if (this.isSingleMode) {
      this.atSelectTopControlComponent.setInputValue('', false);
    }
    else {
      this.atSelectTopControlComponent.setInputValue('', false);
    }
  }

  constructor(private renderer: Renderer2) {
  }

  /** update ngModel -> update listOfSelectedValue **/
  // tslint:disable-next-line:no-any
  writeValue(value: any | any[]): void {
    this.value = value;
    if (isNotNil(value)) {
      if (Array.isArray(value)) {
        this.listOfSelectedValue = value;
      }
      else {
        this.listOfSelectedValue = [value];
      }
    }
    else {
      this.listOfSelectedValue = [];
    }
  }

  registerOnChange(fn: (value: string | string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.atDisabled = isDisabled;
  }

  ngOnInit(): void {
    this.isDestroy = false;
    this.updateDropDownClassMap();
  }

  ngAfterViewInit(): void {
    this.isInit = true;
    Promise.resolve().then(() => this.updateCdkConnectedOverlayStatus());
  }

  ngOnDestroy(): void {
    this.isDestroy = true;
  }
}
