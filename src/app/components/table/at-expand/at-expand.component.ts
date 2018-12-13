import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[at-expand]',
  template: `
    <div class="at-table__td__icon">
        <span class="at-table__td__expand__icon" (click)="clickExpand()"><i
          class="icon" [class.icon-plus-square]="!atExpand" [class.icon-minus-square]="atExpand"></i></span>
    </div>
  `,
  host: {'[class.at-table__td__expand]': 'true'},
})
export class AtExpandComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() atExpand = false

  @Output() atExpandChange = new EventEmitter()


  clickExpand() {
    this.atExpand = !this.atExpand
    this.atExpandChange.emit(this.atExpand)
  }

}
