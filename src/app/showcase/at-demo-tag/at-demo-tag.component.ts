import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-tag',
  templateUrl: './at-demo-tag.component.html',
  styleUrls: ['./at-demo-tag.component.css']
})
export class AtDemoTagComponent implements OnInit {

  basicTag = require('!!raw-loader!./demo-basic-tag/demo-basic-tag.component');
  colorTag = require('!!raw-loader!./demo-color-tag/demo-color-tag.component')

  constructor() {
  }

  ngOnInit() {
  }

}
