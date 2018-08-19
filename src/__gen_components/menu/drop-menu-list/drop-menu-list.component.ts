import {Component, OnInit, Input, ElementRef, Renderer2} from '@angular/core';
import {MenuListComponent} from "../menu-list/menu-list.component";

@Component({
  selector: '[atDropMenuList]',
  template: `
    <ng-content></ng-content>`,
})
export class DropMenuListComponent extends MenuListComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private el: ElementRef, private render: Renderer2) {
    super()
  }




}
