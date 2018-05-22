import {AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TimelineItemComponent} from "./timeline-item/timeline-item.component";

@Component({
  selector: 'at-timeline',
  template: `
    <div class="at-timeline" [ngClass]="{'at-timeline--pending':pending}">
      <ng-content select="at-timeline-item"></ng-content>
    </div>
  `,
})
export class TimelineComponent implements OnInit {


  timeline_items: Array<TimelineItemComponent> = []

  constructor() {
  }

  ngOnInit() {
  }

  pushTimeline(item: TimelineItemComponent) {
    this.timeline_items.push(item)
    let last = this.timeline_items.length - 1
    let pending = false
    setTimeout(_ => {
      this.timeline_items.forEach((item, i) => {
        this.timeline_items[i].isLast = item.pending
      })
      let includes_pending = this.timeline_items.filter(item => item.pending == true).length > 0
      this.pending = includes_pending
      this.timeline_items[last].isLast = !includes_pending

    })

  }

  pending = false

  ngAfterViewInit() {

  }
}
