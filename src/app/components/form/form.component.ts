import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `
})
export class FormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
