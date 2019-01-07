import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-pagenation',
  templateUrl: './at-demo-pagenation.component.html',
  styleUrls: ['./at-demo-pagenation.component.css']
})
export class AtDemoPagenationComponent implements OnInit {

  constructor() {
  }

  basic = require('./demo-basic-page/demo-basic-page.component.html');

  full = require('./demo-full-page/demo-full-page.component.html');

  simple = require('./demo-simple-page/demo-simple-page.component.html');

  size = require('./demo-size-page/demo-size-page.component.html');

  ngOnInit() {
  }

}
