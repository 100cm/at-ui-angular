import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-steps',
  templateUrl: './at-demo-steps.component.html',
  styleUrls: ['./at-demo-steps.component.css']
})
export class AtDemoStepsComponent implements OnInit {

  constructor() {
  }

  basic_code = require('./demo-basic-steps/demo-basic-steps.component.html');
  horizontal_code = require('./demo-horizonal-steps/demo-horizonal-steps.component.html');
  demo_size = require('./demo-size-steps/demo-size-steps.component.html');

  ngOnInit() {
  }

}
