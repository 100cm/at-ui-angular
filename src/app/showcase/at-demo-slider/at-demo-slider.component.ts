import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-slider',
  templateUrl: './at-demo-slider.component.html',
  styleUrls: ['./at-demo-slider.component.css']
})
export class AtDemoSliderComponent implements OnInit {

  constructor() {
  }

  slider_basic = require('./demo-basic-slider/demo-basic-slider.component.html');

  ngOnInit() {
  }

}
