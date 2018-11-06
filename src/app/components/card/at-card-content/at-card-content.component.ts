import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'at-card-content',
  template: `
    <div class="at-card-content" [ngClass]="{'at-card-content-full':atFull}">
      <ng-content></ng-content>
    </div>
  `,
})
export class AtCardContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() atFull = false

}
