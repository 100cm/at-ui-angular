import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-alert',
  templateUrl: './at-demo-alert.component.html',
  styleUrls: ['./at-demo-alert.component.css']
})
export class AtDemoAlertComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  basic = require('!!raw-loader!./demo-alert-basic/demo-alert-basic.component.html');

}
