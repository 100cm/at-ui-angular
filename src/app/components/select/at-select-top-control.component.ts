import {
  animate,
  state,
  style,
  transition,
  trigger
}                                                                                 from '@angular/animations';
import {Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {isNotNil}                                                                 from '../utils/class-helper';
import {AtOptionComponent}                                                        from './at-option.component';
import {AtSelectControlService}                                                   from './at-select-control.service';

@Component({
  selector: '[at-select-top-control]',
  preserveWhitespaces: false,
  animations: [
    trigger('tagAnimation', [
      state('*', style({opacity: 1, transform: 'scale(1)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'scale(0)'}),
        animate('150ms linear')
      ]),
      state('void', style({opacity: 0, transform: 'scale(0)'})),
      transition('* => void', [
        style({opacity: 1, transform: 'scale(1)'}),
        animate('150ms linear')
      ])
    ])
  ],
  template: `
    <ng-template #inputTemplate>
      <input
        #inputElement
        [ngStyle]="{'display': atShowSearch && atOpen ? 'block' :'none'}" placeholder="{{singleValueLabel}}"
        autocomplete="off"
        class="at-select__input"
        (compositionstart)="isComposing = true"
        (compositionend)="isComposing = false"
        (input)="updateWidth()"
        (keydown)="onKeyDownInput($event)"
        [ngModel]="inputValue"
        (ngModelChange)="setInputValue($event,true)"
        [disabled]="atDisabled">
    </ng-template>
    <div
      *ngIf="atPlaceHolder"
      at-select-unselectable
      [style.display]="placeHolderDisplay"
      (click)="focusOnInput()"
      class="at-select-selection__placeholder">
      {{ atPlaceHolder }}
    </div>
    <!--single mode-->
    <ng-container *ngIf="isSingleMode">
      <!--selected label-->
      <div
        *ngIf="atListOfSelectedValue.length"
        class="at-select-selection-selected-value"
        [attr.title]="atListOfSelectedValue[0].atLabel"
        [ngStyle]="selectedValueDisplay">
      </div>

      <div class="at-select__selection">
        <span class="at-select__selected" *ngIf="!atShowSearch || ( atShowSearch && !atOpen)">   {{ singleValueLabel
          }}</span>
        <!--show search-->
        <div
          *ngIf="atShowSearch"
          [style.display]="searchDisplay">
          <div class="at-select-search__field__wrap">
            <ng-template [ngTemplateOutlet]="inputTemplate"></ng-template>
            <span class="at-select-search__field__mirror">{{inputValue}}&nbsp;</span>
          </div>
        </div>
        <i class="icon icon-chevron-down at-select__arrow"></i>
        <i *ngIf="allowClear" (click)="clear($event)"
           class="icon icon-x at-select__clear ng-tns-c14-34 ng-star-inserted"
           style="background: white;z-index: 2"></i>
      </div>
    </ng-container>
    <!--multiple or tags mode-->
    <ul class="at-select__selection at-select__selection__ul"
        *ngIf="isMultipleOrTags">
      <ng-container *ngFor="let value of atListOfSelectedValue">
        <li
          class="at-select__selection__ul__tag"
          *ngIf="isOptionDisplay(value)"
          [@tagAnimation]
          [attr.title]="getPropertyFromValue(value,'atLabel')"
          [class.at-select-selection__choice__disabled]="getPropertyFromValue(value,'atDisabled')"
        >
          <span>{{ getPropertyFromValue(value, 'atLabel') || value }}</span>
          <i *ngIf="!getPropertyFromValue(value,'atDisabled')" (click)="removeValueFormSelected(value)"
             class="icon icon-x at-tag__close"></i>
        </li>
      </ng-container>
      <input type="text"
             *ngIf="atShowSearch"
             class="at-select-search-inline"
             (compositionstart)="isComposing = true"
             (compositionend)="isComposing = false"
             (input)="updateWidth()"
             (keydown)="onKeyDownInput($event)"
             [ngModel]="inputValue"
             (ngModelChange)="setInputValue($event,true)"
             [disabled]="atDisabled"
             placeholder=""/>
      <i class="icon icon-chevron-down at-select__arrow"></i>
      <i *ngIf="allowClear" (click)="clear($event)"
         class="icon icon-x at-select__clear ng-tns-c14-34 ng-star-inserted"
         style="background: white;z-index: 2"></i>
    </ul>
  `,
  host: {
    '[class.at-select-selection__rendered]': 'true'
  }
})
export class AtSelectTopControlComponent {

  constructor(private renderer: Renderer2, private select_control_service: AtSelectControlService) {

  }

  atListOfSelectedValue = []

  multiple = false

  tagable = false

  get isSingleMode() {
    return !this.multiple && !this.tagable
  }

  focusOnInput() {
    this.select_control_service.$openStatus.next(true)
  }

}
