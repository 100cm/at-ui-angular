import {NgModule}               from "@angular/core";
import {CommonModule}           from "@angular/common";
import {OverlayModule}          from "@angular/cdk/overlay";
import {MenuComponent}          from "./menu.component";
import {MenuItemGroupComponent} from "./menu-item-group/menu-item-group.component";
import {MenuLinkDirective}      from "./menu-link/menu-link.directive";
import {SubMenuComponent}       from "./sub-menu/sub-menu.component";
import {MenuItemComponent}      from "./menu-item/menu-item.component";
import {MenuListComponent}      from "./menu-list/menu-list.component";
import {InlineMenuComponent}    from "./inline-menu/inline-menu.component";

@NgModule({
            imports: [CommonModule, OverlayModule],
            declarations: [MenuComponent, MenuComponent, InlineMenuComponent, MenuItemComponent, MenuItemGroupComponent,
              MenuLinkDirective, SubMenuComponent, MenuLinkDirective, MenuListComponent],
            exports: [MenuComponent, MenuComponent, InlineMenuComponent, MenuItemComponent, MenuItemGroupComponent,
              MenuLinkDirective, SubMenuComponent, MenuLinkDirective, MenuListComponent],
          })
export class AtMenuModule {
}
