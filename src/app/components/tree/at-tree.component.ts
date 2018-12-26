import {
  forwardRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  TemplateRef
}                                                   from '@angular/core';
import {NG_VALUE_ACCESSOR}                          from '@angular/forms';
import {Observable, ReplaySubject, Subscription}    from 'rxjs';
import {AtFormatBeforeDropEvent, AtFormatEmitEvent} from '../tree/interface';
import {AtTreeNode}                                 from './at-tree-node';
import {AtTreeService}                              from './at-tree.service';
import {InputBoolean, isNotNil}                     from '../utils/class-helper';

@Component({
  selector: 'at-tree',
  template: `
    <ul
      role="tree"
      unselectable="on"
      [ngClass]="atTreeClass">
      <at-tree-node
        *ngFor="let node of atNodes"
        [atTreeNode]="node"
        [atShowLine]="atShowLine"
        [atDraggable]="atDraggable"
        [atCheckable]="atCheckable"
        [atShowExpand]="atShowExpand"
        [atAsyncData]="atAsyncData"
        [atMultiple]="atMultiple"
        [atSearchValue]="atSearchValue"
        [atHideUnMatched]="atHideUnMatched"
        [atBeforeDrop]="atBeforeDrop"
        [atCheckStrictly]="atCheckStrictly"
        [atExpandAll]="atExpandAll"
        [atTreeTemplate]="atTreeTemplate"
        (clickNode)="atClick.emit($event)"
        (dblClick)="atDblClick.emit($event)"
        (contextMenu)="atContextMenu.emit($event)"
        (clickExpand)="atExpandChange.emit($event)"
        (clickCheckBox)="atCheckBoxChange.emit($event)"
        (atDragStart)="atOnDragStart.emit($event)"
        (atDragEnter)="atOnDragEnter.emit($event)"
        (atDragOver)="atOnDragOver.emit($event)"
        (atDragLeave)="atOnDragLeave.emit($event)"
        (atDrop)="atOnDrop.emit($event)"
        (atDragEnd)="atOnDragEnd.emit($event)">
      </at-tree-node>
    </ul>
  `,
  providers: [
    AtTreeService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AtTreeComponent),
      multi: true
    }
  ]
})

export class AtTreeComponent implements OnInit, OnChanges, OnDestroy {
  @Input() @InputBoolean() atShowIcon = false;
  @Input() @InputBoolean() atShowLine = false;
  @Input() @InputBoolean() atCheckStrictly = false;
  @Input() @InputBoolean() atCheckable = false;
  @Input() @InputBoolean() atShowExpand = true;
  @Input() @InputBoolean() atAsyncData = false;
  @Input() @InputBoolean() atDraggable = false;
  @Input() @InputBoolean() atMultiple = false;
  @Input() @InputBoolean() atExpandAll: boolean = false;
  @Input() @InputBoolean() atHideUnMatched = false;
  @Input() atBeforeDrop: (confirm: AtFormatBeforeDropEvent) => Observable<boolean>;

  @Input()
  // tslint:disable-next-line:no-any
  set atData(value: any[]) {
    if (Array.isArray(value)) {
      if (!this.atTreeService.isArrayOfAtTreeNode(value)) {
        // has not been new AtTreeNode
        this.atNodes = value.map(item => (new AtTreeNode(item)));
      } else {
        this.atNodes = value;
      }
      this.atTreeService.conductOption.isCheckStrictly = this.atCheckStrictly;
      this.atTreeService.initTree(this.atNodes);
    } else {
      if (value !== null) {
        console.warn('ngModel only accepts an array and must be not empty');
      }
    }
  }

  /**
   * @deprecated use
   * atExpandedKeys instead
   */
  @Input()
  set atDefaultExpandedKeys(value: string[]) {
    this.atDefaultSubject.next({type: 'atExpandedKeys', keys: value});
  }

  /**
   * @deprecated use
   * atSelectedKeys instead
   */
  @Input()
  set atDefaultSelectedKeys(value: string[]) {
    this.atDefaultSubject.next({type: 'atSelectedKeys', keys: value});
  }

  /**
   * @deprecated use
   * atCheckedKeys instead
   */
  @Input()
  set atDefaultCheckedKeys(value: string[]) {
    this.atDefaultSubject.next({type: 'atCheckedKeys', keys: value});
  }

  @Input()
  set atExpandedKeys(value: string[]) {
    this.atDefaultSubject.next({type: 'atExpandedKeys', keys: value});
  }

