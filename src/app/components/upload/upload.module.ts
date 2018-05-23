import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtUploadComponent} from './at-upload/at-upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AtUploadComponent],
  declarations: [AtUploadComponent]
})
export class AtUploadModule {
}
