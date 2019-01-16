import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { isPromise } from '../../utils/class-helper';
import { NotificationConfig, NotificationOption } from '../notification/notification-config';

@Component({
  selector: 'at-notification-container',
  template: `
    <div class="at-notification-container">
      <at-notification *ngFor="let item of notifications" [config]="item"></at-notification>
    </div>
  `,
  styles: [
      `:host ::ng-deep .at-notification-container {
      top: 20px;
      position: fixed;
      display: block;
      right: 16px;
      width: 320px;
      height: auto;
      z-index: 1040;
    }`
  ]

})
export class NotificationContainerComponent implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {

  }

  notifications: NotificationConfig[] = [];

  addMessage(notification: NotificationConfig): void {
    this.notifications.push(notification);
  }

  remove(index: string): void {
    const notification = this.notifications.find((n) => {
      return n.index === index;
    });
    if (notification) {
      this.removeInside(index);
    }
  }

  removeInside(index: string): void {
    const message = this.notifications.find((n) => {
      return n.index === index;
    });
    if (typeof message.atOnClose === 'function') {
      const result = message.atOnClose(message);
      const caseClose = (doClose: boolean | void | {}) => (doClose !== false) && this.removeByIndex(message.index); // Users can return "false" to prevent closing by default
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

  removeByIndex(index: string): void {
    const notification = this.notifications.find((n) => {
      return n.index === index;
    });
    notification.state = 'leave';
    setTimeout(_ => {
      this.notifications = this.notifications.filter((no) => {
        return (no.index !== index);
      });
      notification.$atAfterClose.next(notification);
    }, 110);
  }

}
