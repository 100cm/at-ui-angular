import { ComponentRef, Type } from "@angular/core";
import { ComponentCreatorBase } from "./component-creator-base";
export declare class ComponentCreator<T> {
    private base;
    private component;
    constructor(base: ComponentCreatorBase, component?: Type<T>);
    domElem: HTMLElement;
    componentRef: ComponentRef<T>;
    create(): void;
    remove(): void;
    getElem<T>(): ComponentRef<T>;
    getDom(): HTMLElement;
}
