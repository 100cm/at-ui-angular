import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { AtDropSubmenuComponent }                                       from '../../dropdown/at-drop-submenu/at-drop-submenu.component';
import { MenuListComponent }                                            from '../menu-list/menu-list.component';
import { MenuComponent }                                                from '../menu.component';
import { SubMenuComponent }                                             from '../sub-menu/sub-menu.component';

@Component({
             selector: '[at-drop-menu-list]',
             template: `
               <ng-content></ng-content>`
           })
export class DropMenuListComponent extends MenuComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public el: ElementRef, public render: Renderer2) {
    super(el, render);
  }

  sub_menus: Array<SubMenuComponent | AtDropSubmenuComponent> = [];

  @HostBinding('class.at-dropdown-menu') menu = true;

  get verticalClass() {
    return false;
  }

}
