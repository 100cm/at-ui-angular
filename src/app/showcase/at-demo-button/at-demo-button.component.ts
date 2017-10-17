import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-at-demo-button',
  templateUrl: './at-demo-button.component.html',
  styleUrls: ['./at-demo-button.component.css']
})
export class AtDemoButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  baseButton = '<button atButton [atType]="\'primary\'">主要按钮</button>\n' +
    ' <button atButton [atType]="\'default\'">次要按钮</button>\n' +
    ' <button atButton [atType]="\'text\'">文字按钮</button>'
  disableButton = '<button atButton disabled [atType]="\'primary\'">主要按钮</button>\n' +
    ' <button atButton disabled hollow [atType]="\'default\'">次要按钮</button>\n' +
    ' <button atButton disabled [atType]="\'text\'">文字按钮</button>';
  colorsButton = '      <div>\n' +
    '        <div class="row">\n' +
    '          <button atButton [atType]="\'default\'" hollow>默认按钮</button>\n' +
    '          <button atButton [atType]="\'primary\'" hollow>主要按钮</button>\n' +
    '          <button atButton [atType]="\'success\'" hollow>成功按钮</button>\n' +
    '          <button atButton [atType]="\'error\'" hollow>危险按钮</button>\n' +
    '          <button atButton [atType]="\'warning\'" hollow>警告按钮</button>\n' +
    '          <button atButton [atType]="\'info\'" hollow>信息按钮</button>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '          <button atButton [atType]="\'default\'">默认按钮</button>\n' +
    '          <button atButton [atType]="\'primary\'">主要按钮</button>\n' +
    '          <button atButton [atType]="\'success\'">成功按钮</button>\n' +
    '          <button atButton [atType]="\'error\'">危险按钮</button>\n' +
    '          <button atButton [atType]="\'warning\'">警告按钮</button>\n' +
    '          <button atButton [atType]="\'info\'">信息按钮</button>\n' +
    '        </div>\n' +
    '      </div>';

  iconsButton = '      <div>\n' +
    '        <div class="row">\n' +
    '          <button atButton [atType]="\'default\'" [atIcon]="\'icon-download\'">下载资源</button>\n' +
    '          <button atButton [atType]="\'default\'" [atIcon]="\'icon-user-plus\'">添加用户</button>\n' +
    '          <button atButton [atType]="\'default\'" [atIcon]="\'icon-edit\'"></button>\n' +
    '          <button atButton [atType]="\'primary\'" [atIcon]="\'icon-search\'"></button>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '          <button atButton [atType]="\'default\'" [atIcon]="\'icon-edit\'" [atShape]="\'circle\'"></button>\n' +
    '          <button atButton [atType]="\'primary\'" [atIcon]="\'icon-search\'" [atShape]="\'circle\'"></button>\n' +
    '        </div>\n' +
    '      </div>';
  loadingButton = '      <button atButton [iconLoading]="true">加载中</button>\n' +
    '      <button atButton [iconLoading]="true" [size]="\'small\'"></button>\n' +
    '      <button atButton [iconLoading]="true" [atShape]="\'circle\'"></button>';
  CombineButton = '      <at-button-group>\n' +
    '        <button atButton [iconLoading]="true">加载中</button>\n' +
    '        <button atButton [iconLoading]="true">加载中</button>\n' +
    '        <button atButton [iconLoading]="true">加载中</button>\n' +
    '      </at-button-group>';
  sizeButton = '     <button atButton [size]="\'large\'">大</button>\n' +
    '      <button atButton [size]="\'default\'">中</button>\n' +
    '      <button atButton [size]="\'small\'">小</button>\n' +
    '      <button atButton [size]="\'smaller\'">更小</button>';
}
