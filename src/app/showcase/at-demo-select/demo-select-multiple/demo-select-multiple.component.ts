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
  }

  selected = ['first','second']

  items = ['a','first','second','third']
}
