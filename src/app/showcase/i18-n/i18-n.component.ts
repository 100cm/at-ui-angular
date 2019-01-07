import { Component, OnInit } from '@angular/core';
import { AtI18nService }     from '../../components/i18n/at-i18n.service';
import en_US               from '../../components/i18n/languages/en_US';
import zh_CN               from '../../components/i18n/languages/zh_CN';

@Component({
             selector: 'app-i18-n',
             templateUrl: './i18-n.component.html',
             styleUrls: ['./i18-n.component.css']
           })
export class I18NComponent implements OnInit {

  constructor(private at_i18n_service: AtI18nService) {
  }

  ngOnInit() {
  }

  local = 'en';

  clickSwitch() {
    if (this.local == 'en') {
      this.at_i18n_service.setLocale(zh_CN);
      this.local = 'zh';
    } else {
      this.local = 'en';
      this.at_i18n_service.setLocale(en_US);
    }

  }

  code = `

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

/** 配置 at-ui 国际化 **/
import { AT_I18N, en_US } from 'at-ng';

@NgModule({

  ...
  imports     : [...],
  providers   : [ { provide: AT_I18N, useValue: en_US } ]
})
export class AppModule { }
  `;

  code2 = `
constructor(private at_i18n_service: AtI18nService,) {
}

switchLanguage() {
  this.at_i18n_service.setLocale(en_US);
}
`;

}
