import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-form',
  templateUrl: './at-demo-form.component.html',
  styleUrls: ['./at-demo-form.component.css']
})
export class AtDemoFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  basic = require('!!raw-loader!./demo-form-basic/demo-form-basic.component');

  position = require('!!raw-loader!./demo-position-form/demo-position-form.component');

}
