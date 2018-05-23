import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app/app.component";
import {ModuleWithProviders} from "@angular/core";
import {AtDemoButtonComponent} from "../app/showcase/at-demo-button/at-demo-button.component";
import {AtDemoComponentsComponent} from "../app/showcase/at-demo-components/at-demo-components.component";
import {AtDemoLayoutComponent} from "../app/showcase/at-demo-layout/at-demo-layout.component";
import {AtDemoTagComponent} from "../app/showcase/at-demo-tag/at-demo-tag.component";
import {AtDemoMenuComponent} from "../app/showcase/at-demo-menu/at-demo-menu.component";
import {AtDemoCheckboxComponent} from "../app/showcase/at-demo-checkbox/at-demo-checkbox.component";
import {AtDemoInputComponent} from "../app/showcase/at-demo-input/at-demo-input.component";
import {AtDemoNumberInputComponent} from "../app/showcase/at-demo-number-input/at-demo-number-input.component";
import {AtDemoRadioComponent} from "../app/showcase/at-demo-radio/at-demo-radio.component";
import {AtDemoSelectComponent} from "../app/showcase/at-demo-select/at-demo-select.component";
import {AtDemoSwitchComponent} from "../app/showcase/at-demo-switch/at-demo-switch.component";
import {AtDemoSliderComponent} from "../app/showcase/at-demo-slider/at-demo-slider.component";
import {AtDemoTextareaComponent} from "../app/showcase/at-demo-textarea/at-demo-textarea.component";
import {IntroComponent} from "../app/showcase/intro/intro.component";
import {StartupComponent} from "../app/showcase/startup/startup.component";
import {UpdateLogComponent} from "../app/showcase/update-log/update-log.component";
import {InstallComponent} from "../app/showcase/install/install.component";
import {ConnectComponent} from "../app/showcase/connect/connect.component";
import {AtDemoPagenationComponent} from "../app/showcase/at-demo-pagenation/at-demo-pagenation.component";
import {AtDemoDropdownComponent} from "../app/showcase/at-demo-dropdown/at-demo-dropdown.component";
import {AtDemoNotificationComponent} from "../app/showcase/at-demo-notification/at-demo-notification.component";
import {AtDemoAlertComponent} from "../app/showcase/at-demo-alert/at-demo-alert.component";
import {AtDemoBadgeComponent} from "../app/showcase/at-demo-badge/at-demo-badge.component";
import {AtDemoModalComponent} from "../app/showcase/at-demo-modal/at-demo-modal.component";
import {AtDemoLoadingbarComponent} from "../app/showcase/at-demo-loadingbar/at-demo-loadingbar.component";
import {AtDemoMessageComponent} from "../app/showcase/at-demo-message/at-demo-message.component";
import {AtDemoPopoverComponent} from "../app/showcase/at-demo-popover/at-demo-popover.component";
import {AtDemoProgressComponent} from "../app/showcase/at-demo-progress/at-demo-progress.component";
import {AtDemoTooltipComponent} from "../app/showcase/at-demo-tooltip/at-demo-tooltip.component";
import {AtDemoTableComponent} from "../app/showcase/at-demo-table/at-demo-table.component";
import {AtDemoBreadcrumbComponent} from "../app/showcase/at-demo-breadcrumb/at-demo-breadcrumb.component";
import {AtDemoFormComponent} from "../app/showcase/at-demo-form/at-demo-form.component";
import {AtDemoIconComponent} from "../app/showcase/at-demo-icon/at-demo-icon.component";
import {AtDemoDatetimepickerComponent} from "../app/showcase/at-demo-datetimepicker/at-demo-datetimepicker.component";
import {AtDemoCardComponent} from "../app/showcase/at-demo-card/at-demo-card.component";
import {AtDemoTabsComponent} from "../app/showcase/at-demo-tabs/at-demo-tabs.component";
import {AtDemoStepsComponent} from "../app/showcase/at-demo-steps/at-demo-steps.component";
import {AtDemoTimelineComponent} from "../app/showcase/at-demo-timeline/at-demo-timeline.component";
import {AtDemoAffixComponent} from "../app/showcase/at-demo-affix/at-demo-affix.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'components/introduction', pathMatch: 'full'},
  {
    path: 'components', component: AtDemoComponentsComponent,
    children: [
      {path: 'button', component: AtDemoButtonComponent},
      {path: 'layout', component: AtDemoLayoutComponent},
      {path: 'icon', component: AtDemoIconComponent},
      {path: 'tag', component: AtDemoTagComponent},
      {path: 'menu', component: AtDemoMenuComponent},
      {path: 'checkbox', component: AtDemoCheckboxComponent},
      {path: 'input', component: AtDemoInputComponent},
      {path: 'input-number', component: AtDemoNumberInputComponent},
      {path: 'radio', component: AtDemoRadioComponent},
      {path: 'select', component: AtDemoSelectComponent},
      {path: 'switch', component: AtDemoSwitchComponent},
      {path: 'slider', component: AtDemoSliderComponent},
      {path: 'textarea', component: AtDemoTextareaComponent},
      {path: 'dropdown', component: AtDemoDropdownComponent},
      {path: 'pagenation', component: AtDemoPagenationComponent},

      {path: 'introduction', component: IntroComponent},
      {path: 'quickstart', component: StartupComponent},
      {path: 'changelog', component: UpdateLogComponent},
      {path: 'installation', component: InstallComponent},


      {path: 'notification', component: AtDemoNotificationComponent},
      {path: 'card', component: AtDemoCardComponent},
      {path: 'breadcrumb', component: AtDemoBreadcrumbComponent},
      {path: 'alert', component: AtDemoAlertComponent},
      {path: 'badge', component: AtDemoBadgeComponent},
      {path: 'loading-bar', component: AtDemoLoadingbarComponent},
      {path: 'modal', component: AtDemoModalComponent},
      {path: 'slider', component: AtDemoSliderComponent},
      {path: 'message', component: AtDemoMessageComponent},
      {path: 'popover', component: AtDemoPopoverComponent},
      {path: 'progress', component: AtDemoProgressComponent},
      {path: 'tooltip', component: AtDemoTooltipComponent},
      {path: 'table', component: AtDemoTableComponent},
      {path: 'form', component: AtDemoFormComponent},
      {path: 'datepicker', component: AtDemoDatetimepickerComponent},
      {path: 'tab', component: AtDemoTabsComponent},
      {path: 'steps', component: AtDemoStepsComponent},
      {path: 'time-line', component: AtDemoTimelineComponent},
      {path: 'affix', component: AtDemoAffixComponent}
    ]

  },
  {path: 'connect', component: ConnectComponent}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});

