import {
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit, QueryList, ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR }   from '@angular/forms';
import { AtCheckboxComponent } from '../at-checkbox.component';

@Component({
  selector: 'at-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="at-checkbox-group">
      <at-checkbox *ngFor="let option of _checkList" [label]="option.label"
                   [(ngModel)]="option.checked"
                   (changeCheck)="changeList()">

      </at-checkbox>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AtCheckboxGroupComponent),
      multi: true
    }
  ]
})
export class AtCheckboxGroupComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  _checkList = [];

  changeList(): void {
    this.onChange(this._checkList);
  }

  // ngModel Access
  onChange: (value: string[]) => void;
  onTouched: () => void;

  writeValue<T>(value: T[]): void {
    this._checkList = value;
    this.changeDetectorRef.markForCheck();
  }

  registerOnChange(fn: (value: string[]) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  @ContentChildren(AtCheckboxComponent) checkbox: QueryList<AtCheckboxComponent>;

}
