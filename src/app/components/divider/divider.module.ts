import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtDividerComponent } from './at-divider/at-divider.component';

@NgModule({
  declarations: [AtDividerComponent],
  imports: [
    CommonModule
  ],
  exports: [AtDividerComponent]
})
export class AtDividerModule {
}
