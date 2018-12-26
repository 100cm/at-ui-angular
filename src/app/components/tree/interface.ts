import { AtTreeNode } from './at-tree-node';

export interface AtFormatEmitEvent {
  eventName: string;
  node: AtTreeNode;
  event: MouseEvent | DragEvent;
  dragNode?: AtTreeNode;
  selectedKeys?: AtTreeNode[];
  checkedKeys?: AtTreeNode[];
  matchedKeys?: AtTreeNode[];
  nodes?: AtTreeNode[];
  keys?: string[];
}

export interface AtFormatBeforeDropEvent {
  dragNode: AtTreeNode;
  node: AtTreeNode;
  pos: number;
}
