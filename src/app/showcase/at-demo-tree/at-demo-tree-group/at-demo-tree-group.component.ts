import { Component, OnInit, ViewChild } from '@angular/core';

import { AtFormatEmitEvent }             from '../../../components/tree';
import { AtTreeNode, AtTreeNodeOptions } from '../../../components/tree/at-tree-node';

@Component({
  selector: 'app-at-demo-tree-group',
  template: `
    <at-tree
      #treeCom
      [atData]="nodes"
      atCheckable="true"
      atMultiple="true"
      [atCheckedKeys]="defaultCheckedKeys"
      [atExpandedKeys]="defaultExpandedKeys"
      [atSelectedKeys]="defaultSelectedKeys"
      (atClick)="atClick($event)"
      (atSelectedKeysChange)="atSelect($event)"
      (atCheckBoxChange)="atCheck($event)">
    </at-tree>

  `,
  styleUrls: ['./at-demo-tree-group.component.css']
})
export class AtDemoTreeGroupComponent implements OnInit {

  @ViewChild('treeCom', { static: true }) treeCom;
  defaultCheckedKeys = ['1001', '1002'];
  defaultSelectedKeys = ['10011'];
  defaultExpandedKeys = ['100', '1001'];

  nodes: AtTreeNodeOptions[] = [{
    title: 'parent 1',
    key: '100',
    children: [{
      title: 'parent 1-0',
      key: '1001',
      disabled: true,
      children: [
        {title: 'leaf 1-0-0', key: '10010', disableCheckbox: true, isLeaf: true},
        {title: 'leaf 1-0-1', key: '10011', isLeaf: true, checked: true}
      ]
    }, {
      title: 'parent 1-1',
      key: '1002',
      children: [
        {title: 'leaf 1-1-0', key: '10020', isLeaf: true}
      ]
    }]
  }];

  atClick(event: AtFormatEmitEvent): void {
    console.log(event, event.selectedKeys, event.keys, event.nodes, this.treeCom.getSelectedNodeList());
  }

  atCheck(event: AtFormatEmitEvent): void {
    console.log(event, event.checkedKeys, event.keys, event.nodes);
  }

  // atSelectedKeys change
  atSelect(keys: string[]): void {
    console.log(keys, this.treeCom.getSelectedNodeList());
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.treeCom.getTreeNodes(), this.treeCom.getCheckedNodeList(), this.treeCom.getSelectedNodeList());
    }, 500);
  }

}
