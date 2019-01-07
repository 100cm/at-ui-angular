import { forwardRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR }                                from '@angular/forms';
import { DndItemComponent }                                 from '../dnd-item/dnd-item.component';

const _ = require('lodash');

export interface AtDndContent {
  key: any;
  children: AtDndContent[];
  data?: any;
  atIndex?: any;
}

@Component({
             selector: 'at-dnd-container',
             template: `
               <ng-content></ng-content>`,
             providers: [{
               provide: NG_VALUE_ACCESSOR,
               useExisting: forwardRef(() => DndContainerComponent),
               multi: true
             }]
           })
export class DndContainerComponent implements OnInit {

  constructor(public el: ElementRef) {
  }

  drag_items: DndItemComponent[] = [];

  ngOnInit() {

  }

  content: any = {};

  dragging_item: DndItemComponent;

  dragging_enter_item: DndItemComponent;

  writeValue(obj: any): void {
    if (obj) {
      this.content = obj;
    }
  }

  onChange: any  = Function.prototype;
  onTouched: any = Function.prototype;

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  insertChildElement(target_content) {
    console.log('insert_content');
    const found          = this.findNested(this.content, this.content, target_content);
    const dragging_found = this.findNested(this.content, this.content, this.dragging_item.content);
    console.log(found);
    console.log(dragging_found);
    // in same level
    if (found[0] == dragging_found[0]) {
      this.array_move(found[0].children, dragging_found[2], found[2]);
    }

    if (found[0] != dragging_found[0]) {
      this.removeIndex(dragging_found[0].children, dragging_found[2]);
      this.array_insert(found[0].children, found[2], dragging_found[1]);
    }
  }

  sortItems() {

  }

  switchIndex(base, target_content) {

  }

  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      let k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  }

  array_insert(array, index, item) {
    array.splice(index, 0, item);
  }

  removeIndex(array, index) {
    array.splice(index, 1);
  }

  findNested(parent, content: AtDndContent, target: AtDndContent, index?) {
    if (_.isEqual(content, target)) {
      return [parent, content, index];
    } else if (content.children) {
      for (let i = 0; i < content.children.length; i++) {
        const found = this.findNested(content, content.children[i], target, i);
        if (found) {
          return found;
        }
      }
    }
  }

}
