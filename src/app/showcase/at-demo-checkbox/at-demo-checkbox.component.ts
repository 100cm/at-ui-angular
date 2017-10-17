import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-checkbox',
  templateUrl: './at-demo-checkbox.component.html',
  styleUrls: ['./at-demo-checkbox.component.css']
})
export class AtDemoCheckboxComponent implements OnInit {

  basicCheck = require('!!raw-loader!./demo-basic-checkbox/demo-basic-checkbox.component');
  checkGroup = require('!!raw-loader!./demo-group-checkbox/demo-group-checkbox.component');

  constructor() {
  }

  ngOnInit() {
  }

}
