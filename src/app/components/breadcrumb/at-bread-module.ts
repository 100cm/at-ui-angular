import {NgModule}             from "@angular/core";
import {CommonModule}         from "@angular/common";
import {BreadcrumbComponent}  from "./breadcrumb.component";
import {AtBreadItemComponent} from "./breadcrumb-item/at-bread-item.component";
@NgModule({
            imports: [CommonModule,],
            declarations: [BreadcrumbComponent,AtBreadItemComponent],
            exports:[BreadcrumbComponent,AtBreadItemComponent]
          })
export class AtBreadModule {
}
