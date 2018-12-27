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
        (keydown)="onKeyDownUl($event)"
        (scroll)="dropDownScroll($event,dropdownUl)"
        tabindex="0">
        <li
          at-option-li
          [compareWith]="compareWith"
          *ngFor="let option of options | atFilterOptionPipe : atSearchValue : atFilterOption : atServerSearch "
          (click)="clickOption(option,false)"
          [atActiveOption]="activatedOption"
          [atOption]="option"
          [atListOfSelectedValue]="atListOfSelectedValue">
        </li>
      </ul>
    </div>`

})
export class AtOptionContainerComponent implements AfterContentInit, OnDestroy {

  options = []

  ngAfterContentInit(): void {
  }

  ngOnDestroy(): void {
  }

  clickOption(option) {

  }

}
