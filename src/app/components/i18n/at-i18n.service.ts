import {AtI18nInterface}                                                  from "./at-i18n.interface";
import {Inject, Injectable, InjectionToken, Optional, Provider, SkipSelf} from '@angular/core';
import zh_CN                                                              from "./languages/zh_CN";
import {BehaviorSubject, Observable}                                      from 'rxjs';
import {AT_I18N}                                                          from "./i18n-token";

@Injectable()
export class AtI18nService {

  constructor(@Inject(AT_I18N) locale: AtI18nInterface) {
    this.setLocale(locale || zh_CN);
  }

  private _locale: AtI18nInterface;

  private _change = new BehaviorSubject<AtI18nInterface>(this._locale)

  get localChange(): Observable<AtI18nInterface> {
    return this._change.asObservable();
  }


  get locale(): AtI18nInterface {
    return this._locale;
  }

  set locale(value: AtI18nInterface) {
    this._locale = value;
  }

  setLocale(language: AtI18nInterface) {
    this._locale = language
    this._change.next(language)
  }

  translate(path, data?) {
    let content = this._getObjectPath(this._locale, path) as string;
    if (typeof content === 'string') {
      if (data) {
        Object.keys(data).forEach((key) => content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]));
      }
      return content;
    }
    return path;
  }

  private _getObjectPath(obj: object, path: string): string | object | any { // tslint:disable-line:no-any
    let res     = obj;
    const paths = path.split('.');
    const depth = paths.length;
    let index   = 0;
    while (res && index < depth) {
      res = res[paths[index++]];
    }
    return index === depth ? res : null;
  }
}

export function AT_LOCALE_SERVICE_PROVIDER_FACTORY(exist: AtI18nService, locale: AtI18nInterface): AtI18nService {
  return exist || new AtI18nService(locale);
}

export const AT_I18N_SERVICE_PROVIDER: Provider = {
  provide: AtI18nService,
  useFactory: AT_LOCALE_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), AtI18nService], AT_I18N]
};
