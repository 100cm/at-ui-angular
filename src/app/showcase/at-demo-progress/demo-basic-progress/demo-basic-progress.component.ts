import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-basic-progress',
  template: `
    <atProgress [width]="width"></atProgress>
    <button atButton (click)="add()">+</button>
    <button atButton (click)="minus()">-</button>`,
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
