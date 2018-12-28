import {Component, OnInit} from '@angular/core';
import {AtFormatEmitEvent} from '../../../components/tree';

@Component({
  selector: 'app-demo-tree-select-basic',
  template: `
    <label>普通单选</label>
    <at-tree-select
      [(ngModel)]="model"
      [atNodes]="nodes"
    ></at-tree-select>
    <hr>
    <button (click)="setModal()">更换值</button>
    {{model}}
    <hr>
    <label>checkbox 的多选</label>
    <at-tree-select
      [(ngModel)]="model2"
      [atShowSearch]="true"
      [atMultiple]="true"
      [atCheckable]="true"
      [atNodes]="nodes"
    ></at-tree-select>
    <hr>

    <label>普通多选</label>
    <at-tree-select
      [(ngModel)]="model3"
      [atShowSearch]="true"
      [atMultiple]="true"
      [atNodes]="nodes"
    ></at-tree-select>



  `,
  styleUrls: ['./demo-tree-select.component.css']
})
export class DemoTreeSelectComponent implements OnInit {

  nodes = [{
    title: 'parent 1',
    key: '100',
    expanded: true,
    children: [{
      title: 'parent 1-0',
      key: '1001',
      expanded: true,
      children: [
        {title: 'leaf', key: '10010', isLeaf: true},
        {title: 'leaf', key: '10011', isLeaf: true},
        {title: 'leaf', key: '10012', isLeaf: true}
      ]
    }, {
      title: 'parent 1-1',
      key: '1002',
      children: [
        {title: 'leaf', key: '10020', isLeaf: true}
      ]
    }, {
      title: 'parent 1-2',
      key: '1003',
      children: [
        {title: 'leaf', key: '10030', isLeaf: true},
        {title: 'leaf', key: '10031', isLeaf: true}
      ]
    }]
  }];

  atEvent(event: AtFormatEmitEvent): void {
    console.log(event);
  }

  model = '1003'
  model2 = ['1003']
  model3 = ['1003']

  ngOnInit(): void {
  }

  setModal(){
    this.model = "1002"
  }
}
