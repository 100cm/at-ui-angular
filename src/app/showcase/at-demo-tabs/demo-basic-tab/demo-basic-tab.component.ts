import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-basic-tab',
  templateUrl: './demo-basic-tab.component.html',
  styleUrls: ['./demo-basic-tab.component.css']
})
export class DemoBasicTabComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  project = {};

  index = 0;
  a = 1;

  tabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  changeA(): void {
    this.a === 1 ? this.a = 4 : this.a = 1;
    this.index === 1 ? this.index = 0 : this.index = 1;
  }
}
