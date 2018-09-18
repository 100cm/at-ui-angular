import {CommonModule}        from '@angular/common';
import {NgModule}            from '@angular/core';
import {TabBodyComponent}    from "./tab-body/tab-body.component";
import {TabComponent}        from "./tab.component";
import {TabContentComponent} from "./tab-content/tab-content.component";
import {TabNavsComponent}    from "./tab-navs/tab-navs.component";
import {TabSetComponent}     from "./tab-set/tab-set.component";
import {AtTabInkDirective}   from "./at-tab-ink.directive";
import {TabLabelDirective}   from "./tab-label.directive";

@NgModule({
            imports: [CommonModule],
            declarations: [TabBodyComponent, TabComponent, TabContentComponent, TabNavsComponent, TabSetComponent, AtTabInkDirective, TabLabelDirective],
            exports: [TabBodyComponent, TabComponent, TabContentComponent, TabNavsComponent, TabSetComponent, TabLabelDirective, AtTabInkDirective],
          })
export class AtTabModule {
}
