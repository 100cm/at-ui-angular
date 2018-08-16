import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: '[inline-menu]',
  template:`<ng-content></ng-content>
  `,
})
export class InlineMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @HostBinding('class.at-menu') at_menu = true

}
