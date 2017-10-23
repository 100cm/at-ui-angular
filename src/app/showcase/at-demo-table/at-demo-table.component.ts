import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-table',
  templateUrl: './at-demo-table.component.html',
  styleUrls: ['./at-demo-table.component.css']
})
export class AtDemoTableComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  baisc = require('./demo-basic-table/demo-basic-table.component.html')

  page = require('./demo-page-table/demo-page-table.component.html')

  size = require('./demo-size-table/demo-size-table.component.html')

}
