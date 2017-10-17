import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'atSlider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  mouseDown() {
    console.log('mouseDown')
  }

  mouseUp() {
    console.log('mouseUp')
  }

}
