import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { AtBreadItemComponent } from './breadcrumb-item/at-bread-item.component';
import { BreadcrumbComponent }  from './breadcrumb.component';
@NgModule({
            imports: [CommonModule],
            declarations: [BreadcrumbComponent, AtBreadItemComponent],
            exports: [BreadcrumbComponent, AtBreadItemComponent]
          })
export class AtBreadModule {
}
