import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-dropdown',
  templateUrl: './at-demo-dropdown.component.html',
  styleUrls: ['./at-demo-dropdown.component.css']
})
export class AtDemoDropdownComponent implements OnInit {

  constructor() { }

  basic = require('!!raw-loader!./basic-demo-dropdown/basic-demo-dropdown.component.html')
  place = require('!!raw-loader!./demo-place-dropdown/demo-place-dropdown.component.html')

  ngOnInit() {
  }

}
