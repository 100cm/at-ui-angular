import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from "./modal.component";
import {ModalBodyDirective} from "./modal-body.directive";
import {ModalBaseService} from "./modal-base.service";
import {OverlayModule} from "@angular/cdk/overlay";
import {AtModalService} from "./at-modal.service";

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [ModalComponent, ModalBodyDirective],
  providers: [ModalBaseService,AtModalService],
  entryComponents: [ModalComponent],
  declarations: [ModalComponent, ModalBodyDirective]
})
export class AtModalModule {
}
