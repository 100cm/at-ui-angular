import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { TimelineDotDirective } from '../timeline-dot.directive';
import { TimelineComponent } from '../timeline.component';

@Component({
  selector: 'at-timeline-item',
  template: `
    <div class="at-timeline__item  at-timeline__item--default at-timeline__item--{{status}}"
         [ngClass]="{'at-timeline__item--custom':custom,'at-timeline__item--pending':pending,'at-timeline__item--last':isLast}">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <ng-content select="[timeline-dot]"></ng-content>
      </div>
      <div class="at-timeline__content">
        <ng-content select="[timeline-content]"></ng-content>
      </div>
    </div>
  `
})
export class TimelineItemComponent implements OnInit {

  @ContentChild(TimelineDotDirective, /* TODO: add static flag */ {static: true}) timeline_dot;

  constructor(private timeline_component: TimelineComponent) {
    this.timeline_component.pushTimeline(this);
  }

  ngOnInit() {

  }

  isLast = false;

  @Input() pending = false;

  @Input() status: 'error' | 'warning' | 'primary' | 'success' = 'primary';

  get custom() {
    return this.timeline_dot;
  }

}
