import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ColComponent} from "../../grid/col/col.component";
import * as moment from 'moment'

@Component({
  selector: 'atTime',
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
  `,

})
export class TimeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this._buildHours()
    this._buildMinutes()
    this._buildSeconds()
  }

  @Input() date = moment()

  seconds: Array<any>

  minutes: Array<any>

  hours: Array<any>


  private _selected_second
  private _selected_minutes
  private _selected_hour


  @Output() selectHour: EventEmitter<any> = new EventEmitter()
  @Output() selectMinute: EventEmitter<any> = new EventEmitter()
  @Output() selectSecond: EventEmitter<any> = new EventEmitter()


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

  @ViewChild('hour_panel') hour_panel
  @ViewChild('minute_panel') minute_panel
  @ViewChild('second_panel') second_panel

  inited = false

  ngAfterViewChecked() {
    if (!this.inited) {
      this.inited = true
      this.setPosition()
    }
  }

  ngAfterContentInited() {

  }

  setPosition() {
    let m_p = this.selected_minutes / 60
    let h_p = this.selected_hour / 24
    let s_p = this.selected_second / 60

    let h_el = this.hour_panel._elementRef.nativeElement
    let m_el = this.minute_panel._elementRef.nativeElement
    let s_el = this.second_panel._elementRef.nativeElement


    let h_el_height = h_el.scrollHeight
    let m_el_height = m_el.scrollHeight
    let s_el_height = s_el.scrollHeight

    h_el.scrollTop = h_el_height * h_p
    s_el.scrollTop = s_el_height * s_p
    m_el.scrollTop = m_el_height * m_p

  }

  _select_minutes(index) {
    this.selected_minutes = index
    this.selectMinute.emit(index)
  }

  _select_hour(index) {
    this.selected_hour = index
    this.selectHour.emit(index)
  }

  _select_second(index) {
    this.selected_second = index
    this.selectSecond.emit(index)
  }

  confirmTime() {
    let second = this.seconds.find((s) => {
      return s.index == this.selected_second
    })

    let minute = this.minutes.find((s) => {
      return s.index == this.selected_minutes
    })

    let hour = this.hours.find((s) => {
      return s.index == this.selected_hour
    })
  }

}
