import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonComponent} from './components/button/button.component';
import {HollowDirective} from './components/button//hollow/hollow.directive';
import {ButtonGroupComponent} from './components/button/button-group/button-group.component';
import {MenuComponent} from './components/menu/menu.component';
import {MenuItemComponent} from './components/menu/menu-item/menu-item.component';
import {SubMenuComponent} from './components/menu/sub-menu/sub-menu.component';
import {MenuItemGroupComponent} from './components/menu/menu-item-group/menu-item-group.component';
import {MenuListComponent} from './components/menu/menu-list/menu-list.component';
import {InlineMenuComponent} from './components/menu/inline-menu/inline-menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RowComponent} from './components/grid/row/row.component';
import {ColComponent} from './components/grid/col/col.component';
import {TagComponent} from './components/tag/tag.component';
import {IconComponent} from './components/icon/icon.component';
import {routing} from "../routes/routes";
import {AtDemoButtonComponent} from './showcase/at-demo-button/at-demo-button.component';
import {AtDemoComponentsComponent} from './showcase/at-demo-components/at-demo-components.component';
import {CommonModule} from "@angular/common";
import {HighLightComponent} from './components/high-light/high-light.component';
import {AtDemoDocSectionComponent} from './showcase/at-demo-doc-section/at-demo-doc-section.component';
import {AtDemoLayoutComponent} from './showcase/at-demo-layout/at-demo-layout.component';
import {AtDemoTagComponent} from './showcase/at-demo-tag/at-demo-tag.component';
import {DemoBasicTagComponent} from './showcase/at-demo-tag/demo-basic-tag/demo-basic-tag.component';
import {DemoColorTagComponent} from './showcase/at-demo-tag/demo-color-tag/demo-color-tag.component';
import {AtDemoMenuComponent} from './showcase/at-demo-menu/at-demo-menu.component';
import {DemoTopMenuComponent} from './showcase/at-demo-menu/demo-top-menu/demo-top-menu.component';
import {DemoVerticalMenuComponent} from './showcase/at-demo-menu/demo-vertical-menu/demo-vertical-menu.component';
import {DemoInlineMenuComponent} from './showcase/at-demo-menu/demo-inline-menu/demo-inline-menu.component';
import {AtDemoCheckboxComponent} from './showcase/at-demo-checkbox/at-demo-checkbox.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {FormsModule} from "@angular/forms";
import {DemoBasicCheckboxComponent} from './showcase/at-demo-checkbox/demo-basic-checkbox/demo-basic-checkbox.component';
import {DemoGroupCheckboxComponent} from './showcase/at-demo-checkbox/demo-group-checkbox/demo-group-checkbox.component';
import {CheckboxGroupComponent} from './components/checkbox/checkbox-group/checkbox-group.component';
import {InputComponent} from './components/input/input.component';
import {AtDemoInputComponent} from './showcase/at-demo-input/at-demo-input.component';
import {DemoBasicInputComponent} from "./showcase/at-demo-input/demo-basic-input/demo-basic-input.component";
import {DemoPendInputComponent} from './showcase/at-demo-input/demo-pend-input/demo-pend-input.component';
import {DemoIconInputComponent} from './showcase/at-demo-input/demo-icon-input/demo-icon-input.component';
import {DemoStatusInputComponent} from './showcase/at-demo-input/demo-status-input/demo-status-input.component';
import {DemoSizeInputComponent} from './showcase/at-demo-input/demo-size-input/demo-size-input.component';
import {AtDemoNumberInputComponent} from './showcase/at-demo-number-input/at-demo-number-input.component';
import {DemoBasicNumberInputComponent} from './showcase/at-demo-number-input/demo-basic-number-input/demo-basic-number-input.component';
import {DemoSizeNumberInputComponent} from './showcase/at-demo-number-input/demo-size-number-input/demo-size-number-input.component';
import {DemoStepNumberInputComponent} from './showcase/at-demo-number-input/demo-step-number-input/demo-step-number-input.component';
import {AtDemoRadioComponent} from './showcase/at-demo-radio/at-demo-radio.component';
import {DemoBasicRadioComponent} from './showcase/at-demo-radio/demo-basic-radio/demo-basic-radio.component';
import {RadioComponent} from "./components/radio/radio.component";
import {RadioGroupComponent} from "./components/radio/radio-group/radio-group.component";
import { RadioButtonComponent } from './components/radio/radio-button/radio-button.component';
import { DemoButtonRadioComponent } from './showcase/at-demo-radio/demo-button-radio/demo-button-radio.component';
import { DemoDisableRadioComponent } from './showcase/at-demo-radio/demo-disable-radio/demo-disable-radio.component';
import { DemoSizeRadioComponent } from './showcase/at-demo-radio/demo-size-radio/demo-size-radio.component';
import { DemoColorRadioComponent } from './showcase/at-demo-radio/demo-color-radio/demo-color-radio.component';
import { SelectComponent } from './components/select/select.component';
import { AtDemoSelectComponent } from './showcase/at-demo-select/at-demo-select.component';
import { DemoSelectBasicComponent } from './showcase/at-demo-select/demo-select-basic/demo-select-basic.component';
import { OptionComponent } from './components/select/option/option.component';
import { DemoSelectMultipleComponent } from './showcase/at-demo-select/demo-select-multiple/demo-select-multiple.component';
import { DemoSelectSizeComponent } from './showcase/at-demo-select/demo-select-size/demo-select-size.component';
import { DemoSelectClearComponent } from './showcase/at-demo-select/demo-select-clear/demo-select-clear.component';
import { DemoInputSelectComponent } from './showcase/at-demo-select/demo-input-select/demo-input-select.component';
import { DemoSearchSelectComponent } from './showcase/at-demo-select/demo-search-select/demo-search-select.component';
import { SwitchComponent } from './components/switch/switch.component';
import { AtDemoSwitchComponent } from './showcase/at-demo-switch/at-demo-switch.component';
import { SwicthBasicComponent } from './showcase/at-demo-switch/swicth-basic/swicth-basic.component';
import { SliderComponent } from './components/slider/slider.component';
import { AtDemoSliderComponent } from './showcase/at-demo-slider/at-demo-slider.component';
import { DemoBasicSliderComponent } from './showcase/at-demo-slider/demo-basic-slider/demo-basic-slider.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { AtDemoTextareaComponent } from './showcase/at-demo-textarea/at-demo-textarea.component';
import { DemoBasicTextareaComponent } from './showcase/at-demo-textarea/demo-basic-textarea/demo-basic-textarea.component';
import { IntroComponent } from './showcase/intro/intro.component';
import { InstallComponent } from './showcase/install/install.component';
import { UpdateLogComponent } from './showcase/update-log/update-log.component';
import { StartupComponent } from './showcase/startup/startup.component';
import { ConnectComponent } from './showcase/connect/connect.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { AtDemoDropdownComponent } from './showcase/at-demo-dropdown/at-demo-dropdown.component';
import { BasicDemoDropdownComponent } from './showcase/at-demo-dropdown/basic-demo-dropdown/basic-demo-dropdown.component';
import { AtDemoPagenationComponent } from './showcase/at-demo-pagenation/at-demo-pagenation.component';
import { DropdownMenuItemComponent } from './components/menu/dropdown-menu-item/dropdown-menu-item.component';
import { DropMenuListComponent } from './components/menu/drop-menu-list/drop-menu-list.component';
import { DemoPlaceDropdownComponent } from './showcase/at-demo-dropdown/demo-place-dropdown/demo-place-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
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
    AtDemoButtonComponent,
    AtDemoComponentsComponent,
    HighLightComponent,
    AtDemoDocSectionComponent,
    AtDemoLayoutComponent,
    AtDemoTagComponent,
    DemoBasicTagComponent,
    DemoColorTagComponent,
    AtDemoMenuComponent,
    DemoTopMenuComponent,
    DemoVerticalMenuComponent,
    DemoInlineMenuComponent,
    AtDemoCheckboxComponent,
    CheckboxComponent,
    DemoBasicCheckboxComponent,
    DemoGroupCheckboxComponent,
    CheckboxGroupComponent,
    InputComponent,
    AtDemoInputComponent,
    DemoBasicInputComponent,
    DemoPendInputComponent,
    DemoIconInputComponent,
    DemoStatusInputComponent,
    DemoSizeInputComponent,
    AtDemoNumberInputComponent,
    DemoBasicNumberInputComponent,
    DemoSizeNumberInputComponent,
    DemoStepNumberInputComponent,
    AtDemoRadioComponent,
    DemoBasicRadioComponent,
    RadioButtonComponent,
    DemoButtonRadioComponent,
    DemoDisableRadioComponent,
    DemoSizeRadioComponent,
    DemoColorRadioComponent,
    SelectComponent,
    AtDemoSelectComponent,
    DemoSelectBasicComponent,
    OptionComponent,
    DemoSelectMultipleComponent,
    DemoSelectSizeComponent,
    DemoSelectClearComponent,
    DemoInputSelectComponent,
    DemoSearchSelectComponent,
    SwitchComponent,
    AtDemoSwitchComponent,
    SwicthBasicComponent,
    SliderComponent,
    AtDemoSliderComponent,
    DemoBasicSliderComponent,
    TextareaComponent,
    AtDemoTextareaComponent,
    DemoBasicTextareaComponent,
    IntroComponent,
    InstallComponent,
    UpdateLogComponent,
    StartupComponent,
    ConnectComponent,
    DropdownComponent,
    AtDemoDropdownComponent,
    BasicDemoDropdownComponent,
    AtDemoPagenationComponent,
    DropdownMenuItemComponent,
    DropMenuListComponent,
    DemoPlaceDropdownComponent,

  ],
  imports: [
    routing,
    CommonModule,
    FormsModule,
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
