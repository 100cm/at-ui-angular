import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import {
  forwardRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, mapTo, merge } from 'rxjs/operators';
import { DropDownAnimation } from '../animations/drop-down-animation';
import { AtI18nInterface, AtI18nService } from '../i18n';
import { InputComponent } from '../input';
import { AtDate } from './at-day';
import { BladeDate } from './blade-date';

@Component({
  selector: 'at-datetime-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="at-date-input-wrapper">
      <atInput [ngModel]="atValue | atFormat: format" #timeinput [icon]="inputIcon" (onFocus)="_show()"></atInput>
      <i (click)="clear()"
         *ngIf="allowClear"
         class="icon icon-x at_date_picker_clear"
         style="z-index: 2" [style.right.px]="inputIcon ? 24 : 8"></i>
    </div>
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOrigin]="input"
      (backdropClick)="_hide()"
      (detach)="_hide()"
      (positionChange)="_onPositionChange($event)"
      [cdkConnectedOverlayOpen]="atVisible"
    >
      <div class="at-datepicker" [@dropDownAnimation]="dropdownPosition">
        <div class="at-datepicker--panel">
          <div class="at-datepicker--panel--header">
            <div style="position: relative">
              <a *ngIf="atType == 'full'" (click)="preYear()" class="pre-year-btn">
              </a>
              <a *ngIf="atType == 'full'" (click)="preMonth()" class="pre-month-btn">
              </a>

              <a *ngIf="atType == 'year'" (click)="preCentury()" class="pre-year-btn">
              </a>


              <span class="current-select-label">
            <a (click)="setCal('month')" class="month-select">{{atMonth + 1}}{{il8n?.DatePicker?.MonthName}}</a>
            <a (click)="setCal('year')" class="year-select">{{atYear}}{{il8n?.DatePicker?.YearName}}</a>
          </span>

              <a *ngIf="atType == 'full'" (click)="nextMonth()" class="next-month-btn">
              </a>
              <a (click)="nextYear()" class="next-year-btn">
              </a>

              <a *ngIf="atType == 'year'" (click)="nextCenury()" class="next-year-btn">
              </a>

            </div>
          </div>
          <div class="at-datepicker--panel--body">
            <at-calendar [ngStyle]="{display: mode =='date' ? 'block' : 'none' }"
                         [locale]="il8n"
                         (_clickDate)="clickDate($event)" (_clickYear)="clickYear($event)"
                         (_clickMonth)="clickMonth($event)"
                         [format]="format"
                         [disableDate]="disableDate"
                         [atType]="atType"
                         [atYear]="atYear" [atMonth]="atMonth"
                         [showValue]="showValue"
                         [atValue]="atValue"></at-calendar>

            <at-time
              [ngStyle]="{display: mode =='time' ? 'block' : 'none' }"
              (selectHour)="selectHour($event)"
              (selectMinute)="selectMinutes($event)"
              (selectSecond)="selectSecond($event)"
              [selected_hour]="selected_hour"
              [selected_minutes]="selected_minutes"
              [selected_second]="selected_second"></at-time>

          </div>
        </div>
        <div class="at-datepicker--footer">
          <a *ngIf="mode == 'date' && choice_modal.indexOf('time') != -1"
             (click)="setMode('time')">{{il8n.DatePicker.chooseTime}}</a>
          <a *ngIf="mode == 'time' && choice_modal.indexOf('date') != -1"
             (click)="setMode('date')">{{il8n.DatePicker.chooseDate}}</a>
        </div>
      </div>
    </ng-template>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimepickerComponent),
      multi: true
    }
  ],
  animations: [DropDownAnimation]

})
export class DatetimepickerComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef,
              private at_i18n_service: AtI18nService,
              private _renderer: Renderer2, private cdr: ChangeDetectorRef) {
  }

  @Input() inputIcon;

  il8n: AtI18nInterface;
  _atType = 'full';
  _positions: ConnectionPositionPair[] = [
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    },
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom'
    },
    {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'top'
    },
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'bottom'
    }
  ] as ConnectionPositionPair[];
  _subscription: Subscription;
  _visibleChange = new Subject<boolean>();
  $visible = this._visibleChange.asObservable();
  mode = 'date';
  _visible = false;
  dropdownPosition = 'bottom';

  @ViewChild(CdkConnectedOverlay, {static: true}) overlay;

  set atVisible(value: boolean) {
    this._visible = value;
  }

  get atVisible(): boolean {
    return this._visible;
  }

  get atType(): string {
    return this._atType;
  }

  @Input()
  set atType(value: string) {
    this._atType = value;
  }

  private _atValue = null;

  get atValue(): BladeDate | Date | string {
    return this._atValue;
  }

  _show_value;

  set showValue(value: BladeDate | Date | string) {
    if (value) {
      this._show_value = value;
    }
  }

  get showValue(): BladeDate | Date | string {
    return this._show_value;
  }

  set atValue(value: BladeDate | Date | string) {
    if (value) {
      this._atValue = value;
      this._show_value = value;
    }
  }

  atYear = new BladeDate(this.atValue || this.showValue).getYear();

  atMonth = new BladeDate(this.atValue || this.showValue).getMonth();

  selectedDate = new BladeDate(this.atValue).getDate();
  selectedYear = new BladeDate(this.atValue).getYear();
  selectedMonth = new BladeDate(this.atValue).getMonth();

  private _selected_second;
  private _selected_minutes;
  private _selected_hour;

  get selected_second(): number {
    return new BladeDate(this.atValue).getSeconds();
  }

  set selected_second(value: number) {
    this._selected_second = value;
  }

  get selected_minutes(): number {
    return new BladeDate(this.atValue).getMinutes();
  }

  set selected_minutes(value: number) {
    this._selected_minutes = value;
  }

  get selected_hour(): number {
    return new BladeDate(this.atValue).getHours();
  }

  set selected_hour(value: number) {
    this._selected_hour = value;
  }

