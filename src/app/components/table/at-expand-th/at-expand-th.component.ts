import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[at-expand-th]',
  template: '<ng-content></ng-content>',
  host: {'[class.at-table__td__expand]': 'true'},
})
export class AtExpandThComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
