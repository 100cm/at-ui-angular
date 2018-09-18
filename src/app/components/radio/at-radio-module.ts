import {NgModule}             from "@angular/core";
import {CommonModule}         from "@angular/common";
import {RadioButtonComponent} from "./radio-button/radio-button.component";
import {RadioGroupComponent}  from "./radio-group/radio-group.component";
import {RadioComponent}       from "./radio.component";
import {FormsModule}          from "@angular/forms";


@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [RadioButtonComponent, RadioGroupComponent, RadioComponent],
            exports: [RadioButtonComponent, RadioGroupComponent, RadioComponent],
          })
export class AtRadioModule {
}
