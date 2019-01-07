import { Component, OnInit } from '@angular/core';

@Component({
             selector: 'at-layout-header',
             template: `
               <ng-content>
               </ng-content>
             `,
             host: {'[class.at-layout-header]': 'true'}
           })
export class AtLayoutHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
