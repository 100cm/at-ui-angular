import { NgModule }                 from '@angular/core';
import { AtI18nPipe }               from './at-i18n.pipe';
import { AT_I18N_SERVICE_PROVIDER } from './at-i18n.service';
import { AT_I18N }                  from './i18n-token';
import zh_CN                      from './languages/zh_CN';

@NgModule({
            imports: [],
            declarations: [AtI18nPipe],
            exports: [AtI18nPipe],
            providers: [
              {provide: AT_I18N, useValue: zh_CN},
              AT_I18N_SERVICE_PROVIDER
            ]
          })
export class AtI18nModule {
}
