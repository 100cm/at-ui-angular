import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./button/button.component";
import {HollowDirective} from "./button/hollow/hollow.directive";
import {ButtonGroupComponent} from "./button/button-group/button-group.component";
import {MenuComponent} from "./menu/menu.component";
import {MenuItemComponent} from "./menu/menu-item/menu-item.component";
import {SubMenuComponent} from "./menu/sub-menu/sub-menu.component";
import {MenuItemGroupComponent} from "./menu/menu-item-group/menu-item-group.component";
import {MenuListComponent} from "./menu/menu-list/menu-list.component";
import {RadioGroupComponent} from "./radio/radio-group/radio-group.component";
import {RadioComponent} from "./radio/radio.component";
import {InlineMenuComponent} from "./menu/inline-menu/inline-menu.component";
import {RowComponent} from "./grid/row/row.component";
import {ColComponent} from "./grid/col/col.component";
import {TagComponent} from "./tag/tag.component";
import {IconComponent} from "./icon/icon.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {CheckboxGroupComponent} from "./checkbox/checkbox-group/checkbox-group.component";
import {InputComponent} from "./input/input.component";
import {SelectComponent} from "./select/select.component";
import {RadioButtonComponent} from "./radio/radio-button/radio-button.component";
import {SwitchComponent} from "./switch/switch.component";
import {OptionComponent} from "./select/option/option.component";
import {SliderComponent} from "./slider/slider.component";
import {TextareaComponent} from "./textarea/textarea.component";
import {DropdownComponent} from "./dropdown/dropdown.component";
import {DropdownMenuItemComponent} from "./menu/dropdown-menu-item/dropdown-menu-item.component";
import {DropMenuListComponent} from "./menu/drop-menu-list/drop-menu-list.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ComponentCreator} from "./core/component-creator";
import {NotificationComponent} from './notification/notification/notification.component';
import {ComponentCreatorBase} from "./core/component-creator-base";
import {NotificationContainerComponent} from './notification/notification-container/notification-container.component';
import {NotificationBaseService} from "./notification/notification-base.service";
import {AtNotificationService} from "./notification/notification.service";
import {AlertComponent} from './alert/alert.component';
import {BadgeComponent} from './badge/badge.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HollowDirective,
    ButtonGroupComponent,
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    MenuItemGroupComponent,
    MenuListComponent,
    RadioGroupComponent,
    RadioComponent,
    InlineMenuComponent,
    RowComponent,
    ColComponent,
    TagComponent,
    IconComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    OptionComponent,
    SwitchComponent,
    SliderComponent,
    TextareaComponent,
    DropdownComponent,
    DropdownMenuItemComponent,
    DropMenuListComponent,
    NotificationComponent,
    NotificationContainerComponent,
    AlertComponent,
    BadgeComponent,
  ],
  exports: [
    ButtonComponent,
    HollowDirective,
    ButtonGroupComponent,
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    MenuItemGroupComponent,
    MenuListComponent,
    RadioGroupComponent,
    RadioComponent,
    InlineMenuComponent,
    RowComponent,
    ColComponent,
    TagComponent,
    IconComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    OptionComponent,
    SwitchComponent,
    SliderComponent,
    TextareaComponent,
    DropdownComponent,
    DropdownMenuItemComponent,
    DropMenuListComponent,
    NotificationComponent,
    NotificationContainerComponent,
    AlertComponent,
    BadgeComponent
  ],
  entryComponents: [NotificationComponent, NotificationContainerComponent],
  imports:
    [
      CommonModule,
      FormsModule,
      BrowserModule, BrowserAnimationsModule

    ],
})

export class AtModule {
  static forRoot(): ModuleWithProviders {
    return {
      providers: [AtNotificationService, ComponentCreatorBase, NotificationBaseService],
      ngModule: AtModule,
    };
  }
}
