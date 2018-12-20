import {
  Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef,
  ViewChild
}                         from '@angular/core';
import {AtThDirective}    from './at-th.directive';
import {AtTheadDirective} from './at-thead.directive';

@Component({
  selector: 'at-table',
  template: `
    <div class="at-table at-table--{{size}}"
         [ngStyle]="{height:height ? height+'px' :''}"
         [ngClass]="{'at-table--fixHeight': atFixed,'at-table--stripe ':stripe}"
    >
      <div class="at-table__content"
           [ngStyle]="{height: height && atFixed ? height+'px' :''}">
        <div class="at-table__header" #fix_head>
          <table [class.at-table--border]="border">
            <colgroup>
              <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'"
                   [style.minWidth]="th.atWidth+'px'">
            </colgroup>
            <ng-content select="[at-thead]"></ng-content>
          </table>
        </div>
        <div class="at-table__body"
             [ngStyle]="{height:height && atFixed  ? height-marginTop/2+'px' :'' ,'margin-top': atFixed ? marginTop/2 +'px' : '' }">
          <table [class.at-table--border]="border">
            <colgroup>
              <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'"
                   [style.minWidth]="th.atWidth+'px'">
            </colgroup>

            <ng-content select="[at-tbody]"></ng-content>

          </table>
        </div>
      </div>
      <div *ngIf="showFooter" class="at-table__footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `,
})
export class TableComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  _ths = []

  @Input()
  size: 'normal' | 'large' | 'small' = 'normal'
  @Input() height
  @Input()
  stripe: boolean = false;

  @Input() atFixed = false

  @Input()
  border: boolean = false

  @Input() showFooter = false

  @ContentChildren(AtThDirective, {descendants: true})
  set setThs(value: QueryList<AtThDirective>) {
    this._ths = value.toArray()
  }


  @ViewChild(AtTheadDirective, {read: ElementRef}) fixed_head: ElementRef

  marginTop = 0

  ngAfterViewInit() {
    if (this.fixed_head) {
      setTimeout(_ => {
        this.marginTop = this.fixed_head.nativeElement.offsetHeight
      })
    }
  }

}
