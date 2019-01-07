import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonComponent }      from './button.component';
import { HollowDirective }      from './hollow/hollow.directive';

@NgModule({
            imports: [CommonModule],
            declarations: [ButtonComponent, ButtonGroupComponent, HollowDirective],
            exports: [ButtonComponent, ButtonGroupComponent, HollowDirective]
          })
export class AtButtonModule {
}
