import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { StatusIconType } from '../../icon/icon-status-type';
import { NotificationContainerComponent } from '../notification-container/notification-container.component';
import { NotificationConfig } from './notification-config';

@Component({
  selector: 'at-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div (mouseenter)="stopRemove()" (mouseleave)="startRemove()"
         [@enterLeave]="config.state"
         class="at-notification-contained  at-notification--{{config.type}}"
         [ngClass]="{'at-notification--with-message ': config.message !=''}"
    >
      <ng-container [ngSwitch]="true">
        <ng-container *ngSwitchCase="isTemplateRef(config.icon)"
                      [ngTemplateOutlet]="config.icon"></ng-container>
        <ng-container *ngSwitchCase="!isTemplateRef(config.icon)">
          <i class="icon at-notification__icon {{status[config.type]}}"></i>
        </ng-container>
      </ng-container>
      <div class="at-notification__content">
        <ng-container [ngSwitch]="true">
          <ng-container *ngSwitchCase="isTemplateRef(config.title)"
                        [ngTemplateOutlet]="config.title"></ng-container>
          <ng-container *ngSwitchCase="!isTemplateRef(config.title)">
            <p class="at-notification__title">{{config.title}}</p>
          </ng-container>
        </ng-container>
        <ng-container [ngSwitch]="true">
          <ng-container *ngSwitchCase="isTemplateRef(config.message)"
                        [ngTemplateOutlet]="config.message"></ng-container>
          <ng-container *ngSwitchCase="!isTemplateRef(config.message)">
            <p class="at-notification__message">{{config.message}}</p>
          </ng-container>
        </ng-container>
      </div>
      <i *ngIf="config.showClose" (click)="remove()" class="icon icon-x at-notification__close">
      </i>
    </div>

  `,
  animations: [
    trigger('enterLeave', [
      state('enter', style({opacity: 1, transform: 'translateX(0)'})),
      transition('* => enter', [
        style({opacity: 0, transform: 'translateX(5%)'}),
        animate('100ms linear')
      ]),
      state('leave', style({opacity: 0, transform: 'translateY(-10%)'})),
      transition('* => leave', [
        style({opacity: 1, transform: 'translateY(0)'}),
        animate('100ms linear')
      ])
    ])
  ],
  styles: [`
    :host ::ng-deep .at-notification-contained {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 15px;
      right: 16px;
      width: 320px;
      padding: 8px 16px;
      color: #3f536e;
      background-color: #fff;
      line-height: 1.5;
      border-radius: 4px;
      -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      -webkit-transition: opacity .3s, top .4s, -webkit-transform .3s;
      transition: opacity .3s, top .4s, -webkit-transform .3s;
      transition: opacity .3s, transform .3s, top .4s;
      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;
      z-index: 1010;
    }
  `]
})
export class NotificationComponent implements OnInit {

  constructor(public notificationContainer: NotificationContainerComponent, private changeDetectorRef: ChangeDetectorRef) {

  }

  timer;

  status = StatusIconType;

  ngOnInit(): void {
    if (this.config.duration !== 0) {
      this.startRemove();
    }
  }

  @Input()
  config: NotificationConfig;

  remove(): void {
    this.notificationContainer.remove(this.config.index);
    this.changeDetectorRef.detectChanges();
  }

  startRemove(): void {
    if (this.config.duration !== 0) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.remove();
      }, this.config.duration);
    }
  }

  stopRemove(): void {
    clearTimeout(this.timer);
  }

  isTemplateRef(value: {}): boolean {
    return value instanceof TemplateRef;
  }

}
