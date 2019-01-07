import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-message',
  templateUrl: './at-demo-message.component.html',
  styleUrls: ['./at-demo-message.component.css']
})
export class AtDemoMessageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  basic = require('!!raw-loader!./demo-basic-message/demo-basic-message.component');

  load = require('!!raw-loader!./demo-loading-message/demo-loading-message.component');

}
