import {OverlayModule}   from '@angular/cdk/overlay';
import {CommonModule}    from '@angular/common';
import {NgModule}        from '@angular/core';
import {DrawerComponent} from "./drawer.component";


@NgModule({
            imports: [CommonModule, OverlayModule],
            declarations: [DrawerComponent],
            exports: [DrawerComponent]
          })
export class AtDrawerModule {
}
