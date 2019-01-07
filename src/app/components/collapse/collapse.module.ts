import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtCollapseItemComponent } from './at-collapse-item/at-collapse-item.component';
import { AtCollapseComponent } from './at-collapse.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AtCollapseComponent, AtCollapseItemComponent],
  declarations: [AtCollapseComponent, AtCollapseItemComponent]
})
export class AtCollapseModule {
}
