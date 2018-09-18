import {CommonModule}     from '@angular/common';
import {NgModule}         from '@angular/core';
import {FormsModule}      from "@angular/forms";
import {AtInputDirective} from "./at-input.directive";
import {InputComponent}   from "./input.component";



@NgModule({
            imports: [CommonModule,FormsModule],
            declarations: [AtInputDirective,InputComponent],
            exports: [AtInputDirective,InputComponent]
          })
export class AtInputModule {
}
