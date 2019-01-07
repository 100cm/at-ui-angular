import { Component, OnInit } from '@angular/core';
import { DocHelper } from '../utils/doc-helper';

@Component({
  selector: 'app-at-demo-input',
  templateUrl: './at-demo-input.component.html',
  styleUrls: ['./at-demo-input.component.css']
})
export class AtDemoInputComponent implements OnInit {

  basic_input = require('!!raw-loader!./demo-basic-input/demo-basic-input.component.html');

  status_input = require('!!raw-loader!./demo-status-input/demo-status-input.component.html');

  size_input = require('!!raw-loader!./demo-size-input/demo-size-input.component.html');

  prepend = require('!!raw-loader!./demo-pend-input/demo-pend-input.component.html');

  icon_input = require('./demo-icon-input/demo-icon-input.component.html');

  constructor() {

  }

  ngOnInit() {
  }

}
