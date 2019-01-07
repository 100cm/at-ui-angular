import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-timeline',
  templateUrl: './at-demo-timeline.component.html',
  styleUrls: ['./at-demo-timeline.component.css']
})
export class AtDemoTimelineComponent implements OnInit {

  constructor() { }

  pendingCode = require('./at-demo-pending-timeline/at-demo-pending-timeline.component.html');
  basicCode = require('./at-demo-timeline-basic/at-demo-timeline-basic.component.html');
  dotCode = require('./at-demo-timeline-dot/at-demo-timeline-dot.component.html');

  ngOnInit() {
  }

}
