import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: '[inlineMenu]',
  templateUrl: './inline-menu.component.html',
  styleUrls: ['./inline-menu.component.css']
})
export class InlineMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @HostBinding('class.at-menu') at_menu = true

}
