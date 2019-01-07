import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-timeline-basic',
  templateUrl: './at-demo-timeline-basic.component.html',
  styleUrls: ['./at-demo-timeline-basic.component.css']
})
export class AtDemoTimelineBasicComponent implements OnInit {

  constructor() {
  }

  timeline = [];

  ngOnInit() {
    setTimeout(_ => {
      this.timeline = [1, 2, 3, 45];
    }, 2000);
  }

}
