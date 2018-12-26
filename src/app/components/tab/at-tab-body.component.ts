import {
  Component,
  Input,
  TemplateRef
} from '@angular/core';

@Component({
  selector: '[at-tab-body]',
  preserveWhitespaces: false,
  template: `
    <ng-template [ngTemplateOutlet]="content"></ng-template>`
})
export class AtTabBodyComponent {
  @Input() content: TemplateRef<void>;
}
