import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-color-tag',
  template: '<at-tag *ngFor="let item of colors" [color]="item">{{item}}</at-tag>',
  styleUrls: ['./demo-color-tag.component.css']
})
export class DemoColorTagComponent implements OnInit {

  colors = ['default', 'primary', 'success', 'error', 'warning', 'info', '#ecefce'];

  constructor() {
  }

  ngOnInit() {
  }

}
