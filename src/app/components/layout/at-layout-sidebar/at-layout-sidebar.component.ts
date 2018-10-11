import {Component, HostBinding, Input, OnInit, Optional} from '@angular/core';
import {AtLayoutBodyComponent}                           from "../at-layout-body/at-layout-body.component";


@Component({
             selector: 'at-layout-sidebar',
             template: `
               <div class="at-layout-sidebar-children">
                 <ng-content>
                 </ng-content>
               </div>`,
             host: {'[class.at-layout-sidebar]': 'true',}
           })
export class AtLayoutSidebarComponent implements OnInit {

  constructor(@Optional() private atLayoutBody: AtLayoutBodyComponent) {
  }

  @Input() atWidth = 256

  ngOnInit() {
    if (this.atLayoutBody) {
      this.atLayoutBody.hasSideBar = true;
    }
  }

  @HostBinding('style.flex')
  get setFlex(): string {
    return `0 0 ${this.atWidth}px`;

  }

  @HostBinding('style.max-width.px')
  @HostBinding('style.min-width.px')
  @HostBinding('style.width.px')
  get setWidth(): number {
    return this.atWidth;

  }


}
