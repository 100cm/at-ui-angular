import {OverlayModule}         from '@angular/cdk/overlay';
import {CommonModule}          from '@angular/common';
import {NgModule}              from '@angular/core';
import {DndContainerComponent} from './dnd-container/dnd-container.component';
import {DndItemComponent}      from './dnd-item/dnd-item.component';
import {DragTriggerDirective}  from './drag-trigger.directive';
import { DndMoveItemComponent } from './dnd-move-item/dnd-move-item.component';
import { AtDragItemDirective } from './at-drag-item.directive';


@NgModule({
            imports: [CommonModule, OverlayModule],
            declarations: [DndContainerComponent, DndItemComponent, DragTriggerDirective, DndMoveItemComponent, AtDragItemDirective],
            exports: [DndContainerComponent, DndItemComponent, DragTriggerDirective,DndMoveItemComponent,AtDragItemDirective]
          })
export class AtDndModule {
}
