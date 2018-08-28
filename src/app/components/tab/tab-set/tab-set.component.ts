import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabComponent}                                   from "../tab.component";

@Component({
             selector: 'at-tab-set',
             template: `
               <div class="at-tab at-tab-{{position}} at-tab-{{atMode}}">
                 <div class="at-tabs-bar at-tab-{{atSize}}">
                   <div class="at-tabs-nav-container">
                     <div class="at-tabs-nav-wrap">
                       <div class="at-tab--navs">
                         <at-tab-navs
                           [showInk]="atMode=='ink'"
                           [selected_index]="atIndex"
                           [position]="position">
                           <div at-tab-label *ngFor="let item of tabs;let i =index" (click)="selectTab(i)"
                                [class.at-tab-nav-card]="atMode == 'card'"
                                [class.at-tab-nav-card-active]="atIndex == i"
                                class="at-tab-nav">
                             <ng-template [ngTemplateOutlet]="item._tabHeading">
                             </ng-template>
                           </div>
                         </at-tab-navs>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div class="at-tab--contents">
                   <div class="at-tab-content at-tab-content-animated"
                        [style.marginLeft.%]="-(atIndex)*100"
                   >
                     <at-tab-body
                       class="at-tab-pane"
                       [class.at-tab-pane-unactive]="atIndex != i"
                       [class.at-tab-pane-active]="atIndex == i"
                       *ngFor="let item of tabs;let i = index" [content]="item?._content">
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

  @Output() atSelectChange: EventEmitter<any> = new EventEmitter()

  @Input() position: 'vertical' | 'horizontal' = 'horizontal'

  @Input() atMode: 'ink' | 'card' = 'ink'

  @Input() atSize: 'small' | 'normal' | 'large' = 'normal'

  @Input()
  atIndex = 0

  tabs: TabComponent[] = []

  selectTab(i) {
    this.atIndex = i
    this.atSelectChange.emit(i)
  }

}
