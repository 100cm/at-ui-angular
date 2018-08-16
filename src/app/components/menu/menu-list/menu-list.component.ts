import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: '[at-menu-list]',
  template: `<ng-content></ng-content>
`,

})
export class MenuListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @HostBinding('class.at-dropdown-menu') menu = true

}
