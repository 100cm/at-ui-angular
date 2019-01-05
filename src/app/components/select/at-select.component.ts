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
  ViewChild, ChangeDetectorRef
}                                                                              from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR}                               from '@angular/forms';
import {isNotNil, toBoolean}                                                   from '../utils/class-helper';
import {AtOptionContainerComponent}                                            from './at-option-container.component';
import {AtOptionGroupComponent}                                                from './at-option-group.component';
import {AtOptionComponent}                                                     from './at-option.component';
import {defaultFilterOption, TFilterOption}                                    from './at-option.pipe';
import {AtSelectTopControlComponent}                                           from './at-select-top-control.component';
import {AtSelectControlService}                                                from './at-select-control.service';
import {debounceTime}                                                          from 'rxjs/operators';
import {DropDownAnimation}                                                     from '../animations/drop-down-animation';

@Component({
  selector: 'at-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AtSelectComponent),
      multi: true
    }, AtSelectControlService
  ],
  animations: [
    DropDownAnimation
  ],
  template: `
    <div
      cdkOverlayOrigin
      class="at-select at-select--{{atSize}}"
      [class.at-select--open]="atOpen"
      [class.at-select-single]="!multiple"
      [class.at-select--multiple]="multiple"
      [class.at-select--disabled]="atDisabled"
      tabindex="0">
      <div
        at-select-top-control
        [multiple]="multiple"
        [allowClear]="allowClear"
        [atPlaceHolder]="atPlaceHolder"
        [atShowSearch]="searchable"
      >
      </div>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      (backdropClick)="close()"
      [cdkConnectedOverlayWidth]="overlayWidth"
      [cdkConnectedOverlayMinWidth]="overlayMinWidth"
      [cdkConnectedOverlayOpen]="atOpen">
      <div [ngClass]="dropDownClassMap" [@dropDownAnimation]="dropDownPosition "
           [ngStyle]="atDropdownStyle">
        <div at-option-container [multiple]="multiple" [at_select_control_service]="at_select_control_service">
        </div>
      </div>
    </ng-template>
  `
})
export class AtSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {

  atValue = []


  ngOnDestroy(): void {
  }


  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: string | string[]): void {
    if (isNotNil(obj)) {
      if (Array.isArray(obj)) {
        this.atValue = obj
      } else {
        this.atValue = [obj]
      }
      this.at_select_control_service.$writeValueChange.next(this.atValue)
    }

  }

  onChange: (value: string | string[]) => void = () => null;
  onTouched: () => void = () => null;
  dropDownPosition: 'top' | 'center' | 'bottom' | 'hidden' = 'bottom';
  // tslint:disable-next-line:no-any
  listOfSelectedValue: any[] = [];
  listOfTemplateOption: AtOptionComponent[] = [];
  // tslint:disable-next-line:no-any
  value: any | any[];
  overlayWidth: number;
  overlayMinWidth: number;
  searchValue: string = '';
  dropDownClassMap;
  @ViewChild(CdkOverlayOrigin) cdkOverlayOrigin: CdkOverlayOrigin;
  @ViewChild(CdkConnectedOverlay) cdkConnectedOverlay: CdkConnectedOverlay;
  @ViewChild(AtSelectTopControlComponent) atSelectTopControlComponent: AtSelectTopControlComponent;
  @ViewChild(AtOptionContainerComponent) atOptionContainerComponent: AtOptionContainerComponent;
  /** should move to at-option-container when https://github.com/angular/angular/issues/20810 resolved **/
  @Output() search = new EventEmitter<string>();
  @Output() atScrollToBottom = new EventEmitter<void>();
  @Output() atOpenChange = new EventEmitter<boolean>();
  @Input() atSize = 'normal';
  @Input('remoteSearch') atServerSearch = false;
  _atMode: 'default' | 'multiple' | 'tags' = 'default';
  @Input() atDropdownMatchSelectWidth = true;
  @Input() atFilterOption: TFilterOption = defaultFilterOption;
  @Input() atMaxMultipleCount = Infinity;
  @Input() atDropdownStyle: { [key: string]: string; };
  @Input() atNotFoundContent: string;
  @Input() compareWith = (o1: any, o2: any) => o1 === o2;
  @Input() atPlaceHolder
  @Input() searchable = false
  @Input() multiple = false
  @Input() allowClear = false
  @Input() tagAble = false
  @Input() atDisabled = false
  atOpen = false


  get atMode(): 'default' | 'multiple' | 'tags' {
    return this._atMode;
  }

  @Input()
  set atMode(value: 'default' | 'multiple' | 'tags') {
    this._atMode = value;
    if (value == 'multiple' || value == 'tags') {
      this.multiple = true
    } else {
      this.multiple = false
    }
  }

  ngOnInit() {
    this.subOpenStatus()
    this.subClickSelect()
  }

  subOpenStatus() {
    this.at_select_control_service.$openStatus.asObservable().pipe().subscribe((open: boolean) => {
      this.atOpen = open
      this.updateCdkConnectedOverlayStatus()
      this.atOpenChange.emit(open)
    })
  }

  subClickSelect() {
    this.at_select_control_service.$selectOptionChange.asObservable().subscribe(data => {
      if (data[0] != null) {
        if (this.multiple) {
          this.onChange(data || [])
        } else {
          this.onChange((data || [])[0])
        }
      }
    })
  }

  ngAfterViewInit() {
  }

  close() {
    this.at_select_control_service.$openStatus.next(false)
  }

  constructor(public at_select_control_service: AtSelectControlService) {

  }

  updateCdkConnectedOverlayStatus() {
    this.overlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
  }

}
