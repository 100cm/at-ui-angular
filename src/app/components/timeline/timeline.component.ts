import {Component, ContentChild, ContentChildren, OnInit, QueryList} from '@angular/core';
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


  @ContentChildren(TimelineItemComponent) timeline_items: QueryList<TimelineItemComponent>

  constructor() {
  }

  ngOnInit() {
  }

  pending = false

  ngAfterViewInit() {
    let items = this.timeline_items.toArray()
    let last = this.timeline_items.toArray().length - 1
    let pending = this.pending
    items.forEach(item => {
      if (item.pending) {
        pending = true
      }
    })

    setTimeout(_ => {
      this.pending = pending
      if (pending) {
        last = last - 1
        this.timeline_items.toArray()[last + 1].pending = true
      }
      this.timeline_items.toArray()[last].isLast = true
    })
  }

}
