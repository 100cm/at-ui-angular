import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtUploadComponent} from './at-upload/at-upload.component';
import {AtUploadListDirective} from './at-upload-list.directive';
import {AtImagePreviewDirective} from './image-preview.directive';
import {AtDragUploadDirective} from './at-drag-upload.directive';
import {AtModalModule} from "../modal";
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  imports: [
    CommonModule,
    AtModalModule,
  ],
  exports: [AtUploadComponent, AtUploadListDirective],
  declarations: [AtUploadComponent, AtUploadListDirective, AtImagePreviewDirective, AtDragUploadDirective]
})
export class AtUploadModule {
}
