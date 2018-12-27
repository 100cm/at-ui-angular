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
      >
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
      [cdkConnectedOverlayOpen]="atOpen">
      <div [ngClass]="dropDownClassMap" [@dropDownAnimation]="atOpen ? dropDownPosition : 'hidden' "
           [ngStyle]="atDropdownStyle">
        <div at-option-container>
          <ng-content select="at-option"></ng-content>
        </div>
      </div>
    </ng-template>
  `
})
export class AtSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {


  atValue = []


  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;


  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: string | string[]): void {
    if (Array.isArray(obj)) {
      this.atValue = obj
    } else {
      this.atValue = [obj]
    }
  }

  private _disabled = false;
  private _allowClear = false;
  private _showSearch = false;
  private _open = false;
  private _placeholder: string;
  private _autoFocus = false;
  private _dropdownClassName: string;
  onChange: (value: string | string[]) => void = () => null;
  onTouched: () => void = () => null;
  dropDownPosition: 'top' | 'center' | 'bottom' = 'bottom';
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
  @ContentChildren(AtOptionComponent) listOfatOptionComponent: QueryList<AtOptionComponent>;
  @ContentChildren(AtOptionGroupComponent) listOfatOptionGroupComponent: QueryList<AtOptionGroupComponent>;
  @Output() search = new EventEmitter<string>();
  @Output() atScrollToBottom = new EventEmitter<void>();
  @Output() atOpenChange = new EventEmitter<boolean>();
  @Input() atSize = 'normal';
  @Input('remoteSearch') atServerSearch = false;
  @Input() atMode: 'default' | 'multiple' | 'tags' = 'default';
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


  ngAfterViewInit() {

  }


  subOpenStatus() {
    this.at_select_control_service.$openStatus.asObservable().subscribe()
  }

  constructor(private at_select_control_service: AtSelectControlService) {

  }

}
