import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-modal',
  templateUrl: './at-demo-modal.component.html',
  styleUrls: ['./at-demo-modal.component.css']
})
export class AtDemoModalComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  basic = require('!!raw-loader!./demo-basic-modal/demo-basic-modal.component.html');
  custom = require('!!raw-loader!./demo-custom-modal/demo-custom-modal.component.html');
  position = require('!!raw-loader!./demo-position-modal/demo-position-modal.component.html');
  service = require('!!raw-loader!./demo-service-modal/demo-service-modal.component');

}
