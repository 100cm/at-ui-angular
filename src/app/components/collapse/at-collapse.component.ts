import { coerceBooleanProperty }                 from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ExpandAnimation }                       from '../animations/expand-animation';
import { AtCollapseItemComponent }               from './at-collapse-item/at-collapse-item.component';

@Component({
  selector: 'at-collapse',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ExpandAnimation],
  template: `
    <div class="at-collapse" [class.at-collapse--simple]="atSimple">
      <ng-content></ng-content>
    </div>
  `
})
export class AtCollapseComponent implements OnInit {

  at_collapse_items: AtCollapseItemComponent[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  private _atAccordion = false;

  get atAccordion(): boolean {
    return this._atAccordion;
  }

  private _simple = false;

  get atSimple(): boolean {
    return this._simple;
  }

  @Input()
  set atSimple(value: boolean) {
    this._simple = coerceBooleanProperty(value);
  }

  @Input()
  set atAccordion(value: boolean) {
    this._atAccordion = coerceBooleanProperty(value);
  }

  pushItems(item: AtCollapseItemComponent): void {
    this.at_collapse_items.push(item);
  }

  setAllClose(): void {
    if (this.atAccordion) {
      this.at_collapse_items.forEach(item => {
        item.atOpen = false;
        item.atOpenChange.emit(false);
      });
    }
  }

}
