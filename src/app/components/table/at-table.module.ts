import {CommonModule}       from '@angular/common';
import {NgModule}           from '@angular/core';
import {TableComponent}     from "./table.component";
import {AtTbodyDirective}   from "./at-tbody.directive";
import {AtTbodyTrDirective} from "./at-tbody-tr.directive";
import {AtTdDirective}      from "./at-td.directive";
import {AtThDirective}      from "./at-th.directive";
import {AtTheadDirective}   from "./at-thead.directive";


@NgModule({
            imports: [CommonModule],
            declarations: [TableComponent, AtTbodyDirective, AtTbodyTrDirective, AtTdDirective, AtThDirective, AtTheadDirective],
            exports: [TableComponent, AtTbodyDirective, AtTbodyTrDirective, AtTdDirective, AtThDirective, AtTheadDirective]
          })
export class AtTableModule {
}
