import {Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AtSelectComponent}                                                     from '../../select/at-select.component';
import {NG_VALUE_ACCESSOR}                                                     from '@angular/forms';
import {animate, state, style, transition, trigger}                            from '@angular/animations';
import {AtFormatEmitEvent, AtTreeComponent, AtTreeNode}                        from '../../tree';
import {InputBoolean}                                                          from '../../utils/class-helper';
import {CdkConnectedOverlay, CdkOverlayOrigin}                                 from '@angular/cdk/overlay';
import {AtSelectTopControlComponent}                                           from '../../select/at-select-top-control.component';
import {AtOptionContainerComponent}                                            from '../../select';
import {merge, of, Subscription}                                               from 'rxjs';
import {filter, tap}                                                           from 'rxjs/operators';
import {AtTreeSelectTopControlComponent}                                       from '../at-tree-select-top-control/at-tree-select-top-control.component';

@Component({
  selector: 'at-tree-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AtTreeSelectComponent),
      multi: true
    }
  ],
  animations: [
    trigger('dropDownAnimation', [
      state('hidden', style({
        opacity: 0,
        display: 'none'
      })),
      state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
      })),
      state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
      })),
      transition('hidden => bottom', [
        style({
          opacity: 0,
          transform: 'scaleY(0.8)',
          transformOrigin: '0% 0%'
        }),
        animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
      ]),
      transition('bottom => hidden', [
        animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
          opacity: 0,
          transform: 'scaleY(0.8)',
          transformOrigin: '0% 0%'
        }))
      ]),
      transition('hidden => top', [
        style({
          opacity: 0,
          transform: 'scaleY(0.8)',
          transformOrigin: '0% 100%'
        }),
        animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
      ]),
      transition('top => hidden', [
        animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
          opacity: 0,
          transform: 'scaleY(0.8)',
          transformOrigin: '0% 100%'
        }))
      ])
    ])
  ],
  template: `
    <div
      cdkOverlayOrigin
      class="at-select at-select--{{atSize}}"
      [class.at-select--open]="atOpen"
      [class.at-select-single]="isSingleMode"
      [class.at-select--multiple]="isMultipleOrTags"
      [class.at-select--disabled]="atDisabled"
      (keydown)="onKeyDownCdkOverlayOrigin($event)"
      tabindex="0">
      <div
        at-tree-select-top-control
        [atOpen]="atOpen"
        (OnClear)="onClearSelection($event)"
        [allowClear]="atAllowClear"
        [compareWith]="compareWith"
        [atPlaceHolder]="atPlaceHolder"
        [atShowSearch]="atShowSearch"
        [atDisabled]="atDisabled"
        [atMode]="mode"
        [atListOfSelectedValue]="listOfSelectedValue"
        (atOnSearch)="onSearch($event.value,$event.emit)"
      >
      </div>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      (backdropClick)="closeDropDown()"
      (detach)="closeDropDown();"
      (attach)="attachSelect()"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayWidth]="overlayWidth"
      [cdkConnectedOverlayMinWidth]="overlayMinWidth"
      [cdkConnectedOverlayOpen]="!isDestroy">
      <div [ngClass]="dropDownClassMap" [@dropDownAnimation]="atOpen ? dropDownPosition : 'hidden' "
           [ngStyle]="atDropdownStyle">
        <div class="at-select__dropdown at-select__dropdown--bottom">
          <at-tree
            #treeRef
            [atData]="atNodes"
            [atMultiple]="atMultiple"
            [atSearchValue]="searchValue"
            [atCheckable]="atCheckable"
            [atAsyncData]="atAsyncData"
            [atShowExpand]="atShowExpand"
            [atShowLine]="atShowLine"
            [atExpandAll]="atDefaultExpandAll"
            [atCheckedKeys]="atCheckable ? value : []"
            [atSelectedKeys]="!atCheckable ? value : []"
            (atExpandChange)="atExpandChange.emit($event)"
            (atClick)="atTreeClick.emit($event)"
            (atCheckedKeysChange)="updateSelectedNodes()"
            (atSelectedKeysChange)="updateSelectedNodes()"
            (atCheckBoxChange)="atTreeCheckBoxChange.emit($event)"
          >
          </at-tree>
        </div>
      </div>
    </ng-template>
    <!--can not use ViewChild since it will match sub options in option group -->
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class AtTreeSelectComponent extends AtSelectComponent implements OnInit {


  @Input() @InputBoolean() atAllowClear = true;
  @Input() @InputBoolean() atShowExpand = true;
  @Input() @InputBoolean() atDropdownMatchSelectWidth = true;
  @Input() @InputBoolean() atShowSearch = false;
  @Input() @InputBoolean() atDisabled = false;
  @Input() @InputBoolean() atShowLine = false;
  @Input() @InputBoolean() atAsyncData = false;
  @Input() @InputBoolean() atMultiple = false;
  @Input() @InputBoolean() atDefaultExpandAll = false;
  @Input() atNodes: AtTreeNode[] = [];
  @Input() atDefaultExpandedKeys: string[] = [];
  @Input() atDisplayWith: (node: AtTreeNode) => string = (node: AtTreeNode) => node.title;

  @Output() readonly atOpenChange = new EventEmitter<boolean>();
  @Output() readonly atCleared = new EventEmitter<void>();
  @Output() readonly atRemoved = new EventEmitter<AtTreeNode>();
  @Output() readonly atExpandChange = new EventEmitter<AtFormatEmitEvent>();
  @Output() readonly atTreeClick = new EventEmitter<AtFormatEmitEvent>();
  @Output() readonly atTreeCheckBoxChange = new EventEmitter<AtFormatEmitEvent>();

  @Input() atCheckable = false

  @ViewChild('treeRef') treeRef: AtTreeComponent
  @ViewChild(CdkOverlayOrigin) cdkOverlayOrigin: CdkOverlayOrigin;
  @ViewChild(CdkConnectedOverlay) cdkConnectedOverlay: CdkConnectedOverlay;
  @ViewChild(AtTreeSelectTopControlComponent) atTreeSelectTopControlComponent: AtTreeSelectTopControlComponent;

  private _selectedNodes: AtTreeNode[] = []

  get mode() {
    return this.isMultiple ? 'tags' : 'default'
  }


  get selectedNodes(): AtTreeNode[] {
    return this._selectedNodes;
  }

  set selectedNodes(value: AtTreeNode[]) {
    this._selectedNodes = value;
    Promise.resolve().then(() => {
      this.listOfSelectedValue = this.selectedNodes
    })
  }

  updateSelectedNodes(): void {
    if (this.treeRef) {
      this.selectedNodes = [...(this.atCheckable ? this.treeRef.getCheckedNodeList() : this.treeRef.getSelectedNodeList())]
    }
  }

  get isMultiple(): boolean {
    return this.atMultiple || this.atCheckable;
  }

  writeValue(value: string[] | string): void {
    if (value) {
      if (this.isMultiple && Array.isArray(value)) {
        this.value = value;
      } else {
        this.value = [(value as string)];
      }
      this.updateSelectedNodes();
    } else {
      this.value = [];
      this.selectedNodes.forEach(node => {
        this.removeSelected(node, false);
      });
      this.selectedNodes = [];
    }
  }


  removeSelected(node: AtTreeNode, emit: boolean = true, event?: MouseEvent): void {
    node.isSelected = false;
    node.isChecked = false;
    if (this.atCheckable) {
      this.treeRef.atTreeService.conduct(node);
      this.treeRef.atTreeService.setCheckedNodeList(node);
    } else {
      this.treeRef.atTreeService.setSelectedNodeList(node, this.atMultiple);
    }
    if (emit) {
      this.atRemoved.emit(node);
    }

    // Do not trigger the popup
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
  }


  subscribeSelectionChange(): Subscription {
    return merge(
      this.atTreeClick.pipe(
        tap((event: AtFormatEmitEvent) => {
          const node = event.node;
          if (this.atCheckable && !node.isDisabled && !node.isDisableCheckbox) {
            node.isChecked = !node.isChecked;
            this.treeRef.atTreeService.conduct(node);
            this.treeRef.atTreeService.setCheckedNodeList(node);
          }
          if (this.atCheckable) {
            node.isSelected = false;
          }
        }),
        filter((event: AtFormatEmitEvent) => {
          return this.atCheckable ? (!event.node.isDisabled && !event.node.isDisableCheckbox) : !event.node.isDisabled;
        })
      ),
      this.atCheckable ? this.atTreeCheckBoxChange : of(),
      this.atCleared,
      this.atRemoved
    ).subscribe(() => {
      console.log('click node')
      this.updateSelectedNodes();
      const value = this._selectedNodes.map(node => node.key);
      this.value = [...value];
      if (this.atShowSearch) {
        this.searchValue = '';
      }
      if (this.isMultiple) {
        this.onChange(value);
        if (this.atShowSearch) {
          this.focus()
        }
      } else {
        this.closeDropDown();
        this.onChange(value.length ? value[0] : null);
      }

    });
  }

  focus(): void {
    if (this.atTreeSelectTopControlComponent.inputElement) {
      this.atTreeSelectTopControlComponent.inputElement.nativeElement.focus();
    }
  }


  ngOnInit(): void {
    this.isDestroy = false;
    this.subscribeSelectionChange()
  }


}
