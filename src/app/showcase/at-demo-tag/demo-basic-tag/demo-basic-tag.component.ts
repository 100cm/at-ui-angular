import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-basic-tag',
  template:
  '<atTag >标签1</atTag>' +
  '<atTag >标签2</atTag>' +
  '<atTag >标签3</atTag>' +
  '<atTag [closeable]="true">标签4</atTag>',
  styleUrls: ['./demo-basic-tag.component.css']
})
export class DemoBasicTagComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
