import {Component, HostBinding, Inject, Input, OnInit} from '@angular/core';
import {MenuComponent} from "../menu.component";

@Component({
  selector: '[itemGroup]',
  templateUrl: './menu-item-group.component.html',
  styleUrls: ['./menu-item-group.component.css']
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
