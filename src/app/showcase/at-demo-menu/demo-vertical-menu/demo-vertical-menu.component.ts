import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-vertical-menu',
  template: '<ul atMenu [atType]="\'vertical\'" style="width: 240px">\n' +
  '  <li atMenuItem [active]="true">\n' +
  '    <div title>导航1</div>\n' +
  '  </li>\n' +
  '  <li atMenuItem>\n' +
  '    <div title>导航1</div>\n' +
  '  </li>\n' +
  '  <li atMenuItem>\n' +
  '    <div title>111</div>\n' +
  '  </li>\n' +
  '  <li atSubMenu>\n' +
  '    <div title>导航3</div>\n' +
  '    <ul itemGroup>\n' +
  '      <li atMenuItem>\n' +
  '        <div title>2层导航</div>\n' +
  '      </li>\n' +
  '      <li atSubMenu>\n' +
  '        <div title>导航3</div>\n' +
  '        <ul itemGroup>\n' +
  '          <li atMenuItem>\n' +
  '            <div title>三层</div>\n' +
  '          </li>\n' +
  '        </ul>\n' +
  '      </li>\n' +
  '    </ul>\n' +
  '  </li>\n' +
  '</ul>',
  styleUrls: ['./demo-vertical-menu.component.css']
})
export class DemoVerticalMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
