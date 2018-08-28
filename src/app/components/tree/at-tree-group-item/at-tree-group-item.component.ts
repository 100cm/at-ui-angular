import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AtTreeNode}                                     from "../at-tree-node";


@Component({
             selector: 'at-tree-group-item',
             template: `
               <ng-container *ngIf="treeNode.children && treeNode.children.length">
                 <at-tree [(checked)]="treeNode.isChecked"
                          [key]="treeNode?.key"
                          [title]="treeNode?.title">
                   <ng-container *ngFor="let child of treeNode.children;let i = index">
                     <at-tree-group-item [(treeNode)]="treeNode.children[i]"></at-tree-group-item>
                   </ng-container>
                 </at-tree>
               </ng-container>

               <ng-container *ngIf="!treeNode.children ||  !treeNode.children.length">
                 <at-tree-node [key]="treeNode.key"
                               [atDisabled]="treeNode.isDisabled"
                               [(checked)]="treeNode.isChecked">{{treeNode.title}}
                 </at-tree-node>
               </ng-container>

             `,

           })
export class AtTreeGroupItemComponent implements OnInit {

  constructor() {
  }

  private _treeNode: AtTreeNode = new AtTreeNode({})

  @Output() treeNodeChange = new EventEmitter()

  get treeNode(): AtTreeNode {
    return this._treeNode;
  }

  @Input()
  set treeNode(value: AtTreeNode) {
    this._treeNode = value;
    this.treeNodeChange.emit(this._treeNode)
  }

  ngOnInit() {
  }


}
