import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtAffixComponent} from './at-affix/at-affix.component';
import {AtGlobalMonitorService} from "../at-global-monitor.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AtAffixComponent],
  providers: [AtGlobalMonitorService],
  declarations: [AtAffixComponent]
})
export class AtAffixModule {
}
