import {NgModule}              from '@angular/core';
import {CommonModule}          from '@angular/common';
import {AutoCompleteComponent} from './autocomplete.component';
import {OverlayModule}         from '@angular/cdk/overlay';

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
