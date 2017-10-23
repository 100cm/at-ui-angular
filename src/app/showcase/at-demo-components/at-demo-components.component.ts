import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-components',
  templateUrl: './at-demo-components.component.html',
  styleUrls: ['./at-demo-components.component.css']
})
export class AtDemoComponentsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  active(href) {
    let location = window.location.hash
    location = location.replace("#", '')
    let bol = location.indexOf(href) != -1
    return bol
  }

  routes = [
    {
      name: '模态框',
      url: '/components/modal',
      name_en: 'Modal'
    }, {
      name: '消息',
      url: '/components/message',
      name_en: 'Message'
    },
    {
      name: '弹出框',
      url: '/components/popover',
      name_en: 'Popover'
    }, {
      name: '进度条',
      url: '/components/progress',
      name_en: 'Progress'
    },

    {
      name: '文字提示',
      url: '/components/tooltip',
      name_en: 'ToolTip'
    },

    {
      name: '表格',
      url: '/components/table',
      name_en: 'Table'
    }
  ]

}
