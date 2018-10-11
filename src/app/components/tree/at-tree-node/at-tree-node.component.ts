import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnInit,
  Optional,
  Output
}                             from '@angular/core';
import {AtTreeComponent}      from "../at-tree.component";
import {AtTreeService}        from "../at-tree.service";
import {NG_VALUE_ACCESSOR}    from "@angular/forms";
import {AtTreeGroupComponent} from "../at-tree-group/at-tree-group.component";
import {AtTreeRootComponent}  from "../at-tree-root/at-tree-root.component";

@Component({
             selector: 'at-tree-node',
             template: `
               <li class="at-tree-node"
                   [class.at-tree-node-disabled]="atDisabled"
               >
                 <span class="at-tree-switcher">
                 </span>
                 <span *ngIf="checkable" (click)="checkNode()" class="at-tree-checkbox"
                       [ngClass]="{'at-checkbox--checked':checked}"
                       [class.at-checkbox--disabled]="atDisabled"
                 >
                    <span class="at-checkbox__inner"></span>
                 </span>
                 <div class="at-tree-content-wrapper">
                   <ng-content></ng-content>
                 </div>
               </li>`,
           })
export class AtTreeNodeComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef,
              private tree_root: AtTreeRootComponent,
              private tree: AtTreeComponent,
              private at_tree_service: AtTreeService) {
  }

  _checked

  ngOnInit() {
    this.tree.pushNode(this)
    this.tree_root.pushNode(this)
    this.checkParent()
  }

  @Input() key = ''

  @Input()
  set checked(value) {
    this._checked = value
    this.checkParent()
  }

  get checked() {
    return this._checked
  }

  checkParent() {
    let root_tree: AtTreeComponent = this.at_tree_service.getTopTree(this.tree)
    root_tree._checked             = this.at_tree_service.checkTreeNodeIndeterminate(root_tree).checked
    root_tree.indeterminate        = this.at_tree_service.checkTreeNodeIndeterminate(root_tree).indeterminate
    this.tree._checked             = this.at_tree_service.checkTreeNodeIndeterminate(this.tree).checked
    this.tree.indeterminate        = this.at_tree_service.checkTreeNodeIndeterminate(this.tree).indeterminate
  }

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>()


  private _atDisabled = false

  @Input()
  get atDisabled(): boolean {
    return this._atDisabled;
  }

  set atDisabled(value: boolean) {
    this._atDisabled = value;
  }

  private _checkable = true


  get checkable(): boolean {
    return this._checkable;
  }

  set checkable(value: boolean) {
    this._checkable = value;
    this.cdr.detectChanges();
  }

  checkNode() {
    if (!this.atDisabled) {
      this.checked = !this._checked
      this.checkedChange.emit(this.checked)
      this.at_tree_service.nodeCheckChange = {key: this.key, node: this, checked: this._checked}
    }
  }


}
