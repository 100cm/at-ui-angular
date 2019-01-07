import { OverlayModule }                   from '@angular/cdk/overlay';
import { CommonModule }                    from '@angular/common';
import { NgModule }                        from '@angular/core';
import { FormsModule }                     from '@angular/forms';
import { AtSelectControlService }          from '../select/at-select-control.service';
import { AtSelectModule }                  from '../select/at-select.module';
import { AtTreeModule }                    from '../tree/at-tree.module';
import { AtTreeService }                   from '../tree/at-tree.service';
import { AtTreeSelectTopControlComponent } from './at-tree-select-top-control/at-tree-select-top-control.component';
import { AtTreeSelectComponent }           from './at-tree-select/at-tree-select.component';

@NgModule({
  imports: [
    CommonModule,
    AtSelectModule,
    FormsModule,
    AtTreeModule,
    OverlayModule
  ],
  providers: [AtSelectControlService, AtTreeService],
  declarations: [AtTreeSelectComponent, AtTreeSelectTopControlComponent],
  exports: [AtTreeSelectComponent, AtTreeSelectTopControlComponent]
})
export class AtTreeSelectModule {
}
