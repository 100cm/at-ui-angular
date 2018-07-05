import {Component, Input, TemplateRef, ViewChild} from '@angular/core';

import {toBoolean} from '../utils/class-helper';

@Component({
  selector: 'atOption',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>`
})
export class AtOptionComponent {
  private _disabled = false;
  private _customContent = false;
  @ViewChild(TemplateRef) template: TemplateRef<void>;
  @Input() atLabel: string;
  // tslint:disable-next-line:no-any
  @Input() atValue: any;

  @Input()
  set atDisabled(value: boolean) {
    this._disabled = toBoolean(value);
  }

  get atDisabled(): boolean {
    return this._disabled;
  }

  @Input()
  set atCustomContent(value: boolean) {
    this._customContent = toBoolean(value);
  }

  get atCustomContent(): boolean {
    return this._customContent;
  }
}
