import { Component, OnInit } from '@angular/core';
import { NotificationContainerComponent } from '../../notification/notification-container/notification-container.component';

@Component({
  selector: 'app-message-container',
  template: `
    <div class="at-message__wrapper">

      <at-message [message]="message" *ngFor="let message of notifications"></at-message>

    </div>
  `,
  styles: [`
    :host ::ng-deep .at-message__wrapper {
      z-index: 1110;
    }

    :host ::ng-deep .at-message--wrapper {
      text-align: center;
      margin-top: 12px;
      pointer-events: none;
      transition: opacity .3s, transform .3s, top .4s, -webkit-transform .3s;
    }
  `]
})
export class MessageContainerComponent extends NotificationContainerComponent implements OnInit {

  ngOnInit() {
  }

  remove(index) {
    const notification = this.notifications.find((n) => {
      return n.index == index;
    });
    if (notification) {
      notification.state = 'leave';
      setTimeout(_ => {
        this.notifications = this.notifications.filter((no) => {
          return (no.index != index);
        });
      }, 110);
    }
  }

}
