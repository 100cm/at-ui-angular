import {
  Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output,
  ViewChild
} from '@angular/core';
import {OptionComponent} from "./option/option.component";
import {DropDownAnimation} from "../animations/drop-down-animation";
import {FadeAnimation} from "../animations/fade-animation";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {TagAnimation} from "../animations/tag-animation";

@Component({
  selector: 'atSelect',
  template: `
    <div (click)="handleDrop($event)" (mouseenter)="dropDown()" (mouseleave)="dropUp()"
         class="at-select at-select--{{disabled ? 'disabled' : 'visiable' }} at-select--{{multiple ? 'multiple' : 'single' }} at-select--{{atSize}}">

      <div *ngIf="multiple" #selection class="at-select__selection">
    <span *ngFor="let item of selectedOptions" class="at-tag" [@tagAnimation]>
      <span class="at-tag__text">{{item.atLabel}}</span>
      <i (click)="rejectData($event,item)" class="icon icon-x at-tag__close"></i>
    </span>
        <span class="at-select__placeholder" *ngIf="selectedOptions.length == 0 && showLabel">

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


      <div #selection *ngIf="!multiple" class="at-select__selection">
        <span class="at-select__placeholder" *ngIf="!selectedLabel && showLabel">请选择</span>
        <span *ngIf="selectedLabel && showLabel"
              class="at-select__selected">{{selectedLabel}}</span>
        <input *ngIf="searchable" #search_input type="text" [(ngModel)]="_searchText"
               (focus)="resetOption()"
               (ngModelChange)="updateFilterOption()" class="at-select__input">
        <i class="icon icon-chevron-down at-select__arrow"></i>
        <i *ngIf="allowClear" (click)="clearData($event)" style="background: white"
           class="icon icon-x at-select__clear">
        </i>
      </div>

      <div *ngIf="_dropdown" [@dropDownAnimation] class="at-select__dropdown at-select__dropdown--bottom"
           [ngStyle]="{'top':top}" style="left: 0px;">
        <ul class="at-select__not-found" *ngIf="filterOptions.length == 0">
          <li>无匹配数据</li>
        </ul>
        <ul class="at-select__list">
          <li (click)="selectOption($event,option)"
              [ngClass]="{'at-select__option--selected': option._selected,'at-select__option--disabled':option.disabled}"
              class="at-select__option" *ngFor="let option of filterOptions">
            {{option.atLabel}}
          </li>
        </ul>
      </div>

    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  animations: [DropDownAnimation, FadeAnimation, TagAnimation],
})
export class SelectComponent implements OnInit {


  _dropdown = false
  top: string = ''
  _value: any
  _searchText: string
  timeout: any
  showLabel = true
  options: Array<OptionComponent> = []
  private _selectedLabel = ''
  private _searchable: boolean = false
  private _allowClear = false
  private _atSize: 'normal' | 'small' | 'large' = 'normal'
  private _multiple: boolean = false
  private _disabled = false
  private _hover: boolean = false
  private _tagAble: boolean = false
  private _filterOptions: Array<any>


  get searchable(): boolean {
    return this._searchable;
  }


  get filterOptions(): Array<any> {
    if (this.searchable) {
      return this._filterOptions;
    } else {
      return this.options
    }
  }

  set filterOptions(value: Array<any>) {
    this._filterOptions = value;
  }

  updateFilterOption(setText = false) {
    this.showLabel = false
    clearTimeout(this.timeout)
    this.timeout = setTimeout(_ => {
      this._dropdown = true
    }, 200)

    if (this._searchText) {
      this._filterOptions = this.options.filter((option) => {
        return (option.atLabel.indexOf(this._searchText) != -1)
      })
    } else {
      this._filterOptions = this.options
    }
  }

  @Output() change: EventEmitter<any> = new EventEmitter()


  @Input()
  set searchable(value: boolean) {
    this._searchable = value;
  }

  get tagAble(): boolean {
    return this._tagAble;
  }

  @Input()
  set tagAble(value: boolean) {
    this._tagAble = value;
  }

  get allowClear(): boolean {
    return this._allowClear;
  }


  get hover(): boolean {
    return this._hover;
  }

  @Input()
  set hover(value: boolean) {
    this._hover = value;
  }

  @Input()
  set allowClear(value: boolean) {
    this._allowClear = value;
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  get atSize() {
    return this._atSize;
  }

  @Input()
  set atSize(value) {
    this._atSize = value;
  }

  get multiple(): boolean {
    return this._multiple;
  }

  @Input()
  set multiple(value: boolean) {
    this._multiple = value;
  }

  get selectedLabel() {
    let label = ((this.options.filter((option) => {
      return option._selected == true
    }) || [] )[0] || {})['atLabel']
    return label
  }


  addOption(option: OptionComponent) {
    this.options.push(option)
  }

  constructor() {
  }

  ngOnInit() {

  }


  @ViewChild('selection') selection: any
  @ViewChild('tag_input') tagInput: any
  @ViewChild('search_input') searchInput: ElementRef

  ngAfterViewInit() {
    if (this.top == '') {
      this.updateTop()
    }
  }

  ngAfterContentInit() {

  }

  handleDrop(e) {
    if (this.disabled) {
      return
    }
    if (this.multiple && this._dropdown == true) {
      return
    }

    if (this._tagAble) {
      this.tagInput.nativeElement.focus()
    }
    // if (!this.multiple) {
    this._dropdown = !this._dropdown
    // }
  }

  dropUp() {
    if (this.disabled) {
      return
    }
    clearTimeout(this.timeout)
    this.timeout = setTimeout(_ => {
      this._dropdown = false
    }, 200)

  }

  dropDown() {
    if (this.disabled || !this._hover) {
      return
    }
    clearTimeout(this.timeout)
    this.timeout = setTimeout(_ => {
      this._dropdown = true
    }, 200)

  }

  get selectedOptions() {
    return this.options.filter((option) => {
      return option._selected == true
    })
  }

  // ngModel Access
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;


  writeValue(value: any): void {
    this.updateValue(value, true)
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }


  selectOption(e, option: OptionComponent) {
    this.filterOptions = this.options
    this.updateValue(option.atValue)
  }

  updateValue(value, init = false, option = {isTag: false}) {
    if (this._value === value) {
      return;
    }
    if (this.multiple) {
      if ((value == null)) {
        this._value = [];
      } else {
        //初始化全部push
        if (init) {
          this._value = value
        }
        //非初始化
        else {
          if (!this._value.includes(value) || option.isTag == true) {
            this._value.push(value)
          }
          else {
            //remove index
            this._value = this._value.filter((data) => {
              return (data != value)
            })
          }
        }
      }
    }

    if (!this.multiple) {
      this._value = value
      this._searchText = this._value
    }

    this.options.forEach((option) => {
      let selected = false
      // 多选
      if (this.multiple == true) {
        selected = this._value.includes(option._atValue) ? true : false
      } else {
        selected = this._value === option._atValue
      }
      option._selected = selected
    })


    this.onChange(this._value)
    //emit the output
    this.change.emit(this._value)

  }

  clearData(e) {
    e.stopPropagation()
    this.updateValue(null)
  }

  rejectData(e, data) {
    e.stopPropagation()
    // 如果是tag
    if (data.isTag) {
      this.options = this.options.filter((option) => {
        return (option.atValue != data.atValue || option.isTag != true )
      })
    }
    this.updateValue(data.atValue)
  }


  onKey($event) {
    if ($event.code == 'Enter') {
      let value = $event.target.value
      let option = <any>{
        _atLabel: value,
        atLabel: value,
        _atValue: value,
        atValue: value,
        _selected: false,
        isTag: true,
        _selectComponent: this
      }
      $event.target.value = ''


      if (this.options.filter((op) => {
          return (  op.atValue == option.atValue)
        }).length == 0) {
        this.options.push(option)
      }

      this.updateValue(value, false, option)
      this._searchText = ''
      this.updateTop()
    }

  }

  updateTop() {
    setTimeout(_ => {
      this.top = this.selection.nativeElement.offsetHeight + 'px'
    })
  }

  resetOption() {
    this.filterOptions = this.options
  }
}
