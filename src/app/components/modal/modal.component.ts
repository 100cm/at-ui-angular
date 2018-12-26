import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ContentChild,
  Renderer2
}                                                   from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {
  AtGlobalMonitorService,
  Position
}                                                   from '../at-global-monitor.service';
import {StatusIconType}                             from '../icon/icon-status-type';
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectionPositionPair
}                                                   from '@angular/cdk/overlay';
import {DEFAULT_DROPDOWN_POSITIONS}                 from '../core/overlay/overlay-position-map';
import {DropdownDirective}                          from '../dropdown/dropdown.directive';
import {ModalBodyDirective}                         from './modal-body.directive';
import {Subject}                                    from 'rxjs';

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
        [cdkConnectedOverlayHasBackdrop]="true"
        [cdkConnectedOverlayPositions]="_positions"
        [cdkConnectedOverlayOrigin]="overlay"
        [cdkConnectedOverlayMinWidth]="width"
        [cdkConnectedOverlayOpen]="_show"
      >
        <div [ngStyle]="{'display': _show ? '' : 'none'}"
             class="at-modal__mask"></div>
        <div
          role="dialog"
          [ngStyle]="{'display': _show ? '' : 'none'}"
          (click)="clickHide($event)"
          class="at-modal__wrapper at-modal--{{atType}} at-modal--{{atType}}-{{status}}"
        >
          <div class="at-modal" [@enterLeave]="state"
               [ngStyle]="positionStyle"
               [style.width]="width +'px'"
          >
            <div *ngIf="showHeader" [ngClass]="{'at-modal__header': headerContains()}">
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

  state

  @ViewChild(CdkOverlayOrigin) overlay: CdkOverlayOrigin

  @Output() showChange = new EventEmitter<boolean>()
  private _show = false

  private $showChange = new Subject()

  clickHide(event: Event) {
    this.setShow(false)
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
    this.$showChange.asObservable().subscribe((show: boolean) => {
      this._show = show
      this.state = show ? 'enter' : 'leave'
      this.showChange.emit(show)
    })
  }

}
