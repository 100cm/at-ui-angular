import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { AtGlobalMonitorService } from './at-global-monitor.service';

import { AtAffixModule } from './affix/at-affix.module';
import { AtAlertModule } from './alert/at-alert-module';
import { AutoCompleteModule } from './autocomplete/autocomplete.module';
import { AtBadgeModule } from './badge/at-badge-module';
import { AtBreadModule } from './breadcrumb/at-bread-module';
import { AtButtonModule } from './button/at-button-module';
import { AtCardModule } from './card/at-card-module';
import { AtCarouselModule } from './carousel/at-carousel.module';
import { AtCheckboxModule } from './checkbox/at-checkbox.module';
import { AtCollapseModule } from './collapse/collapse.module';
import { AtColorPickerModule } from './color-picker/at-color-picker.module';
import { AtDatetimepickerModule } from './datetimepicker/at-datetimepicker.module';
import { AtDividerModule } from './divider/divider.module';
import { AtDndModule } from './drag-and-drop/at-dnd.module';
import { AtDrawerModule } from './drawer/at-drawer.module';
import { AtDropdownModule } from './dropdown/at-dropdown.module';
import { AtFormModule } from './form/at-form.module';
import { AtGridModule } from './grid/at-grid.module';
import { AtI18nModule } from './i18n/at-i18n.module';
import { AtIconModule } from './icon/at-icon.module';
import { AtInputModule } from './input/at-input.module';
import { AtLayoutModule } from './layout/at-layout.module';
import { AtMenuModule } from './menu/at-menu-module';
import { AtMessageModule } from './message/at-message.module';
import { AtModalModule } from './modal/at-modal.module';
import { AtNotificationModule } from './notification/at-notification.module';
import { AtPagenationModule } from './pagenation/at-pagenation.module';
import { AtPopoverModule } from './popover/at-popover.module';
import { AtProgressModule } from './progress/at-progress.module';
import { AtRadioModule } from './radio/at-radio-module';
import { AtSelectModule } from './select/at-select.module';
import { AtSliderModule } from './slider/at-slider.module';
import { AtStepModule } from './steps/at-step.module';
import { AtSwitchModule } from './switch/at-switch.module';
import { AtTabModule } from './tab/at-tabs.module';
import { AtTableModule } from './table/at-table.module';
import { AtTagModule } from './tag/at-tag.module';
import { AtTextareaModule } from './textarea/at-textarea.module';
import { AtTimelineModule } from './timeline/at-timeline.module';
import { AtTooltipModule } from './tooltip/at-tooltip.module';
import { AtTreeSelectModule } from './tree-select/at-tree-select.module';
import { AtTreeModule } from './tree/at-tree.module';
import { AtUploadModule } from './upload/upload.module';

export *                                  from './tree';
export *                                  from './checkbox';
export *                                  from './layout';
export *                                  from './carousel';
export *                                  from './tooltip';
export *                                  from './timeline';
export *                                  from './affix';
export *                                  from './modal';
export *                                  from './select';
export *                                  from './upload';
export *                                  from './menu';
export *                                  from './radio';
export *                                  from './button';
export *                                  from './alert';
export *                                  from './breadcrumb';
export *                                  from './datetimepicker';
export *                                  from './drawer';
export *                                  from './dropdown';
export *                                  from './form';
export *                                  from './grid';
export *                                  from './icon';
export *                                  from './input';
export *                                  from './pagenation';
export *                                  from './popover';
export *                                  from './progress';
export *                                  from './slider';
export *                                  from './steps';
export *                                  from './switch';
export *                                  from './tab';
export *                                  from './table';
export *                                  from './tag';
export *                                  from './textarea';
export *                                  from './card';
export *                                  from './notification';
export *                                  from './message';
export *                                  from './badge';
export *                                  from './i18n';
export *                                  from './color-picker';
export *                                  from './drag-and-drop';
export *                                  from './collapse';
export *                                  from './tree-select';
export *                                  from './autocomplete';
export *                                  from './divider';

@NgModule({
  exports: [
    AtTreeModule,
    AtAffixModule,
    AtAlertModule,
    AtBadgeModule,
    AtBreadModule,
    AtCardModule,
    AtDatetimepickerModule,
    AtDrawerModule,
    AtDropdownModule,
    AtFormModule,
    AtGridModule,
    AtIconModule,
    AtInputModule,
    AtMessageModule,
    AtNotificationModule,
    AtPagenationModule,
    AtPopoverModule,
    AtProgressModule,
    AtRadioModule,
    AtSelectModule,
    AtSliderModule,
    AtStepModule,
    AtSwitchModule,
    AtTabModule,
    AtTableModule,
    AtTagModule,
    AtTimelineModule,
    AtTooltipModule,
    AtTextareaModule,
    AtUploadModule,
    AtModalModule,
    AtCheckboxModule,
    AtLayoutModule,
    AtCarouselModule,
    AtButtonModule,
    AtMenuModule,
    AtColorPickerModule,
    AtI18nModule,
    AtDndModule,
    AtDividerModule,
    AtCollapseModule,
    AtTreeSelectModule,
    AutoCompleteModule
  ],

  providers: [AtGlobalMonitorService]
})

export class AtModule {
  static forRoot(options?: AtRootConfig): ModuleWithProviders {
    return {
      ngModule: AtModule
    };
  }
}

export interface AtRootConfig {
  extraFontName: string;
  extraFontUrl: string;
}

export const AT_ROOT_CONFIG = new InjectionToken<AtRootConfig>('AtRootConfig');
