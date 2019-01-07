import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-textarea',
  templateUrl: './at-demo-textarea.component.html',
  styleUrls: ['./at-demo-textarea.component.css']
})
export class AtDemoTextareaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  text = require('!!raw-loader!./demo-basic-textarea/demo-basic-textarea.component.html');

}
