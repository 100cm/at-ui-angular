import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-basic-progress',
  template: `
    <at-progress [width]="width"></at-progress>
    <button at-button (click)="add()">+</button>
    <button at-button (click)="minus()">-</button>`,
  styleUrls: ['./demo-basic-progress.component.css']
})
export class DemoBasicProgressComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  width = 0

  add() {
    this.width += 10
  }

  minus() {
    this.width -= 10
  }
}
