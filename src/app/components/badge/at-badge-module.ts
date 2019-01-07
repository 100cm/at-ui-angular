import { CommonModule }   from '@angular/common';
import { NgModule }       from '@angular/core';
import { BadgeComponent } from './badge.component';

@NgModule({
            imports: [CommonModule],
            declarations: [BadgeComponent],
            exports: [BadgeComponent]
          })
export class AtBadgeModule {
}
