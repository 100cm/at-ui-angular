import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: '[inlineMenu]',
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
