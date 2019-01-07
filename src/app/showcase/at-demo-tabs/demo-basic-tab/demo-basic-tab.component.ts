import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-basic-tab',
  templateUrl: './demo-basic-tab.component.html',
  styleUrls: ['./demo-basic-tab.component.css']
})
export class DemoBasicTabComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  project = {};

  index = 0;
  a = 1;

  changeA() {
    this.a == 1 ? this.a = 4 : this.a = 1;
    this.index == 1 ? this.index = 0 : this.index = 1;
  }
}
