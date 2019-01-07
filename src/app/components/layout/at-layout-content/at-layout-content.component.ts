import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-layout-content',
             template: `

                 <ng-content>
                 </ng-content>`,
             host: {'[class.at-layout-content]': 'true'}
})
export class AtLayoutContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
