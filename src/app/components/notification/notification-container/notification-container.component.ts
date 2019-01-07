import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { NotificationConfig } from '../notification/notification-config';

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

  ngOnInit() {

  }

  notifications: NotificationConfig[] = [];

  addMessage(notification) {
    this.notifications.push(notification);
  }

  remove(index) {
    const notification = this.notifications.find((n) => {
      return n.index == index;
    });
    notification.state = 'leave';
    this.removeByIndex(index);
  }

  removeByIndex(index) {
    setTimeout(_ => {
      this.notifications = this.notifications.filter((no) => {
        return (no.index != index);
      });
    }, 110);

  }

}
