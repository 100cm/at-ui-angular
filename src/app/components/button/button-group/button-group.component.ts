import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="at-btn-group">
    <ng-content></ng-content>
  </div>
  `

})
export class ButtonGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
