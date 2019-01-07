import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-dnd',
  templateUrl: './at-demo-dnd.component.html',
  styleUrls: ['./at-demo-dnd.component.css']
})
export class AtDemoDndComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = `
  <div>
  <label>拖拽BETA</label>
</div>

<at-dnd-container [(ngModel)]="bindData">
  <div at-row [atGutter]="32" style="border: 1px solid #FFA710">
    <ng-container *ngFor="let item of bindData.children;let i = index">

      <ng-container *ngIf="item.children?.length">
        <at-dnd-item  class="col col-12 padding-col" [moveElement]="parent_move"
                     [(ngModel)]="bindData.children[i]">
          <div at-drag-trigger class="move" draggable="true">
            <at-icon [type]="'move'"></at-icon>
          </div>
          {{item.key}}
          <div #parent_move  style="border: 1px solid #9B9B9B">
              <ng-container *ngFor="let child of item.children;let k = index">
                <at-dnd-item [moveElement]="child_move"
                             [(ngModel)]="bindData.children[i].children[k]">

                  <div  at-drag-trigger class="move" draggable="true">
                    <at-icon [type]="'move'"></at-icon>
                  </div>
                  <div #child_move class="bind-data child-bind">
                    child-{{child.key}}
                  </div>
                </at-dnd-item>
              </ng-container>
          </div>
        </at-dnd-item>

      </ng-container>

      <ng-container *ngIf="!item.children?.length">
        <at-dnd-item [moveElement]="move" class="col col-4 padding-col"
                     [(ngModel)]="bindData.children[i]">

          <div at-drag-trigger class="move" draggable="true">
            <at-icon [type]="'move'"></at-icon>
          </div>
          <div #move class="bind-data">
            {{item.key}}
          </div>
        </at-dnd-item>
      </ng-container>
    </ng-container>

  </div>
</at-dnd-container>
`;
}
