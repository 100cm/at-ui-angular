import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-breadcrumb',
  templateUrl: './at-demo-breadcrumb.component.html',
  styleUrls: ['./at-demo-breadcrumb.component.css']
})
export class AtDemoBreadcrumbComponent implements OnInit {

  constructor() {
  }

  basic = require('!!raw-loader!./demo-basic-breadcrumb/demo-basic-breadcrumb.component.html');

  sep = require('!!raw-loader!./demo-separate-breadcrumb/demo-separate-breadcrumb.component.html');

  ngOnInit() {
  }

}
