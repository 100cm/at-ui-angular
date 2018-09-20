import {CommonModule}        from '@angular/common';
import {NgModule}            from '@angular/core';
import {PagenationComponent} from "./pagenation.component";
import {AtSelectModule}      from "../select/at-select.module";
import {FormsModule}         from "@angular/forms";
import {AtI18nModule}        from "../i18n/at-i18n.module";

@NgModule({
            imports: [CommonModule, AtSelectModule, FormsModule, AtI18nModule],
            declarations: [PagenationComponent],
            exports: [PagenationComponent]
          })
export class AtPagenationModule {
}
