import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RadioGroupComponent }  from './radio-group/radio-group.component';
import { RadioComponent }       from './radio.component';

@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [RadioButtonComponent, RadioGroupComponent, RadioComponent],
            exports: [RadioButtonComponent, RadioGroupComponent, RadioComponent]
          })
export class AtRadioModule {
}
