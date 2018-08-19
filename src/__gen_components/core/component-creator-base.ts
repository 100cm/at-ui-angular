import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from "@angular/core";

@Injectable()
export class ComponentCreatorBase {

  constructor(public componentFactoryResolver: ComponentFactoryResolver,
              public appRef: ApplicationRef,
              public injector: Injector) {

  }

}
