import {Injectable}                  from '@angular/core';
import {AtTreeNode}                  from "./at-tree-node";
import {AtTreeNodeComponent}         from "./at-tree-node/at-tree-node.component";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class AtTreeService {


  private _atCheckable = new BehaviorSubject<any>(true)

  private _nodeCheckChange = new BehaviorSubject<any>(null)

  private _treeExpandStatusChange = new BehaviorSubject<any>(null)


  get nodeCheckChange() {
    return this._nodeCheckChange.asObservable();
  }

  set nodeCheckChange(value: any) {
    this._nodeCheckChange.next(value);
  }


  get atCheckable() {
    return this._atCheckable.asObservable();
  }

  set atCheckable(value) {
    this._atCheckable.next(value)
  }


  get treeExpandStatusChange() {
    return this._treeExpandStatusChange.asObservable();
  }

  set treeExpandStatusChange(value: any) {
    this._treeExpandStatusChange.next(value)
  }

  constructor() {
  }


  rootNodes = []

  initTreeNodes(root: AtTreeNode[], defaultCheckedKeys: string[] = []): AtTreeNode[] {
    this.rootNodes = root;
    if (root.length > 0) {
      root.forEach((node) => {
        this.initCheckedStatus(node, defaultCheckedKeys);
      });
    }
    return this.rootNodes;
  }

  initCheckedStatus(childNode: AtTreeNode, defaultCheckedKeys: string[]): void {
    if (defaultCheckedKeys.indexOf(childNode.key) > -1) {
      childNode.isChecked = true;
    }
    if (childNode.getChildren()) {
      childNode.getChildren().forEach((child) => {
        // will change child status
        if (childNode.isChecked && !child.isDisabled) {
          child.isChecked = true;
        }
        this.initCheckedStatus(child, defaultCheckedKeys);
      });
    }
  }

  checkExceptDisableChecked(tree_node) {
    let list       = []
    let check_list = this.checkAllDisableChildren(tree_node, list)
    console.log(check_list)
    let checkAll        = check_list.filter(checked => checked == true).length == check_list.length
    let isIndeterminate = 0 < check_list.filter(checked => checked == true).length && check_list.filter(checked => checked == true).length < check_list.length
    return {checked: checkAll, indeterminate: isIndeterminate}
  }


  checkAllChildren(tree_node, check_list) {
    tree_node.tree_list.forEach(tree => {
      this.checkAllChildren(tree, check_list)
    })

    tree_node.tree_node_list.forEach(node => {
      check_list.push(node._checked)
    })
    return check_list
  }

  checkAllDisableChildren(tree_node, check_list) {
    tree_node.tree_list.forEach(tree => {
      this.checkAllDisableChildren(tree, check_list)
    })

    tree_node.tree_node_list.filter((tree_node: AtTreeNodeComponent) => !tree_node.atDisabled)
      .forEach(node => {
        check_list.push(node._checked)
      })
    return check_list
  }

  checkTreeNodeIndeterminate(tree_node) {
    let list            = []
    let check_list      = this.checkAllChildren(tree_node, list)
    let checkAll        = check_list.filter(checked => checked == true).length == check_list.length
    let isIndeterminate = 0 < check_list.filter(checked => checked == true).length && check_list.filter(checked => checked == true).length < check_list.length
    return {checked: checkAll, indeterminate: isIndeterminate}
  }


  getTopTree(tree) {
    if (tree.at_tree) {
      return this.getTopTree(tree.at_tree)
    }
    else {
      return tree
    }
  }


}
