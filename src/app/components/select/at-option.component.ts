import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { toBoolean }                  from '../utils/class-helper';
import { AtOptionContainerComponent } from './at-option-container.component';
import { AtSelectControlService }     from './at-select-control.service';
import { AtSelectComponent }          from './at-select.component';

@Component({
  selector: 'at-option',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>`
})
export class AtOptionComponent {

  constructor(private at_select_service: AtSelectControlService) {

  }

  private _disabled = false;
  private _customContent = false;
  @ViewChild(TemplateRef, { static: true }) template: TemplateRef<void>;
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

  ngOnInit() {
    // console.log('current atValue',this.atValue)
    this.at_select_service.pushOptions(this);
  }

  @Input()
  set atCustomContent(value: boolean) {
    this._customContent = toBoolean(value);
  }

  get atCustomContent(): boolean {
    return this._customContent;
  }

  ngOnDestroy() {
   this.at_select_service.removeOption(this);
  }

  public selected = false;

}
