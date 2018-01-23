import { ApplicationRef, ComponentFactoryResolver, Injector } from "@angular/core";
export declare class ComponentCreatorBase {
    componentFactoryResolver: ComponentFactoryResolver;
    appRef: ApplicationRef;
    injector: Injector;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
}
