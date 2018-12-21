import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
}                        from '@angular/core';
import {TabSetComponent} from './tab-set/tab-set.component';

@Component({
  selector: 'at-tab, [at-tab]',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {


  ngOnInit() {
    this._tabSetComponent.addTab(this)
  }

  @ContentChild('atTabHeading') _tabHeading: TemplateRef<any>;

  @ViewChild(TemplateRef) _content: TemplateRef<any>;

  tab_contents = []

  constructor(private _tabSetComponent: TabSetComponent) {

  }

  ngOnDestroy() {
    this._tabSetComponent.tabs.splice(this._tabSetComponent.tabs.indexOf(this), 1);
  }

}
