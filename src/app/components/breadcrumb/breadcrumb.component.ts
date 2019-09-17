import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import {
  AtBreadItemComponent
}                                                                                          from './breadcrumb-item/at-bread-item.component';

@Component({
  selector: 'at-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="at-breadcrumb">
      <ng-content></ng-content>
    </div>
  `
})
export class BreadcrumbComponent implements OnInit {

  constructor() {
  }

  items: AtBreadItemComponent[] = [];

  pushItem(item: AtBreadItemComponent): void {
    this.items.push(item);
  }

  ngOnInit(): void {
  }

  @Input() separator: string | TemplateRef<void> = '/';

}
