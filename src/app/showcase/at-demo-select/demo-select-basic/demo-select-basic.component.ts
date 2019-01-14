import { Component, OnInit } from '@angular/core';

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

  modal = false;

  selected = ['first'];

  single: any = 3;

  cancel() {
    // setTimeout(_ => {
      this.single = undefined;
    // }, 1000);
    this.modal = false;
  }

  change(va) {
    console.log(va);
  }

  setShow(value) {
    this.modal = true;
  }

  selects = [1, 2, 3, 4, 5, 6];

  setOntherOption() {
    this.single = '';
  }
}
