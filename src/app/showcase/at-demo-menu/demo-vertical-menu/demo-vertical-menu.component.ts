import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-vertical-menu',
  template: `
    <ul atMenu [atType]="'vertical'" style="width: 240px">
      <li atMenuItem [active]="true">
        <div title>导航1</div>
      </li>
      <li atMenuItem>
        <div title>导航1</div>
      </li>
      <li atMenuItem>
        <div title>111</div>
      </li>
      <li atSubMenu>
        <div title>导航3</div>
        <ul itemGroup>
          <li atMenuItem>
            <div title>2层导航</div>
          </li>
          <li atSubMenu>
            <div title>导航3</div>
            <ul itemGroup>
              <li atMenuItem>
                <div title>
                  <atPopover>
                    <span popTrigger>asd</span>
                    <div popContent>
                      fuck u
                    </div>
                  </atPopover>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  `,
  styleUrls: ['./demo-vertical-menu.component.css']
})
export class DemoVerticalMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
