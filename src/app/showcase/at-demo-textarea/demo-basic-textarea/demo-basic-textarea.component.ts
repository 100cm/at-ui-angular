import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-basic-textarea',
  templateUrl: './demo-basic-textarea.component.html',
  styleUrls: ['./demo-basic-textarea.component.css']
})
export class DemoBasicTextareaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  text = '你好';

}
