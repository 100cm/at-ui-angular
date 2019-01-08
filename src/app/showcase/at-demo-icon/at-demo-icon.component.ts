import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-icon',
  templateUrl: './at-demo-icon.component.html',
  styleUrls: ['./at-demo-icon.component.css']
})
export class AtDemoIconComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  icon = `<at-icon [type]="'airplay'"></at-icon>`;

  svgIcon = `  <at-icon [svg]="svg">
        <ng-template #svg>
          <svg viewBox="0 0 1024 1024" fill="currentColor" width="1em" height="1em"
               class="ng-tns-c12-112" data-icon="caret-down" aria-hidden="true">
            <path
              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
          </svg>
        </ng-template>
      </at-icon>`;

}
