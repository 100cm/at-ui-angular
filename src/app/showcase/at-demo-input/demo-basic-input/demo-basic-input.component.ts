import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-basic-input',
  templateUrl: './demo-basic-input.component.html',
  styleUrls: ['./demo-basic-input.component.css']
})
export class DemoBasicInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = '测试'

}
