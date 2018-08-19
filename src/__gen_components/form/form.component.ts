import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <ng-content></ng-content>`,

})
export class FormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
