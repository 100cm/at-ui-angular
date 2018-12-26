import {ObserversModule} from '@angular/cdk/observers';
import {CommonModule}    from '@angular/common';
import {NgModule}        from '@angular/core';

import {AtTabBodyComponent}    from './at-tab-body.component';
import {AtTabLabelDirective}   from './at-tab-label.directive';
import {AtTabComponent}        from './at-tab.component';
import {AtTabsInkBarDirective} from './at-tabs-ink-bar.directive';
import {AtTabsNavComponent}    from './at-tabs-nav.component';
import {AtTabsetComponent}     from './at-tabset.component';
import {AtIconModule}          from '../icon/at-icon.module';

@NgModule({
  declarations: [AtTabComponent, AtTabsetComponent, AtTabsNavComponent, AtTabLabelDirective, AtTabsInkBarDirective, AtTabBodyComponent],
  exports: [AtTabComponent, AtTabsetComponent, AtTabsNavComponent, AtTabLabelDirective, AtTabsInkBarDirective, AtTabBodyComponent],
  imports: [CommonModule, ObserversModule,AtIconModule]
})
export class AtTabModule {
}
