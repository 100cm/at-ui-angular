import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabComponent} from "../tab.component";

@Component({
  selector: 'at-tab-set',
  template: `
    <div class="at-tab at-tab-{{position}}">
      <div class="at-tabs-bar ">
        <div class="at-tabs-nav-container">
          <div class="at-tabs-nav-wrap">
            <div class="at-tab--navs">
              <at-tab-navs
                [selected_index]="selected_index"
                [position]="position">
                <div at-tab-label *ngFor="let item of tabs;let i =index" (click)="selectTab(i)" class="at-tab-nav">
                  <ng-template [ngTemplateOutlet]="item._tabHeading">
                  </ng-template>
                </div>
              </at-tab-navs>
            </div>
          </div>
        </div>
      </div>

      <div class="at-tab--contents">
        <div class="at-tab-content">
          <at-tab-body [content]="tabs[selected_index]?._content">

          </at-tab-body>
        </div>
      </div>

    </div>
  `,

})
export class TabSetComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  @Output() change: EventEmitter<any> = new EventEmitter()

  @Input() position: 'vertical' | 'horizontal' = 'horizontal'

  @Input()
  selected_index = 0

  tabs: TabComponent[] = []

  selectTab(i) {
    this.selected_index = i
    this.change.emit(i)
  }

}
