import { ComponentCreator } from "../core/component-creator";
import { ModalComponent } from "./modal.component";
import { ComponentCreatorBase } from "../core/component-creator-base";
export declare class ModalBaseService extends ComponentCreator<ModalComponent> {
    private base_creator;
    constructor(base_creator: ComponentCreatorBase);
}
