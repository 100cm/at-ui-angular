import { OverlayModule }           from '@angular/cdk/overlay';
import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { AtGridModule }            from '../grid/at-grid.module';
import { AtI18nModule }            from '../i18n/at-i18n.module';
import { AtInputModule }           from '../input/at-input.module';
import { AtFormatPipe }            from './at-format.pipe';
import { CalendarComponent }       from './calendar/calendar.component';
import { DatetimepickerComponent } from './datetimepicker.component';
import { TimeComponent }           from './time/time.component';

@NgModule({
            imports: [CommonModule, AtI18nModule, FormsModule, OverlayModule, AtInputModule, AtGridModule],
            declarations: [AtFormatPipe, DatetimepickerComponent, TimeComponent, CalendarComponent],
            exports: [AtFormatPipe, DatetimepickerComponent, TimeComponent, CalendarComponent]
          })
export class AtDatetimepickerModule {
}
