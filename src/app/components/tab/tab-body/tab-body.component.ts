import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
             selector: 'at-tab-body',
             template: `
               <ng-template [ngTemplateOutlet]="content"></ng-template>
             `,
           })
export class TabBodyComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() content: TemplateRef<any>;

  @Input() active = false

}
