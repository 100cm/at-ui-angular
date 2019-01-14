import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'at-pagination',
  template: `
    <div>
      <ul *ngIf="!simple" class="at-pagination at-pagination--{{size}}">
    <span class="at-pagination__total">
      {{'Page.total' | atI18n}} {{total}} {{'Page.result' | atI18n}}
    </span>
        <li (click)="_jumpPage(_current-1)" [class.at-pagination--disabled]="_isFirstIndex"
            [attr.title]="'Page.previous' | atI18n"
            class="at-pagination__prev">
          <i class="icon icon-chevron-left"></i>
        </li>
        <li
          [attr.title]="'Page.first' | atI18n"
          class="at-pagination__item"
          [class.at-pagination__item--active]="_isFirstIndex"
          (click)="_jumpPage(_firstIndex)">
          {{_firstIndex}}
        </li>
        <li
          [attr.title]="('Page.back' | atI18n)+ ' ' +_roundPageSize+ ' ' +('Page.page' | atI18n)"
          class="at-pagination__item at-pagination__item--jump-prev"
          (click)="_jumpBefore(_pageSize)"
          *ngIf="(_lastIndex >9)&&(_current-3>_firstIndex)">
          <i class="icon icon-chevrons-left"></i>
        </li>
        <li
          *ngFor="let page of _pages"
          [attr.title]="page.index"
          (click)="_jumpPage(page.index)"
          class="at-pagination__item"
          [class.at-pagination__item--active]="_current==page.index">
          {{page.index}}
        </li>
        <li [attr.title]="('Page.to' | atI18n) + ' ' +_roundPageSize+ ' ' + ('Page.page' | atI18n)"
            (click)="_jumpAfter(_pageSize)"
            class="at-pagination__item at-pagination__item--jump-next"
            *ngIf="(_lastIndex >9)&&(_current+3<_lastIndex)"
        >
          <i class="icon icon-chevrons-right"></i>
        </li>
        <li
          [attr.title]="( 'Page.last' | atI18n) +':'+_lastIndex"
          class="at-pagination__item"
          [class.at-pagination__item--active]="_isLastIndex"
          (click)="_jumpPage(_lastIndex)"
          *ngIf="(_lastIndex>0)&&(_lastIndex!==_firstIndex)">
          {{_lastIndex}}
        </li>
        <li [attr.title]="'Page.next' | atI18n"
            [class.at-pagination--disabled]="_isLastIndex "
            class="at-pagination__next" (click)="_jumpPage(_current+1)">
          <i class="icon icon-chevron-right"></i>
        </li>

        <ng-container *ngIf="atPageSizer">
          <div class="at-pagination__sizer">
            <at-select [atSize]="'small'" [(ngModel)]="pageSize" (ngModelChange)="_atPageSizeChange($event)">
              <at-option *ngFor="let item of _options" [atValue]="item"
                         [atLabel]="item +
                                     ('Page.per' | atI18n) ">
              </at-option>
            </at-select>
          </div>
        </ng-container>

        <div *ngIf="atQuickJump" class="at-pagination__quickjump">
          <span>{{'Page.go' | atI18n}}</span>
          <input type="text" class="at-input__original" [ngModel]="atPageIndex"
                 (ngModelChange)="_atPageIndexChange($event)">
          <span>{{'Page.page' | atI18n}}</span>
        </div>
      </ul>

      <ul *ngIf="simple" class="at-pagination at-pagination--simple" data-v-a01f69b8="">
        <li title="上一页"
            (click)="_jumpPage(_current-1)" [class.at-pagination--disabled]="_isFirstIndex"
            class="at-pagination__prev">
          <i class="icon icon-chevron-left"></i>
        </li>
        <div class="at-pagination__simple-paging">
          <input [ngModel]="atPageIndex"
                 (ngModelChange)="_atPageIndexChange($event)"
                 type="text" class="at-input__original">
          <span>/</span>
          <span class="at-pagination__paging-total">{{_lastIndex}}</span></div>
        <li class="at-pagination__next"
            [class.at-pagination--disabled]="_isLastIndex "
            class="at-pagination__next" (click)="_jumpPage(_current+1)"
        ><i class="icon icon-chevron-right"></i></li>
      </ul>
    </div>


  `
})
export class PagenationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  _current = 1;
  _total: number;
  _pageSize = 10;
  _firstIndex = 1;
  _pages = [];
  _options = [10, 20, 30, 40, 50];
  _lastIndex = Infinity;

  @Input()
  size: 'small' | 'normal' = 'normal';

  get options(): number[] {
    return this._options;
  }

  @Input()
  set atOptions(value: number[]) {
    this._options = value;
  }

  @Input()
  simple: boolean = false;

  @Output() pageIndexChange: EventEmitter<any> = new EventEmitter();
  @Output() pageSizeChange: EventEmitter<any> = new EventEmitter();

  private _atPageIndex;

  @Input()
  atQuickJump: boolean = false;
  @Input()
  atPageSizer: boolean = false;

  get _roundPageSize() {
    return Math.round(this._pageSize / 2);
  }

  get atPageIndex() {
    return this._current;
  }

  @Input()
  set atPageIndex(value) {
    if (this._current === value) {
      return;
    }
    if (value > this._lastIndex || value < this._firstIndex) {
      return;
    }

    this._current = Number(value);
    this._buildIndexes();
    this.pageIndexChange.emit(this._current);

  }

  get total(): number {
    return this._total;
  }

  @Input()
  set total(value: number) {
    this._total = value;
    this._buildIndexes();
  }

  get pageSize(): number {
    return this._pageSize;
  }

  @Input()
  set pageSize(value: number) {
    this._pageSize = value;
    this._buildIndexes();
  }

  /**
   * 生成中间页数段落
   */
  _buildIndexes() {
    this._lastIndex = Math.ceil(this._total / this._pageSize);

    if (this._current > this._lastIndex) {
      this._jumpPage(this._lastIndex);
    }
    const tmpPages = [];
    if (this._lastIndex <= 9) {
      for (let i = 2; i <= this._lastIndex - 1; i++) {
        tmpPages.push({index: i});
      }
    } else {
      const current = +this._current;
      let left = Math.max(2, current - 2);
      let right = Math.min(current + 2, this._lastIndex - 1);

      if (current - 1 <= 2) {
        right = 5;
      }

      if (this._lastIndex - current <= 2) {
        left = this._lastIndex - 4;
      }

      for (let i = left; i <= right; i++) {
        tmpPages.push({index: i});
      }
    }
    this._pages = tmpPages;
  }

  _jumpPage(index) {
    if (index === this._firstIndex - 1 || index === this._lastIndex + 1 || index === this.atPageIndex) {
      return;
    }

    if (index < this._firstIndex) {
      this._current = this._firstIndex;
    } else if (index > this._lastIndex) {
      this._current = this._lastIndex;
    } else {
      this._current = index;
    }
    this._buildIndexes();
    this.pageIndexChange.emit(this.atPageIndex);
  }

  get _isLastIndex() {
    return this._current === this._lastIndex;
  }

  get _isFirstIndex() {
    return this._current === this._firstIndex;
  }

  /**
   * 向前向后跳*页
   */
  _jumpBefore(pageSize) {
    this._jumpPage(this._current - Math.round(pageSize / 2));
  }

  _jumpAfter(pageSize) {
    this._jumpPage(this._current + Math.round(pageSize / 2));
  }

  _atPageIndexChange(value: any) {
    if (value > this._lastIndex) {
      value = this._lastIndex;
    }
    if (value === this._firstIndex) {
      value = 1;
    }
    this._current = value;
    this._buildIndexes();
    this.pageIndexChange.emit(this._current);
  }

  _atPageSizeChange(value: any) {
    if (value !== this.pageSize) {
      this.pageSize = value;
      this.pageSizeChange.emit(this.pageSize);
    }
  }
}
