import {
  Component, ContentChild, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef,
  ViewEncapsulation
}                            from '@angular/core';
import {TabContentComponent} from "./tab-content/tab-content.component";
import {TabSetComponent}     from "./tab-set/tab-set.component";

@Component({
             selector: 'at-tab, [at-tab]',
             encapsulation: ViewEncapsulation.None,
             template: `
               <ng-template>
                 <ng-content></ng-content>
               </ng-template>
             `,
           })
export class TabComponent implements OnInit {

  ngOnInit() {
    this._tabSetComponent.tabs.push(this)
  }

  @ContentChild('atTabHeading') _tabHeading: TemplateRef<any>;

  @ViewChild(TemplateRef) _content: TemplateRef<any>;

  tab_contents = []


  constructor(private _tabSetComponent: TabSetComponent) {

  }


}
