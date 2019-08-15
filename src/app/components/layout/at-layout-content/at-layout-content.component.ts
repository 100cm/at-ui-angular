import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-layout-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
  host: {'[class.at-layout-content]': 'true'}
})
export class AtLayoutContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
