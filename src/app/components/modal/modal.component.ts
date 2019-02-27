import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin
} from '@angular/cdk/overlay';
import {
  AfterViewInit, ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output,
  Renderer2, TemplateRef, Type, ViewChild
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AtGlobalMonitorService } from '../at-global-monitor.service';
import { StatusIconType } from '../icon/icon-status-type';
import { isPromise } from '../utils/class-helper';
import { OnClickCallback } from './at-modal.service';

export interface ClickPosition {
  x: number;
  y: number;
}

@Component({
  selector: 'at-modal',
  animations: [trigger('enterLeave', [
    state('enter', style({opacity: 1, transform: 'scale(1)'})),
    transition('* => enter', [
      style({opacity: 0, transform: 'scale(0.2)'}),
      animate('200ms linear')
    ]),
    state('leave', style({opacity: 0, transform: 'scale(0.2)'})),
    transition('* => leave', [
      style({opacity: 1, transform: 'scale(1)'}),
      animate('180ms linear')
    ])
  ])],
  template: `
    <div>
      <ng-content></ng-content>
      <div overlay-origin></div>
      <ng-template
        cdkConnectedOverlay
        (backdropClick)="cancelInside()"
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
          <div
            #modalContainer
            class="at-modal" [@enterLeave]="state" (@enterLeave.start)="startAnimation()"
            (@enterLeave.done)="doneAnimation()"
            [style.width]="width +'px'"
            [style.transform-origin]="transformOrigin"
          >
            <div *ngIf="showHeader" [ngClass]="{'at-modal__header': true}">
              <div class="at-modal__title" #custom_title>
                <ng-content select="[header]">
                </ng-content>
                <ng-container [ngSwitch]="true">
                  <ng-container *ngSwitchCase="isTemplateRef(title)" [ngTemplateOutlet]="title"></ng-container>
                  <ng-container *ngSwitchCase="isNonEmptyString(title)">
                    <div [innerHTML]="title"></div>
                  </ng-container>
                </ng-container>
              </div>
            </div>
            <div class="at-modal__body" #modal_body>
              <ng-content select="[body]"></ng-content>
              <ng-container [ngSwitch]="true">
                <ng-container *ngSwitchCase="isTemplateRef(message)" [ngTemplateOutlet]="message"></ng-container>
                <ng-container *ngSwitchCase="isNonEmptyString(message)">
                  <div [innerHTML]="message"></div>
                </ng-container>
              </ng-container>
              <ng-template [ngTemplateOutlet]="atComponent"></ng-template>
            </div>
            <div *ngIf="showFooter" class="at-modal__footer">
              <div #custom_footer>
                <ng-content select="[footer]"></ng-content>
              </div>
              <div *ngIf="custom_footer.children.length == 0 &&  custom_footer.innerText.length == 0">
                <button class="at-btn" (click)="cancelInside()">
                  <span class="at-btn__text">{{'Modal.cancel' | atI18n}}</span>
                </button>
                <button (click)="okInside()" type="primary" class="at-btn at-btn--primary">
                  <span class="at-btn__text">{{'Modal.ok' | atI18n}}</span>
                </button>
              </div>
            </div>
            <i *ngIf="atType == 'confirm'" class="icon at-modal__icon {{ icon_status[status]}}"></i>
            <span *ngIf="closeable" (click)="cancelInside()" class="at-modal__close"><i
              class="icon icon-x"></i></span>
          </div>
        </div>
      </ng-template>

    </div>

  `
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private el: ElementRef, private global_monitor: AtGlobalMonitorService, private cdr: ChangeDetectorRef) {
  }

  ngOnDestroy(): void {
    this.$showSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  state = 'enter';
  icon_status = StatusIconType;
  @Output() readonly onOk = new EventEmitter();
  @Output() readonly onCancel = new EventEmitter();

  @Input() showFooter = true;
  @Input() width: number = 520;
  @Input() top: number = 100;
  @Input() maskClose: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() status: 'error' | 'success' | 'warning' | 'info' = 'info';
  @Input() title: string | TemplateRef<void>;
  @Input() closeable = true;
  @Input() message: string | TemplateRef<void>;
  @Input() atType: 'confirm' | 'normal' = 'normal';
  @Input() atComponent: TemplateRef<void>;
  transformOrigin = '0px 0px 0px';

  @ViewChild(CdkConnectedOverlay) cdkOverlay: CdkConnectedOverlay;
  @ViewChild('modalContainer') modal: ElementRef;

  atOnClose: OnClickCallback<ModalComponent> = () => {
  };
  atOnOk: OnClickCallback<ModalComponent> = () => {
  };

  atAfterOk = () => {
  };

  startAnimation(): void {
    if (this.state === 'enter') {
      setTimeout(_ => {
        this.updateTransformOrigin();
      });
    }
  }

  doneAnimation(): void {
    if (this.state === 'leave') {
      Promise.resolve().then(() => {
          this._show = false;
          this.showChange.emit(false);
        }
      );
    }
  }

  $showSubscription = Subscription.EMPTY;

  atAfterClose = () => {
  };

  ok(): void {
    this.onOk.emit();
    this.setShow(false);
    this.atAfterOk();
  }

  cancel(): void {
    this.onCancel.emit();
    this.setShow(false);
    this.atAfterClose();
  }

  cancelInside(): void {
    if (typeof this.atOnClose === 'function') {
      const result = this.atOnClose(this);
      const caseClose = (doClose: boolean | void | {}) => (doClose !== false) && this.cancel(); // Users can return "false" to prevent closing by default
      if (isPromise(result)) {
        const handleThen = (doClose) => {
          caseClose(doClose);
        };
        (result as Promise<void>).then(handleThen).catch(handleThen);
      } else {
        caseClose(result);
      }
    }
  }

  okInside(): void {
    if (typeof this.atOnOk === 'function') {
      const result = this.atOnOk(this);
      const caseClose = (doClose: boolean | void | {}) => (doClose !== false) && this.ok(); // Users can return "false" to prevent closing by default
      if (isPromise(result)) {
        const handleThen = (doClose) => {
          caseClose(doClose);
        };
        (result as Promise<void>).then(handleThen).catch(handleThen);
      } else {
        caseClose(result);
      }
    }
  }

  @ViewChild(CdkOverlayOrigin) overlay: CdkOverlayOrigin;

  @Output() readonly showChange = new EventEmitter<boolean>();
  private _show = false;

  public $showChange = new Subject();

  clickHide(event: MouseEvent): void {
    if ((event.target as HTMLElement).getAttribute('role') === 'dialog' && this.maskClose) {
      this.cancelInside();
    }
  }

  get show(): boolean {
    return this._show;
  }

  @Input()
  set show(value: boolean) {
    this.setShow(value);
  }

  setShow(value: boolean): void {
    this.$showChange.next(value);
  }

  ngAfterViewInit(): void {
    this.subscribeStatus();
  }

  private updateTransformOrigin(): void {
    const lastPosition = this.global_monitor.lastClickPosition;
    if (lastPosition) {
      this.transformOrigin = `${lastPosition.x - this.modal.nativeElement.offsetLeft}px ${lastPosition.y - this.modal.nativeElement.offsetTop}px 0px`;
    }
  }

  subscribeStatus(): void {
    if (this.$showSubscription === Subscription.EMPTY) {
      this.$showSubscription = this.$showChange.asObservable().subscribe((show: boolean) => {
        if (show) {
          this._show = show;
          this.showChange.emit(show);
        }
        this.state = show ? 'enter' : 'leave';
      });
    }
  }

  public isNonEmptyString(value: {}): boolean {
    return typeof value === 'string' && value !== '';
  }

  public isTemplateRef(value: {}): boolean {
    return value instanceof TemplateRef;
  }

  public isComponent(value: {}): boolean {
    return value instanceof Type;
  }

}
