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
                   <!--<li-->
                   <!--*ngIf="isAddTagOptionDisplay"-->
                   <!--at-select-unselectable-->
                   <!--(click)="addTagOption()"-->
                   <!--class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active">-->
                   <!--{{ atSearchValue }}-->
                   <!--</li>-->
                   <li
                     at-option-li
                     [compareWith]="compareWith"
                     *ngFor="let option of listOfatOptionComponent | atFilterOptionPipe : atSearchValue : atFilterOption : atServerSearch "
                     (click)="clickOption(option,false)"
                     [atActiveOption]="activatedOption"
                     [atOption]="option"
                     [atListOfSelectedValue]="atListOfSelectedValue">
                   </li>
                 </ul>
               </div>`

           })
export class AtOptionContainerComponent implements AfterContentInit, OnDestroy {
  // tslint:disable-next-line:no-any
  private _listOfSelectedValue: any[];
  private _searchValue: string;
          isInit                                       = false;
          isAddTagOptionDisplay                        = false;
          listOfAllTemplateOption: AtOptionComponent[] = [];
          optionSubscription: Subscription;
          groupSubscription: Subscription;
          listOfTagOption: AtOptionComponent[]         = [];
          listOfFilterOption: AtOptionComponent[]      = [];
          activatedOption: AtOptionComponent;
  /** can not use ViewChild since it will match sub options in option group **/
          @ViewChildren(AtOptionLiComponent) listOfatOptionLiComponent: QueryList<AtOptionLiComponent>;
  @Input() listOfatOptionComponent: QueryList<AtOptionComponent>;
  @Input() listOfatOptionGroupComponent: QueryList<AtOptionGroupComponent>;
  // tslint:disable-next-line:no-any
  @Output() atListOfSelectedValueChange                = new EventEmitter<any[]>();
  @Output() atListOfTemplateOptionChange               = new EventEmitter<AtOptionComponent[]>();
  @Output() atClickOption                              = new EventEmitter<void>();
  @Output() atScrollToBottom                           = new EventEmitter<void>();
  @Input() atMode                                      = 'default';
  @Input('remoteSearch') atServerSearch                = false;
  @Input() atFilterOption: TFilterOption               = defaultFilterOption;
  @Input() atMaxMultipleCount                          = Infinity;
  @Input() atNotFoundContent: string;
  // tslint:disable-next-line:no-any
  @Input() compareWith                                 = (o1: any, o2: any) => o1 === o2;

  @Input()
  set atSearchValue(value: string) {
    this._searchValue = value;
    this.updateAddTagOptionDisplay();
    this.updateListOfFilterOption();
  }

  get atSearchValue(): string {
    return this._searchValue;
  }

  @Input()
  // tslint:disable-next-line:no-any
  set atListOfSelectedValue(value: any[]) {
    if (this._listOfSelectedValue !== value) {
      this._listOfSelectedValue = value;
      /** should clear activedOption when listOfSelectedValue change **/
      this.clearActivatedOption();
      this.refreshAllOptionStatus(false);
    }
  }

  // tslint:disable-next-line:no-any
  get atListOfSelectedValue(): any[] {
    return this._listOfSelectedValue;
  }

  addTagOption(): void {
    if (this.atListOfSelectedValue.length < this.atMaxMultipleCount) {
      this.atListOfSelectedValue = [...this.atListOfSelectedValue, this.atSearchValue];
      this.atListOfSelectedValueChange.emit(this.atListOfSelectedValue);
    }
  }

  clickOption(option: AtOptionComponent, isPressEnter: boolean): void {
    this.updateSelectedOption(option, isPressEnter);
    this.atClickOption.emit();
  }

  onKeyDownUl(e: KeyboardEvent): void {
    if ([38, 40, 13].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      const activeIndex = this.listOfFilterOption.findIndex(item => item === this.activatedOption);
      if (e.keyCode === 38) {
        // arrow up
        const preIndex = activeIndex > 0 ? (activeIndex - 1) : (this.listOfFilterOption.length - 1);
        this.setActiveOption(this.listOfFilterOption[preIndex]);
      }
      else if (e.keyCode === 40) {
        // arrow down
        const nextIndex = activeIndex < this.listOfFilterOption.length - 1 ? (activeIndex + 1) : 0;
        this.setActiveOption(this.listOfFilterOption[nextIndex]);
      }
      else if (e.keyCode === 13) {
        // enter
        if (this.isTagsMode) {
          if (!this.isAddTagOptionDisplay) {
            this.clickOption(this.activatedOption, true);
          }
          else {
            this.addTagOption();
            this.atClickOption.emit();
          }
        }
        else {
          this.clickOption(this.activatedOption, true);
        }
      }
    }
  }

  resetActiveOption(): void {
    const firstActiveOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).find(item => this.compareWith(item.atValue, this.atListOfSelectedValue[0]));
    this.setActiveOption(firstActiveOption);
  }

  clearActivatedOption(): void {
    this.setActiveOption(null);
  }

  setActiveOption(option: AtOptionComponent, scroll: boolean = true): void {
    this.activatedOption = option;
    if (scroll) {
      this.scrollIntoView();
    }
  }

  scrollIntoView(): void {
    if (this.listOfatOptionLiComponent && this.listOfatOptionLiComponent.length) {
      const targetOption = this.listOfatOptionLiComponent.find(o => o.atOption === this.activatedOption);
      /* tslint:disable-next-line:no-string-literal */
      if (targetOption && targetOption.el && targetOption.el['scrollIntoViewIfNeeded']) {
        /* tslint:disable-next-line:no-string-literal */
        setTimeout(() => targetOption.el['scrollIntoViewIfNeeded'](false), 150);
      }
    }
  }

  updateSelectedOption(option: AtOptionComponent, isPressEnter: boolean): void {
    /** update listOfSelectedOption -> update atListOfSelectedValue -> emit atListOfSelectedValueChange **/
    if (option && !option.atDisabled) {
      let changed = false;
      this.setActiveOption(option);
      let listOfSelectedValue = [...this.atListOfSelectedValue];
      if (this.isMultipleOrTags) {
        const targetValue = listOfSelectedValue.find(o => this.compareWith(o, option.atValue));
        if (isNotNil(targetValue)) {
          if (!isPressEnter) {
            /** should not toggle option when press enter **/
            listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
            changed = true;
          }
        }
        else if (this.atListOfSelectedValue.length < this.atMaxMultipleCount) {
          listOfSelectedValue.push(option.atValue);
          changed = true;
        }
      }
      else if (!this.compareWith(listOfSelectedValue[0], option.atValue)) {
        listOfSelectedValue = [option.atValue];
        changed             = true;
      }
      /** update selectedValues when click option **/
      if (changed) {
        this._listOfSelectedValue = listOfSelectedValue;
        this.atListOfSelectedValueChange.emit(this.atListOfSelectedValue);
        if (this.isTagsMode) {
          this.refreshAllOptionStatus(false);
        }
      }
    }
  }

  refreshListOfTagOption(): void {
    if (this.isTagsMode) {
      /** refresh tags option **/
      const listOfTagsOption = [];
      this.atListOfSelectedValue.forEach(value => {
        const existedOption = this.listOfAllTemplateOption.find(o => this.compareWith(o.atValue, value));
        if (!existedOption) {
          const atOptionComponent   = new AtOptionComponent();
          atOptionComponent.atValue = value;
          atOptionComponent.atLabel = value;
          listOfTagsOption.push(atOptionComponent);
        }
      });
      this.listOfTagOption = listOfTagsOption;
    }

  }

  refreshListOfAllTemplateOption(): void {
    this.listOfAllTemplateOption = this.listOfatOptionComponent.toArray().concat(this.listOfatOptionGroupComponent.toArray().reduce((pre, cur) => [...pre, ...cur.listOfatOptionComponent.toArray()], []));
    Promise.resolve().then(() => this.atListOfTemplateOptionChange.emit(this.listOfAllTemplateOption));
  }

  refreshAllOptionStatus(isTemplateOptionChange: boolean): void {
    /** update atListOfSelectedValue | update option list -> update listOfAllTemplateOption -> update listOfSelectedOption -> update activatedOption **/
    if (this.isInit) {
      if (isTemplateOptionChange) {
        this.refreshListOfAllTemplateOption();
      }
      this.refreshListOfTagOption();
      this.updateListOfFilterOption();
      this.updateAddTagOptionDisplay();
    }
  }

  updateListOfFilterOption(): void {
    this.listOfFilterOption = new AtOptionPipe().transform(this.listOfAllTemplateOption.concat(this.listOfTagOption), this.atSearchValue, this.atFilterOption, this.atServerSearch);
    if (this.atSearchValue) {
      this.setActiveOption(this.listOfFilterOption[0]);
    }
  }

  /** watch options change in option group **/
  watchSubOptionChanges(): void {
    this.unsubscribeOption();
    let optionChanges$ = merge(
      new Subject().asObservable(),
      this.listOfatOptionGroupComponent.changes,
      this.listOfatOptionComponent.changes
    );
    if (this.listOfatOptionGroupComponent.length) {
      this.listOfatOptionGroupComponent.forEach(group => optionChanges$ = group.listOfatOptionComponent ? merge(group.listOfatOptionComponent.changes, optionChanges$) : optionChanges$);
    }
    this.optionSubscription = optionChanges$.subscribe(() => this.refreshAllOptionStatus(true));
  }

  unsubscribeGroup(): void {
    if (this.groupSubscription) {
      this.groupSubscription.unsubscribe();
      this.groupSubscription = null;
    }
  }

  unsubscribeOption(): void {
    if (this.optionSubscription) {
      this.optionSubscription.unsubscribe();
      this.optionSubscription = null;
    }
  }

  get isTagsMode(): boolean {
    return this.atMode === 'tags';
  }

  get isMultipleOrTags(): boolean {
    return this.atMode === 'tags' || this.atMode === 'multiple';
  }

  get isNotFoundDisplay(): boolean {
    return (!this.isTagsMode) && (!this.listOfFilterOption.length);
  }

  updateAddTagOptionDisplay(): void {
    const listOfAllOption      = this.listOfAllTemplateOption.concat(this.listOfTagOption).map(item => item.atLabel);
    const isMatch              = listOfAllOption.indexOf(this.atSearchValue) > -1;
    this.isAddTagOptionDisplay = this.isTagsMode && this.atSearchValue && (!isMatch);
  }

  dropDownScroll(e: MouseEvent, ul: HTMLUListElement): void {
    e.preventDefault();
    e.stopPropagation();
    if (ul && (ul.scrollHeight - ul.scrollTop === ul.clientHeight)) {
      this.atScrollToBottom.emit();
    }
  }

  ngAfterContentInit(): void {
    this.isInit = true;
    this.refreshAllOptionStatus(true);
    this.watchSubOptionChanges();
    this.groupSubscription = this.listOfatOptionGroupComponent.changes.subscribe(() => this.watchSubOptionChanges());
  }

  ngOnDestroy(): void {
    this.unsubscribeGroup();
    this.unsubscribeOption();
  }
}
