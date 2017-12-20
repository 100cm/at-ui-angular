import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  template:`<ng-content>
    
  </ng-content>`,
})
export class TabHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
