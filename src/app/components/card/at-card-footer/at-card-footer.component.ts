import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-card-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content>

    </ng-content>
  `,
  host: {'[class.at-card-footer]': 'true'}
})
export class AtCardFooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
