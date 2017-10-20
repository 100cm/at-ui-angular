import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'atPagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.css']
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
  size: 'small' | 'normal' = 'normal'

  @Input()
  simple: boolean = false

  @Output() pageIndexChange: EventEmitter<any> = new EventEmitter()
  @Output() pageSizeChange: EventEmitter<any> = new EventEmitter()


  private _atPageIndex

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
    this._buildIndexes()
    this.pageIndexChange.emit(this._current)

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
    this._buildIndexes()
  }

  /**
   * 生成中间页数段落
   * @private
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
    this._buildIndexes()
    this.pageIndexChange.emit(this.atPageIndex)
  }

  get _isLastIndex() {
    return this._current === this._lastIndex;
  }

  get _isFirstIndex() {
    return this._current === this._firstIndex;
  }

  /**
   * 向前向后跳*页
   * @param pageSize
   * @private
   */
  _jumpBefore(pageSize) {
    this._jumpPage(this._current - Math.round(pageSize / 2));
  }

  _jumpAfter(pageSize) {
    this._jumpPage(this._current + Math.round(pageSize / 2));
  }

  _atPageIndexChange(value: any) {

    if (value > this._lastIndex) {
      value = this._lastIndex
    }
    if (value == this._firstIndex) {
      value = 1
    }
    this._current = value
    this._buildIndexes()
    this.pageIndexChange.emit(this._current)
  }
}
