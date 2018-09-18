import {CommonModule}        from '@angular/common';
import {NgModule}            from '@angular/core';
import {PagenationComponent} from "./pagenation.component";
import {AtSelectModule}      from "../select/at-select.module";
import {FormsModule}         from "@angular/forms";

@NgModule({
            imports: [CommonModule, AtSelectModule, FormsModule],
            declarations: [PagenationComponent],
            exports: [PagenationComponent]
          })
export class AtPagenationModule {
}
