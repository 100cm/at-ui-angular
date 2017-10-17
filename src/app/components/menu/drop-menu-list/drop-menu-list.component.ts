import { Component, OnInit } from '@angular/core';
import {MenuListComponent} from "../menu-list/menu-list.component";

@Component({
  selector: '[atDropMenuList]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./drop-menu-list.component.css']
})
export class DropMenuListComponent extends MenuListComponent implements OnInit {

  ngOnInit() {
  }



}
