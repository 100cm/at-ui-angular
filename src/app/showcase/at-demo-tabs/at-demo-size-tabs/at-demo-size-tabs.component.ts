import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-size-tabs',
  templateUrl: './at-demo-size-tabs.component.html',
  styleUrls: ['./at-demo-size-tabs.component.css']
})
export class AtDemoSizeTabsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  tabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

}
