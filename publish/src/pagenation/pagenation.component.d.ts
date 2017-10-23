import { EventEmitter, OnInit } from '@angular/core';
export declare class PagenationComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    _current: number;
    _total: number;
    _pageSize: number;
    _firstIndex: number;
    _pages: any[];
    _options: number[];
    _lastIndex: number;
    size: 'small' | 'normal';
    simple: boolean;
    pageIndexChange: EventEmitter<any>;
    pageSizeChange: EventEmitter<any>;
    private _atPageIndex;
    atQuickJump: boolean;
    atPageSizer: boolean;
    readonly _roundPageSize: number;
    atPageIndex: number;
    total: number;
    pageSize: number;
    /**
     * 生成中间页数段落
     * @private
     */
    _buildIndexes(): void;
    _jumpPage(index: any): void;
    readonly _isLastIndex: boolean;
    readonly _isFirstIndex: boolean;
    /**
     * 向前向后跳*页
     * @param pageSize
     * @private
     */
    _jumpBefore(pageSize: any): void;
    _jumpAfter(pageSize: any): void;
    _atPageIndexChange(value: any): void;
}
