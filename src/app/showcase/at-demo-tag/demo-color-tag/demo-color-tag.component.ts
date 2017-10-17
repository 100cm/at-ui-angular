import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-color-tag',
  template: '<atTag *ngFor="let item of colors" [color]="item">{{item}}</atTag>',
  styleUrls: ['./demo-color-tag.component.css']
})
export class DemoColorTagComponent implements OnInit {

  colors = ['default', 'primary', 'success', 'error', 'warning', 'info', '#ecefce']

  constructor() {
  }

  ngOnInit() {
  }

}
