import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-basic-checkbox',
  template: `
    <div>
      checkbox 的值为 {{checked}}
    </div>
    <at-checkbox [label]="'check me!'" [(ngModel)]="checked">

    </at-checkbox>
    <hr>
    <div>半选模式</div>
    <at-checkbox [label]="'check me!'" [atDisabled]="true" [indeterminate]="true" [(ngModel)]="checked">

    </at-checkbox>`,
  styleUrls: ['./demo-basic-checkbox.component.css']
})
export class DemoBasicCheckboxComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  checked = true;
}
