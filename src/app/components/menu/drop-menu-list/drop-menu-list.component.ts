import {Component, OnInit, Input, ElementRef, Renderer2, HostBinding} from '@angular/core';
import {MenuListComponent}                                            from "../menu-list/menu-list.component";
import {MenuComponent}                                                from "../menu.component";
import {SubMenuComponent}                                             from "../sub-menu/sub-menu.component";
import {AtDropSubmenuComponent}                                       from "../../dropdown/at-drop-submenu/at-drop-submenu.component";

@Component({
             selector: '[at-drop-menu-list]',
             template: `
               <ng-content></ng-content>`,
           })
export class DropMenuListComponent extends MenuComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public el: ElementRef, public render: Renderer2) {
    super(el, render)
  }


  sub_menus: Array<SubMenuComponent | AtDropSubmenuComponent> = []

  @HostBinding('class.at-dropdown-menu') menu = true



  get verticalClass() {
    return false
  }

}
