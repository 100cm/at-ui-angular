import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-inline-menu',
  template: '<ul atMenu [atType]="\'inline\'" style="width: 240px">\n' +
  '  <li atMenuItem>\n' +
  '    <div title><i class="icon icon-settings"></i>内置菜单1</div>\n' +
  '  </li>\n' +
  '  <li atMenuItem>\n' +
  '    <div title><i class="icon icon-settings"></i>内置菜单1</div>\n' +
  '  </li>\n' +
  '  <li atSubMenu>\n' +
  '    <div title><i class="icon icon-settings"></i>内置菜单3<i class="icon icon-chevron-down at-menu__submenu-icon"></i></div>\n' +
  '    <ul inlineMenu>\n' +
  '    <ul itemGroup>\n' +
  '      <li atMenuItem>\n' +
  '        <div title>内置菜单1</div>\n' +
  '      </li>\n' +
  '      <li atMenuItem>\n' +
  '        <div title>内置菜单1</div>\n' +
  '      </li>\n' +
  '      <li atMenuItem>\n' +
  '        <div title>内置菜单1</div>\n' +
  '      </li>\n' +
  '    </ul>\n' +
  '    </ul>\n' +
  '  </li>\n' +
  '</ul>\n',
  styleUrls: ['./demo-inline-menu.component.css']
})
export class DemoInlineMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
