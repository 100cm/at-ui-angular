import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'atIcon',
  template:`<i class="icon icon-{{type}}"></i>
  `,
})
export class IconComponent implements OnInit {

  constructor() {
  }

  @Input()
  type: string

  ngOnInit() {
  }

}
