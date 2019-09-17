import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: '[inline-menu]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content></ng-content>
  `
})
export class InlineMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostBinding('class.at-menu') at_menu = true;

}
