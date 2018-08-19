import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'atCard',
  template: `
    <div class="at-card" [ngClass]="{'at-card-bordered':border}">
      <ng-content select="[card-content]">

      </ng-content>
    </div>`,
})
export class CardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  border: boolean = false

}
