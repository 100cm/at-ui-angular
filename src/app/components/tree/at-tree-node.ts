import {AtTreeOption} from "./at-tree";

export class AtTreeNode {
  title?: string;
  key?: string;
  level: number = 0;
  children: AtTreeNode[];
  origin: any;
  parentNode: AtTreeNode;
  isChecked: boolean;
  isDisabled: boolean;

  constructor(option: AtTreeOption, parent: AtTreeNode = null) {
    this.title      = option.title || '---';
    this.key        = option.key || null;
    this.origin     = option;
    this.children   = [];
    this.isDisabled = option.disabled
    this.parentNode = parent;
    if (parent) {
      this.level = parent.level + 1;
    }
    else {
      this.level = 0;
    }
    if (typeof(option.children) !== 'undefined' && option.children !== null) {
      option.children.forEach(
        (nodeOptions) => {
          if (option.checked && !option.disabled && !nodeOptions.disabled) {
            nodeOptions.checked = option.checked;
          }
          this.children.push(new AtTreeNode(nodeOptions, this));
        }
      );
    }
  }

  public getChildren(): AtTreeNode[] {
    return this.children;
  }

}
