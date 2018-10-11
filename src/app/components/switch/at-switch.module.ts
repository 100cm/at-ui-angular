import {CommonModule}    from '@angular/common';
import {NgModule}        from '@angular/core';
import {SwitchComponent} from "./switch.component";
import {FormsModule}     from "@angular/forms";

@NgModule({
            imports: [CommonModule,FormsModule],
            declarations: [SwitchComponent],
            exports: [SwitchComponent]
          })
export class AtSwitchModule {
}
