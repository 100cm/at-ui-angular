import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-switch',
  templateUrl: './at-demo-switch.component.html',
  styleUrls: ['./at-demo-switch.component.css']
})
export class AtDemoSwitchComponent implements OnInit {

  constructor() { }

  code = require('!!raw-loader!./swicth-basic/swicth-basic.component.html');

  ngOnInit() {
  }

}
