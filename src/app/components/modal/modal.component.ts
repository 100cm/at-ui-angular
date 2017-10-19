import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AtGlobalMonitorService, Position} from "../at-global-monitor.service";
import {StatusIconType} from "../icon/icon-status-type";

@Component({
  selector: 'atModal',
  animations: [trigger('enterLeave', [
    state('enter', style({opacity: 1, transform: 'scale(1)'})),
    transition('* => enter', [
      style({opacity: 0, transform: 'scale(0.1)'}),
      animate('150ms linear')
    ]),
    state('leave', style({opacity: 0, transform: 'scale(0)'})),
    transition('* => leave', [
      style({opacity: 1, transform: 'scale(1)'}),
      animate('150ms linear')
    ]),
  ])],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {

  constructor(private global_service: AtGlobalMonitorService) {
  }

  ngOnInit() {

  }

  state = 'enter'
  position: Position
  icon_status = StatusIconType

  @Input() width: number = 520
  @Input() closeable: boolean = true
  private _atType: 'confirm' | 'normal' = 'normal'
  private _status: 'error' | 'success' | 'warning' | 'info' = 'info'
  private _show: boolean = false
  private _message: string
  @Output() onCancel: EventEmitter<boolean> = new EventEmitter()
  @Output() onOk: EventEmitter<boolean> = new EventEmitter()
  @ViewChild('modal_content') modal_content: ElementRef


  get message(): string {
    return this._message;
  }

  @Input()
  set message(value: string) {
    this._message = value;
  }

  get atType() {
    return this._atType;
  }

  @Input()
  set atType(value) {
    this._atType = value;
  }

  get status() {
    return this._status;
  }

  @Input()
  set status(value) {
    this._status = value;
  }

  get show(): boolean {
    return this._show;
  }


  @Input()
  set show(value: boolean) {
    value == true ? this.state = 'enter' : this.state = 'leave'
    setTimeout(_ => {
      this.setStyle()
    })
    this._show = value;
  }

  cancel() {
    this.state = 'leave'
    setTimeout(_ => {
      this._show = false
      this.onCancel.emit(this._show)
    }, 180)

  }

  setShow() {
    this.state = 'enter'
    setTimeout(_ => {
      this._show = true
    }, 180)
  }


  positionStyle = {}

  setStyle() {
    const origin = this.global_service.lastClickPosition
    let el = this.modal_content.nativeElement;
    let transformOrigin = `${origin.x - el.offsetLeft}px ${origin.y - el.offsetTop }px 0px`;
    this.positionStyle = {'transform-origin': transformOrigin}
    return this.positionStyle
  }

  ok() {
    this.state = 'leave'
    setTimeout(_ => {
      this._show = false
      this.onOk.emit(this._show)
    }, 180)

  }

}
