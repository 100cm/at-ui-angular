///<reference path="../../showcase/connect/connect.component.ts"/>
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "../../components/button/button.component";
import {HollowDirective} from "../../components/button/hollow/hollow.directive";
import {ButtonGroupComponent} from "../../components/button/button-group/button-group.component";
import {MenuComponent} from "../../components/menu/menu.component";
import {MenuItemComponent} from "../../components/menu/menu-item/menu-item.component";
import {SubMenuComponent} from "../../components/menu/sub-menu/sub-menu.component";
import {MenuItemGroupComponent} from "../../components/menu/menu-item-group/menu-item-group.component";
import {MenuListComponent} from "../../components/menu/menu-list/menu-list.component";
import {RadioGroupComponent} from "../../components/radio/radio-group/radio-group.component";
import {RadioComponent} from "../../components/radio/radio.component";
import {InlineMenuComponent} from "../../components/menu/inline-menu/inline-menu.component";
import {RowComponent} from "../../components/grid/row/row.component";
import {ColComponent} from "../../components/grid/col/col.component";
import {TagComponent} from "../../components/tag/tag.component";
import {IconComponent} from "../../components/icon/icon.component";
import {HighLightComponent} from "../../components/high-light/high-light.component";
import {CheckboxComponent} from "../../components/checkbox/checkbox.component";
import {CheckboxGroupComponent} from "../../components/checkbox/checkbox-group/checkbox-group.component";
import {InputComponent} from "../../components/input/input.component";
import {SelectComponent} from "../../components/select/select.component";
import {RadioButtonComponent} from "../../components/radio/radio-button/radio-button.component";
import {SwitchComponent} from "../../components/switch/switch.component";
import {OptionComponent} from "../../components/select/option/option.component";
import {SliderComponent} from "../../components/slider/slider.component";
import {SwicthBasicComponent} from "../../showcase/at-demo-switch/swicth-basic/swicth-basic.component";
import {IntroComponent} from "../../showcase/intro/intro.component";
import {TextareaComponent} from "../../components/textarea/textarea.component";
import {UpdateLogComponent} from "../../showcase/update-log/update-log.component";
import {StartupComponent} from "../../showcase/startup/startup.component";
import {InstallComponent} from "../../showcase/install/install.component";
import {DropdownComponent} from "../../components/dropdown/dropdown.component";
import {ConnectComponent} from "../../showcase/connect/connect.component";
import {DropdownMenuItemComponent} from "../../components/menu/dropdown-menu-item/dropdown-menu-item.component";
import {DropMenuListComponent} from "../../components/menu/drop-menu-list/drop-menu-list.component";

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
    HighLightComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    OptionComponent,
    SwitchComponent,
    SwicthBasicComponent,
    SliderComponent,
    TextareaComponent,
    IntroComponent,
    InstallComponent,
    UpdateLogComponent,
    StartupComponent,
    ConnectComponent,
    DropdownComponent,
    DropdownMenuItemComponent,
    DropMenuListComponent,
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
    HighLightComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    OptionComponent,
    SwitchComponent,
    SwicthBasicComponent,
    SliderComponent,
    TextareaComponent,
    IntroComponent,
    InstallComponent,
    UpdateLogComponent,
    StartupComponent,
    ConnectComponent,
    DropdownComponent,
    DropdownMenuItemComponent,
    DropMenuListComponent,
  ],
})
export class AtModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AtModule,
    };
  }
}
