import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-at-demo-drawer',
             templateUrl: './at-demo-drawer.component.html',
             styleUrls: ['./at-demo-drawer.component.css']
           })
export class AtDemoDrawerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  visible = false

  close() {
    this.visible = false
  }

}