  @Input()
  set atSelectedKeys(value: string[]) {
    this.atDefaultSubject.next({type: 'atSelectedKeys', keys: value});
  }

  @Input()
  set atCheckedKeys(value: string[]) {
    this.atDefaultSubject.next({type: 'atCheckedKeys', keys: value});
  }

  @Input()
  set atSearchValue(value: string) {
    this._searchValue = value;
    this.atTreeService.searchExpand(value);
    if (isNotNil(value)) {
      this.atSearchValueChange.emit(this.atTreeService.formatEvent('search', null, null));
    }
  }

  get atSearchValue(): string {
    return this._searchValue;
  }

  // model bind
  @Output() readonly atExpandedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() readonly atSelectedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() readonly atCheckedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output() readonly atSearchValueChange: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  /**
   * @deprecated use
   * atSearchValueChange instead
   */
  @Output() readonly atOnSearchNode: EventEmitter<AtFormatEmitEvent> = new EventEmitter();

  @Output() readonly atClick: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atDblClick: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atContextMenu: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atCheckBoxChange: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atExpandChange: EventEmitter<AtFormatEmitEvent> = new EventEmitter();

  @Output() readonly atOnDragStart: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atOnDragEnter: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atOnDragOver: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atOnDragLeave: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atOnDrop: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atOnDragEnd: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  // tslint:disable-next-line:no-any
  @ContentChild('atTreeTemplate') atTreeTemplate: TemplateRef<any>;
  _searchValue = null;
  atDefaultSubject = new ReplaySubject<{ type: string, keys: string[] }>(6);
  atDefaultSubscription: Subscription;
  atNodes: AtTreeNode[] = [];
  prefixCls = 'at-tree';
  atTreeClass = {};

  onChange: (value: AtTreeNode[]) => void = () => null;
  onTouched: () => void = () => null;

  getTreeNodes(): AtTreeNode[] {
    return this.atNodes;
  }

  /**
   * public function
   */
  getCheckedNodeList(): AtTreeNode[] {
    return this.atTreeService.getCheckedNodeList();
  }

  getSelectedNodeList(): AtTreeNode[] {
    return this.atTreeService.getSelectedNodeList();
  }

  getHalfCheckedNodeList(): AtTreeNode[] {
    return this.atTreeService.getHalfCheckedNodeList();
  }

  getExpandedNodeList(): AtTreeNode[] {
    return this.atTreeService.getExpandedNodeList();
  }

  getMatchedNodeList(): AtTreeNode[] {
    return this.atTreeService.getMatchedNodeList();
  }

  setClassMap(): void {
    this.atTreeClass = {
      [this.prefixCls]: true,
      [this.prefixCls + '-show-line']: this.atShowLine,
      [`${this.prefixCls}-icon-hide`]: !this.atShowIcon,
      ['draggable-tree']: this.atDraggable
    };
  }

  writeValue(value: AtTreeNode[]): void {
    if (Array.isArray(value)) {
      this.atNodes = value;
      this.atTreeService.conductOption.isCheckStrictly = this.atCheckStrictly;
      this.atTreeService.initTree(this.atNodes);
    } else {
      if (value !== null) {
        console.warn('ngModel only accepts an array and should be not empty');
      }
    }
  }

  registerOnChange(fn: (_: AtTreeNode[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  constructor(public atTreeService: AtTreeService) {
  }

  ngOnInit(): void {
    this.setClassMap();
    this.atDefaultSubscription = this.atDefaultSubject.subscribe((data: { type: string, keys: string[] }) => {
      if (!data || !data.keys) {
        return;
      }
      switch (data.type) {
        case 'atExpandedKeys':
          this.atTreeService.calcExpandedKeys(data.keys, this.atNodes);
          this.atExpandedKeysChange.emit(data.keys);
          break;
        case 'atSelectedKeys':
          this.atTreeService.calcSelectedKeys(data.keys, this.atNodes, this.atMultiple);
          this.atSelectedKeysChange.emit(data.keys);
          break;
        case 'atCheckedKeys':
          this.atTreeService.calcCheckedKeys(data.keys, this.atNodes, this.atCheckStrictly);
          this.atCheckedKeysChange.emit(data.keys);
          break;
      }
    });
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if (changes.atCheckStrictly) {
      this.atTreeService.conductOption.isCheckStrictly = changes.atCheckStrictly.currentValue;
    }
  }

  ngOnDestroy(): void {
    if (this.atDefaultSubscription) {
      this.atDefaultSubscription.unsubscribe();
      this.atDefaultSubscription = null;
    }
  }
}
