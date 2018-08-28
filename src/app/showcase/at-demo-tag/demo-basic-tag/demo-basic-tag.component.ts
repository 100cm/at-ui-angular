import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-basic-tag',
  template:
  '<at-tag >标签1</at-tag>' +
  '<at-tag >标签2</at-tag>' +
  '<at-tag >标签3</at-tag>' +
  '<at-tag [closeable]="true">标签4</at-tag>',
  styleUrls: ['./demo-basic-tag.component.css']
})
export class DemoBasicTagComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
