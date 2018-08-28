import {
  ChangeDetectorRef,
  Component, EventEmitter,
  Input,
  OnInit,
  Optional, Output,
  SkipSelf,
  TemplateRef
}                            from '@angular/core';
import {AtTreeNodeComponent} from "./at-tree-node/at-tree-node.component";
import {ExpandAnimation}     from "../animations/expand-animation";
import {AtTreeRootComponent} from "./at-tree-root/at-tree-root.component";
import {AtTreeService}       from "./at-tree.service";

@Component({
             selector: 'at-tree',
             template: `
               <div class="at-tree">
                 <span *ngIf="expandState == 'hidden'" (click)="expand()" class="at-tree-icon-mode">
                 <ng-container *ngIf="!openIcon; else openIconTemplate">
                     <span class="at-tree-{{iconMode}}"
                           [class.at-tree-arrow--open]="(expandState == 'expand' && iconMode =='arrow' )"
                           [class.at-tree-plus--open]="(expandState == 'expand' && iconMode =='plus' )"
                     ></span>
                 </ng-container>
                   <ng-template #openIconTemplate [ngTemplateOutlet]="openIcon"></ng-template>
                 </span>

                 <span *ngIf="expandState == 'expand'" (click)="expand()" class="at-tree-icon-mode">
                 <ng-container *ngIf="!closeIcon; else closeIconTemplate">
                     <span class="at-tree-{{iconMode}}"
                           [class.at-tree-arrow--open]="(expandState == 'expand' && iconMode =='arrow' )"
                           [class.at-tree-plus--open]="(expandState == 'expand' && iconMode =='plus' )"
                     ></span>
                 </ng-container>
                   <ng-template #closeIconTemplate [ngTemplateOutlet]="closeIcon"></ng-template>
                 </span>

                 <span *ngIf="expandState == 'loading'" class="at-tree-icon-mode">
                    <span class="at-tree-loading"></span>
                 </span>


                 <span *ngIf="atCheckable" (click)="checkAll()" class="at-tree-checkbox"
                       [ngClass]="{'at-checkbox--checked':checked,'at-checkbox--indeterminate':indeterminate}">
                    <span class="at-checkbox__inner"></span>
                 </span>
                 <div class="at-tree-content-wrapper">
                   {{title}}
                 </div>
                 <li class="at-tree-child" [@expandAnimation]="expandState"
                     [ngClass]="{'at-tree-child--line':at_root_tree?.atShowLine}">
                   <ul>
                     <ng-content></ng-content>
                   </ul>
                 </li>
               </div>
             `,
             animations: [
               ExpandAnimation
             ]

           })
export class AtTreeComponent implements OnInit {

  constructor(@Optional() public at_root_tree: AtTreeRootComponent,
              @Optional() @SkipSelf() public at_tree: AtTreeComponent,
              private at_tree_service: AtTreeService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.at_root_tree.pushTree(this)
    if (this.at_tree) {
      this.at_tree.pushTree(this)
      this.checkParent()
      this.checkRoot()
    }
  }

  pushTree(tree) {
    this.tree_list.push(tree)
  }

  pushNode(node) {
    this.tree_node_list.push(node)
  }

  _checked = false

  @Input() title = ''

  @Input() openIcon: string | TemplateRef<any>

  @Input() closeIcon: string | TemplateRef<any>

  @Input() key = ''

  @Output() atExpandChange = new EventEmitter()

  @Output() checkedChange = new EventEmitter()

  tree_node_list = []

  tree_list = []


  private _atCheckable: boolean = true


  get atCheckable(): boolean {
    return this._atCheckable;
  }

  set atCheckable(value: boolean) {
    this._atCheckable = value;
    this.cdr.detectChanges()
  }


  ngAfterViewInit() {
    this.at_tree_service.atCheckable.subscribe(data => {
      this.atCheckable = data
      this.tree_node_list.forEach(tree_node => {
        tree_node.checkable = data
      })
    })
  }

  get checked() {
    return this._checked
  }


  @Input()
  set checked(value) {
    this._checked = value;
    this.setChildTree(value);
    if (this.at_tree) {
      this.checkRoot()
      this.checkParent()
    }
    this.indeterminate = this.at_tree_service.checkTreeNodeIndeterminate(this).indeterminate
  }

  setChildTree(value) {
    (this.tree_node_list || []).forEach((tree: AtTreeNodeComponent) => {
      if (!tree.atDisabled) {
        tree._checked = value
      }
    });

    (this.tree_list || []).forEach(tree => {
      tree.setChildTree(value)
      tree._checked       = value
      tree._indeterminate = this.at_tree_service.checkTreeNodeIndeterminate(tree).indeterminate
    })
  }

  checkRoot() {
    let root_tree: AtTreeComponent = this.at_tree_service.getTopTree(this)
    root_tree._checked             = this.at_tree_service.checkTreeNodeIndeterminate(root_tree).checked
    root_tree.indeterminate        = this.at_tree_service.checkTreeNodeIndeterminate(root_tree).indeterminate
  }

  checkParent() {
    this.at_tree._checked      = this.at_tree_service.checkTreeNodeIndeterminate(this.at_tree).checked
    this.at_tree.indeterminate = this.at_tree_service.checkTreeNodeIndeterminate(this.at_tree).indeterminate
  }

  private _indeterminate = false


  @Input()
  get indeterminate(): boolean {
    return this._indeterminate;
  }

  set indeterminate(value: boolean) {
    this._indeterminate = value;
  }

  checkAll() {
    let checked_status = this.at_tree_service.checkExceptDisableChecked(this).checked
    this.checked       = !checked_status
    this.checkedChange.emit(this.checked)
    this.at_tree_service.nodeCheckChange = {key: this.key, node: this, checked: this.checked}
  }

  expandState = 'hidden'


  @Input()
  set atExpand(value) {
    this.expandState = value
  }

  expand() {
    this.expandState == 'expand' ? this.expandState = 'hidden' : this.expandState = 'expand'
    this.atExpandChange.emit({state: this.expandState, key: this.key})
    this.at_tree_service.treeExpandStatusChange = {state: this.expandState, key: this.key}
  }


  get iconMode() {
    return this.at_root_tree.atIconMode || 'arrow'
  }

  ngOnDestroy() {

  }


}
