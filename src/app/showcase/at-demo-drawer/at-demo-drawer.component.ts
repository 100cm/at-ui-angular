import { Component, OnInit } from '@angular/core';

@Component({
             selector: 'app-at-demo-drawer',
             templateUrl: './at-demo-drawer.component.html',
             styleUrls: ['./at-demo-drawer.component.css']
           })
export class AtDemoDrawerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  visible = false;

  close() {
    this.visible = false;
  }

  code = `
    <at-drawer [atClosable]="false" [atVisible]="visible" atPlacement="right" atTitle="Basic Drawer"
             (atOnClose)="close()">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </at-drawer>
  <button at-button (click)="visible =true">弹出抽屉</button>
`;

}
