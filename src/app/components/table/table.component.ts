import {
  Component, ContentChild, ContentChildren, ElementRef, Host, Input, OnInit, Optional, QueryList, TemplateRef,
  ViewChild
}                           from '@angular/core';
import { AtThDirective }    from './at-th.directive';
import { AtTheadDirective } from './at-thead.directive';

@Component({
  selector: 'at-table',
  template: `
    <div class="at-table at-table--{{size}}"
         [ngStyle]="{height:height ? height+'px' :''}"
         [ngClass]="{'at-table--fixHeight': atFixed,'at-table--stripe ':stripe}"
    >
      <ng-template #tbody>
        <ng-content select="[at-tbody]"></ng-content>
      </ng-template>

      <ng-template #thead>
        <ng-content select="[at-thead]"></ng-content>
      </ng-template>

      <ng-container *ngIf="atFixed; else commontable">
        <div class="at-table__content"
             [ngStyle]="{height: height && atFixed ? height+'px' :''}">
          <div class="at-table__header" #fix_head>
            <table [class.at-table--border]="border">
              <colgroup>
                <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'"
                     [style.minWidth]="th.atWidth+'px'">
              </colgroup>
              <ng-template [ngTemplateOutlet]="thead"></ng-template>

            </table>
          </div>
          <div class="at-table__body"
               [ngStyle]="{height:height && atFixed  ? height-marginTop/2+'px' :'' ,'margin-top': atFixed ? marginTop/2 +'px' : '' }">
            <table [class.at-table--border]="border">
              <colgroup>
                <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'"
                     [style.minWidth]="th.atWidth+'px'">
              </colgroup>
              <ng-template [ngTemplateOutlet]="tbody"></ng-template>
            </table>
          </div>
        </div>
      </ng-container>
      <ng-template #commontable>
        <ng-template [ngTemplateOutlet]="table"></ng-template>
      </ng-template>
      <ng-template #table>
        <div class="at-table__content">
          <div class="at-table__body">
            <table [class.at-table--border]="border">
              <colgroup>
                <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'"
                     [style.minWidth]="th.atWidth+'px'">
              </colgroup>
              <ng-template [ngTemplateOutlet]="thead"></ng-template>
              <ng-template [ngTemplateOutlet]="tbody"></ng-template>
            </table>
          </div>
        </div>
      </ng-template>
      <div *ngIf="showFooter" class="at-table__footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `
})
export class TableComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  _ths = [];

  @Input()
  size: 'normal' | 'large' | 'small' = 'normal';
  @Input() height;
  @Input()
  stripe: boolean = false;

  @Input() atFixed = false;

  @Input()
  border: boolean = false;

  @Input() showFooter = true;

  @ContentChildren(AtThDirective, {descendants: true})
  set setThs(value: QueryList<AtThDirective>) {
    this._ths = value.toArray();
  }

  @ViewChild(AtTheadDirective, { read: ElementRef, static: false }) fixed_head: ElementRef;

  marginTop = 0;

  ngAfterViewInit() {
    if (this.fixed_head) {
      setTimeout(_ => {
        this.marginTop = this.fixed_head.nativeElement.offsetHeight;
      });
    }
  }

}
