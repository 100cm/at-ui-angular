import { Component, OnInit } from '@angular/core';
@Component({
             selector: 'app-at-demo-tree',
             templateUrl: './at-demo-tree.component.html',
             styleUrls: ['./at-demo-tree.component.css']
           })
export class AtDemoTreeComponent implements OnInit {

  constructor() {
  }

  basic_tree_code = require('./at-demo-basic-tree/at-demo-basic-tree.component.html');

  checkable_tree_code = require('./at-demo-checkable-tree/at-demo-checkable-tree.component.html');

  custom_tree_code = require('./at-demo-custom-tree/at-demo-custom-tree.component.html');

  remote_tree_code = require('./at-demo-remote-tree/at-demo-remote-tree.component.html');

  group_tree_code = require('!!raw-loader!./at-demo-tree-group/at-demo-tree-group.component.ts');

  ngOnInit() {
  }

}
