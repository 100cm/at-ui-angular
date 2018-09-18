import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {AtGlobalMonitorService}                        from "./at-global-monitor.service";

import {AtTreeModule}           from "./tree/at-tree.module";
import {AtCheckboxModule}       from "./checkbox/at-checkbox.module";
import {AtLayoutModule}         from "./layout/at-layout.module";
import {AtCarouselModule}       from "./carousel/at-carousel.module";
import {AtTooltipModule}        from "./tooltip/at-tooltip.module";
import {AtTimelineModule}       from "./timeline/at-timeline.module";
import {AtButtonModule}         from "./button/at-button-module";
import {AtMenuModule}           from "./menu/at-menu-module";
import {AtRadioModule}          from "./radio/at-radio-module";
import {AtAffixModule}          from "./affix/at-affix.module";
import {AtUploadModule}         from "./upload/upload.module";
import {AtModalModule}          from "./modal/at-modal.module";
import {AtSelectModule}         from "./select/at-select.module";
import {AtAlertModule}          from "./alert/at-alert-module";
import {AtBadgeModule}          from "./badge/at-badge-module";
import {AtBreadModule}          from "./breadcrumb/at-bread-module";
import {AtDatetimepickerModule} from "./datetimepicker/at-datetimepicker.module";
import {AtDrawerModule}         from "./drawer/at-drawer.module";
import {AtDropdownModule}       from "./dropdown/at-dropdown.module";
import {AtFormModule}           from "./form/at-form.module";
import {AtGridModule}           from "./grid/at-grid.module";
import {AtIconModule}           from "./icon/at-icon.module";
import {AtInputModule}          from "./input/at-input.module";
import {AtPagenationModule}     from "./pagenation/at-pagenation.module";
import {AtPopoverModule}        from "./popover/at-popover.module";
import {AtProgressModule}       from "./progress/at-progress.module";
import {AtSliderModule}         from "./slider/at-slider.module";
import {AtStepModule}           from "./steps/at-step.module";
import {AtSwitchModule}         from "./switch/at-switch.module";
import {AtTabModule}            from "./tab/at-tab.module";
import {AtTableModule}          from "./table/at-table.module";
import {AtTagModule}            from "./tag/at-tag.module";
import {AtTextareaModule}       from "./textarea/at-textarea.module";
import {AtCardModule}           from "./card/at-card-module";
import {AtMessageModule}        from "./message/at-message.module";
import {AtNotificationModule}   from "./notification/at-notification.module";

export *                                  from './tree'
export *                                  from './checkbox'
export *                                  from './layout'
export *                                  from './carousel'
export *                                  from './tooltip'
export *                                  from './timeline'
export *                                  from './affix'
export *                                  from './modal'
export *                                  from './select'
export *                                  from './upload'
export *                                  from './menu'
export *                                  from './radio'
export *                                  from './button'
export *                                  from './alert'
export *                                  from './breadcrumb'
export *                                  from './datetimepicker'
export *                                  from './drawer'
export *                                  from "./dropdown";
export *                                  from './form'
export *                                  from './grid'
export *                                  from './icon'
export *                                  from './input'
export *                                  from './pagenation'
export *                                  from './popover'
export *                                  from './progress'
export *                                  from './slider'
export *                                  from './steps'
export *                                  from './switch'
export *                                  from './tab'
export *                                  from './table'
export *                                  from './tag'
export *                                  from './textarea'
export *                                  from './card'
export *                                  from './notification'
export *                                  from './message'
export *                                  from './badge'


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
            ],

            providers: [AtGlobalMonitorService]
          })

export class AtModule {
  static forRoot(options?: AtRootConfig): ModuleWithProviders {
    return {
      ngModule: AtModule,
    };
  }
}

export interface AtRootConfig {
  extraFontName: string;
  extraFontUrl: string;
}

export const AT_ROOT_CONFIG = new InjectionToken<AtRootConfig>('AtRootConfig');

