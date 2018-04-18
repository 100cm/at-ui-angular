import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {OptionComponent} from "../option/option.component";
import {isNotNil} from "../../utils/class-helper";

@Component({
  selector: '[at-select-input]',
  template:`
    <ng-template #inputTemplate>
      <input
        #inputElement
        autocomplete="off"
        class="ant-select-search__field"
        (compositionstart)="isComposing = true"
        (compositionend)="isComposing = false"
        (input)="updateWidth()"
        (keydown)="onKeyDownInput($event)"
        [ngModel]="inputValue"
        (ngModelChange)="setInputValue($event,true)"
        [disabled]="atDisabled">
    </ng-template>
    <ng-container *ngIf="isSingleMode">
      <!--selected label-->
      <div class="at-select at-select--visiable at-select--single at-select--normal">
        <div class="at-select__selection ng-tns-c13-22 ng-star-inserted">
      <span class="at-select__selected ng-tns-c13-22 ng-star-inserted">
        {{singleValueLabel}}</span>
          <i class="icon icon-chevron-down at-select__arrow"></i>
        </div>
      </div>
    </ng-container>

    <ng-container *ngIf="isMultiple">
      <div #selection class="at-select__selection">
    <span *ngFor="let item of listSelectedOption" class="at-tag">
      <span class="at-tag__text">{{item.atLabel}}</span>
      <i (click)="rejectData($event,item)" class="icon icon-x at-tag__close"></i>
    </span>
        <span class="at-select__placeholder" *ngIf="listSelectedOption.length == 0">
      请选择
    </span>
        <input *ngIf="tagAble" #tag_input type="text"
               [(ngModel)]="_searchText"
               (focus)="resetOption()"
               (ngModelChange)="updateFilterOption()"
               placeholder="" (keyup)="onKey($event)" style="
    border: none;
    outline: none;
    left: 0;
    top: 0;
    display: inline-block;
    margin: 0 24px 0 8px;
    background-color: transparent;">
        <i class="icon icon-chevron-down at-select__arrow"></i>
        <i *ngIf="allowClear" (click)="clearData($event)" style="background: white"
           class="icon icon-x at-select__clear">
        </i>
      </div>

    </ng-container>
  `,
})
export class SelectInputComponent implements OnInit {

  private _listOfSelectedValue: any[];
  private _listSelectedOption: OptionComponent[] = [];
  listOfCachedSelectedOption: OptionComponent[] = [];
  isComposing = false;
  inputValue: string
  @ViewChild('inputElement') inputElement: ElementRef;

  @Output() atOnSearch = new EventEmitter<{ value: string, emit: boolean }>();
  @Output() selectValueChange: EventEmitter<any> = new EventEmitter()
  @Input() atMode = 'default';
  @Input() atShowSearch = false;
  @Input() atDisabled = false;

  @Input() atPlaceHolder: string;
  @Input() atOpen = false;

  @Input() compareWith: (o1: any, o2: any) => boolean;

  @Input()
  get listSelectedOption(): OptionComponent[] {
    return this._listSelectedOption;
  }

  set listSelectedOption(value: OptionComponent[]) {
    this._listSelectedOption = value;
  }

  @Input()
  set atListOfSelectedValue(value: any[]) {
    this._listOfSelectedValue = value;
  }

  // tslint:disable-next-line:no-any
  get atListOfSelectedValue(): any[] {
    return this._listOfSelectedValue;
  }


  get isSingleMode(): boolean {
    return this.atMode === 'default';
  }

  get isMultipleOrTags(): boolean {
    return this.atMode === 'tags' || this.atMode === 'multiple';
  }

  get isMultiple(): boolean {
    return this.atMode === 'multiple';
  }

  get singleValueLabel(): string {
    return (this.listSelectedOption[0] || <any>{} ).atLabel
  }


  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  rejectData(event, option) {
    event.preventDefault()
    this.updateSelectedOption(option, false)
  }

  updateSelectedOption(option: OptionComponent, isPressEnter: boolean): void {
    /** update listOfSelectedOption -> update nzListOfSelectedValue -> emit nzListOfSelectedValueChange **/
    if (option && !option.disabled) {
      let changed = false;
      // this.setActiveOption(option);
      let listOfSelectedValue = [...this.atListOfSelectedValue];
      console.log(this.isMultipleOrTags)
      if (this.isMultipleOrTags) {
        const targetValue = listOfSelectedValue.find(o => this.compareWith(o, option.atValue));
        if (isNotNil(targetValue)) {
          if (!isPressEnter) {
            /** should not toggle option when press enter **/
            listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
            changed = true;
          }
        } else {
          listOfSelectedValue.push(option.atValue);
          console.log('push')
          changed = true;
        }
      } else if (!this.compareWith(listOfSelectedValue[0], option.atValue)) {
        listOfSelectedValue = [option.atValue];
        changed = true;
      }
      /** update selectedValues when click option **/
      if (changed) {
        this._listOfSelectedValue = listOfSelectedValue;
        this.selectValueChange.emit(this._listOfSelectedValue)


      }
    }

  }

}
