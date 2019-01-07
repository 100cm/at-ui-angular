import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-badge',
  templateUrl: './at-demo-badge.component.html',
  styleUrls: ['./at-demo-badge.component.css']
})
export class AtDemoBadgeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  basic = require('!!raw-loader!./demo-basic-badge/demo-basic-badge.component.html');
  combine = require('!!raw-loader!./demo-combine-badge/demo-combine-badge.component.html');
  dynamic = require('!!raw-loader!./demo-dynamic-badge/demo-dynamic-badge.component.html');

}
