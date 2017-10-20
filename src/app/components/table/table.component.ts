import {
  Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef,
  ViewChild
} from '@angular/core';
import {AtThDirective} from "./at-th.directive";

@Component({
  selector: 'atTable',
  templateUrl: './table.component.html',
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
