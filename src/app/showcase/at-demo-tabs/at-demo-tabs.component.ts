import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-tabs',
  templateUrl: './at-demo-tabs.component.html',
  styleUrls: ['./at-demo-tabs.component.css']
})
export class AtDemoTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  baisc = require('!!raw-loader!./demo-basic-tab/demo-basic-tab.component.html');

}
