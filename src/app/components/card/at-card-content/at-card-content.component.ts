import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'at-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="at-card-content" [ngClass]="{'at-card-content-full':atFull}">
      <ng-content></ng-content>
    </div>
  `
})
export class AtCardContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() atFull: boolean = false;

}
