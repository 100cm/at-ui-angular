import { OverlayModule }                 from '@angular/cdk/overlay';
import { CommonModule }                  from '@angular/common';
import { NgModule }                      from '@angular/core';
import { FormsModule }                   from '@angular/forms';
import { AtI18nModule }                  from '../i18n/at-i18n.module';
import { AtOptionContainerComponent }    from './at-option-container.component';
import { AtOptionGroupComponent }        from './at-option-group.component';
import { AtOptionLiComponent }           from './at-option-li.component';
import { AtOptionComponent }             from './at-option.component';
import { atSubOptionPipe, AtOptionPipe } from './at-option.pipe';
import { AtSelectControlService }        from './at-select-control.service';
import { AtSelectTopControlComponent }   from './at-select-top-control.component';
import { AtSelectUnselectableDirective } from './at-select-unselectable.directive';
import { AtSelectComponent }             from './at-select.component';

@NgModule({
  imports: [CommonModule, FormsModule, OverlayModule, AtI18nModule],
  providers: [AtSelectControlService],
  declarations: [AtOptionPipe, atSubOptionPipe, AtOptionComponent, AtSelectComponent, AtOptionContainerComponent, AtOptionGroupComponent, AtOptionLiComponent, AtSelectTopControlComponent, AtSelectUnselectableDirective],
  exports: [AtOptionComponent, AtSelectComponent, AtOptionContainerComponent, AtOptionGroupComponent, AtSelectTopControlComponent]
})
export class AtSelectModule {
}
