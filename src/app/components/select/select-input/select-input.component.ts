import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {OptionComponent} from "../option/option.component";
import {isNotNil} from "../../utils/class-helper";
import {TagAnimation} from "../../animations/tag-animation";

@Component({
  selector: '[at-select-input]',
  template: `
    <ng-container *ngIf="isSingleMode">
      <div class="at-select__selection">
      <span class="at-select__selected" (click)="setInputFocus()" *ngIf="!atShowSearch || ( atShowSearch && !atOpen)">
        {{singleValueLabel || '请选择'}}</span>
        <input [ngStyle]="{'display': atShowSearch && atOpen ? 'block' :'none'}" placeholder="{{singleValueLabel}}"
               autocomplete="off"
               #search_input type="text"
               [ngModel]="_searchText"
               (ngModelChange)="setInputValue($event)" class="at-select__input">
        <i *ngIf="allowClear" (click)="clearData($event)" style="background: white;z-index: 2"
           class="icon icon-x at-select__clear">
        </i>
        <i class="icon icon-chevron-down at-select__arrow"></i>
      </div>
    </ng-container>

    <ng-container *ngIf="isMultiple">
      <div #selection class="at-select__selection">
    <span *ngFor="let item of listSelectedOption" class="at-tag" [@tagAnimation]>
      <span class="at-tag__text">{{item.atLabel}}</span>
      <i (click)="rejectData($event,item)" class="icon icon-x at-tag__close"></i>
    </span>
        <span class="at-select__placeholder" *ngIf="listSelectedOption.length == 0">
      请选择
    </span>
        <input *ngIf="tagAble" #tag_input type="text"
               [(ngModel)]="_searchText"
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
        <i *ngIf="allowClear" (click)="clearData($event)" style="background: white;z-index: 2"
           class="icon icon-x at-select__clear">
        </i>
      </div>

    </ng-container>
  `,
  animations: [TagAnimation]
})
export class SelectInputComponent implements OnInit {

  private _listOfSelectedValue: any[];
  private _listSelectedOption: OptionComponent[] = [];

  isComposing = false;
  inputValue: string
  @ViewChild('inputElement') inputElement: ElementRef;
  @Output() clearNgModel: EventEmitter<any> = new EventEmitter()
  @Output() OnSearch = new EventEmitter<any>();
  @Output() selectValueChange: EventEmitter<any> = new EventEmitter()
  @Output() addOptionTag: EventEmitter<any> = new EventEmitter()
  @Input() atMode = 'default';
  @Input() atShowSearch = false;
  @Input() atDisabled = false;
  @Input() atSize = 'normal'
  @Input() atPlaceHolder: string;
  @Input() tagAble = false
  private _atOpen = false;
  @Input() allowClear = true
  @Input() compareWith: (o1: any, o2: any) => boolean;
  @ViewChild('search_input') search_inputs: ElementRef
  private _searchText: string = ''


  get atOpen(): boolean {
    return this._atOpen;
  }

  @Input()
  set atOpen(value: boolean) {
    this._atOpen = value;
  }

  setInputFocus() {
    setTimeout(_ => {
      if (this.search_inputs && this.atShowSearch) {
        this.search_inputs.nativeElement.focus()
      }
    }, 100)
  }

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
    this._searchText = ''
    this.updateFilterOption()
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

  clearData(e): void {
    e.preventDefault();
    e.stopPropagation();
    this.clearNgModel.emit()
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
    this.addOptionTag.emit({option: option, handle: 'remove'})
  }

  updateSelectedOption(option: OptionComponent, isPressEnter: boolean): void {
    /** update listOfSelectedOption -> update nzListOfSelectedValue -> emit nzListOfSelectedValueChange **/
    if (option && !option.disabled) {
      let changed = false;
      let listOfSelectedValue = [...this.atListOfSelectedValue];
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

  updateFilterOption() {
    this.OnSearch.emit(this._searchText)
  }

  setInputValue(value) {
    this._searchText = value
    this.updateFilterOption()
  }

  onKey(key) {
    if (key.code == 'Enter') {
      let value = key.target.value
      let option = <any>{
        _atLabel: value,
        atLabel: value,
        _atValue: value,
        atValue: value,
        _selected: false,
        isTag: true,
      }
      this.addOptionTag.emit({option: option, handle: 'add'})
      this._searchText = ''
      this.updateFilterOption()
      this.updateSelectedOption(option, false)
    }
  }


}
