import {
  Component, ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output, QueryList,
  SimpleChanges,
  ViewChild, ViewChildren
}                            from '@angular/core';
import {NG_VALUE_ACCESSOR}   from "@angular/forms";
import {AtUploadComponent}   from "../../upload/at-upload/at-upload.component";
import {AtTreeComponent}     from "../at-tree.component";
import {AtTreeNodeComponent} from "../at-tree-node/at-tree-node.component";
import {AtTreeNode}          from "../at-tree-node";
import {AtTreeService}       from "../at-tree.service";

@Component({
             selector: 'at-tree-group',
             template: `
               <ng-container *ngFor="let tree_node of tree_nodes;let i = index">
                 <at-tree-group-item [(treeNode)]="tree_nodes[i]">
                 </at-tree-group-item>
               </ng-container>
             `,
             providers: [
               {
                 provide: NG_VALUE_ACCESSOR,
                 useExisting: forwardRef(() => AtTreeGroupComponent),
                 multi: true
               }
             ]
           })
export class AtTreeGroupComponent implements OnInit, OnChanges {

  constructor(private at_tree_service: AtTreeService) {

  }

  tree: AtTreeNode[] = []

  // ngModel Access
  onChange: any  = Function.prototype;
  onTouched: any = Function.prototype;

  writeValue(value: AtTreeNode[]): void {
    if (value) {
      this.tree = value;
      this.at_tree_service.initTreeNodes(this.tree)
    }
  }

  treeIsArray() {
    return this.tree instanceof Array
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  get tree_nodes() {
    return this.at_tree_service.rootNodes
  }

  ngAfterViewInit() {

  }


}
