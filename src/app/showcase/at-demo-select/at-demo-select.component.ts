import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-select',
  templateUrl: './at-demo-select.component.html',
  styleUrls: ['./at-demo-select.component.css']
})
export class AtDemoSelectComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  basic_s = require('!!raw-loader!./demo-select-basic/demo-select-basic.component.html')
  multiple_s = require('!!raw-loader!./demo-select-multiple/demo-select-multiple.component.html')
  size_s = require('!!raw-loader!./demo-select-size/demo-select-size.component.html')
  tag_s = require('!!raw-loader!./demo-input-select/demo-input-select.component.html')
  search_s  = require('!!raw-loader!./demo-search-select/demo-search-select.component.html')
}
