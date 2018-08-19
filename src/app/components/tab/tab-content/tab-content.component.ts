import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TabComponent} from "../tab.component";

@Component({
  selector: 'tab-content',
  template: `
    <ng-content></ng-content>
  `,
})
export class TabContentComponent implements OnInit {

  constructor(public _tab_component: TabComponent) {
  }


  @Input()
  title: string

  @ViewChild(TemplateRef) content

  ngOnInit() {
  }


}
