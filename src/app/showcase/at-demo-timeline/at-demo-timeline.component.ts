import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-timeline',
  templateUrl: './at-demo-timeline.component.html',
  styleUrls: ['./at-demo-timeline.component.css']
})
export class AtDemoTimelineComponent implements OnInit {

  constructor() { }

  pendingCode = require('!!raw-loader!./at-demo-pending-timeline/at-demo-pending-timeline.component.html');
  basicCode = require('!!raw-loader!./at-demo-timeline-basic/at-demo-timeline-basic.component.html');
  dotCode = require('!!raw-loader!./at-demo-timeline-dot/at-demo-timeline-dot.component.html');

  ngOnInit() {
  }

}
