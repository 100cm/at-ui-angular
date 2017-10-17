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

const appRoutes: Routes = [
  {path: '', redirectTo: 'components/button', pathMatch: 'full'},
  {
    path: 'components', component: AtDemoComponentsComponent,
    children: [
      {path: 'button', component: AtDemoButtonComponent},
      {path: 'layout', component: AtDemoLayoutComponent},
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
      {path: 'installation', component: InstallComponent}
    ]

  },
  {path: 'connect', component: ConnectComponent}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});

