import {NgModule}                        from '@angular/core';
import {CommonModule}                    from '@angular/common';
import {AtTreeSelectComponent}           from './at-tree-select/at-tree-select.component';
import {OverlayModule}                   from '@angular/cdk/overlay';
import {AtTreeModule}                    from '../tree/at-tree.module';
import {AtSelectModule}                  from '../select/at-select.module';
import {AtTreeSelectTopControlComponent} from './at-tree-select-top-control/at-tree-select-top-control.component';
import {FormsModule}                     from '@angular/forms';
import {AtSelectControlService}          from '../select/at-select-control.service';
import {AtTreeService}                   from '../tree/at-tree.service';

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
