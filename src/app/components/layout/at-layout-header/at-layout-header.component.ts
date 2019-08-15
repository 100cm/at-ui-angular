import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-layout-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
  host: {'[class.at-layout-header]': 'true'}
})
export class AtLayoutHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
