import {Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {AtTreeService}                                                              from "../at-tree.service";
import {AtTreeNodeComponent}                                                        from "../at-tree-node/at-tree-node.component";
import {isNotNil}                                                                   from "../../utils/class-helper";
import {filter}                                                                     from "rxjs/operators";
import {AtTreeComponent}                                                            from "../at-tree.component";

@Component({
             selector: 'at-tree-root',
             template: `
               <div class="at-tree-root">
                 <ng-content></ng-content>
               </div>`,
             providers: [AtTreeService]
           })
export class AtTreeRootComponent implements OnInit {


  trees      = []
  tree_nodes = []

  constructor(private at_tree_service: AtTreeService) {
  }

  ngOnInit() {
    //node check change
    this.at_tree_service.nodeCheckChange.pipe(filter(Boolean)).subscribe(data => {
      this.atNodeCheckChange.emit(data)

    })
    this.at_tree_service.treeExpandStatusChange.pipe(filter(Boolean)).subscribe(data => {
      this.atExpandChange.emit(data)
    })
  }

  @Input() atShowLine                                 = false
  @Input() atMode: 'check' | 'label'                  = 'check'
  @Input() atIconMode: 'arrow' | 'plus' | 'directory' = 'arrow'
  @Output() atNodeCheckChange                         = new EventEmitter<any>()
  @Output() atExpandChange                            = new EventEmitter()


  private _atCheckable = true


  get atCheckable(): any {
    return this._atCheckable;
  }

  pushTree(tree: AtTreeComponent) {
    this.trees.push(tree)
  }

  pushNode(node: AtTreeNodeComponent) {
    this.tree_nodes.push(node)
  }

  @Input()
  set atCheckable(value: any) {
    this.at_tree_service.atCheckable = value
  }

  //get all children checked
  getCheckedLeafKeys() {
    return (this.tree_nodes || []).filter(node => node._checked == true).map(node => node.key)
  }

  getCheckedTreeKeys() {
    return this.trees.filter((tree: AtTreeComponent) => tree.checked && !tree.indeterminate).map(tree => tree.key)
  }

  getCheckedKeys() {
    return this.getCheckedLeafKeys().concat(this.getCheckedTreeKeys())
  }


}


