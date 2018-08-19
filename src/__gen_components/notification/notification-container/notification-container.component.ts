import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {NotificationConfig} from "../notification/notification-config";
import {setTimeout} from "timers";

@Component({
  selector: 'app-notification-container',
  template: `
    <div class="at-notification-container">
      <atNotification *ngFor="let item of notifications" [config]="item"></atNotification>
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

  notifications: Array<NotificationConfig> = []


  addMessage(notification) {
    this.notifications.push(notification)
  }

  remove(index) {
    let notification = this.notifications.find((n) => {
      return n.index == index
    })
    notification.state = 'leave'
    this.removeByIndex(index)
  }

  removeByIndex(index) {
    setTimeout(_ => {
      this.notifications = this.notifications.filter((no) => {
        return (no.index != index)
      })
    }, 110)

  }

}
