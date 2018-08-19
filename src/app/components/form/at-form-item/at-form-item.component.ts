import { Component, OnInit } from '@angular/core';
import {RowComponent}        from "../../grid/row/row.component";

@Component({
  selector: 'at-form-item',
  template: `
    <div class="at-form-item">
      <ng-content></ng-content>
    </div>
  `,
})
export class AtFormItemComponent extends RowComponent  implements OnInit {

  ngOnInit() {
  }

}
