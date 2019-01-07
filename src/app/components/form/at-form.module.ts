import { OverlayModule }                                                                        from '@angular/cdk/overlay';
import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { AtFormControlComponent }  from './at-form-control/at-form-control.component';
import { AtFormErrorDirective }    from './at-form-error.directive';
import { AtFormFeedbackDirective } from './at-form-feedback.directive';
import { AtFormItemDirective }     from './at-form-item.directive';
import { AtFormItemComponent }     from './at-form-item/at-form-item.component';
import { AtFormLabelComponent }    from './at-form-label/at-form-label.component';
import { AtFormDirective }         from './at-form.directive';
import { FormComponent }           from './form.component';

@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [AtFormControlComponent, AtFormItemDirective, AtFormDirective,  AtFormLabelComponent
              , AtFormItemComponent, FormComponent, AtFormErrorDirective, AtFormFeedbackDirective],
            exports: [AtFormControlComponent, AtFormLabelComponent, AtFormItemDirective, AtFormDirective
              , AtFormItemComponent, FormComponent, AtFormErrorDirective, AtFormFeedbackDirective]
          })
export class AtFormModule {
}
