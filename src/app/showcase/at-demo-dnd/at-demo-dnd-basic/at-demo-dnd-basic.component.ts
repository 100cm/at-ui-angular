import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-at-demo-dnd-basic',
             templateUrl: './at-demo-dnd-basic.component.html',
             styleUrls: ['./at-demo-dnd-basic.component.css']
           })
export class AtDemoDndBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  bindData = {
    key: 1,
    children: [
      {
        key: 2, data: 2, children: [
          {key: 3}, {key: 4}
        ]
      },
      {key: 4, children: []},
      {key: 5, children: []},
      {key: 6, children: []},
      {key: 7, children: []},

      {key: 8, children: []},
      {key: 9, children: []},
      {key: 10, children: []},
      {key: 11, children: []},
      {key: 12, children: []},
      {key: 13, children: []},
    ]
  }

  get jsonDATA() {
    return JSON.stringify(this.bindData, null,2)
  }

}
