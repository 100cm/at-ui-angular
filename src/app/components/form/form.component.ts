import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'at-form',
  template: `
    <ng-content></ng-content>`,

})
export class FormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
