import {Component, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {HOST}                                                                                     from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: '[at-td]',
  template: `
    <span [style.padding-left.px]="atIndentSize"></span>
    <span class="at-table__td__expand__icon" *ngIf="atShowExpand" (click)="clickExpand()"><i
      class="icon" [class.icon-plus-square]="!atExpand" [class.icon-minus-square]="atExpand"></i></span>
    <ng-content></ng-content>
  `,
})
export class AtTdDirective {

  constructor(private  el: ElementRef) {
  }

  @Input() atShowExpand = false

  @HostBinding('class.at-table__cell') _td = true

  @Input() atExpand = false

  @Output() atExpandChange = new EventEmitter()

  @Input() atIndentSize = 0

  clickExpand() {
    this.atExpand = !this.atExpand
    this.atExpandChange.emit(this.atExpand)
  }
}
