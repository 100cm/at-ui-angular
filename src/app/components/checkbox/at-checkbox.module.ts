import {OverlayModule}            from '@angular/cdk/overlay';
import {CommonModule}             from '@angular/common';
import {NgModule}                 from '@angular/core';
import {FormsModule}              from '@angular/forms';
import {AtCheckboxComponent}      from "./at-checkbox.component";
import {AtCheckboxGroupComponent} from "./checkbox-group/at-checkbox-group.component";


@NgModule({
            imports: [CommonModule, FormsModule, OverlayModule],
            declarations: [AtCheckboxComponent, AtCheckboxGroupComponent],
            exports: [AtCheckboxComponent, AtCheckboxGroupComponent]
          })
export class AtCheckboxModule {
}
