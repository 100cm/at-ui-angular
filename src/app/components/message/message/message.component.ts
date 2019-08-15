import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { StatusIconType } from '../../icon/icon-status-type';
import { NotificationConfig } from '../../notification/notification/notification-config';
import { MessageContainerComponent } from '../message-container/message-container.component';

@Component({
  selector: 'at-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="at-message--wrapper" [@enterLeave]="message.state">
      <div class="at-message at-message--{{message.type}}">
        <i class="icon at-message__icon {{status[message.type]}}"></i>
        <ng-container [ngSwitch]="true">
          <ng-container *ngSwitchCase="isTemplateRef(message.message)"
                        [ngTemplateOutlet]="message.message"></ng-container>
          <ng-container *ngSwitchCase="!isTemplateRef(message.message)">
             <span class="at-message__content">
                {{message.message}}
            </span>
          </ng-container>
        </ng-container>
      </div>
    </div>
  `,
  animations: [
    trigger('enterLeave', [
      state('enter', style({opacity: 1, transform: 'translateY(0)'})),
      transition('* => enter', [
        style({opacity: 0, transform: 'translateY(-50%)'}),
        animate('100ms linear')
      ]),
      state('leave', style({opacity: 0, transform: 'translateY(-50%)'})),
      transition('* => leave', [
        style({opacity: 1, transform: 'translateY(0)'}),
        animate('100ms linear')
      ])
    ])
  ]

})
export class MessageComponent implements OnInit {

  constructor(private message_container: MessageContainerComponent) {
  }

  timer;
  status = StatusIconType;

  ngOnInit(): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(_ => {
      this.message_container.remove(this.message.index);
    }, this.message.duration);
  }

  isTemplateRef(value: {}): boolean {
    return value instanceof TemplateRef;
  }

  @Input()
  message: NotificationConfig;

}
