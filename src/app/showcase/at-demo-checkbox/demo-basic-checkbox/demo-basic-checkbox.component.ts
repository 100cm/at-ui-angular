import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-basic-checkbox',
  templateUrl: `./demo-basic-checkbox.component.html`,
  styleUrls: ['./demo-basic-checkbox.component.css']
})
export class DemoBasicCheckboxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  checked = true;
}
