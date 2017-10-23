import {
  Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef,
  ViewChild
} from '@angular/core';
import {AtThDirective} from "./at-th.directive";

@Component({
  selector: 'atTable',
  template: `
    <div class="at-table at-table--{{size}}"
         [ngStyle]="{height:height ? height+'px' :''}"
         [ngClass]="{'at-table--fixHeight': height,'at-table--stripe ':stripe,'at-table--border':border}"
    >

      <div *ngIf="!(height === undefined)" class="at-table__content" [ngStyle]="{height:height ? height+'px' :''}">
        <div class="at-table__header" #fix_head>
          <table>
            <colgroup>
              <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'" [style.minWidth]="th.atWidth+'px'">
            </colgroup>
            <ng-template [ngTemplateOutlet]="atThead"></ng-template>
          </table>
        </div>
        <div class="at-table__body"
             [ngStyle]="{height:height ? height-marginTop/2+'px' :'' ,'margin-top':marginTop/2 +'px' }">
          <table>
            <colgroup>
              <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'" [style.minWidth]="th.atWidth+'px'">
            </colgroup>

            <ng-template [ngTemplateOutlet]="atTbody"></ng-template>

          </table>
        </div>
      </div>
      <div *ngIf="(height === undefined)" class="at-table__content">
        <div class="at-table__body">
          <table>
            <colgroup>
              <col *ngFor="let th of _ths" [style.width]="th.atWidth +'px'" [style.minWidth]="th.atWidth+'px'">
            </colgroup>
            <ng-content>
            </ng-content>
          </table>
        </div>
      </div>
      <div class="at-table__footer">
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
  @Input()
  height
  @Input()
  stripe: boolean = false;

  @Input()
  border: boolean = false

  @ContentChildren(AtThDirective, {descendants: true})
  set setThs(value: QueryList<AtThDirective>) {
    this._ths = value.toArray()
  }

  @ContentChild('fixedHead') atThead: TemplateRef<any>;
  @ContentChild('fixedBody') atTbody: TemplateRef<any>;


  @ViewChild('fix_head') fixed_head: ElementRef

  marginTop = 0

  ngAfterViewInit() {
    if (this.fixed_head) {
      setTimeout(_ => {
        this.marginTop = this.fixed_head.nativeElement.offsetHeight
      })
    }
  }

}
