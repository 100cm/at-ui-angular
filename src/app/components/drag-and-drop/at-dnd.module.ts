import { OverlayModule }          from '@angular/cdk/overlay';
import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { AtDragItemDirective }  from './at-drag-item.directive';
import { DndContainerComponent }  from './dnd-container/dnd-container.component';
import { DndItemComponent }       from './dnd-item/dnd-item.component';
import { DndMoveItemComponent } from './dnd-move-item/dnd-move-item.component';
import { DragTriggerDirective }   from './drag-trigger.directive';

@NgModule({
            imports: [CommonModule, OverlayModule, FormsModule],
            declarations: [DndContainerComponent, DndItemComponent, DragTriggerDirective, DndMoveItemComponent, AtDragItemDirective],
            exports: [DndContainerComponent, DndItemComponent, DragTriggerDirective, DndMoveItemComponent, AtDragItemDirective]
          })
export class AtDndModule {
}
