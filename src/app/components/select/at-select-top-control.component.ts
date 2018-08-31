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
                 class="ant-select-selection__placeholder">
                 {{ atPlaceHolder }}
               </div>
               <!--single mode-->
               <ng-container *ngIf="isSingleMode">
                 <!--selected label-->
                 <div
                   *ngIf="atListOfSelectedValue.length"
                   class="ant-select-selection-selected-value"
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
                     <div class="ant-select-search__field__wrap">
                       <ng-template [ngTemplateOutlet]="inputTemplate"></ng-template>
                       <span class="ant-select-search__field__mirror">{{inputValue}}&nbsp;</span>
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
               '[class.ant-select-selection__rendered]': 'true'
             }
           })
export class AtSelectTopControlComponent {
  // tslint:disable-next-line:no-any
  private _listOfSelectedValue: any[];
  private _listTemplateOfOption: AtOptionComponent[]      = [];
          listOfCachedSelectedOption: AtOptionComponent[] = [];
          inputValue: string;
          isComposing                                     = false;
  @ViewChild('inputElement') inputElement: ElementRef;
  // tslint:disable-next-line:no-any
  @Output() atListOfSelectedValueChange                   = new EventEmitter<any[]>();
  @Output() atOnSearch                                    = new EventEmitter<{ value: string, emit: boolean }>();
  @Input() atMode                                         = 'default';
  @Input() atShowSearch                                   = false;
  @Input() atDisabled                                     = false;

  @Input() atPlaceHolder: string;
  @Input() atOpen = false;
  // tslint:disable-next-line:no-any
  @Input() compareWith: (o1: any, o2: any) => boolean;

  @Input() allowClear = false

  @Input()
  // tslint:disable-next-line:no-any
  set atListOfSelectedValue(value: any[]) {
    this._listOfSelectedValue = value;
    this.updateListOfCachedOption();
  }

  // tslint:disable-next-line:no-any
  get atListOfSelectedValue(): any[] {
    return this._listOfSelectedValue;
  }

  @Input()
  set atListTemplateOfOption(value: AtOptionComponent[]) {
    this._listTemplateOfOption = value;
    this.updateListOfCachedOption();
  }

  get atListTemplateOfOption(): AtOptionComponent[] {
    return this._listTemplateOfOption;
  }

  /** cached selected option list **/
  updateListOfCachedOption(): void {
    if (this.isSingleMode) {
      const selectedOption = this.atListTemplateOfOption.find(o => this.compareWith(o.atValue, this.atListOfSelectedValue[0]));
      if (isNotNil(selectedOption)) {
        this.listOfCachedSelectedOption = [selectedOption];
      }
    }
    else {
      const listOfCachedOptionFromLatestTemplate = this.atListTemplateOfOption.filter(o => isNotNil(this.atListOfSelectedValue.find(v => this.compareWith(v, o.atValue))));
      const restSelectedValue                    = this.atListOfSelectedValue.filter(v => !isNotNil(listOfCachedOptionFromLatestTemplate.find(o => this.compareWith(o.atValue, v))));
      const listOfCachedOptionFromOld            = this.listOfCachedSelectedOption.filter(o => isNotNil(restSelectedValue.find(v => this.compareWith(o.atValue, v))));
      this.listOfCachedSelectedOption            = listOfCachedOptionFromLatestTemplate.concat(listOfCachedOptionFromOld);
    }
  }

  setInputValue(value: string, emit: boolean): void {
    this.inputValue = value;
    this.updateWidth();
    this.atOnSearch.emit({value, emit});
  }

  get isSingleMode(): boolean {
    return this.atMode === 'default';
  }

  get isMultipleOrTags(): boolean {
    return this.atMode === 'tags' || this.atMode === 'multiple';
  }

  get placeHolderDisplay(): string {
    return this.inputValue || this.isComposing || this.atListOfSelectedValue.length ? 'none' : 'block';
  }

  get searchDisplay(): string {
    return this.atOpen ? 'block' : 'none';
  }

  get selectedValueDisplay(): { [key: string]: string } {
    let showSelectedValue = false;
    let opacity           = 1;
    if (!this.atShowSearch) {
      showSelectedValue = true;
    }
    else {
      if (this.atOpen) {
        showSelectedValue = !(this.inputValue || this.isComposing);
        if (showSelectedValue) {
          opacity = 0.4;
        }
      }
      else {
        showSelectedValue = true;
      }
    }
    return {
      display: showSelectedValue ? 'block' : 'none',
      opacity: `${opacity}`
    };
  }

  get singleValueLabel(): string {
    return this.getPropertyFromValue(this.atListOfSelectedValue[0], 'atLabel');
  }

  focusOnInput(): void {
    setTimeout(() => {
      if (this.inputElement) {
        this.inputElement.nativeElement.focus();
      }
    });
  }

  // tslint:disable-next-line:no-any
  getPropertyFromValue(value: any, prop: string): string {
    const targetOption = this.listOfCachedSelectedOption.find(item => this.compareWith(item.atValue, value));
    return targetOption ? targetOption[prop] : '';
  }

  // tslint:disable-next-line:no-any
  isOptionDisplay(value: any): boolean {
    return (this.atMode === 'tags') || !!this.getPropertyFromValue(value, 'atLabel');
  }

  // tslint:disable-next-line:no-any
  removeValueFormSelected(value: any): void {
    if (this.atDisabled || this.getPropertyFromValue(value, 'atDisabled')) {
      return;
    }
    this._listOfSelectedValue = this.atListOfSelectedValue.filter(item => item !== value);
    this.atListOfSelectedValueChange.emit(this.atListOfSelectedValue);
  }

  updateWidth(): void {
    if (this.isMultipleOrTags && this.inputElement) {
      if (this.inputValue || this.isComposing) {
        this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
      }
      else {
        this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
      }
    }
  }

  @Output() OnClear: EventEmitter<any> = new EventEmitter<any>()

  clear(e) {
    e.preventDefault()
    console.log('clear ')
    this.OnClear.emit(e)
  }

  onKeyDownInput(e: KeyboardEvent): void {
    const keyCode     = e.keyCode;
    const eventTarget = e.target as HTMLInputElement;
    if (
      this.isMultipleOrTags &&
      !eventTarget.value &&
      // BackSpace
      keyCode === 8
    ) {
      e.preventDefault();
      if (this.atListOfSelectedValue.length) {
        this.removeValueFormSelected(this.atListOfSelectedValue[this.atListOfSelectedValue.length - 1]);
      }
    }
  }

  constructor(private renderer: Renderer2) {

  }
}
