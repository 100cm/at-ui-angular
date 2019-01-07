import { Component, OnInit } from '@angular/core';

@Component({
             selector: 'at-layout-body',
             template: `
               <ng-content>
               </ng-content>`,
             host: {
               '[class.at-layout-body]': 'true',
               '[class.at-layout-body-has-side]': 'hasSideBar'
             }
           })
export class AtLayoutBodyComponent implements OnInit {

  hasSideBar = false;

  constructor() {
  }

  ngOnInit() {
  }

}
