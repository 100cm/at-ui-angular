import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'atIcon',
  template: `<i [ngStyle]="{'font-size':size+'px'}" class="icon icon-{{type}}"></i>
  `,
})
export class IconComponent implements OnInit {

  constructor() {
  }

  @Input()
  type: string

  @Input()
  size: number

  ngOnInit() {
  }

}
