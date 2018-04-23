import {Component, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {OptionComponent} from "../option/option.component";
import {isNotNil} from "../../utils/class-helper";
import {defaultFilterOption} from "./option.pipe";

@Component({
  selector: '[at-option-container]',
  template: `
    <div class="at-select__dropdown at-select__dropdown--bottom">
      <ul class="at-select__list">
        <li (click)="selectOption(option)"
            [ngClass]="{'at-select__option--selected': isSelect(option) }"
            class="at-select__option"
            *ngFor="let option of listOfatOptionComponent | atOptionFilter :searchText : searchOption">
          {{option.atLabel}}
        </li>
      </ul>
    </div>
  `,
})
export class OptionContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  private _listOfSelectedValue: any[];

  @Input() atMode = 'common'
  @Input() MaxMultipleCount
  @Input() searchAble = false
  @Input() searchText = ''
  @Input() searchOption = defaultFilterOption
  @Input() compareWith = (a: any, v: any) => a == v
  @Output() selectValueChange: EventEmitter<any> = new EventEmitter()

  _listOfatOptionComponent

  @Input()
  set listOfatOptionComponent(value) {
    this._listOfatOptionComponent = value
  }

  get listOfatOptionComponent() {
    return this._listOfatOptionComponent.toArray()
  }

  @Input()
  // tslint:disable-next-line:no-any
  set atListOfSelectedValue(value: any[]) {
    if (this._listOfSelectedValue !== value) {
      this._listOfSelectedValue = value;
      /** should clear activedOption when listOfSelectedValue change **/
      this.refreshAllOptionStatus(false);
    }
  }

  // tslint:disable-next-line:no-any
  get atListOfSelectedValue(): any[] {
    return this._listOfSelectedValue;
  }


  get isTagsMode(): boolean {
    return this.atMode === 'tags';
  }

  get isMultipleOrTags(): boolean {
    return this.atMode === 'tags' || this.atMode === 'multiple';
  }

  selectOption(option: OptionComponent, isPressEnter: boolean = false) {
    this.updateSelectedOption(option, isPressEnter);
  }

  updateSelectedOption(option: OptionComponent, isPressEnter: boolean): void {
    /** update listOfSelectedOption -> update nzListOfSelectedValue -> emit nzListOfSelectedValueChange **/
    if (option && !option.disabled) {
      let changed = false;
      // this.setActiveOption(option);
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

        if (this.isTagsMode) {
          this.refreshAllOptionStatus(false);
        }

      }
    }

  }


  refreshAllOptionStatus(isTemplateOptionChange: boolean): void {

  }

  isSelect(option) {
    return this.atListOfSelectedValue.includes(option.atValue)
  }

}
