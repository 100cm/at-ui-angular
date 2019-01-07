import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
import { AtTbodyTrDirective } from './at-tbody-tr.directive';
import { AtTbodyDirective }   from './at-tbody.directive';
import { AtTdDirective }      from './at-td.directive';
import { AtThDirective }      from './at-th.directive';
import { AtTheadDirective }   from './at-thead.directive';
import { TableComponent }     from './table.component';

import { AtExpandThComponent } from './at-expand-th/at-expand-th.component';
import { AtExpandComponent } from './at-expand/at-expand.component';

@NgModule({
            imports: [CommonModule],
            declarations: [TableComponent, AtTbodyDirective, AtTbodyTrDirective, AtTdDirective, AtThDirective, AtTheadDirective, AtExpandComponent, AtExpandThComponent],
            exports: [TableComponent, AtTbodyDirective, AtTbodyTrDirective, AtTdDirective, AtThDirective, AtTheadDirective, AtExpandComponent, AtExpandThComponent]
          })
export class AtTableModule {
}
