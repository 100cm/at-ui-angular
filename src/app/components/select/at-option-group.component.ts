import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { AtOptionComponent } from './at-option.component';

@Component({
  selector: 'at-option-group',
  template: `
    <ng-content></ng-content>`
})
export class AtOptionGroupComponent {
  _label: string | TemplateRef<void>;
  isLabelString: boolean;
  @ContentChildren(AtOptionComponent) listOfatOptionComponent: QueryList<AtOptionComponent>;

  @Input()
  set atLabel(value: string | TemplateRef<void>) {
    this.isLabelString = !(value instanceof TemplateRef);
    this._label = value;
  }

  get atLabel(): string | TemplateRef<void> {
    return this._label;
  }

}
