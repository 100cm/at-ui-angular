import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: '[at-menu-list]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `
})
export class MenuListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostBinding('class.at-dropdown-menu') menu = true;

}
