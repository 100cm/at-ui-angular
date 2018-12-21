import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild
}                          from '@angular/core';
import {TabLabelDirective} from '../tab-label.directive';
import {AtTabInkDirective} from '../at-tab-ink.directive';

@Component({
  selector: 'at-tab-navs',
  template: `
    <div AtTabInk [atPositionMode]="position"
         [ngStyle]="{display: showInk ? '': 'none'}"
         class="at-tabs-ink-bar at-tabs-ink-bar-animated"></div>
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TabNavsComponent implements OnInit {


  private _labelWrappers: QueryList<TabLabelDirective>;
  @ViewChild(AtTabInkDirective) _inkBar: AtTabInkDirective;


  get selected_index() {
    return this._selected_index
  }

  get labelWrappers(): QueryList<TabLabelDirective> {
    return this._labelWrappers;
  }

  @ContentChildren(TabLabelDirective)
  set labelWrappers(value: QueryList<TabLabelDirective>) {
    this._labelWrappers = value;
    this.alignInk(this.selected_index)
  }

  @Input() showInk = true

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


  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    if (this.showInk) {
      this._inkBar.alignToElement(this._labelWrappers.toArray()[0].elementRef.nativeElement)
    }
  }

  alignInk(index) {
    if (this._labelWrappers && this.showInk) {
      if (this._labelWrappers.toArray()[index]) {
        this._inkBar.alignToElement(this._labelWrappers.toArray()[index].elementRef.nativeElement)
      }

    }
  }

}
