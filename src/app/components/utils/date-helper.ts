import { format, getISOWeek } from 'date-fns';

export class DateHelperByDateFns {
  getISOWeek(date: Date): number {
    return getISOWeek(date);
  }

  // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
  // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
  getFirstDayOfWeek(): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
    return 1;
  }

  /**
   * Format a date
   * @see https://date-fns.org/docs/format#description
   * @param date Date
   * @param formatStr format string
   */
  format(date: Date, formatStr: string): string {
    return format(date, formatStr);
  }
}
