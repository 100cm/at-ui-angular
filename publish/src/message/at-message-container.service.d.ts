import { ComponentCreator } from "../core/component-creator";
import { MessageContainerComponent } from "./message-container/message-container.component";
import { ComponentCreatorBase } from "../core/component-creator-base";
export declare class AtMessageContainerService extends ComponentCreator<MessageContainerComponent> {
    component_base: ComponentCreatorBase;
    constructor(component_base: ComponentCreatorBase);
    addMessage(config: any): void;
}
