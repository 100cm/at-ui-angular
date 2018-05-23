import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-affix',
  templateUrl: './at-demo-affix.component.html',
  styleUrls: ['./at-demo-affix.component.css']
})
export class AtDemoAffixComponent implements OnInit {

  constructor() {
  }

  basic = require('./demo-affix-basic/demo-affix-basic.component.html')

  ngOnInit() {
  }

}
