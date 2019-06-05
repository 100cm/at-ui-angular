import { Pipe, PipeTransform } from '@angular/core';
import { BladeDate } from './blade-date';

@Pipe({
  name: 'atFormat'
})
export class AtFormatPipe implements PipeTransform {

  transform(value: Date, formatString: string): string {
    if (value) {
      return new BladeDate(value).format(formatString);
    } else {
      return '';
    }
  }
}
