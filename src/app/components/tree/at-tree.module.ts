import {CommonModule}             from '@angular/common';
import {NgModule}                 from '@angular/core';
import {FormsModule}              from '@angular/forms';
import {AtTreeComponent}          from "./at-tree.component";
import {AtTreeNodeComponent}      from "./at-tree-node/at-tree-node.component";
import {AtTreeRootComponent}      from './at-tree-root/at-tree-root.component';
import {AtTreeGroupComponent}     from './at-tree-group/at-tree-group.component';
import {AtTreeGroupItemComponent} from './at-tree-group-item/at-tree-group-item.component';


@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [AtTreeComponent, AtTreeNodeComponent, AtTreeRootComponent, AtTreeGroupComponent, AtTreeGroupItemComponent],
            exports: [AtTreeComponent, AtTreeNodeComponent, AtTreeRootComponent, AtTreeGroupComponent, AtTreeGroupItemComponent]
          })
export class AtTreeModule {
}
