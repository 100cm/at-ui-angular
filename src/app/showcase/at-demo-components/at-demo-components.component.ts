import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-at-demo-components',
  templateUrl: './at-demo-components.component.html',
  styleUrls: ['./at-demo-components.component.css']
})
export class AtDemoComponentsComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  active(href) {
    let location = window.location.hash;
    location = location.replace('#', '');
    const bol = location.indexOf(href) != -1;
    return bol;
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

    {name: '固钉', url: '/components/affix', name_en: 'affix'},

    {
      name: '表格',
      url: '/components/table',
      name_en: 'Table'
    },
    {
      name: '表单',
      url: '/components/form',
      name_en: 'Form'
    },
    {
      name: '卡片',
      url: '/components/card',
      name_en: 'Card'
    },
    {
      name: '抽屉',
      url: '/components/drawer',
      name_en: 'drawer'
    },
    {
      name: '轮播',
      url: '/components/carousel',
      name_en: 'Carousel'
    },
    {
      name: '时间选择',
      url: '/components/datepicker',
      name_en: 'DatePicker'
    },
    {
      name: '上传',
      url: '/components/upload',
      name_en: 'Uploader'
    },
    {
      name: '自动完成',
      url: '/components/auto-complete',
      name_en: 'AutoComplete'
    },
    {
      name: '步骤条',
      url: '/components/steps',
      name_en: 'Setps'
    },
    {
      name: '时间轴',
      url: '/components/time-line',
      name_en: 'timeline'
    },
    {
      name: '树',
      url: '/components/tree',
      name_en: 'tree'
    },
    {
      name: '树',
      url: '/components/tree-select',
      name_en: 'tree-select'
    },
    {
      name: '折叠面板',
      url: '/components/collapse',
      name_en: 'collapse'
    },
    {
      name: '滑动选择',
      url: '/components/slider',
      name_en: 'slider'
    },

    {name: 'tab', url: '/components/tab', name_en: 'tab'},

    {name: '拖拽释放', url: '/components/dnd', name_en: 'DnD'}
  ];

  goRoute(e) {
    e.stopPropagation();
    const a = e.target.children[0];
    if (a && a.attributes.getNamedItem('href')) {
      let link = a.attributes.getNamedItem('href').value;
      link = link.split('#')[1];
      this.route.navigate([link]);
    }

  }
}
