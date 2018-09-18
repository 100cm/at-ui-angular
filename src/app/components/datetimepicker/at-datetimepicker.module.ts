import {OverlayModule}           from '@angular/cdk/overlay';
import {CommonModule}            from '@angular/common';
import {NgModule}                from '@angular/core';
import {FormsModule}             from '@angular/forms';
import {AtFormatPipe}            from "./at-format.pipe";
import {DatetimepickerComponent} from "./datetimepicker.component";
import {TimeComponent}           from "./time/time.component";
import {CalendarComponent}       from "./calendar/calendar.component";
import {AtInputModule}           from "../input/at-input.module";
import {AtGridModule}            from "../grid/at-grid.module";


@NgModule({
            imports: [CommonModule, FormsModule, OverlayModule, AtInputModule, AtGridModule],
            declarations: [AtFormatPipe, DatetimepickerComponent, TimeComponent, CalendarComponent],
            exports: [AtFormatPipe, DatetimepickerComponent, TimeComponent, CalendarComponent]
          })
export class AtDatetimepickerModule {
}
