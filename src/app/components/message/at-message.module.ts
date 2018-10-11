import {CommonModule}              from '@angular/common';
import {NgModule}                  from '@angular/core';
import {FormsModule}               from "@angular/forms";
import {MessageContainerComponent} from "./message-container/message-container.component";
import {MessageComponent}          from "./message/message.component";


@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [MessageContainerComponent, MessageComponent],
            entryComponents: [MessageContainerComponent, MessageComponent],
          })
export class AtMessageModule {
}
