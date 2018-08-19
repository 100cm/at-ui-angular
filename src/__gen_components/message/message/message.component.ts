import {Component, Input, OnInit} from '@angular/core';
import {NotificationConfig} from "../../notification/notification/notification-config";
import {trigger, state, style, transition, animate} from '@angular/animations';
import {NotificationComponent} from "../../notification/notification/notification.component";
import {MessageContainerComponent} from "../message-container/message-container.component";
import {StatusIconType} from "../../icon/icon-status-type";

@Component({
  selector: 'atMessage',
  template: `
    <div class="at-message--wrapper" [@enterLeave]="message.state">
      <div class="at-message at-message--{{message.type}}">
        <i class="icon at-message__icon {{status[message.type]}}"></i>
        <span class="at-message__content">
      {{message.message}}
    </span>
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
      ]),
    ])
  ]

})
export class MessageComponent implements OnInit {


  constructor(private message_container: MessageContainerComponent) {
  }

  timer
  status = StatusIconType

  ngOnInit() {
    clearTimeout(this.timer)
    this.timer = setTimeout(_ => {
      this.message_container.remove(this.message.index)
    }, this.message.duration)
  }

  @Input() message: NotificationConfig

}