// ngModel Access
  onChange = Function.prototype;
  onTouched = Function.prototype;

  @Input() format = 'YYYY-MM-DD';
  @Input() disableDate;
  /**
   * 日期选择模式 只选择日期 或者 时间
   */
  @Input() choice_modal = ['date', 'time'];

  @Input() allowClear = true;

  writeValue(value: BladeDate | Date | string): void {
    if (value) {
      this.updateDate(value);
    } else {
      this.clearDate();
    }
  }

  // tslint:disable-next-line:no-any
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  _onPositionChange(position: ConnectedOverlayPositionChange): void {
    this.dropdownPosition = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.at_i18n_service.localChange.subscribe(il8n => {
      this.il8n = il8n;
    });
    if (this.choice_modal.length === 1 && this.choice_modal.indexOf('time') !== -1) {
      this.mode = 'time';
    }
  }

  @ViewChild('timeinput', {static: true}) input: InputComponent;

  preYear(): void {
    this.atYear = this.atYear - 1;
  }

  nextYear(): void {
    this.atYear = this.atYear + 1;
  }

  preMonth(): void {
    if (this.atMonth - 1 < 0) {
      this.atMonth = 11;
      this.preYear();
    } else {
      this.atMonth = this.atMonth - 1;
    }
  }

  clear(): void {
    this.clearDate();
  }

  nextMonth(): void {
    if (this.atMonth + 1 > 11) {
      this.atMonth = 0;
      this.nextYear();
    } else {
      this.atMonth = this.atMonth + 1;
    }
  }

  clickDate(date: AtDate): void {
    this.updateDate(date.date);
    this.handleFormat();
    if (this.choice_modal.indexOf('time') === -1) {
      this.atVisible = false;
    }
  }

  updateDate(value: BladeDate | Date | string): void {
    if (this.atValue === value) {
      return;
    }
    this.atValue = value;
    const date = new BladeDate(value);
    this.selectedMonth = date.getMonth();
    this.selectedYear = date.getYear();
    this.selectedDate = date.getDate();
    this.atYear = date.getYear();
    this.atMonth = date.getMonth();
    this.cdr.markForCheck();
  }

  clearDate(): void {
    this._atValue = '';
    this.onChange('');
  }

  _hide(): void {
    this._visibleChange.next(false);
  }

  _show(): void {
    this._visibleChange.next(true);
  }

  _onVisibleChange = (visible: boolean) => {

    if (this.atVisible !== visible) {
      this.atVisible = visible;
    }
    this.cdr.markForCheck();
  }

  _startSubscribe(observable$: Observable<boolean>): void {
    this._subscription = observable$.pipe(debounceTime(50))
      .subscribe(this._onVisibleChange);
  }

  ngAfterViewInit(): void {
    // this.cssTop = this.input.inputField.nativeElement.offsetHeight + 'px'
    let mouse$: Observable<boolean>;
    if (this.input) {
      mouse$ = fromEvent(this.input.elementRef.nativeElement, 'click').pipe(mapTo(true));
      this._renderer.listen(this.input.elementRef.nativeElement, 'click', (e) => {
        e.preventDefault();
      });
      const observable$ = mouse$.pipe(merge(this._visibleChange));
      this._startSubscribe(observable$);
    }
  }

  clickMonth(month: number): void {
    // this.atValue = moment(this.atValue).year(this.atYear).month(month.index).toDate();
    this.atMonth = month;
    this.atType = 'full';
  }

  clickYear(year: number): void {
    this.atYear = year;
    this.atType = 'month';
  }

  setCal(s: string): void {
    this.atType = s;
  }

  preCentury(): void {
    this.atYear = this.atYear - 10;
  }

  nextCenury(): void {
    this.atYear = this.atYear + 10;
  }

  selectHour(hour: number): void {
    let time: BladeDate = this.atValue === '' ? new BladeDate() : new BladeDate(this.atValue);
    time = time.setHours(hour);
    this.atValue = time;
    this.handleFormat();
  }

  selectMinutes(minute: number): void {
    let time: BladeDate = this.atValue === '' ? new BladeDate() : new BladeDate(this.atValue);
    time = time.setMinutes(minute);
    this.atValue = time;
    this.handleFormat();
  }

  selectSecond(second: number): void {
    let time: BladeDate = this.atValue === '' ? new BladeDate() : new BladeDate(this.atValue);
    time = time.setSeconds(second);
    this.atValue = time;
    this.handleFormat();
    this.atVisible = false;
  }

  handleFormat(): void {
    const change_date = this.atValue;
    let change_date_format: string;
    if (this.format) {
      // @ts-ignore
      change_date_format = change_date.format(this.format);
    }
    this.onChange(change_date_format);
  }

  setMode(mode: string): void {
    this.mode = mode;
  }
}
