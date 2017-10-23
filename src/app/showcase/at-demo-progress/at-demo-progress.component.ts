import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-progress',
  templateUrl: './at-demo-progress.component.html',
  styleUrls: ['./at-demo-progress.component.css']
})
export class AtDemoProgressComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  basic = require('!!raw-loader!./demo-basic-progress/demo-basic-progress.component')
  status = require('!!raw-loader!./demo-status-progress/demo-status-progress.component.html')
  stroke = require('!!raw-loader!./demo-stroke-progress/demo-stroke-progress.component.html')

}
