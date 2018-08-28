import {CommonModule}  from '@angular/common';
import {NgModule}      from '@angular/core';
import {FormsModule}   from '@angular/forms';

import {AtLayoutHeaderComponent}  from './at-layout-header/at-layout-header.component';
import {AtLayoutSidebarComponent} from './at-layout-sidebar/at-layout-sidebar.component';
import {AtLayoutContentComponent} from './at-layout-content/at-layout-content.component';
import {AtLayoutBodyComponent}    from './at-layout-body/at-layout-body.component';

@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [AtLayoutHeaderComponent, AtLayoutSidebarComponent, AtLayoutContentComponent, AtLayoutBodyComponent],
            exports: [AtLayoutHeaderComponent, AtLayoutSidebarComponent, AtLayoutContentComponent, AtLayoutBodyComponent]
          })
export class AtLayoutModule {
}
