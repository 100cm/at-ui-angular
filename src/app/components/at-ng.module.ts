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
import {ControlContainer, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotificationComponent} from './notification/notification/notification.component';
import {ComponentCreatorBase} from "./core/component-creator-base";
import {NotificationContainerComponent} from './notification/notification-container/notification-container.component';
import {NotificationBaseService} from "./notification/notification-base.service";
import {AtNotificationService} from "./notification/notification.service";
import {AlertComponent} from './alert/alert.component';
import {BadgeComponent} from './badge/badge.component';
import {ModalComponent} from './modal/modal.component';
import {AtGlobalMonitorService} from "./at-global-monitor.service";
import {AtModalService} from "./modal/at-modal.service";
import {ModalBaseService} from "./modal/modal-base.service";
import {TableComponent} from './table/table.component';
import {AtTbodyDirective} from './table/at-tbody.directive';
import {AtTdDirective} from './table/at-td.directive';
import {AtThDirective} from './table/at-th.directive';
import {AtTbodyTrDirective} from './table/at-tbody-tr.directive';
import {AtTheadDirective} from './table/at-thead.directive';
import {PagenationComponent} from './pagenation/pagenation.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {AtBreadItemDirective} from './breadcrumb/breadcrumb-item/at-bread-item.directive';
import {MessageContainerComponent} from './message/message-container/message-container.component';
import {MessageComponent} from './message/message/message.component';
import {AtMessageService} from "./message/at-message.service";
import {AtMessageContainerService} from "./message/at-message-container.service";
import {PopoverComponent} from './popover/popover.component';
import {ProgressComponent} from './progress/progress.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {FormComponent} from './form/form.component';
import {AtFormDirective} from './form/at-form.directive';
import {AtFormItemDirective} from './form/at-form-item.directive';
import {AtFormLabelDirective} from './form/at-form-label.directive';
import {AtFormContentDirective} from './form/at-form-content.directive';
import {AtFormErrorDirective} from './form/at-form-error.directive';
import {AtFormFeedbackDirective} from './form/at-form-feedback.directive';
import {DatetimepickerComponent} from './datetimepicker/datetimepicker.component';
import {CalendarComponent} from './datetimepicker/calendar/calendar.component';


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
    ModalComponent,
    TableComponent,
    AtTbodyDirective,
    AtTdDirective,
    AtThDirective,
    AtTbodyTrDirective,
    AtTheadDirective,
    PagenationComponent,
    BreadcrumbComponent,
    AtBreadItemDirective,
    MessageContainerComponent,
    MessageComponent,
    PopoverComponent,
    ProgressComponent,
    TooltipComponent,
    FormComponent,
    AtFormDirective,
    AtFormItemDirective,
    AtFormLabelDirective,
    AtFormContentDirective,
    AtFormErrorDirective,
    AtFormFeedbackDirective,
    DatetimepickerComponent,
    CalendarComponent,
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
    BadgeComponent,
    ModalComponent,
    TableComponent,
    PagenationComponent,

    AtThDirective,
    AtTbodyDirective,
    AtTbodyTrDirective,
    AtTheadDirective,
    AtTdDirective,
    BreadcrumbComponent,
    AtBreadItemDirective,

    MessageContainerComponent,
    MessageComponent,
    PopoverComponent,
    ProgressComponent,
    TooltipComponent,

    FormComponent,
    AtFormContentDirective,
    AtFormDirective,
    AtFormItemDirective,
    AtFormLabelDirective,
    AtFormErrorDirective,
    AtFormFeedbackDirective,

    CalendarComponent,
    DatetimepickerComponent,


  ],
  entryComponents: [NotificationComponent, NotificationContainerComponent,
    MessageContainerComponent, MessageComponent,
    ModalComponent],
  imports:
    [
      CommonModule,
      FormsModule,
      BrowserModule, BrowserAnimationsModule

    ],
  providers: [AtGlobalMonitorService,]
})

export class AtModule {
  static forRoot(): ModuleWithProviders {
    return {
      providers: [AtNotificationService,
        AtMessageService, AtMessageContainerService,
        AtModalService, ModalBaseService,
        ComponentCreatorBase, NotificationBaseService],
      ngModule: AtModule,
    };
  }
}
