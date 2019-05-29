import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-pagenation',
  templateUrl: './at-demo-pagenation.component.html',
  styleUrls: ['./at-demo-pagenation.component.css']
})
export class AtDemoPagenationComponent implements OnInit {

  constructor() {
  }

  basic = require('!!raw-loader!./demo-basic-page/demo-basic-page.component.html');

  full = require('!!raw-loader!./demo-full-page/demo-full-page.component.html');

  simple = require('!!raw-loader!./demo-simple-page/demo-simple-page.component.html');

  size = require('!!raw-loader!./demo-size-page/demo-size-page.component.html');

  ngOnInit() {
  }

}
