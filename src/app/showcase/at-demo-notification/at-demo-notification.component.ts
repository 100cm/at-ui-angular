import {Component, Injectable, OnInit} from '@angular/core';
import {ComponentCreator} from "../../components/core/component-creator";
import {NotificationComponent} from "../../components/notification/notification/notification.component";

@Component({
  selector: 'app-at-demo-notification',
  templateUrl: './at-demo-notification.component.html',
  styleUrls: ['./at-demo-notification.component.css']
})
export class AtDemoNotificationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  code = require('!!raw-loader!./demo-basic-notification/demo-basic-notification.component')

}
