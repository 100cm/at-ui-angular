import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'at-icon',
  template: `
    <i [ngStyle]="{'font-size':size+'px'}" class="icon icon-{{type}}">
      <ng-template *ngTemplateOutlet="svg"></ng-template>
    </i>
  `
})
export class IconComponent implements OnInit {

  constructor() {
  }

  @Input() svg;

  @Input()
  type: string;

  @Input()
  size: number;

  ngOnInit() {
  }

}
