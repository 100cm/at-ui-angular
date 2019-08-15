import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as momentI from 'moment';

const moment = momentI;
@Component({
  selector: 'at-time',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div at-row>
      <div #hour_panel at-col [span]="8" class="at-time-panel">
        <ul>
          <li *ngFor="let s of hours"
              (click)="_select_hour(s.index)"
              [ngClass]="{'time-selected':s.index == selected_hour}">
            {{s.name}}
          </li>
        </ul>
      </div>
      <div #minute_panel at-col [span]="8" class="at-time-panel">
        <ul>
          <li *ngFor="let s of minutes"
              (click)="_select_minutes(s.index)"
              [ngClass]="{'time-selected':s.index == selected_minutes}"
          >
            {{s.name}}
          </li>
        </ul>
      </div>
      <div #second_panel at-col [span]="8" class="at-time-panel">

        <ul>
          <li *ngFor="let s of seconds"
              (click)="_select_second(s.index)"
              [ngClass]="{'time-selected':s.index == selected_second}"
          >
            {{s.name}}
          </li>
        </ul>
      </div>
    </div>
  `

})
export class TimeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this._buildHours();
    this._buildMinutes();
    this._buildSeconds();
  }

  @Input() date = moment();

  seconds: any[];

  minutes: any[];

  hours: any[];

  private _selected_second;
  private _selected_minutes;
  private _selected_hour;

  @Output() selectHour: EventEmitter<any> = new EventEmitter();
  @Output() selectMinute: EventEmitter<any> = new EventEmitter();
  @Output() selectSecond: EventEmitter<any> = new EventEmitter();

  get selected_second() {
    return this._selected_second;
  }

  @Input()
  set selected_second(value) {
    this._selected_second = value;
  }

  get selected_minutes() {
    return this._selected_minutes;
  }

  @Input()
  set selected_minutes(value) {
    this._selected_minutes = value;
  }

  get selected_hour(): number {
    return this._selected_hour;
  }

  @Input()
  set selected_hour(value: number) {
    this._selected_hour = value;
  }

  _buildHours() {
    this.hours = [];
    for (let i = 0; i <= 23; i++) {
      this.hours.push({
        name: i.toString().length === 1 ? ('0' + i) : ('' + i),
        index: i
      });
    }
  }

  _buildMinutes() {
    this.minutes = [];
    for (let i = 0; i <= 59; i++) {
      this.minutes.push({
        name: i.toString().length === 1 ? ('0' + i) : ('' + i),
        index: i
      });
    }
  }

  _buildSeconds() {
    this.seconds = [];
    for (let i = 0; i <= 59; i++) {
      this.seconds.push({
        name: i.toString().length === 1 ? ('0' + i) : ('' + i),
        index: i
      });
    }
  }

  @ViewChild('hour_panel', { static: true }) hour_panel;
  @ViewChild('minute_panel', { static: true }) minute_panel;
  @ViewChild('second_panel', { static: true }) second_panel;

  inited = false;

  ngAfterViewChecked() {
    if (!this.inited) {
      this.inited = true;
      this.setPosition();
    }
  }

  ngAfterContentInited() {

  }

  setPosition() {
    const m_p = this.selected_minutes / 60;
    const h_p = this.selected_hour / 24;
    const s_p = this.selected_second / 60;

    const h_el = this.hour_panel._elementRef.nativeElement;
    const m_el = this.minute_panel._elementRef.nativeElement;
    const s_el = this.second_panel._elementRef.nativeElement;

    const h_el_height = h_el.scrollHeight;
    const m_el_height = m_el.scrollHeight;
    const s_el_height = s_el.scrollHeight;

    h_el.scrollTop = h_el_height * h_p;
    s_el.scrollTop = s_el_height * s_p;
    m_el.scrollTop = m_el_height * m_p;

  }

  _select_minutes(index) {
    this.selected_minutes = index;
    this.selectMinute.emit(index);
  }

  _select_hour(index) {
    this.selected_hour = index;
    this.selectHour.emit(index);
  }

  _select_second(index) {
    this.selected_second = index;
    this.selectSecond.emit(index);
  }

  confirmTime() {
    const second = this.seconds.find((s) => {
      return s.index == this.selected_second;
    });

    const minute = this.minutes.find((s) => {
      return s.index == this.selected_minutes;
    });

    const hour = this.hours.find((s) => {
      return s.index == this.selected_hour;
    });
  }

}
