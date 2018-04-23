import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-select-multiple',
  templateUrl: './demo-select-multiple.component.html',
  styleUrls: ['./demo-select-multiple.component.css']
})
export class DemoSelectMultipleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    setTimeout(_ => {
      this.selected = ['first', 'second']
    },300)

    setTimeout(_ => {
      this.selected2 = ['first', 'second']
    },300)
  }
  selected = ['']

  selected2 = ['second']

  items = ['a', 'first', 'second', 'third']
}
