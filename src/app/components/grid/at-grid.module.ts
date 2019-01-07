import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { ColComponent }  from './col/col.component';
import { RowComponent }  from './row/row.component';

@NgModule({
            imports: [CommonModule],
            declarations: [RowComponent, ColComponent],
            exports: [RowComponent, ColComponent]
          })
export class AtGridModule {
}
