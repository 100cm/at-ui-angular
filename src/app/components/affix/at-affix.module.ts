import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtGlobalMonitorService } from '../at-global-monitor.service';
import { AtAffixComponent } from './at-affix/at-affix.component';

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
