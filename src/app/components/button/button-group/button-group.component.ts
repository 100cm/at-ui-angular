import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-button-group',
  template:`<div class="at-btn-group">
    <ng-content></ng-content>
  </div>
  `,

})
export class ButtonGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
