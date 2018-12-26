import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
import { AtTreeNodeComponent } from './at-tree-node.component';
import { AtTreeComponent }     from './at-tree.component';
import {AtIconModule}          from '../icon';

@NgModule({
  imports     : [
    CommonModule,
    AtIconModule,
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
