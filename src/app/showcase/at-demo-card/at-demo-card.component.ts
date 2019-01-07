import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-card',
  templateUrl: './at-demo-card.component.html',
  styleUrls: ['./at-demo-card.component.css']
})
export class AtDemoCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  code = `   <at-card style="width: 300px">
        <at-card-header>
          <div style="padding-bottom: 8px">Little Doge</div>
        </at-card-header>
        <at-card-content [atFull]="true">
          <img style="width: 100%"
               src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542076060&di=7e0898e61a0c40660a8faed41b227ce3&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c421572d4edd6ac725b690f148e3.jpg%40900w_1l_2o_100sh.jpg">
        </at-card-content>
        <at-card-footer>
          <button at-button [size]="'middle'" [atType]="'text'" >Link</button>
          <button at-button [size]="'middle'" [atType]="'text'" >Link</button>
        </at-card-footer>
      </at-card>`;
}
