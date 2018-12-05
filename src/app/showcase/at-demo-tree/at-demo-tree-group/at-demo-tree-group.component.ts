import {Component, OnInit, ViewChild} from '@angular/core';
import {AtTreeOption}                 from "../../../components/tree/at-tree";
import {AtTreeRootComponent}          from "../../../components/tree/at-tree-root/at-tree-root.component";
import {AtTreeNode}                   from "../../../components/tree/at-tree-node";

@Component({
             selector: 'app-at-demo-tree-group',
             template: `
               <at-tree-root
                 [atCheckable]="true"
                 [atShowLine]="true"
                 [atIconMode]="'plus'"
                 (atExpandChange)="changeExpand($event)"
                 (atNodeCheckChange)="changeCheck($event)">
                 <at-tree-group [(ngModel)]="group">
                 </at-tree-group>
               </at-tree-root>
               <hr>
               <p>选择的所有节点 key</p>
               <pre>{{select_nodes}}</pre>

               <p>叶子节点</p>
               <pre>{{select_leaf_nodes}}</pre>
               <p>跟节点</p>
               <pre>{{select_tree_nodes}}</pre>
               <button at-button [atType]="'primary'" (click)="getCheckedKeys()">获取选择的key</button>
             `,
             styleUrls: ['./at-demo-tree-group.component.css']
           })
export class AtDemoTreeGroupComponent implements OnInit {

  constructor() {
  }

  @ViewChild(AtTreeRootComponent) at_tree_root: AtTreeRootComponent

  select_nodes = []

  select_leaf_nodes = []

  select_tree_nodes = []

  getCheckedKeys() {
    this.select_nodes      = this.at_tree_root.getCheckedKeys()
    this.select_leaf_nodes = this.at_tree_root.getCheckedLeafKeys()
    this.select_tree_nodes = this.at_tree_root.getCheckedTreeKeys()
  }

  ngOnInit() {
  }

  changeExpand(e) {

  }

  changeCheck(e) {

  }

  group: AtTreeNode[] =
    [new AtTreeNode({
                      title: '根结点',
                      key: 1,
                      remote: true,
                      children: [
                        {
                          title: '子节点1',
                          checked: true,
                          key: 2,
                          disabled: true,
                          children: []
                        },
                        {
                          title: '子节点2',
                          checked: false,
                          key: 3
                        },
                        {
                          title: '子节点3',
                          checked: false,
                          key: 4,
                          children: [
                            {
                              title: '子节点5',
                              checked: false,
                              key: 5
                            },
                            {
                              title: '子节点6',
                              checked: false,
                              key: 6
                            },
                          ]
                        }

                      ],
                    })]


}
