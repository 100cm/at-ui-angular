import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-select-basic',
  templateUrl: './demo-select-basic.component.html',
  styleUrls: ['./demo-select-basic.component.css']
})
export class DemoSelectBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  selected = ['first']

  single = 'first'

}
