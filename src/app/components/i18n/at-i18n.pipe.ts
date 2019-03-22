/* tslint:disable:pipe-impure */
import { Pipe, PipeTransform } from '@angular/core';
import { AtI18nService } from './at-i18n.service';

@Pipe({
  name: 'atI18n',
  pure: false
})
export class AtI18nPipe implements PipeTransform {

  constructor(private _locale: AtI18nService) {
  }

  transform(path: string, keyValue?: object): string {
    return this._locale.translate(path, keyValue);
  }
}
