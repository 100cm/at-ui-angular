import {Component, HostBinding, Inject, Input, OnInit} from '@angular/core';
import {MenuComponent} from "../menu.component";

@Component({
  selector: '[itemGroup]',
  template:`<ul class="at-menu__item-group">
    <li *ngIf="label" class="at-menu__item-group-title">{{label}}</li>
    <ul class="at-menu__item-group-list">
      <ng-content></ng-content>
    </ul>
  </ul>
  `,
})
export class MenuItemGroupComponent implements OnInit {

  @Input()
  label: string

  @Input()
  inline = true

  constructor(@Inject(MenuComponent) public parent: MenuComponent) {
  }

  ngOnInit() {
  }

  @HostBinding('class.at-dropdown-menu')
  get drop_down() {
    return this.parent.atType != 'inline'
  }

}
