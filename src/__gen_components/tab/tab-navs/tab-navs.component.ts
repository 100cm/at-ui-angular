import {Component, ContentChildren, Input, OnInit, QueryList, ViewChild} from '@angular/core';
import {TabLabelDirective} from "../tab-label.directive";
import {AtTabInkDirective} from "../at-tab-ink.directive";

@Component({
  selector: 'at-tab-navs',
  template: `
    <div AtTabInk [atPositionMode]="position" class="at-tabs-ink-bar at-tabs-ink-bar-animated"></div>
    <ng-content></ng-content>
  `,

})
export class TabNavsComponent implements OnInit {


  @ContentChildren(TabLabelDirective) _labelWrappers: QueryList<TabLabelDirective>;
  @ViewChild(AtTabInkDirective) _inkBar: AtTabInkDirective;


  get selected_index() {
    return this._selected_index
  }

  _selected_index = 0
  _position_modal = 'horizontal'

  @Input()
  set position(value) {
    this._position_modal = value
    this.alignInk(this.selected_index)
  }

  get position() {
    return this._position_modal
  }


  @Input()
  set selected_index(value) {
    this._selected_index = value
    this.alignInk(value)
  }


  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this._inkBar.alignToElement(this._labelWrappers.toArray()[0].elementRef.nativeElement)
  }

  alignInk(index) {
    if (this._labelWrappers) {
      this._inkBar.alignToElement(this._labelWrappers.toArray()[index].elementRef.nativeElement)
    }
  }

}
