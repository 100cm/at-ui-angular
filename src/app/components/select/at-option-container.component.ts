import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren
}                               from '@angular/core';
import {isNotNil}               from '../utils/class-helper';
import {AtOptionGroupComponent} from './at-option-group.component';
import {AtOptionComponent}      from './at-option.component';

import {Subject, Subscription, merge}                     from 'rxjs';
import {AtOptionLiComponent}                              from './at-option-li.component';
import {defaultFilterOption, AtOptionPipe, TFilterOption} from './at-option.pipe';
import {AtSelectControlService}                           from './at-select-control.service';

@Component({
  selector: '[at-option-container]',
  preserveWhitespaces: false,
  template: `
    <div class="at-select__dropdown at-select__dropdown--bottom">
      <ul *ngIf="isNotFoundDisplay" class="at-select__not-found">
        <li>
          {{ 'Select.notFoundContent' | atI18n }}
        </li>
      </ul>
      <ul
        #dropdownUl
        class="at-select__list"
        role="menu"
        tabindex="0">
        <li
          at-option-li
          *ngFor="let option of options| atFilterOptionPipe : atSearchValue : atFilterOption : atServerSearch"
          (click)="clickOption(option,false) "
          [atOption]="option"
        >
        </li>
      </ul>
    </div>`

})
export class AtOptionContainerComponent implements AfterContentInit, OnDestroy {

  @Input() multiple = false

  options: AtOptionComponent[] = []

  atSearchValue: string = ''

  atFilterOption: TFilterOption = defaultFilterOption;

  atServerSearch = false

  ngAfterContentInit(): void {
  }

  ngOnDestroy(): void {
  }

  clickOption(option) {
    if (!option.atDisabled) {
      this.options.forEach((base_option) => {
        if (base_option.atValue == option.atValue) {
          if (this.multiple) {
            base_option.selected = !base_option.selected
          } else {
            base_option.selected = true
          }
        } else {
          if (!this.multiple) {
            base_option.selected = false
          }
        }
      })
      this.at_select_control_service.options = this.options
      this.at_select_control_service.$selectOptionChange.next(
        this.options.filter(_ => _.selected).map(_ => _.atValue)
      )

      if (!this.multiple) {
        this.at_select_control_service.$openStatus.next(false)
      }
    }

  }

  private _at_select_control_service


  get at_select_control_service() {
    return this._at_select_control_service;
  }

  @Input()
  set at_select_control_service(value) {
    this._at_select_control_service = value;
  }

  constructor() {
  }

  ngOnInit() {
    this.subOptionChange()
    this.subSearchValue()
  }


  subOptionChange() {
    this._at_select_control_service.$optionsChange.asObservable().subscribe(options => {
      this.options = options
    })
  }

  subSearchValue() {
    this._at_select_control_service.$searchValueChange.asObservable().subscribe(value => {
      this.atSearchValue = value
    })
  }

  get listOfFilterOption() {
    return this.options.filter(o => this.atFilterOption(this.atSearchValue, o));
  }

  get isNotFoundDisplay() {
    return !this.listOfFilterOption.length
  }


}
