import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild
}                                                                                    from '@angular/core';
import * as moment                                                                   from 'moment'
import {NG_VALUE_ACCESSOR}                                                           from "@angular/forms";
import {InputComponent}                                                              from "../input/input.component";
import {CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair} from "@angular/cdk/overlay";
import {
  DEFAULT_DROPDOWN_POSITIONS,
  POSITION_MAP
}                                                                                    from "../core/overlay/overlay-position-map";
import {fromEvent, Observable, Subject, Subscription}                                from "rxjs";
import {debounceTime, mapTo, merge}                                                  from "rxjs/operators";
import {underscoreToCamelCase}                                                       from "../utils/class-helper";
import {DropDownAnimation}                                                           from "../animations/drop-down-animation";
import {AtI18nService}                                                               from "../i18n";
import {AtI18nInterface}                                                             from "../i18n/at-i18n.interface";

@Component({
             selector: 'atDatetimePicker',
             template: `
               <atInput [ngModel]="atValue | atFormat: format" #timeinput (onFocus)="_show()"></atInput>
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
                     <a *ngIf="mode == 'date'" (click)="setMode('time')">{{il8n.DatePicker.chooseTime}}</a>
                     <a *ngIf="mode == 'time'" (click)="setMode('date')">{{il8n.DatePicker.chooseDate}}</a>
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
export class DatetimepickerComponent implements OnInit {

  constructor(private el: ElementRef,
              private at_i18n_service: AtI18nService,
              private _renderer: Renderer2, private cdr: ChangeDetectorRef) {
  }

  private il8n: AtI18nInterface
          _atType                              = 'full'
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
          _subscription: Subscription
          _visibleChange                       = new Subject<boolean>();
          $visible                             = this._visibleChange.asObservable()
          mode                                 = 'date'
          _visible                             = false
          dropdownPosition                     = 'bottom'

  @ViewChild(CdkConnectedOverlay) overlay


  set atVisible(value: boolean) {
    this._visible = value
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

  private _atValue = null

  get atValue() {
    return this._atValue
  }

  _show_value

  set showValue(value) {
    if (value) {
      this._show_value = value
    }
  }

  get showValue() {
    return this._show_value
  }

  set atValue(value) {
    if (value) {
      this._atValue    = value;
      this._show_value = value
    }
  }

  atYear = moment(this.atValue || this.showValue).year()

  atMonth = moment(this.atValue || this.showValue).month()

  selectedDate  = moment(this.atValue).date();
  selectedYear  = moment(this.atValue).year();
  selectedMonth = moment(this.atValue).month();


  private _selected_second
  private _selected_minutes
  private _selected_hour


  get selected_second(): number {
    return moment(this.atValue).second();
  }

  set selected_second(value: number) {
    this._selected_second = value;
  }

  get selected_minutes(): number {
    return moment(this.atValue).minutes();
  }

  set selected_minutes(value: number) {
    this._selected_minutes = value;
  }

  get selected_hour(): number {
    return moment(this.atValue).hour();
  }

  set selected_hour(value: number) {
    this._selected_hour = value;
  }

// ngModel Access
  onChange: any  = Function.prototype;
  onTouched: any = Function.prototype;

  @Input() format = "YYYY-MM-DD"
  @Input() disableDate

  writeValue(value: any): void {
    if (value) {
      this.updateDate(value);
    }
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  _onPositionChange(position: ConnectedOverlayPositionChange): void {
    this.dropdownPosition = position.connectionPair.originY == 'top' ? 'bottom' : 'top'
    this.cdr.detectChanges();
  }


  ngOnInit() {
    this.at_i18n_service.localChange.subscribe(il8n => {
      this.il8n = il8n
    })
  }


  @ViewChild('timeinput') input: InputComponent

  preYear() {
    this.atYear = this.atYear - 1;
  }

  nextYear() {
    this.atYear = this.atYear + 1;
  }

  preMonth() {
    if (this.atMonth - 1 < 0) {
      this.atMonth = 11;
      this.preYear();
    }
    else {
      this.atMonth = this.atMonth - 1;
    }
  }

  nextMonth() {
    if (this.atMonth + 1 > 11) {
      this.atMonth = 0;
      this.nextYear();
    }
    else {
      this.atMonth = this.atMonth + 1;
    }
  }

  clickDate(date) {
    this.updateDate(date.date)
    let change_date = this.atValue
    if (this.format) {
      change_date = change_date.format(this.format)
    }
    this.onChange(change_date)
  }

  updateDate(value) {
    if (this.atValue === value) {
      return;
    }
    this.atValue       = value;
    this.selectedMonth = moment(this.atValue).month();
    this.selectedYear  = moment(this.atValue).year();
    this.selectedDate  = moment(this.atValue).date();
    this.atYear        = moment(this.atValue).year();
    this.atMonth       = moment(this.atValue).month();

  }

  _hide(): void {
    this._visibleChange.next(false);
  }

  _show() {
    this._visibleChange.next(true)
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

  ngAfterViewInit() {
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

  clickMonth(month) {
    // this.atValue = moment(this.atValue).year(this.atYear).month(month.index).toDate();
    this.atMonth = month.index
    this.atType  = 'full'
  }

  clickYear(year) {
    this.atYear = year
    this.atType = 'month'
  }

  setCal(s) {
    this.atType = s
  }

  preCentury() {
    this.atYear = this.atYear - 10
  }

  nextCenury() {
    this.atYear = this.atYear + 10
  }


  selectHour(hour) {
    let time = moment(this.atValue)
    time.set('h', hour)
    this.atValue = time

    let change_date = this.atValue
    if (this.format) {
      change_date = change_date.format(this.format)
    }
    this.onChange(change_date)


  }

  selectMinutes(minute) {
    let time = moment(this.atValue)
    time.set('m', minute)
    this.atValue = time

    let change_date = this.atValue
    if (this.format) {
      change_date = change_date.format(this.format)
    }
    this.onChange(change_date)
  }

  selectSecond(second) {
    let time = moment(this.atValue)
    time.set('s', second)
    this.atValue = time

    let change_date = this.atValue
    if (this.format) {
      change_date = change_date.format(this.format)
    }
    this.onChange(change_date)
  }

  setMode(mode) {
    this.mode = mode
  }
}
