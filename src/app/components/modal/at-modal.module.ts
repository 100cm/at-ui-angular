import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from "./modal.component";
import {ModalBodyDirective} from "./modal-body.directive";
import {ModalBaseService} from "./modal-base.service";
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [ModalComponent, ModalBodyDirective],
  providers: [ModalBaseService],
  entryComponents: [ModalComponent],
  declarations: [ModalComponent, ModalBodyDirective]
})
export class AtModalModule {
}
