import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
  host: {'[class.at-card-header]': 'true'}
})
export class AtCardHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
