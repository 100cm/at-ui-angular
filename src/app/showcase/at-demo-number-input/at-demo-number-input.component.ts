import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-number-input',
  templateUrl: './at-demo-number-input.component.html',
  styleUrls: ['./at-demo-number-input.component.css']
})
export class AtDemoNumberInputComponent implements OnInit {

  constructor() {
  }

  basic_ni = require('!!raw-loader!./demo-basic-number-input/demo-basic-number-input.component.html')
  step_ni = require('!!raw-loader!./demo-step-number-input/demo-step-number-input.component.html')
  size_ni = require('!!raw-loader!./demo-size-number-input/demo-size-number-input.component.html')

  ngOnInit() {
  }

}
