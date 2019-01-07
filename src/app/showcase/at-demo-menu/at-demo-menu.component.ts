import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-menu',
  templateUrl: './at-demo-menu.component.html',
  styleUrls: ['./at-demo-menu.component.css']
})
export class AtDemoMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  topMenu = require('!!raw-loader!./demo-top-menu/demo-top-menu.component');
  verticalMenu = require('!!raw-loader!./demo-vertical-menu/demo-vertical-menu.component');
  inlineMenu =  require('!!raw-loader!./demo-inline-menu/demo-inline-menu.component');

}
