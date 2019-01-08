import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-card-footer',
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
