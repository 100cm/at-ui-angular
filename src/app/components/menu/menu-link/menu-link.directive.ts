import {Directive, HostBinding} from '@angular/core';

@Directive({
             selector: '[at-menu-link]'
           })
export class MenuLinkDirective {

  constructor() {
  }

  @HostBinding('class.at-menu__item-link') menu_link = true
}
