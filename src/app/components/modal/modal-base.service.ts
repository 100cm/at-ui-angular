import { Injectable } from '@angular/core';
import { ComponentCreator } from '../core/component-creator';
import { ComponentCreatorBase } from '../core/component-creator-base';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalBaseService extends ComponentCreator<ModalComponent> {

  constructor(private base_creator: ComponentCreatorBase) {
    super(base_creator, ModalComponent);
  }

}
