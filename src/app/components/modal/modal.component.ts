import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ContentChild,
  Renderer2, ChangeDetectorRef
}                                                   from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {
  AtGlobalMonitorService,
  Position
}                                                   from '../at-global-monitor.service';
import {StatusIconType}                             from '../icon/icon-status-type';
import {
  CdkOverlayOrigin,
}                                                   from '@angular/cdk/overlay';
import {Subject, Subscription}                      from 'rxjs';

@Component({
  selector: 'at-modal',
  animations: [trigger('enterLeave', [
    state('enter', style({opacity: 1, transform: 'scale(1)'})),
    transition('* => enter', [
      style({opacity: 0, transform: 'scale(0.1)'}),
      animate('100ms linear')
    ]),
    state('leave', style({opacity: 0, transform: 'scale(0)'})),
    transition('* => leave', [
      style({opacity: 1, transform: 'scale(1)'}),
      animate('100ms linear')
    ]),
  ])],
  template: `
    <div>
      <ng-content></ng-content>
      <div overlay-origin></div>
      <ng-template
        cdkConnectedOverlay
        (backdropClick)="setShow(false)"
        [cdkConnectedOverlayPanelClass]="'fix_model_panel'"
        [cdkConnectedOverlayHasBackdrop]="true"
        [cdkConnectedOverlayOrigin]="overlay"
        [cdkConnectedOverlayOpen]="show"
      >
        <div class="at-modal__mask"></div>
        <div
          role="dialog"
          (click)="clickHide($event)"
          class="at-modal__wrapper at-modal--{{atType}} at-modal--{{atType}}-{{status}}"
        >
          <div class="at-modal" [@enterLeave]="state"
               [style.width]="width +'px'"
          >
            <div *ngIf="showHeader" [ngClass]="{'at-modal__header': true}">
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
            <div *ngIf="showFooter" class="at-modal__footer">
              <div #custom_footer>
                <ng-content select="[footer]"></ng-content>
              </div>
              <div *ngIf="custom_footer.children.length == 0 &&  custom_footer.innerText.length == 0">
                <button class="at-btn" (click)="cancel()">
                  <span class="at-btn__text">取消</span>
                </button>
                <button (click)="ok()" type="primary" class="at-btn at-btn--primary">
          <span class="at-btn__text">确认
          </span>
                </button>
              </div>
            </div>
            <i *ngIf="atType == 'confirm'" class="icon at-modal__icon {{ icon_status[status]}}"></i>
            <span *ngIf="closeable" (click)="cancel()" class="at-modal__close"><i
              class="icon icon-x"></i></span>
          </div>
        </div>
      </ng-template>

    </div>

  `,
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {
  }

  state = 'enter'
  icon_status = StatusIconType
  @Output() onOk = new EventEmitter()
  @Output() onCancel = new EventEmitter()

  @Input() showFooter = true
  @Input() width: number = 520
  @Input() top: number = 100
  @Input() maskClose: boolean = true
  @Input() showHeader: boolean = true
  @Input() status: 'error' | 'success' | 'warning' | 'info' = 'info'
  @Input() title
  @Input() closeable = true
  @Input() message
  @Input() atType: 'confirm' | 'normal' = 'normal'


  OnOkFallBack = () => {
  }

  $showSubscription = Subscription.EMPTY

  OnCancleFallBack = () => {
  }

  ok() {
    this.onOk.emit()
    this.setShow(false)
    this.OnOkFallBack()
  }

  cancel() {
    this.onCancel.emit()
    this.setShow(false)
    this.OnCancleFallBack()
  }


  @ViewChild(CdkOverlayOrigin) overlay: CdkOverlayOrigin

  @Output() showChange = new EventEmitter<boolean>()
  private _show = false

  public $showChange = new Subject()

  clickHide(event) {
    if (event.target.getAttribute('role') === 'dialog' && this.maskClose) {
      this.setShow(false)
    }
  }

  get show(): boolean {
    return this._show;
  }

  @Input()
  set show(value: boolean) {
    this.setShow(value)
  }

  setShow(value) {
    this.$showChange.next(value)
  }

  ngAfterViewInit() {
    this.subscribeStatus()
  }

  subscribeStatus() {
    if (this.$showSubscription == Subscription.EMPTY) {
      this.$showSubscription = this.$showChange.asObservable().subscribe((show: boolean) => {
        this._show = show
        this.state = show ? 'enter' : 'leave'
        this.showChange.emit(show)
      })
    }
  }


}
