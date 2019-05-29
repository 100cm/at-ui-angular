import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-collapse',
  templateUrl: './at-demo-collapse.component.html',
  styleUrls: ['./at-demo-collapse.component.css']
})
export class AtDemoCollapseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  basic_code = require('!!raw-loader!./demo-basic-collapse/demo-basic-collapse.component.html');

  accord_code = require('!!raw-loader!./demo-according-collapse/demo-according-collapse.component.html');

  simple_code = require('!!raw-loader!./demo-simple-collapse/demo-simple-collapse.component.html');

  nest_code = require('!!raw-loader!./demo-nested-collapse/demo-nested-collapse.component.html');
}
