import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'at-bread-item',
  template: `
    <span class="at_breadcrumb__text">
      <ng-content></ng-content>
    </span>
    <span class="at-breadcrumb__separator">{{this.separator}}</span>
  `,
})
export class AtBreadItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() separator = '/'
}
