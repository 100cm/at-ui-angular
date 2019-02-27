import {
  forwardRef,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { DropDownAnimation } from '../../animations/drop-down-animation';
import { AtSelectControlService } from '../../select/at-select-control.service';
import { AtSelectComponent } from '../../select/at-select.component';
import { AtTreeNode, AtTreeNodeOptions } from '../../tree/at-tree-node';
import { AtTreeComponent } from '../../tree/at-tree.component';
import { AtTreeService } from '../../tree/at-tree.service';
import { AtFormatEmitEvent } from '../../tree/interface';
import { InputBoolean, isNotNil } from '../../utils/class-helper';
import { AtTreeSelectTopControlComponent } from '../at-tree-select-top-control/at-tree-select-top-control.component';

@Component({
  selector: 'at-tree-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AtTreeSelectComponent),
      multi: true
    },
    AtSelectControlService, AtTreeService
  ],
  animations: [
    DropDownAnimation
  ],
  template: `
    <div
      cdkOverlayOrigin
      class="at-select at-select--{{atSize}}"
      [class.at-select--open]="atOpen"
      [class.at-select-single]="!isMultiple"
      [class.at-select--multiple]="isMultiple"
      [class.at-select--disabled]="atDisabled"
      tabindex="0">
      <div
        at-tree-select-top-control
        [allowClear]="atAllowClear"
        [atPlaceHolder]="atPlaceHolder"
        [atShowSearch]="atShowSearch"
        [multiple]="isMultiple"
        [atDisabled]="atDisabled"
        [singleValueLabel]="atPlaceHolder"
      >
      </div>
    </div>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      (backdropClick)="close()"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      [cdkConnectedOverlayWidth]="overlayWidth"
      [cdkConnectedOverlayMinWidth]="overlayMinWidth"
      [cdkConnectedOverlayOpen]="atOpen">
      <div [ngClass]="dropDownClassMap" [@dropDownAnimation]="atOpen ? dropDownPosition : 'hidden' "
           [ngStyle]="atDropdownStyle">
        <div *ngIf="showTree" class="at-select__dropdown at-select__dropdown--bottom">
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
            (atCheckedKeysChange)="updateSelectedNodes('check')"
            (atSelectedKeysChange)="updateSelectedNodes('select')"
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

  isDestroy = false;
  @Input() @InputBoolean() atAllowClear = true;
  @Input() @InputBoolean() atShowExpand = true;
  @Input() @InputBoolean() atShowSearch = false;
  @Input() @InputBoolean() atDisabled = false;
  @Input() @InputBoolean() atShowLine = false;
  @Input() @InputBoolean() atAsyncData = false;
  @Input() @InputBoolean() atMultiple = false;
  @Input() @InputBoolean() atDefaultExpandAll = false;
  private _atNodes: AtTreeNodeOptions[] = [];
  @Input() atDefaultExpandedKeys: string[] = [];
  @Input() atDisplayWith: (node: AtTreeNode) => string = (node: AtTreeNode) => node.title;
  @Output() readonly atCleared = new EventEmitter<void>();
  @Output() readonly atRemoved = new EventEmitter<AtTreeNode>();
  @Output() readonly atExpandChange = new EventEmitter<AtFormatEmitEvent>();
  @Output() readonly atTreeClick = new EventEmitter<AtFormatEmitEvent>();
  @Output() readonly atTreeCheckBoxChange = new EventEmitter<AtFormatEmitEvent>();

  get atNodes(): AtTreeNodeOptions[] {
    return this._atNodes;
  }

  treeNodes = [];

  @Input()
  set atNodes(value: AtTreeNodeOptions[]) {
    if (Array.isArray(value)) {
      if (!this.atTreeService.isArrayOfAtTreeNode(value)) {
        // has not been new AtTreeNode
        this.treeNodes = value.map(item => (new AtTreeNode(item)));
      } else {
        this.treeNodes = value;
      }
      this.atTreeService.conductOption.isCheckStrictly = false;
      this.atTreeService.initTree(this.treeNodes);
    } else {
      if (value !== null) {
        console.warn('ngModel only accepts an array and must be not empty');
      }
    }
    this._atNodes = value;
    this.updateSelectedNodes();
  }

  @Input() atCheckable = false;

  @ViewChild('treeRef') treeRef: AtTreeComponent;
  @ViewChild(AtTreeSelectTopControlComponent) atTreeSelectTopControlComponent: AtTreeSelectTopControlComponent;

  showTree = true;

  private _selectedNodes: AtTreeNode[] = [];

  get selectedNodes(): AtTreeNode[] {
    return this._selectedNodes;
  }

  set selectedNodes(value: AtTreeNode[]) {
    this._selectedNodes = value;
  }

  updateSelectedNodes(type?: string): void {
    if (this.treeRef) {
      this.selectedNodes = [...(this.atCheckable ? this.treeRef.getCheckedNodeList() : this.treeRef.getSelectedNodeList())];
    } else {
      if (this.atCheckable) {
        this.atTreeService.calcCheckedKeys(this.value, this.treeNodes, this.multiple);
      } else {
        this.atTreeService.calcSelectedKeys(this.value, this.treeNodes, this.multiple);
      }
      this.selectedNodes = [...(this.atCheckable ? this.atTreeService.getCheckedNodeList() : this.atTreeService.getSelectedNodeList())];
    }
    this.at_select_control_service.$optionsChange.next(this.selectedNodes);

  }

  get isMultiple(): boolean {
    return this.atMultiple || this.atCheckable;
  }

  writeValue(value: string[] | string): void {
    if (isNotNil(value)) {
      if (this.isMultiple && Array.isArray(value)) {
        this.value = value;
      } else {
        this.value = [(value as string)];
      }
    } else {
      this.value = [];
      this.selectedNodes = [];
    }
    this.updateSelectedNodes();
  }

  subExpandeChange(): void {
    this.atExpandChange.subscribe(e => {
      if (this.atShowSearch && this.atTreeSelectTopControlComponent.inputElement) {
        this.atTreeSelectTopControlComponent.inputElement.nativeElement.focus();
      }
    });
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
    ).subscribe((e) => {
      this.updateSelectedNodes();
      const value = this._selectedNodes.map(node => node.key);
      this.value = [...value];
      if (this.atShowSearch) {
        this.atTreeSelectTopControlComponent.inputElement.nativeElement.focus();
      }
      if (this.isMultiple) {
        this.onChange(value);
      } else {
        this.close();
        this.onChange(value.length ? value[0] : null);
      }

    });
  }

  subSelectChange(): void {
    this.at_select_control_service.$selectOptionChange.asObservable().pipe(filter(v => v[0] !== null)).subscribe(options => {
        this.selectedNodes = options;
        const value = this._selectedNodes.map(node => node.key);
        this.value = [...value];
        if (this.isMultiple) {
          this.onChange(value);
        } else {
          this.onChange(value.length ? value[0] : null);
        }
      }
    );
  }

  subOpenStatus(): void {
    this.at_select_control_service.$openStatus.asObservable().pipe().subscribe((open: boolean) => {
      if (open) {
        this.updateCdkConnectedOverlayStatus();
      }
      this.showTree = open;
      setTimeout(_ => this.atOpen = open);
    });
  }

  ngOnInit(): void {
    this.isDestroy = false;
    this.subscribeSelectionChange();
    this.subOpenStatus();
    this.subSearch();
    this.subExpandeChange();
    this.subSelectChange();
  }

  subSearch(): void {
    this.at_select_control_service.$searchValueChange.asObservable().subscribe(value => {
      this.searchValue = value;
    });
  }

  constructor(public at_select_control_service: AtSelectControlService, public atTreeService: AtTreeService) {
    super(at_select_control_service);
  }

}
