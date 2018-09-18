import {OverlayModule}             from '@angular/cdk/overlay';
import {CommonModule}              from '@angular/common';
import {NgModule}                  from '@angular/core';
import {DropdownComponent}         from "./dropdown.component";
import {DropdownDirective}         from "./dropdown.directive";
import {AtDropSubmenuComponent}    from "./at-drop-submenu/at-drop-submenu.component";
import {DropdownMenuItemComponent} from "../menu/dropdown-menu-item/dropdown-menu-item.component";
import {DropMenuListComponent}     from "../menu/drop-menu-list/drop-menu-list.component";


@NgModule({
            imports: [CommonModule, OverlayModule],
            declarations: [DropdownComponent,DropdownDirective,AtDropSubmenuComponent,DropdownMenuItemComponent,DropMenuListComponent],
            exports: [DropdownComponent,DropdownDirective,AtDropSubmenuComponent,DropdownMenuItemComponent,DropMenuListComponent]
          })
export class AtDropdownModule {
}
