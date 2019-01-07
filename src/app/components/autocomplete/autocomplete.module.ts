import { OverlayModule }         from '@angular/cdk/overlay';
import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { AutoCompleteComponent } from './autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [AutoCompleteComponent],
  exports: [AutoCompleteComponent]
})
export class AutoCompleteModule {
}
