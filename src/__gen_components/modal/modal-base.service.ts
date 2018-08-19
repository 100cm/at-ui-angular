import {Injectable} from '@angular/core';
import {ComponentCreator} from "../core/component-creator";
import {ModalComponent} from "./modal.component";
import {ComponentCreatorBase} from "../core/component-creator-base";

@Injectable()
export class ModalBaseService extends ComponentCreator<ModalComponent> {

  constructor(private base_creator: ComponentCreatorBase) {
    super(base_creator, ModalComponent)
  }

}
