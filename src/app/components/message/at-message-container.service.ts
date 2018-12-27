import {Injectable}                from '@angular/core';
import {ComponentCreator}          from '../core/component-creator';
import {MessageContainerComponent} from './message-container/message-container.component';
import {ComponentCreatorBase}      from '../core/component-creator-base';

@Injectable({
  providedIn: 'root'
})
export class AtMessageContainerService extends ComponentCreator<MessageContainerComponent> {

  messageComponentRef

  constructor(public component_base: ComponentCreatorBase) {
    super(component_base, MessageContainerComponent)
    this.messageComponentRef = this.create()
  }

  addMessage(config) {
    this.messageComponentRef.instance.addMessage(config)
  }

}
