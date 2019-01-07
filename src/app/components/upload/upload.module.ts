import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtModalModule } from '../modal/at-modal.module';
import { AtDragUploadDirective } from './at-drag-upload.directive';
import { AtUploadListDirective } from './at-upload-list.directive';
import { AtUploadComponent } from './at-upload/at-upload.component';
import { AtImagePreviewDirective } from './image-preview.directive';

@NgModule({
  imports: [
    CommonModule,
    AtModalModule
  ],
  exports: [AtUploadComponent, AtUploadListDirective],
  declarations: [AtUploadComponent, AtUploadListDirective, AtImagePreviewDirective, AtDragUploadDirective]
})
export class AtUploadModule {
}
