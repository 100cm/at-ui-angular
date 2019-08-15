import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { ColComponent } from '../../grid/col/col.component';

@Component({
  selector: 'at-form-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label [class.at-form-item__label—-required]="required">
      <ng-content></ng-content>
    </label>
  `
})
export class AtFormLabelComponent extends ColComponent implements OnInit {

  @Input('required') required = false;

  @HostBinding('class.at-form-item__label')
  get labelClass(): boolean {
    return true;
  }

}
