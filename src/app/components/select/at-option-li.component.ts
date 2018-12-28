import {Component, ElementRef, Input} from '@angular/core';
import {isNotNil}                     from '../utils/class-helper'
import {AtOptionComponent}            from './at-option.component';

@Component({
  selector: '[at-option-li]',
  template: `
    <ng-container *ngIf="atOption.atCustomContent">
      <ng-template [ngTemplateOutlet]="atOption.template"></ng-template>
    </ng-container>
    <ng-container *ngIf="!atOption.atCustomContent">
      {{atOption.atLabel}}
    </ng-container>
  `,
  host: {
    '[class.at-select__option]': 'true',
    '[class.at-select__option--selected]': 'atOption.selected && !atOption.atDisabled',
    '[attr.unselectable]': '"unselectable"',
    '[style.user-select]': '"none"'
  }
})
export class AtOptionLiComponent {
  el: Element;
  selected = false;
  active = false;
  @Input() atOption: AtOptionComponent;
  @Input() atShowActive = true;
  // tslint:disable-next-line:no-any
  @Input() compareWith: (o1: any, o2: any) => boolean = (o1, o2) => o1 === o2;

  @Input()
  set atActiveOption(value: AtOptionComponent) {
    if (value) {
      this.active = this.compareWith(value.atValue, this.atOption.atValue);
    } else {
      this.active = false;
    }
  }

  @Input()
  // tslint:disable-next-line:no-any
  set atListOfSelectedValue(valueList: any[]) {
    this.selected = isNotNil(valueList.find(v => this.compareWith(v, this.atOption.atValue)));
  }

  constructor(private elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }
}
