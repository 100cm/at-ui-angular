import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-popover',
  templateUrl: './at-demo-popover.component.html',
  styles: [
      `:host ::ng-deep .at-popover {
      margin-left: 16px;
    }`
  ]
})
export class AtDemoPopoverComponent implements OnInit {

  constructor() {
  }

  basic = require('./demo-basic-popover/demo-basic-popover.component.html');
  position = require('./demo-position-popover/demo-position-popover.component.html');
  content = require('./demo-content-popover/demo-content-popover.component.html');

  ngOnInit() {
  }

}
