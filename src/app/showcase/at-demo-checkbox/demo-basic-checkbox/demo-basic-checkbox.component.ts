import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-basic-checkbox',
  template: `
    <div>
      checkbox 的值为 {{checked}}
    </div>
    <atCheckbox [label]="'check me!'" [(ngModel)]="checked">

    </atCheckbox>
    <hr>
    <div>不可用的多选框</div>
    <atCheckbox [label]="'check me!'" [atDisabled]="true" [(ngModel)]="checked">

    </atCheckbox>`,
  styleUrls: ['./demo-basic-checkbox.component.css']
})
export class DemoBasicCheckboxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  checked = true
}
