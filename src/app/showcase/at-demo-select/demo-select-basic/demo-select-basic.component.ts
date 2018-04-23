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

  single = 13

  change(va) {
    console.log(va)
  }

  selects = [1,2,3,4,5,6]

}
