import { Component, OnInit } from '@angular/core';
import { AtFormatEmitEvent } from '../../../components/tree';

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
    <button at-button (click)="setShow()"> 显示/隐藏</button>
    <at-modal [(show)]="modal" (onCancel)="cancel()">
      <div header>
        我来组成头部
      </div>
      <div body>
        <at-tree-select
          [(ngModel)]="model2"
          [atNodes]="nodes"
        ></at-tree-select>
      </div>
    </at-modal>
    <label>checkbox 的多选</label>
    <hr>
    <label>普通多选</label>
    <at-tree-select
      [(ngModel)]="model3"
      [atAllowClear]="true"
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

  model = '';
  model2 = '1003';
  model3 = [];

  ngOnInit(): void {
    setTimeout(_ => {
      this.model3 = ['1003'];
    }, 2000);
  }

  setModal() {
    this.model = '1002';
  }

  modal = false;

  selected = ['first'];

  single: any = 3;

  cancel() {
    // setTimeout(_ => {
    this.modal = false;

  }

  setShow() {
    this.modal = true;
  }
}
