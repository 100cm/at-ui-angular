import { OverlayModule }          from '@angular/cdk/overlay';
import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
import { InlineMenuComponent }    from './inline-menu/inline-menu.component';
import { MenuItemGroupComponent } from './menu-item-group/menu-item-group.component';
import { MenuItemComponent }      from './menu-item/menu-item.component';
import { MenuLinkDirective }      from './menu-link/menu-link.directive';
import { MenuListComponent }      from './menu-list/menu-list.component';
import { MenuComponent }          from './menu.component';
import { SubMenuComponent }       from './sub-menu/sub-menu.component';

@NgModule({
            imports: [CommonModule, OverlayModule],
            declarations: [MenuComponent, MenuComponent, InlineMenuComponent, MenuItemComponent, MenuItemGroupComponent,
              MenuLinkDirective, SubMenuComponent, MenuLinkDirective, MenuListComponent],
            exports: [MenuComponent, MenuComponent, InlineMenuComponent, MenuItemComponent, MenuItemGroupComponent,
              MenuLinkDirective, SubMenuComponent, MenuLinkDirective, MenuListComponent]
          })
export class AtMenuModule {
}
