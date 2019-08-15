import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RowComponent } from '../../grid/row/row.component';

@Component({
  selector: 'at-form-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
  host: {'[class.at-form-item]': 'true'}
})
export class AtFormItemComponent extends RowComponent implements OnInit {

}
