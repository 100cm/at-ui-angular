import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-tooltip',
  templateUrl: './at-demo-tooltip.component.html',
  styleUrls: ['./at-demo-tooltip.component.css']
})
export class AtDemoTooltipComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  basic_code = require('!!raw-loader!./demo-basic-tooltip/demo-basic-tooltip.component.html');
  place_code = require('!!raw-loader!./demo-position-tooltip/demo-position-tooltip.component.html');
}
