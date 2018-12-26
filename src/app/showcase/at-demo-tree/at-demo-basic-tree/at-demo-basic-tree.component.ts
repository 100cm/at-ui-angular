import { Component, OnInit } from '@angular/core';
import {AtFormatEmitEvent}   from '../../../components/tree';

@Component({
  selector: 'app-at-demo-basic-tree',
  templateUrl: './at-demo-basic-tree.component.html',
  styleUrls: ['./at-demo-basic-tree.component.css']
})
export class AtDemoBasicTreeComponent implements OnInit {
  ngOnInit(): void {
  }

  nodes = [ {
    title   : 'parent 1',
    key     : '100',
    expanded: true,
    children: [ {
      title   : 'parent 1-0',
      key     : '1001',
      expanded: true,
      children: [
        { title: 'leaf', key: '10010', isLeaf: true },
        { title: 'leaf', key: '10011', isLeaf: true },
        { title: 'leaf', key: '10012', isLeaf: true }
      ]
    }, {
      title   : 'parent 1-1',
      key     : '1002',
      children: [
        { title: 'leaf', key: '10020', isLeaf: true }
      ]
    }, {
      title   : 'parent 1-2',
      key     : '1003',
      children: [
        { title: 'leaf', key: '10030', isLeaf: true },
        { title: 'leaf', key: '10031', isLeaf: true }
      ]
    } ]
  } ];

  atEvent(event: AtFormatEmitEvent): void {
    console.log(event);
  }

  model = '1003'
  model2 = ['1003']

  model3 = ["1003"]

}
