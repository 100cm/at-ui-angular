import { Component, OnInit } from '@angular/core';

@Component({
             selector: 'app-demo-basic-slider',
             templateUrl: './demo-basic-slider.component.html',
             styleUrls: ['./demo-basic-slider.component.css']
           })
export class DemoBasicSliderComponent implements OnInit {

  value = [0, 80];

  single_value = 50;

  single_value2 = 50;

  single_value3 = 50;

  marks = {10: '10分10分10分', 20: '20分', 40: '我是40点'};

  constructor() {
  }

  ngOnInit() {
  }

}
