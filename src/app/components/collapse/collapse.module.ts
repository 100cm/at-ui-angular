import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtCollapseComponent} from './at-collapse.component';
import { AtCollapseItemComponent } from './at-collapse-item/at-collapse-item.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AtCollapseComponent,AtCollapseItemComponent],
  declarations: [AtCollapseComponent, AtCollapseItemComponent]
})
export class AtCollapseModule {
}
