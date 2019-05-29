import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';

import { toBoolean }         from '../utils/class-helper';
import { AtTabsetComponent } from './at-tabset.component';

@Component({
  selector: 'at-tab',
  preserveWhitespaces: false,
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>`,
  host: {
    '[class.at-tabs-tabpane]': 'true'
  }
})
export class AtTabComponent implements OnDestroy, OnInit {
  private _title: string | TemplateRef<void>;
  private _disabled = false;
  position: number | null = null;
  origin: number | null = null;
  isTitleString: boolean;

  @Input()
  set atDisabled(value: boolean) {
    this._disabled = toBoolean(value);
  }

  get atDisabled(): boolean {
    return this._disabled;
  }

  @Output() readonly atClick = new EventEmitter<void>();
  @Output() readonly atSelect = new EventEmitter<void>();
  @Output() readonly atDeselect = new EventEmitter<void>();
  @Input() atForceRender = false;
  @ViewChild(TemplateRef, { static: true }) content: TemplateRef<void>;

  @Input()
  set atTitle(value: string | TemplateRef<void>) {
    this.isTitleString = !(value instanceof TemplateRef);
    this._title = value;
  }

  get atTitle(): string | TemplateRef<void> {
    return this._title;
  }

  constructor(private atTabSetComponent: AtTabsetComponent) {
  }

  ngOnInit(): void {
    this.atTabSetComponent.addTab(this);
  }

  ngOnDestroy(): void {
    this.atTabSetComponent.removeTab(this);
  }

}
