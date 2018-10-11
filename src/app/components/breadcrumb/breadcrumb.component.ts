import {Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef} from '@angular/core';
import {AtBreadItemComponent}                                                            from "./breadcrumb-item/at-bread-item.component";

@Component({
             selector: 'at-breadcrumb',
             template: `
               <div class="at-breadcrumb">
                 <ng-content></ng-content>
               </div>
             `,
           })
export class BreadcrumbComponent implements OnInit {

  constructor() {
  }

  items: Array<AtBreadItemComponent> = []

  pushItem(item) {
    this.items.push(item)
  }

  ngOnInit() {
  }

  @Input() separator: string | TemplateRef<any> = '/'


}
