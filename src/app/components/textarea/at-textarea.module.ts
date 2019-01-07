import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { TextareaComponent } from './textarea.component';

@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [TextareaComponent],
            exports: [TextareaComponent]
          })
export class AtTextareaModule {
}
