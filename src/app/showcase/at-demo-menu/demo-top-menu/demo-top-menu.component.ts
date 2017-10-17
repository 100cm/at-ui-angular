import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-top-menu',
  template: '<ul atMenu [atType]="\'horizontal\'">\n' +
  '  <li atMenuItem>\n' +
  '    <div title><i class="icon icon-home"></i>导航菜单1</div>\n' +
  '  </li>\n' +
  '  <li atSubMenu>\n' +
  '    <div title><i class="icon icon-home"></i>导航菜单2</div>\n' +
  '    <ul itemGroup [label]="\'小分组\'">\n' +
  '      <li atMenuItem>\n' +
  '        分组1\n' +
  '      </li>\n' +
  '      <li atMenuItem>\n' +
  '        分组1\n' +
  '      </li>\n' +
  '    </ul>\n' +
  '  </li>\n' +
  '  <li atSubMenu>\n' +
  '    <div title><i class="icon icon-home"></i>导航菜单3</div>\n' +
  '    <ul atMenuList>\n' +
  '      <li atMenuItem>\n' +
  '        分组1\n' +
  '      </li>\n' +
  '      <li atMenuItem>\n' +
  '        分组1\n' +
  '      </li>\n' +
  '      <li atSubMenu>\n' +
  '        <div title><i class="icon icon-chevron-down at-menu__submenu-icon"></i>分组3</div>\n' +
  '        <ul atMenuList>\n' +
  '          <li atMenuItem>\n' +
  '            分组2\n' +
  '          </li>\n' +
  '          <li atMenuItem>\n' +
  '            分组2\n' +
  '          </li>\n' +
  '        </ul>\n' +
  '      </li>\n' +
  '    </ul>\n' +
  '  </li>\n' +
  '  <li atMenuItem>\n' +
  '    <div title><i class="icon icon-home"></i>导航菜单4</div>\n' +
  '  </li>\n' +
  '</ul>\n',
  styleUrls: ['./demo-top-menu.component.css']
})
export class DemoTopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
