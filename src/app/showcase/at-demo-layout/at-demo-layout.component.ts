import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-at-demo-layout',
             templateUrl: './at-demo-layout.component.html',
             styleUrls: ['./at-demo-layout.component.css']
           })
export class AtDemoLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  rows     = new Array(12)
  basicRow = '  <div at-row *ngFor="let row of rows;let i= index" >\n' +
    '        <div at-col [span]="i+1">\n' +
    '          <div class="bg-c-brand-light at-box-row" ></div>\n' +
    '        </div>\n' +
    '        <div  at-col [span]="23-i">\n' +
    '          <div class="bg-c-brand-dark at-box-row">\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>';

  noGutterRow = '  <div at-row *ngFor="let row of rows;let i= index" [noGutter]="true" >\n' +
    '        <div at-col [span]="i+1">\n' +
    '          <div class="bg-c-brand-light at-box-row" ></div>\n' +
    '        </div>\n' +
    '        <div  at-col [span]="23-i">\n' +
    '          <div class="bg-c-brand-dark at-box-row">\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>'

  offsetRow = '      <div at-row [noGutter]="true">\n' +
    '        <div at-col [span]="3" [offset]="3">\n' +
    '          <div class="bg-c-brand-light at-box-row"></div>\n' +
    '        </div>\n' +
    '        <div at-col [span]="3">\n' +
    '          <div class="bg-c-brand-dark at-box-row">\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>'

  flexTypeRow = " flex_type = [\'center\', \'end\', \'start\', \'around\', \'between\'];\n " +
    '     <div *ngFor="let item of flex_type">\n' +
    '        <div class="demo-desc">\n' +
    '          flex-{{item}}\n' +
    '        </div>\n' +
    '        <div at-row [noGutter]="true" [flexType]="item">\n' +
    '          <div at-col [span]="3">\n' +
    '            <div class="bg-c-brand-light at-box-row"></div>\n' +
    '          </div>\n' +
    '          <div at-col [span]="3">\n' +
    '            <div class="bg-c-brand-dark at-box-row">\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div at-col [span]="3">\n' +
    '            <div class="bg-c-brand-dark at-box-row">\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div at-col [span]="3">\n' +
    '            <div class="bg-c-brand-dark at-box-row">\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>'

  flex_type = ['center', 'end', 'start', 'around', 'between'];

  align_type   = ['middle', 'top', 'bottom']
  alignTypeRow = ' align_type = [\'middle\', \'top\', \'bottom\']\n' +
    '      <div *ngFor="let item of align_type">\n' +
    '        <div class="demo-desc">\n' +
    '          flex-{{item}}\n' +
    '        </div>\n' +
    '        <div at-row [alignType]="item">\n' +
    '          <div at-col [span]="3">\n' +
    '            <div class="bg-c-brand-light at-box-row"></div>\n' +
    '          </div>\n' +
    '          <div at-col [span]="3">\n' +
    '            <div class="bg-c-brand-dark at-box-row" style="height: 100px">\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div at-col [span]="3">\n' +
    '            <div class="bg-c-brand-dark at-box-row">\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div at-col [span]="3">\n' +
    '            <div class="bg-c-brand-dark at-box-row">\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>';

  dashboard_one_code = require('../admin/admin.component.html')
  dashboard_two_code = require('../admin/admin.component_two.html')

  x = 4

  changeX() {
    this.x += 1
  }
}
