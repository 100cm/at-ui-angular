import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChange,
  TemplateRef,
  ViewChild
}                                                   from '@angular/core';
import { fromEvent, Observable, Subject }             from 'rxjs';
import { takeUntil }                                  from 'rxjs/operators';
import { InputBoolean }                               from '../utils/class-helper';
import { AtTreeNode }                                 from './at-tree-node';
import { isCheckDisabled }                            from './at-tree-util';
import { AtTreeService }                              from './at-tree.service';
import { AtFormatBeforeDropEvent, AtFormatEmitEvent } from './interface';

@Component({
  selector: 'at-tree-node',
  template: `
    <li
      #dragElement
      role="treeitem"
      [style.display]="displayStyle"
      [ngClass]="atNodeClass"
      [class.at-tree-treenode-switcher-open]="isSwitcherOpen"
      [class.at-tree-treenode-switcher-close]="isSwitcherClose"
      [class.at-tree-treenode-checkbox-checked]="atTreeNode.isChecked"
      [class.at-tree-treenode-checkbox-indeterminate]="atTreeNode.isHalfChecked"
      [class.at-tree-treenode-selected]="atTreeNode.isSelected"
      [class.at-tree-treenode-loading]="atTreeNode.isLoading">
      <ng-container *ngIf="atShowExpand">
    <span
      [ngClass]="atNodeSwitcherClass"
      [class.at-tree-switcher_open]="isSwitcherOpen"
      [class.at-tree-switcher_close]="isSwitcherClose"
      (click)="_clickExpand($event)">
      <ng-container *ngIf="isShowSwitchIcon">
        <at-icon *ngIf="!atTreeNode.isLoading" [svg]="down" class="at-tree-switcher-icon">
          <ng-template #down> <svg viewBox="0 0 1024 1024" fill="currentColor" width="1em" height="1em"
                                   class="ng-tns-c12-112" data-icon="caret-down" aria-hidden="true">
            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
            </ng-template>
        </at-icon>
        <i *ngIf="atTreeNode.isLoading" class="at-btn__icon icon at-btn__loading icon-loader"></i>
      </ng-container>
      <ng-container *ngIf="atShowLine">
        <at-icon *ngIf="isShowLineIcon" [type]="isSwitcherOpen ? 'minus-square' : 'plus-square'"
                 class="at-tree-switcher-line-icon"></at-icon>
        <at-icon *ngIf="!isShowLineIcon" [type]="'file'" class="at-tree-switcher-line-icon"></at-icon>
      </ng-container>
    </span>
      </ng-container>
      <ng-container *ngIf="atCheckable">
    <span
      class="at-tree-checkbox"
      [class.at-tree-checkbox-checked]="atTreeNode.isChecked"
      [class.at-tree-checkbox-indeterminate]="atTreeNode.isHalfChecked"
      [class.at-tree-checkbox-disabled]="(atTreeNode.isDisabled || atTreeNode.isDisableCheckbox)"
      (click)="_clickCheckBox($event)">
      <span class="at-tree-checkbox-inner"></span>
    </span>
      </ng-container>
      <ng-container *ngIf="!atTreeTemplate">
    <span
      title="{{atTreeNode.title}}"
      [attr.draggable]="canDraggable"
      [attr.aria-grabbed]="canDraggable"
      [ngClass]="atNodeContentClass"
      [class.at-tree-node-content-wrapper-open]="isSwitcherOpen"
      [class.at-tree-node-content-wrapper-close]="isSwitcherClose"
      [class.at-tree-node-selected]="atTreeNode.isSelected"
      [class.draggable]="canDraggable">
      <span
        *ngIf="atTreeNode.origin.icon"
        [class.at-tree-icon__open]="isSwitcherOpen"
        [class.at-tree-icon__close]="isSwitcherClose"
        [class.at-tree-icon_loading]="atTreeNode.isLoading"
        [ngClass]="atNodeContentLoadingClass">
        <span
          [ngClass]="atNodeContentIconClass">
          <at-icon *ngIf="atIcon" [type]="atIcon"></at-icon>
        </span>
      </span>
      <span class="at-tree-title">
        <ng-container *ngIf="atTreeNode.isMatched">
          <span>
            {{highlightKeys[0]}}<span class="font-highlight">{{atSearchValue}}</span>{{highlightKeys[1]}}
          </span>
        </ng-container>
        <ng-container *ngIf="!atTreeNode.isMatched">
          {{atTreeNode.title}}
        </ng-container>
      </span>
    </span>
      </ng-container>
      <ng-template
        [ngTemplateOutlet]="atTreeTemplate"
        [ngTemplateOutletContext]="{ $implicit: atTreeNode }">
      </ng-template>

      <ul
        role="group"
        [attr.data-expanded]="atTreeNode.isExpanded"
        [ngClass]="atNodeChildrenClass"
        [@nodeState]="atTreeNode.isExpanded ? 'active' : 'inactive'">
        <at-tree-node
          *ngFor="let node of atTreeNode.getChildren()"
          [atTreeNode]="node"
          [atShowLine]="atShowLine"
          [atDraggable]="atDraggable"
          [atCheckable]="atCheckable"
          [atShowExpand]="atShowExpand"
          [atAsyncData]="atAsyncData"
          [atMultiple]="atMultiple"
          [atExpandAll]="atExpandAll"
          [atSearchValue]="atSearchValue"
          [atHideUnMatched]="atHideUnMatched"
          [atBeforeDrop]="atBeforeDrop"
          [atCheckStrictly]="atCheckStrictly"
          [atTreeTemplate]="atTreeTemplate"
          (clickNode)="clickNode.emit($event)"
          (dblClick)="dblClick.emit($event)"
          (contextMenu)="contextMenu.emit($event)"
          (clickExpand)="clickExpand.emit($event)"
          (clickCheckBox)="clickCheckBox.emit($event)"
          (atDragStart)="atDragStart.emit($event)"
          (atDragEnter)="atDragEnter.emit($event)"
          (atDragOver)="atDragOver.emit($event)"
          (atDragLeave)="atDragLeave.emit($event)"
          (atDrop)="atDrop.emit($event)"
          (atDragEnd)="atDragEnd.emit($event)">
        </at-tree-node>
      </ul>
    </li>
  `,
  preserveWhitespaces: false,
  animations: [
    trigger('nodeState', [
      state('inactive', style({
        opacity: '0',
        height: '0',
        display: 'none'
      })),
      state('active', style({
        opacity: '1',
        height: '*'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

export class AtTreeNodeComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('dragElement') dragElement: ElementRef;

  @Input() @InputBoolean() atShowLine: boolean;
  @Input() @InputBoolean() atShowExpand: boolean;
  @Input() @InputBoolean() atMultiple: boolean;
  @Input() @InputBoolean() atCheckable: boolean;
  @Input() @InputBoolean() atAsyncData: boolean;
  @Input() @InputBoolean() atCheckStrictly: boolean;
  @Input() @InputBoolean() atHideUnMatched = false;
  @Input() atTreeTemplate: TemplateRef<void>;
  @Input() atBeforeDrop: (confirm: AtFormatBeforeDropEvent) => Observable<boolean>;

  @Input()
  set atTreeNode(value: AtTreeNode) {
    // add to checked list & selected list
    if (value.isChecked) {
      this.atTreeService.setCheckedNodeList(value);
    }
    // add select list
    if (value.isSelected) {
      this.atTreeService.setSelectedNodeList(value, this.atMultiple);
    }
    if (!value.isLeaf) {
      this.atTreeService.setExpandedNodeList(value);
    }
    this._atTreeNode = value;
  }

  get atTreeNode(): AtTreeNode {
    return this._atTreeNode;
  }

  @Input()
  set atDraggable(value: boolean) {
    this._atDraggable = value;
    this.handDragEvent();
  }

  get atDraggable(): boolean {
    return this._atDraggable;
  }

  // default set
  @Input()
  set atExpandAll(value: boolean) {
    this._atExpandAll = value;
    if (value && this.atTreeNode && !this.atTreeNode.isLeaf) {
      this.atTreeNode.setExpanded(true);
      this.atTreeService.setExpandedNodeList(this.atTreeNode);
    }
  }

  get atExpandAll(): boolean {
    return this._atExpandAll;
  }

  @Input()
  set atSearchValue(value: string) {
    this.highlightKeys = [];
    if (value && this.atTreeNode.title.includes(value)) {
      // match the search value
      const index = this.atTreeNode.title.indexOf(value);
      this.highlightKeys.push(this.atTreeNode.title.slice(0, index));
      this.highlightKeys.push(this.atTreeNode.title.slice(index + value.length, this.atTreeNode.title.length));
    }
    this._searchValue = value;
  }

  get atSearchValue(): string {
    return this._searchValue;
  }

  // Output
  @Output() readonly clickNode: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly dblClick: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly contextMenu: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly clickCheckBox: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly clickExpand: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atDragStart: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atDragEnter: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atDragOver: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atDragLeave: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atDrop: EventEmitter<AtFormatEmitEvent> = new EventEmitter();
  @Output() readonly atDragEnd: EventEmitter<AtFormatEmitEvent> = new EventEmitter();

  // default var
  prefixCls = 'at-tree';
  highlightKeys = [];
  atNodeClass = {};
  atNodeSwitcherClass = {};
  atNodeContentClass = {};
  atNodeContentIconClass = {};
  atNodeContentLoadingClass = {};
  atNodeChildrenClass = {};

  /**
   * drag var
   */
  destory$ = new Subject();
  dragPos = 2;
  dragPosClass: object = {
    '0': 'drag-over',
    '1': 'drag-over-gap-bottom',
    '-1': 'drag-over-gap-top'
  };

  /**
   * default set
   */
  _atTreeNode: AtTreeNode;
  _searchValue = '';
  _atExpandAll = false;
  _atDraggable = false;
  oldAPIIcon = true;

  get atIcon(): string {
    return this.atTreeNode && this.atTreeNode.origin.icon;
  }

  get canDraggable(): boolean | null {
    return (this.atDraggable && this.atTreeNode && !this.atTreeNode.isDisabled) ? true : null;
  }

  get isShowLineIcon(): boolean {
    return !this.atTreeNode.isLeaf && this.atShowLine;
  }

  get isShowSwitchIcon(): boolean {
    return !this.atTreeNode.isLeaf && !this.atShowLine;
  }

  get isSwitcherOpen(): boolean {
    return (this.atTreeNode.isExpanded && !this.atTreeNode.isLeaf);
  }

  get isSwitcherClose(): boolean {
    return (!this.atTreeNode.isExpanded && !this.atTreeNode.isLeaf);
  }

  get displayStyle(): string {
    // TODO
    return (this.atSearchValue && this.atHideUnMatched && !this.atTreeNode.isMatched && !this.atTreeNode.isExpanded) ? 'none' : '';
  }

  /**
   * reset node class
   */
  setClassMap(): void {
    this.atNodeClass = {
      [`${this.prefixCls}-treenode-disabled`]: this.atTreeNode.isDisabled
    };
    this.atNodeSwitcherClass = {
      [`${this.prefixCls}-switcher`]: true,
      [`${this.prefixCls}-switcher-noop`]: this.atTreeNode.isLeaf
    };
    this.atNodeContentClass = {
      [`${this.prefixCls}-node-content-wrapper`]: true
    };
    this.atNodeContentIconClass = {
      [`${this.prefixCls}-iconEle`]: true,
      [`${this.prefixCls}-icon__customize`]: true
    };
    this.atNodeContentLoadingClass = {
      [`${this.prefixCls}-iconEle`]: true
    };
    this.atNodeChildrenClass = {
      [`${this.prefixCls}-child-tree`]: true,
      [`${this.prefixCls}-child-tree-open`]: true
    };
  }

  /**
   * click node to select, 200ms to dbl click
   */
  @HostListener('click', ['$event'])
  atClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.atTreeNode.isSelectable) {
      this.atTreeService.setNodeActive(this.atTreeNode, this.atMultiple);
    }
    this.clickNode.emit(this.atTreeService.formatEvent('click', this.atTreeNode, event));
  }

  @HostListener('dblclick', ['$event'])
  atDblClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dblClick.emit(this.atTreeService.formatEvent('dblclick', this.atTreeNode, event));
  }

  /**
   * @param event
   */
  @HostListener('contextmenu', ['$event'])
  atContextMenu(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.contextMenu.emit(this.atTreeService.formatEvent('contextmenu', this.atTreeNode, event));
  }

  /**
   * collapse node
   * @param event
   */
  _clickExpand(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.atTreeNode.isLoading && !this.atTreeNode.isLeaf) {
      // set async state
      if (this.atAsyncData && this.atTreeNode.getChildren().length === 0 && !this.atTreeNode.isExpanded) {
        this.atTreeNode.isLoading = true;
      }
      this.atTreeNode.setExpanded(!this.atTreeNode.isExpanded);
      this.atTreeService.setExpandedNodeList(this.atTreeNode);
      this.clickExpand.emit(this.atTreeService.formatEvent('expand', this.atTreeNode, event));
    }
  }

  /**
   * check node
   * @param event
   */
  _clickCheckBox(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    // return if node is disabled
    if (isCheckDisabled(this.atTreeNode)) {
      return;
    }
    this.atTreeNode.setChecked(!this.atTreeNode.isChecked);
    this.atTreeService.setCheckedNodeList(this.atTreeNode);
    if (!this.atCheckStrictly) {
      this.atTreeService.conduct(this.atTreeNode);
    }
    this.clickCheckBox.emit(this.atTreeService.formatEvent('check', this.atTreeNode, event));
  }

  /**
   * drag event
   * @param e
   */
  clearDragClass(): void {
    const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
    dragClass.forEach(e => {
      this.renderer.removeClass(this.dragElement.nativeElement, e);
    });
  }

  handleDragStart(e: DragEvent): void {
    e.stopPropagation();
    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (error) {
      // empty
    }
    this.atTreeService.setSelectedNode(this.atTreeNode);
    this.atTreeNode.setExpanded(false);
    this.atDragStart.emit(this.atTreeService.formatEvent('dragstart', null, e));
  }

  handleDragEnter(e: DragEvent): void {
    e.preventDefault();
    e.stopPropagation();
    // reset position
    this.dragPos = 2;
    this.ngZone.run(() => {
      if ((this.atTreeNode !== this.atTreeService.getSelectedNode()) && !this.atTreeNode.isLeaf) {
        this.atTreeNode.setExpanded(true);
      }
    });
    this.atDragEnter.emit(this.atTreeService.formatEvent('dragenter', this.atTreeNode, e));
  }

  handleDragOver(e: DragEvent): void {
    e.preventDefault();
    e.stopPropagation();
    const dropPosition = this.atTreeService.calcDropPosition(e);
    if (this.dragPos !== dropPosition) {
      this.clearDragClass();
      this.dragPos = dropPosition;
      // leaf node will pass
      if (!(this.dragPos === 0 && this.atTreeNode.isLeaf)) {
        this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
      }
    }
    this.atDragOver.emit(this.atTreeService.formatEvent('dragover', this.atTreeNode, e));
  }

  handleDragLeave(e: DragEvent): void {
    e.stopPropagation();
    this.ngZone.run(() => {
      this.clearDragClass();
    });
    this.atDragLeave.emit(this.atTreeService.formatEvent('dragleave', this.atTreeNode, e));
  }

  handleDragDrop(e: DragEvent): void {
    e.preventDefault();
    e.stopPropagation();
    this.ngZone.run(() => {
      this.clearDragClass();
      if (this.atTreeService.getSelectedNode() === this.atTreeNode) {
        return;
      } else if (this.dragPos === 0 && this.atTreeNode.isLeaf) {
        return;
      }
      // pass if node is leafNo
      if (this.atBeforeDrop) {
        this.atBeforeDrop({
          dragNode: this.atTreeService.getSelectedNode(),
          node: this.atTreeNode,
          pos: this.dragPos
        }).subscribe((canDrop: boolean) => {
          if (canDrop) {
            this.atTreeService.dropAndApply(this.atTreeNode, this.dragPos);
          }
          this.atDrop.emit(this.atTreeService.formatEvent('drop', this.atTreeNode, e));
          this.atDragEnd.emit(this.atTreeService.formatEvent('dragend', this.atTreeNode, e));
        });
      } else if (this.atTreeNode) {
        this.atTreeService.dropAndApply(this.atTreeNode, this.dragPos);
        this.atDrop.emit(this.atTreeService.formatEvent('drop', this.atTreeNode, e));
      }
    });
  }

  handleDragEnd(e: DragEvent): void {
    e.stopPropagation();
    this.ngZone.run(() => {
      // if user do not custom beforeDrop
      if (!this.atBeforeDrop) {
        this.atTreeService.setSelectedNode(null);
        this.atDragEnd.emit(this.atTreeService.formatEvent('dragend', this.atTreeNode, e));
      }
    });
  }

  /**
   * 监听拖拽事件
   */
  handDragEvent(): void {
    this.ngZone.runOutsideAngular(() => {
      if (this.atDraggable) {
        this.destory$ = new Subject();
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragstart').pipe(takeUntil(this.destory$)).subscribe((e: DragEvent) => this.handleDragStart(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragenter').pipe(takeUntil(this.destory$)).subscribe((e: DragEvent) => this.handleDragEnter(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragover').pipe(takeUntil(this.destory$)).subscribe((e: DragEvent) => this.handleDragOver(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragleave').pipe(takeUntil(this.destory$)).subscribe((e: DragEvent) => this.handleDragLeave(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'drop').pipe(takeUntil(this.destory$)).subscribe((e: DragEvent) => this.handleDragDrop(e));
        fromEvent<DragEvent>(this.elRef.nativeElement, 'dragend').pipe(takeUntil(this.destory$)).subscribe((e: DragEvent) => this.handleDragEnd(e));
      } else {
        this.destory$.next();
        this.destory$.complete();
      }
    });
  }

  constructor(private atTreeService: AtTreeService, private ngZone: NgZone, private renderer: Renderer2, private elRef: ElementRef) {
  }

  ngOnInit(): void {
    this.setClassMap();
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    this.setClassMap();
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}
