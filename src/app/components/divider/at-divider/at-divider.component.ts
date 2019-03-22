import { Component, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'at-divider',
  template: `
    <span class="at-divider-inner-text" *ngIf="vertical == false && text">
      <ng-template [ngTemplateOutlet]="text"></ng-template>
    </span>
  `
})
export class AtDividerComponent {

  constructor() {
  }

  @Input() vertical = false;

  @Input() height;

  @Input() text: string | TemplateRef<void>;

  @HostBinding('class.at-divider')
  get divider(): boolean {
    return true;
  }

  @HostBinding('class.at-divider-vertical')
  get verticalCls(): boolean {
    return this.vertical;
  }

  @HostBinding('class.at-divider-horizontal')
  get horizontalCls(): boolean {
    return !this.vertical;
  }

  @HostBinding('class.at-divider-with-text')
  get textCls(): boolean {
    return this.text && !this.vertical;
  }

  @HostBinding('style.height')
  get heightStyle(): string {
    return this.height + 'px';
  }

}
