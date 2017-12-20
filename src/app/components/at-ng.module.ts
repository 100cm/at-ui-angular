import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
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
import {TimeComponent} from './datetimepicker/time/time.component';
import {CardComponent} from './card/card.component';
import {AtFormatPipe} from './datetimepicker/at-format.pipe';
import {TabComponent} from './tab/tab.component';
import {TabContentComponent} from './tab/tab-content/tab-content.component';
import {TabSetComponent} from './tab/tab-set/tab-set.component';
import {TabBodyComponent} from './tab/tab-body/tab-body.component';
import {TabHeaderComponent} from './tab/tab-header/tab-header.component';
import {AtTabInkDirective} from './tab/at-tab-ink.directive';
import {TabNavsComponent} from './tab/tab-navs/tab-navs.component';
import {TabLabelDirective} from './tab/tab-label.directive';
import {OverlayModule} from "./core/overlay/index";
import { DropdownDirective } from './dropdown/dropdown.directive';

export {TabComponent} from './tab/tab.component';
export {CommonModule} from '@angular/common';
export {ButtonComponent} from "./button/button.component";
export {HollowDirective} from "./button/hollow/hollow.directive";
export {ButtonGroupComponent} from "./button/button-group/button-group.component";
export {MenuComponent} from "./menu/menu.component";
export {MenuItemComponent} from "./menu/menu-item/menu-item.component";
export {SubMenuComponent} from "./menu/sub-menu/sub-menu.component";
export {MenuItemGroupComponent} from "./menu/menu-item-group/menu-item-group.component";
export {MenuListComponent} from "./menu/menu-list/menu-list.component";
export {RadioGroupComponent} from "./radio/radio-group/radio-group.component";
export {RadioComponent} from "./radio/radio.component";
export {InlineMenuComponent} from "./menu/inline-menu/inline-menu.component";
export {RowComponent} from "./grid/row/row.component";
export {ColComponent} from "./grid/col/col.component";
export {TagComponent} from "./tag/tag.component";
export {IconComponent} from "./icon/icon.component";
export {CheckboxComponent} from "./checkbox/checkbox.component";
export {CheckboxGroupComponent} from "./checkbox/checkbox-group/checkbox-group.component";
export {InputComponent} from "./input/input.component";
export {SelectComponent} from "./select/select.component";
export {RadioButtonComponent} from "./radio/radio-button/radio-button.component";
export {SwitchComponent} from "./switch/switch.component";
export {OptionComponent} from "./select/option/option.component";
export {SliderComponent} from "./slider/slider.component";
export {TextareaComponent} from "./textarea/textarea.component";
export {DropdownComponent} from "./dropdown/dropdown.component";
export {DropdownMenuItemComponent} from "./menu/dropdown-menu-item/dropdown-menu-item.component";
export {DropMenuListComponent} from "./menu/drop-menu-list/drop-menu-list.component";
export {NotificationComponent} from './notification/notification/notification.component';
export {ComponentCreatorBase} from "./core/component-creator-base";
export {NotificationContainerComponent} from './notification/notification-container/notification-container.component';
export {NotificationBaseService} from "./notification/notification-base.service";
export {AtNotificationService} from "./notification/notification.service";
export {AlertComponent} from './alert/alert.component';
export {BadgeComponent} from './badge/badge.component';
export {ModalComponent} from './modal/modal.component';
export {AtGlobalMonitorService} from "./at-global-monitor.service";
export {AtModalService} from "./modal/at-modal.service";
export {ModalBaseService} from "./modal/modal-base.service";
export {TableComponent} from './table/table.component';
export {AtTbodyDirective} from './table/at-tbody.directive';
export {AtTdDirective} from './table/at-td.directive';
export {AtThDirective} from './table/at-th.directive';
export {AtTbodyTrDirective} from './table/at-tbody-tr.directive';
export {AtTheadDirective} from './table/at-thead.directive';
export {PagenationComponent} from './pagenation/pagenation.component';
export {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
export {AtBreadItemDirective} from './breadcrumb/breadcrumb-item/at-bread-item.directive';
export {MessageContainerComponent} from './message/message-container/message-container.component';
export {MessageComponent} from './message/message/message.component';
export {AtMessageService} from "./message/at-message.service";
export {AtMessageContainerService} from "./message/at-message-container.service";
export {PopoverComponent} from './popover/popover.component';
export {ProgressComponent} from './progress/progress.component';
export {TooltipComponent} from './tooltip/tooltip.component';
export {FormComponent} from './form/form.component';
export {AtFormDirective} from './form/at-form.directive';
export {AtFormItemDirective} from './form/at-form-item.directive';
export {AtFormLabelDirective} from './form/at-form-label.directive';
export {AtFormContentDirective} from './form/at-form-content.directive';
export {AtFormErrorDirective} from './form/at-form-error.directive';
export {AtFormFeedbackDirective} from './form/at-form-feedback.directive';
export {DatetimepickerComponent} from './datetimepicker/datetimepicker.component';
export {CalendarComponent} from './datetimepicker/calendar/calendar.component';
export {TimeComponent} from './datetimepicker/time/time.component';
export {CardComponent} from './card/card.component';


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
    TimeComponent,
    CardComponent,
    AtFormatPipe,
    TabComponent,
    TabContentComponent,
    TabSetComponent,
    TabBodyComponent,
    TabHeaderComponent,
    AtTabInkDirective,
    TabNavsComponent,
    TabLabelDirective,
    DropdownDirective,
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
    DropdownDirective,

    CalendarComponent,
    DatetimepickerComponent,
    TimeComponent,
    CardComponent,
    AtFormatPipe,
    TabComponent,
    TabContentComponent,
    TabSetComponent


  ],
  entryComponents: [NotificationComponent, NotificationContainerComponent,
    MessageContainerComponent, MessageComponent,
    ModalComponent],
  imports:
    [
      CommonModule,
      FormsModule,
      // BrowserModule,
      OverlayModule,

    ],
  providers: [AtGlobalMonitorService]
})

export class AtModule {
  static forRoot(options?: AtRootConfig): ModuleWithProviders {
    return {
      ngModule: AtModule,
      providers: [
        // Services
        AtNotificationService,
        AtMessageService, AtMessageContainerService,
        AtModalService, ModalBaseService, ComponentCreatorBase, NotificationBaseService,
        {provide: AT_ROOT_CONFIG, useValue: options},
      ]

    };
  }
}

export interface AtRootConfig {
  extraFontName: string;
  extraFontUrl: string;
}

export const AT_ROOT_CONFIG = new InjectionToken<AtRootConfig>('AtRootConfig');

