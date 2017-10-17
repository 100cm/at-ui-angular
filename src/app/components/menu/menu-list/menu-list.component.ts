import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: '[atMenuList]',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @HostBinding('class.at-dropdown-menu') menu = true

}
