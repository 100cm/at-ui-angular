import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-at-demo-basic-carousel',
             templateUrl: './at-demo-basic-carousel.component.html',
             styles: [`[at-carousel-content] {
               text-align: center;
               height: 160px;
               line-height: 160px;
               background: #364d79;
               color: #fff;
               overflow: hidden;
             }

             h3 {
               color: #fff;
             }
             `]
           })
export class AtDemoBasicCarouselComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  array  = [1, 2, 3, 4];
  effect = 'scrollx';

}
