import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'at-card',
  template: `
    <div [ngClass]="{'at-card-bordered':border}">
      <ng-content>

      </ng-content>
    </div>`,
  host: {'[class.at-card]': 'true'}
})
export class CardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  border: boolean = false;

}
