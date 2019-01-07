import { Component, OnInit } from '@angular/core';

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

  baseButton = '<button at-button [atType]="\'primary\'">主要按钮</button>\n' +
    ' <button at-button [atType]="\'default\'">次要按钮</button>\n' +
    ' <button at-button [atType]="\'text\'">文字按钮</button>';
  disableButton = '<button at-button disabled [atType]="\'primary\'">主要按钮</button>\n' +
    ' <button at-button disabled hollow [atType]="\'default\'">次要按钮</button>\n' +
    ' <button at-button disabled [atType]="\'text\'">文字按钮</button>';
  colorsButton = '      <div>\n' +
    '        <div class="row">\n' +
    '          <button at-button [atType]="\'default\'" hollow>默认按钮</button>\n' +
    '          <button at-button [atType]="\'primary\'" hollow>主要按钮</button>\n' +
    '          <button at-button [atType]="\'success\'" hollow>成功按钮</button>\n' +
    '          <button at-button [atType]="\'error\'" hollow>危险按钮</button>\n' +
    '          <button at-button [atType]="\'warning\'" hollow>警告按钮</button>\n' +
    '          <button at-button [atType]="\'info\'" hollow>信息按钮</button>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '          <button at-button [atType]="\'default\'">默认按钮</button>\n' +
    '          <button at-button [atType]="\'primary\'">主要按钮</button>\n' +
    '          <button at-button [atType]="\'success\'">成功按钮</button>\n' +
    '          <button at-button [atType]="\'error\'">危险按钮</button>\n' +
    '          <button at-button [atType]="\'warning\'">警告按钮</button>\n' +
    '          <button at-button [atType]="\'info\'">信息按钮</button>\n' +
    '        </div>\n' +
    '      </div>';

  iconsButton = '      <div>\n' +
    '        <div class="row">\n' +
    '          <button at-button [atType]="\'default\'" [atIcon]="\'icon-download\'">下载资源</button>\n' +
    '          <button at-button [atType]="\'default\'" [atIcon]="\'icon-user-plus\'">添加用户</button>\n' +
    '          <button at-button [atType]="\'default\'" [atIcon]="\'icon-edit\'"></button>\n' +
    '          <button at-button [atType]="\'primary\'" [atIcon]="\'icon-search\'"></button>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '          <button at-button [atType]="\'default\'" [atIcon]="\'icon-edit\'" [atShape]="\'circle\'"></button>\n' +
    '          <button at-button [atType]="\'primary\'" [atIcon]="\'icon-search\'" [atShape]="\'circle\'"></button>\n' +
    '        </div>\n' +
    '      </div>';
  loadingButton = '      <button at-button [iconLoading]="true">加载中</button>\n' +
    '      <button at-button [iconLoading]="true" [size]="\'small\'"></button>\n' +
    '      <button at-button [iconLoading]="true" [atShape]="\'circle\'"></button>';
  CombineButton = '      <at-button-group>\n' +
    '        <button at-button [iconLoading]="true">加载中</button>\n' +
    '        <button at-button [iconLoading]="true">加载中</button>\n' +
    '        <button at-button [iconLoading]="true">加载中</button>\n' +
    '      </at-button-group>';
  sizeButton = '     <button at-button [size]="\'large\'">大</button>\n' +
    '      <button at-button [size]="\'default\'">中</button>\n' +
    '      <button at-button [size]="\'small\'">小</button>\n' +
    '      <button at-button [size]="\'smaller\'">更小</button>';
}
