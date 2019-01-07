import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-select-clear',
  templateUrl: './demo-select-clear.component.html',
  styleUrls: ['./demo-select-clear.component.css']
})
export class DemoSelectClearComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  single = 'first';

  multiple = ['first'];

}
