import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BreadcrumbComponent}                   from "../breadcrumb.component";

@Component({
             selector: 'at-bread-item,[at-bread-item]',
             template: `
               <span class="at_breadcrumb__text">
      <ng-content></ng-content>
    </span>
               <span *ngIf="!isLast" class="at-breadcrumb__separator">
                 <ng-container *ngIf="!isString();else custom_sep ">
                     {{separator}}
                 </ng-container>
               <ng-template #custom_sep>
                  <ng-template [ngTemplateOutlet]="separator"></ng-template>
               </ng-template>
               </span>
             `,
           })
export class AtBreadItemComponent implements OnInit {

  constructor(private at_bread: BreadcrumbComponent) {
  }

  ngOnInit() {
    this.at_bread.pushItem(this)
  }


  get isLast() {
    return this.at_bread.items[this.at_bread.items.length - 1] == this
  }

  get separator() {
    return this.at_bread.separator;
  }

  isString() {
    return this.separator instanceof String
  }
}
