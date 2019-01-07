import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
import { AtIconModule }          from '../icon/at-icon.module';
import { AtTreeNodeComponent } from './at-tree-node.component';
import { AtTreeComponent }     from './at-tree.component';

@NgModule({
  imports     : [
    CommonModule,
    AtIconModule
  ],
  declarations: [
    AtTreeComponent,
    AtTreeNodeComponent
  ],
  exports     : [
    AtTreeComponent,
    AtTreeNodeComponent
  ]
})

export class AtTreeModule {

}
