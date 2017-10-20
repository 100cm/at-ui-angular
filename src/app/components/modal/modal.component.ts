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
  template: `
    <div>
      <div [hidden]="!show" class="at-modal__mask"></div>

      <div [ngStyle]="{'display': show ? '' : 'none'}"
           role="dialog"
           (click)="cancelFromMask($event)"
           class="at-modal__wrapper at-modal--{{atType}} at-modal--{{atType}}-{{status}}"
      >
        <div #modal_content class="at-modal" [@enterLeave]="state"
             [ngStyle]="positionStyle"
             [style.width]="width +'px'">
          <div [ngClass]="{'at-modal__header': headerContains()}">
            <div class="at-modal__title" #custom_title>
              <ng-content select="[header]">
              </ng-content>
              {{title ? title : ''}}
            </div>
          </div>
          <div class="at-modal__body" #modal_body>
            <ng-content select="[body]"></ng-content>
            {{message ? message : ''}}
          </div>
          <div class="at-modal__footer">
            <div #custom_footer>
              <ng-content select="[footer]"></ng-content>
            </div>
            <div *ngIf="custom_footer.children.length == 0 &&  custom_footer.innerText.length == 0">
              <button atButton (click)="cancel()">取消</button>
              <button (click)="ok()" type="primary" class="at-btn at-btn--primary">
          <span class="at-btn__text">确认
          </span>
              </button>
            </div>
          </div>
          <i *ngIf="atType == 'confirm'" class="icon at-modal__icon {{ icon_status[status]}}"></i>
          <span *ngIf="closeable" (click)="cancel()" class="at-modal__close"><i class="icon icon-x"></i></span>
        </div>
      </div>

    </div>

  `,
})
export class ModalComponent implements OnInit {

  constructor(private global_service: AtGlobalMonitorService) {
  }

  ngOnInit() {

  }

  state = 'enter'
  position: Position
  icon_status = StatusIconType


  private _closeable: boolean = true
  private _atType: 'confirm' | 'normal' = 'normal'
  private _status: 'error' | 'success' | 'warning' | 'info' = 'info'
  private _show: boolean = false
  private _message: string
  @Input() width: number = 520
  @Input() top: number = 100
  @Input() maskClose: boolean = true
  @Output() onCancel: EventEmitter<boolean> = new EventEmitter()
  @Output() onOk: EventEmitter<boolean> = new EventEmitter()
  @ViewChild('modal_content') modal_content: ElementRef


  get closeable(): boolean {
    return this._closeable;
  }

  @Input()
  set closeable(value: boolean) {
    console.log(value)
    this._closeable = value;
  }

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
      setTimeout(_ => {
        this.setStyle()

      })
      this._show = value;
    })


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
    this.positionStyle = {'transform-origin': transformOrigin, 'top': this.top + 'px'}
    return this.positionStyle
  }

  ok() {
    this.state = 'leave'
    setTimeout(_ => {
      this._show = false
      this.onOk.emit(this._show)
    }, 180)

  }

  cancelFromMask(e) {
    if (e.target.getAttribute('role') === 'dialog' && this.maskClose) {
      this.cancel()
    }
  }

  @ViewChild('custom_title') customTitle: ElementRef

  headerContains() {
    let custom_title = this.customTitle.nativeElement
    return ( custom_title.children.length > 0 || custom_title.innerText.length > 0)
  }
}
