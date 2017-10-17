import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-input-select',
  templateUrl: './demo-input-select.component.html',
  styleUrls: ['./demo-input-select.component.css']
})
export class DemoInputSelectComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  selected = ['first']

}
