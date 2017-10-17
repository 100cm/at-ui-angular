import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-components',
  templateUrl: './at-demo-components.component.html',
  styleUrls: ['./at-demo-components.component.css']
})
export class AtDemoComponentsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  active(href) {
    let location = window.location.hash
    location = location.replace("#", '')
    let bol = location.indexOf(href) != -1
    return bol
  }

}
