import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-custom-tree',
  templateUrl: './at-demo-custom-tree.component.html',
  styleUrls: ['./at-demo-custom-tree.component.css']
})
export class AtDemoCustomTreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nodes = [
    {
      title   : 'parent 1',
      key     : '100',
      expanded: true,
      icon    : 'bar-chart',
      children: [
        { title: 'leaf', key: '1001', icon: 'alert-triangle', isLeaf: true },
        { title: 'leaf', key: '1002', icon: 'bar-chart', isLeaf: true }
      ]
    }
  ];

}
