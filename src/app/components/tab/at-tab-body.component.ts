import {
  Component,
  Input,
  TemplateRef
} from '@angular/core';

@Component({
  selector: '[at-tab-body]',
  preserveWhitespaces: false,
  template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>`
})
export class AtTabBodyComponent {
  @Input() content: TemplateRef<void>;
  @Input() active = false;
  @Input() forceRender = false;
}
