import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-basic-demo-dropdown',
             templateUrl: './basic-demo-dropdown.component.html',
             styleUrls: ['./basic-demo-dropdown.component.css']
           })
export class BasicDemoDropdownComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    for (let i = 0; i < 100; i++) {
      this.arrays.push(1)
    }
  }

  arrays = []

}
