import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ExpandAnimation}                       from '../animations/expand-animation';
import {AtCollapseItemComponent}               from './at-collapse-item/at-collapse-item.component';
import {coerceBooleanProperty}                 from '@angular/cdk/coercion';

@Component({
  selector: 'at-collapse',
  animations: [ExpandAnimation],
  template: `
    <div class="at-collapse" [class.at-collapse--simple]="atSimple">
      <ng-content></ng-content>
    </div>
  `,
})
export class AtCollapseComponent implements OnInit {


  at_collapse_items: Array<AtCollapseItemComponent> = []

  constructor() {
  }

  ngOnInit() {
  }

  private _atAccordion = false


  get atAccordion(): boolean {
    return this._atAccordion;
  }

  private _simple = false


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

  pushItems(item: AtCollapseItemComponent) {
    this.at_collapse_items.push(item)
  }

  setAllClose() {
    if (this.atAccordion) {
      this.at_collapse_items.forEach(item => {
        item.atOpen = false
      })
    }
  }

}
