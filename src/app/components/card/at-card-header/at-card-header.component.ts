import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'at-card-header',
  template: `
    <ng-content></ng-content>
  `,
  host: {'[class.at-card-header]': 'true'}
})
export class AtCardHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
