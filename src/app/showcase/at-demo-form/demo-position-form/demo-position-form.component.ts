import { Component, OnInit } from '@angular/core';

@Component({
             selector: 'app-demo-position-form',
             templateUrl: './demo-position-form.component.html',
             styleUrls: ['./demo-position-form.component.css']
           })
export class DemoPositionFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  position = 'horizontal';

}
