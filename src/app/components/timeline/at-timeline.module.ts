import { CommonModule }              from '@angular/common';
import { NgModule }                  from '@angular/core';
import { FormsModule }               from '@angular/forms';
import { TimelineDotDirective }      from './timeline-dot.directive';
import { TimelineItemComponent }     from './timeline-item/timeline-item.component';
import { TimelineSelectorDirective } from './timeline-selector.directive';
import { TimelineComponent }         from './timeline.component';

@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [TimelineComponent, TimelineDotDirective, TimelineItemComponent, TimelineSelectorDirective],
            exports: [TimelineComponent, TimelineDotDirective, TimelineItemComponent, TimelineSelectorDirective]
          })
export class AtTimelineModule {
}
