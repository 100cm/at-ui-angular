import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtModalService } from './at-modal.service';
import { ModalBaseService } from './modal-base.service';
import { ModalBodyDirective } from './modal-body.directive';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [ModalComponent, ModalBodyDirective],
  providers: [ModalBaseService, AtModalService],
  entryComponents: [ModalComponent],
  declarations: [ModalComponent, ModalBodyDirective]
})
export class AtModalModule {
}
