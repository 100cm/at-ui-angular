import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-radio',
  templateUrl: './at-demo-radio.component.html',
  styleUrls: ['./at-demo-radio.component.css']
})
export class AtDemoRadioComponent implements OnInit {

  constructor() {
  }

  basic_r = require('!!raw-loader!./demo-basic-radio/demo-basic-radio.component.html');
  button_r = require('!!raw-loader!./demo-button-radio/demo-button-radio.component.html');
  color_r = require('!!raw-loader!./demo-color-radio/demo-color-radio.component.html');
  disable_r = require('!!raw-loader!./demo-disable-radio/demo-disable-radio.component.html');
  size_r = require('!!raw-loader!./demo-size-radio/demo-size-radio.component.html');

  ngOnInit() {
  }

}
