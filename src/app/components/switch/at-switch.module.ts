import { CommonModule }    from '@angular/common';
import { NgModule }        from '@angular/core';
import { FormsModule }     from '@angular/forms';
import { SwitchComponent } from './switch.component';

@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [SwitchComponent],
            exports: [SwitchComponent]
          })
export class AtSwitchModule {
}
