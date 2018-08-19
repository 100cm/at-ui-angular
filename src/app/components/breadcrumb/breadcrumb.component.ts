import {Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef} from '@angular/core';
import {AtBreadItemDirective} from "./breadcrumb-item/at-bread-item.directive";

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

  ngOnInit() {
  }

  items: Array<AtBreadItemDirective> = []

  @Input() separator = '/'

  @ContentChild('breadItem') breadItem: TemplateRef<any>;

  // @ContentChildren(AtBreadItemDirective)
  // set setThs(value: QueryList<AtBreadItemDirective>) {
  //   let items = value.toArray()
  //   items.forEach((item) => {
  //     item.separator = this.separator
  //   })
  // }


}
