import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-at-demo-remote-tree',
             templateUrl: './at-demo-remote-tree.component.html',
             styleUrls: ['./at-demo-remote-tree.component.css']
           })
export class AtDemoRemoteTreeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    setTimeout(_ => {
      this.tree = [{
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
      }, {
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
      }]
    }, 3000)
  }

  tree = []


}
